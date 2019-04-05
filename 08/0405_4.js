//생성자는 객체를 만드는 역할을 하는 함수
//자바스크립트에서 함수는 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 창조자
function Person() {}
var p = new Person();
p.name = 'egoing';
p.introduce = function() {
    return 'My name is ' + this.name;
}

console.log(p.introduce());

//함수를 호출 시 new 를 붙이면 새로운 객체를 만든 후에 이를 리턴한다. 
function People() {}
var p1 = new People();
p1.name = 'egoing';
p1.introduce = function() {
    return 'My name is ' + this.name;
}

console.log(p.introduce())

var p2 = new People();
p2.name = 'leezche';
p2.introduce = function(){
    return 'My name is ' + this.name;
}

console.log(p2.introduce())

//생성자 내에서 이 객체의 프로퍼티를 정의하고 있다. 이 작업을 초기화 이를 통해서 코드의 재사용성이 높아졌다.
//생성자 함수는 일반함수와 구분하기 위해서 첫글자를 대문자로 표시한다.
function Someone(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is ' + this.name;
    }
}

var p1 = new Someone('egoing');
console.log(p1.introduce());

var p2 = new Someone('leezche');
console.log(p2.introduce());


