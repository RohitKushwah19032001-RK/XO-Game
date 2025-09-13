let boxes = document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset-btn");
let newGame = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let drawMsg = document.querySelector("#draw");

let count = 0;

let TurnO = true;

const resetGame = () => {
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
       
        if(TurnO){
            box.innerText = "O";
            TurnO = false;
        }
        else{
            box.innerText= "X";
            TurnO = true;
        }
        box.disabled = true;
        count++;

        checkWinner();
    });
});



const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    };
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "" ;
    };
};

const showWinner = (Winner) => {
         msg.innerText = `Congratulation Winner ${Winner}`;
         msgContainer.classList.remove("hide");
         disableBoxes();
}


const checkWinner = () => {
    for( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Congrtulation Winner",pos1Val);
                showWinner(pos1Val);
              
            };
        
          };
      
        };
             if(count === 9){
                   msg.innerText = "Draw!";
                    msgContainer.classList.remove("hide");
                    disableBoxes();
                };
  
    };



newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);