// Exercise 1
const people = [
  { id: 1, name: 'Alice', age: 25, city: 'New York' },
  { id: 2, name: 'Bob', age: 30, city: 'San Francisco' },
  { id: 3, name: 'Charlie', age: 35, city: 'Chicago' }
];

function updatePerson(id, person) {
  const index = people.findIndex(p => p.id === id);
  
  if (index !== -1) {
    people[index] = { ...people[index], ...person };
    console.log(`Person with id ${id} has been updated.`);
  } else {
    console.log(`Person with id ${id} not found.`);
  }
}

updatePerson(2, { name: 'Reyver', age: 20 });
console.log(people);

// Exercise 2

function isValidPassword(password) {
  const uppercasePattern = /[A-Z].*[A-Z].*[A-Z]/; 
  const digitPattern = /\d/;                    
  const symbolPattern = /[!_?*]/;               
  return uppercasePattern.test(password) &&
         digitPattern.test(password) &&
         symbolPattern.test(password);
}

console.log(isValidPassword("AbC123*")); 
console.log(isValidPassword("abc123!")); 
console.log(isValidPassword("ABC12!"));  
console.log(isValidPassword("A1_"));     

// Exercise 3

function areValuesUnique(arr) {
  return new Set(arr).size === arr.length;
}

console.log(areValuesUnique([1, 2, 3, 4, 5])); 
console.log(areValuesUnique([1, 2, 3, 4, 5, 3])); 
console.log(areValuesUnique([10, 20, 30])); 
console.log(areValuesUnique([5, 5, 5])); 