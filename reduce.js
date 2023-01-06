// reduce
//iterates, callback function
//reduces to a single value - number, array, object
//1 parameter('acc') - total of all calculations
//2 parameter ('curr') - current iteration/value

const people = [
    { name: 'john', age: 36, job: 'Sales', salary: 200 },
    { name: 'bob', age: 26, job: 'developer', salary: 500 },
    { name: 'peter', age: 56, job: 'designer', salary: 600 }
];

const total = people.reduce(function (acc, curr) {
    acc += curr.salary;
    return acc;

}, 300);

console.log(total);
