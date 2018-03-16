//代码清单2-1
// window.onload = function() {
//     var obj = {};
//     var refToObj = obj;
//     obj.oneProperty = true;
//     console.log(obj.oneProperty === refToObj.oneProperty);
//     refToObj.twoProperty = 1;
//     console.log(obj.twoProperty === refToObj.twoProperty);
//这种修改在两个变量上都能生效，因为这两个变量都是引用
//此时obj和refToObj指向同一个对象，只是同一个对象的属性发生了变化
// }

// //代码清单2-2
// window.onload = function(){
//     var items =['one','two','three'];
//     var itemsref = items;
//     items.push('four');
//     console.log(items.length==itemsref.length);//true
//     //数组本质上，值是作为数组对象的属性来存储的，所以items和itemsref的长度相同
// }

//代码清单2-3
// window.onload = function() {
//         var items = ['1', '2', '3']; //此时items指向数组1
//         var itemsref = items; //此时itemsref也指向数组1
//         items = ['1', '2']; //此时items指向了一个新数组，但itemsref仍然指向数组1
//         //此时items和itemsref指向了不同的对象，引用只能指向指称对象，不能指向另一个引用
//         //所以items != itemsref
//     }

//代码清单2-4
// window.onload = function() {
//     //以下情况不是引用的问题，因变量中的是原始值，不能作为指称目标
//     // var item = 12;
//     // var itemref = item;
//     // item += 1;
//     // console.log(item);  //13
//     // console.log(itemref);  //12

//     // var item = 'test';
//     // var itemref = item;
//     // item += 'ing';
//     // console.log(item);  //testing
//     // console.log(itemref);  //test


//     // var item = 'test';
//     // var itemref = item;
//     // item += 'ing';
//     // console.log(item);  //testing
//     // console.log(itemref);  //test

//     //item中是原始值,item不是指称目标，所以包含原始值的变量item不是引用（区别引用）
//     //    
// }

//代码清单2-7
// window.onload = function() {
//     function setFoo(fooinput) {
//         this.foo = fooinput;
//     }
//     var foo = 5;
//     console.log(foo); //5
//     var obj = {
//         foo: 10
//     }
//     console.log(obj.foo); //10
//     setFoo(15);
//     console.log(foo); //5
//     obj.setFoo = setFoo;
//     obj.setFoo(20);
//     console.log(obj.foo); //20
// }

//代码清单2-8
// function changeColor(color) {
//     this.style.backgroundColor = color;
//     this.style.width = "200px";
//     this.style.height = "200px";
// };
// window.onload = function() {
//     // var main = document.getElementsByTagName('p')[0];
//     var main = document.createElement('div');
//     var body = document.getElementsByTagName('body')[0];

//     changeColor.call(main, 'red');
//     body.appendChild(main);
//     console.log(main.style.backgroundColor);
// }

//代码清单2-10 简单的闭包使用
// function addGenerator(num) {
//     return function(toAdd) {
//         return num + toAdd;
//     }
// }
// var addFive = addGenerator(5);
// var res = addFive(4);
// print(res);


//代码清单2-11 使用匿名函数隐藏全局变量
// (function() {
//     var msg = "hello word!";
//     window.onload = function() {
//         console.log(msg);
//     }
// })();

//代码清单2-12 使用匿名函数来生成创建多个闭包函数所需的作用域
// window.onload = function() {
//     var obj = document.getElementById('main');
//     var items = ['click', 'keypress'];
//     for (var i = 0; i < items.length; i++) {
//         (function() {
//             var item = items[i];
//             obj['on' + item] = function() {
//                 console.log('--------' + item);
//             };
//         })();
//     }
// }

//代码清单2-13 函数重载
// function sendMsg(msg, obj) {
//     if (arguments.length === 2) {
//         obj.log(msg);
//     } else {
//         console.log(msg);
//     }
// }

// window.onload = function() {
//     sendMsg('eeeeeeeeee');
//     sendMsg('tttttttttt', console);
// }

