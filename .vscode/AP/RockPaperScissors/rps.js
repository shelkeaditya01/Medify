let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".image");
const picki=document.querySelector(".picki");
let users=document.querySelector("#score1");
let computers=document.querySelector("#score2");

const getcomputerchoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawn=()=>{
    console.log("Game drawn");
    picki.innerText="Game drawn";
    picki.style.backgroundColor="maroon";
}

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    let computerchoice=getcomputerchoice();
    console.log("computer choice=",computerchoice);

    let userwin=true;
    if(userchoice==computerchoice){
        drawn();
    }
    else{
        if(userchoice=="rock" && computerchoice=="paper" || userchoice=="paper" && computerchoice=="scissor" || userchoice=="scissor" && computerchoice=="rock"){
            userwin=false;
        }
        else{
            userwin=true;
        }
        if(userwin){
            console.log("You win");
            picki.innerText="You win";
            userscore++;
            users.innerText=userscore;
            picki.style.backgroundColor="green";
        }
        else if(!userwin){
            console.log("You lose");
            picki.innerText="You lose";
            computerscore++;
            computers.innerText=computerscore;
            picki.style.backgroundColor="red";
        }
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});