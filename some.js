const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 8),
      endDate: new Date(2021, 1, 1, 9, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];
    
const newAppointment = {
    startDate: new Date (2021,1,1,8),
    endDate: new Date (2021,1,1,9,30),
};

const isOverLapping = (newdate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newdate.startDate, end: newdate.endDate}
        )
    })

} 

console.log(isOverLapping(newAppointment));


// const nums = [1,2,3,4];

// // let rst = false;
// // for(let index = 0 ; index < nums.length ; index++ ){
// //     const element = nums[index];
// //     if (element % 2 === 0){
// //         rst = true;
// //         break;
// //     }
// // }

// // const rst = nums.some(item => item % 2 === 0 )
// // console.log(rst);

// const orders = [
//     {
//       customerName: "Nicolas",
//       total: 60,
//       delivered: true,
//     },
//     {
//       customerName: "Zulema",
//       total: 120,
//       delivered: false,
//     },
//     {
//       customerName: "Santiago",
//       total: 180,
//       delivered: true,
//     },
//     {
//       customerName: "Valentina",
//       total: 240,
//       delivered: true,
//     },
//   ];

//   const rta = orders.some(item => item.delivered === true);

//   console.log(rta);