//代码清单2-14 使用原型将arguments转变为数组
// function aFunction() {
//     var argsArray = Array.prototype.slice.call(arguments, 0); //slice(start,end) 获取从start位置到end位置数组元素，返回一个数组
//     console.log(argsArray.pop()); //输出数组最后一个元素

// }
// window.onload = function() {
//     aFunction(5, 55, 555, 6666);
// }

//代码清单2-15 显示默认参数错误消息
// function displayError(msg) {
//     if (typeof msg === 'undefined') {
//         msg = "an error occurred";
//     }
//     console.log(msg);
// }
// window.onload = function() {
//     displayError('fffffffffffff');
// };

//代码清单2-17 使用instanceof
// var today = new Date();
// var re = /[a-z]+/i;
// // //此时用typeof 不好分辨具体类型
// // console.log('today typeof:' + typeof today); //object
// // console.log('re typeof:' + typeof re); //object
// //可用instanceof
// if (today instanceof Date) {
//     console.log('today is Date');
// }
// if (re instanceof RegExp) {
//     console.log('re is RegExp');
// }

//代码清单2-19 使用Object.preventExtensions()创建一个新对象，新对象的属性不可添加，可修改已有属性值和可删除已有属性,可更改已有属性为存取器
// var obj = {};
// obj['name'] = '张三';
// obj['click'] = function() {
//     console.log('名叫张三');
// };
// var obj2 = Object.preventExtensions(obj);
// //delete obj2.name;

// function makeTypeError() {
//     //Object.defineProperty(obj2, 'greeting', { value: 'hello world' }); //此时报错，不允许添加greeting属性
//     //Object.defineProperty(obj2, 'name', { value: 'hello world' }); //对原有的属性可以修改，此处修改了name的值
//     obj2.name = 'fffffffffffffff';
//     console.log(obj2.name);
//     Object.defineProperty(obj, 'name', { get: function() { return '修改为存取器'; } });
//     //console.log(obj2.name);
// }

// obj2.click();
// makeTypeError();
// console.log(obj2.name);

//代码清单2-20 使用Object.seal() 使用Object.seal()对已有对象进行限制，不创建新对象，已有属性不能删除且不能更改为存取器，不能添加新属性
// var obj = {};
// obj.greeting = 'hello world!';
// obj.name = '张三';
// Object.seal(obj); //经过这个方法后，对象已有的属性可更改值，但不能更改其属性为存取器，且不能删除其属性
// obj.greeting = "yyyyyyyyyyyy";
// //Object.defineProperty(obj, 'greeting', { get: function() { return '更改已有属性为存取器'; } });//更改已有属性为存取器时抛错
// //delete obj.greeting; //无法删除属性，静默失败
// function makeTypeError() {
//     delete obj.greeting; //此处删除无效，且不抛错，如果不使用Object.seal(obj),则此处删除有效，下面的obj.greeting为undefined
//     console.log(obj.greeting);
//     obj.greeting = 'welcome';
//     console.log(obj.greeting);
//     Object.defineProperty(obj, 'name', { value: '李四' }); //使用Object.seal()后可修改已有属性的值
//     console.log(obj.name);
//     Object.defineProperty(obj, 'age', { value: '32岁' }); //使用Object.seal()后不能添加新属性
//     console.log(obj.age);
// }
// makeTypeError();

//代码清单2-21 使用Object.freeze() 冻结对象，对象的属性不能添加，修改值，删除，除非其中的属性是对象才能修改该属性的值
// var obj = {
//     name: '张三',
//     innerObj: {}
// };
// Object.freeze(obj);
// obj.name = '李四'; //此处修改无效，且不报错，静默失败
// console.log(obj.name);
// obj.innerObj.name1 = '王五';
// console.log(obj.innerObj.name1); //内部为对象的属性可以更新值
// //如果想对象完全不可修改，则将为对象的属性也冻结
// Object.freeze(obj.innerObj);

// function makeTypeError() {
//     delete obj.name;
// }
// makeTypeError();