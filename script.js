/* function converter(num) {


  var dec = parseInt(num)
  
  var bin = dec.toString(2)
document.getElementById("resbin").innerText=bin

var octa = dec.toString(8)
document.getElementById("resoct").innerText=octa

var hex = dec.toString(16)
document.getElementById("reshex").innerText=hex

}

 */


function converter() {

var input = st.value

var select = sct.value

if (select == "dec") {

  let title = document.querySelector("#h1");
  let title2 = document.querySelector("#h2");
  let title3 = document.querySelector("#h3")
  title.textContent = "Binário"
  title2.textContent = "Octal"
  title3.textContent = "Hexadecimal"
  let dec = parseInt(input, 10)
  
  let bin = dec.toString(2)
document.getElementById("resbin").innerText=bin

let octa = dec.toString(8)
document.getElementById("resoct").innerText=octa

let hex = dec.toString(16)
document.getElementById("reshex").innerText=hex



}

if (select == "bin") {

  let title = document.querySelector("#h1");
  let title2 = document.querySelector("#h2");
  let title3 = document.querySelector("#h3")
  title.textContent = "Decimal"
  title2.textContent = "Octal"
  title3.textContent = "Hexadecimal"
  
  let bin = parseInt(input, 2)
  let dec = bin.toString(10)
  
document.getElementById("resbin").innerText=dec

let octa = bin.toString(8)
document.getElementById("resoct").innerText=octa

let hex = bin.toString(16)
document.getElementById("reshex").innerText=hex


}


if (select == "oct") {
  let title = document.querySelector("#h1");
  let title2 = document.querySelector("#h2");
  let title3 = document.querySelector("#h3")
  title.textContent = "Binário"
  title2.textContent = "Decimal"
  title3.textContent = "Hexadecimal"
  let octa = parseInt(input, 8)
  let bin = octa.toString(2)
  
document.getElementById("resbin").innerText=bin

let dec = octa.toString(10)
document.getElementById("resoct").innerText=dec

let hex = octa.toString(16)
document.getElementById("reshex").innerText=hex



}

if (select == "hex") {
  let title = document.querySelector("#h1");
  let title2 = document.querySelector("#h2");
  let title3 = document.querySelector("#h3")
  title.textContent = "Binário"
  title2.textContent = "Octal"
  title3.textContent = "Decimal"
  let hex = parseInt(input, 16)
  let bin = hex.toString(2)
  
document.getElementById("resbin").innerText=bin

let octa = hex.toString(8)
document.getElementById("resoct").innerText=octa

let dec = hex.toString(10)
document.getElementById("reshex").innerText=dec





}


}