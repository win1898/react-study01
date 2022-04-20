console.log("기존 ES6 방식의 함수 사용")

var add1 = (first,second)=>{
    return first+second;
};

var add2=(first,second)=> first+second;

console.log(`함수 add1 실행 : ${add1(10,20)}`);
console.log(`함수 add2 실행 : ${add2(10,20)}`);

console.log(`함수 add1의 타입 : `+ typeof add1);
console.log(`함수 add2의 타입 : `+ typeof add2);

var addAndMuti=(first,second) => ({
   add: first + second,
   multi: first * second,
});

var asd = function(num){
    return function(value){
        return num+ value;
    };
};

console.log(asd(10));

var add = (num)=>(value)=>num+value;
asd(10);