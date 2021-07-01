//function fnarray() {
    //var info=[100,20,"anu","l"]
    ////console.log(info)
    //console.log(info.length)
      //info.push("latha")
    //console.log(info)
    //info.pop()
    //console.log(info)
   // info.unshift("Hosur")
    //console.log(info)
    //info.shift()
    //console.log(info)
//}
//fnarray()


function fnfiltter() {
    var  info=[20,30,45,78,43,31,20,34,21,11,13]
         var filteredstroe  = info.filter(function(e,i){
                      return    e<20 && e<40 
            } )
            return filteredstroe
          

}
 console.log(fnfiltter())