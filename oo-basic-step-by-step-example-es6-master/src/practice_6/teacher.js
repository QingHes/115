'use strict'
const Person=require("./person.js");

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        if(this.klass==null)
            return super.introduce()+" I am a Teacher. I teach No Class.";
        else if(this.klass)
          return super.introduce()+" I am a Teacher. I teach Class "+this.klass+".";
           // return "My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.";
    }
}

module.exports=Teacher;
