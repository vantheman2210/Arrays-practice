'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([ [ 'USD', 'United States dollar' ], [ 'EUR', 'Euro' ], [ 'GBP', 'Pound sterling' ] ]);

const movements = [ 200, 450, -400, 3000, -650, -130, 70, 1300 ];

const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [ 200, 450, -400, 3000, -650, -130, 70, 1300 ],
	interestRate: 1.2, // %
	pin: 1111
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [ 5000, 3400, -150, -790, -3210, -1000, 8500, -30 ],
	interestRate: 1.5,
	pin: 2222
};

const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [ 200, -200, 340, -300, -20, 50, 400, -460 ],
	interestRate: 0.7,
	pin: 3333
};

const account4 = {
	owner: 'Sarah Smith',
	movements: [ 430, 1000, 700, 50, 90 ],
	interestRate: 1,
	pin: 4444
}; 
const accounts = [ account1, account2, account3, account4 ];

/////////////////////////////////////////////////

let arr = [ 'a', 'b', 'c', 'd', 'e' ];

// Slice
// Does not mutate, returns new array
console.log('------Slice method------');
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // Position 4 not included in new array
console.log(arr.slice(-2)); // Last two elements
console.log(arr.slice(-1)); // Last element
console.log(arr.slice(1, -2));
console.log(arr.slice()); // Shallow copy

// Splice
// Mutates original array. Loses extracted elements
console.log('-------Splice method-------');
// console.log(arr.splice(2));
arr.splice(-1); // Deletes last element
arr.splice(1, 2); // Second argument is for how many elements to delete
console.log(arr);

// Reverse
// Mutates array
console.log('-------Reverse method-------');
arr = [ 'a', 'b', 'c', 'd', 'e' ];
const arr2 = [ 'j', 'i', 'h', 'g', 'f' ];
console.log(arr2.reverse());
console.log(arr2);

// Concat
// Does not mutate array
console.log('-------Concat method-------');
const letters = arr.concat(arr2);
console.log(letters);

// Join
// Does not mutate array
console.log('-------Join method-------');
console.log(letters.join(' - '));

// At Method
//
console.log('-------AT method-------');
const arr3 = [ 23, 11, 64 ];
console.log(arr3.at(0));
// Getting last element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));
// Works on strings
console.log('Vanja'.at(0));
// ForEach Method
//
console.log('-------ForEach method-------');
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, move] of movements.entries()) {
// 	if (move > 0) {
// 		console.log(`${i + 1}: You deposited ${move} to your account`);
// 	} else {
// 		console.log(`${i + 1}: You withdrew ${Math.abs(move)} from your account`);
// 	}
// }

// There are 3 arguments (current element, index, array)
// Cannot break out of for each loop
// If you need to break out use for of loop
movements.forEach((move, i) => {
	if (move > 0) {
		console.log(`${i + 1}: You deposited ${move} to your account`);
	} else {
		console.log(`${i + 1}: You withdrew ${Math.abs(move)} from your account`);
	}
});
// ForEach with maps and sets
/*
  const currencies = new Map([ [ 'USD', 'United States dollar' ], [ 'EUR', 'Euro' ], [ 'GBP', 'Pound sterling' ] ]);
*/

// MAP
console.log('-------ForEach MAP--------');
currencies.forEach((value, key, map) => {
	console.log(`${key}: ${value}`);
});

// SET
// Sets have no keys, so second parameter is useless
console.log('-------ForEach SET--------');
const currenciesUnique = new Set([ 'USD', 'GBP', 'EUR', 'USD', 'EUR' ]);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
	console.log(`${value}: ${value}`);
});

// Map method
// Does not mutate, returns a new array
console.log('---------MAP Method---------');
const eurToUsd = 1.1;
const movementsUsd = movements.map((mov) => mov * eurToUsd);
console.log(movements);
console.log(movementsUsd);

