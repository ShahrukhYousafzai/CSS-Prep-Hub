
import type { PsychTest } from '../types';

export const psychTestData: PsychTest = {
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
