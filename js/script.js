
const guess = [{word:"sedia",hint:"si usa per poggiare le chiappe"},
                {word:"mucca",hint:"si mangia"},
                {word:"ciola",hint:"si succhia"},
                {word:"bastianic",hint:"so duri sti gnocchetti"},
                {word:"cracco",hint:"tu sei un culo"},
                {word:"cannavacciuolo",hint:"e disc sin!"},
            ];

var startGame = () =>{
    var button = document.querySelector(".start_btn");
    button.style.display="none";
    var rndomIdx = Math.round(Math.random() * guess.length-1);
    var writing = "";
    for(i=0;i<=((guess[rndomIdx].word).length)-1;i++)  writing+="_ ";
    var hint_div = document.querySelector(".hint");
    worde = guess[rndomIdx].word;
    hint_div.innerHTML=`<h2>PAROLA:</h2> <h2>${writing}</h2>
                        <h2>SUGGERIMENTO: ${guess[rndomIdx].hint}</h2>
    `;
    rndomIdx = Math.round(Math.random() * guess.length-1);
};
var search = (word,letter) =>{
    var parola;
    var parola1 = [];
    if (word.includes(letter) === true){
        var pos = word.indexOf(letter);
        var parola = document.getElementsByTagName("h2")[1].innerHTML;
        console.log("la word è al momento"+parola);
        for(i=0;i<=word.length-1;i++){
            if(i===pos){ parola1[i]=letter;
            }else parola1[i]="_";
        }
        console.log(parola1+" dopo replace che non funge un cazzo");
        console.log("la lettera "+letter+" è presente in "+word+" in posizione "+pos);
    } 
}
var extractNum = () =>{
    var letter = "";
key = document.querySelectorAll(".btn");
key.forEach((element) =>{
    element.addEventListener("click",()=>letter = addEvent(element.value));
});
};
var addEvent=(key)=>{
    console.log("pulsante premuto:"+key);
    search(worde,key);
    return true;
}
