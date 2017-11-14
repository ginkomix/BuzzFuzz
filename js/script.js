function log(a) {
    console.log(a);
}
function FizzBuzz(){
    log('FizzBuzz');
    flag=1;
}
var flag = 0;
for(var a = 1;a<=100;a++) {
    flag = 0;
    (a%5===0 && a%3===0) && FizzBuzz();
    (a%5===0 && flag===0) && log('Buzz');
    (a%3===0 && flag===0) && log('Fizz');
    (a%5!==0 && a%3!==0 ) && log(a);
}
