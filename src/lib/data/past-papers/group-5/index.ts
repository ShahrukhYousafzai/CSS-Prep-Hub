
import type { PastPaper } from '../../types';
import { pastPapers as genderStudiesPapers } from './gender-studies';
import { pastPapers as environmentalSciencesPapers } from './environmental-sciences';
import { pastPapers as agricultureAndForestryPapers } from './agriculture-and-forestry';
import { pastPapers as botanyPapers } from './botany';
import { pastPapers as zoologyPapers } from './zoology';
import { pastPapers as englishLiteraturePapers } from './english-literature';
import { pastPapers as urduLiteraturePapers } from './urdu-literature';

export const pastPapers: PastPaper[] = [
    ...genderStudiesPapers,
    ...environmentalSciencesPapers,
    ...agricultureAndForestryPapers,
    ...botanyPapers,
    ...zoologyPapers,
    ...englishLiteraturePapers,
    ...urduLiteraturePapers,
];
