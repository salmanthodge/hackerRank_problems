class Student {
  constructor(name, roll_no, age, address) {
    this.name = name;
    this.roll_no = roll_no;
    this.age = age;
    this.address = address;
    this.isActive = 1;
    this.attendence = false;
    this.marks = 50;
  }
  addAttendence = () => {
    // this.attendence = attendence;
    this.attendence = true;
  };
  updateMarks = () => {
    this.marks = 80;
  };
}
let salman = new Student("salman", 10, 21, "mumbai");
// salman.addAttendence(true);
salman.addAttendence();
salman.updateMarks();
console.log(salman);
