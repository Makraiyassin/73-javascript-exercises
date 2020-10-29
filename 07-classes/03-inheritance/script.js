/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        
        //ajout
        constructor(name){
            this.name=name;
            this.greeting= "Hello ";
        }
        //fin de l'ajout

        sayHello(){
            // return `${this.constructor.greeting}! I'm ${this.name}!`; //original
            return `${this.greeting}! I'm ${this.name}!`; //modifié
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", function(){
        let cat = new Animal("tom");
        let dog = new Animal("snoopy");
        console.log(cat.sayHello());
        console.log(dog.sayHello());
    })
})();
