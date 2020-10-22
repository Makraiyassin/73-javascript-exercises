/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (function() {
//     document.getElementById("run").addEventListener("click", function() {
//         // your code here 
//         //square numbers beetwen 1 et 21 : 1,4,9,16
//             let arr=[];
//         for(let i=1; i<= 21; i++){
//             let square = i * i;
//             array.push(square)
//         }
//             alert(arr)
//     });
// })();
(function() {
    document.getElementById("run").addEventListener("click", function() {

        // your code here
        
        let arr=[];
        let square = 1;
            
        for(let i=2; square<= 21; i++){ 
            arr.push(square)
            square = i * i;
        }
        alert(arr)
    });
})();
