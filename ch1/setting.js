let fontInp = document.querySelector("div select");
let colorlis = document.querySelectorAll("div span");
let sizeInp = document.querySelector("#size");
let resul = document.querySelector(".resulet");

/**################################################### */
//changing the font fmaily
fontInp.addEventListener("input", apllyFont);

/*################################################### */
//applay the font prupartis in from the local storage if ther any
if (window.localStorage.getItem("fontFamly")) {
    fontInp.value = window.localStorage.getItem("fontFamly");
    resul.style.fontFamily = window.localStorage.getItem("fontFamly");
}

if (window.localStorage.getItem("fontColor")) {
    removActive();
    document
        .querySelector(
            `[data-color="${window.localStorage.getItem("fontColor")}"] `
        )
        .classList.add("active");
    apllyColor(window.localStorage.getItem("fontColor"));
}

if (window.localStorage.getItem("fontSize")) {
    sizeInp.value = window.localStorage.getItem("fontSize");
    apllySize(window.localStorage.getItem("fontSize"));
} else {
    sizeInp.value = 16;
}
/*##################################################### */
//changing the font color
colorlis.forEach(function (ele) {
    ele.addEventListener("click", chosColor);
});

/*##################################################### */
//changing the font size
sizeInp.addEventListener("input", (e) => apllySize(e.target.value));
/*########################################## */
//the functions
function apllyFont(e) {
    resul.style.fontFamily = e.target.value;
    updateLocal("fontFamly", e.target.value);
}

function updateLocal(nam, val) {
    window.localStorage.setItem(nam, val);
}

function chosColor(e) {
    removActive();
    e.target.classList.add("active");
    apllyColor(e.target.dataset.color);
}

function removActive() {
    colorlis.forEach((ele) => ele.classList.remove("active"));
}

function apllyColor(eleColor) {
    resul.style.color = eleColor;
    updateLocal("fontColor", eleColor);
}

function apllySize(eleSize) {
    resul.style.fontSize = `${eleSize}px`;
    updateLocal("fontSize", eleSize);
}
