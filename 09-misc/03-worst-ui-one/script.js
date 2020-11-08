/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("slider").addEventListener("click", function(){
        
    let slider = document.getElementById("slider").value;
    document.getElementById("target").innerHTML = slider;
    // console.log(slider);

    })
})();

//___________________________________________________________________________________
    // let txt = document.getElementById("target").innerHTML;
    // console.log(txt.charAt(2)); // 6

    // let slider = document.getElementById("slider").value
    // slider = 490123456
    // console.log(slider)

    // txt = slider
    // console.log(txt);

    // document.getElementById("slider").value = 490123456
    // document.getElementById("target").innerHTML = document.getElementById("slider").value;
