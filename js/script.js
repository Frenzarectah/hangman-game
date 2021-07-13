const guess = [{word:"sedia",hint:"si usa per poggiare le chiappe"},
                {word:"mucca",hint:"si mangia"},
                {word:"ciola",hint:"si succhia"},
                {word:"bastianic",hint:"so duri sti gnocchetti"},
                {word:"cracco",hint:"tu sei un culo"},
            ];
var startGame = () =>{
    var button = document.querySelector(".start_btn");
    button.style.display="none";
    var randomizedIdx = Math.round(Math.random() * guess.length-1);
    var writing = "";
    for (i=0;i<=((guess[randomizedIdx].word).length)-1;i++)  writing+="_ ";
    var hint_div = document.querySelector(".hint");
    hint_div.append(writing);
    
};