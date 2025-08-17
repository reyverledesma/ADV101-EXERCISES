// Exercise 1

// number 1
    var Myname = "Reyver";
    console.log(Myname);
// number 2
    let age = "20";
// number 3
    const PI = 3.1416; 
    console.log("PI =", PI);
    PI = 3.14;
// number 4
    let age = 50; 
    let isStudent = age < 25; 
    console.log("Age:", age);
    console.log("Is Student?", isStudent);
// number 5
    let person = {
    name: {
        first: "Reyver",
        last: "Ledesma"
    },
    age: 22,
    contact: {
        email: "reyver.ledesma@example.com",
        phone: "999-999-9999"
    },
    isStudent: true
};

    console.log(person.name.first);  
    console.log(person.contact.email);      
// number 6
    let colors = ["purple", "blue", "green", "yellow", "purple"];

    console.log(colors);

// number 1 (test 2)
    let words = ["alpha", "bravo", "charlie", "delta"];
    let transformedWords = [];

    for (let i = 0; i < words.length; i++) {
        let reversedWord = "";
        
    
        for (let j = words[i].length - 1; j >= 0; j--) {
            reversedWord += words[i][j];
        }

        transformedWords.push(reversedWord.toUpperCase());
    }

        console.log(transformedWords);
// number 2 (test 2)
    let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let filteredNumbers = [];
let count = 0;

for (let num of numbers) {
    if (num % 2 === 0 && num > 20) {
        filteredNumbers.push(num);
        count++;
    }
}

console.log(`Found ${count} numbers: [${filteredNumbers.join(", ")}]`);
