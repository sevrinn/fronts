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
    return this;
  };

  showFront = () => {
    return this.head.data;
  };
}

let myLinkedList = new LinkedList();
// console.log(myLinkedList);
myLinkedList.addToFront(10).addToFront(20);
// console.log(myLinkedList.head.data); //20
myLinkedList.addToFront(30).addToFront(40);
// console.log(myLinkedList.head.data); //40
myLinkedList.removeFromFront();
// console.log(myLinkedList.head.data); //30
console.log(myLinkedList.showFront()); //30
