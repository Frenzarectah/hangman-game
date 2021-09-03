
const guess = [{word:"sedia",hint:"si usa per poggiare le chiappe"},
{word:"fattura",hint:"permette di riscattare la garanzia"},
{word:"monitor",hint:"indispensabile per usare il computer"},
{word:"treppiedi",hint:"si usa per diminuire gli scossoni durante le foto"},
{word:"cracco",hint:"famoso cuoco stellato"},
{word:"idraulico",hint:"è famoso quello dei videogiochi"},
{word:"google",hint:"il sito web pii' usato del mondo"},
{word:"tappetino",hint:"si usa sia per il mouse che per i pavimenti"},
{word:"michelangelo",hint:"famoso scultore italiano"},
{word:"reykjavik",hint:"capitale europea nordica"},
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
                    <h2>SUGGERIMENTO: ${guess[rndomIdx].hint}</h2>`;
rndomIdx = Math.round(Math.random() * guess.length-1);
};

var search =(word,letter)=>{
    var guessed = false;
    var DomWord = document.getElementsByTagName("h2")[1].innerHTML;
    var parola = [];
    for(i=0;i<=DomWord.length-1;i++) parola[i] = DomWord[i];
    for(i=0;i<=word.length-1;i++){
        if (word[i] === letter){
        parola[i] = letter;
        var guessed = true;
        }
    }
    guessing(guessed,parola);
    return guessed;
}
var guessing =(guessBool,guessWord) =>{
    if(guessBool === true){
        guessWord = guessWord.join("");
        document.getElementsByTagName("h2")[1].innerHTML = guessWord;
        if (guessWord.includes("_") === false){ //se la stringa da indovinare non contiene piu' underscore si considera vinta la partita
            document.getElementsByTagName("div")[0].innerHTML = "EVVIVA HAI SALVATO IL MORTO!";
            //document.querySelector(".hangman").src="imgs/image5.webp";
            document.getElementsByClassName("btn_disp_none")[0].style.display="block"; 
        }
    }else notGuessing();
}
var notGuessing = () =>{
    if(x<4){
    x = x+1;
    //var img = document.querySelector(".hangman");
    var page = document.querySelector("#page");
    page.style.backgroundImage='url(imgs/imgs_once/image'+x+'.webp)';
    //img.src = "imgs/image"+x+".jpg";
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
search(worde.toUpperCase(),key.value);
return true;
}

module.export={search};