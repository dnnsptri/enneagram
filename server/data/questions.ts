import { Question, EnneagramType } from "./types";

export const questions: Question[] = [
  {
    id: 1,
    text: "Ik heb de neiging om veel na te denken voordat ik handel.",
    type: 5
  },
  {
    id: 2,
    text: "Ik vind het belangrijk om anderen te helpen.",
    type: 2
  },
  {
    id: 3,
    text: "Ik wil graag succesvol zijn en door anderen bewonderd worden.",
    type: 3
  },
  // Add more questions...
  {
    id: 36,
    text: "Ik voel me vaak onzeker en twijfel aan mezelf.",
    type: 6
  }
];

export const enneagramTypes: EnneagramType[] = [
  {
    id: 1,
    name: "De Perfectionist",
    description: "Ethisch en consciëntieus, met een sterk gevoel voor goed en fout.",
    strengths: ["Verantwoordelijk", "Verbeterend", "Ethisch"],
    weaknesses: ["Kritisch", "Perfectionistisch", "Oordelen"]
  },
  {
    id: 2,
    name: "De Helper",
    description: "Zorgzaam en interpersoonlijk, gericht op het helpen van anderen.",
    strengths: ["Zorgzaam", "Genereus", "Empathisch"],
    weaknesses: ["Manipulatief", "Possessief", "Indirect"]
  },
  // Add all 9 types...
];
