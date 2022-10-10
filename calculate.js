class Calcultor {
    
    add(x, y){
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        return x / y;
    }

}

const cal = new Calcultor()

console.log(cal.add(1, 2))
console.log(cal.add(3, 4))
console.log(cal.add(5, 6))

console.log(cal.subtract(2, 1))
console.log(cal.subtract(5, 3))
console.log(cal.subtract(8, 5))

console.log(cal.multiply(1, 2))
console.log(cal.multiply(3, 4))
console.log(cal.multiply(5, 6))

console.log(cal.divide(4, 2))
console.log(cal.divide(10, 2))
console.log(cal.divide(12, 3))

module.exports = Calcultor;