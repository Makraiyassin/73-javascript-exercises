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
    document.getElementById("target").innerHTML = "";

    let size = ["14px","18px","22px","25px","28px","32px", "28px", "25px", "22px", "18px"];
    let j = 0;

    for (let i = 0; i < txt.length; i++) {

        let span = document.createElement("span");
        span.classList.add("wave");
    
        document.getElementById("target").appendChild(span);

        document.getElementsByClassName("wave")[i].innerHTML = txt.charAt(i);
            
        document.getElementsByClassName("wave")[i].style.fontSize = size[j];
        j++
        if(j > 9){j = 0}
    }

})();

//_________________________________________________________________________________________
    
    // let txt = document.getElementById("target").innerHTML;
    // let arr = [];

    // for (let i = 0; i < txt.length; i++) {
    //     arr.push(txt.charAt(i));
    // }

    // document.getElementById("target").innerHTML= ""

    // let size = ["14px","17px","20px","23px","25px","28px"];
    // let j = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     let span = document.createElement("span");
    //     span.classList.add("wave");

    //     document.getElementById("target").appendChild(span);
    //     document.getElementsByClassName("wave")[i].innerHTML = arr[i];
        
    //     document.getElementsByClassName("wave")[i].style.fontSize = size[j];
    //     j++
    //     if(j == 6){j = 0}
    // }