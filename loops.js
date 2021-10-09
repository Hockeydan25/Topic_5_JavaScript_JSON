let birds = ['Owl', 'Cardinal', 'Humming Bird'] // array birds
console.log(birds) 

//loop - prints each bird . repaets one for each object in the array birds.
//function will be called for each object in the array birds
birds.forEach( function(bird, index){
    console.log(index, bird.toUpperCase())
}) 
for( let x=0 ; x < birds.length ; x++){ 
//counter need 3 conditions x is declared 0, repeats by length of the array birds, increments by each time its loop by x++. 
//then we want to start the count to
    let bird = birds[x]
    console.log(bird.toUpperCase())
}

//tradional for loops
for(let x=0; x < birds.length; x++ ){ // length is a property 
    let bird = birds[x]
    console.log(x, bird.toUpperCase()) //x is indexing the array. converter method touppercase.   
}
//while loops not common

let text = 'Hello World!' //text variable isdeclared to = a string.

let stringLength = text.length // length property

let shouts = text.toUpperCase() //uilt in method converts string to uppercase.

let whisper = text.toLowerCase() // method to change lowercase characters.

let whereIsW = text.indexOf('w') //Index of foirst matching character or -1 if not found.

let whereIsZ = text.indexOf('Z') //Index of foirst matching character or -1 if not found.

let whisperAndShout = whisper.concat(shouts) //joins string together

let replace0 = text.replace('o', '0') //* Replaces the first instance of the first thing with a second thing*//
                                           //augement o , g = Global Scope.
let reaplceAll0 = text.replace(/o/g, '0')//* Replaces the all instance of the first thing with a second thing*// 

let removeWhiteSpace = text.trim()//method removes spaces, tabs,/n new lines from both ends of a string.

console.log(stringLength, shouts,whisper, whereIsW, whereIsZ,whisperAndShout,
    replace0, reaplceAll0, removeWhiteSpace  )