var person = {} // 변수와 함수를 그룹핑한 그릇을 객체
person.name='egoing';   //연관된 변수
person.introduce= function(){   //연관된 함수
    return 'My name is ' + this.name;
}

console.log(person.introduce());

var people = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is ' + this.name;
    }
}

console.log(people.introduce());

// 객체를 만드는 방법은 두가지 존재한다.

