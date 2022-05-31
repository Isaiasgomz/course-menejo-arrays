const nums = [23,34,21,26,28,19,35,38,];

// vod = true
// for ( let index = 0; index < nums.length ; index ++) {
//     element = nums[index];
//     if (element  >= 40){
//         vod = false
//     }

// }
// console.log(vod);

// const rta2 = nums.every(item => item >= 40);

// console.log('rta2', rta2);


const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 17,
    },
  ];

const rta3 =  team.every(item => item.age <= 17 );

console.log('todos menor de edad ?', rta3);
