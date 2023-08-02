let gridLocation = document.querySelector(".grid");
let darkening = 0;
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
            elm.style.backgroundColor = randomColor();
            darkening += 1.6;
        })
    });
}
function randomHexadecimal(){
    if(darkening >= 16){
        return "0";
    }
    let randomNumber = Math.floor(Math.random()*(16 - darkening));
    return randomNumber.toString(16);
}
function randomColor(){
    let hexadecimal ="";
    for(let i = 0; i < 6 ;i++){
        hexadecimal += randomHexadecimal()
    }
    return "#" + hexadecimal;
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
    let box = (800/(16 + number));
    box = notRound(box.toString());
    let bigbox = (16 + number) * box +0.5;
    bigbox = bigbox + "px";
    box = box + "px";
    let elements = gridLocation.querySelectorAll("div");
    gridLocation.style.width = bigbox;
    elements.forEach(element =>{
        element.style.width = box;
        element.style.height = box;
    })
}
function main(){
    darkening = 0;
    let usernumber = Number(arguments[0]);
    let cloneNumber = (16+usernumber) * (16+usernumber);
    cleanDiv();
    for(let i = 0; i < cloneNumber; i++){
        addDiv();
    }
    expandGrid(usernumber);
    addListener();
}main(0);