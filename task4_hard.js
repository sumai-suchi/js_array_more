const statement='I am a hard working person';

//  const newone1='';

const newone=statement.split(' ');

const new2=[];


for(let i=newone.length-1;i>=0;i--)
{
    new2.push(newone[i]);
}

console.log(new2.join(' '));