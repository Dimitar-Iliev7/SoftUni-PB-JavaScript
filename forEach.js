//Powerful Array Methods
//forEach, map, filter, find, reduce
//Iterate over array - no for loop required
//Accept CALLBACK functions as an argument, calls Callback
//against each item in the array. reference item in the Callback Parameter.



// forEach
// does not return new array

const people = [
    { name: 'john', age: 36, job: 'Sales' },
    { name: 'bob', age: 26, job: 'developer' },
    { name: 'peter', age: 56, job: 'designer' }
];

function showPerson(person) {
    console.log(person.job.toUpperCase());
}

people.forEach(showPerson);