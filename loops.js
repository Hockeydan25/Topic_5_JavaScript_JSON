let birds = ['Owl', 'Cardinal', 'Humming Bird'] // array birds
console.log(birds) 

//loop - prints each bird . repaets one for each object in the array birds.
//function will be called for each object in the array birds
birds.forEach( function(bird){
    console.log(bird.toUpperCase())
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


