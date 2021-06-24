// multilevel inheritance

// multilevel inheritance class of employees

class Employee{
    details(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
        console.log("Name:",this.name);
        console.log("Age:",this.age);
        console.log("Gender:",this.gender);
    }
}
class Desi extends Employee{
    job(company,jobrole){
        this.company=company
        this.jobrole=jobrole
        console.log("Company:",this.company);
        console.log("Job role:",this.jobrole);
    }

}
class Review extends Desi{
    print(){
        console.log("good performance");
    }
}

var obj= new Review()
obj.details("Chikku",26,"female")
obj.job("ANZ Bank","Web Developer")
obj.print()