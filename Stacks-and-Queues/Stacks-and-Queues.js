const CreateStack = require('./Create-Stack');
const CreateQueue = require('./Queue-Class')
const DoublyQueue = require('./Doubly-Queue')

/*Assignments for the Stacks and Queues portion of the curriculum*/

/*1. Create a stack class
Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

    Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.*/
const starTrek = new CreateStack

function newStack() {
    //const starTrek = new CreateStack()
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
}

/*2. Useful methods for a stack

    Using the Stack class above, implement the following helper functions outside of the class:
        *peek(): allows you to look at the top of the stack without removing it
        *isEmpty(): allows you to check if the stack is empty or not
        *display(): to display the stack - what is the 1st item in your stack?
    Remove McCoy from your stack and display the stack*/

function peek(stack) {
    if (isEmpty(stack)) {
        return `Stack is empty`
    }
    return stack.top
}

function isEmpty(stack) {
    let currNode = stack.top
    if (!currNode) return true
    return false
}

function display(stack) {
    if (!stack.top) {
        console.log('Stack is empty')
        return
    }
    let iteratedNode = stack.top
    console.log('START')
    while (iteratedNode !== null) {
        console.log(iteratedNode.data)
        iteratedNode = iteratedNode.next
    }
    console.log('END')
}

/*3. Check for palindromes using a stack
A palindrome is a word, phrase, or number that is spelled the same forward and backward. 
For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome 
if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. 
We can use a stack to determine whether or not a given string is a palindrome.

Write an algorithm that uses a stack to determine whether a given input is palindrome or not. 
Use the following template as a starting point.*/

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    let stack = CreateStack();
    let reverseStack = '';

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }

    let currNode = stack.top;
    while (currNode !== null) {
        reverseStack = reverseStack + currNode.data;
        currNode = currNode.next;
    }
    //console.log(reverseStack);

    if (reverseStack === s) {
        return true;
    }
    return false;
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

//  Matching parentheses in an expression

function matchParentheses(expression) {
    const stack = CreateStack();
    for (let i = 0; i < expression.length; i++) {
        stack.push(expression[i]);
    }

    let openCount = 0;
    let closedCount = 0;
    let currNode = stack.top;
    while (currNode !== null) {
        if (currNode.data === '(') {
            openCount = openCount + 1;
        }
        else if (currNode.data === ')') {
            closedCount = closedCount + 1;
        }
        currNode = currNode.next
    }

    if (openCount > closedCount) {
        return `Missing a ')'`;
    }
    if (openCount < closedCount) {
        return `Missing a '('`;
    }
    if (openCount === closedCount) {
        return `Correct number of '(' and ')'`;
    }
}

//console.log(matchParentheses('(2*4)'));
//console.log(matchParentheses('(2*4'));
//console.log(matchParentheses('2*4)'));

//  #5 Sort stack

function sortStack(stack) {
    if (!stack.top.next) return stack;
    let sortStack = new CreateStack()
}
//console.log(sortStack(starTrek))

//6. Create a queue using Singly linked list
function newQueue() {
    const starTrekQueue = new CreateQueue()
    starTrekQueue.enqueue('Kirk');
    starTrekQueue.enqueue('Spock');
    starTrekQueue.enqueue('Uhura');
    starTrekQueue.enqueue('Sulu');
    starTrekQueue.enqueue('Checkov');
    //Remove Spock from the queue and display the resulting queue
    starTrekQueue.dequeue();
    starTrekQueue.dequeue();
    console.log('After removing Spock')
    display(starTrekQueue);

    return starTrekQueue;
}

function peek(queue) {
    if (isEmpty(queue)) {
        return 'Queue is empty'
    }
    return queue.first
}

function isEmpty(queue) {
    let currNode = queue.first;
    if (!currNode) return true;
    return false;
}

function display(queue) {
    if (isEmpty(queue)) {
        return 'Queue is empty'
    }
    let iteratedNode = queue.first;
    console.log('START');
    while (iteratedNode !== null) {
        console.log(iteratedNode.value);
        iteratedNode = iteratedNode.next;
    }
    console.log('END')
}
//console.log(display(starTrekQueue))

function mainDoubly() {
    const starTrekDoublyQueue = new DoublyQueue();
    starTrekDoublyQueue.enqueue('Kirk');
    starTrekDoublyQueue.enqueue('Spock');
    starTrekDoublyQueue.enqueue('Uhura');
    starTrekDoublyQueue.enqueue('Sulu');
    starTrekDoublyQueue.enqueue('Checkov');

    console.log(starTrekDoublyQueue);
    console.log('first')
    console.log(peek(starTrekDoublyQueue));
}

//mainDoubly();

//  8. Queue implementation using a stack
class Queue extends CreateStack {
    constructor() {
        super();
        this.auxStack = new CreateStack;
    }
    enqueue(data) {
        while (this.next) {
            this.auxStack.push(this.pop());
        }
        this.push(data);
        while (this.auxStack.next) {
            this.push(auxStack.pop());
        }
    }
    dequeue() {
        return this.pop().data;
    }
}

let trekQueue = new Queue();
trekQueue.enqueue('Kirk');
trekQueue.enqueue('Spock');
trekQueue.enqueue('Uhura');
trekQueue.enqueue('Sulu');
trekQueue.enqueue('Checkov');

console.log(trekQueue);

trekQueue.dequeue();

console.log(trekQueue);

//  9. Square dance pairing
class PairingMachine {
    constructor() {
        this.maleQueue = new CreateQueue;
        this.femaleQueue = new CreateQueue;
    }
    femaleArrives(name) {
        if (this.maleQueue.first) {
            console.log(`${name} paired with ${this.maleQueue.dequeue()}`);
        }
        else {
            this.femaleQueue.enqueue(name);
        }
    }

    maleArrives(name) {
        if (this.femaleQueue.first) {
            console.log(`${this.femaleQueue.dequeue()} paired with ${name}`);
        }
        else {
            this.maleQueue.enqueue(name);
        }
    }

    displayQueues() {
        console.log('Males: ');
        display(this.maleQueue);
        console.oog('Females: ');
        display(this.femaleQueue);
    }
}

let p = new PairingMachine;

p.femaleArrrives('Judy');
p.femaleArrives('Ruth');

p.displayQueues();

p.maleArrives('Joe');
p.maleArrives('Bob');
p.maleArrives('David');

p.displayQueues();

//  10. The Ophidian Bank
class Bank extends CreateQueue {
    constructor(rejectionRate) {
        super();
        this.rejectionRate = rejectionRate;
    }

    serveNext() {
        //Serve the next customer
        let customer = this.dequeue();
        //X% of the time, send them to the back of the line
        if (Math.random() < this.rejectionRate) {
            this.enqueue(customer);
            console.log(`${customer} sent to the back of the line`);
        }
        else {
            console.log(`${customer} served`);
        }
    }
}

let obsidian  = new Bank(.25)

obsidian.enqueue(1);
obsidian.enqueue(2);
obsidian.enqueue(3);
obsidian.enqueue(4);
obsidian.enqueue(5);

obsidian.serveNext();
display(obsidian);
obsidian.serveNext();
display(obsidian);
obsidian.serveNext();
display(obsidian);
obsidian.serveNext();
display(obsidian);