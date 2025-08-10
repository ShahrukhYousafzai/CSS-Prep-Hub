
import type { PastPaper } from '../../types';
import { pastPapers as lawPapers } from './law';
import { pastPapers as constitutionalLawPapers } from './constitutional-law';
import { pastPapers as internationalLawPapers } from './international-law';
import { pastPapers as muslimLawAndJurisprudencePapers } from './muslim-law-and-jurisprudence';
import { pastPapers as mercantileLawPapers } from './mercantile-law';
import { pastPapers as criminologyPapers } from './criminology';
import { pastPapers as philosophyPapers } from './philosophy';

export const pastPapers: PastPaper[] = [
    ...lawPapers,
    ...constitutionalLawPapers,
    ...internationalLawPapers,
    ...muslimLawAndJurisprudencePapers,
    ...mercantileLawPapers,
    ...criminologyPapers,
    ...philosophyPapers,
];

  