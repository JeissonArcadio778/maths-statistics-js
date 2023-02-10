// Calculate if is odd or even 


const isOddOrEvenArr = ( arr = [] ) => {
    return arr.length % 2 == 0 ? true : false;
}

const calculateMedian = (arr = []) => {

    arr.sort((a,b) => a-b); 
    console.log(arr);
    if (isOddOrEvenArr(arr)) {
        // [1,2,4,5]
        
        const media = (arr[arr.length/2] + arr[(arr.length/2) - 1])/2
        console.log({media});
    } else {
        console.log( arr[Math.trunc(arr.length/2)])

    }

}

calculateMedian([12,2,3,6,2,6])

