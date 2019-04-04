var vscope = 'global';
function fscope(){
    
    var vscope = 'local';
    console.log('함수 안' + vscope);
}

fscope();
console.log('함수 밖' + vscope);

(function() {
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }

    MYAPP.coordinate = {
        'letf' : null,
        'right' : null
    }

    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;

    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }

    console.log(sum());
}())


//b함수 안의 지역 변수가 없을때, b함수를 호출하는 a 함수의 지역 변수를 받는 것이 아니라 전역 변수를 찾게된다.
var i = 5;

function a () {
    var i = 10;
    b();
}

function b() {
    console.log(i);
}

a();