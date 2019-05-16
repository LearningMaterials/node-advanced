
function multiply(input) {
    return new Promise(function(resolve,reject) {
      setTimeout(()=>{resolve(input * input)},2000);
    });
  }
 
  function add(input) {
    return new Promise(function(resolve,reject) {
      setTimeout(()=>{resolve(input + input)}, 2000);
    })
  }
 
  var promise = new Promise(function(resolve, reject) {
    resolve(3);
  });
  
  promise.then(multiply).then(add).then(function(result) {
      console.log('get result='+result);
  }).catch(function(reason) {
    console.log('error')
  });