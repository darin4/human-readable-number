module.exports = function toReadable (number) {
    const zeroToNine = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ];

    const tenToNineteen = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const twentyToNinety = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty','sixty','seventy', 'eighty', 'ninety'
    ];

    const hundreds = [
        '', 'one hundred', 'two hundred','three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'
    ];

    if (number < 10) {
        return zeroToNine[number];
    }

    else if (number < 20) {
        number = number - 10;
        return tenToNineteen[number];
    }

    else if (number < 100) {
        const numberTwentyToNinety = Math.floor(number / 10);
        return twentyToNinety[Math.floor(numberTwentyToNinety)] + (number % 10 === 0 ? '' : ' ' + zeroToNine[number % 10]);
    }

    else if(number < 1000) {
        const numberHundreds = Math.floor(number / 100);
        return hundreds[numberHundreds] + (number % 100 === 0 ? '' : ' ' + toReadable(number % 100));
    }
    else return "Number is out of test data (0-999)";




  
}
