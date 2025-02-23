
let add = function (n1, n2) {
    console.log(n1 + n2);
};
let multiply = function (n1, n2) {
    console.log(n1 * n2);
};

let math = {
    add: add,
    multiply: multiply
}


//可讓引入方決定要用math或是引入個別
export default math;
export { add, multiply };