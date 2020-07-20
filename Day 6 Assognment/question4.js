console.log("Question 4: Answer");
// Make a Calculator in Javascript which can do operations as Addtion, Subtraction, Multiplication, Division, Square root, Percentage.


// function add(){
//     let x = prompt("Additon"+"enter the first number");
//     let y = prompt("Additon"+"enter the second number");
//     let z = parseInt(x) + parseInt(y);
//     console.log(z);
// }
// add()

function add(){
    let x = document.getElementById("first").value;
    let y = document.getElementById("second").value;
    let z = parseInt(x) + parseInt(y);
    
    alert("view Ans in console by pressing F12");
    
    console.log(z);

}

function sub(){
    let x = document.getElementById("first").value;
    let y = document.getElementById("second").value;
    let z = parseInt(x) - parseInt(y);
    
    alert("view Ans in console by pressing F12");
    
    console.log(z);

}

function mul(){
    let x = document.getElementById("first").value;
    let y = document.getElementById("second").value;
    let z = parseInt(x) * parseInt(y);
    
    alert("view Ans in console by pressing F12");
    
    console.log(z);

}

function div(){
    let x = document.getElementById("first").value;
    let y = document.getElementById("second").value;
    let z = parseInt(x) / parseInt(y);
    
    alert("view Ans in console by pressing F12");
    
    console.log(z);

}


function per(){
    let x = document.getElementById("first").value;
    let y = document.getElementById("second").value;
    let z = ((parseInt(x) + parseInt(y))/2);
    
    alert("view Ans in console by pressing F12");
    
    console.log(z);

}

function sqr(){
    let x = document.getElementById("first").value;
    let y = document.getElementById("second").value;
    let z = parseInt(x) ** parseInt(y);
    
    alert("view Ans in console by pressing F12");
    
    console.log(z);

}


