let dreamJob = {user: 'Dan', 
password: 'kitty', 
email: 'DanS@gmail.com', 
roles: ['user', 'admin'] , 
contact:{
    cellphone: '555-867-5309', office: 'Lab.101'} 
}
console.log(dreamJob) //read dream job

dreamJob.salary = 50000
console.log(dreamJob)

dreamJob.roles.push("server-admin")//method adds to the "end" of anarray
console.log(dreamJob)

dreamJob.contact.location = 'East Minneapolis'
console.log(dreamJob)