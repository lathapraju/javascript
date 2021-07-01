function fn() {
    var personinformation = {
        name :"A2N",
        email : "latha@gmail.com" ,
        mobile: '990017489'
    }
 // console.log(personinformation)   
// access the property inside the object
//console.log(personinformation.name)
//console.log(personinformation.email)
//inserting the property
//personinformation.city="Bangalore"
//console.log(personinformation)
personinformation.city="Delhi"
console.log(personinformation)

personinformation.age="27"
personinformation.email="lathaweb002@gmail.com"
console.log(personinformation)

//delete the object
delete personinformation.email
console.log(personinformation)
  }
fn()
