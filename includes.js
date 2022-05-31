const pets= ['dog','cat', 'snack','bird'];

let includeInArray = false;
for ( let index = 0 ; index < pets.length ; index ++){
    elemtent = pets[index];
    if( elemtent === 'dog'){
        includeInArray = true
        break
    }
};

console.log('for',includeInArray);

const rta = pets.includes('dog');

console.log('include', rta);