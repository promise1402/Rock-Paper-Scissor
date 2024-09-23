let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice =() =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =() =>{
    console.log("Draw Game");
    msg.innerText="Its a Draw! Play again";
    msg.style.backgroundColor ="#081b31";
    
}

const showWinner =(userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText="You win.. !";
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose!");
        msg.innerText="You Lose.. !";
        msg.style.backgroundColor ="red";
    }
}

const playGame =(userChoice) =>{
    console.log("user choice = ", userChoice);
    //Generate comp choic
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            //scissors,paper
            userWin = compChoice ==="paper" ? false : true;
        } else if(userChoice ==="paper"){
            //rock,scissors
            userWin = compChoice ==="scissors" ? false : true;
        }else if(userChoice ==="scissors"){
            //rock,paper
            userWin = compChoice ==="rock" ? false : true;
        }else {
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked",userChoice);
        playGame(userChoice );
    });
});