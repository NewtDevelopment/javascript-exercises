const repeatString = function(sent, repititions) {
    if (repititions <0){
        return "ERROR"
    }
    let phrase = "";
    for(let i = 0; i < repititions; i++){
        phrase = phrase + sent;
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
