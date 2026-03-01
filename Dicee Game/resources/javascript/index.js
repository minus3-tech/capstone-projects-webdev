//---------------------------Random Number Generator--------------------------//
function rollDice() {
    let dieValue = Math.floor((Math.random() * 6) + 1);
    return dieValue;
}

//---------------------------Image Selection---------------------------------//
function selectImage(faceValue, player) {
    switch(faceValue) {
        case 1:
            document.getElementsByTagName("img")[player].setAttribute("src", "./resources/images/dice-six-faces-one.png")
        break;
        case 2:
            document.getElementsByTagName("img")[player].setAttribute("src", "./resources/images/dice-six-faces-two.png")
        break;
        case 3:
            document.getElementsByTagName("img")[player].setAttribute("src", "./resources/images/dice-six-faces-three.png")
        break;
        case 4:
            document.getElementsByTagName("img")[player].setAttribute("src", "./resources/images/dice-six-faces-four.png")
        break;
        case 5:
            document.getElementsByTagName("img")[player].setAttribute("src", "./resources/images/dice-six-faces-five.png")
        break;
        case 6:
            document.getElementsByTagName("img")[player].setAttribute("src", "./resources/images/dice-six-faces-six.png")
        break;
        default:
            document.getElementsByTagName("img")[player].setAttribute("src", "./resources/images/dice-fire.png")
    }
}

//------------------------------Who is the Winner?----------------------------//
function whoIsTheWinner(player1Name, player2Name) {
    //---Rolling Dice---//
    let player1Die = rollDice();
    selectImage(player1Die, 0);
    let player2Die = rollDice();
    selectImage(player2Die, 1);

    //---Comparing Results and Declaring The Winner---//
    if (player1Die > player2Die) {
        //--display result: Player1 Wins!--//
        let text = "🎉" + " " + player1Name + " wins!"; 
        document.getElementById("result").innerHTML = text;

    } else if (player1Die < player2Die) {
        //--display result: Player2 Wins!--//
        let text = player2Name + " wins! " + "🎉";
        document.getElementById("result").innerHTML = text;
    } else {
        //--display result: Draw!--//
        document.getElementById("result").innerHTML = "Draw!"
    }
}

player1Name = prompt("Please enter Player 1's name: ");
player2Name = prompt("Please enter Player 2's name: ");

document.getElementById("player-one").innerHTML = player1Name;
document.getElementById("player-two").innerHTML = player2Name;

whoIsTheWinner(player1Name, player2Name);