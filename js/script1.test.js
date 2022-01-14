const funct = require('./script1');

test('displays a user after a click', () => {
    document.body.innerHTML =`
    <input type="button" id="btn" class="start_btn white" value="GIOCA!" onClick=funct.startGame()>
    <div class="hint white">denari</div>`;
    var btn = document.querySelector("#btn");
    var divtest = document.querySelector(".hint");
    btn.click();
    expect(divtest.innerHTML).toContain(`<div class="keyboard black">`);
});