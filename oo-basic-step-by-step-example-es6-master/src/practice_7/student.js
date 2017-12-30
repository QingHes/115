'use strict'
const Person=require("./person.js");
const Class=require("./class.js");

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        return super.introduce()+" I am a Student. I am at Class "+this.klass.getNumber()+".";
    }
    getName(){
        return this.name;
    }
    getClass(){
        return this.klass.getNumber();
    }
}

module.exports=Student;

