const things = ['water', 'fire','air'];

const separator = '--';
let rtafinal = '';
for(let index = 0; index < things.length ; index ++){
    element = things[index];
    rtafinal = rtafinal + element + separator;
}

console.log('for', rtafinal);

const rta2 = things.join('--');
console.log('join' , rta2); 


const url = 'Curso de manipulacion de arrays en Java Script';

const modUrl = url.split(' ').join('-').toLowerCase();
console.log(modUrl);
