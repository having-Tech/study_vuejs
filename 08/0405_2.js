//this는 함수 내에서 함수 호출 맥락을 의미한다. 

function func(){
    if(window === this) {
        console.log("window === this")
    }    
}

func();
//메소드를 호출하면 그 메소드가 소속되어 있는 객체를 this로 접근할 수 있다.
var o = {
    func : function(){
        if (o === this){
            console.log("o === window");
        }
    }
}
o.func();

//함수 호출시와 new를 이용해서 생성자를 호출했을 때의 차이를 보여준다.
var funcThis = null;

function Func() {
    funcThis = this;
}

var o1 = Func();
if(funcThis ===window){
    console.log('window');
}

var o2 = new Func();
if(funcThis === o2){
    console.log('o2');
}