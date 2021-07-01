function fn(f1,f2) {

    console.log("Executing")
    f1()
    f2()
}
    
//fn(function() {
 //   console.log("function f1 is called")
//},
//function (){
 //   console.log("function f2 is called")    
//})

function fx(v1,v2,v3) {
    var num1=v1
    var num2=v2
    var num3=v3
    return num1+num2+num3
}
var result=fx(2,3,7)
console.log(result)
