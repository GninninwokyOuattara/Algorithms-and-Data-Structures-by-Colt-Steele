const { BinarySearchTree } = require("./BinarySearchTree");

const dfp = (tree) => {
    let visited = [];
    if (!tree.root) return visited;
    const helper = (node) => {
        if (node.left) helper(node.left);
        if (node.right) helper(node.right);
        visited.push(node.val);
    };
    helper(tree.root);
    return visited;
};
