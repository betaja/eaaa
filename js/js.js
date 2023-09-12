/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('All is good!');

/* I am a comment 
and I can write more stuff in more lines
*/
// One liner comment

/* Variables and how to create them */
let myCow = "Garry";
let anotherCow = "Alice";
let myBook = "Some sort of book";
// You can use "let" and "var" for the same reason, it's all the same
// For variables better use "double qoutation marks", not 'single ones'

console.log(
    myBook
     + " "
     + anotherCow
     + " "
     + myCow
     );

/* numbers */
let lucky = 7;
let disaster = 13;
const noChange = 333;

console.log(lucky + disaster);
// shows up as 20, because it calculates 7+13

/* booleans: true of false */
const santaExists = true;
console.log  (santaExists);

/* compare */
console.log( lucky >= disaster )
// shows up as "false" because 7 is not > or = 13

/* write to some html id */
hi.innerHTML = "<p>" + myBook + "</p>"; 

/* several lines in variable */
let pizza = `
<article>
<h2> Margarita </h2>
<img src="images/margarita.png" alt="Margarita pizza">
<p> This pizza is... </p>
<article>
`
//an article of a pizza

// inject this into #hi
hi.innerHTML += pizza; 

/** Function: a series of instructions */
let boom = function(){
    alert("We use cookies, and we track all you do! Consent?");
    console.log("Cokie info fired of!");
    return true;}