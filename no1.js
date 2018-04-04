var heightJohn = 170;
var heightJesie = 160;
var ageJohn = 36;
var ageJesie = 29;

function calculate(Age,height)
{
    
    var score = 5*Age+height;
    return score;
}
var John = calculate(36,170);
var Jesie = calculate(29,160);
console.log(John);
console.log(Jesie);
