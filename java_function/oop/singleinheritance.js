// multi level inheritance in javaScript
// multiple inheritance is not supported in JavaScript
// here we use "extends classname" instead of giving the parent classname in ( )

// details of parent and child using single inheritance

class Details{
    details(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
        console.log("Name:",this.name);
        console.log("age:",this.age);
        console.log("gender",this.gender);
    }
}
class Parent extends Details{
    setValue(company,job,salary){
        this.company=company
        this.job=job
        this.salary=salary
        console.log("Company:",this.company);
        console.log("Job:",this.job);
        console.log("Salary",this.salary);
    }
}

class Child extends Details{
    printValues(div,rollno,course){
        this.div=div
        this.rollno=rollno
        this.course=course
        console.log("Class:",this.div);
        console.log("Roll No:",this.rollno);
        console.log("Course opted :",this.course);
    }
}

var o= new Parent()
o.details("Mayuri",50,"female")
o.setValue("AZN Bank","Asst. Manager",70000)
console.log();

var p=new Child()
p.details("Malar",20,"female")
p.printValues("Physics","42","Msc.Physics")