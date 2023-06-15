const sumAll = function(a, b) {
    if (typeof(a) != 'number' || typeof(b) != 'number' || a < 0 || b < 0){
        return 'ERROR';
    }
    let smallNumber = 0;
    let largeNumber = 0;
    let sum = 0;
    if (a > b){
        smallNumber = b;
        largeNumber = a;
    }
    else {
        smallNumber = a;
        largeNumber = b;
    }

    for (i = smallNumber; i <= largeNumber; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
