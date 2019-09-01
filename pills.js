function minAlgo(arr) {
    let noOfOnes = 0;
    let n = arr.length;
    for (let k = 0; k < n; k++) {
        if (arr[k] === 'r') {
            arr[k] = 1;
        }
        if (arr[k] === 'b') {
            arr[k] = 0;
        }
    }

    // find total number of all in the array 
    for (let i = 0; i < n; i++) {
        if (arr[i] == 1)
            noOfOnes++;
    }

    // length of subarray to check for 
    let x = noOfOnes;

    let maxOnes = Number.MIN_VALUE;

    // array to store number of 1's upto 
    // ith index 
    let preCompute = new Number(n);

    // calculate number of 1's upto ith 
    // index and store in the array preCompute[] 
    if (arr[0] == 1)
        preCompute[0] = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i] == 1) {
            preCompute[i] = preCompute[i - 1] + 1;
        } else
            preCompute[i] = preCompute[i - 1];
    }

    // using sliding window technique to find 
    // max number of ones in subarray of length x 
    for (let i = x - 1; i < n; i++) {
        if (i == (x - 1))
            noOfOnes = preCompute[i];
        else
            noOfOnes = preCompute[i] - preCompute[i - x];

        if (maxOnes < noOfOnes)
            maxOnes = noOfOnes;
    }

    // calculate number of zeros in subarray 
    // of length x with maximum number of 1's 
    let noOfZeroes = x - maxOnes;

    return noOfZeroes;
}
let c = minAlgo('brrbbrbbbbrrrbbrrrbbbbbbrrb'.split(''));
console.log("Number : " + c);