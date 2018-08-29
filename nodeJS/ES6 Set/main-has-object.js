const mySet = new Set();
const myArray = [];
const setSize = 1000000;
let ticks = new Date().getTime();


console.log(' # Start Set add');
ticks = new Date().getTime();
for (let i = 0 ; i < setSize ; i++) {
	myArray.push({test: true, index: i, someText: 'Yeah ' + i, anotherObject: {whatweFlip: 'haha'}});
	mySet.add(myArray[i]);
}
console.log(' # End Set add');

console.log(' # Start Set has');
ticks = new Date().getTime();
for (let i = 0 ; i < setSize ; i++) {
	mySet.has(myArray[i]);
}
console.log(' # End Set has', new Date().getTime() - ticks, 'ms');
