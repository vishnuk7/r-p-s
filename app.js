let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const rn = Math.floor(Math.random() * 3);
    return choices[rn]
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rp":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "ps":
        case "sr":
            draw(userChoice, compChoice);
            break;
    }
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    userScore_span.classList.toggle('animation');
    computerScore_span.classList.toggle('animation');
    result_p.innerHTML = `<div class="choice-img-div animation">
                                <img class="choice-img" src="img/${userChoice}.svg" > &ndash;&ndash; VS &ndash;&ndash;
                         <img class="choice-img" src="img/${compChoice}.svg" >
                         </div>
                         <div class="users">
                            <h4>User</h4>
                            <h4>Comp</h4>
                         </div> 
                         <p>You Win 🔥</p> `;
    document.getElementById(`choice-${userChoice}`).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(`choice-${userChoice}`).classList.remove('green-glow')
    }, 300);

}

function lose(userChoice, compChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    userScore_span.classList.toggle('animation');
    computerScore_span.classList.toggle('animation');
    result_p.innerHTML = `<div class="choice-img-div animation">
                                <img class="choice-img" src="img/${userChoice}.svg" > &ndash;&ndash; VS &ndash;&ndash;
                         <img class="choice-img" src="img/${compChoice}.svg" >
                         </div>
                         <div class="users">
                            <h4>User</h4>
                            <h4>Comp</h4>
                         </div> 
                         <p>You Lost 😢</p> `;
    document.getElementById(`choice-${userChoice}`).classList.add('red-glow');
    setTimeout(function () {
        document.getElementById(`choice-${userChoice}`).classList.remove('red-glow')
    }, 300);
}

function draw(userChoice, compChoice) {
    result_p.innerHTML = `<div class="choice-img-div animation">
                                <img class="choice-img" src="img/${userChoice}.svg" > &ndash;&ndash; VS &ndash;&ndash;
                         <img class="choice-img" src="img/${compChoice}.svg" >
                         </div>
                         <div class="users">
                            <h4>User</h4>
                            <h4>Comp</h4>
                         </div> 
                         <p>It's a Draw 😒</p> `;
    document.getElementById(`choice-${userChoice}`).classList.add('draw-glow');
    setTimeout(function () {
        document.getElementById(`choice-${userChoice}`).classList.remove('draw-glow')
    }, 300);

}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });

    paper_div.addEventListener('click', function () {
        game("p");
    });

    scissors_div.addEventListener('click', function () {
        game("s");
    });
}

main();