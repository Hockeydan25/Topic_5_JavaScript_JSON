let user = { username: 'Dan', password: 'kitty' } //object with two properties username password
//two properties wit values as string data types: dan and kitty. ":" is the joiner 

console.log(user.username)//Dan. this is recommended version simple 
console.log(user['username'])//Dan , property need to be a string here, using array to look at the username.
console.log(user.password)//kitty
console.log(user['password'])//kitty

let whatProperty = 'password' //using a variable to cast the into useable read/output. 
console.log(user[whatProperty]) 

let userNameProperty = 'username'
console.log(user[userNameProperty])
//JavaScript Object Notation JSON jason. Dictionary like structure.
//{ name: value, name2: value2} Values can be anything strings, numbers, list,other objects - it can have a nested structure.

user.password = 'elaphant'  //changing password
console.log(user)


user['password'] = 'aligator' //changing password 
console.log(user)
//new properties
user.email = 'danS@gamil.com' //creating a new property named email.
console.log(user)
console.log(user.email)




