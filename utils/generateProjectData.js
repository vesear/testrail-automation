import { random } from "./generateRandomName.js";

const NAMES = ["Маша", "Паша", "Саша", "Таня", "Артём", "Гена", "Вася", "Петя"];

const SURNAMES = [
  "Жопская жопа",
  "Важный человек",
  "Волк по жизни",
  "Падла",
  "Педик",
  "Бандит",
  "Вор",
  "Ойтишник",
];

export function generateProjectData() {
  const actualName = random(NAMES);
  const actualSurname = random(SURNAMES);
  return NAMES[actualName] + " " + SURNAMES[actualSurname];
}
