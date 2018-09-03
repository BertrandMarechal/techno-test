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

const latinAlphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

const numbers = [
    1,2,3,4,5,6,7,8,9,10
];

const firstList = Immutable.fromJS(greekAlphabet);
const secondList = Immutable.fromJS(latinAlphabet);
const thirdList = Immutable.fromJS(numbers);
console.log(secondList.merge(firstList, thirdList))

const resolution = (oldRecord, newRecord) => {
    if (oldRecord < newRecord) {
        return oldRecord;
    }
    return newRecord;
}

console.log(secondList.mergeWith(resolution,firstList, thirdList));

const resolutionIndex = (oldRecord, newRecord, index) => {
    if (index%2) {
        return oldRecord;
    } else {
        return newRecord;
    }
}

console.log(secondList.mergeWith(resolutionIndex,firstList, thirdList));