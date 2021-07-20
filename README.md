# Password Generator

## Goals for this Challenge
* Create a functional password generator of random characters
* Prompt the user for criteria and verify that minimum requirements have been met
* Display the user selected password to the display box in HTML

## List of implemented functions - Three functions total
* First we have the writePassword(). This simply writes the password to the display box
* Then we have a generatePasswordContent function which prompts and creates the password as a string
* Finally we have a generatePasswordLength that prompts for a password of certain desired length.

## Summary of code
* All of the characters upper, lower, numbers, and special were put into arrays. The arrays were
used and concatenated as needed based on criteria via prompts inside generatePasswordContent. The password length 
was prompeted as well, and that value passed to the generatePasswordContent from generatePasswordLength. The 
resulting random password created there in the generatePasswordContent was passed into writePassword
to be displayed.
