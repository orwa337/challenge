//////////////////////////
// task 1
console.log('Task 1');
////////////////////////////
function isPrime(p) {
 for(var i=2 ; i < p ; i++ )
 {
  if ( p%i === 0) { 
     return false;
      }  }
          return true;
}

console.log(isPrime(15));
 
//////////////////////////
// task 2
console.log(' ');
console.log('Task 2');
////////////////////////////
function task2() {
  var now = new Date().getHours();
  if(5 < now && now < 12)
    console.log('Good Morning');
  else if (12 < now && now < 16)
    console.log('Good Noon');
  else if (16 < now && now < 20)
    console.log('Good Afternoon');
  else
    console.log('Good Evening');
}
task2()

////////////////////////////
////////task 3
console.log(' ');
console.log('Task 3');
////////////////////////////
console.log(' .......... ');
function w () {
	button.onclick( function()
           {
             alert('button clicked');
           }
      );
}

////////////////////////////
////////task 4
console.log(' ');
console.log('Task 4');
////////////////////////////
function fibonacci(n) {
	var f = 1;
	var s = 0;
	for ( var i = 0 ; i < n-1 ;i++) {
		var r = f + s ;
		s = f ;
		f = r ; 
	}
	console.log(r);
}
fibonacci(20);
////////////////////////////
////////task 5
console.log(' ');
console.log('Task 5');
////////////////////////////
function reverse(s) {
  var string='';
  var ourlength =s.length;
  for (var i = ourlength ; i >= 0 ; i--) {
    string = string + s.charAt(i) ;
  }
  console.log(string);
}
reverse('Hello Worldz');

////////////////////////////
////////task 6
console.log(' ');
console.log('Task 6');
////////////////////////////
function reverseWords(ss) {
var result='';

for (var i = ss.length ; i >= 0 ; i--) {
  if (ss.charAt(i) == ' ') {
	result = result + ss.slice(i,ss.length);
	ss = ss.slice(0,i);
  }
}
console.log(result +' '+ss);
}
reverseWords('hello world ! I am Orwa');