const array = new Array(40).fill().map(() => Math.round(Math.random() * 40));

function getOneIndexValue(){
  console.log(array[3]);
}
// in above Big O is O(1) as number of operations are 1

function getTwoIndexsValue(){
  console.log(array[2]);
  console.log(array[4]);
}
// in above Big O is O(2)  as number of operations are 2

function getFiveIndexsValue(){
  console.log(array[2]);
  console.log(array[4]);
  console.log(array[5]);
  console.log(array[6]);
  console.log(array[7]);
}
// in above Big O is O(5)  as number of operations are 5

// So, instead of saying O(2) or O(5) we say it is O(1)

// getOneIndexValue();
//getTwoIndexsValue();
getFiveIndexsValue();

