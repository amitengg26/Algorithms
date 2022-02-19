// CALCULATE BIG O of below function
// LETS DO THIS STEP BY STEP
// ES6 SYNTAX
calculateBigO = array => {
  let age = 32; // ONE OPERATION SO O(1)
  age = age + 4;// ONE OPERATION SO O(1)
  
  array.map( () => {
    randomfunction(); // WE ARE NOT SURE ABOUT HOW MANY TIMES IT WILL LOOP AS IT DEPENDS UPON ARRAY LENGTH SO O(n)
    age++;// WE ARE NOT SURE ABOUT HOW MANY TIMES IT WILL LOOP AS IT DEPENDS UPON ARRAY LENGTH SO O(n)
  }
}

 // OVERALL BIG(O) = O(1 + 1 + n + n).... which is like O(2+ 2n)... which is like O(n)
// ES5 SYNTAX
function calculateBigO(array){
  let age = 32;
  age = age + 4;
    
  for(let i = 0; i < array.length; i++){
    randomfunction();
    age++;
  }  
}