/*
const movementsUsdFor = []
for(const mov of movements) { 
	movementsUsdFor.push(mov * eurToUsd)
};
console.log(movementsUsdFor)*/
const movementsDescriptions = movements.map(
	(mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);

// Filter method
// Does not mutate, returns a new array
console.log('---------Filter Method---------');

const deposits = movements.filter((mov) => mov > 0);
console.log(movements);
console.log(deposits);

const despositsFor = [];
for (const mov of movements) if (mov > 0) despositsFor.push(mov);
console.log(despositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

// Filter method
// Boils down array to a single value
// Arguments = (acc, curr)
// Accumulator => snowball
console.log('---------Reduce Method---------');
console.log(movements);

const balance = movements.reduce((acc, curr, i, arr) => {
	console.log(`Iteration ${i}: ${acc}`)
	return acc + curr
}, 0)
console.log('Balance: ' + balance)

// Using for of loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2)

// Maximum value
const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);
// Expanded solution
// const max = movements.reduce((acc, mov) => {
// 	if(acc > mov)
// 	return acc;
// 	else
// 	return mov;
// }, movements[0]);
console.log(max);

// Chaining methods
console.log('---------Chaining methods--------');
// const eurToUsd: 1.1
// Pipeline
const totalUsd = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd) // Use arr argument to check for bugs in code
.reduce((acc, curr) => acc + curr, 0); // cannot chain methods that do not return an array
console.log(totalUsd);

// Find method 
// Returns first element that is true
console.log('------Find method---------');
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const acc of accounts) console.log(acc.owner = 'Jessica Davis')

// FindIndex method 
console.log('------findIndex method---------');
const index = movements.findIndex(mov => mov === -400) 
console.log(index)

////// Some method 
console.log('------Some method---------');
console.log(movements)
// Only equality in .includes()
console.log(movements.includes(-130));
// Condition
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits)

// Every method 
// Every only returns true if all elements passes the test
console.log('------Every method---------');
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// We can write callback functions separately and then call them in different methods as needed
const deposit = mov => mov > 0;
console.log(movements.every(deposit));
console.log(movements.some(deposit));
console.log(movements.filter(deposit));

////// FLAT method 
// No callback functions, it flattens array
console.log('------FLAT method---------');
const arr4 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr4.flat());

const arrDeep = [[1, [2, 3]], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)) // Level of nesting

const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, curr) => acc + curr, 0);
console.log(overallBalance);

// FlatMap combines two methods into one
// Only goes one(1) level deep
const overallBalance2 = accounts
.flatMap(acc => acc.movements)
.reduce((acc, curr) => acc+ curr, 0);
console.log(overallBalance2)

// SORT methid
// Mutates original arrays
// Default: Turns everything to strings first
// Strings
console.log('--------SORT method---------')
const owners = ['Vanja', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers 
console.log(movements)
// console.log(movements.sort());

// IF we return less than zero < 0, A, B (keep order)
// If we return > 0 , B , A (switch order)

// Ascending
// const sortNum1 = movements.sort((a, b) => { 
// 	if(a > b) return 1;
// 	if (a < b) return -1;
// });
const sortNum1 = movements.sort((a, b) => a - b)
console.log(sortNum1);

// Descending 
// const sortNum2 = movements.sort((a, b) => { 
// 	if(a > b) return -1;
// 	if (a < b) return 1;
// });
const sortNum2 = movements.sort((a, b) => b - a)
console.log(sortNum2);

// Generating arrays
console.log('-------Generating and Filling arrays----------')
// Only fill method works on this array

// Empty array and fill method
const x = new Array(7);
console.log(x)
// console.log(x.map(() => 5));
// x.fill(1);
x.fill(1, 3)
console.log(x);

// Array.from
// Using it from array constructor
console.log('--------Array.from()----------');
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (_, i) => 1 + i);
console.log(z);

const arrDice = Array.from({length: 100}, (_, i) => Math.floor((Math.random() * 6) + 1))
console.log(arrDice);

const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
mov => mov.textContent.replace('€', ''))
console.log(movementsUI)