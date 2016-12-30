/* Correct Implementations */
/* 1 */
var me = 'Bruce Wayne';

function greetMe(){
  console.log('Hello, '+me+'!');
}

greetMe();

/* 2 */
function printName(firstName){
  var intro = 'My name is ';
  return function (lastName){
    console.log(intro+firstName+' '+lastName);
  }
}

var myName = printName('Blesson');
myName('Sam');

/* Incorrect Implementation */
function generateNums1(limit){
  var start = 100;
  var output = []
  for (var i = 0; i < limit; i++) {
    output[i] = function(){
      return start + i;
    }
  }
  return output;
}

var result1 = generateNums1(3);
console.log(result1[0](), result1[1](), result1[2]()); // Prints 103 103 103

/* Correct Implementation */
function generateNums2(limit){
  var start = 100;
  var output = []
  for (var i = 0; i < limit; i++) {
    output[i] = function(j){
      return start + j;
    }(i)
  }
  return output;
}

var result2 = generateNums2(3)
console.log(result2[0], result2[1], result2[2]); // Prints 100 101 102
