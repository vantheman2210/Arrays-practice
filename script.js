/*/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES 
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
/*
const movements = [ 200, 450, -400, 3000, -650, -130, 70, 1300 ];

////////////////////////////////////////
// ARRAYS are objects with special built-in methods

let arr = [ 'a', 'b', 'c', 'd', 'e' ];
// SLICE METHOD
// Returns a new array with extracted parts, not changing original. Not mutates
console.log(arr.slice(2));
// Last parameter not included in new array
console.log(arr.slice(2, 4));
// Negative starts from last elements
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
// Copy of existing array
console.log(arr.slice());

// SPLICE METHOD
// It changes the original array by extracting elements. Mutates
//Second parameter delete count
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);

//REVERSE METHOD
//Mutates original array by reversing it
arr = [ 'a', 'b', 'c', 'd', 'e' ];
const arr2 = [ 'g', 'h', 'j', 'f' ];

// CONCAT METHOD
// Used to combine two arrays
// Does not mutates original arrays

const letters = arr.concat(arr2);
console.log(letters);
// console.log([...arr,...arr2]); spread operator

// JOIN METHOD
//
console.log(letters.join(' - '));

// AT() METHOD
const arr3 = [ 23, 11, 64 ];
console.log(arr3[0]); // Old way of extracting
console.log(arr3.at(0));

// Getting last element of the array
// Works on strings
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));
console.log('vanja'.at(-1));

// forEach METHOD

// LOOPING OVER ARRAY
for (const movement of movements) {
	if (movement > 0) {
		console.log(`You deposited ${movement}`);
	} else {
		// Math.abs uses absolute value (no negative or positive sign)
		console.log(`You withdrew ${Math.abs(movement)}`);
	}
}

console.log('-------forEach--------');

// forEach requires a callback function. It loops over the array, and it will call function on each iteration. Current element of the array as argument.
movements.forEach((movement) => {
	if (movement > 0) {
		console.log(`You deposited ${movement}`);
	} else {
		// Math.abs uses absolute value (no negative or positive sign)
		console.log(`You withdrew ${Math.abs(movement)}`);
	}
});
//0: function(200)
//1: function(450)
// ... and so on until the end of array

// Adding index counter
// .entries an iterable key
// First parameter index, and then element
for (const [ i, movement ] of movements.entries()) {
	if (movement > 0) {
		console.log(`Movement ${i + 1}: You deposited ${movement}`);
	} else {
		// Math.abs uses absolute value (no negative or positive sign)
		console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
	}
}

// forEach version
// First parameter always current element, second parameter always index of element, and third parameter entire array
// IT will always loop through entire array, cannot break
movements.forEach((movement, i) => {
	if (movement > 0) {
		console.log(`Movement ${i + 1}: You deposited ${movement}`);
	} else {
		// Math.abs uses absolute value (no negative or positive sign)
		console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
	}
});

// MAP
// Inner array one entry of the map (key, value)
const currencies = new Map([ [ 'USD', 'United States dollar' ], [ 'EUR', 'Euro' ], [ 'GBP', 'Pound sterling' ] ]);

currencies.forEach(function(value, key, map) {
	console.log(`${key}: ${value}`);
});

// SET
// Key is same as value. Because set has no value, or indexes/
const currenciesUnique = new Set([ 'USD', 'GBP', 'USD', 'EUR', 'EUR' ]);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map) {
	console.log(`${key}: ${value}`);
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

/*
function checkDogs(arr1, arr2) {
	const array1 = arr1.slice(); 
	array1.splice(0, 1); 
	array1.splice(-2);
	const completeList = array1.concat(arr2);
	completeList.forEach(function(dog, i) {
		if (dog >= 3) {
			console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
		} else {
			console.log(`Dog number ${i + 1} is still a puppy`);
		}
	});
}

checkDogs([ 9, 16, 6, 8, 3 ], [ 4, 1, 15, 8, 3 ]); */

////////////////////////////////////////

// MAP loops over array elements, and calls callback function and puts it new array

// FILTER looks for elements in an array that satisfy test that we specify, and creates a new array

// REDUCE boils all array elements to a single value. Adding all elements together

