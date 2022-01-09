
function minNum(...input) {
    minimum = 100000000;
    for (var i = 0; i < input.length; i++) {
        if (input[i] < minimum) {
            minimum = input[i];
        }
    }
    return minimum;
}

let result = document.getElementById("res")
result.innerText = minNum(1, 2, 3, 4, 5, 6);
// result.innerText = minNum(-1, -5, 10);
// result.innerText = minNum(10, 20);
