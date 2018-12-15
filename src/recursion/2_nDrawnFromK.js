/**
 * Generate all strings of length n drawn from k
*/

let kString = (n, k, arr, kMin, resArr) => {

    if(n<1){
        resArr.push(Object.assign([], arr));
        //console.log(arr, '-----', resArr);
    } else{
        for(let i = kMin; i < k; i++){
            arr[n-1] = i;
            kString(n-1, k, arr, kMin, resArr);
        }
    }
    return resArr;
}

// let res = [];
// kString(2, 2, [], -1, res);
// console.log('Result', res);

module.exports = kString;