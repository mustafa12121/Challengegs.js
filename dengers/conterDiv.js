/* never run this code on my computer it is a viros*/
let vario = document.createElement("div"),
  wind;
window.time = 500;
vario.append("start the show!!! :)");
vario.style = `
width:100px ;
height:50px;
display:flex;
align-items: center;
justify-content: center;
border-radios:7px;
background-color:#eee;
color:#009688;
cursor:pointer;
`;
vario.id = "kill";

document.body.append(vario);

let stop = setTimeout(() => {
  wind = window.open(
    window.location,
    "_blank",
    `width=200px; height=200px; popup left=${Math.trunc(
      Math.random() * 3473
    )}; top=${Math.trunc(Math.random() * 3697)}`
  );
  window.location.reload();
}, time);
vario.onclick = function () {
  clearTimeout(stop);
};
