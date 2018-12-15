/**
 * Finding the length of connected cells of 1s in a matrix of 0s & 1s
 * Sample I/P
 * 11000
 * 01100
 * 00101
 * 10001
 * 01011
 * 
 * Sample O/P
 * 5
*/
const directions = require('./2_nDrawnFromK')(2, 2, [], -1, []);

function recursiveBlock(ipArr, i, j, rMax, cMax, booleanArray, size, res){
    
    if(i > rMax && j > cMax){
        return;
    } else{
        size ++;
        if(size >= res.maxSize){
            res.maxSize = size;
        }
        booleanArray[i][j] = true;
        for(let direction of directions){
            
            let newRow = i + direction[0];
            let newCol = j + direction[1];
            if(newRow >= 0 && newCol >= 0 && newRow < rMax && newCol < cMax 
                && ipArr[newRow][newCol] && !booleanArray[newRow][newCol]){
                recursiveBlock(ipArr, newRow, newCol, rMax, cMax, booleanArray, size, res);
            }
        }
        booleanArray[i][j] = false;
    }
}

let ipArr = [
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 1]
]
let booleanArray = create2dArray(ipArr.length, ipArr[0].length, false);
console.log(booleanArray);
let res = {maxSize: 0};

for(let i = 0; i < ipArr.length; i++){
    for(let j = 0; j < ipArr[i].length; j++){
        if(ipArr[i][j]){
            recursiveBlock(ipArr, i, j, ipArr.length, ipArr[0].length, booleanArray, 0, res);
        }
    }
}
console.log('Result', res);

function create2dArray(rMax, cMax, val){

    let row = [];
    for(let i = 0; i < rMax; i++){
        let col = [];
        for(let j = 0; j < cMax; j++){
            col[j] = val;
        }
        row.push(col);
    }
    return row;
}