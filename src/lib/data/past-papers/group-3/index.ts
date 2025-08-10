
import type { PastPaper } from '../../types';
import { pastPapers as publicAdministrationPapers } from './public-administration';
import { pastPapers as businessAdministrationPapers } from './business-administration';
import { pastPapers as governanceAndPublicPoliciesPapers } from './governance-and-public-policies';
import { pastPapers as townPlanningAndUrbanManagementPapers } from './town-planning-and-urban-management';

export const pastPapers: PastPaper[] = [
    ...publicAdministrationPapers,
    ...businessAdministrationPapers,
    ...governanceAndPublicPoliciesPapers,
    ...townPlanningAndUrbanManagementPapers,
];
