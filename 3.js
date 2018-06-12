function changePossibilities(amount,denominations) {
    const possibleCombinations = new Array(amount + 1).fill(0);

    denominations.forEach((coin) => {
        if (amount % coin === 0) possibleCombinations[coin] += 1;
        for (let nextValue = coin; nextValue <= amount; nextValue++) {
            const remainder = nextValue - coin;
            possibleCombinations[nextValue] += possibleCombinations[remainder]
        }
    });

    return possibleCombinations[amount];
}
