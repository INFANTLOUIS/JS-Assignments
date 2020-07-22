console.log("Assignment");
console.log("Question 2:");


let a=Number(prompt(`What Multiplication table want view, Enter the number `));
     
    for(i=1;i<=10;i++){
        b=a*i;
        c= document.write(`${a} x ${i} = ${b}<br>`);
        }
        
let d = document.getElementById("view").innerHTML=c;
        
console.log(d);