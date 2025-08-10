
import type { PastPaper } from '../../types';
import { pastPapers as physicsPapers } from './physics';
import { pastPapers as chemistryPapers } from './chemistry';
import { pastPapers as appliedMathematicsPapers } from './applied-mathematics';
import { pastPapers as pureMathematicsPapers } from './pure-mathematics';

export const pastPapers: PastPaper[] = [
    ...physicsPapers,
    ...chemistryPapers,
    ...appliedMathematicsPapers,
    ...pureMathematicsPapers,
];
