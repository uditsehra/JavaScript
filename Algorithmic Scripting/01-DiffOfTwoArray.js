/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
*/

//BruteForce
function diffArrayBruteForce(arr1, arr2){
    var newArr = [];

    function onlyInFirst(first, second){
        for(var i=0; i<first.length; i++){
            if(second.indexOf(first[i])===-1)
                newArr.push(first[i])
        }
    }

    onlyInFirst(arr1, arr2)
    onlyInFirst(arr2, arr1)

    return newArr
}

console.log(diffArrayBruteForce([1,2,3,4,5,6],[2,3,6])) // [1, 3, 5]


//Elegant method
const diffArray = (arr1, arr2) =>{
    return arr1.concat(arr2).filter(item=>!arr1.includes(item)||!arr2.includes(item))
}

console.log(diffArray([1,2,3,4,5,6],[1,2,3]))       // [4, 5, 6]

//Same as elegant but used spread operator.
const diffArrayCompEasy=(ar1, ar2)=>{
    return [...diff(ar1, ar2), ...diff(ar2, ar1)];

    function diff(a, b){
        return a.filter(item=>!b.includes(item))
    }
}

console.log(diffArrayCompEasy([1,2,3,4,5], [2,5,6]))