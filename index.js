//1. Counting Sheep
const numOfSheep = function(num) {
    if (num.length === 1) {
        return 'All sheep jumped over the fence'
    }

    let counter = num - 1;
    console.log(`${num}: Another sheep jumped over the fence`)
    return numOfSheep(counter);
}

//2. Power Calculator
const powerCalculator = function(base, power) {
    if (power.value < 0) {
        return ('Power must be >= 0');
    }

    if (power.value === 0) {
        return 1;
    }if (power.value === 1) {
        return base;
    }

    if (power.value > 1) {
        return base * powerCalculator(base, power - 1);
    }
}

//3. Reverse String
const reverseString = function(string) {
    if (string.length <= 1) {
        return string[0]
    }

    return string[string.length - 1] + reverseString(string.slice(0, -1));
}

//4. nth Triangle Number
const countTriangles = function(number) {
    if (number === 1) {
        return number
    }

    return number + countTriangles(number - 1);
}

//5. String Splitter
const stringSplitter = function(string, separator) {
    if (!separator) {
        return [string];
    }

    if (string.indexOf(separator) === -1) {
        return [string];
    }

    return [string.slice(0, string.indexOf(separator)), ...splitter(string.slice(string.indexOf(separator) + 1), separator)]
}

//6. Fibonacci
const fibonacci = function(number) {
    if (place <= 1) {
        return number
    }
    
    return fibonacci(number - 1) + fibonacci(number - 2)
}

//7. Factorial
const factorial = function(number) {
    if (number === 1) {
        return number
    }

    return number * factorial(number - 1);
}

//8. Find a way out of the maze
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const mazePath = function(maze) {
    const completed = [],
    const mazeRun = function(curtMaze, curtLocation, letters = '') {
        //Check if you can go right
        if (curtLocation[1] < curtMaze[0].length - 1) {
            if (curtMaze[curtLocation[0]][curtLocation[1] + 1] === 'e') {
                const newLetters = letters + 'R'
                completed.push(newLetters)
                //console.log(newLetters, 'done')
                return newLetters
            }

            if (curtMaze[curtLocation[0]][curtLocation[1] + 1] === ' ') {
                const newLetters = letters + 'X'
                //console.log(newLetters)
                //console.log(curtMaze)
                mazeRun([...curtMaze], [curtLocation[0], curtLocation[1] + 1], newLetters)
            }
        }

        //Check if you can go down
        if (curtLocation[0] < curtMaze.length - 1) {
            if (curtMaze[curtLocation[0] + 1][curtLocation[1]] === 'e') {
                letters = letters + 'D'
                //console.log(letters, 'done')
                completed.push(letters)
                return letters
            }
            if (curtMaze[curtLocation[0] + 1][curtLocation[1]] === ' ') {
                const newLetters = letters + 'D'
                curtMaze[curtLocation[0] + 1][curtLocation[1]] = 'X'
                //console.log(newLetters)
                //console.log(curtMaze)
                mazeRun([...curtMaze], [curtLocation[0] + 1, curtLocation[1]], newLetters)
            }
        }

        //Check if you can go left
        if (curtLocation[0] > 0) {
            if (curtMaze[curtLocation[0]][curtLocation[1]-1] === 'e') {
                const newLetters = letters + 'L'
                //console.log(newLetters, 'done')
                completed.push(newLetters)
                return newLetters
            }
            if (curtMaze[curtLocation[0]][curtLocation[1] - 1] === ' ') {
                const newLetters = letters + 'L'
                curtMaze[curtLocation[0]][curtLocation[1] - 1] = 'X'
                //console.log(newLetters)
                //console.log(curtMaze)
                mazeRun([...curtMaze], [curtLocation[0], curtLocation[1] - 1], newLetters)
            }
        }

        //Check if you can go up
        if (curtLocation[0] > 0) {
            if (curtMaze[curtLocation[0] - 1][curtLocation[1]] === 'e') {
                const newLetters = letters + 'U'
                //console.log(newLetters, 'done')
                completed.push(newLetters)
                return newLetters
            }
            if (curtMaze[curtLocation[0] - 1][curtLocation[1]] === ' ') {
                const newLetters = 'U'
                curtMaze[curtLocation[0] - 1][curtLocation[1]] = 'X'
                //console.log(newLetters)
                //console.log(curtMaze)
                mazeRun([...curtMaze], [curtLocation[0] - 1, curtLocation[1]], newLetters)
            }
        }
    }

    var i = 0
    while (i < maze.length) {
        console.log(maze[i])
        i++
    }
    mazeRun([...maze], [0, 0])
    console.log(completed)
    //return a solution
    return completed[0]
}

