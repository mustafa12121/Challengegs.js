let namInp = document.querySelector("div:nth-of-type(1) input");
let numInp = document.querySelector("div:nth-of-type(2) input");
let addrInp = document.querySelector("div:nth-of-type(3) input");
let selec = document.querySelector("#selec");

if (window.sessionStorage.getItem("userName")) {
    namInp.value = window.sessionStorage.getItem("userName");
}
if (window.sessionStorage.getItem("userNumber")) {
    numInp.value = window.sessionStorage.getItem("userNumber");
}
if (window.sessionStorage.getItem("userAddress")) {
    addrInp.value = window.sessionStorage.getItem("userAddress");
}
if (window.sessionStorage.getItem("userSelection")) {
    selec.value = window.sessionStorage.getItem("userSelection");
}
window.onload = () =>
    namInp.addEventListener("input", (e) => storeg("userName", e.target.value));
namInp.onblur = () => numInp.focus();
numInp.addEventListener("input", (e) => storeg("userNumber", e.target.value));
numInp.onblur = () => addrInp.focus();
addrInp.addEventListener("input", (e) => storeg("userAddress", e.target.value));
addrInp.onblur = () => selec.focus();
selec.addEventListener("change", (e) =>
    storeg("userSelection", e.target.value)
);
document.forms[0].onsubmit = () => window.sessionStorage.clear();
function storeg(nam, valu) {
    window.sessionStorage.setItem(nam, valu);
}
