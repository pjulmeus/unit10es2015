// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?

// new Set([1,1,2,2,3,4])
// [1,2,3,4]

// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")
// [r,e,f]

// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// {[1,2,3] => true},
// {[1,2,3] => false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and
// returns true or false if that array contains a duplicate

// hasDuplicate = (arr) => new Set(arr).size !== arr.length

// console.log(hasDuplicate([1,3,2,1]))// true
// console.log(hasDuplicate([1,5,-1,4])) // false




// vowelCount
// Write a function called vowelCount which accepts a string and
// returns a map where the keys are numbers and the values are the count of the vowels in the string.

function isVowel(char){
    let vowels = 'aeiou'
    if(vowels.includes(char)) return char
}

const vowelCount = str => {
    let vowelMap = new Map ();
for( let i = 0; i < str.length; i++){
    let char = str[i];
    let lowercase = char.toLowerCase()
 if(isVowel(lowercase)){
    if(vowelMap.has(lowercase)){
        vowelMap.set(lowercase, vowelMap.get(lowercase)+ 1)
    }else {
    (vowelMap.set(lowercase , 1))
 }
}
}
return vowelMap
}
console.log(vowelCount('awesome')) // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
