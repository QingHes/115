'use strict'
function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.introduce=function(){
    let re="My name is "+this.name+". I am "+this.age+" years old.";
    return re;
};
module.exports=Person;

