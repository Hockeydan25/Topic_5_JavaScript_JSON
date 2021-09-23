function shout(text) {                      //function is shout. parameter is text.
    let shout_text = text.toUpperCase() + '!!!' //variable shout_text to create a new peice of text.
    return shout_text                           //output ,return.
}

console.log(shout('hello world'))           //call to function shout and adds to the string here 'hello world'.
let message = shout('hello web programmers') //call shout function with variable=message.
console.log(message) // used to display message in Terminal - it works now get two messages.

// function f_to_c(f){   // new function f_to_c.
//     let celsius = (f-32) * 5 / 9 // using a calculation with function value f. 
//     return celsius.toFixed(2) // retun to the nearest 2 decimal place, also could be empty.
// }
// alternative
function f_to_c(f, deciamalPlaces){   // new function f_to_c.
    let celsius = (f-32) * 5 / 9 // using a calculation with function value f. 
    if (deciamalPlaces){ //undefined values are considered false or falsy.
        return celsius.toFixed(deciamalPlaces)
    } else {
        return celsius
    }
    
}


todayTemp = 75  //new vaiable declartion seting value to 75.
todayCelsius = f_to_c(todayTemp, 4) //another variable with an argument call (alt with decimal places defined.)
console.log(todayCelsius) //places to run into 