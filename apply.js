
var obj = {
    c:100
}

function myfun(x,y,z) {
   var a=x
   var b=y
   var d=z
    return a+b+d+ this.c
}

console.log(myfun.apply(obj,[100,100,70]))
