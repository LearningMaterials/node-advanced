**要求：**  

1. 写一个方法有一个参数`function multiply(input){}`，方法体实现定时2s后去执行相乘的操作`input*input`,返回值是一个相乘之后的结果，并且是一个Promise类型的

2. 写一个方法有一个参数`function add(input){}`，方法体实现定时2s后去执行相加的操作`input*input`，返回值是一个相加之后的结果，并且是一个Promise类型的

3. 最终会有一个操作，通过Promise线性的方式，输入一个数字，先执行乘，在执行加，最终打印出结果。    

```  
//第三步的输出代码：
var promise = new Promise(function(resolve, reject) {
    resolve(3);
});

promise.then(multiply).then(add).then(function(result) {
      console.log('get result='+result);
  }).catch(function(reason) {
    console.log('error')
  });
```  

**例如：**  
输入 `2`最终输出 `8`  
输入 `3`最终输出 `18`

---
根据题目要求，写出前两个步骤，并在控制台打印出结果。
