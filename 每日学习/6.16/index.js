// setTimeout(function(){
//   console.log('定时器开始啦')
// });

// new Promise(function(resolve){
//   console.log('马上执行for循环啦');
//   for(var i = 0; i < 10000; i++){
//       i == 99 && resolve();
//   }
// }).then(function(){
//   console.log('执行then函数啦')
// });

// console.log('代码执行结束');
var fn;
function foo() {
    var a = 2;
    function baz () {
        console.log( a );
    }
    fn = baz;
}
function bar() {
    fn();
}

foo();
bar(); // 2