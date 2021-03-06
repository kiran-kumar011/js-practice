const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;


// Write a program to calculate the total price of your phone purchase.
// You will keep purchasing phones (hint: loop!) until you run out of bank balance.
// You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.

var purchaseAmount = 0;

var phoneCount = 0; // To count the phones bought 
var accessoriesCount = 0; // To count the accessories bought

// Buying Phones and Accessories

while(purchaseAmount<bank_balance){
	if (purchaseAmount + PHONE_PRICE> bank_balance){break;} // Check if you can buy onemore phone
	purchaseAmount += PHONE_PRICE;
	phoneCount++;
	if (purchaseAmount<SPENDING_THRESHOLD){purchaseAmount+=ACCESSORY_PRICE; accessoriesCount++};
}

//After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

// alert(formatAmount(purchaseAmount+calculateTax(purchaseAmount)))


//Finally, check the amount against your bank account balance to see if you can afford it or not.

// alert(`Your bank balance is ${formatAmount(bank_balance)} and your purchase amount is ${formatAmount(withTax(purchaseAmount))}. \n\nYou ${bank_balance>(withTax(purchaseAmount))? "can": "can not"} afford it
// You bought ${phoneCount} phones and ${accessoriesCount} accessories`)


// Write a function called calculateTax which takes an argument 'amount' and calculates the tax you need to pay.

function calculateTax(amount){
	return TAX_RATE*amount;
}

function withTax(amount){
	return amount*(1+TAX_RATE);
}

// Write a function named formatAmount which returns you amount in this format '$ 132.45' make the decimal fixed to 2 places.

function formatAmount(amount){
	return `$ ${amount.toFixed(2)}`;
}

// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”. For numbers which 
// are multiples of both three and five print “FizzBuzz”.

// for(i = 1;i<=100; i++){
// 	if (i%3==0 && i%5==0){
// 		console.log("FizzBuzz")
// 	} else if (i%3==0){
// 		console.log("Fizz")
// 	} else if (i%5==0){
// 		console.log("Buzz")
// 	} else {
// 		console.log(i)
// 	}
// };


// for(i = 1;i<=100; i++){
// 	console.log(i%5==0? i%3==0? "FizzBuzz":"Buzz":i%3==0?"Fizz":i)
// };

for(i=0;i<100;){
	 console.log((++i%3?"":"Fizz")+(i%5?"":"Buzz")||i);
};


 // Euler 

// var n = 8;
// var x = Math.floor((n)/3)+1;
// var x2 = Math.floor((n)/5)+1;
// var x3 = Math.floor((n)/15)+1;
// console.log(x,x2,x3);
// var sumX = ((x *( 0 + (n-(n%3))))//2) + ((x2 *( 0 + (n-(n%5))))//2)- ((x3 *( 0 + (n-(n%15))))/2);

// console.log((x *( 0 + (n-(n%3))))/2);
// console.log(((x2 *( 0 + (n-(n%5))))/2));
// console.log(((x3 *( 0 + (n-(n%15))))/2));

// console.log(sumX)

