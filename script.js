const inputNumbers = document.querySelectorAll('.input-number')
const inputStartNumber = document.getElementById('start-number')
const inputEndNumber = document.getElementById('end-number')
const startRangeLabel = document.getElementById('start-range')
const endRangeLabel = document.getElementById('end-range')
const primeNumberResultContainer = document.getElementById('prime-number-result')
let primeNumberResult = []

const isPrimeNumber = (number) => {
    if (number <= 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

window.addEventListener('load', () => {
    const startValue = parseFloat(inputStartNumber.value) || 1
    const endValue = parseFloat(inputEndNumber.value) || 100
    for (let num = startValue; num <= endValue; num++) {
        if (isPrimeNumber(num)) {
            primeNumberResult.push(num)
        }
    }
    primeNumberResult.forEach(number => {
        const item = document.createElement('span')
        item.textContent = number
        primeNumberResultContainer.appendChild(item)
    })
})

inputNumbers.forEach(inputNumber => {
    inputNumber.addEventListener('input', () => {
        primeNumberResult = []
        const startValue = parseFloat(inputStartNumber.value) || 1
        const endValue = parseFloat(inputEndNumber.value) || 100
        const incrementStep = startValue <= endValue ? 1 : -1;
        for (let num = startValue; startValue <= endValue ? num <= endValue : num >= endValue; num += incrementStep) {
            if (isPrimeNumber(num)) {
                primeNumberResult.push(num);
            }
        }
        startRangeLabel.textContent = startValue
        endRangeLabel.textContent = endValue
        primeNumberResultContainer.innerHTML = ''
        primeNumberResult.forEach(number => {
            const item = document.createElement('span')
            item.textContent = number
            primeNumberResultContainer.appendChild(item)
        })
    })
})
