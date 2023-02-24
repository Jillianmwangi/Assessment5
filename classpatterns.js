  //parent class
class worker{
    constructor(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
}

class Pharmacist extends worker {
    constructor(fName, lName, age, prescription) {
      super(fName, lName, age);
      this.prescription = prescription;
    }
    writePrescription() {
    }
  }

  class Cashier extends worker {
    constructor(fName, lName, age, amount) {
      super(fName, lName, age);
      this.amount = amount;
    }
  
    collectAmount() {
    }
  
    returnAmount() {
      
    }
  }
  class Manager extends worker {
    constructor(fName, lName, age, workers) {
        super(fName, lName, age);
        this.workers = workers;
      }
  

    manageworkers() {
    }
  
    
    isCashier() {
    }
  
    
    isPharmacist() {
    }
  }