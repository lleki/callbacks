var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function compareStudentsByName(student1, student2) {
  console.log(student1.name,student2.name);
  if (student1.name < student2.name) {
    return -1;
  }
  if (student1.name > student2.name) {
    return 1;
  }
  return student2.age - student1.age;
}

console.log(students.sort(compareStudentsByName));