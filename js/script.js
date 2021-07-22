
const guess = [{word:"sedia",hint:"si usa per poggiare le chiappe"},
                {word:"mucca",hint:"si mangia"},
                {word:"ciola",hint:"si succhia"},
                {word:"bastianic",hint:"so duri sti gnocchetti"},
                {word:"cracco",hint:"tu sei un culo"},
                {word:"cannavacciuolo",hint:"e disc sin!"},
            ];

var startGame = () =>{
    var parola = [];
    var button = document.querySelector(".start_btn");
    button.style.display="none";
    var rndomIdx = Math.round(Math.random() * guess.length-1);
    for(i=0;i<=((guess[rndomIdx].word).length)-1;i++){
        parola[i]="_";
    }  
    var hint_div = document.querySelector(".hint");
    worde = guess[rndomIdx].word;
    hint_div.innerHTML=`<h2>PAROLA:</h2> <h2>${parola.join(" ")}</h2>
                        <h2>SUGGERIMENTO: ${guess[rndomIdx].hint}</h2>
    `;
    rndomIdx = Math.round(Math.random() * guess.length-1);
    console.log(parola);
};
var search = (word,letter) =>{
    var parola = [];
        if (word.includes(letter) === true){
            var pos = word.indexOf(letter);
            for(i=0;i<=word.length-1;i++){
                var ausil = document.getElementsByTagName("h2")[1].innerHTML;
                parola[i] = ausil[i];    
                console.log(ausil);
            }
            //var parola = document.getElementsByTagName("h2")[1].innerHTML; // recupero dell'array parola in startGame();
            //console.log(parola[1]);
            console.log("la lettera "+letter+" è presente in "+word+" in posizione "+pos);
        }else console.log("CIAO"); 
}
var extractNum = () =>{
    var letter = "";
key = document.querySelectorAll(".btn");
key.forEach((element) =>{
    element.addEventListener("click",()=>letter = addEvent(element.value));
});
}
var addEvent=(key)=>{
    console.log("pulsante premuto:"+key);
    search(worde,key);
    return true;
}