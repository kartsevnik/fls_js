// Задача 8. Дано масив студентів (піб, курс, факультет).
// Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

const studentsArray = [
    { name: "John Doe", year: 2, faculty: "Engineering" },
    { name: "Alice Smith", year: 1, faculty: "Science" },
    { name: "Bob Johnson", year: 3, faculty: "Engineering" },
    { name: "Emily Brown", year: 2, faculty: "Arts" },
    { name: "Michael Wilson", year: 1, faculty: "Science" },
    { name: "Emma Lee", year: 3, faculty: "Arts" },
    { name: "William Taylor", year: 2, faculty: "Engineering" },
    { name: "Olivia Martinez", year: 1, faculty: "Science" },
    { name: "James Anderson", year: 3, faculty: "Arts" },
];

console.log("Number of different faculties");


let countOfDifferentFaculties = new Map()

for (const student of studentsArray) {
    let elCount = countOfDifferentFaculties.get(student.faculty) || 1
    countOfDifferentFaculties.set(student.faculty, elCount)
}
console.log(countOfDifferentFaculties);
// =============================================================================

console.log("The number of students of each of the courses");

let countStudentsInCourses = new Map()

for (const student of studentsArray) {
    let elCount = countStudentsInCourses.get(student.faculty) || 0
    countStudentsInCourses.set(student.faculty, elCount + 1)
}
console.log(countStudentsInCourses);