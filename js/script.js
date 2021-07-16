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
    var br = document.createElement("br");
    var rndomIdx = Math.round(Math.random() * guess.length-1);
    var writing = "";
    for(i=0;i<=((guess[rndomIdx].word).length)-1;i++)  writing+="_ ";
    var hint_div = document.querySelector(".hint");
    hint_div.innerHTML=`<h2>PAROLA: ${writing}</h2>
                        <h2>SUGGERIMENTO: ${guess[rndomIdx].hint}</h2>
    `;
    rndomIdx = Math.round(Math.random() * guess.length-1);
};
document.onload = ()=>{
keyb = document.querySelectorAll(".btn");
console.log(keyb);
keyb.addEventListener("click",()=>{
    console.log("hai cliccato qualcosa qui su keyboard!");
});
};