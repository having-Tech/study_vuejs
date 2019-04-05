//전역객체는 특수한 객체다. 모든 객체는 이 전역객체의 프로퍼티다.

function func(){
    console.log('Hello?');
}

func();
window.func();
//window.func(), func() 모두 실행이된다. 모든 전역변수와 함수는 window 객체의 프로퍼티다. 
//객체를 명시하지 않으면 암시적으로 window의 프로퍼티로 간주된다.

var o = {'func' : function() {
    console.log('Hello?');
}}

o.func();
window.o.func();