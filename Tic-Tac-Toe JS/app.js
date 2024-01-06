// SRC= "Shradha Kapra"
// "https://www.youtube.com/watch?v=SqrppLEljkY"

let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset");
let turnO=false;
const winPatterns= [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
        box.addEventListener("click", () => {
        if(turnO){
        box.innerText="O";
        turnO=false;
        box.disabled= true;
        }else{
        box.innerText="X";
        turnO=true;
        box.disabled= true;
        }   
        // box.disabled= true;
        console.log("The buttons is clicked");
        checkWinner();
    });
});

const DisableBtns =() =>{
    for(let box of boxes){
        box.disabled=true;
        box.style.transform="none";
    }
}

const checkWinner = () => {
    for(let pattern of winPatterns){

        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1 == posval2 && posval2 == posval3 && posval1=="O"){
            DisableBtns();
            setTimeout( function(){alert("The winner is " + posval1)},500);
        }else if(posval1 == posval2 && posval2 == posval3 && posval1=="X"){
            DisableBtns();
            setTimeout(function(){alert("The winner is " + posval1)},500);
        }
    }
}

const enableBtns =() =>{
for(let box of boxes){
    box.disabled=false;
    box.style.transform="";

}
}

resetBtn.addEventListener("click",()=>{
    enableBtns();
    boxes.forEach((box)=>{    
        let val= box;
        val.innerText="";
    })
    turnO=false;
});