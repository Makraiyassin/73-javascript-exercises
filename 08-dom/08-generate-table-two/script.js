/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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
        document.querySelector("table").appendChild(document.createElement("tr"))       
        for (let j = 0; j < 10; j++) {
                document.querySelector("table").children[i].appendChild(document.createElement("td"))
                document.querySelector("table").children[i].children[j].innerHTML = (i+1)*(j+1)
        }
    }
    
    table.style.backgroundColor= "#dec7c7";


})();
