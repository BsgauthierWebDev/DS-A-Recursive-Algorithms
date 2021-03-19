//1. What is the Big O for this?
//1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
//You want to find a playmate for your dog, preferably of the same breed. 
//So you want to know if anyone out of the 15 people have the same breed as your dog. 
//You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
//Someone yells - "I do, be happy to bring him over"
Constant: O(1)

//2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
//You want to find a playmate for your dog who is of the same breed. 
//So you want to know if anyone out of the 15 people have the same breed as your dog. 
//You start with the first person and ask him if he has a golden retriever. 
//He says no, then you ask the next person, and the next, and the next until you find someone 
//who has a golden or there is no one else to ask.
// Linear: O(n)

//2. Even or Odd
//What is the Big O of the following algorithm? Explain your answer
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// Constant: O(1) - There are no loops and only one value is generated

//3. Are you here?
//What is the Big O of the following algorithm? Explain your answer
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
//Polynomial: O(n^k) - There are loops nested inside other loops

//4. Doubler
//What is the Big O of the following algorithm? Explain your answer
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
//Linear: O(n) - Function loops through the whole array

//5. Naive search
//What is the Big O of the following algorithm? Explain your answer
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
//Linear: O(n) - Time grows as the input grows

//6. Creating pairs
//What is the Big O of the following algorithm? Explain your answer
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
//Polynomial: O(n^k) - There are loops nested inside loops

//7. Compute the sequence
//What does the following algorithm do? What is its runtime complexity? Explain your answer
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
//Returns an array of numbers 0-3. Linear: O(n). Runtime complexity will grow as (num) grows

//8. An efficient search
//In this example, we return to the problem of searching using a more sophisticated approach 
//than in naive search, above. Assume that the input array is always sorted. 
//What is the Big O of the following algorithm? Explain your answer
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
//Logarithmic: O(log(n)): Uses a binary search to cut the size of the input

//9. Random element
//What is the Big O of the following algorithm? Explain your answer
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
//Constant: O(1) - Only looks for one value within the array, time will not change no matter the size

//10. What am I?
//What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
//If item is less than 2 or NOT zero, return false. If number is even, return false. Odd, return true
//Logarithmic: O(log(n)) - Time varies based on the size of the input