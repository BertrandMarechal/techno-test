const arr = [{
    id: 1,
    text: '1',
    subObject: {
        id: 10
    }
},{
    id: 2,
    text: '2',
    subObject: {
        id: 20
    }
},{
    id: 3,
    text: '3'
},{
    text: 'Bert',
    subObject: {
        id: 40
    }
}];
// pluk
const newArr = arr.map(({id}) => id).filter(Boolean);
console.log(newArr);

// flatten
const newerArr = [];
for(const {id, text} of arr) {
    newerArr.push(id, text);
}
console.log(newerArr);

// url parse
const url = "https://www.test.com/folder/file.html";
[fullUrl, protocol, fullHost, fullPath] = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);

const urlParsed = {
    fullUrl: fullUrl,
    protocol: protocol,
    fullHost: fullHost,
    fullPath: fullPath
};
console.log(urlParsed);

// the following won't work as one of the objects does not have sub object
/*
for({ id , subObject: { id: subid }} of arr) {
    console.log(id, subid);
}
*/
for({ id , subObject: { id: subid } = {id: -1}} of arr) {
    console.log(id, subid);
}
for({ id , subObject: { id: subid }} of arr.filter(({subObject}) => subObject)) {
    console.log(id, subid);
}

// destruct an interesting object

const req = {
    a: {
        b: {
            c: {
                d: 'e'
            }
        }
    }
};

const {
    a: {
        b: {
            c: {
                d
            }
        }
    }
} = req;
console.log(d);

