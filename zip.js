function cityStateUpperCase(city, state){
    let address = `${city} ,  ${state.toUpperCase()}` //example = mn->MN. created template string `${}`.
    return address
}

//alternative ways
console.log(cityStateUpperCase('Minneapolis', "mn"))
//address = cityStateUpperCase('Minneapolis', "mn")
let address = cityStateUpperCase('Seattle', "wa")
//console.log(cityStateUpperCase('Seattle', "wa"))
console.log(address)

function isMinnesotaZip(code){          // function to check zip code falls in with zips used in MN.
    if (code >= 55001 && code <= 56763){  //parameter code places two values for 
        return true //return if it is
    } else {
        return false //return if it is not between or is not Minneasota zip code
    }
             
}

function gpaRange(gpa){          // function to check grade gpa falls in with range.
    if (gpa >= 0 && gpa <= 4){  //parameter gpa places two values for 
        return true //return if it is 0-4.
    } else {
        return false //return if it is not valid gpa 0-4.
    }    
}

//alternate way
// function gpaRange(gpa){          // function to check grade gpa falls in with range.
//     return gpa >= 0 && gpa <= 4  //easier to code, not easier to understand - did work fine.
// }



// can be placed as a string as well comparasion
console.log(isMinnesotaZip(55417)) // call to function and argument value home zip.
console.log(isMinnesotaZip(55403)) // testing different numbers.t
console.log(isMinnesotaZip(56763)) // testing different numbers.t
console.log(isMinnesotaZip(999999)) // testing different numbers.f
console.log(isMinnesotaZip('-1')) // testing different numbers. f


console.log(gpaRange(2))
console.log(gpaRange('-3'))
console.log(gpaRange(5))
console.log(gpaRange(4))
console.log(gpaRange(0))