let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let mcontainer = document.querySelector(".msgcontainer");
let message = document.querySelector("#msg");



let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],                                                                                //Winning pattern
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
        }else {
            box.innerText = "X";                                                            //Insert X/O in the box
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) => {
  message.innerText = `Congratulation, Player ${winner} is Winner!!`;                     //Type winner message 
  mcontainer.classList.remove("hide");
  disabledgame();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {                                //Check winning pattern
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
        }
      }
    }
};

const disabledgame = () => {
  for (let i of boxes){
    i.disabled = true;
  }
};

const enabledgame = () => {
  for (let i of boxes){
    i.disabled = false;
    i.innerText ="";
  }
}; 

const resetgame = () => {
  turnO = true;                                                                                     //Reset the game 
  enabledgame();
  mcontainer.classList.add("hide");
};

newGameBtn.addEventListener("click",resetgame);   //new game button
resetBtn.addEventListener("click",resetgame);    //reset button