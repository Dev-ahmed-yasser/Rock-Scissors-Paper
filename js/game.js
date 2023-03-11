function game(){
    //Selectors
    const welcome = document.querySelector('.lets-play');
    const fireBtn = document.querySelector('#fire-btn')
    const match   = document.querySelector('.match');
    let cHand   = document.querySelector('.computer-hand img')
    let pHand   = document.querySelector('.player-hand img')
    const buttons = document.querySelectorAll('.choose button')
    const title= document.querySelector('.title');
    let pScore = 0;
    let cScore = 0;
//INTRO SCREEN ANIMATION
    fireBtn.addEventListener('click',function(){
        welcome.classList.add('fadeout');
        match.classList.add('fadein')
    })
// Hand Animations
    const bothHands= document.querySelector('.hands');
        bothHands.addEventListener('animationend',()=>{
        bothHands.style.cssText="animation:;"
    })
//choices
    function playerchoice(){
        buttons.forEach(function(button){
            button.addEventListener('click',function(){
                //computer choice
                let choices=['rock','scissors','paper'];
                let index = Math.floor(Math.random() * 3)
                let choice=choices[index]
                setTimeout(()=>{
                    //setting player choice
                    pHand.src='images/'+button.textContent+'.png';
                    //setting computer choice
                    cHand.src='images/'+choice+'.png';
                    //checking player and computer choices
                    checkWinner(this.textContent,choice);
                },1000)
                pHand.src='images/'+'rock'+'.png';
                cHand.src='images/'+'rock'+'.png';
                bothHands.style.cssText="animation: rocking 1s ease forwards;"
            })
        })
    }
    playerchoice();
    //updating player and computer scores
    function updateScore(){
        const pviewedScore= document.querySelector('.p-score');
        const cviewedScore= document.querySelector('.c-score');
        pviewedScore.textContent=pScore;
        cviewedScore.textContent=cScore;
    }
//checking 
    function checkWinner(player,computer){
        if(player===computer){
            title.innerHTML='Its a Tie';
            title.style.cssText='font-size:2rem';
            setTimeout(()=>{
                title.innerHTML=' ';
            },1000)
            return;
        }
//Rock
    if(player=='rock'){
        if(computer=='scissors'){
            title.innerHTML='Player Wins';
            title.style.cssText='font-size:2rem';
            pScore++
            updateScore()
            setTimeout(()=>{
                title.innerHTML=' ';
            },1000)
            return;
        }else{
            title.innerHTML='Computer Wins';
            title.style.cssText='font-size:2rem';
            cScore++
            updateScore()
            setTimeout(()=>{
                title.innerHTML=' ';
            },1000)
            return;
        }
    }
//scissors
    if(player=='scissors'){
        if(computer=='rock'){
            title.innerHTML='Computer Wins';
            title.style.cssText='font-size:2rem';
            cScore++
            updateScore()
            setTimeout(()=>{
                title.innerHTML=' ';
            },1000)
        }else{
            title.innerHTML='Player Wins';
            title.style.cssText='font-size:2rem';
            pScore++
            updateScore()
            setTimeout(()=>{
                title.innerHTML=' ';
            },1000)
            return;
        }
    }
//paper
    if(player=='paper'){
        if(computer=='scissors'){
            title.innerHTML='Computer Wins';
            title.style.cssText='font-size:2rem';
            cScore++
            updateScore();
            setTimeout(()=>{
                title.innerHTML=' ';
            },1000)
        }else{
            title.innerHTML='Player Wins';
            title.style.cssText='font-size:2rem';
            pScore++
            updateScore()
            setTimeout(()=>{
                title.innerHTML=' ';
            },1000)
            return;
        }
    }
    }
}
game();