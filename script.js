//for getting urls only
const hiddenImgs = document.querySelectorAll(".hiddenImg");
const defImg = document.querySelector("#unknown");
const urls = [];
let actualImgs = [];

const imgs = document.querySelectorAll(".imgGame");
const div = document.querySelector("#container");

//store urls in an array
let count = 0;
for(let i=0; i<12; i++){
    count %= 6;
    urls[i] = hiddenImgs[count].src;
    // console.log(urls[i]);
    count++;
}

//store random urls in the imgs.
//every url should appear 2 times only
function storeRanUrl(){
    let urlsCpy = urls.splice(0);
    let rIndex;
    for(let i=0; i<12; i++){
        rIndex = Math.floor(Math.random()*urlsCpy.length);
        actualImgs[i] = urlsCpy[rIndex];
        urlsCpy.splice(rIndex, 1);
    }
}

storeRanUrl();

let cardOne, cardTwo;
div.addEventListener("click", function(e){
    let clickedCard = e.target;
    
    if(cardOne !== clickedCard && clickedCard.classList[1] !== "visited"
    && clickedCard.classList[1] !== "visited"){//to not click twise
        if(!cardOne){
            cardOne = clickedCard;
            cardOne.src = actualImgs[clickedCard.id];
        }else {
            cardTwo = clickedCard;
            cardTwo.src = actualImgs[clickedCard.id];
        }
    
    }
    //check if they match or not
    if(cardOne && cardTwo){
        
        setTimeout(function(){

            if(cardOne.src !== cardTwo.src){
                cardOne.src = defImg.src;
                cardTwo.src = defImg.src;
            }else {
                console.log("good job");
                cardOne.classList.add("visited");
                cardTwo.classList.add("visited");
            }
            cardOne = undefined;
            cardTwo = undefined;
        }, 400);
    }

});