/**
 * Generating all the n-bits
 */

let binary = (n, arr) => {

    if(n > arr.length - 1){
        console.log(arr)
        return;
    } else{
        arr[n] = 0;
        binary(n+1, arr);
        arr[n] = 1;
        binary(n+1, arr);
    }
}

binary(0, [0, 0, 0]);