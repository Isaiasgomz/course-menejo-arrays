const array1 =[2,5,7,10,11,15,20] 
const sum = 13


for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    let esperado = true
    if(element + array1[index] != sum){
        let esperado = false
        continue
    } else {
         let esperado 
    
    }
}

// const users = {
//       amigos: [{
//         nombre: 'toni',
//         edad: 33,
//       }, {
//         nombre: 'Emi',
//         edad: 25
//       }]
//     };
// const rta2 = users.flat(1);
// console.log(rta2);


// const rta = data.flatMap(item => item.edad);
// // .reduce((obj, item) => {
// //     if (! obj[item]){
// //         obj[item] = 1;
// //     } else{
// //         obj[item] = obj[item] + 1
// //     }
// //     return obj;
// //     }, {});

// console.log(rta)