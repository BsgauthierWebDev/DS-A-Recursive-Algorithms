const HashMap = require('./hashmaps-notes');

//  1. Create a HashMap class
function main() {
    const lotr = new HashMap();
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;
    characters = [
        {"Hobbit": "Bilbo"},
        {"Hobbit": "Frodo"},
        {"Wizard": "Gandalf"},
        {"Human": "Aragorn"},
        {"Elf": "Legolas"},
        {"Maiar": "The Necromancer"},
        {"Maiar": "Sauron"},
        {"RingBearer": "Gollum"},
        {"LadyOfLight": "Galadriel"},
        {"HalfElven": "Arwen"},
        {"Ent": "Treebeard"}
    ]
    characters.forEach(character => {lotr.set(character)});
    console.log(lotr)
    //Retrieve the value that is hashed in the key "Maiar" and Hobbit
    console.log(lotr.get("Maiar"))
    console.log(lotr.get("Hobbit"));
}

//  Q: What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
//  A: 

//  2. WhatDoesThisDo
const WhatDoesThisDo = function() {
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1, 10);
    map1.set(str2, 20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3, 20);
    map2.set(str4, 10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

//  Q: What is the output of the following code? explain your answer.
//  A: Output is the value of more recent key. //20 then 10

//  3. Demonstrate understanding of Hash Maps


//  4. Remove duplicates
function removeDuplicates(string) {
    let hasheroo = new HashMap;
    hasheroo.MAX_LOAD_RATIO = 0.5;
    hasheroo.SIZE_RATIO = 3;
    newString = [];
    for (let i = 0; i < string.length; i++) {
        try {
            if (hasheroo.get(string[i]) !== string[i]) {
                throw new Error(`New charater with same hash`);
            }
        }
        catch(e) {
            hasheroo.set(string[i], string[i]);
            newString.push(string[i]);
        }
    }
    return newString.join('');
}
//console.log(removeDuplicates('google'));
//console.log(removeDuplicates('google all that you can think of'));

//  5. Any permutation a palindrome
function isPalindrome(string) {
    const input = [];
    const anagrams = (str, prefix = '') => {
        if (string.length === 1) input.push(prefix + string);
        for (let i = 0; i < string.length; i++) {
            anagrams(
                string.substring(0, i) + string.substring(i + 1),
                prefix + string.substring(i, i + 1)
            );
        }
    };
    anagrams(string);

    const isPalim = (string) => {
        const map = new HashMap();
        const center = Math.ceil(string.length / 2);
        for (let i = 0; i < string.lengthl i++) {
            if (i < center) map.set(i, string[i]);
            if (i > center && map.get(string.length - i) !== string[i]) return false;
        }
        return true;
    };

    for (let i = 0; i < input.length; i++) {
        if (isPalim(input[i])) return true;
    }
    return false;
}
//console.log(isPalindrome('acecarr'))
//console.log(isPalindrome('north'))

//  6. Anagram grouping
function anagramGroups(array) {
    const result = [];
    const groups = {};

    let sortedWord;
    for (const word of array) {
        sortedWord = word.split('').sort().join('');
        if (!groups[sortedWord]) groups[sortedWord] = [word];
        else groups[sortedWord].push(word);
    }
    for (const key in groups) result.push(groups[key]);
    return result;
}
//console.log(anagramGroups(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))

//  7. Separate Chaining
function mainSC() {
    const lotr = new HashMapChain();
    lotr.set('Hobbit', 'Bilbo')
	lotr.set('Hobbit', 'Frodo')
	lotr.set('Wizard', 'Gandalf')
	lotr.set('Human', 'Aragorn')
	lotr.set('Elf', 'Legolas')
	lotr.set('Maiar', 'The Necromancer')
	lotr.set('Maiar', 'Sauron')
	lotr.set('RingBearer', 'Gollum')
	lotr.set('LadyOfLight', 'Galadriel')
	lotr.set('HalfElven', 'Arwen')
	lotr.set('Ent', 'Treebeard')

	console.log(lotr)
	display(lotr)
}
mainSC()

function display(separateChainingHashMap) {
    for (const slot of separateChainingHashMap._hashTable) {
        if (!slot) console.log(`empty`);
        else {
            let string = '';

            if (slot.head === null)
                return `head is null`;
            else {
                string += `(head -> ${slot.head.value.value})`;

                let currNode = slot.head.next;
                while (currNode) {
                    string += `-> ${currNode.value.value}`;
                    currNode = currNode.next;
                }
                string += `-> null,`;
                console.log(string);
            }
        }
    }
}