# GIT-HTML-CSS-JS-Password_Generator
This assignment was slightly tricky because there were so many different ways to approach this. I initially thought it would be easiest to create an array of each type of character (lowercase, uppercase, special characters, or numeric characters). I've been using coding websites to practice Javascript and one unit showed ways to randomized the contents of a string and output a certain number of characters. So after having typed out my functions and variables necessary to use the array method, I came into the randomized topic online and used this method because it seemed like it would provide the same result with less lines of code. I had to switch out the character arrays into strings, and also replaced the conditional statements (ex. if {lowercase && uppercase && numeric && special}) to if (lowercase), uppercase, etc. to add the respective strings to the empty string of "format". afterwards, I added the for loop to generate a password that has the length of the user's requested number of characters (8-128) and returned the password var into the pre-existing functions already provided.

Link to Deployed Page:  https://hak9292.github.io/GIT-HTML-CSS-JS-Password_Generator/