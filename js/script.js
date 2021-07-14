const guess = [{word:"sedia",hint:"si usa per poggiare le chiappe"},
                {word:"mucca",hint:"si mangia"},
                {word:"ciola",hint:"si succhia"},
                {word:"bastianic",hint:"so duri sti gnocchetti"},
                {word:"cracco",hint:"tu sei un culo"},
            ];
var startGame = () =>{
    var button = document.querySelector(".start_btn");
    button.style.display="none";
    var rndomIdx = Math.round(Math.random() * guess.length-1);
    var writing = "";
    for(i=0;i<=((guess[rndomIdx].word).length)-1;i++)  writing+="_ ";
    var word_div = document.querySelector(".word_div");
    var hint_div = document.querySelector(".hint");
    hint_div.append(writing);
    word_div.append(guess[rndomIdx].hint);
    rndomIdx = Math.round(Math.random() * guess.length-1);
};