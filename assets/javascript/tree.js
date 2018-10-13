// tree - node data structure to hold permutations of our possible solution guesses 

//-------------
// - the constructor of a tree elemenet
//-------------
function Node(data) {
    this.data = data;
    this.parent = null;
    this.cumValue = 0;
    this.children = [];
}

//-------------
// - the root of the tree
// - note it caches an array of the found solution set for efficiency
//-------------
function Tree(data) {
    var node = new Node(data);
    this._root = node;
    this.solution = [];
}

//-------------
// addNode() - add node to the tree structure under a parent
//           - no smarts here, just make it a direct child
//           - save the sum of the ancestors for effiency when comparing to our goal
//-------------
Node.prototype.addNode = function (data, parent) {
    var node = new Node(data);
    node.parent = parent;
    node.cumValue = data + parent.cumValue;
    parent.children.push(node);
    return node;
}

//-------------
// saveSolution() - walk up the tree from the given node and save the data to a top level array
//                - used to cache to solution set of the magic branch
//-------------
Tree.prototype.saveSolution = function (node) {
    while ((node != null) & (node.data != 0)) {
        this.solution.push(node.data);
        node = node.parent;
    }
}

//-------------
// traverseDF - traverse tree depth first and apply callback function
//            - used in searching for the leaf node of the solution branch
//-------------
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
