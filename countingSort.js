/*
Given a list of integers, count and return the number of times each value appears as an array of integers.
*/

function countingSort(arr) {
    const freqArr = new Array(100).fill(0)
    for(let i of arr) {
        freqArr[i] += 1
    }
    return freqArr
}
