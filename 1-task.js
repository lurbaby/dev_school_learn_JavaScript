function get_sum(num){
    let sum = 0;

    if (num < 0)
        return 0

    for (let i = 0; i < num; i++){
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    }
    return sum;
}
get_sum(10);

