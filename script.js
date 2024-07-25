let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let info = document.querySelector(".info");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => boxClicked(box, index));
    box.classList.add("boxtext");
});

resetbtn.addEventListener("click", resetGame);

function boxClicked(box, index) {
    if (!box.classList.contains("x") && !box.classList.contains("o")) {
        if (turnO) {
            box.classList.add("o");
            box.innerText = "O";
            info.innerText = "Turn for X";
        } else {
            box.classList.add("x");
            box.innerText = "X";
            info.innerText = "Turn for O";
        }
        turnO = !turnO;
        checkwin();
    }
}

function checkwin() {
    let boxtext = document.getElementsByClassName("boxtext");
    winpatterns.forEach(e => {
        if (
            boxtext[e[0]].classList.contains("x") && 
            boxtext[e[1]].classList.contains("x") && 
            boxtext[e[2]].classList.contains("x")
        ) {
            info.innerText = "X won";
            info.style.color = "red";
            disableBoxes();
        } else if (
            boxtext[e[0]].classList.contains("o") && 
            boxtext[e[1]].classList.contains("o") && 
            boxtext[e[2]].classList.contains("o")
        ) {
            info.innerText = "O won";
            info.style.color = "red";
            disableBoxes();
        }
    });
}

function disableBoxes() {
    boxes.forEach(box => {
        box.removeEventListener("click", boxClicked);
    });
}

function resetGame() {
    boxes.forEach(box => {
        box.classList.remove("x");
        box.classList.remove("o");
        box.innerText = "";
        box.addEventListener("click", () => boxClicked(box));
    });
    info.innerText = "Turn for O";
    info.style.color = "black";
    turnO = true;
}
