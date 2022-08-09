/*You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using
if-else.*/


var myScore = 80;

if(myScore>= 80){
    console.log('A grade');
}

else if (myScore>=60){
    console.log('B Grade');
}

else if(myScore>=50){
    console.log('C Grade')
}

else if(myScore >=40){
    console.log('D Grade');
}

else{
    console.log('F Grade');
}