function numInRange(input) {
    let userNumber = Number(input[0]);

    if (userNumber >= -100 && userNumber <= 100 && userNumber !== 0) {
        console.log("Yes");
    } else{
        console.log("No");
    }   
}

numInRange([0]);