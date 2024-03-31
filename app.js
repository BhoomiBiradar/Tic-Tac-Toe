let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameButton = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
let win = false;


let turnO = true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
    turnO =true;
    enableboxes();
    msgContainer.classList.add("hide");
    win = false;
    count = 0;

};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        checkDraw();
    })
});

const disabledBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner=(winner)=>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

};

const showHide=()=>{
    msg.innerText = `It was a Draw`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};
const checkWinner = ()=>{
    for (let pattern of winpatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 !="" && posVal2 !="" && posVal3 !=""){
            if(posVal1==posVal2 && posVal2==posVal3){
                win = true;
                showWinner(posVal1);

            }
        }
    }
};

const checkDraw = ()=>{
    if (win == false && count ==9){
        showHide();
    }
};

newGameButton.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);




