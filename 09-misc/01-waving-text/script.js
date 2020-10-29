/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let txt = document.getElementById("target").innerHTML;
    console.log(txt);
    let arr = [];
    for (let i = 0; i < txt.length; i++) {
        arr.push(txt.charAt(i));
    }
    console.log(arr);
})();
