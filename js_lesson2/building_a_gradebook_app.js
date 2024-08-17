function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++){
        sum += scores[i];
    }
    return sum / scores.length
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

//-------------------------------------

function getGrade(score) {
    let gradeF = 59;
    let gradeD = 69;
    let gradeC = 79;
    let gradeB = 89;
    let gradeA = 99;
    if (score > gradeA ) {
        return "A++"
    }else if (score > gradeB) {
        return "A"
    }else if (score > gradeC) {
        return "B"
    }else if (score > gradeD) {
        return "C"
    }else if (score > gradeF) {
        return "D"
    }else {
        return "F"
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

//-------------------------------------

function hasPassingGrade(score) {
    let getGrade = 59;
    if (score > getGrade){
        return (score > getGrade)
    } else{
        return (score > getGrade)
    }

}
//this one is better

/*function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}*/


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

//-------------------------------------

