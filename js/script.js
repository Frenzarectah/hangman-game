
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
    var parola = "";
    if (word.includes(letter) === true){
        var pos = word.indexOf(letter);
        var h2 = document.getElementsByTagName("h2")[1];
        parola[pos] = letter;
        console.log(parola);
        h2.innerHTML = parola;
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
