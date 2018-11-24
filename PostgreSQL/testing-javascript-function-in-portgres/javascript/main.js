const pgConnectionString = 'postgres://root:route@localhost/postgres';
const pgp = require('pg-promise')();
var db = pgp(pgConnectionString);

// const functionTest = 'function (a) {return a * a}';
// const f = Function(`return ${functionTest}`);
// console.log(f(3));

// return;


const _converter = {
    id: 'objId',
    name: (a) => a.firstName + ' ' + a.lastName,
    system: 5
};

function convertField(object, converterField) {
    const type = typeof converterField;    
    if (type === 'string') {
        return object[converterField];
    } else if (type === 'number') {
        return converterField
    } else if (type === 'function') {
        return converterField(object);
    }
}
function convert(object, converter) {
    return {
        ...Object.keys(converter).reduce((agg, key) => {
            return {
                ...agg,
                [key]: convertField(object, converter[key])
            }
            return agg;
        }, {})
    };
}
const outputObject = convert({
    objId: 12,
    firstName: 'Bert',
    lastName: 'Marech',
    system: 60595
}, _converter);

console.log(JSON.stringify(outputObject));


function convertJsonObjectForDb(obj) {
    return {
        ...Object.keys(obj).reduce((agg, key) => {
            if (typeof obj[key] === 'function') {
                agg[key] = obj[key].toString();
            } else {
                agg[key] = obj[key];
            }
            return agg;
        }, {})
    };
}

function convertDbObjectForJson(obj) {
    return {
        ...Object.keys(obj).reduce((agg, key) => {
            if (typeof obj[key] === 'string' && obj[key].match(/\(.*?\)/)) {
                eval(`agg[key] = ${obj[key]};`);
            } else {
                agg[key] = obj[key];
            }
            return agg;
        }, {})
    };
}
async function insert() {
    try {
        return await db.any(`INSERT INTO postgres_json_test (name, f, f_in_object) VALUES ('test', $1, $2)`, [
            _converter.name.toString(), convertJsonObjectForDb(_converter)
        ]);
    } catch (error) {
        console.log(error);
    }
}
async function del() {
    try {
        return await db.any(`DELETE FROM postgres_json_test`);
    } catch (error) {
        console.log(error);
    }
}
async function select() {
    try {
        return await db.any(`select f, f_in_object FROM  postgres_json_test WHERE name = 'test'`);
    } catch (error) {
        console.log(error);
    }
}

async function main () {
    await del();
    await insert();
    const result = await select();
    console.log(result[0].f_in_object);
    result[0].f_in_object = convertDbObjectForJson(result[0].f_in_object);
    console.log(result[0].f_in_object);
    const outputObjectFromDb = convert({
        objId: 12,
        firstName: 'Bert',
        lastName: 'Marech',
        system: 60595
    }, result[0].f_in_object);
    console.log(JSON.stringify(outputObjectFromDb));
    pgp.end();
}
main();