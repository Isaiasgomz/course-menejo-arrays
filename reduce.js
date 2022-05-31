const num = [1,2,3,4];

// let contador = 0;
// for( let index = 0; index < num.length ; index++){
//     const element = num[index];
//     contador = contador + element;
// }
// console.log(contador);

const sum = num.reduce((sum, element) => sum + element, 0  );

console.log(sum);