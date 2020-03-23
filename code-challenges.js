// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy,"}, {name: "arthur dent", occupation: "radio employee"}]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."

const describer = (array) => {
    let names = array.map(value => value.name.replace(/(\b[a-z])/g, x => {return x.toUpperCase();}))
    let occupation = array.map(value => value.occupation)
    for (let i = 0; i<names.length; i++){
        console.log(`${names[i]} is a ${occupation[i]}`)
    }
}

describer(people)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const remainder = (array) => {
    let filtered = (array.filter(value => typeof(value) === 'number'))
    return (filtered.map(value => value % 3))
}

console.log(remainder(testingArray1));
console.log(remainder(testingArray2));

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]



const noDup = (arr1, arr2) => {
    let combined = arr1.concat(arr2)
    let end = []
    for (let i = 0; i<combined.length;i++) {
        if (end.includes(combined[i]) === false) {
            end.push(combined[i])
        }
    } return end
}

console.log(noDup(testingArray3, testingArray4));
