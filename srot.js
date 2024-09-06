let person=['rakib','sakib','vakib','hakib','jakib'];

const personshort=person.sort();
console.log(personshort);

let numbers=[3,4,6,78,1,0,12,14,28];

// const numbershort=numbers.sort();
// console.log(numbershort);

// here array sort the number as it short the  
// string that means array short the numbers alfabeticaly


const number_asc=numbers.sort(function (a,b) {return a-b});
const number_dsc=numbers.sort(function (a,b) {return b-a});

console.log(number_asc);
console.log(number_dsc);