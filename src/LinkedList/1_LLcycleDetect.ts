/**
 * Linked List cycle detection
 *                4 -> 5
 *              /        \
 * 1 -> 2 -> 3            6
 *              \        /
 *                8 <- 9
*/

import { LinkedList } from './LL'

let ll = new LinkedList<Number>();

for(let i of [1,2,3,4,5,6,7,8]){
    ll.add(i);
}

ll.getByIndex(7).next = ll.getByIndex(2);

//ll.printAllNodes();
console.log(detectCycleByFloyd(ll));

function detectCycle(ll: LinkedList<any>) {
    
    let map = new Map();
    
    let currNode = ll.head;
    while(currNode){
        if(map.get(currNode)){
            return 'Contains a loop';
        } else{
            map.set(currNode, 'value');
            currNode = currNode.next;
        }
    }
    return 'No loop';
}

function detectCycleByFloyd(ll: LinkedList<any>) {
    
    let slowPtr = ll.head, fastPtr;
    fastPtr = slowPtr.next && slowPtr.next.next;

    while(slowPtr && fastPtr && (slowPtr != fastPtr)){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next && fastPtr.next.next;
        console.log(fastPtr);
    }

    return (slowPtr && fastPtr && slowPtr==fastPtr) ? 'Contains a loop' : 'No loop';
}