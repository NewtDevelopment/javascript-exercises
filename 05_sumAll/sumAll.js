const sumAll = function(in1, in2) {
    if (typeof(in1) != "number" || typeof(in2) != "number"){
        return "ERROR";
    }
    if(in1 < 0||in2<0){
        return "ERROR";
    }
    if(in2 < in1){
        console.log("in2 less than in1")
        let transitionNumber = in1;
        in1 = in2;
        in2 = transitionNumber;
    }
    let sum = 0;
    for(let i = in1; i <=in2;i++ ){
        sum = sum + i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
