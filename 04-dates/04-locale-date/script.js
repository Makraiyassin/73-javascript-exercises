/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let date = new Date();

    document.getElementById("target").innerHTML = date.toLocaleString();

    // sinon créer une fonction qui va convertir "day" en lettre et "month" en lettre et utiliser ceci:

    // let day = date.getDay();
    // let date_month = date.getDate();
    // let month = date.getMonth();
    // let year = date.getFullYear();
    // let hours = date.getHours();
    // let minute = date.getMinutes();

    //document.getElementById("target").innerHTML = day+", "+date_month+"/"+month+"/"+year+" "+hours+"h"+minute;
})();
