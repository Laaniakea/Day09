// Only change code below this line
function myForLoop1() {
    var evenNumbers = "";
    for (var i = 0; i <= 8; i++) {
        if (i % 2 == 0) {
            if (i == 8) {
                evenNumbers = evenNumbers + i;
            } else {
                evenNumbers = evenNumbers + i + ", ";
            }
        }
    }
    return evenNumbers;
}

function myForLoop2() {
    var evenNumbersReversed = "";
    for (var i = 8; i >= 0; i--) {
        if (i % 2 == 0) {
            if (i == 0) {
                evenNumbersReversed = evenNumbersReversed + i;
            } else {
                evenNumbersReversed = evenNumbersReversed + i + ", ";
            }
        }

    }
    return evenNumbersReversed;
}
myForLoop1();
myForLoop2();

//Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};