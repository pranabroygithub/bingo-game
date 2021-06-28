// variables
let startGame = document.querySelector(".start-game");
let cell = document.querySelectorAll(".cell");
let shuffleGame = document.querySelector(".shuffle-game");
let stopGame = document.querySelector(".stop-game");
let boxController = document.querySelector(".box-container");
let backButton = document.querySelector(".back-button");
let resetButton = document.querySelector(".reset-button");
let profileButton = document.querySelector(".profile-button");
let createPattern = document.querySelector(".create-game")
let letters = document.querySelectorAll(".game-winning-heading-letter")

let isAllSelected=true;
let numbers=0;
let set = [];
let i=0;
let arrayOfCell=[]
let count=0;


//pre-requisite
defaultGame();

//functions

//function to shuffle the cells to random number
function shuffleGamefunction(){

    set = [];
    while (set.length < 25) {
        var randomNumber = Math.floor(Math.random() * 25) + 1;
        if (set.indexOf(randomNumber) === -1){
            set.push(randomNumber);        
            } 
    }
    i=0;
    cell.forEach(item=>{
        item.innerHTML=set[i];
        i++;
    })
}

//function to update all the cells while creating custom pattern
function updatingAllCells(){
    arrayOfCell = Array.from(cell);
    isAllSelected = arrayOfCell.every(element=>{
        return element.classList.contains("cellIsSelected")
    })
    if(isAllSelected === true){
        // profileButton.style.display="block";
    }
    cell.forEach(item=>{ 
        if(item.classList.contains("cell-blink"))
         item.innerHTML=numbers;
    })
}

//this function is set to the default stage
function defaultGame(){
    cell.forEach(item=>{
        item.classList.remove("cellIsSelected");
    })
    startGame.style.display="none";
    stopGame.style.display="none";
    boxController.style.pointerEvents="none";
    resetButton.style.display="none";
    backButton.style.display="none";
    profileButton.style.display="none";
    resetButton.style.display="none";

   
}

function bingoLogic(){
    
    count = 0;
    // rows

    //row1
    if(cell[0].classList.contains("cellIsSelected") && cell[1].classList.contains("cellIsSelected") && cell[2].classList.contains("cellIsSelected") && cell[3].classList.contains("cellIsSelected") && cell[4].classList.contains("cellIsSelected"))
    ++count;
    //row2
    if(cell[5].classList.contains("cellIsSelected") && cell[6].classList.contains("cellIsSelected") && cell[7].classList.contains("cellIsSelected") && cell[8].classList.contains("cellIsSelected") && cell[9].classList.contains("cellIsSelected"))
    ++count;
    //row3
    if(cell[10].classList.contains("cellIsSelected") && cell[11].classList.contains("cellIsSelected") && cell[12].classList.contains("cellIsSelected") && cell[13].classList.contains("cellIsSelected") && cell[14].classList.contains("cellIsSelected"))
    ++count;
    //row4
    if(cell[15].classList.contains("cellIsSelected") && cell[16].classList.contains("cellIsSelected") && cell[17].classList.contains("cellIsSelected") && cell[18].classList.contains("cellIsSelected") && cell[19].classList.contains("cellIsSelected"))
    ++count;
    //row5
    if(cell[20].classList.contains("cellIsSelected") && cell[21].classList.contains("cellIsSelected") && cell[22].classList.contains("cellIsSelected") && cell[23].classList.contains("cellIsSelected") && cell[24].classList.contains("cellIsSelected"))
    ++count;


     // columns

    //column1
    if(cell[0].classList.contains("cellIsSelected") && cell[5].classList.contains("cellIsSelected") && cell[10].classList.contains("cellIsSelected") && cell[15].classList.contains("cellIsSelected") && cell[20].classList.contains("cellIsSelected"))
    ++count;
    //column1
    if(cell[1].classList.contains("cellIsSelected") && cell[6].classList.contains("cellIsSelected") && cell[11].classList.contains("cellIsSelected") && cell[16].classList.contains("cellIsSelected") && cell[21].classList.contains("cellIsSelected"))
    ++count;
    //column1
    if(cell[2].classList.contains("cellIsSelected") && cell[7].classList.contains("cellIsSelected") && cell[12].classList.contains("cellIsSelected") && cell[17].classList.contains("cellIsSelected") && cell[22].classList.contains("cellIsSelected"))
    ++count;
    //column1
    if(cell[3].classList.contains("cellIsSelected") && cell[8].classList.contains("cellIsSelected") && cell[13].classList.contains("cellIsSelected") && cell[18].classList.contains("cellIsSelected") && cell[23].classList.contains("cellIsSelected"))
    ++count;
    //column1
    if(cell[4].classList.contains("cellIsSelected") && cell[9].classList.contains("cellIsSelected") && cell[14].classList.contains("cellIsSelected") && cell[19].classList.contains("cellIsSelected") && cell[24].classList.contains("cellIsSelected"))
    ++count;


     // diagonals

    //diagonals1
    if(cell[0].classList.contains("cellIsSelected") && cell[6].classList.contains("cellIsSelected") && cell[12].classList.contains("cellIsSelected") && cell[18].classList.contains("cellIsSelected") && cell[24].classList.contains("cellIsSelected"))
    ++count;
    //diagonals2
    if(cell[4].classList.contains("cellIsSelected") && cell[8].classList.contains("cellIsSelected") && cell[12].classList.contains("cellIsSelected") && cell[16].classList.contains("cellIsSelected") && cell[20].classList.contains("cellIsSelected"))
    ++count;


    console.log(count);

    for(i=0;i<count;i++)
    {
        letters[i].style.color="white";
    }

    if(count>4){
        boxController.style.pointerEvents="none";
    }
    
    

}



