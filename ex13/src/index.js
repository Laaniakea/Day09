// Only change code below this line
function inverseWhile() {

    var i = 5;
    var fiveNumber = "";
    while (i >= 0) {
        if (i == 0) {
            fiveNumber = fiveNumber + i;
        } else {
            fiveNumber = fiveNumber + i + ",";
        }
        i--;
    }
    return fiveNumber;
}


//Only change code above this line

console.log(inverseWhile());
module.exports = inverseWhile;
