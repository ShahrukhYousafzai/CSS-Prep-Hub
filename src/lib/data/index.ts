
import type { PastPaper, Quiz, InterviewQuestion, PsychTest, SubjectWiseQuestion, User } from '../types';
import { pastPapers as pastPapersCompulsory } from './past-papers/compulsory/index';
import { pastPapers as pastPapersGroup1 } from './past-papers/group-1/index';
import { pastPapers as pastPapersGroup2 } from './past-papers/group-2/index';
import { pastPapers as pastPapersGroup3 } from './past-papers/group-3/index';
import { pastPapers as pastPapersGroup4 } from './past-papers/group-4/index';
import { pastPapers as pastPapersGroup5 } from './past-papers/group-5/index';
import { pastPapers as pastPapersGroup6 } from './past-papers/group-6/index';
import { pastPapers as pastPapersGroup7 } from './past-papers/group-7/index';
import { subjectWiseQuestions as subjectWiseCompulsory } from './subject-wise-questions/compulsory';
import { subjectWiseQuestions as subjectWiseGroup1 } from './subject-wise-questions/group-1';
import { subjectWiseQuestions as subjectWiseGroup2 } from './subject-wise-questions/group-2';
import { subjectWiseQuestions as subjectWiseGroup3 } from './subject-wise-questions/group-3';
import { subjectWiseQuestions as subjectWiseGroup4 } from './subject-wise-questions/group-4';
import { subjectWiseQuestions as subjectWiseGroup5 } from './subject-wise-questions/group-5';
import { subjectWiseQuestions as subjectWiseGroup6 } from './subject-wise-questions/group-6';
import { subjectWiseQuestions as subjectWiseGroup7 } from './subject-wise-questions/group-7';
import { quizzesData } from './quizzes';
import { interviewQuestionsData } from './interview-questions';
import { psychTestData } from './psych-test';

export const pastPaperQuestions: PastPaper[] = [
    ...pastPapersCompulsory,
    ...pastPapersGroup1,
    ...pastPapersGroup2,
    ...pastPapersGroup3,
    ...pastPapersGroup4,
    ...pastPapersGroup5,
    ...pastPapersGroup6,
    ...pastPapersGroup7,
].flatMap(subject => subject.questions ? subject : ({ ...subject, questions: [] }));


export const subjectWiseQuestions: SubjectWiseQuestion[] = [
    ...subjectWiseCompulsory,
    ...subjectWiseGroup1,
    ...subjectWiseGroup2,
    ...subjectWiseGroup3,
    ...subjectWiseGroup4,
    ...subjectWiseGroup5,
    ...subjectWiseGroup6,
    ...subjectWiseGroup7,
];

export const quizzes: Quiz[] = quizzesData;

export const interviewQuestions: InterviewQuestion[] = interviewQuestionsData;

export const psychTest: PsychTest = psychTestData;

export const userData: User = {
  name: 'Shahrukh',
  email: 'user@example.com',
  streak: 5,
  xp: 1250,
};
