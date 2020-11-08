/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    
    let part1 = Number(document.getElementById("part-one").innerHTML);

    document.getElementById("part-one").addEventListener("click", function(){
        if (part1 >= 499) {
            part1 = 459; // J'ai mis 459 au lieu de 460 car la function ajoute +1, et si j'avait mis 460, il me donnerait 461 eu lieu de 460 après 499...
        }
        document.getElementById("part-one").innerHTML = (part1 = part1 + 1);
        document.getElementById("target").innerHTML = "+" + part1 + (part2 < 10 ? "0" : "") + part2 + (part3 < 10 ? "0" : "") + part3 + (part4 < 10 ? "0" : "") + part4;
    })

    let part2 = Number(document.getElementById("part-two").innerHTML); 

    document.getElementById("part-two").addEventListener("click", function(){
        if (part2 >= 99) {
            part2 = -1; // J'ai mis -1 au lieu de 00 car la function ajoute +1, et si j'avait mis 00, il me donnerait 01 eu lieu de 00 après 99...
        }
        document.getElementById("part-two").innerHTML = (part2 < 9 ? "0" : "") + (part2 = part2 + 1);
        document.getElementById("target").innerHTML = "+" + part1 + (part2 < 10 ? "0" : "") + part2 + (part3 < 10 ? "0" : "") + part3 + (part4 < 10 ? "0" : "") + part4;
    })

    let part3 = Number(document.getElementById("part-three").innerHTML); 

    document.getElementById("part-three").addEventListener("click", function(){
        if (part3 >= 99) {
            part3 = -1;  // J'ai mis -1 au lieu de 00 car la function ajoute +1, et si j'avait mis 00, il me donnerait 01 eu lieu de 00 après 99...
        }
        document.getElementById("part-three").innerHTML = (part3 < 9 ? "0" : "") + (part3 = part3 + 1);
        document.getElementById("target").innerHTML = "+" + part1 + (part2 < 10 ? "0" : "") + part2 + (part3 < 10 ? "0" : "") + part3 + (part4 < 10 ? "0" : "") + part4;
    })

    let part4 = Number(document.getElementById("part-four").innerHTML);

    document.getElementById("part-four").addEventListener("click", function(){
        if (part4 >= 99) {
            part4 = -1; // J'ai mis -1 au lieu de 00 car la function ajoute +1, et si j'avait mis 00, il me donnerait 01 eu lieu de 00 après 99...
        }
        document.getElementById("part-four").innerHTML = (part4 < 9 ? "0" : "") + (part4 = part4 + 1);
        document.getElementById("target").innerHTML = "+" + part1 + (part2 < 10 ? "0" : "") + part2 + (part3 < 10 ? "0" : "") + part3 + (part4 < 10 ? "0" : "") + part4;
    })
})();

//_______________________________________________________________________________________
    //console.log(document.getElementById("target").innerHTML.slice(0,4));
    // document.getElementById("target").innerHTML.slice(1,4) = part1
