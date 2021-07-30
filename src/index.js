const FROM_ZERO_TO_NINETEEN = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const FROM_TWENTY_TO_NINETY = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


module.exports = function toReadable(number) {
    if (number == null || isNaN(number)) {
        return '';
    }

    const definitelyNumber = Number(number);

    const n2 = definitelyNumber % 100;
    const n3 = (definitelyNumber - n2) / 100;

    let result = '';

    if (n3 != 0) {
        result = `${FROM_ZERO_TO_NINETEEN[n3]} hundred`;
        if (n2 != 0) {
            result += ` ${getValueFromZeroToNinetyNine(n2)}`;
        }
    } else {
        result += getValueFromZeroToNinetyNine(n2);
    }

    return result;
}

function getValueFromZeroToNinetyNine(number) {
    if (number < 20) {
        return FROM_ZERO_TO_NINETEEN[number];
    } else {
        const n1 = number % 10;
        const n2 = (number - n1) / 10;

        let result = FROM_TWENTY_TO_NINETY[n2 - 2];
        if (n1 != 0) {
            result += ` ${FROM_ZERO_TO_NINETEEN[n1]}`;
        }

        return result;
    }
}