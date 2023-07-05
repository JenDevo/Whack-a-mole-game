let currMandoTile;
let currGroguTile;
let score = 0;
let gameOver = false;

// this displays the fetGame function on page load
window.onload = function (){
    setGame();
}

// This sets the tile divs within the board element
function setGame(){
    for (let i = 0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();

        tile.addEventListener("click", selectTile);

        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMando, 1000);
    setInterval(setGrogu, 2000);
}

// This gets the random number for the tile
function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}


// This will display mole on random tile
function setMando(){
    if(gameOver){
        return;
    }

    if (currMandoTile){
        currMandoTile.innerHTML = "";
    }

    let mando = document.createElement("img");
    mando.src = "img/mandoHead.png";

    let num = getRandomTile();

    // Below: to stop grogu and mando showing in the same place at the same time
    if(currGroguTile && currGroguTile.id === num){
        return;
    }
    currMandoTile = document.getElementById(num);
    currMandoTile.appendChild(mando);
}

function setGrogu(){
    if(gameOver){
        return;
    }

    if(currGroguTile){
        currGroguTile.innerHTML = "";
    }

    let grogu = document.createElement("img");
    grogu.src = "img/grogu.png";

    let num = getRandomTile();

    if(currMandoTile && currMandoTile.id === num){
        return;
    }
    currGroguTile = document.getElementById(num);
    currGroguTile.appendChild(grogu);
}

function selectTile(){
    if(gameOver){
        return;
    }

    if(this == currMandoTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this == currGroguTile){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}