// MAP method
// Returns new array, does not mutates.
// Same three parameters as forEach(element, index, array)
// No side effect, different from forEach
const movements = [ 200, 450, -400, 3000, -650, -130, 70, 1300 ];

const eurToUsd = 1.1;

/*const movementsUSD = movements.map(function(element){ return element * eurToUsd});*/

const movementsUSD = movements.map((element) => element * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const element of movements) movementsUSDfor.push(element * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
	(movement, i, _arr) => `Movement ${i + 1}: You ${movement > 0 ? 'deposited' : 'withdrew'} ${Math.abs(movement)}`
	// if (movement > 0) {
	// 	return (`Movement ${i + 1}: You deposited ${movement}`);
	// } else {
	// 	// Math.abs uses absolute value (no negative or positive sign)
	// 	return (`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
	// }
);
console.log(movementsDescriptions);
//////////////////////////////////////////
// FILTER method
// Three parameters
// Filters out elements based on callback function with specified test(condition)
// You can chain methods

const deposits = movements.filter(function(element, _index, _array) {
	return element > 0;
});

const withdrawals = movements.filter((element) => element < 0);

console.log(deposits);
console.log(withdrawals);

// FOR OF example
/* const deposits = for (const element of movements) if (element > 0) deposits.push(element); */

///////////////////////////////////////////////
// REDUCE method
// Parameters (accumulator, current, index, array)
// Accumulator (snowball parameter, value that we return)
// accumulator -> SNOWBALL
const balance = movements.reduce((acc, cur, i, arr) => {
	console.log(`Iteration ${i}: ${acc}`);
	return acc + cur;
}, 0);
console.log(balance);

// Condensed version
// movements.reduce((acc, cur) => acc + cur, 0);

// FOR OF() example
/* let balance2 = 0;
for (const elements of movements) balance2 += elements;
console.log(balance2); */

// Maximum value REDUCE
const max = movements.reduce((acc, cur) => {
	if (acc > cur) return acc;
	else return cur;
}, movements[0]);
console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = (ages) => {
	const humanYears = ages;

	const humanAge = humanYears
		.map((dogAge) => (dogAge <= 2 ? (dogAge = 2 * dogAge) : (dogAge = 16 + dogAge * 4)))
		.filter((dogs) => dogs >= 18);

	const average = humanAge.reduce((acc, cur) => acc + cur, 0) / humanAge.length;
	// Another way of average
	// const average = humanAge.reduce((acc, cur, i ,arr) => acc + cur / arr.length, 0);
	return Math.floor(average);
};

const avg1 = calcAverageHumanAge([ 5, 2, 4, 1, 15, 8, 3 ]);
const avg2 = calcAverageHumanAge([ 16, 6, 10, 5, 6, 1, 4 ]);
console.log(avg1, avg2); */

// Chaining METHODS
// Chaining methods as long as they return array
// Inspect array at any point during pipeline using console.log
// Pipeline
const totalDepositsUSD = movements
	.filter((mov) => mov > 0)
	.map((mov) => mov * eurToUsd)
	.reduce((acc, cur) => acc + cur);
console.log(totalDepositsUSD);

// Do not overuse chaining
// Too many methods can put a dent into performance
// Use as little methods as possible
// Bad practice to chain methods that mutate original array. (Splice, or reverse)

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = (ages) =>
	ages
		.map((dogAge) => (dogAge <= 2 ? (dogAge = 2 * dogAge) : (dogAge = 16 + dogAge * 4)))
		.filter((dogs) => dogs >= 18)
		.reduce((acc, cur, _i, arr) => acc + cur / arr.length, 0);

const avg1 = calcAverageHumanAge([ 5, 2, 4, 1, 15, 8, 3 ]);
const avg2 = calcAverageHumanAge([ 16, 6, 10, 5, 6, 1, 4 ]);
console.log(avg1, avg2);


// FIND method 
// Return an array of element
// Returns first element that satisfy condition 
// Does not return an array
const firstWithdrawal = movements.find((mov) => mov < 0); 
console.log(movements); 
console.log(firstWithdrawal); 

const account = accounts.find(acc => acc.owner === 'Jessica Davis');  

 FOR OF version
for (const account2 of accounts) { 
	if(account2.owner === 'Jessica Davis') 
	 account2
} 
console.log(account)
 
