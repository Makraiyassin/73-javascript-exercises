/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("input", function(){
        
        let one = document.getElementById("pass-one").value;

        // let regex = /\d/g;
        // let array = []
        // array.push(one.replace(/[^0-9]/g,""))
        // console.log(array);
        let stringNumber = one.replace(/[^0-9]/g,"")
        console.log(string);

        if (one.length >=8 && stringNumber.length>=2){
            document.querySelector(".indicator").innerHTML = "it's ok";
            document.querySelector(".indicator").style.color= "green";
        } else{
            document.querySelector(".indicator").innerHTML = "not ok!";
            document.querySelector(".indicator").style.color= "red";
        }
    })
})();
