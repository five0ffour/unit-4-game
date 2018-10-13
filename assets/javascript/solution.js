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
    if (recurseChoices(tree._root, choices, goal) == true)
        console.log("findAllSolutions() - found a solution!!");
    else 
        console.log("findAllSolustions() - could not find a solution.");

    // search the tree for the goal
    tree.traverseDF(function(node) {
        if (node.cumValue == goal) 
            tree.saveSolution(node);}
        );

    // return the solution, the chain of parents
    return tree.solution;
}

function recurseChoices(parentNode, choices, goal) {
    var found = false;
    var cumValue = parentNode.cumValue;
    
    if (cumValue === goal) {
        // Solution found!
        return true;
    }
    else if (cumValue > goal) {
        // Solution too large
        return false;
    } else {
        // Make a local copy of the choices so we can modify it while recursing
        var localchoices = choices.slice();

        // Last node undershoots goal, remove the largest guess(es) if that/they would exceed target
        while ((localchoices.length > 0) &&
               ((cumValue + localchoices[localchoices.length-1]) > goal))
               localchoices.pop();

        // For each choice, add a child node to the parent and iterate down
        for (var i = localchoices.length-1; i >= 0; i--) {
            var value = localchoices[i];
            var childNode = parentNode.addNode(value,parentNode);
            
            if (recurseChoices(childNode, localchoices, goal)) {
                // console.log("Found a solution!!");
                return true;
            }
        }
    }
}

