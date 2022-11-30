/**************************************************************************** */
let popup = document.createElement("div"),
    popHeading = document.createElement("h3"),
    popP = document.createElement("p"),
    consle = document.createElement("span"),
    cros = document.createElement("span");
consle.append(cros);
cros.style = `
    background-color:black;
    clip-path:;
    width:20px;
    height:20px;
    position: absolute;
    top:0;
    left:0;
    clip-path: 
    polygon(5% 0,50% 45%,95% 0%,100% 5%,55% 48%,100% 95%,95% 100%,50% 55%,5% 100%,0 95%,45% 50%,0 5%,5% 0);
`;
consle.style = `
    position: absolute;
    background-color: red;
    border: 1px solid;
    width:20px;
    height:20px;
    border-radius: 50%;
    top:  -10px;
    right: -10px;
    overflow: hidden;

`;
consle.className = "consele";
popHeading.append("mustafa popup");
popHeading.style = `
    border-bottom:1px solid;
    padding-bottom:5px;
    color:#009666;
`;
popP.append("Welcome to my testing site <3");
popP.style = `
color:#009688;
font-weight: bold;
`;
popup.append(consle);
popup.append(popHeading);
popup.append(popP);
popup.style = `
width:200px;
height:100px;
position: fixed;
background-color:#eee;
border-radios:6px;
text-align:center ;
padding:15px 20px;
bottom:50px;
right:50px;
font-family:Tahoma,Arial;
text-transform:capitalize;
`;
setTimeout(function () {
    document.body.append(popup);
}, 3000);
consle.onclick = function () {
    popup.remove();
};
