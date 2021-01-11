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
        if (this.length === 0) {
            this.tail = null;
        }
        return curr;
    }

    //Unshift method
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

    //get method
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

    //set method
    set(pos, val) {
        let node = this.get(pos);
        if (!node) return false;
        node.val = val;
        return true;
    }

    //insert
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        //!!"hello" -> true
        if (idx === this.length) !!this.push(val);
        else if (idx === 0) !!this.unshift(val);
        else {
            let preNode = this.get(idx - 1);
            if (preNode) {
                let newNode = new Node(val);
                newNode.next = preNode.next;
                preNode.next = newNode;
                this.length++;
                return true;
            }
            return false;
        }
    }

    //Remove method
    remove(idx) {
        if (idx === 0) !!this.shift();
        else if (idx === this.length) !!this.pop();
        else if (idx < 0 || idx > this.length - 1) return undefined;
        else {
            let pre = this.get(idx - 1);
            pre.next = pre.next.next;
            return true;
        }
    }

    reverse() {
        // let prev = this.head;
        // let curr = prev.next;
        // this.head = this.tail;
        // this.tail = prev;
        // while (curr) {
        //     let next = curr.next;
        //     curr.next = prev;
        //     prev = curr;
        //     curr = next;
        // }
        // this.tail.next = null;
        // return this;

        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        while (node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let k = new SinglyLinkedList();
k.push(1);
k.push(2);
k.push(3);
k.reverse();

module.exports = { SinglyLinkedList, Node };
