let gridLocation = document.querySelector(".grid");
document.querySelector(".add").addEventListener("click",(e)=>{
    addNumber = Number(getUserNumber());
    expandGrid(addNumber);
    main((16 + addNumber) * (16 + addNumber));
})
function addDiv(){
    let newDiv = document.createElement("div");
    gridLocation.appendChild(newDiv);
}
function addListener(){
    let elements = gridLocation.querySelectorAll("div");
    elements.forEach(elm => {
        elm.addEventListener("mouseover",(e)=>{
            elm.classList.add("hovering")
        })
    });
}
function cleanDiv(){
    let removeLocation = gridLocation.querySelectorAll("div");
    removeLocation.forEach(location =>{
        location.remove();
    })
}
function getUserNumber(){
    let number = prompt("Number row and column add(Max 100):",0)
    if(number > 100){
        return 100;
    }
    return number;
}
function expandGrid(number){
    let box = number * 33;
    gridLocation.clientWidth += box;
    gridLocation.clientWidth += box;
}
function main(){
    cloneNumber = Number(arguments[0]);
    cleanDiv();
    for(let i = 0; i < cloneNumber; i++){
        addDiv();
    }
    addListener();
}main(16*16);