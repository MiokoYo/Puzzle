const rows = 4;
const colomns = 4;

let currTile;
let otherTile;

let turns = 0;

window.onload = function () {
    // 4x4 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < colomns; c++) {
            // img
            let tile = document.createElement("img");
            tile.src = "./images/white.jpg";

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);
            document.getElementById("board").append(tile);
        }
    }

    //ppieces
    let ppieces = [];
    for (let i = 1; i <= rows * colomns; i++) {
        ppieces.push(i.toString());
    }
    ppieces.reverse();
    for (let i = 0; i < ppieces.length; i++) {
        let j = Math.floor(Math.random() * ppieces.length);

        let tmp = ppieces[i];
        ppieces[i] = ppieces[j];
        ppieces[j] = tmp;
    }

    for (let i = 0; i < ppieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./images/" + ppieces[i] + ".jpg";

        //drag function
        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);
        document.getElementById("ppieces").append(tile);
    }
}

function dragStart() {
    currTile = this;
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
}
function dragLeave() {

}
function dragDrop() {
    otherTile = this;
}
function dragEnd() {
    if (currTile.src.includes("white")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("number").innerText = turns;
}