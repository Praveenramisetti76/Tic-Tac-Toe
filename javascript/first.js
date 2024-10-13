let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let mesgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); // Fixed typo here
let turnO = true; // Player X and Player O

// Winning patterns
const winpatterns = [ [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6],[3, 4, 5], [6, 7, 8],];

// Add event listeners for each block
const resetgame = () => {
    turnO = true;
    enableboxes();
    mesgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            // Player O's turn
            box.innerText = "O";
            turnO = false;
        } else {
            // Player X's turn
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`; // Fixed string interpolation
    mesgContainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    // Check if any win patterns exist
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText; // Fixed `innerText` case
        let pos2val = boxes[pattern[1]].innerText; // Fixed typo `patternn`
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);
            }
        }
    }
};

newgamebtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
