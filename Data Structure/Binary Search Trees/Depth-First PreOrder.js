const { BinarySearchTree } = require("./BinarySearchTree");

const dfp = (tree) => {
    let visited = [];
    if (!tree.root) return visited;
    const helper = (node) => {
        visited.push(node.val);
        if (node.left) helper(node.left);
        if (node.right) helper(node.right);
    };
    helper(tree.root);
    return visited;
};
