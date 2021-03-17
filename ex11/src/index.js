
function switchCase(letter) {
    var animals;
    switch (letter) {
        case 'a':
            animals = "antelope";
            break;
        case 'b':
            animals = "bird";
            break;
        case 'c':
            animals = "cat";
            break;
        default:
            animals = "stuff";
            break;
    }
    return animals;
}
console.log(switchCase("a"), switchCase("b"), switchCase("c"), switchCase("d"), switchCase(4)); //change this line
module.exports = switchCase;