
import type { PastPaper } from '../../types';
import { pastPapers as journalismAndMassCommunicationPapers } from './journalism-and-mass-communication';
import { pastPapers as psychologyPapers } from './psychology';
import { pastPapers as geographyPapers } from './geography';
import { pastPapers as sociologyPapers } from './sociology';
import { pastPapers as anthropologyPapers } from './anthropology';
import { pastPapers as punjabiPapers } from './punjabi';
import { pastPapers as sindhiPapers } from './sindhi';
import { pastPapers as pashtoPapers } from './pashto';
import { pastPapers as balochiPapers } from './balochi';
import { pastPapers as persianPapers } from './persian';
import { pastPapers as arabicPapers } from './arabic';

export const pastPapers: PastPaper[] = [
    ...journalismAndMassCommunicationPapers,
    ...psychologyPapers,
    ...geographyPapers,
    ...sociologyPapers,
    ...anthropologyPapers,
    ...punjabiPapers,
    ...sindhiPapers,
    ...pashtoPapers,
    ...balochiPapers,
    ...persianPapers,
    ...arabicPapers,
];
