
var obj = {
    c:100
}

function myfun(x,y,z) {
   var a=x
   var b=y
   var d=z
    return a+b+d+ this.c
}

//var mynewfn= myfun.bind(obj,10,40,50)
//console.log(mynewfn()) anyone method we can execute the program

console.log(myfun.bind(obj,40,79,50)())