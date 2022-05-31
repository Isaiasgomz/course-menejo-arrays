const nums = [13,141,5161,34,30];

let rta = undefined;
for ( let index = 0; index < nums.length ; index ++){
  const element = nums[ index];
  if (element === 30){
    rta = element;
    break
  }
}
console.log('for', rta);


const rta2 = nums.find(item => item === 30 );
console.log('find', rta2);


const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find( item => item.id === '🥞');
console.log('hay ?', rta3);

const rta4 = products.findIndex(item => item.id === '🍔');
console.log('position', rta4);
