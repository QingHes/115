
'use strict'
const Person=require("./person.js");
const Student=require("./student.js");
const Class=require("./class.js");

class Teacher extends Person{
    constructor(id,name,age,cla){
        super(id,name,age);
        this.cla=cla;

    }
    introduce(){
        let re=super.introduce();
        if(this.cla!=null){
            re+=" I am a Teacher. I teach Class ";
            let i;
            for(i=0;i<this.cla.length-1;i++){
                re+=this.cla[i].getNumber()+", ";
            }
            re+=this.cla[i].getNumber()+".";
        }
        else
            re+=" I am a Teacher. I teach No Class.";
        return re;
    }
}

module.exports=Teacher;

