export function generateProjectData() {
  const names = [
    "Маша",
    "Паша",
    "Саша",
    "Таня",
    "Артём",
    "Гена",
    "Вася",
    "Петя",
  ];
  const surnames = [
    "Жопская жопа",
    "Важный человек",
    "Волк по жизни",
    "Падла",
    "Педик",
    "Бандит",
    "Вор",
    "Ойтишник",
  ];

  const actualName = Math.floor(Math.random() * names.length);
  const actualSurname = Math.floor(Math.random() * surnames.length);

  return names[actualName] + " " + surnames[actualSurname];
}

const generateUniqueName = () => new Date().toISOString();
