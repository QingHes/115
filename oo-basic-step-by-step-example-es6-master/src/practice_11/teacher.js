
'use strict'
const Person=require("./person.js");
const Student=require("./student.js");
const Class=require("./class.js");

class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses=klasses;

    }
    introduce(){
        let re=super.introduce();
        if(this.klasses!=null){
            re+=" I am a Teacher. I teach Class ";
            let i;
            for(i=0;i<this.klasses.length-1;i++){
                re+=this.klasses[i].getNumber()+", ";
            }
            re+=this.klasses[i].getNumber()+".";
        }
        else
            re+=" I am a Teacher. I teach No Class.";
        return re;
    }
    getName(){
        return this.name;
    }
}

module.exports=Teacher;


