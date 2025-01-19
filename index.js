var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var dice1 = document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`); 
var dice2 = document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);


function Winner (header){
    var header = document.querySelector("h1");
    if(randomNumber1 > randomNumber2) {
        header.textContent = "🚩Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        header.textContent = "🚩Player 2 Wins!";
    } else {
        header.textContent = "🏳️Draw!";
    }
}

Winner();