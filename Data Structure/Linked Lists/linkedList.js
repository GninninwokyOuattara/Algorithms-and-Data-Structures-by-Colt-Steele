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

    //Shift method
    shift() {
        if (!this.length) return undefined;
        let curr = this.head;
        this.head = curr.next;
        this.length--;
        this.tail = null;
        return curr;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx > this.length - 1 || idx < 0) return undefined;
        let curr = this.head;
        let i = 0;
        while (i !== idx) {
            curr = curr.next;
            i++;
        }
        return curr;
    }

    set(pos, val) {
        let node = this.get(pos);
        if (!node) return false;
        node.val = val;
        return true;
    }

    // set(pos, val) {
    //     if (pos < 0 || pos > this.length - 1) return undefined;
    //     let i = 0;
    //     let curr = this.head;
    //     while (i !== pos) {
    //         curr = curr.next;
    //         i++;
    //     }
    //     curr.val = val;
    //     return curr;
    // }
}

module.exports = { SinglyLinkedList, Node };
