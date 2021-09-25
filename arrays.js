let animals =['lion', 'tiger', 'bear'] //creates array name animals.

console.log(animals)  // set console log output could be just animals or [0][1][3][1000 if we had that many].
console.log(animals[1])
console.log(animals[2])
console.log(animals[1000])//undefined.

animals[4] = 'cheetah' //set new element index in array animals as new string name.
animals[3] = 'giraffe' 
console.log(animals)
console.log(animals[6])

animals[1] = 'zerbra'//this will update the index 1 and element tiger to zebra.
console.log(animals) //reads animals array in terminal.

animals.push('elephants') //javascript method push() "adds" to the end of an array.
console.log(animals)

let lastanimal = animals.pop() //method .pop() removes the last element from the array.
console.log(lastanimal)
console.log(animals)

let firstanimal = animals.shift() //method that "removes" and element begeninning .shift().
console.log(firstanimal)
console.log(animals)

animals.unshift('deer') //javascript methods unshift() "adds" to begeninning/start of an array.
console.log(animals)

animals.reverse() //lists array in reverse order.
console.log(animals)

animals.sort() //sort alphabetacialy
console.log(animals)

let numberOfAnimals = animals.length   //counts the length of the array idex
console.log(numberOfAnimals)
// indexof() methods uses:.                                                                            
console.log(animals.indexOf('walrus')) //walru is not in list will show -1. 

if (animals.indexOf('walrus') == -1){    // message will display that no walrus instead of -1. 
    console.log('walrus is not in the array') // message is better because we don't know what to do with -1.

}

if(animals.includes('cheetah')){  // method includes('string') boolean truth false.
        console.log('cheetah is in the array list')
}
console.log(animals.join(' * '))// join() connects elements in the array into a string. * is a seperator of choice.

//looping over an array  loops to make each case to upperCase
animals.forEach( function(animal){
    console.log(animal.toUpperCase())


})
//another looop over the array Use a loop with animals array.
//print/read counts the length of each animal name.  
animals.forEach(function(animalLetters){
    console.log((animal.lengthLatters))

})

//makre a new array with lengths of each animal name.
//my list [ 'bear', 'cheetah', 'deer', 'giraffe', 'zerbra' ],[ 4, 7, 4, 7, 6 ]
// Create new array.

let animals.forEach(function(animalLetters){
    console.log((animal.lengthLatters))

})



