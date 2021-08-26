const funct = require('./script1');

test("function that create the part of app with hints and word",()=>{
    word="parola";
    letter="r";
    expect(funct.search(word,letter)).toBeTruthy();
});