/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function info() {
    // your code here
    let age = prompt("how old are you? ")
    let gender = prompt("what is your gender?")
    let town = prompt("What town do you live in?")
   
    let conf = confirm("it is correct ? "+ "-age: "+age+" -gender: "+gender+" -town: "+town);
        if (conf == true) {
            alert("it's OK!");
        } else {
            return info()
        }
})();