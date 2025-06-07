const addbtn = document.getElementById("addbtn");
const task = document.getElementById("taskInput");
const list = document.getElementById("list");
const array = [];

addbtn.addEventListener("click", () => {
    if(task.value.trim() === 0) return
    array.push({state: false, description: task.value.trim()});
    task.value = "";
    renderTask();
})

function renderTask(){
    list.innerHTML = "";

    array.forEach((item, idx) => {
        const li = document.createElement("li");
        li.innerHTML = 
        `<input type="checkbox" class="checkbox" id="item" ${item.state ? "checked" : ""}/>
          <span class="${item.state ? "overline" : ""}">${item.description}</span>
          <i id="trash" class="fa-solid fa-trash"></i>`;
        
        li.querySelector(".item").addEventListener("click", () => {
            array[idx].state = !array[idx].state;
            renderTask();
        })

        li.querySelector(".trash").addEventListener("click", () => {
            array.splice(idx, 1);
            renderTask();
        })
        list.appendChild(li);
    })
}
