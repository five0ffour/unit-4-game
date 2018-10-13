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

    // return the solution, the chain of parents
    // (for now, return the whole tree)
    return tree;
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
        if (cumValue + choices[choices.length] > goal) 
            choices.pop();

        // For each choice,  add a child node to the root
        for (var i = choices.length-1; i >= 0; i--) {
            var sum = 0;
            var value = choices[i];
            var leafNode = parentNode.addNode(value,parentNode);
            
            // // make a copy of the choices array, minus the last element
            // var leafChoices = [];
            // for (var j=i-1; (j >= 0); j--) 
            //     leafChoices.unshift(choices[j]);

            if (recurseChoices(leafNode, choices, goal)) {
                // console.log("Found a solution!!");
                return true;
            }
        }
    }
}

