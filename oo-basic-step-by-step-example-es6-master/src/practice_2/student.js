'use strict'
const Person=require("./person.js");
function Student(name,age,klass){
    Person.apply(this,arguments);
    this.klass=klass;
}

Student.prototype.introduce=function(){
    let re="I am a Student. I am at Class "+this.klass+".";

    return re;
};
module.exports=Student;
