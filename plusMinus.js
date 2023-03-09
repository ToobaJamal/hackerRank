/*
Print the ratios of positive, negative and zero values in the array. 
Each value should be printed on a separate line with  digits after the decimal. 
The function should not return a value.
*/

function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zero = 0
    const len = arr.length
    for(let i = 0; i < len; i++) {
        if (arr[i] > 0) {
            positive += 1
        }
        else if(arr[i] < 0) {
            negative += 1
        }
        else {
            zero += 1
        }
    }
    console.log(`${(positive / len).toFixed(6)}
${(negative / len).toFixed(6)}
${(zero / len).toFixed(6)}`)
}
