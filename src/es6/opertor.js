console.log('전개 연산자 사용하기');

console.log('\n--------- 기존 ES5 형식으로 사용--------------\n');
let es5Array1=['one','two'];
let es5Array2=['three','four'];
console.log('es5Array1  : '+es5Array1)
console.log('es5Array2 : '+es5Array2)

var es5Combined =[es5Array1[0],es5Array1[1],es5Array2[0],es5Array2[1]]
console.log('es5Combined : '+es5Combined)
var es5Combined =es5Array1.concat(es5Array2)
console.log('es5Combined : '+es5Combined)
var es5Combined =[].concat(es5Array1,es5Array2)
console.log('es5Combined : '+es5Combined)

var es5First = es5Array1[0]
var es5Second = es5Array1[1]
var es5Three = es5Array1[2] ||'empty'
console.log('es5First : '+es5First)
console.log('es5Second : '+es5Second)
console.log('es5Three : '+es5Three)

console.log('\n--------- 기존 ES6 형식으로 사용--------------\n');

var es6Array1=['one','two',3,4,5,6,7,8,9]
var es6Array2=['three','four']
console.log('es6Array1 : '+es6Array1)
console.log('es6Array2 : '+es6Array2)

const es6Combined =[...es6Array1,...es6Array2]
console.log('es6Combined : '+es6Combined)

const [es6First,es6Second,se6Three = 'empty',...others]=es6Array1
console.log('es6First : '+es6First)
console.log('es6Second : '+es6Second)
console.log('se6Three : '+se6Three)
console.log('others : '+others)