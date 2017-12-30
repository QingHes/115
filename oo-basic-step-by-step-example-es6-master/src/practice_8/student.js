'use strict'
const Person=require("./person.js");
const Class=require("./class.js");

class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass.leader==this)
            return super.introduce()+" I am a Student. I am Leader of Class "+this.klass.getNumber()+".";
        else
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

