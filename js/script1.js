
const guess = [ {word:"sedia",hint:"si usa per poggiare le natiche"},
                {word:"scontrino",hint:"permette di riscattare la garanzia"},
                {word:"monitor",hint:"indispensabile per usare il computer"},
                {word:"treppiedi",hint:"si usa per diminuire gli scossoni durante le foto"},
                {word:"cracco",hint:"famoso cuoco stellato"},
                {word:"idraulico",hint:"è famoso quello dei videogiochi"},
                {word:"google",hint:"il sito web piu' usato del mondo"},
                {word:"tappetino",hint:"si usa sia per il mouse che per i pavimenti"},
                {word:"michelangelo",hint:"famoso scultore italiano"},
                {word:"reykjavik",hint:"capitale europea nordica"},
];
let attempts = 0;
let worde;
const startGame = () =>{
    let guessWrd = [];
    let button = document.querySelector(".start_btn");
    button.style.display="none";
    let rndomIdx = Math.round(Math.random() * guess.length-1);
    for(i=0;i<=((guess[rndomIdx].word).length)-1;i++){
        guessWrd[i]="_";
}  
    let hint_div = document.querySelector(".hint"); 
    worde = guess[rndomIdx].word; //parola in chiaro da indovinare
    hint_div.innerHTML=`<h2>PAROLE:</h2> <h2>${guessWrd.join("")}</h2> 
                        <h2>SUGGERIMENTO: ${guess[rndomIdx].hint}</h2>`;
    rndomIdx = Math.round(Math.random() * guess.length-1);
    return 5; //prova per unit test
};

const search =(word,letter)=>{
    let guessed = false;
    let DomWord = document.getElementsByTagName("h2")[1].innerHTML;
    let parola = []; 
    for(i=0;i<=DomWord.length-1;i++) parola[i] = DomWord[i]; //creazione array da stringa per manipolazione
    for(i=0;i<=word.length-1;i++){
        if (word[i] === letter){
            parola[i] = letter;
               guessed = true;
        }
    }
    guessing(guessed,parola);
    return guessed;
}

let guessing =(guessBool,guessWord) =>{
    if(guessBool === true){
        guessWord = guessWord.join(""); //elimina virgole da array
        document.getElementsByTagName("h2")[1].innerHTML = guessWord;
        if (guessWord.includes("_") === false){ //se la stringa da indovinare non contiene piu' underscore si considera vinta la partita
            document.getElementsByClassName("title")[0].innerHTML = "EVVIVA HAI SALVATO IL MORTO!";
            document.getElementById("retry").style.display="block"; 
        }
    }else notGuessing();
}
const notGuessing = () =>{
    if(attempts<4){
    attempts++;
    let page = document.querySelector("#page");
    page.style.backgroundImage='url(imgs/imgs_once/image'+attempts+'.webp)';  //cambia sfondo
    }else{  document.getElementsByClassName("title")[0].innerHTML=" GAME OVER!";
            document.getElementsByClassName("main_container")[0].style.display="none";    
            document.getElementsByClassName("keyboard")[0].style.display="none";
            document.getElementById("retry").style.display="block"; 
    } 
}
const addingEvent = () =>{    //funzione che aggiunge a tutti i tasti della tastiera 
    let letter = "";        //l'evento addEvent di cui sotto
    key = document.querySelectorAll(".btn");
    key.forEach((element) =>{
        element.addEventListener("click",()=>letter = addedEvent(element));
    });
}

const addedEvent=(key)=>{  
    console.log("pulsante premuto:"+key.value);
    key.disabled="true";
    search(worde.toUpperCase(),key.value); //search prende come parametro la parola da indovinare e la lettera 
    return true;                           //corrispondente al tasto premuto
}

module.export={search,startGame};