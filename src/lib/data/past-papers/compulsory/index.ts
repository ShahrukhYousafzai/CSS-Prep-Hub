
import type { PastPaperQuestion } from '../../types';
import { pastPapers as englishEssay } from './english-essay';
import { pastPapers as englishPrecis } from './english-precis-and-composition';
import { pastPapers as generalScience } from './general-science-and-ability';
import { pastPapers as currentAffairs } from './current-affairs';
import { pastPapers as pakistanAffairs } from './pakistan-affairs';
import { pastPapers as islamicStudies } from './islamic-studies';

export const pastPapers: PastPaperQuestion[] = [
    ...englishEssay,
    ...englishPrecis,
    ...generalScience,
    ...currentAffairs,
    ...pakistanAffairs,
    ...islamicStudies,
];
