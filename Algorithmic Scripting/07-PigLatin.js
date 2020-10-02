/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.
*/

function toPigLatin(str){
    var str1=''; var str2='';
    var reg = /[aeiou]/;

    if(reg.test(str)==false){
        return str.concat('ay')
    }
    else{
        if(str[0]=='a'|str[0]=='e'|str[0]=='i'|str[0]=='o'|str[0]=='u')
        {
            return str.concat('way')
        }
        else{
          for(var i=0; i<str.length; i++)
          {
            if(str[i]=='a'|str[i]=='e'|str[i]=='i'|str[i]=='o'|str[i]=='u')
            {
              str1 = str.slice(i, str.length)
              str2 = str.slice(0, i)
              break  
            } 
          }
          return str1.concat(str2).concat('ay')
        }
    }
}

console.log(toPigLatin('contrast'))