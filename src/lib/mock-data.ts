
import type { PastPaperQuestion, Quiz, InterviewQuestion, PsychTest, SubjectWiseQuestion } from './types';

export const pastPaperQuestions: PastPaperQuestion[] = [
  // Compulsory
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
  {
    id: 'pp-eng-essay-2023-1',
    year: 2023,
    subject: 'English Essay',
    questionText: 'Write a comprehensive essay on: "Boys will be boys. A justification for toxic masculinity?"',
    idealAnswer: 'The essay should deconstruct the phrase "boys will be boys" as a cultural artifact that often excuses harmful behaviors under the guise of innate male nature. It should argue that this phrase perpetuates toxic masculinity, which is a narrow and repressive description of manhood, characterized by violence, dominance, emotional illiteracy, and misogyny. The essay should explore the societal impacts of this mindset, linking it to issues like domestic violence, mental health crises in men, and systemic gender inequality. A strong essay would also propose a counter-narrative, advocating for a healthier, more diverse understanding of masculinity that allows for emotional expression, empathy, and respect for all genders. It should conclude that far from being a justification, the phrase is a significant social problem that requires critical examination and dismantling.',
  },
  {
    id: 'pp-eng-precis-2023-1',
    year: 2023,
    subject: 'English (Precis and Composition)',
    questionText: 'Make a precis of the following passage and suggest a suitable title.',
    idealAnswer: 'The ideal answer would consist of a concise summary of the provided (hypothetical) passage, capturing its main points in about one-third of the original length. It must be in the candidate\'s own words, coherent, and well-connected. A suitable title that encapsulates the essence of the passage should also be provided.',
  },
   {
    id: 'pp-gs-2021-1',
    year: 2021,
    subject: 'General Science & Ability',
    questionText: 'What is the difference between climate and weather?',
    idealAnswer: 'Weather refers to short-term atmospheric conditions in a specific location, including temperature, humidity, precipitation, and wind. Climate, on the other hand, is the long-term average of weather patterns in a region over a period of 30 years or more. In short, climate is what you expect, and weather is what you get.',
  },

  // Optional Subjects
  {
    id: 'pp-polsci-2021-1',
    year: 2021,
    subject: 'Political Science',
    questionText: 'Compare and contrast the political philosophies of Plato and Aristotle.',
    idealAnswer: 'Plato\'s political philosophy, as outlined in "The Republic," is idealistic and based on the concept of the philosopher-king and the ideal state. Aristotle, his student, offers a more pragmatic approach in "Politics," based on the study of existing constitutions. While Plato emphasizes a top-down, rationalist model of governance, Aristotle focuses on the rule of law, the importance of the middle class, and classifies states into different types (monarchy, aristocracy, polity). Aristotle\'s focus on empirical observation versus Plato\'s abstract reasoning forms the core difference between their political thoughts.',
  },
  {
    id: 'pp-ir-2022-1',
    year: 2022,
    subject: 'International Relations',
    questionText: 'Explain the core tenets of Realism in International Relations theory.',
    idealAnswer: 'Realism is a theory of International Relations that views the world as a competitive and anarchic system where states are the primary actors. Its core tenets are: 1) Statism: States are the main actors in the international system. 2) Survival: The primary goal of every state is survival, which drives their actions. 3) Self-help: In an anarchic system with no higher authority, states must rely on their own resources and power to ensure their security. Realists believe that international politics is a struggle for power and security, and conflict is an inevitable feature.',
  },
  {
    id: 'pp-criminology-2023-1',
    year: 2023,
    subject: 'Criminology',
    questionText: 'Discuss the Social Disorganization Theory and its relevance to crime in urban areas.',
    idealAnswer: 'Social Disorganization Theory suggests that a person\'s residential location is a more significant factor in shaping criminal activity than their personal characteristics. It posits that neighborhoods with high rates of poverty, population turnover, and ethnic heterogeneity are less able to exert social control, leading to higher crime rates. This theory is highly relevant for understanding crime in urban areas where such conditions are often concentrated, helping policymakers focus on community-level interventions rather than just individual-level enforcement.',
  },
  {
    id: 'pp-gender-2022-1',
    year: 2022,
    subject: 'Gender Studies',
    questionText: 'What is meant by "the glass ceiling"? Discuss its impact on women in the corporate world.',
    idealAnswer: 'The "glass ceiling" is a metaphor for the invisible barriers that prevent women and minorities from advancing to senior leadership positions within an organization. It is not a formal barrier but a complex web of cultural norms, stereotypes, and biases. Its impact is significant, leading to a lack of female representation in boardrooms and executive roles, a persistent gender pay gap at senior levels, and the underutilization of a talented portion of the workforce. It discourages ambitious women and reinforces gender inequality in the professional sphere.',
  },
  {
    id: 'pp-econ-2023-1',
    year: 2023,
    subject: 'Economics',
    questionText: 'Explain the concept of fiscal deficit and its implications for a developing country like Pakistan.',
    idealAnswer: 'Fiscal deficit is the difference between the government\'s total expenditure and its total revenues (excluding borrowings). A high fiscal deficit implies that the government is spending beyond its means. For a developing country like Pakistan, persistent high fiscal deficits can lead to increased public debt, higher inflation due to deficit financing (printing more money), and crowding out of private investment as the government borrows heavily from the domestic market, driving up interest rates. While some deficit spending on development projects can be beneficial, chronic deficits pose a significant risk to macroeconomic stability.',
  },
  {
    id: 'pp-cs-2022-1',
    year: 2022,
    subject: 'Computer Science',
    questionText: 'Explain the OSI model and its seven layers.',
    idealAnswer: 'The Open Systems Interconnection (OSI) model is a conceptual framework used to understand and standardize the functions of a telecommunication or computing system in seven layers. These layers are: 1. Physical Layer (deals with hardware, cabling), 2. Data Link Layer (manages node-to-node data transfer, error correction), 3. Network Layer (handles routing and logical addressing, IP), 4. Transport Layer (provides reliable data transfer, TCP/UDP), 5. Session Layer (manages sessions between applications), 6. Presentation Layer (translates, encrypts, and compresses data), and 7. Application Layer (provides services for user applications, HTTP, FTP).',
  },
  {
    id: 'pp-physics-2023-1',
    year: 2023,
    subject: 'Physics',
    questionText: 'State and explain Newton\'s three laws of motion. Provide a real-world example for each.',
    idealAnswer: 'Newton\'s First Law (Inertia): An object remains at rest or in uniform motion unless acted upon by a net external force. Example: A passenger in a moving bus lurches forward when the bus suddenly stops. Second Law (F=ma): The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. Example: It is easier to push an empty shopping cart than a full one. Third Law: For every action, there is an equal and opposite reaction. Example: A rocket expels gas downwards (action) to propel itself upwards (reaction).',
  },
  {
    id: 'pp-chem-2021-1',
    year: 2021,
    subject: 'Chemistry',
    questionText: 'What is a chemical bond? Differentiate between ionic and covalent bonds with examples.',
    idealAnswer: 'A chemical bond is a lasting attraction between atoms, ions or molecules that enables the formation of chemical compounds. An ionic bond involves the complete transfer of valence electrons between atoms, creating a positively charged ion (cation) and a negatively charged ion (anion) that are attracted to each other. Example: Sodium Chloride (NaCl). A covalent bond involves the sharing of electron pairs between atoms. These shared pairs are known as shared pairs or bonding pairs. Example: Water (H2O).',
  },
  {
    id: 'pp-pubad-2022-1',
    year: 2022,
    subject: 'Public Administration',
    questionText: 'Discuss Max Weber\'s theory of bureaucracy. What are its key characteristics?',
    idealAnswer: 'Max Weber\'s theory of bureaucracy describes an ideal form of organization characterized by rationality, efficiency, and impersonality. Its key characteristics include: 1) A clear hierarchical structure. 2) Division of labor and specialization of tasks. 3) A formal set of rules and procedures. 4) Impersonality in the application of rules. 5) Employment and promotion based on technical competence and merit. While efficient, Weber also warned that bureaucracy could lead to a dehumanizing "iron cage" of rational control.',
  },
  {
    id: 'pp-hist-usa-2021-1',
    year: 2021,
    subject: 'History of USA',
    questionText: 'Analyze the causes and consequences of the American Civil War (1861-1865).',
    idealAnswer: 'The primary cause of the American Civil War was the institution of slavery, particularly its extension into western territories. This was intertwined with deep economic differences between the industrial North and the agrarian South, as well as political disputes over states\' rights versus federal power. The consequences were profound: the abolition of slavery via the 13th Amendment, the preservation of the Union, and a period of Reconstruction aimed at reintegrating the Southern states. The war also led to immense loss of life and devastation in the South, leaving deep social and racial scars that persist to this day.',
  },
  {
    id: 'pp-intlaw-2023-1',
    year: 2023,
    subject: 'International Law',
    questionText: 'What are the primary sources of International Law as defined in Article 38(1) of the Statute of the International Court of Justice?',
    idealAnswer: 'Article 38(1) of the ICJ Statute identifies four primary sources of international law: 1) International conventions (treaties), whether general or particular, establishing rules expressly recognized by the contesting states. 2) International custom, as evidence of a general practice accepted as law. 3) The general principles of law recognized by civilized nations. 4) As a subsidiary means, judicial decisions and the teachings of the most highly qualified publicists of the various nations.',
  },
  {
    id: 'pp-sociology-2022-1',
    year: 2022,
    subject: 'Sociology',
    questionText: 'Explain Karl Marx\'s theory of class struggle.',
    idealAnswer: 'Karl Marx\'s theory of class struggle, central to his conflict theory, posits that society is divided into two main classes: the bourgeoisie (the owners of the means of production) and the proletariat (the working class). He argued that historical development is driven by the conflict between these classes. The bourgeoisie exploits the proletariat by extracting surplus value from their labor. Marx believed this inherent conflict would eventually lead to a proletariat revolution, overthrowing the capitalist system and establishing a classless, socialist society.',
  }
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

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 'iq-gk-1',
    category: 'General Knowledge',
    questionText: 'What is the capital of Australia?',
    suggestedAnswer: 'The capital of Australia is Canberra. Many people mistakenly think it\'s Sydney or Melbourne, which are larger cities, but Canberra was chosen as a compromise between the two rivals in 1908.',
  },
  {
    id: 'iq-ca-1',
    category: 'Current Affairs',
    questionText: 'Discuss the significance of the CPEC project for Pakistan\'s economy.',
    suggestedAnswer: 'The China-Pakistan Economic Corridor (CPEC) is a massive infrastructure project that aims to connect Gwadar Port in Pakistan to China\'s Xinjiang province. Its significance lies in its potential to boost Pakistan\'s economy by improving infrastructure, enhancing regional connectivity, and attracting foreign investment. It includes energy projects, road and rail networks, and special economic zones, which are expected to create jobs and stimulate industrial growth. However, there are also challenges such as security concerns and ensuring equitable distribution of benefits.',
  },
  {
    id: 'iq-p-1',
    category: 'Personality',
    questionText: 'Tell me about a time you faced a major setback. How did you handle it?',
    suggestedAnswer: 'This question assesses resilience and problem-solving skills. A good answer would follow the STAR method (Situation, Task, Action, Result). For example: "In my previous project (Situation), we faced an unexpected budget cut which threatened our timeline (Task). I took the initiative to re-evaluate our resource allocation, identified non-essential spending, and proposed a revised plan to the team that focused on core deliverables (Action). As a result, we were able to complete the project on time and within the new budget, and it taught me the importance of adaptability (Result)." The focus should be on being proactive and learning from the experience.',
  },
   {
    id: 'iq-gk-2',
    category: 'General Knowledge',
    questionText: 'Who wrote the book "1984"?',
    suggestedAnswer: 'The dystopian novel "1984" was written by the English author George Orwell, and it was published in 1949. It explores themes of totalitarianism, mass surveillance, and the manipulation of truth.',
  },
];


