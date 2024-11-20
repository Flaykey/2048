let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];
const tileColors = [
    "#cdc1b4", // Default for 0 or undefined
    "#eee4da", // 2
    "#ede0c8", // 4
    "#f2b179", // 8
    "#f59563", // 16
    "#f67c5f", // 32
    "#f65e3b", // 64
    "#edcf72", // 128
    "#edcc61", // 256
    "#edc850", // 512
    "#edc53f", // 1024
    "#edc22e", // 2048
    "#3c3a33", // 4096
    "#605c58", // 8192
    "#786f67", // 16384
    "#8b7e75", // 32768
    "#9c8c83"  // 65536
];

const textColors = [
    "#776e65", // Default for 0 or undefined
    "#776e65", // 2
    "#776e65", // 4
    "#f9f6f2", // 8
    "#f9f6f2", // 16
    "#f9f6f2", // 32
    "#f9f6f2", // 64
    "#f9f6f2", // 128
    "#f9f6f2", // 256
    "#f9f6f2", // 512
    "#f9f6f2", // 1024
    "#f9f6f2", // 2048
    "#f9f6f2", // 4096
    "#f9f6f2", // 8192
    "#f9f6f2", // 16384
    "#f9f6f2", // 32768
    "#f9f6f2"  // 65536
];
  

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }

const HtmlBoard = document.getElementById("board");
const newGameBTN = document.getElementById("new");
function randomPlace(){
    let x,y, c = 0;
    let prob = Math.floor(Math.random() * 3)
    x = Math.floor(Math.random() * 4);
    y = Math.floor(Math.random() * 4);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
                if(board[i][j] == 0) c++;
        }
    }
    if(c == 0){
        return;
    }
    while(board[x][y] != 0 && c!= 0){
    x = Math.floor(Math.random() * 4);
    y = Math.floor(Math.random() * 4);
    }
    // if(prob <= 1)/ 
    board[x][y] = 2;
    // else  board[x][y] = 4;
}

randomPlace();
randomPlace();
function Board(){
HtmlBoard.innerHTML = "";
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = "7vw";
        cell.style.height = "14vh";
        if (board[i][j] != 0){
            cell.style.backgroundColor = tileColors[(getBaseLog(2, board[i][j]))];
            cell.style.color = textColors[(getBaseLog(2, board[i][j]))];
        
        }
        else {
            cell.style.backgroundColor = tileColors[0];
            cell.style.color = textColors[0];
        }
        console.log(getBaseLog(2,board[i][j]));
        if(board[i][j] != 0){ cell.innerHTML = board[i][j].toString();
            console.log("no zero")
        }
        else{ cell.innerHTML = "";}
        HtmlBoard.appendChild(cell);
    }
}
}
newGameBTN.onclick = function(){
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    randomPlace();
    randomPlace();
    Board();
}
Board();

// Attach the keydown event to the game function
document.addEventListener("keydown", game);

function game(event) {
    // let temp = board;
    // if((event.key != "ArrowLeft") || (event.key != "ArrowRight") || (event.key != "ArrowUp" )|| (event.key != "ArrowDown")){
    //     return;
    // }
    switch (event.key) {
        case "ArrowLeft":
            // alert("left");
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    for (let k = j; k >= 0; k--) {
                        if(k==0){
                            continue;
                        }
                        if(board[i][k-1] == 0){
                            board[i][k-1] = board[i][k];
                            board[i][k] = 0;
                        }
                        if(board[i][k-1] == board[i][k]){
                            board[i][k-1] += board[i][k];
                            board[i][k] = 0;
                            break;
                        }
                    }
                }    
            }
            break;
        case "ArrowRight":
            // alert("right");
            for (let i = 0; i < 4; i++) {
                for (let j = 4-1; j >= 0; j--) {
                    for (let k = j; k < 4; k++) {
                        if(k==3){
                            continue;
                        }
                        if(board[i][k+1] == 0){
                            board[i][k+1] = board[i][k];
                            board[i][k] = 0;
                        }
                        if(board[i][k+1] == board[i][k]){
                            board[i][k+1] += board[i][k];
                            board[i][k] = 0;
                            break;
                        }
                    }
                }
            } 
            break;
        case "ArrowUp":
            // alert("up");
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    for (let k = j; k >= 0; k--) {
                        if(k==0){
                            continue;
                        }
                        if(board[k-1][i] == 0){
                            board[k-1][i] = board[k][i];
                            board[k][i] = 0;
                        }
                        if(board[k-1][i] == board[k][i]){
                            board[k-1][i] += board[k][i];
                            board[k][i] = 0;
                            break;
                        }
                    }
                }    
            }
            break;
        case "ArrowDown":
            // alert("down");
            for (let i = 0; i < 4; i++) {
                for (let j = 4-1; j >= 0; j--) {
                    for (let k = j; k < 4; k++) {
                        if(k==3){
                            continue;
                        }
                        if(board[k+1][i] == 0){
                            board[k+1][i] = board[k][i];
                            board[k][i] = 0;
                        }
                        if(board[k+1][i] == board[k][i]){
                            board[k+1][i] += board[k][i];
                            board[k][i] = 0;
                            break;
                        }
                    }
                }
            }
            break;
        default:
            return;
            //break; // Handle other keys if needed
    }
    // console.log(temp);
    // console.log(board);
    randomPlace();
    
    Board();
}

game();