//Eventslistners 

//shuffle-game
shuffleGame.addEventListener("click",()=>{
    startGame.style.display="none";
    boxController.style.pointerEvents="none";
    createPattern.style.display="none";
    backButton.style.display="block";
    isAllSelected=true;



    cell.forEach(item=>{
        item.classList.remove("cellIsSelected");
        item.classList.remove("cell-blink");

})
    shuffleGamefunction();

})


//create-pattern
    createPattern.addEventListener("click",()=>{
    numbers=1;
    startGame.style.display="none";
    shuffleGame.style.display="none";
    backButton.style.display="block";
    createPattern.style.display="none";
    resetButton.style.display="block"; 
    boxController.style.pointerEvents="auto";



    cell.forEach(item=>{ 
        item.classList.remove("cellIsSelected") 
        item.classList.add("cell-blink") 
    })
    updatingAllCells();

})


//when cell is clicked
boxController.addEventListener("click",(e)=>{

    if(e.target.classList.contains("cell")){
        e.target.classList.add("cellIsSelected");
    }
    if(e.target.classList.contains("cell-blink")){
        e.target.classList.remove("cell-blink")
        e.target.innerHTML=numbers++;
        updatingAllCells();
    }
    if(startGame.classList.contains("game-started"))
    bingoLogic();
})

//starting the game
startGame.addEventListener("click",()=>{
    startGame.classList.add("game-started");
    startGame.style.display="none";
    shuffleGame.style.display="none";
    createPattern.style.display="none";
    stopGame.style.display="block";
    cell.forEach(item=>{
        boxController.style.pointerEvents="auto";
        item.classList.remove("cellIsSelected")
    })


})

//stoping the game
stopGame.addEventListener("click",()=>{

    if(window.confirm("Are you sure ?")){
        // bingoAnimation[0].style.visibility="hidden";
        // bingoAnimation[1].style.visibility="hidden";
        cell.forEach(item=>{
            item.innerHTML="?"
        })
        defaultGame();
        stopGame.style.display="none";
        shuffleGame.style.display="block";
        createPattern.style.display="block";
        stopGame.classList.remove("game-started");
    }

    
})

//backbutton properties
backButton.addEventListener("click",()=>{

    if(window.confirm("Are you sure?")){

    boxController.style.pointerEvents="none";
    startGame.style.display="block";
    createPattern.style.display="block";
    shuffleGame.style.display="block";
    backButton.style.display="none";
    resetButton.style.display="none";


    cell.forEach(item=>{
        item.classList.remove("cellIsSelected");
        item.classList.remove("cell-blink");
    }) 

    if(!isAllSelected)
        {  
            cell.forEach(item=>{
                item.classList.remove("cellIsSelected");
                item.classList.remove("cell-blink");
                item.innerHTML="?";
                startGame.style.display="none";
    
            })
        }

    }
    

})

//reset button properties
resetButton.addEventListener("click",()=>{
    numbers=1;
    cell.forEach(item=>{ 
        item.classList.remove("cellIsSelected") 
        item.classList.add("cell-blink") 
    })
    updatingAllCells();
})


