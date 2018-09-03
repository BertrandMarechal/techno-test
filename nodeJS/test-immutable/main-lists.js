const Immutable = require('immutable');
const greekAlphabet = [
    'alpha',
    'beta',
    'gamma',
    'delta',
    'epsilon',
    'zeta',
    'eta',
    'theta',
    'iota',
    'kappa',
    'lambda',
    'mu',
    'nu',
    'xi',
    'omicron',
    'pi',
    'rho',
    'sigma',
    'tau',
    'upsilon',
    'phi',
    'chi',
    'omega'
];


let firstList = Immutable.fromJS(greekAlphabet);
console.log(firstList);
console.log(firstList.get(5));
console.log(firstList.get(-5));

const secondList = Immutable.fromJS([
    [
        [
            ...greekAlphabet
        ],
        ...greekAlphabet
    ],
    ...greekAlphabet
]);

console.log(secondList.getIn([0,0,0]));

console.log(firstList.set(1, 'b'));
console.log(firstList.set(26, 'z'));
console.log(firstList.set(firstList.size, 'zedeuh'));
console.log(firstList.pop());
console.log(firstList.push('last'));
console.log(firstList.unshift('first'));
console.log(firstList.delete(0));
console.log(firstList.clear());