/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let count = 0
    document.getElementById("increment").addEventListener("click", function() {
        count++

        // solution 1 (sans localStorage):
        // document.getElementById("target").innerHTML = count
        
        //solution 2 (avec localStorage):
        localStorage.setItem("count", count);
        document.getElementById("target").innerHTML = localStorage.getItem("count");
    })
})();
