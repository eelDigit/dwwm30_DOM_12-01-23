let total = 0;

function addition(x) {
    total += x;
    return total;
}


function soustraction(x) {
    if (total === 0) {
        return (total = x)
    } else {
        total -= x;
        return total;
    }
}


function multiplication(x) {
    if (total === 0) {
        return (total = x)
    } else {
        total *= x;
        return total;

    }
}


function division(x) {
    if (total === 0) {
        return (total = x);
    } else {
        total /= x;
        return total;
    }
}

function reset() {
    return total = 0;
}


