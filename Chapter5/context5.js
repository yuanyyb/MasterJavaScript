//代码清单 5-2  htmlcollection/ nodelist上的Array函数？？？？？？？？？？？
// window.onload = function() {
//     function filterForListItems(el) {
//         return el.nodeName === "LI";
//     }
//     var testElements = document.getElementsByClassName('test');
//     console.log(testElements.length);
//     var liElements = Array.prototype.filter.call(testElements, filterForListItems);
//     console.log(liElements.length);

//     var ss = testElements[0].querySelectorAll('.test');
//     console.log(ss[0].innerHTML);
// }

//代码清单5-5 使用DOMContentLoaded(文档加载完成但图片,样式,视频,音频不一定加载完)(IE8不兼容)
// document.addEventListener('DOMContentLoaded', functionHandler);

// //代码清单5-6 跨浏览器使用DOMContentLoaded     //addEventListener 为元素事件添加多个执行方法，按添加顺序依次执行
// if (document.addEventListener) {
//     document.addEventListener('DOMContentLoaded', function() {
//         document.removeEventListener('DOMContentLoaded', arguments.callee); //arguments.callee 是指拥有此arguments对象的函数的指针(即使函数名修改依然可用)
//     });
// } else if (document.attachEvent) { //ie识别attachEvent
//     document.attachEvent("onreadystatechange", function() {
//         document.detachEvent('onreadystatechange', arguments.callee);
//     });
// }
//使用arguments.callee 例子  /////执行阶乘计算
// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * arguments.callee(num - 1);
//     }
// }
// var trueFactorial = factorial;
// alert(trueFactorial(5)); //120    


// factorial = function() {
//     return 0;
// }
// alert(trueFactorial(5)); // 120 如果没有使用arguments.callee，将返回0

//代码清单 5-7 获取<strong>元素的文本内容
// window.onload = function() {
//     //非Mozilla浏览器
//     console.log(document.getElementsByTagName('strong')[0].innerText);
//     //包括非Mozilla浏览器在内的所有浏览器
//     console.log(document.getElementsByTagName('strong')[0].firstChild.nodeValue);
// }


//代码清单 5-8获取元素内包括子元素中的文本内容的通用函数
// window.onload = function() {
//     console.log(xxxxx(document.getElementsByTagName('p')));
// }

// function xxxxx(e) {
//     var t = '';
//     e = e.childNodes || e;
//     for (var j = 0; j < e.length; j++) {
//         //t += e[j].nodeType != 1 ? e[j].nodeValue : xxxxx(e[j].childNodes);
//         t += e[j].nodeType != 1 ? e[j].nodeValue : arguments.callee(e[j].childNodes); //与函数名解耦
//     }
//     return t;
// }

//代码清单 5-9 确定某个元素是否具备某个特性（因为SaFari不支持ele.attributes属性,IE8及以上都已支持）
// function hasAttribute(e, attrName) {
//     return e.getAttribute(attrName) != null;
// }

//代码清单 5-10 元素属性值的获取和设置
//elm.getAttribute('class') js中使用，可用于html/xml  兼容各浏览器则使用elm.className  
//类似的还有 (因为for,float,text这些都是js中的保留字)
//  elm.getAttribute('for')  ---> elm.htmlFor 
//  elm.getAttribute('float') --->elm.cssFloat
//  elm.getAttribute('text')  --->elm.cssText
// function attr(elem, name, value) {
//     if (!name || name.constructor != String) { //constructor 属性返回对创建此对象的数组函数的引用。
//         return '';
//     }
//     name = { 'for': 'htmlFor', 'className': 'class' }[name] || name;
//     if (typeof value != 'undifined') {
//         elem[name] = value;
//         if (elem.setAttribute) {
//             elem.setAttribute(name, value);
//         }
//     }
//     return elem[name] || elem.getAttribute(name) || '';
// }
//constructor 扩展  constructor 属性返回对创建此对象的数组函数的引用
window.onload = function() {
    function employee(name, job, born) {
        this.name = name;
        this.job = job;
        this.born = born;
    }
    var bill = new employee('张三', '老师', '1991');
    document.write(bill.constructor); //输出employee方法
}