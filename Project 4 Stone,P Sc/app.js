// 1st var - cpu generated random out of the three available options (random)
// 2nd var - user input (event listener id)
// compare both - if else if . . . . . . !
// then -> either score of cpu ++ else user++
// Play Your Move 

// var compOp=
var availDivs= document.querySelectorAll(".choice");
availDivs.forEach((div)=>{
    div.addEventListener(("click"), ()=>{
            const userOp= div.getAttribute("id");
            console.log("Choice selected by the user : ", userOp);
            gameWin(userOp);
    })
});

// console.log(userOp);

const availChoices=["rock","paper","scissors"];

const compOp=()=>{
    let randIdx= Math.floor(Math.random())*3;
    console.log("Choice by the comp : ",availChoices[randIdx]);
    return availChoices[randIdx];
};

var userWinner;
const playGame=(userOp)=>{
    const compChoice= compOp();
    if(compChoice===userOp){
        winner= "Draw";
    } else if (userOp === "rock"){
        userWinner  = compChoice==="paper" ? "Lose":"Win";
    }else if (userOp === "paper"){
        userWinner  = compChoice==="rock" ? "Win":"Lose";
    } else if  (userOp === "scissors"){
        userWinner  = compChoice==="paper" ? "Win":"Lose";
    }  else{
        console.log("Empty");
    }
}
const gameWin=(userOp)=>{
    playGame(userOp);
    if(userWinner==="Win"){
        console.log("Congrats, You Win !");
    }else if(userWinner==="Draw"){
        console.log("Match was drawn");
    }else{
        console.log("You Lose");
    }
}