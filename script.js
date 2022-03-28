function converter(num) {


  var dec = parseInt(num)
  
  var bin = dec.toString(2)
document.getElementById("resbin").innerText=bin

var octa = dec.toString(8)
document.getElementById("resoct").innerText=octa

var hex = dec.toString(16)
document.getElementById("reshex").innerText=hex

}

