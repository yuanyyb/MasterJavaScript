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

//代码清单3-5