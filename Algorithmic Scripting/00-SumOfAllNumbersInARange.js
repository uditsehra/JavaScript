/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10
*/

let sumAll = (arr)=>{
    var x = arr[0]; var y = arr[1];
    var max = 0; var min = 0;

    if(x<y){
        max = y;
        min = x;
    }
    else{
        max = x;
        min = y;
    }
    var sum = 0;

    for(var i= min; i<=max; i++){
        sum = sum + i;
    }

    return sum;
}

console.log(sumAll([1,4]))
// Or we can also use Math.max() or Math.min() function to determine which is min or max.

//Another approach will be
const sumAll = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };

  //Recursive solution for the same will be
  function sumAll([ first, last ] ) {
    const step = first - last < 0 ? 1 : -1;
    return first !== last
      ? first + sumAll([ first + step, last ])
      : first;
   }