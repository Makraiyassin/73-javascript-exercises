/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: array traversal (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "apple",
        "peer",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarine",
        "durian",
        "peach",
        "grape",
        "cherry",
    ];    
    // your code here
    document.getElementById("run").addEventListener("click", function(){
        fruits.forEach(function(fruit, index, array) {
        // fruits.forEach(fruit, index, array => {  // <= TJRS PAS COMPRIS COMMENT MARCHE CETTE MANIERE DE "FOREACH"
            
            // alert("fruit à l'index "+index+"/"+(array.length-1)+" : "+fruit);
            console.log("fruit à l'index "+index+"/"+(array.length-1)+" : "+fruit);
        })
    })
})();
