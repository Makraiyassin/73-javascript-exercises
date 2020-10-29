/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let img = document.getElementsByTagName("img")[0];
    let img1 = document.getElementsByTagName("img")[0].src;
    let img2 = document.getElementsByTagName("img")[0].dataset.hover
    
    img.addEventListener("mouseover",function (){
        img.setAttribute("src", img2)
    })
    img.addEventListener("mouseout",function (){
        img.setAttribute("src", img1)
    })


})()