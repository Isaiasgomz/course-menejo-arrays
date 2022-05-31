const array =[1,1,2,2];
const otherArray = [3,3,4,4];

newArray = [...array];
for(let index= 0 ; index < otherArray.length ; index++){
    const element = otherArray[index];
    newArray.push(element);
}

console.log('for', newArray);

const rta = array.concat(otherArray);
console.log('concat',rta); 