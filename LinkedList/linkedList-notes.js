//Building a Linked List:
class LinkedList {
    constructor() {
        this.head = null;
    }

//The linked list has a head to indicate the beginning of the list.
//The head always contains the first node.
//In this case, we start with an empty list, represented by null.

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

/*Inserting at the end of the list is a bit more complex and can be achieved by the following steps:
Create a new node item
Check to see if the list is empty, if it is, then insert the new item as the only item in the list
Start at the beginning of the list and move through the list until you reach the end of the list
Set the end node's next pointer to the new node
The new node's next pointer is null (indicating that the new node now is the last node on the list)
Let's say you have an existing linked list like ours shown above, and you want to insert another item, Apple, in the list.
*/
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

/*Retrieving values from the linked list is straightforward. You can just traverse the list,
 comparing the value stored in each node with the value you are searching. 
 When the item is found, return the node. The following code snippet shows the implementation 
 of the retrieval (find) operation.
*/
    find (item) {
        //Start at the head
        let currNode = this.head;
        //If the list is empty
        if (!this.head) {
            return null;
        }
        //Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                //Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        //Fount it
        return currNode;
    }

/*Removal
When deleting an item, there are 3 cases that you need to consider. You can
    *delete from the beginning of the list.
    *delete from the end of the list.
    *delete a node between 2 other nodes.
*/
    remove (item) {
        //If the list is empty
        if (!this.head) {
            return null;
        }
        //If the node to be removed is the head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //Start at the head
        let currNode = this.head;
        //Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            //Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log(`Item not found`);
            return ;
        }
        previousNode.next = currNode.next;
    }
}