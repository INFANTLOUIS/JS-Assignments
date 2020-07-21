console.log("Assignment");
console.log("Question3: Answer");

let find= new Promise((resolve,reject)=>{
let found=false;
if(true){
    resolve(
        {
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response=>response.joson())
            .then(data=>console.log(data))
        }
    )
    reject("can't found")
}
})

userData
    .then(data=>console.log(data))
    .catch(error=>console.log(found))