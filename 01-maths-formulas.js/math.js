console.group('Square')

const calculateSquare = (side) => {
    return {
        perimetry : side * 4,
        area: side * side
    }
}


console.groupEnd('Square')


console.group('Triangle');

const calculateTriangle = (side1, side2, base) => {
    
    let h = Math.sqrt(( Math.pow(side1,2) ) - ( Math.pow(side1,2) ) / 4)
    
    if (side1 == base) {

        return {
             type: "Equilatero", 
             perimetry : side1 * 3,
             area: ( (Math.pow(side1,2) * Math.sqrt(3)) )/4
        }

    }else if (side1 != base && side2 != base && side1 != side2) {
        
        const s = (side1 + side2 +  base) / 2; 

        return {
            type: "Escaleno",
            perimetry : side1 + side2 + base,
            area: Math.sqrt(s * (s - side1) * (s - side2) * (s - base))
        }

    } else {

        return {
            type: "Rectangulo",
            perimetry : side1 * 2 + base,
            area: (base * h) / 2
        }
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