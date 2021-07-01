function fn() {
    var personinfo = {
        name :"latha" ,
        email :"lathapraju123@gmail.com",
        
        contactdetails : {
                mobile: 9900174480,
                landline: 2257455    
        },
         
        address : {
            hno : "405",
            city :"Bangalore",
            State: "Tamilnadu"
        }
    
    }
    //console.log(personinfo) 
    //access inside the object
   console.log(personinfo.name)
   console.log(personinfo.contactdetails.mobile)
   console.log(personinfo.contactdetails.landline)
   //inserting the property
   //personinfo.address.pin= 632006
   //console.log(personinfo)
//updating the proprty
 //personinfo.address.city = "Pune"
 //console.log(personinfo)
//deletethe property
//delete personinfo.address.hno
//console.log(personinfo)

}

fn()


