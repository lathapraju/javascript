var obj = {
    c:40
}

function myfun(a,b) {
  var  a=x
   var b=y
    return a+b+ this.c
}

console.log(myfun.apply(obj[30,50]))