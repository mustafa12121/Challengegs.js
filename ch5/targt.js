//**************************************************** */ */
let targt, newEle, classToRemove, classToAdd;
let addSorc = document.querySelector(".classes-to-add");
let fals = document.createElement("div");
fals.append("No Class to show");
fals.style = `text-align:center;`;
document.querySelector(".assign .classes-list div").append(fals);
addSorc.addEventListener("blur", function () {
    if (addSorc.value !== "") {
        classToAdd = addSorc.value.toLocaleLowerCase().split(" ");
        targt = document.querySelector(".assign .classes-list div");
        for (let i = 0; i < classToAdd.length; i++) {
            if (classToAdd[i] === "") {
                continue;
            }
            targt.classList.add(classToAdd[i]);
        }
        //******************** */
        addSorc.value = "";
        addSorc.nextElementSibling.focus();
        classListener();
    } else console.log("none to add");
});
addSorc.nextElementSibling.addEventListener("blur", function () {
    if (addSorc.nextElementSibling.value !== "") {
        classToRemove = addSorc.nextElementSibling.value
            .toLocaleLowerCase()
            .trim()
            .split(" ");

        targt = document.querySelector(".assign .classes-list div");
        for (let i = 0; i < classToRemove.length; i++) {
            if (classToRemove[i] === "") {
                continue;
            }
            targt.classList.remove(classToRemove[i]);
        }
        //******************** */
        addSorc.nextElementSibling.value = "";
        classListener();
    } else console.log("none to remove");
});
function classListener() {
    targt = document.querySelector(".assign .classes-list div");
    newEle = Object.values(targt.classList).sort();
    targt.innerHTML = "";
    for (let i = 0; i < newEle.length; i++) {
        let spa = document.createElement("span");
        let cla = document.createTextNode(newEle[i]);
        spa.appendChild(cla);
        targt.appendChild(spa);
    }
    if (targt.innerHTML === "") {
        let fals = document.createElement("div");
        fals.append("No Class to show");
        fals.style = `text-align:center;`;
        targt.append(fals);
    }
}
