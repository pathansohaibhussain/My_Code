let str = localStorage.getItem('Score');
let count = JSON.parse(str) || { win: 0, loss: 0, draw: 0 };

count.displayScore = function () {
    document.querySelector('.score').innerHTML = `Win: ${count.win}, Loss: ${count.loss}, Draw: ${count.draw}`;
}

function computerChoiceGen(random) {
    if (random === 0) return 'rock';
    if (random === 1) return 'paper';
    if (random === 2) return 'scissor';
}

function status(humanChoice) {
    let random = Math.floor(Math.random() * 3);
    let computerChoice = computerChoiceGen(random);

    if (humanChoice === computerChoice) {
        count.draw++;
        document.querySelector('.result').innerHTML = `You: ${humanChoice} Computer: ${computerChoice} :: Draw`;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissor') ||
               (humanChoice === 'scissor' && computerChoice === 'paper') ||
               (humanChoice === 'paper' && computerChoice === 'rock')) {
        count.win++;
        document.querySelector('.result').innerHTML = `You: ${humanChoice} Computer: ${computerChoice} :: You Win!`;
    } else {
        count.loss++;
        document.querySelector('.result').innerHTML = `You: ${humanChoice} Computer: ${computerChoice} :: Computer Wins!`;
    }

    localStorage.setItem('Score', JSON.stringify(count));
    count.displayScore();
}

function resetGame() {
    localStorage.clear();
    count = { win: 0, loss: 0, draw: 0, displayScore: count.displayScore };
    document.querySelector('.score').innerHTML = `Win: 0, Loss: 0, Draw: 0`;
    document.querySelector('.result').innerHTML = `Result will be shown here`;
}
