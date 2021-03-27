//  Linear Search
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    //If you don't find the item you're looking for:
    return -1;
    //Indicating the item wasn't found.
}
//  Time complexity O(n)

//  Binary search
//  Only works on sorted arrays
function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length: end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};
//  Time complexity is logrithmic O(log(n))

//  Depth-first search(DFS)
//  Traverse down a tree then work back up
//  Build a basic binary tree structure
class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    //  Traverse the nodes adding them to a values array
    dfs(values = []) {
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }
    /*If there is a left-hand branch then you recursively search the nodes there. 
    You then add the value at the current node to the array. 
    And finally, you recursively search the right-hand branch. 
    This is O(n), as each node needs to be visited.*/

//  Breadth-first search
//  Works across the roes of a tree, from top down
//  Requires a "first-in, first-out" queue to process sigmings in the correct order
//  Runtime is O(n) because each node needs to be visited once
    bfs(tree, values = []) {
        const queue = new Queue(); //Assuming a Queue is implemented (refer to previous lesson on Queue)
        const node = tree.root;
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value);//add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); //add right child to the queue
            }
        }

        return values;
    }
}

module.exports = {
    indexOf,
    binarySearch,
};