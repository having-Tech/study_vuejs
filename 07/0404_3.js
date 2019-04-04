//클로저(closure)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다. 클로저는 자바스크립트를 이용한 고난이도의 테크닉을 구사하는데 필수적인 개념으로 활용된다. 
//클로저란 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미한다.

function outter (){
    function inner() {
        var title = 'coding everybody';
        console.log(title);
    }
    inner();
}
outter();

function outter1(){
    var title = 'coding everybody';
    function inner1(){
        console.log(title);
    }
    inner1();
}
outter1();

function outter2(){
    var title = 'coding everybody';
    return function(){
        console.log(title);
    }
}
inner2 = outter2();
inner2();


function factory_movie(title){
    return {
        get_title : function(){
            return title;
        },
        set_title: function (_title){
            title = _title;
        }
    }
}

ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title('공각기동대');
console.log(ghost.get_title());
console.log(matrix.get_title());

var arr = [];
for(var i = 0; i <5; i ++){
    arr[i] = function() {
        return i;
    }
}

for (var index in arr){
    console.log(arr[index]());
}