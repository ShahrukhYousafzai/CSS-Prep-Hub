
import type { PastPaper } from '../../types';
import { pastPapers as accountancyPapers } from './accountancy-and-auditing';
import { pastPapers as economicsPapers } from './economics';
import { pastPapers as computerSciencePapers } from './computer-science';
import { pastPapers as politicalSciencePapers } from './political-science';
import { pastPapers as internationalRelationsPapers } from './international-relations';


export const pastPapers: PastPaper[] = [
  ...accountancyPapers,
  ...economicsPapers,
  ...computerSciencePapers,
  ...politicalSciencePapers,
  ...internationalRelationsPapers,
];
