var chr = '0';
var sum = -3;
var game_over = false;
var number_of_turns = 0
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
tn = document.getElementsByTagName('div');
// console.log(tn);

function check(number, sum) {
    let remainder = number % 3;
    if (remainder === 0 && arr[number] + arr[number + 1] + arr[number + 2] === sum) return true;
    else if (remainder === 1 && arr[number] + arr[number + 1] + arr[number - 1] === sum) return true;
    else if (arr[number] + arr[number - 2] + arr[number - 1] === sum) return true;

    if (number < 3 && arr[number] + arr[number + 3] + arr[number + 6] === sum) return true;
    else if (number < 6 && arr[number] + arr[number + 3] + arr[number - 3] === sum) return true;
    else if (arr[number] + arr[number - 3] + arr[number - 6] === sum) return true;

    if (number % 2 === 0) {
        if (arr[0] + arr[4] + arr[8] === sum || arr[2] + arr[4] + arr[6] === sum) return true;
    }
    return false;
}
function putCh(num) {
    if (!game_over) {
        if (arr[num - 2] === 0) {
            number_of_turns++;
            document.getElementById('winning-statement').innerHTML = '<b>Click on a block<br>to put ' + chr + '</br>';
            if (chr === 'X') {
                chr = '0';
                arr[num - 2] = 1;
                sum = 3;
            } else {
                chr = 'X';
                arr[num - 2] = -1;
                sum = -3;
            }
            tn[num].innerHTML = chr;
            if (check(num - 2, sum)) {
                document.getElementById('winning-statement').innerHTML = '<b>Winner is player<br>with ' + chr + '</br>';
                document.getElementById('start-button').style.visibility = "visible";
                game_over = true;
                return 0;
            }
        } else {
            document.getElementById('winning-statement').innerHTML = '<b>Choose another<br>block</b>';
        }
    }
    if (number_of_turns === 9) {
        document.getElementById('winning-statement').innerHTML = '<b>This game ends<br>in a tie</br>';
        document.getElementById('start-button').style.visibility = "visible";
        game_over = true;
    }
}
function startAgain() {
    chr = '0';
    game_over = false;
    number_of_turns = 0;
    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    document.getElementById('start-button').style.visibility = "hidden";
    document.getElementById('winning-statement').innerHTML = '<b>Click on a block<br>to put X</br>';
    for (let i = 2; i < 11; i++) {
        tn[i].innerHTML = '';
    }
}