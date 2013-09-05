var Board = {
    A1:" ",
    A2:" ",
    A3:" ",
    B1:" ",
    B2:" ",
    B3:" ",
    C1:" ",
    C2:" ",
    C3:" "
};

var player = "X";
var gameOver = false;

function drawBoard(){
    console.log("    1   2   3 ");
    console.log("A  _"+Board.A1+"_|_"+Board.A2+"_|_"+Board.A3+"_");
    console.log("B  _"+Board.B1+"_|_"+Board.B2+"_|_"+Board.B3+"_");
    console.log("C   "+Board.C1+" | "+Board.C2+" | "+Board.C3+" ");
}

function winX(Board){
    var win1 = Board.A1==="X" && Board.A2==="X" && Board.A3==="X";
    var win2 = Board.B1==="X" && Board.B2==="X" && Board.B3==="X";
    var win3 = Board.C1==="X" && Board.C2==="X" && Board.C3==="X";
    var win4 = Board.A1==="X" && Board.B1==="X" && Board.C1==="X";
    var win5 = Board.A2==="X" && Board.B2==="X" && Board.C2==="X";
    var win6 = Board.A3==="X" && Board.B3==="X" && Board.C3==="X";
    var win7 = Board.A1==="X" && Board.B2==="X" && Board.C3==="X";
    var win8 = Board.A3==="X" && Board.B2==="X" && Board.C1==="X";
    return (win1||win2||win3||win4||win5||win6||win7||win8);
}

function winO(Board){
    var win9 = Board.A1==="O" && Board.A2==="O" && Board.A3==="O";
    var win10 = Board.B1==="O" && Board.B2==="O" && Board.B3==="O";
    var win11 = Board.C1==="O" && Board.C2==="O" && Board.C3==="O";
    var win12 = Board.A1==="O" && Board.B1==="O" && Board.C1==="O";
    var win13 = Board.A2==="O" && Board.B2==="O" && Board.C2==="O";
    var win14 = Board.A3==="O" && Board.B3==="O" && Board.C3==="O";
    var win15 = Board.A1==="O" && Board.B2==="O" && Board.C3==="O";
    var win16 = Board.A3==="O" && Board.B2==="O" && Board.C1==="O";
    return (win9||win10||win11||win12||win13||win14||win15||win16);
}

function endGame(){
    valid = true;
    gameOver = true;      
    console.log("You have ended the game.");
    return gameOver;
}


function validatePosition(Board, move){
    if (!Board.hasOwnProperty(move)){
        console.log("That position does not exist. Please select a valid position.");
        return false;
    }
    return true;
}

function validateMove(Board, move){
    if (Board[move] != " "){
        console.log("Oops! Someone has already moved to " + move + ". Please pick another position.");
        return true;
    }    
    return false;
}

function askMove(Board){
    var valid = false;
    var move;
    while (valid === false){
        move = prompt("This is the current board. Where would you like to move, Player " + player + "?");
        if (move){
            move = move.toUpperCase();
            console.log("You are player "+player+" and have decided to move to spot " + move + ".");
            if (!validatePosition(Board, move)){
                continue;
            }
            if (validateMove(Board, move)){
                continue;
            }
            valid = true;
            return move;        
        } else {
            return endGame();            
        }     
    }
}

function checkWin(Board){
    if (winX(Board)){
        drawBoard();
        console.log("Congratulations Player X! You won!");
        return (gameOver = true);
    } else if (winO(Board)){
        drawBoard();
        console.log("Congratulations Player O! You won!");
        return (gameOver=true);
    }
}

function turn(Board){
    drawBoard();
    var move = askMove(Board);
    Board[move] = player;
    checkWin(Board);
    if (player === "X"){
        player = "O";
    } else {
        player = "X";
    }
}

function playGame(Board){
    var i=0;
    while (!gameOver && i<9){
        turn(Board);
        i++;    
    }
    if (i >= 9 && !gameOver) {
        drawBoard();
    }
    console.log("End of game.");
}

playGame(Board);