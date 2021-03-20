//  1. Implement an Array class from scratch
//  Walk through each step of implementing an array. Don't rush through this by copying and pasting the code samples. 
//  After you've walked through it and you understand the code of the Array class, hide the sample code and try writing the 
//  Array class from scratch using the memory module here for allocating memory. 

import Memory from './memory';

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error(`Out of memory`);
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error(`Index error`);
        }
        return memory.get(this.ptr + index);
    }

    pop() {
        if (this.length < 0) {
            throw new Error(`Index error`);
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error(`Index error`);
        }

        if (this.length >= this._capacity) {
            this._resize((this.length +  1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error(`Index error`);
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

Array.SIZE_RATIO = 3;

module.exports = Arrays

//  2. Explore the push() method
// Using the Array class you just created above, add an item to the array. Use the following function:
function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}

//  What is the length, capacity and memory address of your array?
//  Length = 1; Capacity = 3; Memory Address = Original Address
//  Add the following in the main function and then print the array:
// ...
//     arr.push(5);
//     arr.push(15);
//     arr.push(19);
//     arr.push(45);
//     arr.push(10);

//  What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
//  Length = 6; Capacity = 9; Memory Address = Shifted twice
//  3. Exploring the pop() method
//  Add the following in the main function and then print the array:
// ...
//   arr.pop();
//   arr.pop();
//   arr.pop();

//  What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
//  Length = 3; Capacity = 9, Memory Address = Will not have shifted from question 2 (line 104)

//  4. Understanding more about how arrays work
//  Print the 1st item in the array arr.
//  Empty the array and add just 1 item: arr.push("tauhida");
//  Print this 1 item that you just added. What is the result? Can you explain your result?
//  What is the purpose of the _resize() function in your Array class?

//  5. URLify a string
//  A common mistake users make when they type in an URL is to put spaces between words or letters. 
//  A solution that developers can use to solve this problem is to replace any spaces with a %20. 
//  Write a method that takes in a string and replaces all its empty spaces with a %20. 
//  Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be 
//  *Input: tauhida parveen
//  *Output: tauhida%20parveen
//  *Input: www.thinkful.com /tauh ida parv een
//  *Output: www.thinkful.com%20/tauh%20ida%20parv%20een
function URLify(string) {
    return string.trim().replace(/\s/g, '%20');
}
//  console.log(URLify('www.thinkful.com / tauh ida parv een))

//  6. Filtering an array
//  Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. 
//  DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.
function filter(array) {
    let filteredArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 5) {
            filteredArray.push(array[i])
        }
    }
    return filteredArray;
}

//  7. Max sum in the array
//  You are given an array containing positive and negative integers. 
//  Write an algorithm which will find the largest sum in a continuous sequence.
//  *Input: [4, 6, -3, 5, -2, 1]
//  *Output: 12
function findMax(array) {
    return Math.max(...array)
}
//console.log(findMax[12, -450, 375, 10000])

//  8. Merge arrays
//  Imagine you have 2 arrays which have already been sorted. 
//  Write an algorithm to merge the 2 arrays into a single array, which should also be sorted. 
//  *Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
//  *Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
function mergeTwoArrays(array1, array2) {
    let newArray = array1.concat(array2)
    //console.log(newArray)
    let sortedArray = []
    return newArray.sort((a, b) => {return a-b})
}
//console.log(mergeTwoArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]))

//  9. Remove characters
//  Write an algorithm that deletes given characters from a string. For example, given a string of 
//  "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should 
//  transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.
//  *Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
//  *Output: 'Bttl f th Vwls: Hw vs. Grzny'
function removeChar(string, characters) {
    let regex = new RegExp(`[${characters}]`, 'ig')
    console.log(regex)
    return string.replace(regex, '')
}
//console.log('Battle of the Vowels: Hawaoo vs. Grozny', 'aeiou')

//  10. Products
//  Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers 
//  in the input array except for the number at each current index. See the following example input and output.
//  *Input:[1, 3, 9, 4] 
//  *Output:[108, 36, 12, 27]
function product(array) {
    return array.map((a, b) => {
        return array.slice(0, b).concat(array.slice((b + 1), (array.length)))
            .reduce((a, b) => a*b)
    })
}
//console.log([1, 3, 9, 4])

//  11. 2D array
//  Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.
//  *Input
// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];

// //  *Output
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];
function arraySearch(array) {
    const firstArray = JSON.parse(JSON.stringify(array));
    let newArray = array;

    firstArray.map((row, rowAlt) => {
        row.map((item, rowAlt) => {
            if (item === 0) {
                newArray[rowAlt].forEach((num, i) => newArray[rowAlt][i] = 0)
                newArray.forEach(newRow => newRow[arrAlt] = 0)
            }
        })
    })
    return newArray
}

//  12. String rotation
//  Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
//  *Input: amazon, azonma
//  *Output: False
//  *Input: amazon, azonam
//  *Output: true
function isRotated(str1, str2) {
    if (!str1 || !str2) {
        return false;
    }
    if (str1.length !== str2.length) {
        return false;
    }
    return (str1 + str1).includes(str2);
}
console.log(isRotated('amazon', 'azonma'))
console.log(isRotated('amazon', 'azonam'))
