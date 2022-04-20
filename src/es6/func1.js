console.log("기존 ES5 방식의 함수 사용")

function add1(first,second){
    return first + second;
}
var add2 = function(first,second){
    return first+ second;
};

console.log(`함수 add1 실행 : ${add1(10,20)}`);
console.log(`함수 add2 실행 : ${add2(10,20)}`);

console.log(`함수 add1의 타입 : `+ typeof add1);
console.log(`함수 add2의 타입 : `+ typeof add2);