// const letters =['a', 'b', 'c'];

// // const newarray=[];
// // for(index = 0; index < letters.length; index++ ){
// //     const letter= letters[index];
// //     newarray.push(letter + '++');
// // };


// newarray = letters.map(item => letters[1] );

// console.log('original ' + letters);
// console.log('for ' + newarray);



var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]

array2 = productos.map(item => item.name && item.price );
console.log(array2);