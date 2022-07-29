function reverse(num) {
    let r = 0;
    while (num != 0) {
        r = r * 10 + (num % 10)
        num = Math.floor(num / 10);
    }
    return r;
}

let num = prompt();
var x = reverse(num);
console.log("Number is :", num);
console.log("Reverse is: ", x);
