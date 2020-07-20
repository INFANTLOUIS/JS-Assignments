console.log("All questions given on 17/07/2020 Answered here")
console.log("Question 1: Answer");
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5. 


let arr=["fizz","buzz","fizzbuzz"];
for(let i=1;i<=100;i++)
{
    if( i % 3 == 0 ){
        console.log(arr[0]);
    }
    if( i % 5 == 0 ){
        console.log(arr[1]);
    }
    if(i % 3 == 0 && i % 5 == 0){
    console.log(arr[2]);
    }
console.log(i);
}
