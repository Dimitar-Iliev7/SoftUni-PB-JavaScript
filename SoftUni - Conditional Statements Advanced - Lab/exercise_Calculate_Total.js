const gas = [20, 40, 100, 50];
const food = [10, 40, 50];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal,
});