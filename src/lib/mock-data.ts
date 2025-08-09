
import type { PastPaperQuestion, Quiz, InterviewQuestion, PsychTest, SubjectWiseQuestion } from './types';

export const pastPaperQuestions: PastPaperQuestion[] = [
  // Compulsory
  {
    id: 'pp-is-2023-1',
    year: 2023,
    subject: 'Islamic Studies',
    questionText: 'Discuss the concept of Tauhid (Oneness of God) in Islam and its impact on a Muslim\'s life.',
    idealAnswer: 'Tauhid is the cornerstone of Islamic belief, signifying the absolute oneness and indivisibility of Allah. It comprises three aspects: Tauhid-ar-Rubaubiyah (Oneness of Lordship), Tauhid-al-Uluhiyah (Oneness of Worship), and Tauhid-al-Asma-was-Sifat (Oneness of Names and Attributes). This belief system shapes a Muslim\'s life by fostering a direct relationship with God, eliminating the fear of any other power, promoting humility, and ensuring a just and equitable society where all individuals are equal before their Creator. It serves as a source of immense peace and strength.',
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
    id: 'pp-eng-essay-2019-1',
    year: 2019,
    subject: 'English Essay',
    questionText: 'Let there be more light in the corridors of worship places.',
    idealAnswer: 'This metaphorical essay should argue for religious tolerance, enlightenment, and the rejection of extremism within religious spaces. "Light" symbolizes knowledge, reason, and compassion, while "corridors of worship places" represent mosques, churches, temples, etc. The essay should contend that these places should be centers of peace and interfaith harmony, not sources of division and conflict. It would call for religious leaders and followers to focus on the humanistic and ethical core of their faiths, promoting critical thinking over blind dogma to combat radicalization and foster a more peaceful society.',
  },
  {
    id: 'pp-eng-essay-2019-2',
    year: 2019,
    subject: 'English Essay',
    questionText: 'New war fronts lie in economic zones.',
    idealAnswer: 'This essay should analyze the shift from traditional military warfare to modern economic warfare. It should argue that contemporary global conflicts are increasingly fought through economic means such as trade wars, sanctions, currency manipulation, and control over strategic resources and trade routes (like CPEC). The essay should provide examples of how major powers use economic tools to achieve geopolitical objectives, effectively turning economic zones into battlegrounds for influence and dominance. It should conclude that in the 21st century, economic strength is a primary determinant of national power and security.',
  },
  {
    id: 'pp-eng-essay-2019-3',
    year: 2019,
    subject: 'English Essay',
    questionText: 'Urdu literature and progressive movement.',
    idealAnswer: 'This essay should trace the history and impact of the Progressive Writers\' Movement on Urdu literature from the 1930s onwards. It should discuss the movement\'s core tenets, which were influenced by Marxism and a desire for social reform, anti-imperialism, and realism. The essay should mention key figures like Faiz Ahmed Faiz, Sajjad Zaheer, and Ismat Chughtai, and analyze how their work challenged traditional literary norms and addressed pressing social issues like poverty, inequality, and feudalism. It should conclude on the lasting legacy of the movement on the social consciousness of Urdu literature.',
  },
  {
    id: 'pp-eng-essay-2019-4',
    year: 2019,
    subject: 'English Essay',
    questionText: 'Art for peace.',
    idealAnswer: 'This essay should explore the role of art—including literature, music, painting, and film—as a medium for promoting peace and understanding. It should argue that art can transcend political and cultural divides, fostering empathy by sharing human stories and emotions. The essay can provide examples of how art has been used in conflict resolution, for social commentary against war, and to build bridges between communities. It should conclude that while art alone may not stop wars, it is a powerful tool for changing hearts and minds, which is the foundation of a lasting peace.',
  },
  {
    id: 'pp-eng-essay-2019-5',
    year: 2019,
    subject: 'English Essay',
    questionText: 'Truth is lived not taught.',
    idealAnswer: 'This philosophical essay should argue that true understanding and knowledge ("truth") come from experience and action, rather than from abstract teaching or dogma. It can draw upon existentialist and pragmatist philosophy. The essay should make the case that one can be taught many facts, but wisdom and authentic belief are forged through personal struggle, reflection, and the practical application of principles in one\'s life. It suggests that a lived truth is internalized and becomes part of one\'s being, which is far more profound than a passively accepted "taught" truth.',
  },
  {
    id: 'pp-eng-essay-2019-6',
    year: 2019,
    subject: 'English Essay',
    questionText: 'New Waves of feminism and our culture.',
    idealAnswer: 'This essay should analyze the impact of contemporary feminist movements (e.g., #MeToo, fourth-wave feminism) on Pakistani culture. It should discuss how these "new waves," often amplified by social media, are challenging traditional patriarchal norms and raising awareness about issues like workplace harassment, consent, and women\'s rights. The essay should explore both the positive impacts (empowerment, public discourse) and the cultural backlash or resistance these movements face. It requires a nuanced conclusion on the ongoing negotiation between modern feminist ideals and the cultural fabric of the society.',
  },
  {
    id: 'pp-eng-essay-2019-7',
    year: 2019,
    subject: 'English Essay',
    questionText: 'Democracy and illiteracy do not move together.',
    idealAnswer: 'This essay should argue that a thriving democracy requires an educated and informed citizenry. It should explain that illiteracy prevents people from understanding their rights and responsibilities, critically evaluating political candidates and policies, and participating meaningfully in the democratic process. An illiterate population is more susceptible to manipulation, populism, and demagoguery, which undermines democratic institutions. The essay should conclude that investment in education and literacy is not just a social good but a fundamental prerequisite for the success and stability of any democracy.',
  },
  {
    id: 'pp-eng-essay-2019-8',
    year: 2019,
    subject: 'English Essay',
    questionText: 'Sometimes we do not see what we see.',
    idealAnswer: 'This essay should explore the gap between perception and reality, and the role of cognitive biases, prejudices, and preconceived notions in shaping what we "see." It can delve into concepts from psychology and sociology to explain how our minds can filter or interpret information to fit our existing beliefs. The essay could argue for the importance of critical thinking, self-awareness, and empathy to see the world more clearly and objectively, moving beyond our initial, often flawed, perceptions.',
  },
  {
    id: 'pp-eng-essay-2019-9',
    year: 2019,
    subject: 'English Essay',
    questionText: 'Expanding information technology: a curse or blessing.',
    idealAnswer: 'This essay requires a balanced analysis of the impact of information technology. The "blessing" side should cover its benefits in communication, access to information, economic efficiency, and education. The "curse" side should discuss drawbacks like job displacement due to automation, the digital divide, privacy concerns, cybercrime, and the spread of misinformation. A strong conclusion would argue that IT is a powerful tool whose outcome as a curse or blessing depends entirely on how humanity chooses to manage and regulate it.',
  },
  {
    id: 'pp-eng-essay-2019-10',
    year: 2019,
    subject: 'English Essay',
    questionText: 'Classrooms decide the future of the nation.',
    idealAnswer: 'This essay should argue that the quality of education delivered in classrooms is the single most important factor in shaping a nation\'s future. It should discuss how classrooms are not just for imparting knowledge, but for inculcating values, fostering critical thinking, and nurturing the next generation of leaders, innovators, and responsible citizens. The essay can contrast the futures of nations that invest heavily in education with those that neglect it, concluding that a nation\'s economic prosperity, social cohesion, and democratic stability are all determined by the work done in its classrooms.',
  },
  {
    id: 'pp-eng-essay-2018-1',
    year: 2018,
    subject: 'English Essay',
    questionText: 'Real development should transform people’s lives, not just economic statistics.',
    idealAnswer: 'This essay should argue against a purely GDP-focused view of development. It should advocate for a more holistic approach, such as the Human Development Index (HDI), which includes factors like education, health, and standard of living. The essay should discuss how focusing only on economic statistics can mask deep inequalities and social problems. It should conclude that true development is about expanding human capabilities, freedoms, and well-being, leading to tangible improvements in the daily lives of all citizens, not just an increase in national income.',
  },
  {
    id: 'pp-eng-essay-2018-2',
    year: 2018,
    subject: 'English Essay',
    questionText: 'Higher Education in Pakistan: Ills and Remedies.',
    idealAnswer: 'The essay should identify the key problems in Pakistan\'s higher education sector, such as lack of funding, poor quality of research, outdated curricula, political interference, and a disconnect from industry needs. For remedies, it should propose increasing the education budget, promoting a culture of research and critical thinking, revising curricula to meet modern challenges, ensuring university autonomy, and strengthening university-industry linkages to improve graduate employability. The essay needs to be structured with clear problems and corresponding solutions.',
  },
  {
    id: 'pp-eng-essay-2018-3',
    year: 2018,
    subject: 'English Essay',
    questionText: 'Too many of us are not living our dreams because we are living our fears.',
    idealAnswer: 'This philosophical essay should explore the psychological barriers that prevent people from pursuing their passions. It should discuss common fears like fear of failure, fear of judgment, and fear of the unknown. The essay can draw on examples from psychology, literature, and real life to illustrate how these fears lead to a life of conformity and regret. The argument should be that overcoming these fears by embracing courage, self-belief, and resilience is essential for living a fulfilling and authentic life, thereby realizing one\'s dreams.',
  },
  {
    id: 'pp-eng-essay-2018-4',
    year: 2018,
    subject: 'English Essay',
    questionText: 'China – Pakistan Economic Corridor (CPEC) and its Socio-economic Implications for the Region and the World.',
    idealAnswer: 'A comprehensive essay on CPEC would cover its potential to boost Pakistan\'s economy through infrastructure development, energy projects, and job creation. It should also analyze the socio-economic implications, such as the impact on local communities, the environment, and national debt. On a regional and global scale, the essay should discuss CPEC\'s role in enhancing regional connectivity, its geopolitical significance as part of China\'s Belt and Road Initiative, and the strategic concerns it raises for other powers like the US and India.',
  },
  {
    id: 'pp-eng-essay-2018-5',
    year: 2018,
    subject: 'English Essay',
    questionText: 'Beware the barrenness of a busy life!',
    idealAnswer: 'This essay should be a critique of the modern obsession with being constantly busy. It should argue that a life filled with endless activity but lacking in meaningful pursuits, reflection, and relationships is ultimately empty or "barren." The essay can discuss the concepts of "busyness" as a status symbol and the negative impacts of a hyper-productive culture on mental health and creativity. It should advocate for the importance of mindfulness, leisure, and deep connections as essential components of a rich and meaningful life.',
  },
  {
    id: 'pp-eng-essay-2018-6',
    year: 2018,
    subject: 'English Essay',
    questionText: 'The Emerging Power of Social Media: Prospects and Problems.',
    idealAnswer: 'This essay requires a balanced analysis of social media. The "prospects" section should discuss its power to connect people, facilitate social and political movements (e.g., the Arab Spring), and democratize information. The "problems" section should cover issues like the spread of misinformation and hate speech, its negative impact on mental health, privacy concerns, and its role in political polarization. The conclusion should offer a nuanced perspective on how to harness the benefits of social media while mitigating its harms.',
  },
  {
    id: 'pp-eng-essay-2018-7',
    year: 2018,
    subject: 'English Essay',
    questionText: 'In the fight against terrorism and corruption, it is imperative not to compromise human rights and civil liberties.',
    idealAnswer: 'This argumentative essay should address the classic security vs. liberty debate. It should argue that while fighting terrorism and corruption is crucial, it must be done within the framework of the rule of law. The essay should explain how compromising human rights (e.g., through torture, extrajudicial killings, or mass surveillance) can be counterproductive, alienating populations and undermining the very democratic values the state claims to protect. It should conclude that a state\'s true strength lies in its ability to maintain security without sacrificing the fundamental rights of its citizens.',
  },
  {
    id: 'pp-eng-essay-2018-8',
    year: 2018,
    subject: 'English Essay',
    questionText: 'The threat of Global Warming and the ways to counter it.',
    idealAnswer: 'The essay should first establish the scientific consensus on global warming and its dire threats, such as extreme weather events, rising sea levels, and food insecurity. The second, and more substantial, part of the essay should focus on the solutions. This should include a discussion of international agreements (like the Paris Accord), national policies (such as carbon taxes and investment in renewables), technological innovations (like green energy), and the role of individual responsibility. It should emphasize the need for urgent, collective global action.',
  },
  {
    id: 'pp-eng-essay-2018-9',
    year: 2018,
    subject: 'English Essay',
    questionText: 'Will “Rule of law” always remain an impracticable myth in our country?',
    idealAnswer: 'This essay requires a critical analysis of the state of the rule of law in Pakistan. It should identify the challenges, such as corruption, a slow judicial system, elite capture, and the influence of powerful institutions. However, it should not be entirely pessimistic. The essay can also point to signs of hope, such as an increasingly assertive judiciary and a vibrant civil society. The conclusion should argue that while achieving perfect rule of law is a continuous struggle, it is not an impracticable myth but a necessary goal that requires persistent institutional reforms and political will.',
  },
  {
    id: 'pp-eng-essay-2018-10',
    year: 2018,
    subject: 'English Essay',
    questionText: 'Democracy in Pakistan: Hopes and Hurdles.',
    idealAnswer: 'A well-structured essay on this topic would outline the "hurdles" to democracy in Pakistan, such as a history of military interventions, weak political institutions, feudalism, and political polarization. The "hopes" section should focus on positive developments like the completion of successive democratic terms, a more independent judiciary, a free media, and growing public awareness. The essay should conclude that despite the significant challenges, the democratic process in Pakistan is resilient and gradually maturing.',
  },
   {
    id: 'pp-eng-essay-2017-1',
    year: 2017,
    subject: 'English Essay',
    questionText: 'Is colonial mentality impeding Pakistan’s progress?',
    idealAnswer: 'This essay should critically analyze how colonial legacies—such as bureaucratic structures, educational systems, and cultural attitudes—continue to affect Pakistan\'s development. It should argue whether these inherited systems create a "colonial mentality" characterized by a lack of indigenous innovation, dependency, and a disconnect between the ruling elite and the masses. The essay should present evidence from political, social, and economic spheres to support its argument, concluding with a judgment on the extent to which this mentality hinders national progress and what can be done to overcome it.',
  },
  {
    id: 'pp-eng-essay-2017-2',
    year: 2017,
    subject: 'English Essay',
    questionText: 'Brexit means globalization is the rhetoric of the privileged, and capitalism will return ferociously as ever.',
    idealAnswer: 'This essay requires an analysis of Brexit as a symptom of a backlash against globalization. It should argue that for many, the benefits of globalization (e.g., free movement of labor, goods) have not been evenly distributed, leading to feelings of disenfranchisement. The essay could explore whether Brexit signals a return to more protectionist, nationalistic forms of capitalism. A strong argument would consider both the economic and cultural dimensions of this shift, questioning whether this is a temporary setback for globalization or a fundamental change in the world order.',
  },
  {
    id: 'pp-eng-essay-2017-3',
    year: 2017,
    subject: 'English Essay',
    questionText: 'More and more International military engagements by the United Nations; is the world moving towards peace?',
    idealAnswer: 'The essay should evaluate the effectiveness of UN peacekeeping missions and other military interventions. It needs to weigh the successes (e.g., preventing genocides, stabilizing post-conflict regions) against the failures (e.g., Srebrenica, Rwanda) and controversies. The essay should discuss the complexities and challenges of international military engagements, such as national sovereignty, the interests of major powers in the Security Council, and the difficulty of nation-building. It should conclude with a nuanced assessment of whether these engagements, despite their flaws, are a net positive for global peace or if they represent something else.',
  },
  {
    id: 'pp-eng-essay-2017-4',
    year: 2017,
    subject: 'English Essay',
    questionText: 'Modernity is an unending project.',
    idealAnswer: 'This philosophical essay should explore the concept of modernity, not as a finished historical period, but as an ongoing process of social, cultural, and intellectual transformation. It could draw on theorists like Habermas. The essay should discuss key features of modernity, such as rationalism, individualism, and the belief in progress, and argue how these continue to evolve. It can explore the challenges and critiques of modernity (e.g., from postmodernism) but ultimately argue that the core project of self-reflection and societal improvement is inherent to the human condition and therefore unending.',
  },
  {
    id: 'pp-eng-essay-2017-5',
    year: 2017,
    subject: 'English Essay',
    questionText: 'Feminism is not really a Third World issue.',
    idealAnswer: 'This provocative topic requires a strong rebuttal. The essay must argue that feminism is not only a relevant but an essential issue for the "Third World" or Global South. It should dismantle the misconception that feminism is a purely Western concept by highlighting indigenous feminist movements and the specific struggles women face in these regions, such as access to education, economic exploitation, political underrepresentation, and patriarchal violence. The essay should argue that while the context may differ, the core pursuit of gender equality is universal and vital for the development of these nations.',
  },
  {
    id: 'pp-eng-essay-2017-6',
    year: 2017,
    subject: 'English Essay',
    questionText: 'Literature is a lonely planet of idealists.',
    idealAnswer: 'This essay should explore the role of literature and the writer in society. It could argue that while writers (the idealists) often work in solitude to create their vision of the world, literature itself is not isolated. It connects people across time and space, fosters empathy, and often serves as a powerful tool for social and political commentary. The essay can discuss how literature, while born from a "lonely planet," has the power to create communities, challenge the status quo, and inspire real-world change, thus proving its deep connection to society.',
  },
  {
    id: 'pp-eng-essay-2017-7',
    year: 2017,
    subject: 'English Essay',
    questionText: 'Being a minority is a fate no one wants. Can nationalism be really inclusive?',
    idealAnswer: 'This essay should examine the relationship between minority rights and nationalism. The first part should discuss the challenges and discrimination minorities often face within a nation-state. The second, more crucial part should explore whether nationalism, which often emphasizes a majority culture or ethnicity, can ever be truly inclusive of minorities. It should contrast exclusive, ethnic nationalism with inclusive, civic nationalism. The essay could use examples from different countries to argue that while inclusive nationalism is theoretically possible, it requires strong constitutional protections, a commitment to multiculturalism, and a constant struggle against majoritarian impulses.',
  },
  {
    id: 'pp-eng-essay-2017-8',
    year: 2017,
    subject: 'English Essay',
    questionText: 'Ideologies thrive on notions of resistance, yet change is a simulation.',
    idealAnswer: 'This is a deeply philosophical topic. The essay should analyze how powerful ideologies (e.g., Marxism, nationalism) are often built on resisting an opposing force (e.g., capitalism, colonialism). However, it should then critically question the nature of the "change" these ideologies bring. It could argue, perhaps from a postmodern or Baudrillardian perspective, that many revolutionary changes only replace one power structure with another, simulating fundamental change while preserving underlying systems of control. The essay requires a sophisticated argument about power, ideology, and the nature of social transformation.',
  },
  {
    id: 'pp-eng-essay-2017-9',
    year: 2017,
    subject: 'English Essay',
    questionText: 'Are modern wars not holy wars?',
    idealAnswer: 'This essay should compare and contrast traditional holy wars (crusades, jihads) with modern conflicts. It could argue that while modern wars are often framed in secular terms (e.g., security, democracy, resources), they can still possess a quasi-religious or ideological fervor. The essay can explore how nationalism, political ideologies, or even the "war on terror" can function like a religion, demanding absolute belief, demonizing the enemy, and justifying extreme violence. It should conclude with a nuanced view on how the language and conviction of "holiness" or absolute righteousness still drive conflict today.',
  },
  {
    id: 'pp-eng-essay-2017-10',
    year: 2017,
    subject: 'English Essay',
    questionText: 'Life without controversy is no life. But why one should not choose the safe haven of conformism?',
    idealAnswer: 'This essay is about individualism versus conformity. It should first acknowledge the appeal of conformism—safety, acceptance, and an easy life. It should then build a strong argument for why a life of non-conformity and embracing controversy is more meaningful. It can draw on examples from history, science, and art where progress was only made by those who dared to challenge the status quo. The essay should argue that personal growth, intellectual development, and societal advancement all depend on the courage to think differently and stand by one\'s convictions, even if it leads to controversy.',
  },
  {
    id: 'pp-eng-essay-2016-1',
    year: 2016,
    subject: 'English Essay',
    questionText: 'World as a global village: Learning to live together.',
    idealAnswer: 'A comprehensive essay on this topic would explore the concept of globalization and its effects on cultural, economic, and social integration. It should discuss both the opportunities (e.g., shared knowledge, economic growth) and challenges (e.g., cultural homogenization, inequality) of an interconnected world. The essay should argue for the importance of multiculturalism, tolerance, and international cooperation as essential for peaceful coexistence. It should be well-structured with a clear introduction, body paragraphs with supporting examples, and a strong conclusion.',
  },
  {
    id: 'pp-eng-essay-2016-2',
    year: 2016,
    subject: 'English Essay',
    questionText: 'We have to learn to be our own best friends, because we fall too easily into the trap of being our own worst enemies.',
    idealAnswer: 'This essay requires a deep, introspective discussion on self-esteem, self-criticism, and personal growth. It should explore the psychological tendencies that lead to self-sabotage, such as negative self-talk, perfectionism, and fear of failure. The argument should focus on the importance of self-compassion, self-awareness, and resilience in overcoming these tendencies. The essay could draw on psychological concepts, philosophical ideas, and literary examples to illustrate its points, concluding that true success and happiness begin with a healthy relationship with oneself.',
  },
  {
    id: 'pp-eng-essay-2016-3',
    year: 2016,
    subject: 'English Essay',
    questionText: 'Water crisis and national unity.',
    idealAnswer: 'This essay should analyze the water crisis in Pakistan, particularly the disputes over water distribution among provinces, and its potential impact on national cohesion. It should discuss the causes, such as climate change, poor water management, and outdated infrastructure. The core of the essay should be an argument on how equitable water resource management and the development of a national consensus on water issues (like building new dams) are crucial for strengthening the federation and preventing inter-provincial discord. It should offer practical and forward-looking solutions.',
  },
  {
    id: 'pp-eng-essay-2016-4',
    year: 2016,
    subject: 'English Essay',
    questionText: 'The place of Urdu in Pakistan and Supreme Court’s ruling on making Urdu the official language of the country.',
    idealAnswer: 'This essay should examine the historical and cultural significance of Urdu in Pakistan. It must discuss the constitutional status of Urdu and analyze the Supreme Court\'s directive to implement it as the official language. The essay should explore the arguments for and against this implementation, considering the practical challenges (e.g., in education, judiciary, and civil service) and the status of English and other regional languages. A balanced approach would acknowledge the importance of a national language while also advocating for multilingualism and a gradual, well-planned transition.',
  },
  {
    id: 'pp-eng-essay-2016-5',
    year: 2016,
    subject: 'English Essay',
    questionText: 'Crisis of good governance in Pakistan: Need for reforms and institution building.',
    idealAnswer: 'A strong essay on this topic would identify the key indicators of the governance crisis in Pakistan, such as corruption, lack of transparency, weak rule of law, and poor public service delivery. It should then move to propose concrete, well-reasoned reforms. These could include strengthening institutions like the judiciary and accountability bodies, civil service reforms, promoting e-governance, and ensuring political stability. The essay should argue that sustainable development is impossible without addressing these fundamental governance issues.',
  },
  {
    id: 'pp-eng-essay-2016-6',
    year: 2016,
    subject: 'English Essay',
    questionText: 'Promotion of tax culture in Pakistan: Perspective, prospects and challenges.',
    idealAnswer: 'This essay should provide a comprehensive analysis of Pakistan\'s low tax-to-GDP ratio. It should discuss the perspective (the reasons for tax evasion, including lack of trust in government and a complex tax system), the prospects (the potential for economic growth and improved public services if the tax base is broadened), and the challenges (political resistance, undocumented economy, and administrative hurdles). The essay should conclude with policy recommendations for fostering a more robust and equitable tax culture.',
  },
  {
    id: 'pp-eng-essay-2016-7',
    year: 2016,
    subject: 'English Essay',
    questionText: 'Gender equality is a myth!',
    idealAnswer: 'This is a provocative topic that requires a nuanced, argumentative approach. The essay could argue that while significant progress has been made, true gender equality remains a myth due to persistent patriarchal structures, cultural norms, and systemic discrimination. It should use evidence from various domains like the economy (gender pay gap), politics (underrepresentation), and society (gender-based violence) to support its claims. The essay should not just state the problem but also explore the complexities and conclude by highlighting the path forward to turn the myth into a reality.',
  },
  {
    id: 'pp-eng-essay-2016-8',
    year: 2016,
    subject: 'English Essay',
    questionText: 'The creation of new provinces in Pakistan: Implications for an integrated country.',
    idealAnswer: 'This essay should analyze the long-standing debate on creating new provinces in Pakistan, particularly on administrative and ethnic grounds (e.g., South Punjab). It should weigh the potential positive implications (better governance, more equitable resource distribution, empowerment of local identities) against the negative ones (fanning ethnic divisions, administrative costs, political instability). The essay should take a balanced stance, arguing that while new provinces might be necessary, the process must be based on administrative viability and national consensus rather than political expediency to ensure it strengthens, rather than weakens, national integration.',
  },
  {
    id: 'pp-eng-essay-2016-9',
    year: 2016,
    subject: 'English Essay',
    questionText: 'Does foreign aid help to achieve economic stability?',
    idealAnswer: 'This essay requires a critical examination of the role of foreign aid. It should discuss the different types of aid (humanitarian, development) and their intended purposes. The core of the argument should analyze the dependency culture that aid can create and how it can be used as a tool for political leverage by donor countries, often failing to lead to sustainable economic stability. It should contrast this with examples where aid has been successful when tied to good governance and local ownership. The conclusion should be nuanced, suggesting that aid is a tool whose effectiveness depends heavily on how it is given and used.',
  },
  {
    id: 'pp-eng-essay-2016-10',
    year: 2016,
    subject: 'English Essay',
    questionText: 'Frailty, thy name is woman.',
    idealAnswer: 'This essay, quoting Shakespeare\'s Hamlet, should be a powerful rebuttal of the statement. It should deconstruct the historical and literary context of the quote, arguing that it reflects a patriarchal view of women as weak and fickle. The essay should then counter this notion with examples of women\'s strength, resilience, and achievements throughout history and in the contemporary world. It can touch upon feminist theory and discuss how such stereotypes have been used to justify discrimination. The essay\'s tone should be assertive, dismantling the myth of female frailty.',
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
    group: 'Compulsory'
  },
  {
    id: 'swq-pa-2',
    subject: 'Pakistan Affairs',
    topic: 'Post-Independence History',
    difficulty: 'Medium',
    questionText: 'What was the Objective Resolution and why is it significant in Pakistan\'s constitutional history?',
    idealAnswer: 'The Objective Resolution was passed by the Constituent Assembly of Pakistan in March 1949. It is significant because it laid down the framework and principles for the future constitution of Pakistan, blending Islamic principles with modern democratic ideals. It declared that sovereignty over the entire universe belongs to Allah Almighty alone, and the authority to be exercised by the people of Pakistan within the limits prescribed by Him is a sacred trust. It has been the preamble to all of Pakistan\'s constitutions.',
    group: 'Compulsory'
  },
  {
    id: 'swq-is-1',
    subject: 'Islamic Studies',
    topic: 'Pillars of Islam',
    difficulty: 'Easy',
    questionText: 'Explain the concept of Zakat.',
    idealAnswer: 'Zakat, one of the Five Pillars of Islam, is the obligatory purification of wealth through charity. It is a mandatory annual donation of a certain percentage (usually 2.5%) of a Muslim\'s net worth to the poor and needy. It serves to purify the wealth of the giver, prevent hoarding, and reduce economic inequality within the community, fostering a sense of social responsibility.',
    group: 'Compulsory'
  },
  {
    id: 'swq-ca-1',
    subject: 'Current Affairs',
    topic: 'International Relations',
    difficulty: 'Hard',
    questionText: 'Analyze the impact of the Russia-Ukraine war on global energy markets.',
    idealAnswer: 'The Russia-Ukraine war has profoundly disrupted global energy markets. Sanctions against Russia, a major oil and gas exporter, have led to significant price volatility and supply chain disruptions. European countries, heavily reliant on Russian gas, have scrambled to find alternative sources, accelerating the transition towards renewable energy but also causing short-term energy crises. The conflict has highlighted the geopolitical weaponization of energy and forced a global reassessment of energy security strategies, leading to increased investment in LNG infrastructure and a renewed focus on energy diversification.',
    group: 'Compulsory'
  },
  {
    id: 'swq-eng-precis-1',
    subject: 'English (Precis and Composition)',
    topic: 'Precis Writing',
    difficulty: 'Medium',
    questionText: 'What are the key qualities of a good precis?',
    idealAnswer: 'A good precis must be clear, concise, and comprehensive. It should capture the essential ideas of the original passage accurately, without omitting important points or adding new information. It must be written in the writer\'s own words and should be about one-third the length of the original. A suitable title is also necessary.',
    group: 'Compulsory'
  },
   {
    id: 'swq-eng-essay-1',
    subject: 'English Essay',
    topic: 'Argumentative Essay',
    difficulty: 'Hard',
    questionText: 'Discuss the pros and cons of social media.',
    idealAnswer: 'A balanced answer would discuss the benefits of social media, such as global connectivity, information dissemination, and social movements, while also critically examining its drawbacks, including mental health issues (anxiety, depression), the spread of misinformation, privacy concerns, and cyberbullying. The ideal answer would use specific examples and provide a nuanced conclusion rather than a one-sided judgment.',
    group: 'Compulsory'
  },
  {
    id: 'swq-gs-1',
    subject: 'General Science & Ability',
    topic: 'Basic Science',
    difficulty: 'Easy',
    questionText: 'What is photosynthesis?',
    idealAnswer: 'Photosynthesis is the process used by plants, algae, and some bacteria to convert light energy into chemical energy, through a process that converts carbon dioxide and water into glucose (sugar) and oxygen.',
    group: 'Compulsory'
  },

  // Group I
  { id: 'swq-acc-1', subject: 'Accountancy & Auditing', topic: 'Basic Principles', difficulty: 'Easy', questionText: 'What are the fundamental accounting principles?', idealAnswer: 'The fundamental accounting principles, often referred to as GAAP (Generally Accepted Accounting Principles), include concepts like the cost principle, matching principle, full disclosure principle, revenue recognition principle, and the principle of conservatism.', group: 'Group I' },
  { id: 'swq-econ-1', subject: 'Economics', topic: 'Macroeconomics', difficulty: 'Medium', questionText: 'Explain the difference between monetary and fiscal policy.', idealAnswer: 'Monetary policy, typically managed by a central bank, involves controlling the money supply and interest rates to manage inflation and stabilize the economy. Fiscal policy is managed by the government and involves the use of government spending and taxation to influence the economy.', group: 'Group I' },
  { id: 'swq-cs-1', subject: 'Computer Science', topic: 'Databases', difficulty: 'Medium', questionText: 'What is the difference between SQL and NoSQL databases?', idealAnswer: 'SQL (Structured Query Language) databases are relational, meaning they organize data in tables with predefined schemas. They are best for applications requiring structured data and complex queries. Examples include MySQL and PostgreSQL. NoSQL databases are non-relational and have dynamic schemas, making them flexible for unstructured data. Examples include MongoDB and Cassandra.', group: 'Group I' },
  { id: 'swq-polsci-1', subject: 'Political Science', topic: 'Political Philosophy', difficulty: 'Medium', questionText: 'Define the concept of "State" and its essential elements.', idealAnswer: 'A state is a political organization that maintains a monopoly on the legitimate use of force within a specific territory. The essential elements of a state are: 1) Population, 2) Territory with defined borders, 3) Government to administer the state, and 4) Sovereignty, meaning supreme and independent authority.', group: 'Group I' },
  { id: 'swq-ir-1', subject: 'International Relations', topic: 'Theories', difficulty: 'Hard', questionText: 'Differentiate between Liberalism and Realism in International Relations.', idealAnswer: 'Realism views the international system as anarchic, with states as the primary actors driven by self-interest and a struggle for power and survival. Conflict is seen as inevitable. Liberalism, on the other hand, is more optimistic, emphasizing cooperation, international institutions (like the UN), economic interdependence, and the promotion of democracy to mitigate conflict and achieve collective security.', group: 'Group I' },

  // Group II
  { id: 'swq-physics-1', subject: 'Physics', topic: 'Classical Mechanics', difficulty: 'Medium', questionText: 'Explain the principle of conservation of energy.', idealAnswer: 'The principle of conservation of energy states that energy cannot be created or destroyed, but only changed from one form to another.', group: 'Group II' },
  { id: 'swq-chem-1', subject: 'Chemistry', topic: 'Organic Chemistry', difficulty: 'Medium', questionText: 'What is a hydrocarbon? Name two types.', idealAnswer: 'A hydrocarbon is an organic compound consisting entirely of hydrogen and carbon atoms. The two main types are alkanes (single bonds) and alkenes (double bonds).', group: 'Group II' },
  { id: 'swq-appmath-1', subject: 'Applied Mathematics', topic: 'Vectors', difficulty: 'Medium', questionText: 'What is a vector?', idealAnswer: 'A vector is a quantity that has both magnitude and direction.', group: 'Group II' },
  { id: 'swq-puremath-1', subject: 'Pure Mathematics', topic: 'Calculus', difficulty: 'Hard', questionText: 'What is a derivative?', idealAnswer: 'A derivative represents the rate of change of a function with respect to a variable.', group: 'Group II' },
  { id: 'swq-stats-1', subject: 'Statistics', topic: 'Basics', difficulty: 'Easy', questionText: 'What is the difference between mean, median, and mode?', idealAnswer: 'The mean is the average of a set of numbers. The median is the middle value in a set of numbers. The mode is the number that appears most frequently in a set of numbers.', group: 'Group II' },
  { id: 'swq-geo-1', subject: 'Geology', topic: 'Basics', difficulty: 'Easy', questionText: 'What are the three main types of rocks?', idealAnswer: 'The three main types of rocks are igneous, sedimentary, and metamorphic.', group: 'Group II' },

  // Group III
  { id: 'swq-ba-1', subject: 'Business Administration', topic: 'Management', difficulty: 'Easy', questionText: 'What are the four functions of management?', idealAnswer: 'The four functions of management are planning, organizing, leading, and controlling.', group: 'Group III' },
  { id: 'swq-pa-3', subject: 'Public Administration', topic: 'Theories', difficulty: 'Medium', questionText: 'What is New Public Management (NPM)?', idealAnswer: 'New Public Management (NPM) is an approach to running public service organizations that advocates for the public sector to adopt practices from the private sector.', group: 'Group III' },
  { id: 'swq-gpp-1', subject: 'Governance & Public Policies', topic: 'Policy Making', difficulty: 'Medium', questionText: 'What are the stages of the policy cycle?', idealAnswer: 'The stages of the policy cycle are agenda setting, policy formulation, decision making, implementation, and evaluation.', group: 'Group III' },
  { id: 'swq-tpum-1', subject: 'Town Planning & Urban Management', topic: 'Basics', difficulty: 'Easy', questionText: 'What is zoning?', idealAnswer: 'Zoning is the process of dividing land in a municipality into zones in which certain land uses are permitted or prohibited.', group: 'Group III' },

  // Group IV
  { id: 'swq-hist-pakindia-1', subject: 'History of Pakistan & India', topic: 'Mughal Empire', difficulty: 'Medium', questionText: 'Briefly describe the administrative reforms of Sher Shah Suri.', idealAnswer: 'Sher Shah Suri introduced a standardized currency, improved the road system (Grand Trunk Road), established a postal service, and reorganized the land revenue system.', group: 'Group IV' },
  { id: 'swq-ihc-1', subject: 'Islamic History & Culture', topic: 'Umayyads', difficulty: 'Medium', questionText: 'Who was the founder of the Umayyad Caliphate?', idealAnswer: 'The founder of the Umayyad Caliphate was Muawiyah I.', group: 'Group IV' },
  { id: 'swq-bh-1', subject: 'British History', topic: 'Tudors', difficulty: 'Easy', questionText: 'Who was the first Tudor monarch?', idealAnswer: 'The first Tudor monarch was Henry VII.', group: 'Group IV' },
  { id: 'swq-eh-1', subject: 'European History', topic: 'French Revolution', difficulty: 'Medium', questionText: 'What was the Reign of Terror?', idealAnswer: 'The Reign of Terror was a period of the French Revolution characterized by a series of massacres and numerous public executions.', group: 'Group IV' },
  { id: 'swq-husa-1', subject: 'History of USA', topic: 'American Revolution', difficulty: 'Medium', questionText: 'What were the main causes of the American Revolution?', idealAnswer: 'The main causes included "taxation without representation," and philosophical ideas from the Enlightenment about liberty and rights.', group: 'Group IV' },

  // Group V
  { id: 'swq-gs-2', subject: 'Gender Studies', topic: 'Feminist Theories', difficulty: 'Medium', questionText: 'What is the core idea behind Liberal Feminism?', idealAnswer: 'Liberal Feminism focuses on achieving gender equality through legal and political reforms within the existing system.', group: 'Group V' },
  { id: 'swq-es-1', subject: 'Environmental Sciences', topic: 'Climate Change', difficulty: 'Easy', questionText: 'What is the greenhouse effect?', idealAnswer: 'The greenhouse effect is a natural process that warms the Earth\'s surface by trapping heat from the sun.', group: 'Group V' },
  { id: 'swq-af-1', subject: 'Agriculture & Forestry', topic: 'Basics', difficulty: 'Easy', questionText: 'What is crop rotation?', idealAnswer: 'Crop rotation is the practice of growing a series of different types of crops in the same area across a sequence of growing seasons.', group: 'Group V' },
  { id: 'swq-bot-1', subject: 'Botany', topic: 'Basics', difficulty: 'Easy', questionText: 'What is pollination?', idealAnswer: 'Pollination is the transfer of pollen from a male part of a plant to a female part of a plant, later enabling fertilization and the production of seeds.', group: 'Group V' },
  { id: 'swq-zoo-1', subject: 'Zoology', topic: 'Basics', difficulty: 'Easy', questionText: 'What is metamorphosis?', idealAnswer: 'Metamorphosis is a profound transformation from one stage of life to another, such as a tadpole turning into a frog.', group: 'Group V' },
  { id: 'swq-el-1', subject: 'English Literature', topic: 'Shakespeare', difficulty: 'Medium', questionText: 'Name three tragedies written by William Shakespeare.', idealAnswer: 'Three of Shakespeare\'s most famous tragedies are Hamlet, Macbeth, and Othello.', group: 'Group V' },
  { id: 'swq-ul-1', subject: 'Urdu Literature', topic: 'Poetry', difficulty: 'Medium', questionText: 'Who is known as the "Poet of the East"?', idealAnswer: 'Allama Muhammad Iqbal is known as the "Poet of the East" (Shayar-e-Mashriq).', group: 'Group V' },

  // Group VI
  { id: 'swq-law-1', subject: 'Law', topic: 'Basics', difficulty: 'Easy', questionText: 'What is the difference between criminal law and civil law?', idealAnswer: 'Criminal law deals with behavior that is or can be construed as an offense against the public, society, or the state. Civil law deals with disputes between individuals or organizations.', group: 'Group VI' },
  { id: 'swq-cl-1', subject: 'Constitutional Law', topic: 'Basics', difficulty: 'Medium', questionText: 'What is the principle of "separation of powers"?', idealAnswer: 'Separation of powers is a model for the governance of a state, dividing its government into branches, each with separate and independent powers and areas of responsibility so that the powers of one branch are not in conflict with those of the other branches.', group: 'Group VI' },
  { id: 'swq-il-1', subject: 'International Law', topic: 'Sources of Law', difficulty: 'Hard', questionText: 'What is the concept of "jus cogens" in international law?', idealAnswer: 'Jus cogens refers to peremptory norms of general international law that are recognized by the international community as norms from which no derogation is permitted.', group: 'Group VI' },
  { id: 'swq-mlj-1', subject: 'Muslim Law & Jurisprudence', topic: 'Sources', difficulty: 'Medium', questionText: 'What are the four primary sources of Islamic law?', idealAnswer: 'The four primary sources of Islamic law are the Quran, the Sunnah (the teachings and practices of Prophet Muhammad), Ijma (scholarly consensus), and Qiyas (analogical reasoning).', group: 'Group VI' },
  { id: 'swq-merl-1', subject: 'Mercantile Law', topic: 'Contracts', difficulty: 'Medium', questionText: 'What are the essential elements of a valid contract?', idealAnswer: 'The essential elements of a valid contract are offer and acceptance, intention to create legal relations, consideration, capacity to contract, and free consent.', group: 'Group VI' },
  { id: 'swq-crim-1', subject: 'Criminology', topic: 'Theories of Crime', difficulty: 'Hard', questionText: 'Explain the "Broken Windows" theory of criminology.', idealAnswer: 'The "Broken Windows" theory posits that visible signs of crime and anti-social behavior create an urban environment that encourages further, more serious crime.', group: 'Group VI' },
  { id: 'swq-phil-1', subject: 'Philosophy', topic: 'Epistemology', difficulty: 'Medium', questionText: 'What is the difference between rationalism and empiricism?', idealAnswer: 'Rationalism is the belief that reason is the primary source of knowledge. Empiricism is the belief that sensory experience is the primary source of knowledge.', group: 'Group VI' },

  // Group VII
  { id: 'swq-jmc-1', subject: 'Journalism & Mass Communication', topic: 'Theories', difficulty: 'Medium', questionText: 'What is the "agenda-setting" theory?', idealAnswer: 'The agenda-setting theory describes the ability of the news media to influence the salience of topics on the public agenda.', group: 'Group VII' },
  { id: 'swq-psy-1', subject: 'Psychology', topic: 'Basics', difficulty: 'Easy', questionText: 'What is classical conditioning?', idealAnswer: 'Classical conditioning is a learning process that occurs when two stimuli are repeatedly paired; a response that is at first elicited by the second stimulus is eventually elicited by the first stimulus alone.', group: 'Group VII' },
  { id: 'swq-geog-1', subject: 'Geography', topic: 'Physical Geography', difficulty: 'Easy', questionText: 'What causes the seasons on Earth?', idealAnswer: 'The seasons are caused by the tilt of the Earth\'s rotational axis (about 23.5 degrees) relative to its orbital plane around the Sun.', group: 'Group VII' },
  { id: 'swq-soc-1', subject: 'Sociology', topic: 'Social Institutions', difficulty: 'Easy', questionText: 'What is a social institution? Provide two examples.', idealAnswer: 'A social institution is a complex, integrated set of social norms, beliefs, and values organized into a relatively stable structure that meets the basic needs of a society. Examples include the family and education.', group: 'Group VII' },
  { id: 'swq-anth-1', subject: 'Anthropology', topic: 'Basics', difficulty: 'Easy', questionText: 'What are the four subfields of anthropology?', idealAnswer: 'The four subfields of anthropology are archaeology, biological anthropology, cultural anthropology, and linguistic anthropology.', group: 'Group VII' },
  { id: 'swq-pun-1', subject: 'Punjabi', topic: 'Literature', difficulty: 'Medium', questionText: 'Who is considered the most famous poet of the Punjabi language, known for his epic "Heer Ranjha"?', idealAnswer: 'Waris Shah is widely considered the most famous poet of the Punjabi language for his epic "Heer Ranjha".', group: 'Group VII' },
  { id: 'swq-sin-1', subject: 'Sindhi', topic: 'Literature', difficulty: 'Medium', questionText: 'Who is the national poet of Sindh?', idealAnswer: 'Shah Abdul Latif Bhittai is revered as the national poet of Sindh.', group: 'Group VII' },
  { id: 'swq-pas-1', subject: 'Pashto', topic: 'Literature', difficulty: 'Medium', questionText: 'Who is a prominent classical Pashto poet?', idealAnswer: 'Rahman Baba is a prominent classical Pashto poet.', group: 'Group VII' },
  { id: 'swq-bal-1', subject: 'Balochi', topic: 'Literature', difficulty: 'Medium', questionText: 'Who is a well-known figure in Balochi literature?', idealAnswer: 'Gul Khan Nasir is a well-known figure in Balochi literature.', group: 'Group VII' },
  { id: 'swq-per-1', subject: 'Persian', topic: 'Literature', difficulty: 'Medium', questionText: 'Who wrote the Shahnameh?', idealAnswer: 'The Shahnameh (Book of Kings) was written by the Persian poet Ferdowsi.', group: 'Group VII' },
  { id: 'swq-ara-1', subject: 'Arabic', topic: 'Literature', difficulty: 'Medium', questionText: 'Who is one of the most famous pre-Islamic Arab poets?', idealAnswer: 'Imru\' al-Qais is one of the most famous poets of the pre-Islamic era.', group: 'Group VII' }
];

