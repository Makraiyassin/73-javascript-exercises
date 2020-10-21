/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Dans la console, pour chaque nombre compris entre 1 et 100: affichez "fizz" si le nombre est un multiple de 3, 
// "buzz" si c'est un multiple de 5, "fizzbuzz" si c'est les deux, ou simplement le nombre si ce n'est aucun des celles-ci.

(function() {

    // your code here
    let n = 1
    while(n <= 100){
        if(n%3 == 0 && n%5 == 0){
        console.log(n+" fizzbuzz (multiple de 3 et de 5)");
        }else if (n%5 == 0){
        console.log(n+" buzz (multiple de 5)");
        }else if (n%3 == 0){
        console.log(n+" fizz (multiple de 3)");
        }else{
        console.log(n+" n'est ni multiple de 3, ni de 5");
        }
        n++
    }
})();
