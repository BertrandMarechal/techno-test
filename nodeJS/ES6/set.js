const mySet = new Set();
const myArray = [];
const setSize = 100000;
let ticks = new Date().getTime();

console.log('## Start Set');
console.log(' # Start Set add');
ticks = new Date().getTime();
for (let i = 0 ; i < setSize ; i++) {
	mySet.add(i);
}
console.log(' # End Set add', new Date().getTime() - ticks, 'ms');

console.log(' # Start Set has');
ticks = new Date().getTime();
for (let i = 0 ; i < setSize ; i++) {
	mySet.has(i);
}
console.log(' # End Set has', new Date().getTime() - ticks, 'ms');

console.log(' # Start Set delete');
ticks = new Date().getTime();
for (let i = 0 ; i < setSize ; i++) {
	mySet.delete(i);
}
console.log(' # End Set delete', new Date().getTime() - ticks, 'ms');
console.log('## End Set');

console.log('## Start array');
console.log(' # Start array add');
ticks = new Date().getTime();
for (let i = 0 ; i < setSize ; i++) {
	myArray.push(i);
}
console.log(' # End array add', new Date().getTime() - ticks, 'ms');

console.log(' # Start array has');
ticks = new Date().getTime();
for (let i = 0 ; i < setSize ; i++) {
	myArray.indexOf(i) > -1;
}
console.log(' # End array has', new Date().getTime() - ticks, 'ms');

console.log(' # Start array delete');
ticks = new Date().getTime();
for (let i = setSize - 1 ; i > -1; i--) {
	myArray.splice(0,i);
}
console.log(' # End array delete', new Date().getTime() - ticks, 'ms');
console.log('## End array');