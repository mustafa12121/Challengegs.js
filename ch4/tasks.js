/**************************************************************************** */
let inpu = document.querySelector("#task");
let addTask = document.querySelector("[type='submit']");
let show = document.querySelector(".show"),
    newTask,
    delet,
    text,
    spacifaier = 0;
let tasks = {};
if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < Object.values(tasks).length; i++) {
        addNewElelemn(
            Object.values(tasks)[i].title,
            Object.values(tasks)[i].id
        );
        console.log(i);
    }
}
addTask.onclick = function (e) {
    e.preventDefault();
    if (inpu.value !== "") {
        addNewElelemn(inpu.value);
        addToLocal(newTask);
    }
};
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("delet")) {
        Object.values(tasks).forEach((ele, ind) => {
            console.log(ele);
            if (e.target.parentElement.id == ele.id) {
                delete tasks[`${Object.keys(tasks)[ind]}`];
                updataobj(tasks);
            }
            console.log(tasks);
        });
        e.target.parentElement.remove();
    }
});
function addNewElelemn(valu, id = Math.round(Math.random() * 293822983240840)) {
    newTask = document.createElement("div");
    delet = document.createElement("span");
    text = document.createTextNode(valu);
    newTask.title = valu;
    newTask.id = id;
    inpu.value = "";
    delet.classList.add("delet", "botton");
    delet.append("delet");
    newTask.append(text, delet);
    show.append(newTask);
}
function addToLocal(ele) {
    tasks[`ele${spacifaier++}`] = {
        id: ele.id,
        title: ele.title,
    };
    updataobj(tasks);
}
function updataobj(obj) {
    window.localStorage.setItem("tasks", JSON.stringify(obj));
}
