var foo = 'bar1';
console.log(foo);

if(1){
    var foo = 'bar2';
    console.log(foo);
}

console.log(foo);

let foo1 = 'bar1';
console.log(foo1);

if(1){
    let foo1 = 'bar2';
    console.log(foo1);
}

console.log(foo1);

//var와let의 차이점 var는 if문 안에서든 어디서나 입력받는 즉시 값이 변경되지만 let은 변경되지 않는다.

let foo2 = 'hello';
let boo = 'world';
let result = foo2 + ' '+ boo;

let result1 = `${foo2} ${boo}`;
console.log(result);
console.log(result1);

let foo3 = {
    a: 1,   //속성  key : value형태로 구성
    b: 2,   //속성
    c: () => 10 //메소드
}
var boo1 = JSON.stringify(foo3)

console.log(JSOn);

let foo4 = [1,2,3,4]

console.log(JSON.stringify(foo4));

let l = [10, 20, 30, 40]

for(index in l){
    console.log(index, l[index])
}

let j = { foo :1, boo :2}
for(key in j){
    console.log(key,j[key])
}

let too = []

console.log(too.length)

too.push(1)
too.push("1")

console.log(too, too[0], too[1])
console.log(too.length)
console.log(too.pop())
console.log(too.length)
console.log(too.pop())
console.log(too.length)

let yoo = [10,20,30,40,50]
console.log(yoo.indexOf(30))
console.log(yoo.indexOf(100))

let qoo = [10,20,30,40,50]

//자체적으로 반복문 사용
qoo.forEach(function (item, index, array){
    console.log(item, index);
});

let woo = [10,20,30,40,50]

let newWoo = woo.filter(function ( item, index, array){
    if(item%10 == 0){
        return true
    }
});
console.log(newWoo)

let eoo = {"a" : 10, "b": 3}
console.log(eoo, eoo["a"], eoo["b"])

eoo["c"] = 30
console.log(eoo)

console.log(eoo.hasOwnProperty('a'), eoo.hasOwnProperty('asd'))


class Square {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea()
    }

    calcArea () {
        return this.height*this.width;
    }
}

var noo1 = new Square(1,2)
var noo2 = new Square(11,2)

console.log(noo1.area)
console.log(noo2.area)

