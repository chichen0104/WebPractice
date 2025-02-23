
let name = "我又大又肥lib";

function echo(msg) {
    console.log(msg);
}

function add(n1, n2) {
    console.log(n1 + n2);
}

//可傳遞變數
// export default name;
//可傳遞函式
// export default echo;

// 可傳遞物件
export default {
    echo: echo,
    add: add
};
