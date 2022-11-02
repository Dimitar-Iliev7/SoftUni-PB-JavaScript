function personalTitle(input) {
    let age = Number(input.shift(0));
    let gender = input.shift(1);
    if (gender == "f") {
        if (age >= 16) {
            console.log("Ms.")
        }
        else{
            console.log("Miss");
        }
    }
    else if(gender == "m"){
        
         if (age >= 16) {
             console.log("Mr.")
        }else{
             console.log("Master");
        }
            
    }
}

personalTitle(["4", "m"]);