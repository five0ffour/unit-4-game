function Node(data) {
    this.data = data;
    this.parent = null;
    this.cumValue = 0;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
    this.solution = [];
}

Node.prototype.addNode = function (data, parent) {
    var node = new Node(data);
    node.parent = parent;
    node.cumValue = data + parent.cumValue;
    parent.children.push(node);
    return node;
}

Tree.prototype.saveSolution = function (node) {
    while ((node != null) & (node.data != 0)) {
        this.solution.push(node.data);
        node = node.parent;
    }
}

// traverseDF - traverse tree depth first 
Tree.prototype.traverseDF = function (callback) {

    (function recurse(currentNode) {
        // step 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        }

        // step 4
        callback(currentNode);

        // step 1
    })(this._root);

};
