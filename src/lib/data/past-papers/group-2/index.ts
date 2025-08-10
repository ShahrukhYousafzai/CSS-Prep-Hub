
import type { PastPaper } from '../../types';
import { pastPapers as physicsPapers } from './physics';
import { pastPapers as chemistryPapers } from './chemistry';
import { pastPapers as appliedMathematicsPapers } from './applied-mathematics';
import { pastPapers as pureMathematicsPapers } from './pure-mathematics';
import { pastPapers as statisticsPapers } from './statistics';
import { pastPapers as geologyPapers } from './geology';

export const pastPapers: PastPaper[] = [
    ...physicsPapers,
    ...chemistryPapers,
    ...appliedMathematicsPapers,
    ...pureMathematicsPapers,
    ...statisticsPapers,
    ...geologyPapers,
];
