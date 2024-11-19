let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];
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
    if(prob <= 1) board[x][y] = 2;
    else  board[x][y] = 4;
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
        switch(board[i][j]){
            case 0:
                cell.style.backgroundColor = "gray";
                break;
            case 2:
                cell.style.backgroundColor = "lightyellow";
                break;
            case 4:
                cell.style.backgroundColor = "yellow";            
                break;
            case 8:
                cell.style.backgroundColor = "lightorange";
                break;
            case 16:
                cell.style.backgroundColor = "orange";
                break;
            case 32:
                cell.style.backgroundColor = "lightred";
                break;
            case 64:
                cell.style.backgroundColor = "red";           
                break; 
            case 128:
                cell.style.backgroundColor = "darkred"; 
                break;  
            case 256:
                cell.style.backgroundColor = "lightgreen";
                break;
            case 512:
                cell.style.backgroundColor = "lime"; 
                break;           
            case 1024:
                cell.style.backgroundColor = "green";
                break;
            case 2048:
                cell.style.backgroundColor = "darkgreen";
                break;
            case 4096:
                cell.style.backgroundColor = "lightpurple";
                break;          
            case 8192:
                cell.style.backgroundColor = "purple";
                break;  
            case 16384:
                cell.style.backgroundColor = "pink";
                break;
            case 32768:
                cell.style.backgroundColor = "blue";
                break;           
            case 65536:
                cell.style.backgroundColor = "gray";  
                break;             
        }
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