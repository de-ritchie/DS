export class LinkedList <T>{

    head: DSNode <T>;

    constructor(){

    }

    //adds a new node at last
    add(value: T){
        
        let newNode = new DSNode(value);
        if(this.head){
            let currNode = this.head;
            while(currNode.next){
                currNode = currNode.next;
            }
            currNode.next = newNode;
        } else{
            this.head = newNode;
        }
        return newNode;
    }

    getByIndex(i: number){

        let j = 0;
        let currNode = this.head;

        while(i != j && currNode.next){
            currNode = currNode.next;
            j++;
        }
        return (i == j && currNode) ? currNode : null;
    }

    printAllNodes(){

        let currNode = this.head;
        while(currNode){
            console.log('Node value', currNode.value);
            currNode = currNode.next;
        }
    }
}

class DSNode <T>{
    
    value: T;
    next: DSNode <T>;

    constructor(value: T){
        this.value = value;
        this.next = null;
    }
}