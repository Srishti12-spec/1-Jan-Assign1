let result = document.getElementById("result")

function minNum(...min) {
    let a = min;
    let b = min.length;
    minimum = a[b - 1];
    while (b--){
        if(a[b] < minimum){
            minimum= a[b];
        }
    }
            return minimum;
}

result.innerText = minNum(10,5,26,123,36,12,31,25,5)