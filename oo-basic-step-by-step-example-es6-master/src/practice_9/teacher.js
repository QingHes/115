
'use strict'
const Person=require("./person.js");
const Student=require("./student.js");
const Class=require("./class.js");

class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass!=null)
            return super.introduce()+" I am a Teacher. I teach Class "+this.klass.getNumber()+".";
        else
            return super.introduce()+" I am a Teacher. I teach No Class.";
    }
    introduceWith(student){
        let a=student.getClass();
        let b=this.klass.getNumber();
        if(a==b)
        {
            return super.introduce()+" I am a Teacher. I teach "+student.getName()+".";
        }
        else
        {
            return super.introduce()+" I am a Teacher. I don't teach "+student.getName()+".";
        }
    }
}

module.exports=Teacher;

