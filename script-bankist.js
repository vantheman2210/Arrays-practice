'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

const account5 = {
	owner: 'Vanja Martinovic',
	movements: [ 5000, 10000, -700, -50, -90 ],
	interestRate: 1,
	pin: 5757
};

const accounts = [ account1, account2, account3, account4, account5 ];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// DOM manipulation

const displayMovements = function(movements, sort = false) { 
	
	containerMovements.innerHTML = ''; 

	const movs = sort ? movements.slice().sort((a, b) => a - b) : movements; 

	movs.forEach(function(mov, i) {
		const type = mov > 0 ? 'deposit' : 'withdrawal';

		const html = `  
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>
    `;
		containerMovements.insertAdjacentHTML('afterbegin', html);
	});
};


// Reduce method

const calcDisplayBalance = function(acc) {
	acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);  

	labelBalance.textContent = `${acc.balance} EUR`;
};



const calcDisplaySummary = function(account) { 
	
	const incomes = account.movements.filter((mov) => mov > 0).reduce((acc, mov) => acc + mov, 0);
	labelSumIn.textContent = `${incomes} EUR`;

	const out = account.movements.filter((mov) => mov < 0).reduce((acc, cur) => acc - cur, 0);
	labelSumOut.textContent = `${Math.abs(out)} EUR`; 

	const interest = account.movements.filter(mov => mov > 0) 
	.map(deposit => deposit * account.interestRate/100)  
	.filter(int => int >= 1)
	.reduce((acc, int) => acc + int, 0); 

	labelSumInterest.textContent = `${interest} EUR`;
};

// Map Method
// Map returns a new array, while forEach causes side effect
const createUsernames = function(accs) {
	accs.forEach((account) => {
		account.username = account.owner.toLowerCase().split(' ').map((name) => name[0]).join('');
	});
};
createUsernames(accounts);

const updateUI = function (acc) { 
  // display movements 
	displayMovements(acc.movements);
	// display balance
	calcDisplayBalance(acc)
	// display summary 
	calcDisplaySummary(acc)
};
// const user = 'Steven Thomas Williams'; // stw

/*const username = user
.toLowerCase()
.split(' ')
.map(name =>  name[0])
.join(''); 
console.log(username);*/


// EVENT handlers  
let currentAccount;
btnLogin.addEventListener('click', function (e) { 
	// Prevent from submitting
	// Pressing ENTER in a form same as click event
	e.preventDefault(); 
	  

	currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

	
  // (currentAccount && currentAccount.pin === Number(inputLoginPin.value)
	if(currentAccount?.pin === Number(inputLoginPin.value)) {  
		// display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`; 
		containerApp.style.opacity = 100; 

		// Clear input 
		inputLoginUsername.value = inputLoginPin.value = ''; 
		inputLoginPin.blur();
		updateUI(currentAccount)
	} else  {
	  containerApp.style.opacity = 0;  
		alert('USER DOES NOT EXIST');} 

		// updateUI 
		updateUI(currentAccount);

}); 

btnTransfer.addEventListener('click', function (e) {  
	e.preventDefault(); 
	const amount = Number(inputTransferAmount.value); 
	const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);  

	// Clean input field
  inputTransferAmount.value = inputTransferTo.value = '';

	if(
		amount > 0 &&  
	  receiverAcc &&
		currentAccount.balance >= amount && receiverAcc.username !== currentAccount.username) {
			// Doing the transfer
			currentAccount.movements.push(-amount); 
			receiverAcc.movements.push(amount);  

			// Update UI
			updateUI(currentAccount); 
		} 

}); 

btnLoan.addEventListener('click', function (e) { 
	e.preventDefault(); 
	const amount = Number(inputLoanAmount.value); 

	if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) { 
		// Add movement 
		currentAccount.movements.push(amount); 

		// Update UI 
		updateUI(currentAccount);
	} 
	// Clear input field
	  inputLoanAmount.value = '0';
});

btnClose.addEventListener('click', function(e) { 
	e.preventDefault();  
	
	if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) { 
		const index = accounts.findIndex(acc => acc.username === currentAccount.username); 

		// Delete account
    accounts.splice(index, 1); 

		// Hide UI
		containerApp.style.opacity = 0;
	} 

	 inputCloseUsername.value = inputClosePin.value = '';
}); 

// State variable
let sorted = false;
btnSort.addEventListener('click', function (e) { 
	e.preventDefault(); 

	// Update UI
	displayMovements(currentAccount.movements, !sorted); 
	sorted = !sorted;
}); 

labelBalance.addEventListener('click', function () { 
	const movementsUI = Array.from(document.querySelectorAll('.movements__value')); 

	console.log(movementsUI.map(el => el.textContent.replace()));
}); 

////// Array methods exercise 
// 1.
const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((sum, cur) => sum + cur, 0);
 console.log(bankDepositSum);  

 // 2. 

 // const numDeposits1000 = accounts.flatMap(acc => acc.movements)
 // .filter(mov => mov > 1000).length; 

 const numDeposits1000 = accounts
.flatMap(acc => acc.movements) 
.reduce((count, cur) => cur >= 1000 ? count + 1 : count, 0);

// 3. 
const {deposits, withdrawals} = accounts
.flatMap(acc => acc.movements) 
.reduce((sums, cur) => { 
  cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;  
	// sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
	return sums;
}, {deposits: 0, withdrawals: 0});  

console.log(deposits, withdrawals);  

// 4. 
//this is a nice title -> This Is a Nice Title 

const convertTitleCase = function(title) { 
	const capitalize = str => str[0].toUpperCase() + str.slice(1)
	
	const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with']; 

	const titleCase = title
  .toLowerCase() 
	.split(' ') 
	.map(word => exceptions.includes(word) ? word : capitalize(word)) 
	.join(' ');

	return capitalize(titleCase);
}; 
console.log(convertTitleCase('this is a nice title'));
