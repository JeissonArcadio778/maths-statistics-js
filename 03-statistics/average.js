

const averageArray = ( arr = []) => {
    
    // let sum = 0; 
    // for (let i = 0; i < arr.length; i++) { 
    //     sum += arr[i];
    // }; 

    let sumArr = arr.reduce((initial, current) => {
        return initial + current; 
    })

    return sumArr / arr.length; 
}

console.log(averageArray([1,2,3,4,5]));














