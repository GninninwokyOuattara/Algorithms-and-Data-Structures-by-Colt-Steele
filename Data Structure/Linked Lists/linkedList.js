class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    //Push method
    push(val) {
        if (!this.length) {
            this.head = new Node(val);
            this.tail = this.head; //this.tail is this.head
            this.length++;
        } else {
            this.tail.next = new Node(val); // when length = 1, this.tail here is this.head, this.tail.next = this.head.next
            this.tail = this.tail.next;
            this.length++;
        }
        return this;
    }

    //Pop method
    pop() {
        if (!this.length) return undefined;
        //mine
        // let pre = this.head;
        // let curr = pre.next;
        // while (curr.next) {
        //     curr = curr.next;
        //     pre = pre.next;
        // }
        // pre.next = null;
        // this.tail = pre;
        // this.length--;

        //Colt's
        let curr = this.head;
        let newTail = curr;
        while (curr.next) {
            newTail = curr;
            curr = curr.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }
}

module.exports = { SinglyLinkedList, Node };
