let number = prompt("Please enter values ", "e.g 1,2,3");
let operation = prompt("Please enter operation you want to perform : ", "e.g /");
if(number == "") console.log();
if(number.length == 1) console.log(number);

let arr = "";
for(let i=0; i<number.length; i++) {
    if(number[i] == '\\') {
	if(number[i-1] == ',') {
	  i++;
	  continue;
	}
        arr += ",";
        i++;
        continue;
    }
    arr += number[i];
}
if(arr[arr.length-1] == ',') {
    arr = arr.slice(0,-1);     
}

arr = arr.split(",");

switch(operation) {
  case '+':
    add(arr);
    break;
  case '-':
    sub(arr);
    break;
  case '*':
    mul(arr);
    break;
  case '/':
    divi(arr);
    break;
  default:
    console.log("INVALID");
    break;
}

function add (number) {
    let answer = 0;
    for(let i = 0; i<number.length; i++) {
        answer += parseInt(number[i]);
    }
    console.log(answer);
}
function sub(number) {
    let answer = 0;
    for(let i = 0; i<number.length; i++) {
        answer -= parseInt(number[i]);
    }
    console.log(answer);
}
function mul(number) {
    let answer = 1;
    for(let i = 0; i<number.length; i++) {
        answer *= parseInt(number[i]);
    }
    console.log(answer);
}
function divi(number) {
    let answer = parseInt(number[0]);
    for(let i = 1; i<number.length; i++) {
        answer /= parseInt(number[i]);
    }
    console.log(answer);
}
