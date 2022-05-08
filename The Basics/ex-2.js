let number = 4936;
let digits ={};
let tables =['ones','tens','hundreds','thousands','ten-thousands','...'] 
while(number>0){
  let digit = number%10
  digits[digit]='';
  number= Math.floor(number/10);

}
tables.forEach((table,index)=>{
  let key = Object.keys(digits)[index];
  key ? digits[key]= table : key
})
console.log(digits)
//console.log(Object.keys(digits).length,Object.keys(digits));
// console.log(parseInt(digits.reverse().join('')))