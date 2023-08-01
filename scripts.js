let gridLocation = document.querySelector(".grid");
document.querySelector(".add").addEventListener("click",(e)=>{
    main(getUserNumber());
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
function notRound(number){
    let isDecimal = 0;
    let numberAfter = 0;
    let newNUmber = 0;
    let numberLeght = 0;
    for(num of number){
        numberLeght++;
        if(num == "."){
            isDecimal = 1;
        }
        else if(isDecimal == 1){
            if(numberAfter == 2){
                newNUmber = number.slice(0,numberLeght-1);
                return newNUmber;
            }
            else{
                numberAfter++;
            }
        }
    }
    return number; 
}
function expandGrid(number){
    let box = (800/(16 + number)).toString() ;
    box = notRound(box);
    console.log(box);
    box = box + "px";
    let elements = gridLocation.querySelectorAll("div");
    elements.forEach(element =>{
        element.style.width = box;
        element.style.height = box;
    })
}
function main(){
    let usernumber = Number(arguments[0]);
    let cloneNumber = (16+usernumber) * (16+usernumber);
    cleanDiv();
    for(let i = 0; i < cloneNumber; i++){
        addDiv();
    }
    expandGrid(usernumber);
    addListener();
}main(0);