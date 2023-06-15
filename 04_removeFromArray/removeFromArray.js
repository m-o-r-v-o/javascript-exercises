const removeFromArray = function(array, ...itemsToRemove) {
    for (let x = 0; x < itemsToRemove.length; x++){
        let index = array.indexOf(itemsToRemove[x]);
        if (index > -1){
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
