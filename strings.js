let text = 'The classes are itec 1150, itec 1250, and itec 2560. '

let replaced = text.replace('itec', 'ITEC') //replaces only the first itec.
console.log(replaced)

let replacedAll = text.replace(/itec/g, 'ITEC') //replaces ALL itec.
console.log(replacedAll)

let message = 'The class numbers are 1150,1250, and 2560. '
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')// /\d{4}/g - finds all 4 digits last part inserts the ITEC.
// if(message.length >4 ){
//     replaceRegex = message.trim([0]) was trying to trim out the 0 in the numbers. Testing this still.
// }
console.log(replaceRegex)  