console.log("Assignment");
console.log("Question2: Answer");

class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.removeCoins=0;
      this.courses = [];
    }



    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins has removed`);
        return this;
    }

    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
}


let user1 = new User('Jarvis',"AI1",'jar@gmail.com')

// let user2 = new User('Friday',AI2,'fri@gmai.com')

// let mod = new Moderator('EDITH',AI3,'b@gmail.com','Moderator');

// let admin = new Admin('carien',AI4,'r@gmail.com');

let users = [user1,];//user2,mod,admin ];

users.forEach(element => {
    console.log(element);
});

admin.addCourse(user1,'c');
admin.addCourse(user1,'c++');
admin.removeCoins(user1);