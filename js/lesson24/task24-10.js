// Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії.

// Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики.
// Також підрахувати скільки всього студентів відвідують хоча б один гурток.

const mathClub = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Miller", "Moore",];
const historyClub = ["Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Johnson",];

// Конвертуємо масиви в множини для оптимізації операцій з ними
const mathSet = new Set(mathClub);
const historySet = new Set(historyClub);

// Створюємо множину зі спільних елементів між гуртками з історії та математики
const commonStudents = historyClub.filter(student => mathSet.has(student));

// Загальна кількість унікальних студентів
const totalStudents = new Set([...mathClub, ...historyClub]).size;

console.log(`Number of students from the history club who also attend the math club: ${commonStudents.length}`);
console.log(`Number of students attending at least one club: ${totalStudents}`);

