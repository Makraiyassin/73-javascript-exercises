/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

        // METHODE "GETELEMENTSBYCLASSNAME" 1: fonctionne !

    // let array = document.getElementsByClassName("target")
    // for (let i = 0; i < array.length; i++) {
    //     array[i].innerHTML = "owned";
    // }

        // METHODE "GETELEMENTSBYCLASSNAME" 2:    Ne fonctionne pas ! pk?

    // document.getElementsByClassName("target").forEach(element => {
    //     element.innerHTML = "owned"
    // });

        // METHODE "QUERYSELECTORALL" 1: fonctionne !

    // let array = document.querySelectorAll(".target")
    // for (let i = 0; i < array.length; i++) {
    //     array[i].innerHTML = "owned";
    // }

        // METHODE  "QUERYSELECTORALL" 2: fonctionne !

    document.querySelectorAll(".target").forEach(element => {
        element.innerHTML = "owned"
    });
})();
