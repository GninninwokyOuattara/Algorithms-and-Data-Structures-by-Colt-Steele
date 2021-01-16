const { BinarySearchTree } = require("./BinarySearchTree");

//Thought unnecessary to create such class, I just wanted to do it.
class Queue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }
    enqueue(val) {
        this.queue.push(val);
        this.size++;
    }

    dequeue() {
        let dequeued = this.queue.shift();
        this.size--;
        return dequeued;
    }
}

const bfs = (tree) => {
    let visited = [];
    if (!tree.root) return visited;
    let queue = new Queue();
    queue.enqueue(tree.root);
    let currNode;
    while (queue.size) {
        currNode = queue.dequeue();
        visited.push(currNode.val);
        if (currNode.left) queue.enqueue(currNode.left);
        if (currNode.right) queue.enqueue(currNode.right);
    }
    return visited;
};
