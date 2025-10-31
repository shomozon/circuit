/*
let v_0 = 5;
let v_C = 3;
*/

const input1 = document.getElementById("v_0");
const input2 = document.getElementById("v_C");
const button = document.getElementById("button");
const ptext = document.getElementById("text");
let a = "";
function Click() {
  a = Math.log(1 - parseFloat(input2.value) / parseFloat(input1.value));
  ptext.textContent = "計算結果: t = " + String(Math.round(-a * 1000)/1000)
  + " RC";
}
button.addEventListener("click", Click);
