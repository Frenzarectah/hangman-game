
const guess = [{word:"sedia",hint:"si usa per poggiare le chiappe"},
{word:"lello",hint:"non sta mbriacato"},
{word:"cazzo",hint:"si ciuccia"},
{word:"bastianic",hint:"so duri sti gnocchetti"},
{word:"cracco",hint:"tu sei un culo"},
{word:"cannavacciuolo",hint:"e disc sin!"},
{word:"ortonova",hint:"procrastinazione incarnata"},
{word:"albino",hint:"basta tirare uno schiaffo tranguillo"},
{word:"fabio",hint:"che bono mamma mia"},
{word:"mavco giovdano",hint:"i sapovi della mia tevva"},
];
var x = 0;
var startGame = () =>{
var guessWrd = [];
var button = document.querySelector(".start_btn");
button.style.display="none";
var rndomIdx = Math.round(Math.random() * guess.length-1);
for(i=0;i<=((guess[rndomIdx].word).length)-1;i++){
guessWrd[i]="_";
}  
var hint_div = document.querySelector(".hint");
worde = guess[rndomIdx].word; //parola in chiaro da indovinare
hint_div.innerHTML=`<h2>PAROLA:</h2> <h2>${guessWrd.join("")}</h2>
        <h2>SUGGERIMENTO: ${guess[rndomIdx].hint}</h2>
`;
rndomIdx = Math.round(Math.random() * guess.length-1);
};
var search =(word,letter)=>{
    var guessed = false;
    var DomWord = document.getElementsByTagName("h2")[1].innerHTML;
    var parola = [];
    for(i=0;i<=DomWord.length-1;i++) parola[i] = DomWord[i];
    //console.log(parola);
    for(i=0;i<=word.length-1;i++){
        if (word[i] === letter){
        parola[i] = letter;
        var guessed = true;
        }
    }
    guessing(guessed,parola);
}
var guessing =(guessBool,guessWord) =>{
    if(guessBool === true){
        guessWord = guessWord.join("");
        document.getElementsByTagName("h2")[1].innerHTML = guessWord;
        if (guessWord.includes("_") === false){ 
            document.getElementsByTagName("div")[0].innerHTML = "EVVIVA HAI SALVATO IL MORTO!";
            document.getElementsByClassName("btn_disp_none")[0].style.display="block"; 
        }
    }else notGuessing();
}
var notGuessing = () =>{
    if(x<4){
    x = x+1;
    var img = document.querySelector(".hangman");
    img.src = "imgs/image"+x+".jpeg";
    }else{  document.getElementsByTagName("div")[0].innerHTML=" GAME OVER!";
            document.getElementsByClassName("main_container")[0].style.display="none";    
            document.getElementsByClassName("keyboard")[0].style.display="none";
            document.getElementsByClassName("btn_disp_none")[0].style.display="block"; 
    } 
}
var extractNum = () =>{
var letter = "";
key = document.querySelectorAll(".btn");
key.forEach((element) =>{
element.addEventListener("click",()=>letter = addEvent(element));
});
}

var addEvent=(key)=>{
console.log("pulsante premuto:"+key.value);
key.style.backgroundColor="red";
search(worde,key.value);
return true;
}