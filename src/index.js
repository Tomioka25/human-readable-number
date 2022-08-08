module.exports = function toReadable (number) {
    let num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    let secondDigits = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    let ten = Math.floor(number / 10);

    if (number < 20){
        return num[number]
    }

    if (Number(String(number)[1]) === 0 && number >= 20  && number < 100) {
        return secondDigits[ten - 2]
    }

    if (number > 20 && number < 100){
        return `${secondDigits[ten - 2]} ${num[String(number)[1]]}`
    }

    if (number >= 100 && number < 1000 && number % 100 === 0 ) {
        return `${(num[Math.floor(number / 100)])} hundred`;
    }

    if (number > 100 && number < 1000 && Number(String(number).slice(1)) < 20){
        return `${(num[Math.floor(number / 100)])} hundred ${num[Number(String(number).slice(1))]}`;
    }

    if (number > 100 && number < 1000 && (Number(String(number)[2]) === 0)){
        return `${(num[Math.floor(number / 100)])} hundred ${secondDigits[Number(String(number)[1]) - 2]}`
} 

    if (number > 100 && number < 1000){
        return `${(num[Math.floor(number / 100)])} hundred ${secondDigits[Number(String(number)[1]) - 2]} ${num[String(number)[2]]}`
    } else {
    return 'Falls';
}
}


// return `${(num[Math.floor(number / 100)])} hundred ${secondDigits[Math.floor(ten / 10) - 1]} ${num[Number(String(number).slice(2))]}`