class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (!this.root) this.root = node;
        else {
            let currNode = this.root;
            while (currNode) {
                if (val === currNode.val) return undefined;
                else if (val < currNode.val) {
                    if (currNode.left) {
                        currNode = currNode.left;
                    } else {
                        currNode.left = node;
                        break;
                    }
                } else {
                    if (currNode.right) {
                        currNode = currNode.right;
                    } else {
                        currNode.right = node;
                        break;
                    }
                }
            }
        }
    }

    insertRecursive(val, currNode = this.root) {
        let node = new Node(val);
        if (!this.root) {
            this.root = node;
        } else {
            if (val === currNode.val) return undefined;
            else if (val < currNode.val) {
                if (currNode.left) this.insertRecursive(val, currNode.left);
                else {
                    currNode.left = node;
                }
            } else {
                if (currNode.right) this.insertRecursive(val, currNode.right);
                else {
                    currNode.right = node;
                }
            }
        }
    }
}

let k = new BinarySearchTree();
// k.insert(1);
// k.insert(0);
// k.insert(2);
// k.insertRecursive(3);

k.insertRecursive(10);
k.insertRecursive(5);
k.insertRecursive(13);
k.insertRecursive(11);
k.insertRecursive(12);
k.insertRecursive(16);
k.insertRecursive(7);
console.log(k);
