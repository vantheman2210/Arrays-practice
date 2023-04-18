'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([ [ 'USD', 'United States dollar' ], [ 'EUR', 'Euro' ], [ 'GBP', 'Pound sterling' ] ]);

const movements = [ 200, 450, -400, 3000, -650, -130, 70, 1300 ];

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
console.log('-------ForEach MAP--------')
currencies.forEach((value, key, map) => { 
  console.log(`${key}: ${value}`)
});

// SET
// Sets have no keys, so second parameter is useless
console.log('-------ForEach SET--------')
const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'USD', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => { 
  console.log(`${value}: ${value}`)
});

const eurToUsd = 1.1;
const movementsUsd = movements.map((mov) => { 
	return mov * eurToUsd
});
console.log(movements)
console.log(movementsUsd)

