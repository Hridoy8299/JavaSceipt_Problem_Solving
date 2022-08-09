/*You are given a triangle with the sides 9, 8, 9. Write a program to check
whether a triangle is Isosceles or not using if-else.
Isosceles => two sides are equal */


var edge1 = 9;
var edge2 =8;
var edge3 = 9;

if( edge1 == edge2 || edge1 == edge3 || edge2 == edge3) {
    console.log('Triangle is Isoscales');
}

else {
    console.log('Triangle is not Isoscales');
}