//9. Find ALL ways out of the maze
const mazeAllPaths = function(maze) {
    const completed = [],
    const mazeRun = function(curtMaze, curtLocation, letters = '') {
        //Check if you can go right
        if (curtLocation[1] < curtMaze[0].length - 1) {
            if (curtMaze[curtLocation[0]][curtLocation[1] + 1] === 'e') {
                const newLetters = letters + 'R'
                completed.push(newLetters)
                //console.log(newLetters, 'done')
                return newLetters
            }
            if (curtMaze[curtLocation[0]][curtLocation[1] + 1] === ' ') {
                const newLetters = letters + 'R'
                curtMaze[curtLocation[0]][curtLocation[1] + 1] = 'X'
                //console.log(newLetters)
                //console.log(curtMaze)
                mazeRun([...curtMaze], [curtLocation[0], curtLocation[1] + 1], newLetters)
            }
        }
        //Check if you can go down
        if (curtLocation[0] < curtMaze.length - 1) {
            if (curtMaze[curtLocation[0] + 1][curtLocation[1]] === 'e') {
                letters = letters + 'D'
                //console.log(letters, 'done')
                completed.push(letters)
                return letters
            }
            if (curtMaze[curtLocation[0] + 1][curtLocation[1]] === ' ') {
                const newLetters = letters + 'D'
                curtMaze[curtLocation[0] + 1][curtLocation[1]] = 'X'
                //console.log(newLetters)
                //console.log(curtMaze)
                mazeRun([...curtMaze], curtLocation[0] + 1, curtLocation[1], newLetters)
            }
        }

        //Check if you can go left
        if (curtLocation[0] > 0) {
            if (curtMaze[curtLocation[0]][curtLocation[1] - 1] === 'e') {
                const newLetters = letters + 'L'
                //console.log(newLetters, 'done')
                completed.push(newLetters)
                return newLetters
            }
            if (curtMaze[curtLocation[0]][curtLocation[1] - 1] === ' ') {
                const newLetters = letters + 'L'
                curtMaze[curtLocation[0]][curtLocation[1] + 1] = 'X'
                //console.log(newLetters)
                //console.log(curtMaze)
                mazeRun([...curtMaze], [curtLocation[0], curtLocation[1] - 1], newLetters)
            }
        }
        
        //Check if you can go up
        if (curtLocation[0] > 0) {
            if (curtMaze[curtLocation[0] - 1][curtLocation[1]] === 'e') {
                const newLetters = letters + 'U'
                //console.log(newLetters, 'done')
                completed.push(newLetters)
                return newLetters
            }
            if (curtMaze[curtLocation[0] - 1][curtLocation[1]] === ' ') {
                const newLetters = letters + 'U'
                curtMaze[curtLocation[0] - 1][curtLocation[1]] = 'X'
                //console.log(newLetters)
                //console.log(curtMaze)
                mazeRun([...curtMaze], [curtLocation[0] - 1, curtLocation[1]], newLetters)
            }
        }
    }

    var i = 0
    while (i < maze.length) {
        console.log(maze[i])
        i++
    }

    mazeRun([...maze], [0, 0])
    //console.log(completed)
    //return all solution
    return completed
}

//10. Anagrams
const anagrams = function(word) {
    //Base case
    if (word.length < 2) {
        return word
    }
    //General case
    let results = []
    for (i = 0; i < words.length; i++) {
        var firstCharacter = word[1];
        var otherCharacter = word.substring(0, i) + word.substring(i + 1);
        var otherPermutations = anagrams(otherCharacter);

        for (var j = 0; j < otherPermutations.length; j++) {
            results.push(firstCharacter + otherPermutations[j]);
        }
    }
    return results;
}

//11. Organization Chart
const orgChart =[
    {emp: 'Zuckerberg', boss: null},
    {emp: 'Schroepfer', boss: 'Zuckerberg'},
    {emp: 'Schrage', boss: 'Zuckerberg'},
    {emp: 'Sandberg', boss: 'Zuckerberg'},
    {emp: 'Bosworth', boss:'Schroepfer' },
    {emp: 'Zhao', boss:'Schroepfer' },
    {emp: 'Steve', boss:'Bosworth' },
    {emp: 'Kyle', boss:'Bosworth' },
    {emp: 'Andra', boss:'Bosworth' },
    {emp: 'Richie', boss: 'Zhao'},
    {emp: 'Sofia', boss: 'Zhao'},
    {emp: 'Jen', boss: 'Zhao'},
    {emp: 'VanDyck', boss:'Schrage' },
    {emp: 'Swain', boss:'Schrage' },
    {emp: 'Sabrina', boss:'VanDyck' },
    {emp: 'Michelle', boss:'VanDyck' },
    {emp: 'Josh', boss:'VanDyck' },
    {emp: 'Blanch', boss:'Swain' },
    {emp: 'Tom', boss:'Swain' },
    {emp: 'Joe', boss:'Swain' },
    {emp: 'Goler', boss:'Sandberg' },
    {emp: 'Hernandez', boss:'Sandberg' },
    {emp: 'Moissinac', boss:'Sandberg' },
    {emp: 'Kelley', boss:'Sandberg' },
    {emp: 'Eddie', boss:'Goler' },
    {emp: 'Julie', boss:'Goler' },
    {emp: 'Annie', boss:'Goler' },
    {emp: 'Rowi', boss:'Hernandez'},
    {emp: 'Inga', boss:'Hernandez'},
    {emp: 'Morgan', boss:'Hernandez'},
    {emp: 'Amy', boss:'Moissinac'},
    {emp: 'Chuck', boss:'Moissinac'},
    {emp: 'Vinni', boss:'Moissinac'},
    {emp: 'Eric', boss:'Kelley'},
    {emp: 'Ana', boss:'Kelley'},
    {emp: 'Wes', boss:'Kelley'},
  ];

const structure = function (array, boss) {
    let result = [];
    //Base case
    if (array.length <= 1) {
        result = array.map(i => {
            i.emp
        })
    }
    //General case
    array
        .filter(i => i.boss === boss)
        .forEach(i => result[i.emp] = structure(array, i.emp))
    return result
}

console.log(structure(orgChart, null));

//12. Binary Representation
const binary = function(number) {
    //Base case
    if (number === 0) {
        return number
    }
    //General case
    return number.toString(2)
}

//console.log(binary(3));