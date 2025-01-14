function findDivisors(n) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }
    }
    return divisors.sort((a, b) => a - b);
}

function canPackGroups(groups, busSize) {
    let currentSum = 0;
    for (let i = 0; i < groups.length; i++) {
        currentSum += groups[i];
        if (currentSum > busSize) return false;  
        if (currentSum === busSize) currentSum = 0;  
    }
    return currentSum === 0;  
}

function summingSeries(groups) {
    const totalPeople = groups.reduce((sum, group) => sum + group, 0);
    const divisors = findDivisors(totalPeople);
    
    const validBusSizes = [];
    for (let busSize of divisors) {
        if (canPackGroups(groups, busSize)) {
            validBusSizes.push(busSize);
        }
    }

    return validBusSizes;
}


const input = `8
1 2 1 1 1 2 1 3`;

const lines = input.trim().split('\n');
const n = parseInt(lines[0]);
const groups = lines[1].split(' ').map(Number);

const result = summingSeries(groups);

console.log(result.join(' '));
