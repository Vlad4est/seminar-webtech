const add = (x, y) => {
    return x + y;
}

const printMe = (add, x, y) => {
    console.log(add(x, y));
}

printMe(add, 1, 2);