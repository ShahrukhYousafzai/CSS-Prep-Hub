
import type { PastPaper } from '../../types';

export const pastPapers: PastPaper[] = [
    {
        id: 'pp-intlaw-2023-1',
        year: 2023,
        subject: 'International Law',
        questions: [
            {
                id: 'pp-intlaw-2023-1-q1',
                questionType: 'Other',
                questionText: 'What are the primary sources of International Law as defined in Article 38(1) of the Statute of the International Court of Justice?',
                idealAnswer: 'According to Article 38(1) of the ICJ Statute, the primary sources are: 1. International treaties/conventions. 2. International custom (general practice accepted as law). 3. General principles of law recognized by civilized nations. 4. (Subsidiary means) Judicial decisions and the teachings of highly qualified publicists.',
            }
        ]
    },
    {
        id: 'pp-criminology-2023-1',
        year: 2023,
        subject: 'Criminology',
        questions: [
            {
                id: 'pp-criminology-2023-1-q1',
                questionType: 'Other',
                questionText: 'Discuss the Social Disorganization Theory and its relevance to crime in urban areas.',
                idealAnswer: 'Social Disorganization Theory states that a person\'s residential location is a greater factor in crime than their personal characteristics. It links high crime rates to neighborhood ecological factors like poverty, high population turnover, and ethnic heterogeneity, which weaken social control.',
            }
        ]
    },
];
