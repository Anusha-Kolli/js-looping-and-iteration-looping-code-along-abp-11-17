// Code your solutions in this file
let element =[];

function printBadges(element){

 for(let i = 0 ; i < element.length ; i++)
 {
   console.log(`Welcome ${element[i]}! You are employee #${i+1}.`);

 }
return element;
}
printBadges(element);

function tailsNeverFails() {
 let i = 0 ;
  while(Math.random() >= 0.5) {
    i++;
  }
  console.log(`You got ${i} tails in a row!`)
}
