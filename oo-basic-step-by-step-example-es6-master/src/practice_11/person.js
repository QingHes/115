'use strict'

class Person{
    constructor(id,name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return "My name is "+this.name+". I am "+this.age+" years old.";
    }
    getName(){
        return this.name;
    }

}

module.exports=Person;




