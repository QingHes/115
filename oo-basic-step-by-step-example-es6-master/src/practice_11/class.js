'use strict'
const Teacher=require("./teacher.js")
const Student=require("./student.js")
class Class{
    constructor(number) {
        this.number = number;
        this.leader = null;
    }

    assignLeader(Student) {
        if(Student.klass.number===this.number) {
            this.leader = Student;
            if(this.hasOwnProperty("leaderListener")){
                let result ="I am "+this.leaderListener.name+". I know "+Student.name+" become Leader of Class "+this.number+".";
                console.log(result);
            }
        }
        else{
            console.log("It is not one of us.");
        }
    }
    registerAssignLeaderListener(teacher){
        this.leaderListener=teacher;

    }
    registerJoinListener(teacher){
        this.joinListener = teacher;
    }
    getDisplayName(){
        return "Class "+this.number;
    }

    appendMember(Student) {
        Student.klass = this;
        if(this.hasOwnProperty("joinListener")){
            let result= "I am "+this.joinListener.name+". I know "+Student.name+" has joined Class "+this.number+".";
            console.log(result);
        }
    }

    isIn(Student) {
        if (Student.klass == this)
            return true;
        else
            return false;
    }

    getNumber(){
        return this.number;
    }

}
module.exports=Class;