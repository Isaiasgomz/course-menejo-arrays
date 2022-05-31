const nums = [
    [1,2,3,4],
    [5,6,7,8,[11,12,[13,14]]],
    [9,10],
];

const newArray= [];
for(let i = 0 ; i< nums.length ; i++) {
    array = nums[i];
    for (let d = 0; d < array.length; d++) {
        const element = nums[i][d];
        for (let s = 0; s < element.length; s++) {
            const element2 = element[i][d][s];
            newArray.push(element2);
        }
    }
}


console.log('FOR', newArray);

const rta = nums.flat(3);
console.log('flat',rta);
    
