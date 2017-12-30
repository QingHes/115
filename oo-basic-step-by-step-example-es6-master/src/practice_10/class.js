'use strict'
const Student=require("./student.js")
class Class{
    constructor(number){
        this.number=number;
        this.leader=null;
    }
    getNumber(){
        return this.number;
    }
    getDisplayName(){
        return "Class "+this.getNumber();
    }
    assignLeader(leader){
        if(leader.klass.getNumber()==this.number)
            this.leader=leader;
        else{
            console.log("It is not one of us.");
        }
    }
    appendMember(member){
        if(member.klass.getNumber()!=this.number){
            member.klass=this;
        }
    }
}
module.exports=Class;

