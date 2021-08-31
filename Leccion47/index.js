const xxx = 'patito';

function ejemplo(otro){
    return `mi nombre es ${otro}`;
}

//console.log(ejemplo(xxx));

function calcular(yearOf){
    return 2021 - yearOf;
}

console.log(calcular(2008));

const funcionHablar = function(animal = 'otro'){
    switch(animal){
        case 'perro':
            console.log('guau');
            break;
        case 'gato':
            console.log('miau');
            break;
        default:
            console.log('sepa',animal);
    }
}  

funcionHablar();

const elementos = ['helio','oxigeno', 'metano'];
const otro = elementos.map(nuevo => nuevo.length);
console.log(otro);