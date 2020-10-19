/*


Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

*/

function sumFibs(num){
    var pNum = 0;
    var cNum = 1;
    var final = 0;
    while(cNum <= num){
        if(cNum%2!=0){
            final += cNum
        }
        cNum += pNum
        pNum = cNum-pNum
    }
    return final
}

//console.log(sumFibs(1000))

//  Using predefined functions like filter etc... sort code
function sortFibSum(num){
    if(num<=0)    return 0;
    let arrFib = [1, 1]
    let nextFib = 0;
    while((nextFib = arrFib[0] + arrFib[1]) <= num){
        // console.log('***************************************************************************')
        // console.log('Before')
        // console.log(arrFib)
        // console.log("After************")
        arrFib.unshift(nextFib)
        // console.log(arrFib)
    }
    // console.log(arrFib)
    // console.log(arrFib.filter(x=>x%2!=0))
    return arrFib.filter(x => x%2!=0).reduce((a,b)=> a+b)
}

sortFibSum(1000)