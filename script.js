let dom = document.querySelectorAll("img");
let p1 = Math.ceil(Math.random()*6);
let p2 = Math.ceil(Math.random()*6);

function play (p1, p2){
    dom[0].setAttribute("src", "images/dice" + p1 + ".png");
    dom[1].setAttribute("src", "images/dice" + p2 + ".png");
    if(p1 > p2){
        document.querySelector("h1").textContent = "Player 1 Wins!";
    } else if (p1 < p2) {
        document.querySelector("h1").textContent = "Player 2 Wins!";
    } else {
        document.querySelector("h1").textContent = "It is a tie.";      
    }
}

play(p1, p2);