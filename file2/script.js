// let a = prompt('enter a:');
// let b = prompt('enter b:');
//  let temp = a;
//  a= b;
//  b= temp;

//  console.log('a:'+a , "b:"+b);
 
function calculateLength(){
    //Write your code here
  var a = document.getElementById("num").value;
  
 document.querySelector("#sid").innerHTML= a.length;
    
    
}

document.querySelector("#double").addEventListener("click", handleClick);
function handleClick(){

   let newvalue = document.querySelector("#num").value; 
   newvalue = newvalue*2;
   document.querySelector("#doubled").innerHTML= newvalue;
}

let result = 0 ;
function clicked(){
    result = result + 1;
    console.log(result);
    document.getElementById("result").textContent = result ;
}

let reverse = (str) => {
    let arr= str.split("");
    arr.reverse();
    str=arr.join("");
    return str;
}

let input= prompt('enter the string:');
console.log(reverse(input));

let a= 10;
let b= 20;
let temp="";

temp = a;
a=b;
b= temp;

document.write(`${a} , ${b}`);

function num(n){
    let count=1;
      let arr=[];
      while(count<=n){
          if(count%3===0 && count%5===0){
              arr.push("fizzbuzz");
          }
          else if( count%3 === 0){
              arr.push("fizz");
          }
  
          else if(count%5===0){
              arr.push("buzz");
          }
          else { arr.push(count);}
          count++;
      }
  return arr;
      
  }
  
  console.log(num(25));