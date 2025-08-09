import type { PastPaper } from '../../types';
import { pastPapers as englishEssay } from './english-essay';
import { pastPapers as generalScience } from './general-science-and-ability';
import { pastPapers as currentAffairs } from './current-affairs';
import { pastPapers as pakistanAffairs } from './pakistan-affairs';
import { pastPapers as islamicStudies } from './islamic-studies';

export const pastPapersCompulsory: PastPaper[] = [
    ...englishEssay,
    ...generalScience,
    ...currentAffairs,
    ...pakistanAffairs,
    ...islamicStudies,
];
