var arr = [12, 2, 14, 5, -3, 9, 15, -2, 11, 6, 7, 4];
arr.sort();
var itr = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 11) {
        console.log("Value 11 present at " + i);
    }
    loop1:
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] > 11) {
                break loop1;
            }
            if (arr[i] + arr[j] === 11) {
                console.log("Value at " + i + " : " + arr[i] + " Value at j :" + j + " : " + arr[j]);
                itr++;
            }
        }
}

console.log("Total iterations " + itr);