//Pre-requisites for Android programming = C# or Java.

let takenCSharp = false  // change true false to check. 
let takenJava = false

if (takenCSharp || takenJava){
    console.log('You meet the pre-requistites for MCTC\'s Android class')
} else{
    console.log('You must take C# or Java')
}



// To be a State senator, there are 3 requirements
//30years old, be a US citizen for at least 9yrs, you must live in the State you want to Rep.

//if statement that tells if person can or can not represent Minnesota
// four variable 
let age = 35
let usCitizenTime = 9
let stateOfResidence = 'Minnesota'
let stateWantToRepresent ='Minnesota'

if ( age >= 35 && usCitizenTime >= 9 && stateOfResidence === stateWantToRepresent) {
    console.log('Congrats! You meet the requirements to represent Minnesota in the Senate.')
} else {
    console.log('Please, review the requirements to be a Senator and reaply.')

} 
// truthy. or falsy values -undefined, null, empty lists, empty objects, 0 and false.
//best practice to use triple === unless you want type coresion to happen string value comparison to a number.
if([] === 0) {   //testing not the same. '' undefined {}. 
    console.log('the same!') //truthy
} else{
    console.log('not the same!') //fasly


}
