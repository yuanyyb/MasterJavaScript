//代码清单3-2创建person的实例
// var Person = {
//     firstName: '张三',
//     lastName: '李四',
//     birthDate: new Date('1991-01-01'),
//     gender: 'male',
//     getAge: function() {
//         var today = new Date();
//         var diff = today.getTime() - this.birthDate.getTime();
//         var year = 1000 * 60 * 60 * 24 * 365.25;
//         return Math.floor(diff / year);
//     },
//     toString: function() {
//         return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge() + ' year-old ' + this.gender;
//     }
// };

// var bob = Object.create(Person);
// bob.firstName = 'Bob';
// bob.lastName = 'Mac';
// console.log(bob.toString());

//代码清单3-3 如果浏览器不支持Object.create方法的解决办法，重写create方法
// if (typeof Object.create !== 'function') {
//     Object.create = function(o) {
//         function F() {}
//         F.prototype = o;
//         return new F();
//     };
// }
// var bob = Object.create(Person);
// bob.firstName = 'Bob';
// bob.lastName = 'Mac';
// console.log(bob.toString());

//代码清单3-4 包含工厂方法的Person对象
// var Person = {
//     firstName: '张三',
//     lastName: '李四',
//     birthDate: new Date('1991-01-01'),
//     gender: 'male',
//     getAge: function() {
//         var today = new Date();
//         var diff = today.getTime() - this.birthDate.getTime();
//         var year = 1000 * 60 * 60 * 24 * 365.25;
//         return Math.floor(diff / year);
//     },
//     toString: function() {
//         return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge() + ' year-old ' + this.gender;
//     },
//     extend: function(config) {
//         var tmp = Object.create(this);
//         for (var key in config) {
//             if (config.hasOwnProperty(key)) { //hasOwnProperty() 用于判断一个对象自身（不包含原型链）是否具有指定的属性，有返回true，无返回false
//                 tmp[key] = config[key];
//             }
//         }
//         return tmp;
//     }
// };
// var bob = Person.extend({
//     firstName: 'bob',
//     lastName: 'mmm',
//     birthDate: new Date('1998-01-01')
// });
// // console.log(bob.toString());
// print(bob.toString());

//代码清单3-5  Teacher.isPrototypeOf(patty)  -->true 判断patty是否为Teacher的实例  
//            Object.getPrototypeOf(patty)  -->Teacher 获取一个对象的原型对象
// var Person = {
//     firstName: 'John',
//     lastName: 'Connolly',
//     birthDate: new Date('1994-09-05'),
//     gender: 'male',
//     getAge: function() {
//         var diff = new Date().getTime() - this.birthDate.getTime();
//         var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
//         return age;
//     },
//     toString: function() {
//         return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge() + 'year-old ' + this.gender;
//     },
//     extend: function(config) {
//         var tmp = Object.create(this);
//         for (var key in config) {
//             if (config.hasOwnProperty(key)) {
//                 tmp[key] = config[key];
//             }
//         }
//         return tmp;
//     }

// };
// var Teacher = Person.extend({
//     job: 'teacher',
//     subject: 'English',
//     yearsExp: 6,
//     // toString: function() {
//     //     return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge() + ' year-old ' + this.gender + ' ' + this.subject + ' ' + this.job;
//     // }
//     toString: function() {}
// });
// var patty = Teacher.extend({
//     firstName: '王五',
//     lastName: '王五2',
//     subject: 'Chinese',
//     yearsExp: 20,
//     gender: 'famale'

// });

// console.log(patty.toString());
// console.log(Teacher.isPrototypeOf(patty));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(patty)));

//代码清单 3-8 在新创建对象时指定执行父级的方法

// var Person = {
//     firstName: 'John',
//     lastName: 'Connolly',
//     birthDate: new Date('1994-09-05'),
//     gender: 'male',
//     getAge: function() {
//         var diff = new Date().getTime() - this.birthDate.getTime();
//         var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
//         return age;
//     },
//     toString: function() {
//         return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge() + ' year-old ' + this.gender;
//     },
//     extend: function(config) {
//         var tmp = Object.create(this);
//         for (var key in config) {
//             if (config.hasOwnProperty(key)) {
//                 tmp[key] = config[key];
//             }
//         }
//         return tmp;
//     }

