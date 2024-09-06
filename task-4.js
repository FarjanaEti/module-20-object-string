// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let word='axis or AxIS';
let replaces='';
for(let i=0; i<=word.length; i++ ){
     if(word[i]==='x'){                  
          replaces= word.replace("x","y");                      
     }  
     else if(word[i]==='X'){
          replaces= word.replace("X","Y");                     
     }                     
}
// console.log(replaces);

// Capitalize Every first Letter of each word in a String
const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
words.join("");
console.log(words);