import type { PastPaper } from '../../types';

import { pastPapers as comparativeReligionPapers } from './comparative-study-of-major-religions';
import { pastPapers as currentAffairsPapers } from './current-affairs';
import { pastPapers as englishEssayPapers } from './english-essay';
import { pastPapers as englishPrecisPapers } from './english-precis-and-composition';
import { pastPapers as generalSciencePapers } from './general-science-and-ability';
import { pastPapers as islamicStudiesPapers } from './islamic-studies';
import { pastPapers as pakistanAffairsPapers } from './pakistan-affairs';


export const pastPapers: PastPaper[] = [
    ...comparativeReligionPapers,
    ...currentAffairsPapers,
    ...englishEssayPapers,
    ...englishPrecisPapers,
    ...generalSciencePapers,
    ...islamicStudiesPapers,
    ...pakistanAffairsPapers
];
