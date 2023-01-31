console.group('Square')

const calculateSquare = (side) => {
    return {
        perimetry : side * 4,
        area: side * side
    }
}


console.groupEnd('Square')


console.group('Triangle');

const calculateTriangle = (side, hight, base) => {
    
    //TODO: challenges...

    return {
        perimetry : side * 3,
        area: (base * hight) / 2
    }
}

console.groupEnd('Triangle')


console.group('Circle')

const calculateCircle = (ratio = 2) => {
    return {
        perimetry: 2 * Math.PI * ratio,
        area: Math.PI * (Math.pow(ratio,2))

    }
}

console.groupEnd('Circle')