// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display basic information
  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }

  // Method to introduce the person
  introduce() {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
  }

  // Method that can be overridden by subclasses
  getRole() {
    return "Person";
  }
}

// Student subclass extending Person
class Student extends Person {
  constructor(name, age, grade, course) {
    super(name, age); // Call parent constructor
    this.grade = grade;
    this.course = course;
  }

  // Override displayInfo to include student-specific details
  displayInfo() {
    return `${super.displayInfo()}, Grade: ${this.grade}, Course: ${this.course}`;
  }

  // Override introduce method
  introduce() {
    return `${super.introduce()} I'm a student in grade ${this.grade}, studying ${this.course}.`;
  }

  // Override getRole method
  getRole() {
    return "Student";
  }

  // Student-specific method
  study() {
    return `${this.name} is studying ${this.course}.`;
  }

  // Method to get academic info
  getAcademicInfo() {
    return `Academic Details - Grade: ${this.grade}, Course: ${this.course}`;
  }
}

// Teacher subclass extending Person
class Teacher extends Person {
  constructor(name, age, subject, department, yearsOfExperience = 0) {
    super(name, age); // Call parent constructor
    this.subject = subject;
    this.department = department;
    this.yearsOfExperience = yearsOfExperience;
  }

  // Override displayInfo to include teacher-specific details
  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}, Department: ${this.department}, Experience: ${this.yearsOfExperience} years`;
  }

  // Override introduce method
  introduce() {
    return `${super.introduce()} I'm a teacher in the ${this.department} department, teaching ${this.subject}.`;
  }

  // Override getRole method
  getRole() {
    return "Teacher";
  }

  // Teacher-specific method
  teach() {
    return `${this.name} is teaching ${this.subject}.`;
  }

  // Method to get professional info
  getProfessionalInfo() {
    return `Professional Details - Subject: ${this.subject}, Department: ${this.department}, Experience: ${this.yearsOfExperience} years`;
  }

  // Method to assign grades (could interact with students)
  assignGrade(student, grade) {
    return `${this.name} assigned grade ${grade} to ${student.name} in ${this.subject}.`;
  }
}

// Demonstration of the class hierarchy
console.log("=== PERSON CLASS HIERARCHY DEMONSTRATION ===\n");

// Create instances of each class
console.log("1. Creating instances:\n");

const p = new Person("Parag Bajaj", 20);
console.log("Person created:", p.displayInfo());

const s = new Student("Parag", 20, "Junior", "Computer Science");
console.log("Student created:", s.displayInfo());

const t = new Teacher("Suyash Gupta", 28, "Mathematics", "Science", 5);
console.log("Teacher created:", t.displayInfo());

console.log("\n" + "=".repeat(50) + "\n");

// Demonstrate method inheritance and overriding
console.log("2. Method inheritance and overriding:\n");

console.log("Base Person introduction:");
console.log(p.introduce());

console.log("\nStudent introduction (overridden):");
console.log(s.introduce());

console.log("\nTeacher introduction (overridden):");
console.log(t.introduce());

console.log("\n" + "=".repeat(50) + "\n");

// Demonstrate polymorphism
console.log("3. Polymorphism - same method, different behavior:\n");

const people = [p, s, t];

people.forEach((p, index) => {
  console.log(`Person ${index + 1}:`);
  console.log(`  Role: ${p.getRole()}`);
  console.log(`  Info: ${p.displayInfo()}`);
  console.log("");
});

console.log("=".repeat(50) + "\n");

// Demonstrate subclass-specific methods
console.log("4. Subclass-specific methods:\n");

console.log("Student-specific methods:");
console.log(s.study());
console.log(s.getAcademicInfo());

console.log("\nTeacher-specific methods:");
console.log(t.teach());
console.log(t.getProfessionalInfo());

console.log("\nTeacher-Student interaction:");
console.log(t.assignGrade(s, "A+"));

console.log("\n" + "=".repeat(50) + "\n");

// Demonstrate instanceof operator
console.log("5. Type checking with instanceof:\n");

console.log(`s instanceof Person: ${s instanceof Person}`);
console.log(`s instanceof Student: ${s instanceof Student}`);
console.log(`s instanceof Teacher: ${s instanceof Teacher}`);

console.log(`t instanceof Person: ${t instanceof Person}`);
console.log(`t instanceof Teacher: ${t instanceof Teacher}`);
console.log(`t instanceof Student: ${t instanceof Student}`);

console.log("\n" + "=".repeat(50) + "\n");

// Demonstrate accessing parent methods with super
console.log("6. Accessing parent class properties and methods:\n");

// Create a more complex example
class GraduateStudent extends Student {
  constructor(name, age, course, thesisTitle) {
    super(name, age, "Graduate", course);
    this.thesisTitle = thesisTitle;
  }

  displayInfo() {
    return `${super.displayInfo()}, Thesis: "${this.thesisTitle}"`;
  }

  introduce() {
    return `${super.introduce()} I'm working on my thesis: "${this.thesisTitle}".`;
  }

  getRole() {
    return "Graduate Student";
  }

  research() {
    return `${this.name} is researching for thesis: "${this.thesisTitle}".`;
  }
}

const gs = new GraduateStudent("Mark Thompson", 25, "Artificial Intelligence", "Machine Learning in Healthcare");

console.log("Graduate Student (extends Student):");
console.log(gs.displayInfo());
console.log(gs.introduce());
console.log(gs.research());
console.log(`Role: ${gs.getRole()}`);

console.log("\nInheritance chain demonstration:");
console.log(`gs instanceof Person: ${gs instanceof Person}`);
console.log(`gs instanceof Student: ${gs instanceof Student}`);
console.log(`gs instanceof GraduateStudent: ${gs instanceof GraduateStudent}`);

console.log("\n" + "=".repeat(60));
console.log("🎓 Class Hierarchy Demonstration Complete! 🎓");
console.log("=".repeat(60));