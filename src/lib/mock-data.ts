import type { PastPaperQuestion, Quiz } from './types';

export const pastPaperQuestions: PastPaperQuestion[] = [
  {
    id: 'pp-is-2023-1',
    year: 2023,
    subject: 'Islamic Studies',
    questionText: 'Discuss the concept of Tauhid (Oneness of God) in Islam and its impact on a Muslim\'s life.',
    idealAnswer: 'Tauhid is the cornerstone of Islamic belief, signifying the absolute oneness and indivisibility of Allah. It comprises three aspects: Tauhid-ar-Rububiyah (Oneness of Lordship), Tauhid-al-Uluhiyah (Oneness of Worship), and Tauhid-al-Asma-was-Sifat (Oneness of Names and Attributes). This belief system shapes a Muslim\'s life by fostering a direct relationship with God, eliminating the fear of any other power, promoting humility, and ensuring a just and equitable society where all individuals are equal before their Creator. It serves as a source of immense peace and strength.',
  },
  {
    id: 'pp-pa-2023-2',
    year: 2023,
    subject: 'Pakistan Affairs',
    questionText: 'Analyze the causes of the 1971 separation of East Pakistan. What were the political, economic, and social factors involved?',
    idealAnswer: 'The separation of East Pakistan in 1971 was a culmination of long-standing grievances. Politically, the denial of the Awami League\'s electoral victory in 1970 was the immediate trigger, but issues of underrepresentation in governance existed since 1947. Economically, East Pakistan faced exploitation, with its resources benefiting the West wing while it remained underdeveloped. Socially and culturally, the imposition of Urdu as the national language sparked the Language Movement, creating a deep-seated linguistic and ethnic divide. Military action in March 1971 sealed the fate of a united Pakistan.',
  },
  {
    id: 'pp-ca-2022-1',
    year: 2022,
    subject: 'Current Affairs',
    questionText: 'What are the main challenges to global peace and security in the 21st century?',
    idealAnswer: 'The 21st century faces a complex web of challenges to global peace. These include the rise of non-state actors and terrorism, proliferation of weapons of mass destruction, persistent regional conflicts like those in the Middle East, the global refugee crisis, and the existential threat of climate change which acts as a threat multiplier. Furthermore, cyber warfare and the weaponization of information pose new, intangible threats to international stability. Addressing these requires unprecedented global cooperation and a re-imagining of collective security frameworks.',
  },
];

export const quizzes: Quiz[] = [
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
];
