
import type { PastPaper } from '../../types';
import { pastPapers as historyOfPakistanAndIndiaPapers } from './history-of-pakistan-and-india';
import { pastPapers as islamicHistoryAndCulturePapers } from './islamic-history-and-culture';
import { pastPapers as britishHistoryPapers } from './british-history';
import { pastPapers as europeanHistoryPapers } from './european-history';
import { pastPapers as historyOfUSAPapers } from './history-of-usa';

export const pastPapers: PastPaper[] = [
    ...historyOfPakistanAndIndiaPapers,
    ...islamicHistoryAndCulturePapers,
    ...britishHistoryPapers,
    ...europeanHistoryPapers,
    ...historyOfUSAPapers,
];
