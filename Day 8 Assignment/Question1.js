console.log("Assignment");
console.log("Question 1:")
// let a=document.getElementById('body');
// let color=['red','blue','green','yellow','violet'];
let colors=["Red","Blue","Green",];
function show(){
    setTimeout(()=>{
        colors.forEach(el => {
            document.body.style.backgroundColor=el;
            // document.body.style.color;    
        });
        
    },5000);
}
show()