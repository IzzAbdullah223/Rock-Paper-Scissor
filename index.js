humanScore=0
computerScore=0
Round=1



function getComputerChoice(){
    Choices=["Rock","Paper","Scissors"]
    return Choices[parseInt(Math.random()*3)].toUpperCase()

}

function getHumanChoice(){
   return prompt("Select: Rock,Paper,Scissors").toUpperCase()
}


function playRound(){
    let humanChoice=getHumanChoice()
    let computerChoice=getComputerChoice()
    console.log(`ROUND: ${Round}`)
    Round+=1
    if(humanChoice===computerChoice){
        console.log(`human choice: ${humanChoice}`)
        console.log(`computer choice: ${computerChoice}`)
        console.log(`It's a TIE!\nHuman Score: ${humanScore}     Computer Score: ${computerScore}` )
    }

    else if(humanChoice==="ROCK" && computerChoice=="PAPER"){
        console.log(`human choice: ${humanChoice}`)
        console.log(`computer choice: ${computerChoice}`)
        computerScore+=1
        console.log(`COMPUTER WIN!\nHuman Score: ${humanScore}    Computer Score: ${computerScore}` )
    }
    else if(humanChoice==="PAPER" && computerChoice=="SCISSORS"){
        console.log(`human choice: ${humanChoice}`)
        console.log(`computer choice: ${computerChoice}`)
        computerScore+=1
        console.log(`COMPUTER WIN!\nHuman Score: ${humanScore}     Computer Score: ${computerScore}` )
    }
    else if(humanChoice==="SCISSORS" && computerChoice=="ROCK"){
        console.log(`human choice: ${humanChoice}`)
        console.log(`computer choice: ${computerChoice}`)
        computerScore+=1
        console.log(`COMPUTER WIN!\nHuman Score: ${humanScore}     Computer Score: ${computerScore}` )
    }
    else{
        console.log(`human choice: ${humanChoice}`)
        console.log(`computer choice: ${computerChoice}`)
        humanScore+=1
        console.log(`HUMAN WIN!\nHuman Score: ${humanScore}    Computer Score: ${computerScore}\n--------------------------` )
    }

    if(Round>5){
        console.log(`HUMAN SCORE: ${humanScore}         COMPUTER SCORE: ${computerScore}`)
        if(humanScore>computerScore){
            console.log(`--------------------------------\nHUMAN IS THE WINNER!`)
        }
        else if(computerScore>humanScore){
            console.log(`--------------------------------\nCOMPUTER IS THE WINNER`)
        }
        else{
            console.log("ITS A TIE!")
        }
    }

}

function playGame(){
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
}



playGame()


 

 
