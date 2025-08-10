
import type { PastPaper } from '../../types';
import { pastPapers as accountancyPapers } from './accountancy-and-auditing';
import { pastPapers as economicsPapers } from './economics';
import { pastPapers as computerSciencePapers } from './computer-science';
import { pastPapers as politicalSciencePapers } from './political-science';

export const pastPapers: PastPaper[] = [
  ...accountancyPapers,
  ...economicsPapers,
  ...computerSciencePapers,
  ...politicalSciencePapers,
  {
    id: 'pp-ir-2022-p1',
    year: 2022,
    subject: 'International Relations',
    questions: [
        {
            id: 'pp-ir-2022-p1-q1',
            questionType: 'Other',
            questionText: 'Explain the core tenets of Realism in International Relations theory.',
            idealAnswer: 'The core tenets of Realism are: 1. Statism: The state is the primary actor in international politics. 2. Survival: The main goal of every state is to survive. 3. Self-help: States must rely on their own power and resources to ensure their security in an anarchic international system. Realism sees international relations as a perpetual struggle for power.',
        }
    ]
  },
];
