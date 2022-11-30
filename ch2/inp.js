/*************************************** */
document.forms[0].style =
    "display:flex;flex-direction:column;width:250px;margin:20px auto;gap:10px;";
let inp = document.getElementsByClassName("input");
let setStyle = function (color = "rgba(0, 0, 0, 0.123)") {
    return `padding-left:10px;background-image:radial-gradient(${color} 1%,transparent 70%);background-size:calc(100% /50) 100%;`;
};
let boxShadow = "box-shadow:1px 1px 15px -10px,1px -5px 10px -10px inset";
for (let i = 0; i < inp.length; i++) {
    inp[i].style = ` height:40px;border:none;${boxShadow};${setStyle()};`;
}
let sup = document.querySelector("[name='create']");
sup.style = `height:30px;background-color:rgb(57 225 64);${setStyle()};border:none;${boxShadow};color:white;`;
let resu = document.getElementsByClassName("results")[0];
resu.style = ` 
display:flex;
gap:20px;
flex-wrap:wrap;
margin:10px auto;
width:840px
max-width:100%;
`;
//creating sections and divs
function createElement(num, text, type) {
    resu.innerHTML = "";
    for (let i = 0; i < num; i++) {
        let theNewElement = document.createElement(type);
        let texts = document.createTextNode(text);
        theNewElement.appendChild(texts);
        theNewElement.title = "Element";
        theNewElement.className = "box";
        theNewElement.id = `id-${i + 1}`;
        if (i === num - 2) {
            theNewElement.style = `${setStyle(
                "#ff5d06"
            )};width:250px;background-color:#ff3c36;height:40px;display:inline-flex;justify-content:center;align-items:center;color:white;
     align-self:left`;
        } else if (i === num - 1) {
            theNewElement.style = `${setStyle(
                "#ff5d06"
            )};width:250px;background-color:#ff3c36;height:40px;display:inline-flex;justify-content:center;align-items:center;color:white;align-self:right`;
        } else
            theNewElement.style = `${setStyle(
                "#ff5d06"
            )};width:250px;background-color:#ff3c36;height:40px;display:inline-flex;justify-content:center;align-items:center;color:white;`;

        resu.appendChild(theNewElement);
    }
    if (type == "div")
        resu.style = `display:flex;
                    width:840px;
                    max-width:100%;
                    gap:20px;
                    flex-wrap:wrap;
                    margin:10px auto;justify-content: space-between;`;
    console.log("creat function has ben activate ");
}
let numbe = document.querySelector("[name='elements']").value;
let theText = document.querySelector("[name='texts']").value;
let theType = document.querySelector("[name='type'").value;
document.forms[0].onsubmit = function (eve) {
    eve.preventDefault();
    console.log(`numb=${numbe} the text =${theText} the type =${theType}`);
};
inp[0].oninput = function () {
    numbe = document.querySelector("[name='elements']").value;
};
inp[1].oninput = function () {
    theText = document.querySelector("[name='texts']").value;
    console.log();
};
inp[2],
    (oninput = function () {
        theType = document
            .querySelector("[name='type'")
            .value.toLocaleLowerCase();
    });
sup.onclick = function () {
    console.log("sup hase ben clicked");
    createElement(numbe, theText, theType);
};