// findIndex method  

// 	SOME method

// Includes. tests equality
console.log(movements.includes(-130));

// Some (condition);
const anyDeposits = movements.some(mov => mov > 1500); 
console.log(anyDeposits);

// EVERY method 
// Returns true only if all elements satisfy condition 
console.log(movements.every(mov => mov > 0)); 
console.log(account4.movements.every(mov => mov > 0));

// Separate callback 
const deposit = mov => mov > 0;
console.log(movements.some(deposit));

// FLAT method 
// No callback function
const arr = [[1, 2, 3], [4, 5 , 6], 7, 9]; 
console.log(arr.flat()); 

const arrDeeper = [[[1, 2], 3], [4, [5 , 6]], 7, 9]; 
console.log(arrDeeper.flat()); // One level of nesting 
console.log(arrDeeper.flat(2));

// const accountMovements = accounts.map(acc => acc.movements); 
// console.log(accountMovements);
// const allMovements = accountMovements.flat(); 
// console.log(allMovements); 
// const overallBalance = allMovements.reduce((acc, cur) => acc + cur, 0); 
// console.log(overallBalance); 

const overallBalance = accounts.map(acc => acc.movements) 
.flat() 
.reduce((acc, cur) => acc + cur, 0); 
console.log(overallBalance); 

// flatMap (combines flat and map methods)
// Only goes one level deep 
const overallBalance2 = accounts.flatMap(acc => acc.movements) 
.reduce((acc, cur) => acc + cur, 0); 
console.log(overallBalance); 

// Sorting arrays  
// Mutates original array
// Converts everything to strings and then sorts
// Do not use sort method in mixed arrays


// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha']; 
console.log(owners.sort()); 

// Numbers 
console.log(movements); 

// return < 0, A, B (keep order)
// return > 0, B, A (switch order) 

// Ascending
// const asc = movements.sort((a, b) => { 
// 	if(a > b) return 1; 
// 	if(a < b) return -1;
// });   
const asc = movements.sort((a, b) => a - b)
console.log(asc);  

// Descending 
// const des = movements.sort((a, b) => { 
// 	if(a > b) return -1; 
// 	if(a < b) return  1;
// });  
const des = movements.sort((a, b) => b - a)
console.log(des); 

// Creating arrays 
// Empty array + fill method
const x = new Array(7);
// console.log(x.map(() => 5));
// x.fill(1);  
x.fill(1, 3, 5); 
console.log(x);

// Array.from  
// Create other things from arrays
const y = Array.from({length: 100}, () => 1); 
console.log(y); 
// _ underscore means throwaway parameter
const z = Array.from({length: 7}, (_, i) => i + 1); 
console.log(z) 
// Using on quySelectorAll - nodeList 
x.fill(1);  */
// console.log(movementsUI); 
/* labelBalance.addEventListener('click', function () { 
	const movementsUI = Array.from(document.querySelectorAll('.movements__value'), 
	el => el.textContent.replace());
	console.log(movementsUI); 

	// const movements2 = [...document. querySelectorAll('.movements__value')]
}); 

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
*1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
*2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
*3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
*4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
*5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
*6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
*7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
*8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:

GOOD LUCK 😀
*/ 
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
]; 
// 1.
const recommendedFood = dogs.forEach(dog => dog.recommendedFood = Math.floor(dog.weight ** 0.75 * 28)); 
console.log(dogs); 

// 2.
const findSarah = dogs.find(({owners}) => owners.includes('Sarah'));
console.log(findSarah.curFood > findSarah.recommendedFood ? `${findSarah.owners[0]}'s dog eats too much` : `${findSarah.owners[0]}'s dog eats too little`);

// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners); 

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners); 

console.log(ownersEatTooMuch, ownersEatTooLittle)  

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`); 
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`) 

// 5.
const exactly = dogs.some(dog => dog.cur === dog.recommendedFood); 
console.log(exactly); 

// 6.
const okay = dogs.some(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10)); 
console.log(okay); 

const okayArray = dogs.filter(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10)) 
console.log(okayArray) 

const dogsAscending = [...dogs]; 
dogsAscending.sort((a, b) => a.recommendedFood - b.recommendedFood); 
console.log(dogs); 
console.log(dogsAscending); */