// };
// var Teacher = Person.extend({
//     job: 'teacher',
//     subject: 'Chinese',
//     yearsExp: 6,
//     toString: function() {
//         //此处指明调用父级的方法
//         var str = Person.toString.call(this);
//         return str + ' is a ' + this.subject + ' teacher';
//     }
// });

// var patty = Teacher.extend({
//     firstName: 'Patricia',
//     lastName: 'Hannon',
//     subject: 'English',
//     yearsExp: 10,
//     gender: 'female'
// });

// console.log(patty.toString()); //Patricia Hannon is a 22 year-old female is a English teacher
// console.log(Teacher.toString()); //John Connolly is a 22 year-old male is a Chinese teacher

//代码清单3-9 私有成员
// var Person = {
//     firstName: 'PersonfirstName',
//     lastName: 'PersonlastName',
//     birthDate: new Date('1991-01-01'),
//     gender: 'male',
//     getAge: function() {
//         var diff = new Date().getTime() - this.birthDate.getTime();
//         var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
//         return age;
//     },
//     extend: function(config) {
//         var tmp = Object.create(this);
//         for (var key in config) {
//             if (config.hasOwnProperty(key)) {
//                 tmp[key] = config[key];
//             }
//         }
//         var createTime = new Date('2017-01-01');
//         var getCreationTime = function() {
//             return createTime;
//         };
//         tmp.getCreationTime = getCreationTime;
//         return tmp;
//     },
//     toString: function() {
//         return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge() + ' year-old ' + this.gender;
//     }

// };

// var Teacher = Person.extend({
//     job: 'Teacher',
//     subject: 'Chines',
//     yearsExp: 7,
//     toString: function() {
//         var str = Person.toString.call(this);
//         return str + ' ' + this.subject + ' teacher';
//     }
// });

// var patty = Teacher.extend({
//     firstName: 'Patricia',
//     lastName: 'Hannon',
//     subject: 'English',
//     yearsExp: 10,
//     gendeer: 'female'
// });
// //console.log(Person.getCreationTime()); //不能访问
// console.log(Teacher.getCreationTime());
// console.log(patty.getCreationTime()); // 2017


//代码清单3-12  包含私有数据的模块
// function getModule() {
//     var Foo = {};
//     Foo.x = 10;
//     Foo.addEmUp = function(x, y) {
//         return x + y;
//     }
//     var events = [];
//     Foo.addEvent = function(eventName, target, fn) {
//         events.push({ eventName: eventName, target: target, fn: fn });
//     };
//     Foo.listEvents = function(eventName) {
//         return events.filter(function(evtObj) {
//             return evtObj.eventName === eventName;
//         })
//     };
//     return Foo;
// };
// var myNamespace = getModule();
// // var s = myNamespace.addEmUp(11, 9);
// // console.log(s);
// myNamespace.addEvent('click', '123', function() { return 'click_callback'; });
// myNamespace.addEvent('focus', '456', function() { return 'focus_callback'; });
// myNamespace.addEvent('cursor', '789', function() { return 'cursor_callback'; });
// var res = myNamespace.listEvents('focus'); //只能通过这种方式访问私有变量events
// console.log(res);
// console.log(res[0].fn());

//代码清单3-13  一个立即调用的函数表达式
//一个普通函数
// function foo() {
//     return '1111';
// }
// //函数复制
// var fn1 = function() {
//     return '';
// };
// //函数表达式
// (function() {
//     console.log('gggggg');
// })();

// (function() {
//     console.log('ddddddd');
// }());

//代码清单3-14  //IIFE模块生成器
// varmyModule = (function() {
//     var events = [];
//     return {
//         x: 10,
//         addEmUp: function(x, y) {
//             return x + y;
//         },
//         addEvent: function(eventName, target, fn) {
//             events.push({ eventName: eventName, target: target, fn: fn });
//         },
//         listEvents: function(eventName) {
//             return events.filter(function(eveObj) { //数组的原型方法
//                 return eveObj.eventName === eventName;
//             });
//         }
//     };
// })();
//代码清单3-15 为IIFE传递参数
// var myModule = (function($) {
//     var events = [];
//     return {
//         x: 10,
//         addEmUp: function(x, y) {
//             return x + y;
//         },
//         addEvent: function(eventName, target, fn) {
//             events.push({ eventName: eventName, target: target, fn: fn });
//             $(target).on(eventName, fn);
//         },
//         listEvents: function(eventName) {
//             return events.filter(function(evtObj) {
//                 return evtObj.eventName === eventName;
//             });
//         }
//     };
// })(jQuery);