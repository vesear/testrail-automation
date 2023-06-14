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

  const random = (param) => {
    return Math.floor(Math.random() * param.length);
  };

  const actualName = random(names);
  const actualSurname = random(surnames);
  return names[actualName] + " " + surnames[actualSurname];
}
