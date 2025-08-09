
import type { Quiz } from '../types';

export const quizzesData: Quiz[] = [
  {
    id: 'quiz-pa-1',
    subject: 'Pakistan Affairs',
    questions: [
      {
        questionText: 'Who was the first Governor-General of Pakistan?',
        options: ['Liaquat Ali Khan', 'Muhammad Ali Jinnah', 'Allama Iqbal', 'Sir Syed Ahmed Khan'],
        correctAnswer: 'Muhammad Ali Jinnah',
      },
      {
        questionText: 'The Lahore Resolution was passed in which year?',
        options: ['1940', '1947', '1930', '1923'],
        correctAnswer: '1940',
      },
      {
        questionText: 'What is the national animal of Pakistan?',
        options: ['Tiger', 'Lion', 'Markhor', 'Snow Leopard'],
        correctAnswer: 'Markhor',
      },
       {
        questionText: 'Which mountain range is located in the north of Pakistan?',
        options: ['Andes', 'Rockies', 'Himalayas', 'Alps'],
        correctAnswer: 'Himalayas',
      },
      {
        questionText: 'Who wrote the national anthem of Pakistan?',
        options: ['Allama Iqbal', 'Faiz Ahmed Faiz', 'Hafeez Jalandhari', 'Josh Malihabadi'],
        correctAnswer: 'Hafeez Jalandhari',
      },
    ],
  },
  {
    id: 'quiz-is-1',
    subject: 'Islamic Studies',
    questions: [
      {
        questionText: 'How many pillars of Islam are there?',
        options: ['Four', 'Five', 'Six', 'Seven'],
        correctAnswer: 'Five',
      },
      {
        questionText: 'What is the first pillar of Islam?',
        options: ['Prayer (Salah)', 'Fasting (Sawm)', 'Faith (Shahada)', 'Charity (Zakat)'],
        correctAnswer: 'Faith (Shahada)',
      },
      {
        questionText: 'The Holy Quran was revealed to which prophet?',
        options: ['Prophet Ibrahim (A.S)', 'Prophet Musa (A.S)', 'Prophet Isa (A.S)', 'Prophet Muhammad (PBUH)'],
        correctAnswer: 'Prophet Muhammad (PBUH)',
      },
      {
        questionText: 'In which city is the Kaaba located?',
        options: ['Madina', 'Jerusalem', 'Makkah', 'Riyadh'],
        correctAnswer: 'Makkah',
      },
       {
        questionText: 'What is the name of the Islamic month of fasting?',
        options: ['Shawwal', 'Ramadan', 'Rajab', 'Dhul Hijjah'],
        correctAnswer: 'Ramadan',
      },
    ],
  },
  {
    id: 'quiz-gs-1',
    subject: 'General Science & Ability',
    questions: [
      {
        questionText: 'What is the chemical formula for water?',
        options: ['H2O2', 'CO2', 'H2O', 'NaCl'],
        correctAnswer: 'H2O',
      },
      {
        questionText: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctAnswer: 'Mars',
      },
      {
        questionText: 'The speed of light is approximately:',
        options: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '1,000,000 km/s'],
        correctAnswer: '300,000 km/s',
      },
    ],
  },
];
