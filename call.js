var obj = {
    c:100
}

function myfun(x,y) {
   var a=x
   var b=y
    return a+b+ this.c
}

console.log(myfun.call(obj,100,100))