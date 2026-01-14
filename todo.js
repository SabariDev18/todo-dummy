
const additem = () => {

    let userinput = document.querySelector("#inp").value
    // console.log(userinput)
    let listitem = document.createElement("li")
    listitem.textContent = userinput
    let list = document.querySelector("#todo")
    list.appendChild(listitem)
    console.log(listitem);
}
let btn = document.querySelector("#btn")
// btn.addEventsListener("click",additem)
btn.addEventListener("click", additem)