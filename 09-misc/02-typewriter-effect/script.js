/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function(){ 

    // your code here

    let i = 0;
    let txt = document.getElementById("target").innerHTML
    let speed = 70; 
    document.getElementById("target").innerHTML= "";

    (function typeWriter(){
        if (i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        if (i == txt.length){
            document.getElementById("target").innerHTML += "<br>";
            i = 0;
        }
    })();
})();

//  setTimeout(function(){ ... }, 200); //fonctionne pas ...
//  setInterval(function(){...}, 200)
//______________________________________________________________________________

    // let txt = document.getElementById("target").innerHTML;
    // let arr = [];

    
    // for (let i = 0; i < txt.length; i++) {
    //     arr.push(txt.charAt(i));
    // }
    // document.getElementById("target").innerHTML= "";
    // let span = document.createElement("span");
    // span.classList.add("texte");

    // document.getElementById("target").appendChild(span);

    // for(let j = 0; j < arr.length ; j++){  
    //     setInterval(function(){            
    //     document.getElementsByClassName("texte")[j].innerHTML = arr[j];     
    //     },500);
    //     console.log(document.getElementsByClassName("texte")[j].innerHTML = arr[j]);
    // }
