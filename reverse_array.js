let array=[1,2,3,4,5,6,7];

let rev_array=[];

for(let i=0; i<array.length;i++)
{
   rev_array.unshift(array[i]);
}

console.log(rev_array);