const playerChoice = document.querySelector(".Player")

const computerChoice = document.querySelector(".Computer")

const Result = document.querySelector(".Result")


const Choices=["ROCK","PAPER","SCISSORS"]


const HUMANScore=document.querySelector(".ComputerScore")

const COMPUTERScore=document.querySelector(".HumanScore")



humanScore=0

comptuerScore=0



function Game(playerChoiceFromClickedButton){

    Result.textContent=""

    computerChoicefromChoices=Choices[parseInt(Math.random()*3)]

    playerChoice.textContent=`Player:   ${playerChoiceFromClickedButton}`
    computerChoice.textContent=`Computer: ${computerChoicefromChoices}`

 

    switch(true){
        case playerChoiceFromClickedButton===computerChoicefromChoices:
            break;

        case playerChoiceFromClickedButton==="ROCK" && computerChoicefromChoices==="PAPER":
            comptuerScore+=1
            break;

        case playerChoiceFromClickedButton==="PAPER" && computerChoicefromChoices==="SCISSORS":

            comptuerScore+=1
            break;

        case playerChoiceFromClickedButton==="SCISSORS" && computerChoicefromChoices==="ROCK":
            comptuerScore+=1
            break;
        
        default:
            humanScore+=1
    }

    HUMANScore.textContent=`Human Score: ${humanScore}`
    COMPUTERScore.textContent=`Computer Score: ${comptuerScore}`
    HUMANScore.classList.add("HumanWin")
    COMPUTERScore.classList.add("ComputerWin")


    if(humanScore==5){
        Result.textContent="HUMAN WIN! (It's a first to reach 5 score points is the winner )"
        humanScore=0
        comptuerScore=0
    }

   if(comptuerScore==5){
    Result.textContent="COMPUTER WIN! (First to reach 5 score points is the winner)"
    humanScore=0
    comptuerScore=0
   }
}


 

 
