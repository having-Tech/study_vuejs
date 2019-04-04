function sum() {
    var i, _sum = 0;
    for(i = 0; i <arguments.length; i++){
        console.log(i+ ' : ' + arguments[i]);
        _sum += arguments[i];
    }
    return _sum;
}

console.log('result : '+ sum(1,2,3,4) );

function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}

function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}

function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}

zero();
one('val1', 'val2');
two('val1');