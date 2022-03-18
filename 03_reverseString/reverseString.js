const reverseString = function(input) {
    let letterArray = [];
    let reversed = "";
    for(const letter of input){
        letterArray.push(letter);
    }
    let letterArrayInitialLength = letterArray.length;
    for(let i = 0; i <letterArrayInitialLength; i++){
        reversed += letterArray.pop()
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
