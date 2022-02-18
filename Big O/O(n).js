// O(n) is the most common Big O notation. 
// It is linear in nature
// as number of inputs increase, number of occurrences increase proportionally
// n can be anything in O(n)

const array = new Array(4).fill('algo');
const array1 = new Array(10).fill('algo');
const array2 = new Array(100000).fill('algo');

let findAlgo = inputArray => {
  for( let i = 0; i < inputArray.length;i++){
    if(inputArray[i] === 'algo'){
      console.log('Found Algo');
    }
  }
}

findAlgo(array);
// findAlgo(array1);
// findAlgo(array2);
