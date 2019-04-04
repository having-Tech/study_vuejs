//함수가 값이 될 수 있다.
function cal (func, num){
    return func(num)
}

function increase(num){
    return num + 1
}

function decrease(num){
    return num - 1
}

console.log(cal(increase, 1));
console.log(cal(decrease, 1));

//함수가 함수의 리턴 값으로도 사용할 수 있다.
function cal1(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }

    return funcs[mode];
}

console.log(cal1('plus')(2,1));
console.log(cal1('minus')(2,1));


var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
console.log(input);