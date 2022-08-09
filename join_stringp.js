/*
John’s teacher gave him two variables. Each variable contains a string.
John’s teacher asked him to combine these two strings(‘I am going to
be’ and ‘an awesome web developer’) and print them in one line. Help
John write the program.
*/

var firstSentence = 'I am going to be';
var secondSentance  = 'an awaesome Developer';

var mainSentence = firstSentence.concat(" ", secondSentance);

console.log(mainSentence);