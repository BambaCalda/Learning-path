const row = document.querySelector('.row');
const list = document.querySelectorAll(".list");
const listContainer = document.querySelector('.show');
const item = document.getElementById("item");
const itemname = document.getElementById("itemname");

    document.querySelectorAll(".icoHide").forEach((icon) => {
    icon.style.display = "none";
    });

item.addEventListener("click", () => {
    row.classList.toggle("rotate");
    listContainer.classList.toggle("show");
});

list.forEach((miniitem) => { 
    miniitem.addEventListener("click", () => {
        itemname.textContent = miniitem.textContent;
        row.classList.toggle("rotate");
        listContainer.classList.toggle("show");
        document.querySelectorAll(".icoHide").forEach((icon) => {
        icon.style.display = "none";
     });
        miniitem.querySelector('.icoHide').style.display = 'inline-block';
})});
