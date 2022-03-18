const removeFromArray = function(inputArray, in1, in2, in3, in4) {
    let initArrayLength = inputArray.length;
    let initRemoveArray = [];
    initRemoveArray.push(in1);
    initRemoveArray.push(in2);
    initRemoveArray.push(in3);
    initRemoveArray.push(in4);

    let index = 0;
    for (let i = 0; i < initArrayLength; i++){
        if(initRemoveArray.includes(inputArray[i])){
            inputArray.splice(i, 1);
            console.log(`Spliced a thing ${i}, ${inputArray[i]}`);
            i--;
            initArrayLength--;

        }      
        
    }
    return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
