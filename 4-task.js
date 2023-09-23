function is_prime(number){

    if (number <= 1)
        return false;

    let count = 0;

    for (let i = 0; i < number; i++){

        if (number % i === 0)
            count++;
        if (count > 2)
            return false;
    }
    return true;
}

is_prime(1)