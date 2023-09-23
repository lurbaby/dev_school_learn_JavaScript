function highAndLow(input_str){

    let min,max;
    let temp = '';

    for (let i = 0;i < input_str.length; i++){

        if (input_str[i] !== ' ' || input_str[i] === '-') {
            temp += input_str[i];
            // перевірка для окремого випадка коли мінусове число в кінці
            if (i !== input_str.length - 1)
                continue;
        }

        // перевіряємо тип данних щоб задати min i max
        if (typeof min == "undefined" && typeof max == "undefined") {
            min = Number(temp);
            max = Number(temp);
            temp = '';
            continue;
        }
        if (Number(temp) > max) {
            max = Number(temp);
        }
        if (Number(temp) < min) {
            min = Number(temp);
        }
        temp = '';
    }
    return `${max} ${min}`;
}
console.log(highAndLow("1 9 3 4 -50"));

