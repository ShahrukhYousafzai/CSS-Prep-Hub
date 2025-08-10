
import type { PastPaper } from '../../types';
import { pastPapers as physicsPapers } from './physics';
import { pastPapers as chemistryPapers } from './chemistry';

export const pastPapers: PastPaper[] = [
    ...physicsPapers,
    ...chemistryPapers,
];
