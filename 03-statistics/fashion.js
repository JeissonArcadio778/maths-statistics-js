// Calculate the fashion

/*objTimes {

    "1" : 2,
    "2" : 5

}

*/ 

const countElementsArr = (arr = []) => {
    //[1,2,1]
    let  objTimes = {}; 

    //Get elements into keys object
    for (let i = 0; i < arr.length; i++) {
        objTimes[arr[i]] = 0
        
    }

    // positions of arr
    for (let i = 0; i < arr.length; i++) {
        
        // console.log(arr[i]); 

        //Compare and sum one if is a repped number
        for (let j = 0; j < 10; j++) {    
            
            if (arr[i] == j) {
                objTimes[arr[i]] += 1; 
                // console.log({objTimes});

            }
        }
    }

    return objTimes;  
}

const resultCountElements = countElementsArr([1,2,1,3,2,5,5]); 

const maxValueObj = (obj = {}) => {
    return Math.max(...obj.map(o => o[number]))
}



console.log(resultCountElements);



