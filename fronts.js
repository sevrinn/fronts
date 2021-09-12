//------------FRONT---------------------//
//This was a little hard for my to wrap my little walnut sized brain around but I get it and I understand

//Node Constructor
class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//linked list constructor
class LinkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }

  addToFront = (data) => {
    //create new node
    let newNode = new ListNode(data);
    //set next pointer to equal head pointer so both are pointing at the same spot
    newNode.next = this.head;
    //set head to point at the new node
    this.head = newNode;
    //iterate length up by one;
    this._length++;
    //return
    return this;
  };

  removeFromFront = () => {
    //if NOT this.head, return as is;
    if (!this.head) {
      return;
    }
    //set head to the next node;
    this.head = this.head.next;
    //decrement length of list by one
    this._length--;
    return this;
  };

  showFront = () => {
    return this.head;
  };

  contains = (val) => {
    //declare 
    let containsVal = null;
    //loop through linked list
    for(let i = 0; i < this._length; i++){
      console.log(this.head);
      //if val of node === val we are looking for
      if(this.data == val) {
        //set containsVal true
        containsVal = true;
        return containsVal;
      } else { //else
        //set containsVal to false
        containsVal = false;
      }
      this.head = this.next;
    }
    return containsVal; 
  }

  length = () => {
    //show length of linked list
    return myLinkedList._length;
  }
}

let myLinkedList = new LinkedList();
// console.log(myLinkedList);
// console.log(myLinkedList._length); //0
myLinkedList.addToFront(10).addToFront(20).showFront();
// console.log(myLinkedList._length); //2
// console.log(myLinkedList.head.data); //20
myLinkedList.addToFront(30).addToFront(40).showFront();
// console.log(myLinkedList._length); //4
// console.log(myLinkedList.head.data); //40
myLinkedList.removeFromFront();
// console.log(myLinkedList._length); //3
// console.log(myLinkedList.head.data); //30
// console.log(myLinkedList.showFront()); //30

// //for contains
// console.log(myLinkedList.contains(13)); //false
// console.log(myLinkedList.contains(20)); //true

//for length
console.log(myLinkedList.length());