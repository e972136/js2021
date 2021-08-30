/*const pets={
    dog:'oso',
    cat:'furia',
    diHola: function(){
        console.log('perroo');
    }
};

console.log(pets);
pets.diHola();

const pet = new Object()

pet.perro = 'oso';
pet.perra = 'furia';
console.log(pet);
const {perro,perra} = pet;
console.log(perro);
console.log(perra);
*/

const cat = {
    nombre : 'gaspar',
    edad : 15,
    diHola: function(){
        console.log("hola",this.nombre);
        //console.log(`Hola ${this.nombre} mi edad es ${this.edad}`);
    }
};

console.log(cat);
cat.diHola();
//cat.diHola = function(){console.log("perro");};
//onsole.log(cat);