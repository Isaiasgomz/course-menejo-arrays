const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

const rta = users.map(users => users.attributes).flat(1);
console.log(rta);

const rta2 = users.flatMap(users => users.attributes);
console.log(rta2); 