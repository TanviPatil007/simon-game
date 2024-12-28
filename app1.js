let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
    }
    levelup();
    
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`)
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq)
    btnFlash(randBtn);
}
function btnPress(){
    let btn=this;
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq)

    checkAns(userseq.length-1)

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function checkAns(idx){
    // let idx=level-1;

    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000)
        }
    }
    else{
        h3.innerHTML=`Game Over! your Score Was <b>${level}</b> <br>Press any key to Start the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250)
        reset();
    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}