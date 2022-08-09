/*You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */

var fruits =['Apple', 'Banana', 'Orange'];

var position =fruits.indexOf('Banana');
console.log(position);
console.log(fruits);


// replace Banana with Mango
fruits[1]= 'mango';
console.log(fruits);


// delete orange from array
fruits.pop();
console.log(fruits);

// add Watermeon
fruits.push('Watermelon');
console.log(fruits);

