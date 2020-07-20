console.log("Question 2: Answer");
//Destructure the following object 




let student = {
        name:"Helsinki",
        age:24,
        projects : {
            dicegame: "Two players dice game using javascript",
        }
    }
    
    let a= {name , age , projects:{dicegame}} = student;

    console.log(name, age,dicegame);
