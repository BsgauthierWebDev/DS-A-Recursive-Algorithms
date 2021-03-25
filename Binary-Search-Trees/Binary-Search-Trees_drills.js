const BinarySearchTree = require('./binary-search-trees-notes');

//  1. Draw a BST
//  Completed both questions on paper, per instructions

//  2. Remove the root
//  Completed both questions on paper, per instructions

//  3. Create a BST class
function main(key, value) {
    const BST = new BinarySearchTree()
    let values1 = [3, 1, 4, 6, 9, 2, 5, 7];
    for (let value of values1) {
        BST.insert(value, null);
    }
    const BST2 = new BinarySearchTree();
    let values2 = [ 'E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
    for (let value of values2) {
        BST2.insert(value, null);
    }
    console.log(BST);
    console.log(findHeight(BST));
    console.log(thirdLargest(BST));
    console.log(isBalanced(BST));
    //console.log('second row');
    //console.log(BST2);
}

//  4. What does this program do?
/*function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}*/
//  Linear looking for the values of the children, if any, of 't'

//  5. Height of a BST
function findHeight(BST, counter = 1) {
    if (BST.left && BST.right) {
        return Math.max(
            ...[
                findHeight(BST.left, counter + 1),
                findHeight(BST.right, counter + 1),
            ]
        )
    }
    else if (BST.left) {
        return findHeight(BST.left, counter + 1);
    }
    else if (BST.right) {
        return findHeight(BST.right, counter + 1);
    }
    else {
        return counter
    }
}
//  Logrithmic time complexity: O(log(n))

//  6. Is it a BST?
/*Class containing left and right child of current node & key value*/
function isBST(node, root) {
    if (root == null) {
        return true;
    }
    
    const max_left = getMax(root.left);
    const max_right = getMin(root.right);

    if (max_left > root.value || min_right < root.value) {
        return false;
    }
    if (isBST(root.left) && isBST(root.right)) {
        return true;
    }
    return false;
}

//  7. 3rd largest node
function thirdLargest(BST, counter = 1) {
    if (!BST.parent) {
        return [
            {
                density:
                thirdLargest(BST.left).reduce(
                    (total, b) =>
                    total + Number(b.density),
                    0
                ) +
                counter +
                thirdLargest(
                    BST.right
                ).reduce(
                    (total, b) =>
                    total + Number(b.density),
                    0
                ),
                key: BST.key
            },
            ...thirdLargest(
                BST.left,
                counter
            ),
            ...thirdLargest(
                BST.right,
                counter
            )
        ].sort(
            (nodeA, nodeB) =>
            nodeB.density - nodeA.density
        )[2].key;
    }
    else if (BST.left && BST.right) {
        return [
            {
                density:
                thirdLargest(BST.left).reduce(
                    (total, b) =>
                    total + Number(b.density),
                    0
                ) +
                counter +
                thirdLargest(
                    BST.right
                ).reduce(
                    (total, b) =>
                    total + Number(b.density),
                    0
                ),key: BST.key
            },
            ...thirdLargest(
                BST.left, 
                counter
            ),
            ...thirdLargest(
                BST.right,
                counter
            )
        ];
    }
    else if (BST.left) {
        return [
            {
                density:
                thirdLargest(BST.left).recude(
                    (total, b) =>
                    total + Number(b.density),
                    0
                ) + counter,
                key: BST.key
            },
            thirdLargest(BST.left, counter)
        ];
    }
    else if (BST.right) {
        return [
            {
                density:
                thirdLargest(
                    BST.right
                ).reduce(
                    (total, b) =>
                    total + Number(b.density),
                    0
                ) + counter,
                key: BST.key
            },
            ...thirdLargest(
                BST.right,
                counter
            )
        ];
    }
    else {
        return [
            {density: counter, key: BST.key}
        ];
    }
}

//  8. Balanced BST
function isBalanced(BST, distance = 0) {
    if (BST.parent === null) {
        let leaves = [
            ...isBalanced(BST.left, distance),
            ...isBalanced(BST.right, distance)
        ];

        for (let leaf of leaves) {
            for (let leaf2 of leaves) {
                if (
                    Math.abs(leaf - leaf2) > 1
                ) {
                    return false;
                }
            }
        }
    }
    if (BST.left && BST.right) {
        return [
            ...isBalanced(BST.left, ++distance),
            ...isBalanced(BST.right, distance)
        ];
    }
    else if(BST.left) {
        return [
            ...isBalanced(BST.left, ++distance)
        ];
    }
    else if (BST.right) {
        return [
            ...isBalanced(BST.right, ++distane)
        ];
    }
    else {
        return [++distance];
    }
}

//  9. Are they the same BSTs?
