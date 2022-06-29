// let a = prompt('enter a:');
// let b = prompt('enter b:');
//  let temp = a;
//  a= b;
//  b= temp;

//  console.log('a:'+a , "b:"+b);
 

document.querySelector("#double").addEventListener("click", handleClick);
function handleClick(){

   let newvalue = document.querySelector("#num").value; 
   newvalue *= 2;
   document.querySelector("#doubled").innerHTML= newvalue;
}

let result = 0 ;
function clicked(){
    result = result + 1;
    console.log(result);
    document.getElementById("result").textContent = result ;
}