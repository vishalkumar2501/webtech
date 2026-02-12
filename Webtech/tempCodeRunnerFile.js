let obj1 = {a:1, b:2};
let obj2 = {...obj1};   //shallow copy
obj2.a=10;
console.log(obj1);  //{a:1, b:2}
console.log(obj2);  //{a:10, b:2}
