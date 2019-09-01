
let calcResult = function(marks,outof){

    if(marks > outof)   return `Invalid marks ${marks}`;
    
    let per = (marks/outof)*100;
    let grade = ' ';
    if(per >=  80){
        grade = 'A';
    }
    else if (per >= 70){
        grade = 'B';
    }
    else if(per >= 50){
        grade = 'C'
    }
    else{
        grade = 'D'
    }
    return `Your grade is ${grade} and marks : ${marks}`;
}

let result = calcResult(915,100);
console.log(result);
