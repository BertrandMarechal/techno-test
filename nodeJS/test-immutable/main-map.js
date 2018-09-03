const Immutable = require('immutable');

let firstMap = Immutable.Map();
console.log('Create empty map:', firstMap);

// create from array
firstMap = Immutable.Map([
    ['obi1', 'kenobi'],
    ['macewin2', 'yoda'],
]);
console.log('Create map from JS array:', firstMap);

// create from non nested JS object
firstMap = Immutable.Map({
    obi1: 'kenobi',
    macewin2: 'yoda'
});
console.log('Create map from js onject:', firstMap);

// create from list of arguments
firstMap = Immutable.Map.of('obi1', 'kenobi','macewin2', 'yoda');
console.log('Create map from list of args:', firstMap);

// create from an iterator
firstMap = Immutable.Map(['obi1', 'yoda', 'macewin2'].map((x, index) => ['jedi' + index, x]));
console.log('Create map from iterator:', firstMap);



// a sub object would not directly be converted as Map
let deepMap = Immutable.Map({
    sub: {
        iAmSub: true
    }
});
console.log('Create map from JS object, but nested obj is not map:', Immutable.Map.isMap(deepMap.getIn(['sub'])));
//we have to get it "fromJS" to do it
deepMap = Immutable.Map(Immutable.fromJS({
    sub: {
        iAmSub: true
    }
}));
console.log('Create map from JS object, and nested obj is map:', Immutable.Map.isMap(deepMap.getIn(['sub'])));


console.log('Get one value:', firstMap.get('jedi0'));
console.log('Get value with default value:', firstMap.get('jedi3', 'that might be a sith'));

console.log('Get first value:', firstMap.first());
console.log('Get last value:', firstMap.last());

console.log('Check if we have key:', firstMap.has('jedi0'));
console.log('Check if we have key:', firstMap.has('jedi5'));
console.log('Check if we have value:', firstMap.contains('yoda'));

console.log('Get value in:', deepMap.getIn(['sub', 'iAmSub']));

console.log('Check if we have key deep:', deepMap.hasIn(['sub', 'iAmSub']));
console.log('Check if we have key deep:', deepMap.hasIn(['sub', 'iAmNot   Sub']));

console.log('Get the list of keys:', [...firstMap.keys()].join(', '));
console.log('Get the list of values:', [...firstMap.values()].join(', '));
console.log('Get the list of keys and values:', [...firstMap.entries()].join(', '));

console.log('Set a value - create if not exists:', firstMap.set('jedi3', 'luke skywalker'));
console.log('Set a value - replaces if exists:', firstMap.set('jedi3', 'qui gon Gin'));
console.log('Set a deep value:', deepMap.setIn(['sub', 'iAmSub'], false));

console.log('Update to have more control than set - all map', firstMap.update((jedis) => {
    return jedis.set('jedi3', 'anakin skywalker');
}));
console.log('Update to have more control than set - one attribute', firstMap.update('jedi3',(jedi) => {
    return 'luke skywalker';
}));
console.log('Update to have more control than set - one attribute - with default', firstMap.update('jedi4', 'anakin',(jedi) => {
    return jedi + ' skywalker';
}));

console.log('test');

