/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById("target");
    let table = document.createElement("table");
    
    target.appendChild(table);

    for (let i = 0; i < 10; i++) {
        document.querySelector("table").appendChild(document.createElement("tr")).appendChild(document.createElement("td"))        
    }
    
    table.style.backgroundColor= "#dec7c7";
    // table.children[0].style.height= "20px";;
})();
