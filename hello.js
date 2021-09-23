console.log('hello World!')

//Three ways to write creat variables
let color = 'blue'
var size = 'medium' //scope is not recommended scope is much wider
const language = 'Javascript' //can't change this value


let quantity = 6
let distance = 4.5

let text = 'Hello World'
let message = "Hi Programmers"

console.log('There are ' + quantity + ' programmers ' )

let todayTemp = 75

//create message"Today's temperature is 75F"

console.log('Today\'s temperature is '+ todayTemp + 'F')

let tempC = (todayTemp -32) * 5 / 9
//console.log('Today\'s temperature is ' + tempC.toFixed(2)+ 'C')
console.log(`Today\'s temperature is ${tempC.toFixed(2)}C which is equivalant ${todayTemp}`)


//Can you use these variable and a template str to console.log the message
 // 'This class is ITEC 2560 Web Programing.'

 let className = "Web Programing"
 let classCode = 2560
 let department = 'ITEC'

console.log(`My new class is ${department} ${classCode} ${className}.`)