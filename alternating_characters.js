// JavaScript Algorithm: Alternating Characters
const string = "ABAABBAB";
let repeatedCharacters = 0;
if(string.length > 0){
  for( let i = 0; i < string.length; i++ ){
    if(string[i] === string[i+1]){
      repeatedCharacters++;
    }
  }
}
console.log( repeatedCharacters );

// let  = string.split('');
// let count = 0;arr.map( (s,index) => {
// 	if(s == arr[index+1]){
// 		count++;
// 	}
// })
console.log(s);
