class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Push method
    push(val) {
        let newNode = new Node(val);
        newNode.prev = this.tail;
        if (!this.length) {
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //Pop method
    pop() {
        if (this.length === 0) return undefined;
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        }
        let prev = this.tail.prev;
        prev.next = null;
        let deleted = this.tail;
        deleted.prev = null;
        this.tail = prev;
        this.length--;
        return deleted;
    }

    //Shift method
    shift() {
        if (!this.length) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }

    //Unshift method
    unshift(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
            return this;
        }
        let oldHead = this.head;
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    //Get method
    get(idx) {
        if (idx < 0 || idx > this.length - 1) return null;
        let i;
        let node;
        if (Math.floor(this.length / 2) > idx) {
            i = 0;
            node = this.head;
            while (i !== idx) {
                node = node.next;
                i++;
            }
        } else {
            i = this.length - 1;
            node = this.tail;
            while (i !== idx) {
                node = node.prev;
                i--;
            }
        }
        return node;
    }

    //Set method
    set(idx, val) {
        let node = this.get(idx);
        if (!node) return false;
        node.val = val;
        return true;
    }

    insert(idx, val) {
        let node = new Node(val);
        if (idx === 0) !!this.unshift(val);
        else if (idx === this.length) !!this.push(val);
        else {
            let pre = this.get(idx - 1);
            if (!pre) return false;
            pre.next.prev = node;
            node.next = pre.next;
            node.prev = pre;
            pre.next = node;
            this.length++;
            return true;
        }
    }

    remove(idx) {
        if (idx === 0) !!this.shift();
        else if (idx === this.length - 1) !!this.pop();
        else {
            let pre = this.get(idx - 1);
            let toBeForgotten = pre.next;
            pre.next.next.prev = pre;
            pre.next = pre.next.next;
            toBeForgotten.next = null;
            toBeForgotten.prev = null;
            return true;
        }
    }
}

module.exports = { DoublyLinkedList };
