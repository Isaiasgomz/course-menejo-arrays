const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
console.log('original', orders);

  const rta = orders.filter(item => item.delivered && item.total >= 100);

  console.log('rta', rta);

  const search =(query) => {
    return orders.filter(item => {
      return item.customerName.includes(query);
    })
  }
  
  console.log(search('Nico'));


  // console.log('original', orders);

  // rta = orders.map(item => item.total);
  // console.log('rta', rta);

  // rt22 =orders.map((item) => {
  //     return{
  //         ...item,
  //         taxs:0.19
  //     };
  // })
  // console.log('original', orders);
  // console.log('rta22', rt22);