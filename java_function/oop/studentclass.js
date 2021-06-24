// create a student class
class Student{
    details(name,age,gender,div,party){
        this.name=name
        this.age=age
        this.gender=gender
        this.div=div
        this.party=party
        console.log("name of the student:",this.name);
        console.log("age:",this.age);
        console.log("gender:",this.gender);
        console.log("division:",this.div);
        console.log("party:",this.party);

    }
}
obj= new Student()
obj.details("Maneesha",12,"female","VII","yellow")
console.log(); // to give one blank line

ob= new Student()
ob.details("Arjun",10,"male","V","red")
console.log()

o=new Student()
o.details("Jemy",14,"female","IX","blue")
console.log();

p= new Student()
p.details("Ron",17,"male","XII","green")