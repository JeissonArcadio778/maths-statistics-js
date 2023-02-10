// Calculate the fashion

const calculateFashion = (arr = []) => {
    //[1,2,1]
    let  objTimes = {}; 

    for (let i = 0; i < arr.length; i++) {
        objTimes[arr[i]] = 0
        
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 10; j++) {    
            if (arr[i] == j) {
                objTimes[arr[i]] += 1 
            }
        }
    }
   

    console.log({objTimes});
}

calculateFashion([1,2,1,3,2,5,5])