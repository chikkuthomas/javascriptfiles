// to give the variables in the class name itself
// here we use constructor instead of __init__

// calculator class using constructor

class Arithmetic{
    constructor( num,  num1){
        this.num= num;
        this.num1=num1;
    }
    add(){
        console.log("sum of numbers:",this.num+this.num1); // always use instance variable
    }
    sub(){
        console.log("difference of given numbers:",this.num-this.num1);
    }
    mul(){
        console.log("multiplication of given numbers:",this.num*this.num1);
    }
    div(){
        console.log("division of given numbers:",this.num/this.num1);
    }
}

var obj=new Arithmetic(10,2)
obj.add()
obj.sub()
obj.mul()
obj.div()
