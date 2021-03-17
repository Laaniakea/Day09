
function switchCaseSequential(num) {
    var answer
    switch (num) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:

            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = undefined;
            break;
    }
    return answer;
}
console.log(switchCaseSequential(1), switchCaseSequential(2), switchCaseSequential(3), switchCaseSequential(4), switchCaseSequential(5), switchCaseSequential(6), switchCaseSequential(7), switchCaseSequential(8), switchCaseSequential(9)); //change this line
module.exports = switchCaseSequential;