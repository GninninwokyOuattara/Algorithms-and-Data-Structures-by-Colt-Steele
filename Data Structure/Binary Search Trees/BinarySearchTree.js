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

    search(val) {
        if (!this.root) return false;
        else {
            let currNode = this.root;
            let found = false;
            while (currNode && !found) {
                if (val < currNode.val) {
                    currNode = currNode.left;
                } else if (val > currNode.val) {
                    currNode = currNode.right;
                } else {
                    found = true;
                }
            }
            return found;
        }
    }

    searchRecursive(val, currNode = this.root) {
        if (!currNode) return false;
        if (val < currNode.val) return this.searchRecursive(val, currNode.left);
        else if (val > currNode.val)
            return this.searchRecursive(val, currNode.right);
        else return true;
    }
}

module.exports = { BinarySearchTree };
