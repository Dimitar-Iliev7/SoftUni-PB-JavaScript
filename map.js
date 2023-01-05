//map
//does return new array
//does not change size of original array
//uses values from original array when making new one


const people = [
    { name: 'john', age: 36, job: 'Sales' },
    { name: 'bob', age: 26, job: 'developer' },
    { name: 'peter', age: 56, job: 'designer' }
];

const newPeople = people.map(function (person) {
    return {
        firstName: person.name.toLocaleUpperCase(),
        oldAge: person.age + 20,
    };
});

console.log(newPeople);