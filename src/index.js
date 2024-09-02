module.exports = function reverse (n) {

    n = Math.abs(n);

    while (n % 10 === 0 && n !== 0) {
        n = n / 10;
    };

    const nArray = n.toString().split('');
    const reversedArray = nArray.reverse();
    const reversedString = reversedArray.join('').toString();

    return Number(reversedString);
}
