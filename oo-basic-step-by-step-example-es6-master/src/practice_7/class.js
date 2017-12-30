'use strict'

class Class{
    constructor(number){
        this.number=number;
    }
    getNumber(){
        return this.number;
    }
    getDisplayName(){
        return "Class "+this.getNumber();
    }
}
module.exports=Class;