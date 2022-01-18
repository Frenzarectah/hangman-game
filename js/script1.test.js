const startGame = require('./script1');

test('creating DOM after a click', () => {
    document.body.innerHTML =`
    <input type="button" id="btn" class="start_btn white" value="GIOCA!" onClick="startGame">
    <div class="hint white">denari</div>`;
    var btn = document.querySelector("#btn");
    var divtest = document.querySelector(".hint");
    btn.click();
    expect(startGame).toBe(5);
});