export const psychTest: PsychTest = {
  id: 'psych-test-1',
  title: 'Personality Assessment Simulation',
  mcqs: [
    {
      id: 'mcq-1',
      questionText: 'When faced with a difficult problem, I am more likely to:',
      options: [
        { text: 'Analyze it logically and systematically.', value: 'analytical' },
        { text: 'Trust my intuition and gut feeling.', value: 'intuitive' },
        { text: 'Collaborate with others to find a solution.', value: 'collaborative' },
        { text: 'Take immediate action and learn as I go.', value: 'action-oriented' },
      ],
    },
    {
      id: 'mcq-2',
      questionText: 'In a team setting, I prefer to:',
      options: [
        { text: 'Lead the discussion and delegate tasks.', value: 'leader' },
        { text: 'Listen to all viewpoints before speaking.', value: 'listener' },
        { text: 'Focus on my assigned tasks independently.', value: 'independent' },
        { text: 'Mediate disagreements and build consensus.', value: 'mediator' },
      ],
    },
    {
      id: 'mcq-3',
      questionText: 'I feel most energized when I am:',
      options: [
        { text: 'Solving complex, abstract problems.', value: 'problem-solver' },
        { text: 'Interacting with a large group of people.', value: 'extrovert' },
        { text: 'Working on a creative and original project.', value: 'creative' },
        { text: 'In a quiet space, reflecting on my thoughts.', value: 'introvert' },
      ],
    },
  ],
  sentenceCompletions: [
    { id: 'sc-1', prompt: 'I am at my best when...' },
    { id: 'sc-2', prompt: 'If I could change one thing about myself, it would be...' },
    { id: 'sc-3', prompt: 'My biggest fear is...' },
    { id: 'sc-4', prompt: 'I feel successful when...' },
  ],
};

