console.log("기존 ES5에서 문자열 사용")
var string1="안녕하세요"
var string2 ="반갑습니다."
var greeting = string1+' '+string2
var product = {name : "도서",price : "4200원"}
var message="제품 {"+product.name+"의 가격은"+product.price+"입니다"
var value1=1
var value2=2
var boolValue=false
var operator1="곱셈값은"+(value1*value2)+'입니다'
var operator2="블리언값은 "+(boolValue ? '참':'거짓')+'입니다'

console.log(greeting)
console.log(product)
console.log(message)
console.log(operator1)
console.log(operator2)
console.log('------------------------------')

var tmpString1="안녕하세요";
var tmpString2 ="반갑습니다.";
var tmpGreeting = `${tmpString1} ${tmpString2}`;
var tmpProduct =  {name : "도서",price : "4200원"};
var tmpMessage = `제품 ${tmpProduct.name}의 가격은 ${tmpProduct.price} : "4200원"}`;
var tmpValue1=1;
var tmpValue2=2;
var tmpBoolValue=false;
var tmpOperator1=`곱셈값은 ${tmpValue1} * ${tmpValue2}`;
var tmpOperator2=`${tmpBoolValue ? '참':'거짓'}`;

console.log(tmpGreeting)
console.log(tmpMessage)
console.log(tmpOperator1)
console.log(tmpOperator2)
//console.log(tmpMultiLine)
console.log('------------------------------')