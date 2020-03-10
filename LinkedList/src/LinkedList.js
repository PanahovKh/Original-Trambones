const LinkedNode = require('./LinkedNode');

function LinkedList () {
    this.root = null;
    this.size = 0;
}

LinkedList.prototype.addElmAtStart = function (value) {

    let tempNode  = new LinkedNode (value) 
    
    tempNode.next = this.root;
    this.root = tempNode;
    this.size += 1;
}

LinkedList.prototype.init = function (array) {
    for(let i = 0; i < array.length; i++) {
         this.addElmAtStart (array[i]) 
    }
}

LinkedList.prototype.tooArray = function(value) {
    
    let arr = [];
    let tempNode = this.root;
    while(tempNode) {
        arr.push (tempNode.value) 
        tempNode = tempNode.next
    }
    return arr;
}

LinkedList.prototype.clear = function() { 

    this.root = null;
    this.size = 0;
}

LinkedList.prototype.toString = function() {
    let arrToString = '"';
    let tempNode = this.root;
    while(tempNode) {
        arrToString += tempNode.value + ', ';
        tempNode = tempNode.next
    }
    arrToString += '"'
    return arrToString;
}

LinkedList.prototype.getSize = function() {
    let result = 0;
    tempNode = this.root
    while(tempNode) { 
        tempNode = tempNode.next;
        
        result ++; 
    }
    return result
}

LinkedList.prototype.delFirstElm = function() {
    let firstElm = this.root.value;
    let tempNode = this.root.next;

    this.root = tempNode;
    this.size--;

    return firstElm;
}

LinkedList.prototype.delLastElm = function() {
    let result = null; 
    let previous = null;
    let tempNode = this.root;
    
    while(tempNode) { 
        previous = tempNode; 
        tempNode = tempNode.next;
        if(!tempNode.next) {
            result = tempNode.value;
            previous.next = null;
            this.size -= 1;
            return result;
        }
    }
}

LinkedList.prototype.addElmToEnd = function(value) {
    let tempNode = this.root;
    let newNode = new LinkedNode(value);
    while(tempNode){
        tempNode = tempNode.next;
        if(!tempNode.next) {
            tempNode.next = newNode;
            this.size += 1
            return this.tooArray();
        }
    }
}

const a  = new LinkedList();
a.init ([1 ,3 ,5, 6]);
// console.log(a.tooArray());
// console.log(a.toString());
 console.log(a.getSize());
// console.log(a.delFirstElm());
// console.log(a.delLastElm());
// console.log(a);

// console.log(a.addElmToEnd(9));
// console.log(a);


