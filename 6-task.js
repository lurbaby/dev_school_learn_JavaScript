function q_sort(input_arr){

    if (input_arr.length <= 1)
        return input_arr;

    let current_elem = input_arr[0];

    let up = [];
    let center = [];
    let down = [];

    for (let i = 0; i < input_arr.length; i++){
        if (input_arr[i] > current_elem)
            up.push(input_arr[i]);
        else if (input_arr[i] === current_elem)
            center.push(input_arr[i]);
        else
            down.push(input_arr[i]);
    }
    up = q_sort(up);
    // center = q_sort(center);
    down = q_sort(down);

    let res_arr = down.concat(center,up);
    return res_arr;
}
function execute_all_to_array(integer){
    let arr = [];
    let in_str = String(integer);

    for (let i = 0; i < in_str.length ; i++){
        arr.push(Number(in_str[i]));
    }
    return arr;
}

a = parseInt(q_sort(execute_all_to_array(123456789)).reverse().join(''));
console.log(a);












