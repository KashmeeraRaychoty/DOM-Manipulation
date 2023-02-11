Title: timer.js 
File Description: This file contains the code for the timer element of the website.

Global Variables

second -- To count the seconds
intervalId -- To store the setIntervalId inorder to pause the timer

Functions

startCount() -- This function increments the clock timer. It is triggered using setInterval Fucntion

startTimer() -- this function starts the timer.

stopTimer() -- This function stops the timer and triggered using click event on stop button. It also resets the property of start button of object {once:true}

resetTimer() -- this sets the seconds to zero and resets the property of start button of object {once:true}.

timer() -- This function creates the timerContainer and returns it.