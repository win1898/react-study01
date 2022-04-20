console.log("\n----es6형식-----\n")

var list = [0,1];
var [item1, item2, item3 = -1] = list

console.log('변수 item1 : '+item1);
console.log('변수 item2 : '+item2);
console.log('변수 item3 : '+item3);

[item2, item1] = [item1,item2];

console.log('변경된 item1 : '+item1);
console.log('변경된 item2 : '+item2);

var obj = {
    key1 :'one',
    key2:'two',
};

console.log('원본 obj.key1 : '+obj.key1);
console.log('원본 obj.key2 : '+obj.key2);

var {key1: newKey1, key2, key3 = 'default key3 value'} = obj

console.log('변수 obj.key1 : '+obj.key1);
console.log('변수 obj.key2 : '+obj.key2);
console.log('변수 obj.key3 : '+obj.key3);



