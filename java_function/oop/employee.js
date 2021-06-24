// create an employee class to print the details of the employees:

class Company{
    details(name,age,gender,id,designation,salary,){
        this.name=name
        this.age=age
        this.gender=gender
        this.id=id
        this.designation=designation
        this.salary=salary
    }
    printDetails(){
        console.log("name of he employee:",this.name);
        console.log("age :",this.age);
        console.log("gender :",this.gender);
        console.log("employee Id:",this.id);
        console.log("designation:",this.designation);
        console.log("salary:",this.salary);
    }
}

// calling the object
obj= new Company()
obj.details("Chikku",26,"female","ANZ154782"," Web Developer",45000)
obj.printDetails()
console.log();
ob= new Company()
ob.details("Chinchu",26,"female","ANZ154792"," Web Developer",46000)
ob.printDetails()