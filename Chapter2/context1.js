// window.onload = function() {
//     var obj = {};
//     var refToObj = obj;
//     obj.s1 = '1';
//     console.log(refToObj.s1 === obj.s1);//true

// }



// window.onload = function() {
//     var obj = ['123', '222', '3333'];
//     var refToObj = obj;
//     obj.push('4444');
//     console.log(refToObj === obj); //true
// }



// window.onload = function() {
//     var obj = ['123', '222', '3333'];
//     var refToObj = obj;
//     obj = ['000', '555'];
//     console.log(refToObj === obj); //false
// }


// window.onload = function() {
//     var obj = '333333';
//     var refToObj = obj;
//     obj += '44444';
//     console.log(refToObj); //333333
//     console.log(obj); //33333344444
// }


// //切换上下文
// window.onload = function() {
//     var obj = { foo: 10 };

//     function setFoo(inputFoo) {
//         this.foo = inputFoo;
//     }

//     obj.setFoo = setFoo;
//     obj.setFoo(20);

//     console.log(obj.foo); //20
// }