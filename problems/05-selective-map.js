/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.


*******************************************************************************/

function selectiveMap(array, selector, mapper) {
    let newArr = [];
    for (let el of array) {
        if (selector(el)) {
            newArr.push(mapper(el))
        } else {
            newArr.push(el)
        }
    }
    return newArr;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = selectiveMap;
} catch(e) {
    return null;
}