export const subjectWiseQuestions: SubjectWiseQuestion[] = [
  // Compulsory Subjects
  {
    id: 'swq-pa-1',
    subject: 'Pakistan Affairs',
    topic: 'Geography',
    difficulty: 'Easy',
    questionText: 'Name the five rivers of Punjab.',
    idealAnswer: 'The five rivers of Punjab are Jhelum, Chenab, Ravi, Sutlej, and Beas. The name "Punjab" itself means "Land of Five Waters" in Persian.',
  },
  {
    id: 'swq-pa-2',
    subject: 'Pakistan Affairs',
    topic: 'Post-Independence History',
    difficulty: 'Medium',
    questionText: 'What was the Objective Resolution and why is it significant in Pakistan\'s constitutional history?',
    idealAnswer: 'The Objective Resolution was passed by the Constituent Assembly of Pakistan in March 1949. It is significant because it laid down the framework and principles for the future constitution of Pakistan, blending Islamic principles with modern democratic ideals. It declared that sovereignty over the entire universe belongs to Allah Almighty alone, and the authority to be exercised by the people of Pakistan within the limits prescribed by Him is a sacred trust. It has been the preamble to all of Pakistan\'s constitutions.',
  },
  {
    id: 'swq-is-1',
    subject: 'Islamic Studies',
    topic: 'Pillars of Islam',
    difficulty: 'Easy',
    questionText: 'Explain the concept of Zakat.',
    idealAnswer: 'Zakat, one of the Five Pillars of Islam, is the obligatory purification of wealth through charity. It is a mandatory annual donation of a certain percentage (usually 2.5%) of a Muslim\'s net worth to the poor and needy. It serves to purify the wealth of the giver, prevent hoarding, and reduce economic inequality within the community, fostering a sense of social responsibility.',
  },
  {
    id: 'swq-ca-1',
    subject: 'Current Affairs',
    topic: 'International Relations',
    difficulty: 'Hard',
    questionText: 'Analyze the impact of the Russia-Ukraine war on global energy markets.',
    idealAnswer: 'The Russia-Ukraine war has profoundly disrupted global energy markets. Sanctions against Russia, a major oil and gas exporter, have led to significant price volatility and supply chain disruptions. European countries, heavily reliant on Russian gas, have scrambled to find alternative sources, accelerating the transition towards renewable energy but also causing short-term energy crises. The conflict has highlighted the geopolitical weaponization of energy and forced a global reassessment of energy security strategies, leading to increased investment in LNG infrastructure and a renewed focus on energy diversification.',
  },
  {
    id: 'swq-eng-precis-1',
    subject: 'English (Precis & Composition)',
    topic: 'Precis Writing',
    difficulty: 'Medium',
    questionText: 'What are the key qualities of a good precis?',
    idealAnswer: 'A good precis must be clear, concise, and comprehensive. It should capture the essential ideas of the original passage accurately, without omitting important points or adding new information. It must be written in the writer\'s own words and should be about one-third the length of the original. A suitable title is also necessary.',
  },
   {
    id: 'swq-eng-essay-1',
    subject: 'English Essay',
    topic: 'Argumentative Essay',
    difficulty: 'Hard',
    questionText: 'Discuss the pros and cons of social media.',
    idealAnswer: 'A balanced answer would discuss the benefits of social media, such as global connectivity, information dissemination, and social movements, while also critically examining its drawbacks, including mental health issues (anxiety, depression), the spread of misinformation, privacy concerns, and cyberbullying. The ideal answer would use specific examples and provide a nuanced conclusion rather than a one-sided judgment.',
  },
  {
    id: 'swq-gs-1',
    subject: 'General Science & Ability',
    topic: 'Basic Science',
    difficulty: 'Easy',
    questionText: 'What is photosynthesis?',
    idealAnswer: 'Photosynthesis is the process used by plants, algae, and some bacteria to convert light energy into chemical energy, through a process that converts carbon dioxide and water into glucose (sugar) and oxygen.',
  },

  // Optional Subjects (Group I)
  {
    id: 'swq-acc-1',
    subject: 'Accountancy & Auditing',
    topic: 'Basic Principles',
    difficulty: 'Easy',
    questionText: 'What are the fundamental accounting principles?',
    idealAnswer: 'The fundamental accounting principles, often referred to as GAAP (Generally Accepted Accounting Principles), include concepts like the cost principle, matching principle, full disclosure principle, revenue recognition principle, and the principle of conservatism. These principles ensure that financial statements are consistent, comparable, and reliable.',
  },
  {
    id: 'swq-econ-1',
    subject: 'Economics',
    topic: 'Macroeconomics',
    difficulty: 'Medium',
    questionText: 'Explain the difference between monetary and fiscal policy.',
    idealAnswer: 'Monetary policy, typically managed by a central bank, involves controlling the money supply and interest rates to manage inflation and stabilize the economy. Fiscal policy is managed by the government and involves the use of government spending and taxation to influence the economy. For example, cutting taxes is a fiscal policy tool, while raising interest rates is a monetary policy tool.',
  },
  {
    id: 'swq-cs-1',
    subject: 'Computer Science',
    topic: 'Databases',
    difficulty: 'Medium',
    questionText: 'What is the difference between SQL and NoSQL databases?',
    idealAnswer: 'SQL (Structured Query Language) databases are relational, meaning they organize data in tables with predefined schemas. They are best for applications requiring structured data and complex queries. Examples include MySQL and PostgreSQL. NoSQL databases are non-relational and have dynamic schemas, making them flexible for unstructured data. They excel in scalability and performance for large datasets. Examples include MongoDB and Cassandra.',
  },
  {
    id: 'swq-polsci-1',
    subject: 'Political Science',
    topic: 'Political Philosophy',
    difficulty: 'Medium',
    questionText: 'Define the concept of "State" and its essential elements.',
    idealAnswer: 'A state is a political organization that maintains a monopoly on the legitimate use of force within a specific territory. The essential elements of a state are: 1) Population, 2) Territory with defined borders, 3) Government to administer the state, and 4) Sovereignty, meaning supreme and independent authority.',
  },
  {
    id: 'swq-ir-1',
    subject: 'International Relations',
    topic: 'Theories',
    difficulty: 'Hard',
    questionText: 'Differentiate between Liberalism and Realism in International Relations.',
    idealAnswer: 'Realism views the international system as anarchic, with states as the primary actors driven by self-interest and a struggle for power and survival. Conflict is seen as inevitable. Liberalism, on the other hand, is more optimistic, emphasizing cooperation, international institutions (like the UN), economic interdependence, and the promotion of democracy to mitigate conflict and achieve collective security.',
  },

  // Optional Subjects (Group II)
  {
    id: 'swq-physics-1',
    subject: 'Physics',
    topic: 'Classical Mechanics',
    difficulty: 'Medium',
    questionText: 'Explain the principle of conservation of energy.',
    idealAnswer: 'The principle of conservation of energy states that energy cannot be created or destroyed, but only changed from one form to another. The total energy of an isolated system remains constant. For example, when a ball is dropped, its potential energy is converted into kinetic energy as it falls, but the total energy remains the same (ignoring air resistance).',
  },
  {
    id: 'swq-chem-1',
    subject: 'Chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'Medium',
    questionText: 'What is a hydrocarbon? Name two types.',
    idealAnswer: 'A hydrocarbon is an organic compound consisting entirely of hydrogen and carbon atoms. The two main types are alkanes, which have single bonds (e.g., methane), and alkenes, which have at least one carbon-carbon double bond (e.g., ethene).',
  },

  // Optional Subjects (Group III)
  {
    id: 'swq-pubad-1',
    subject: 'Public Administration',
    topic: 'Theories',
    difficulty: 'Medium',
    questionText: 'What is New Public Management (NPM)?',
    idealAnswer: 'New Public Management (NPM) is an approach to running public service organizations that is used in government and public service institutions and agencies. It advocates for the public sector to adopt practices from the private sector, such as a focus on efficiency, performance measurement, decentralization, and a customer-oriented approach to service delivery.',
  },

  // Optional Subjects (Group IV)
  {
    id: 'swq-hist-pakindia-1',
    subject: 'History of Pakistan & India',
    topic: 'Mughal Empire',
    difficulty: 'Medium',
    questionText: 'Briefly describe the administrative reforms of Sher Shah Suri.',
    idealAnswer: 'Sher Shah Suri\'s administrative reforms were highly influential. He introduced a standardized currency (the silver rupiya), improved the road system (notably the Grand Trunk Road), established a postal service, and reorganized the land revenue system based on measurement and classification of land, which later influenced the Mughal and British systems.',
  },
   {
    id: 'swq-history-usa-1',
    subject: 'History of USA',
    topic: 'American Revolution',
    difficulty: 'Medium',
    questionText: 'What were the main causes of the American Revolution?',
    idealAnswer: 'The main causes included "taxation without representation," where colonists protested against taxes imposed by the British Parliament without their consent (e.g., the Stamp Act, Townshend Acts). Philosophical ideas from the Enlightenment about liberty and rights, coupled with restrictive British policies like the Proclamation of 1763, fueled a desire for independence.',
  },

  // Optional Subjects (Group V)
  {
    id: 'swq-gender-1',
    subject: 'Gender Studies',
    topic: 'Feminist Theories',
    difficulty: 'Medium',
    questionText: 'What is the core idea behind Liberal Feminism?',
    idealAnswer: 'Liberal Feminism focuses on achieving gender equality through legal and political reforms within the existing system. It advocates for equal opportunities for women in areas like education, employment, and political participation. Unlike more radical forms of feminism, it does not seek to overthrow the entire patriarchal structure but rather to reform it to ensure women have the same rights and freedoms as men.',
  },
   {
    id: 'swq-envsci-1',
    subject: 'Environmental Sciences',
    topic: 'Climate Change',
    difficulty: 'Easy',
    questionText: 'What is the greenhouse effect?',
    idealAnswer: 'The greenhouse effect is a natural process that warms the Earth\'s surface. When the Sun\'s energy reaches the Earth’s atmosphere, some of it is reflected back to space and the rest is absorbed and re-radiated by greenhouse gases (like CO2, methane). This absorption and re-radiation process traps heat, keeping the Earth warmer than it would be otherwise.',
  },

  // Optional Subjects (Group VI)
  {
    id: 'swq-intlaw-1',
    subject: 'International Law',
    topic: 'Sources of Law',
    difficulty: 'Hard',
    questionText: 'What is the concept of "jus cogens" in international law?',
    idealAnswer: 'Jus cogens refers to peremptory norms of general international law that are recognized by the international community as norms from which no derogation is permitted. These are fundamental principles that are considered to have a higher status than other norms. Examples include prohibitions against genocide, piracy, slavery, and torture.',
  },
  {
    id: 'swq-criminology-1',
    subject: 'Criminology',
    topic: 'Theories of Crime',
    difficulty: 'Hard',
    questionText: 'Explain the "Broken Windows" theory of criminology.',
    idealAnswer: 'The "Broken Windows" theory, proposed by James Q. Wilson and George L. Kelling, posits that visible signs of crime, anti-social behavior, and civil disorder (like broken windows, graffiti, and public drinking) create an urban environment that encourages further, more serious crime. The theory suggests that policing methods that target minor crimes help to create an atmosphere of order and lawfulness, thereby preventing more serious crimes from happening.',
  },

  // Optional Subjects (Group VII)
  {
    id: 'swq-sociology-1',
    subject: 'Sociology',
    topic: 'Social Institutions',
    difficulty: 'Easy',
    questionText: 'What is a social institution? Provide two examples.',
    idealAnswer: 'A social institution is a complex, integrated set of social norms, beliefs, and values organized into a relatively stable structure that meets the basic needs of a society. They are not physical buildings but established patterns of behavior. Examples include the family, which socializes children, and education, which transmits knowledge and skills across generations.',
  },
  {
    id: 'swq-geo-1',
    subject: 'Geography',
    topic: 'Physical Geography',
    difficulty: 'Easy',
    questionText: 'What causes the seasons on Earth?',
    idealAnswer: 'The seasons are caused by the tilt of the Earth\'s rotational axis (about 23.5 degrees) relative to its orbital plane around the Sun. This tilt means that different parts of the Earth receive more direct sunlight at different times of the year, leading to summer when a hemisphere is tilted towards the Sun and winter when it is tilted away.',
  },
  {
    id: 'swq-punjabi-1',
    subject: 'Punjabi',
    topic: 'Literature',
    difficulty: 'Medium',
    questionText: 'Who is considered the most famous poet of the Punjabi language, known for his epic "Heer Ranjha"?',
    idealAnswer: 'Waris Shah is widely considered the most famous poet of the Punjabi language. His rendition of the tragic romance "Heer Ranjha" is a classic of Punjabi literature, revered for its poetic beauty and profound commentary on society, love, and human nature.',
  }
];
