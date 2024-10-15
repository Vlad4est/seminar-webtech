const dogs = [
    {
        name: 'Billy',
        isDachshund: false
    },
    {
        name: 'Bobby',
        isDachshund: true
    },
    {
        name: 'Mark',
        isDachshund: true
    }
];


// const filteredDogs = folosește metoda filter pentru a obține o listă cu toți cățeii din specia dachshund
const filteredDogs = dogs.filter(dog => dog.isDachshund === true);
console.log(dogs);
console.log(filteredDogs);


/* expected output:
[
  {name: 'Bobby', isDachshund: true},
  {name: 'Mark', isDachshund: true}
]
*/