/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let x = Math.floor(Math.random()* 100)+1
    let answer = prompt("I chose a number between 1 and 100. Guess it:");
    let count = 1
    while (x != answer) {
        if (answer < x) {
            alert("higher")
            answer = prompt("Try again: ");
            count++
        } else if (answer > x){
            alert("lower")
            answer = prompt("Try again: ")
            count++
        }
    }
    alert("that's it!")

    alert("you needed " + count +" guesses!")
})();
