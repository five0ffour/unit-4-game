function findAllSolutions(choices, goal) {
    var solution = []; // set of choices with the result

    // sort the input choices
    choices.sort(function (a, b) {
        return a - b
    });

    // create a tree
    var tree = new Tree(0); // root element has no value

    // add permutations of all of the choices as children
    // While a node is greater than or equal to its parent, and
    // below the target goal, add it as a leaf to the previous node
    recurseChoices(tree._root, choices, goal);

    // search the tree for the goal

    // return the solution, the chain of parents
    // (for now, return the whole tree)
    return tree;
}

function recurseChoices(topNode, choices, goal) {
    for (var i = choices.length-1; i >= 0; i--) {
        var sum = 0;
        var node = topNode;
        var value = choices[i];
        while (sum + choices[i] <= goal) {
            var leafNode = topNode.addNode(value, node);
            sum += value;

            // recurse through this leaf and and add sub permutations
            var leafChoices = choices;
            leafChoices.pop();
            recurseChoices(leafNode, leafChoices, goal);
        }
    }
}

