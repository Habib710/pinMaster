// make pin .................................
function getPin() {
    var pin = Math.round(Math.random() * 10000);
    var pinLenth = (pin + '').length;

    if (pinLenth == 4) {

        document.getElementById('input-pin').value = pin;


    } else {
        return getPin();
    }

};
document.getElementById('pin-make').addEventListener('click', function () {

    getPin();
});
// type inpput...................................
document.getElementById('number').addEventListener('click', function (event) {

    var seeimput = event.target.innerText;
    if (seeimput == 'C' || seeimput == '<') {
        let inputBox = document.getElementById('input-numbers').value = ' ';

    } else {
        let inputBox = document.getElementById('input-numbers').value += seeimput;
    }
});
// valiaton...................................

document.getElementById('sumbit-number').addEventListener('click', function () {

    var pinType = document.getElementById('input-numbers').value;
    let type = parseInt(pinType);

    var typePin = document.getElementById('input-pin').value;
    let pin = parseInt(typePin);

    if (pin == type) {
        document.getElementById('notifyT').style.display = 'block';
        document.getElementById('notifyF').style.display = 'none';
    } else {

        document.getElementById('notifyF').style.display = 'block';
        document.getElementById('notifyT').style.display = 'none';
    }
});