/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
    let reg = /[A-Z]/
    if(reg.test(before[0])){
      after = after[0].toUpperCase().concat(after.substring(1, after.length))
    }
  
    if(reg.test(before[0])==false && reg.test(after)==true){
      after = after[0].toLowerCase().concat(after.substring(1, after.length))
    }
  
    let strBefore = str.slice(0, str.indexOf(before))
    let strAfter = str.slice(str.indexOf(before)+before.length, str.length)
    return strBefore.concat(after).concat(strAfter)
  }

  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))  