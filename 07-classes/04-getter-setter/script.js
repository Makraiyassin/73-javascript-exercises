/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class person{
        constructor(firstname, lastname){
            this.firstname=firstname;
            this.lastname=lastname;
        }
        get name(){
            return this.firstname +" "+ this.lastname;
        }
        set name(fullname){
            let newname = fullname.split(" ");
            this.firstname = newname[0];
            this.lastname = newname[1];
        }    
    }
    document.getElementById("run").addEventListener("click", function(){
        let pers = new person("Yassin","Makraï")
        console.log(pers.name);
        pers.name = "Gérard Manfroi";
        console.log(pers);
        console.log(pers.name);
        pers.name = "Sarah Croch"
        console.log(pers);
        console.log(pers.name);
        pers.name = "rick hochet"
        console.log(pers);
        console.log(pers.name);
    })
})();
