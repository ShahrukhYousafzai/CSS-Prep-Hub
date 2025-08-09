
import type { PastPaper } from '../../types';

export const pastPapers: PastPaper[] = [
  {
    id: 'pp-acc-2016-p1',
    year: 2016,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-acc-2016-p1-q1',
            questionType: 'Other',
            questionText: 'Prepare an income statement for the Quarter April 1 to June 30 for Global Service Company.',
            idealAnswer: 'Based on the provided trial balance, the income statement would be: Revenues (Service Revenue: 11,360 + Rent Revenue: 900) = 12,260. Expenses (Salaries: 7,400 + Rent: 1,200 + Depreciation: 700 + Supplies: 160 + Utilities: 350 + Interest: 40) = 9,850. Net Income = 12,260 - 9,850 = Rs. 2,410.'
        },
        {
            id: 'pp-acc-2016-p1-q2',
            questionType: 'Other',
            questionText: 'Prepare a statement of Retained Earnings for Global Service Company.',
            idealAnswer: 'Retained Earnings (Beginning) would be assumed 0 as the company was organized on April 1. Net Income = Rs. 2,410. Dividends = Rs. 500. Retained Earnings (Ending) = 0 + 2,410 - 500 = Rs. 1,910.'
        },
        {
            id: 'pp-acc-2016-p1-q3',
            questionType: 'Other',
            questionText: 'Prepare a Balance Sheet for Global Service Company as of June 30.',
            idealAnswer: 'Assets (Cash: 5,190 + A/R: 480 + Prepaid Rent: 720 + Supplies: 920 + Equipment: 12,000 - Acc. Dep: 700) = 18,510. Liabilities & Equity (Notes Payable: 4,000 + A/P: 790 + S&W Payable: 300 + Int. Payable: 10 + Unearned Rent: 400 + Share Capital: 11,200 + Retained Earnings: 1,910) = 18,610. There seems to be a slight discrepancy in the provided trial balance data.'
        },
        {
            id: 'pp-acc-2016-p1-q4',
            questionType: 'Other',
            questionText: 'Prepare the accounts necessary to show the results of the realization and of the disposal of the cash for the Pool and Burns partnership.',
            idealAnswer: 'This requires preparing a Realization Account, Partners\' Capital Accounts, and a Cash Account. The realization account would show a loss on realization calculated from the sale of assets and payment of liabilities, which would then be distributed equally between the partners.'
        },
        {
            id: 'pp-acc-2016-p1-q5',
            questionType: 'Other',
            questionText: 'Prepare the adjusting journal entries that were made during the period for Mushtaq Company.',
            idealAnswer: 'Adjusting entries would be prepared by comparing the "Before" and "After" adjustment columns. This includes entries for accrued revenue, use of supplies, expired insurance, depreciation, accrued salaries, and earned rent revenue.'
        },
        {
            id: 'pp-acc-2016-p1-q6',
            questionType: 'Other',
            questionText: 'For Hydri Construction, prepare a schedule showing annual depreciation expense, accumulated depreciation, and related calculations for each subsequent year using the double-declining balance method.',
            idealAnswer: 'The double-declining rate is 2 * (1/4) = 50%. Year 1 Dep: 85000 * 50% = 42500. Year 2 Dep: (85000-42500) * 50% = 21250. Year 3 Dep: (85000-63750)*50% = 10625. Year 4 Dep is adjusted to reach the salvage value of 10,000.'
        },
        {
            id: 'pp-acc-2016-p1-q7',
            questionType: 'Other',
            questionText: 'Show how the asset and related accumulated depreciation for Hydri Construction would appear on a balance sheet at December 31, 2015.',
            idealAnswer: 'On the balance sheet: Equipment: Rs. 85,000. Less: Accumulated Depreciation: Rs. 42,500. Book Value: Rs. 42,500.'
        },
        {
            id: 'pp-acc-2016-p1-q8',
            questionType: 'Other',
            questionText: 'Prepare journal entries to record the Hydri Construction asset\'s acquisition, annual depreciation for each year, and the asset\'s eventual sale for Rs.10,000.',
            idealAnswer: 'Entries would include debiting Equipment and crediting Cash for acquisition, debiting Depreciation Expense and crediting Accumulated Depreciation annually, and finally debiting Cash and Accumulated Depreciation, and crediting Equipment for the sale, recognizing any gain or loss.'
        },
        {
            id: 'pp-acc-2016-p1-q9',
            questionType: 'Other',
            questionText: 'Compute various financial ratios for Rabika Limited for the year 2015.',
            idealAnswer: 'Calculations would be: Current Ratio (3800/1680), Acid-Test Ratio ((3800-2100)/1680), Avg. Collection Period, Inventory Turnover (8930/2100), Debt to Net Worth, Gross Profit Margin (3750/12680), Net Profit Margin (670/12680), and ROE (670/3440).'
        },
        {
            id: 'pp-acc-2016-p1-q10',
            questionType: 'Other',
            questionText: 'Prepare an income statement for Electronic Equipment Company for the period.',
            idealAnswer: 'This requires calculating the Cost of Goods Manufactured and then the Cost of Goods Sold to arrive at Gross Profit, then subtracting operating expenses to find the net income.'
        },
        {
            id: 'pp-acc-2016-p1-q11',
            questionType: 'Other',
            questionText: 'Calculate various unit costs and ratios for Electronic Equipment Company.',
            idealAnswer: 'The number of units manufactured would be calculated (Sales + End Inv - Beg Inv). Unit cost = COGM / Units manufactured. Gross profit per unit = (Sales - COGS) / Units sold. Income per unit = Net Income / Units sold. Ratios are then calculated based on these figures.'
        },
        {
            id: 'pp-acc-2016-p1-q12',
            questionType: 'Other',
            questionText: 'Calculate the total factory overhead of the Cutting department for Homes Garments Company after distributing service department costs using the algebraic method.',
            idealAnswer: 'This requires setting up and solving a system of simultaneous equations for the service departments (Maintenance and Cafeteria) and then allocating the total service costs to the producing departments based on the given percentages.'
        },
        {
            id: 'pp-acc-2016-p1-q13',
            questionType: 'Other',
            questionText: 'Calculate the group’s bonus for each day and for the week for Altech Manufacturing Company.',
            idealAnswer: 'For each day, calculate the standard production (hours worked * 200). Find the excess production. The bonus percentage is (Excess/Standard)/2. The bonus rate is this percentage * $9. Total bonus is bonus rate * hours worked.'
        },
        {
            id: 'pp-acc-2016-p1-q14',
            questionType: 'Other',
            questionText: 'Calculate the week’s earnings of each employee for Altech Manufacturing Company.',
            idealAnswer: 'Each employee\'s weekly earning = (Total weekly hours * hourly rate) + (Total weekly bonus / 10 employees).'
        },
        {
            id: 'pp-acc-2016-p1-q15',
            questionType: 'Other',
            questionText: 'Prepare T-accounts and journal entries for Cambridge Company\'s job order costing system.',
            idealAnswer: 'This involves setting up T-accounts for Work in Process, Finished Goods, etc. and posting the transactions. Journal entries would record the cost of goods manufactured, cost of goods sold, and closing the overhead variance.'
        },
        {
            id: 'pp-acc-2016-p1-q16',
            questionType: 'Other',
            questionText: 'For Best Gases Limited, prepare a statement showing the amount of loss and recommend a change in sale value to eliminate the loss.',
            idealAnswer: 'First, calculate the contribution margin for each product (Sales * PV ratio). Calculate total contribution margin and subtract fixed overheads to find the current loss. To eliminate the loss, the total contribution margin must equal the fixed overheads. Calculate the required increase in total sales while maintaining the same sales mix.'
        },
        {
            id: 'pp-acc-2016-p1-q17',
            questionType: 'Other',
            questionText: 'Prepare absorption costing and variable costing income statements for Fedder Manufacturing Company and reconcile the difference.',
            idealAnswer: 'Absorption costing includes fixed manufacturing overhead in the unit cost. Variable costing treats all fixed overhead as a period cost. The difference in net income between the two methods is due to the fixed overhead capitalized in inventory under absorption costing.'
        },
        {
            id: 'pp-acc-2016-p1-q18',
            questionType: 'Other',
            questionText: 'Using the weighted-average basis, prepare a cost of production report for Seven Seas Ltd.',
            idealAnswer: 'This report involves calculating equivalent units of production for materials and conversion costs, determining the cost per equivalent unit, and then assigning these costs to the units completed and transferred out and the units remaining in the closing work-in-process inventory.'
        }
    ]
  },
  {
    id: 'pp-acc-2016-p2',
    year: 2016,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-acc-2016-p2-q1',
            questionType: 'Other',
            questionText: 'As an Auditor where Internal Controls were not in use, what Control Objectives would you consider?',
            idealAnswer: 'The auditor would need to consider objectives such as: safeguarding of assets, reliability of financial records, operational efficiency, and adherence to management policies. The absence of controls means the auditor must perform more extensive substantive testing to achieve these objectives.'
        },
        {
            id: 'pp-acc-2016-p2-q2',
            questionType: 'Other',
            questionText: 'What is materiality? Discuss materiality in planning and performing an Audit in relation to ISA-320.',
            idealAnswer: 'Materiality is the concept that an item is significant enough to likely influence the decisions of users of the financial statements. ISA 320 requires the auditor to determine materiality for the financial statements as a whole when planning the audit, and to use it to identify and assess risks of material misstatement and to determine the nature, timing, and extent of further audit procedures.'
        },
        {
            id: 'pp-acc-2016-p2-q3',
            questionType: 'Other',
            questionText: 'What considerations would an auditor take while planning & performing an audit of financial statements prepared in accordance with IFRS?',
            idealAnswer: 'The auditor must have a thorough understanding of the applicable IFRS standards. Considerations include the complexity of the standards, the judgments and estimates made by management under IFRS, and ensuring the financial statements provide proper disclosures as required by the standards.'
        },
        {
            id: 'pp-acc-2016-p2-q4',
            questionType: 'Other',
            questionText: 'What is Income from Property? What are possible deductions allowed?',
            idealAnswer: 'Income from Property is rent received or receivable for a property. Allowable deductions typically include repairs, insurance premium, local taxes, ground rent, and interest on a loan used to acquire or construct the property.'
        },
        {
            id: 'pp-acc-2016-p2-q5',
            questionType: 'Other',
            questionText: 'Calculate the Taxable Income & Tax Payable for the client based on the provided data.',
            idealAnswer: 'The calculation involves summing up all taxable income sources (Basic Salary, value of free accommodation, benefit of concessional loan, medical allowance above the threshold, flying allowance, special allowance, dearness allowance) and then calculating the tax payable based on the applicable tax slabs for that year.'
        },
        {
            id: 'pp-acc-2016-p2-q6',
            questionType: 'Other',
            questionText: 'What is Sales Tax? What is the procedure for registration and when does it become compulsory?',
            idealAnswer: 'Sales tax is a value-added tax levied on the supply of goods and services. Registration involves submitting an application to the FBR. It becomes compulsory when a person\'s turnover exceeds the prescribed threshold.'
        },
        {
            id: 'pp-acc-2016-p2-q7',
            questionType: 'Other',
            questionText: 'Compute the sales tax liability for Shahid Dairy Products Ltd for May 2015.',
            idealAnswer: 'The calculation involves determining the total output tax on taxable supplies and subtracting the admissible input tax on taxable purchases and imports. The final liability is the net amount payable to the tax authorities.'
        },
        {
            id: 'pp-acc-2016-p2-q8',
            questionType: 'Other',
            questionText: 'Explain the contemporary challenges posed by business nowadays in Pakistan.',
            idealAnswer: 'Challenges include political instability, energy crisis, high inflation and interest rates, security issues, inconsistent government policies, and navigating a complex regulatory and tax environment.'
        },
        {
            id: 'pp-acc-2016-p2-q9',
            questionType: 'Other',
            questionText: 'Work out the overall cost of capital for ABC Ltd.',
            idealAnswer: 'This requires calculating the weighted average cost of capital (WACC). It involves finding the cost of each component of capital (debt, preferred stock, common stock using CAPM), weighting them by their market values, and summing them up, adjusting the cost of debt for its tax shield.'
        },
        {
            id: 'pp-acc-2016-p2-q10',
            questionType: 'Other',
            questionText: 'Define & explain Business Cycle and discuss its implications in detail.',
            idealAnswer: 'The business cycle is the fluctuation of economic activity, characterized by four phases: expansion, peak, contraction (recession), and trough. Implications include impacts on employment, inflation, investment, and consumer spending, requiring governments and central banks to use policy tools to manage its effects.'
        },
        {
            id: 'pp-acc-2016-p2-q11',
            questionType: 'Other',
            questionText: 'For Mr. Tom, compute the Effective Annual Rate (EAR) for each bank and the total amount after 3 years.',
            idealAnswer: 'EAR is calculated for each compounding period (annual, semi-annual, quarterly) to find the true annual rate. The future value is then calculated for each option using the formula FV = PV * (1 + r/n)^(nt), where n is the number of compounding periods per year.'
        }
    ]
  },
  {
    id: 'pp-acc-2017-p1',
    year: 2017,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-acc-2017-p1-q1',
            questionType: 'Other',
            questionText: 'Prepare the adjusting journal entries and the adjusted trial balance for Bella\'s Beauty Salon.',
            idealAnswer: 'This requires creating journal entries for each adjustment (expired insurance, supplies used, depreciation, accrued revenue, earned revenue, accrued salaries, property taxes, interest expense). These entries are then posted to the unadjusted trial balance to create the adjusted trial balance.'
        },
        {
            id: 'pp-acc-2017-p1-q2',
            questionType: 'Other',
            questionText: 'Prepare journal entries to record the stock dividend and stock sale transactions for the corporation.',
            idealAnswer: 'For the stock dividend, debit Retained Earnings and credit Common Stock Dividend Distributable and Paid-in Capital. For the stock sale, debit Cash and credit Common Stock and Paid-in Capital in Excess of Par.'
        },
        {
            id: 'pp-acc-2017-p1-q3',
            questionType: 'Other',
            questionText: 'Determine the machine’s second-year depreciation under the straight-line method for the company.',
            idealAnswer: 'Depreciable base = Cost - Salvage Value = $42,300 - $6,000 = $36,300. Annual Depreciation = $36,300 / 10 years = $3,630. The second-year depreciation is $3,630, as it is the same each year under the straight-line method.'
        },
        {
            id: 'pp-acc-2017-p1-q4',
            questionType: 'Other',
            questionText: 'Calculate various financial ratios for Smith Corporation for 2008 and 2009 and evaluate the firm\'s short-term liquidity.',
            idealAnswer: 'Calculate working capital, current ratio, acid-test ratio, A/R turnover, and inventory turnover for both years. An evaluation would compare the ratios between the two years and against industry benchmarks to assess whether the company\'s ability to meet short-term obligations is improving or deteriorating.'
        },
        {
            id: 'pp-acc-2017-p1-q5',
            questionType: 'Other',
            questionText: 'Prepare the sales budget, schedule of expected cash collections, and production budget for Graber Corporation.',
            idealAnswer: 'Sales budget is units * price per quarter. Cash collections schedule applies the collection percentages (75% in current quarter, 20% in next) to the sales budget. Production budget is calculated as: Budgeted Sales + Desired Ending Inventory - Beginning Inventory.'
        },
        {
            id: 'pp-acc-2017-p1-q6',
            questionType: 'Other',
            questionText: 'Prepare schedules of cost of goods manufactured, cost of goods sold, and an income statement for Valenko Company.',
            idealAnswer: 'This involves working backward from the given data. Start with the income statement to find missing values, then prepare the COGS schedule, and finally the COGM schedule, solving for the unknown inventory and direct labor figures.'
        },
        {
            id: 'pp-acc-2017-p1-q7',
            questionType: 'Other',
            questionText: 'Determine the unit product cost under absorption and variable costing for Linden Company.',
            idealAnswer: 'Absorption unit cost = Sum of all variable manufacturing costs + (Fixed mfg overhead / units produced). Variable unit cost = Sum of all variable manufacturing costs only.'
        },
        {
            id: 'pp-acc-2017-p1-q8',
            questionType: 'Other',
            questionText: 'Prepare contribution format variable costing income statements for May and June for Linden Company.',
            idealAnswer: 'Sales - Variable Costs (production and S&A) = Contribution Margin. Contribution Margin - Total Fixed Costs (mfg and S&A) = Net Operating Income.'
        },
        {
            id: 'pp-acc-2017-p1-q9',
            questionType: 'Other',
            questionText: 'Reconcile the variable costing and absorption costing net operating incomes for Linden Company.',
            idealAnswer: 'The difference in income is due to the change in inventory multiplied by the fixed manufacturing overhead per unit. Reconciliation: Absorption NI - Variable NI = (Ending Inventory - Beginning Inventory) * Fixed MOH rate per unit.'
        },
        {
            id: 'pp-acc-2017-p1-q10',
            questionType: 'Other',
            questionText: 'Prepare a cost of production report for the PVC Company using the weighted-average method.',
            idealAnswer: 'The report involves: 1. Computing equivalent units for materials and conversion. 2. Computing cost per equivalent unit ( (Beginning Cost + Current Cost) / Equivalent Units). 3. Assigning costs to units transferred out and units in ending WIP.'
        }
    ]
  },
   {
    id: 'pp-acc-2017-p2',
    year: 2017,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-acc-2017-p2-q1',
            questionType: 'Other',
            questionText: 'What system of Internal check would you recommend for a large manufacturing company to prevent fraud in connection with the purchase of raw material on credit basis?',
            idealAnswer: 'A recommended system would include: separation of duties (purchasing, receiving, and accounting departments should be separate), use of pre-numbered purchase orders, proper authorization for purchases, verification of goods received against purchase orders, and independent verification of invoices before payment.'
        },
        {
            id: 'pp-acc-2017-p2-q2',
            questionType: 'Other',
            questionText: 'As a Manager of Accounts, discuss the investigative measures and steps to extract a fraudulent matter.',
            idealAnswer: 'Steps include: 1. Securing all relevant documents and records. 2. Conducting interviews with personnel. 3. Performing a detailed analysis of financial data to identify anomalies. 4. Using forensic accounting techniques. 5. Documenting all findings meticulously for potential legal action.'
        },
        {
            id: 'pp-acc-2017-p2-q3',
            questionType: 'Other',
            questionText: 'What is meant by Auditor\'s Report? Describe its key characteristics and significance.',
            idealAnswer: 'An Auditor\'s Report is a formal opinion issued by an auditor about the fairness and accuracy of a company\'s financial statements. Key characteristics include a title, addressee, sections for management\'s and auditor\'s responsibilities, the auditor\'s opinion, and the auditor\'s signature. Its significance lies in providing credibility to the financial statements for stakeholders like investors and creditors.'
        },
        {
            id: 'pp-acc-2017-p2-q4',
            questionType: 'Other',
            questionText: 'Define the concept of sales tax & describe the sales tax act of 1990. Identify the official positions of Inland revenue officers and their powers.',
            idealAnswer: 'Sales tax is an indirect tax on the supply of goods and services. The Sales Tax Act, 1990 governs its levy, collection, and administration in Pakistan. Inland Revenue officers (e.g., Commissioner, Assistant Commissioner) have powers to register taxpayers, conduct audits, assess tax liability, and enforce the law.'
        },
        {
            id: 'pp-acc-2017-p2-q5',
            questionType: 'Other',
            questionText: 'Compute the sales tax liability of Mr. Sartaj for the month of February 2016.',
            idealAnswer: 'The calculation requires determining the output tax on all taxable supplies (local sales and commercial imports) and subtracting the admissible input tax paid on local purchases and imports. The net amount is the liability payable.'
        },
        {
            id: 'pp-acc-2017-p2-q6',
            questionType: 'Other',
            questionText: 'Identify the main features of Income Tax Ordinance 2001. Also discuss the exemptions and tax concessions available.',
            idealAnswer: 'Main features include its structure based on heads of income, self-assessment scheme, and detailed provisions for withholding taxes. Exemptions and concessions are available for specific types of income, investments, and for certain organizations like non-profits.'
        },
        {
            id: 'pp-acc-2017-p2-q7',
            questionType: 'Other',
            questionText: 'Compute the total income, taxable income and tax liability of Mr. Ahmed for the tax year 2016.',
            idealAnswer: 'The computation involves summing all taxable income components (salary, allowances, value of accommodation, company car benefit), deducting Zakat to find taxable income, and then applying the relevant tax slabs for the year to calculate the final tax liability.'
        },
        {
            id: 'pp-acc-2017-p2-q8',
            questionType: 'Other',
            questionText: 'Identify the major barriers that hamper global business in an open economy.',
            idealAnswer: 'Major barriers include tariffs and trade barriers, political instability, cultural and language differences, complex international regulations, and foreign exchange risk.'
        },
        {
            id: 'pp-acc-2017-p2-q9',
            questionType: 'Other',
            questionText: 'Calculate the price of the coupon bond.',
            idealAnswer: 'The price of the bond is the present value of its future cash flows (coupon payments and face value) discounted at the yield to maturity. For a semi-annual bond, the coupon payments, number of periods, and yield are all adjusted to a semi-annual basis for the calculation.'
        },
        {
            id: 'pp-acc-2017-p2-q10',
            questionType: 'Other',
            questionText: 'Describe the economic systems, also Identify which system is more beneficial for the economic development of the country.',
            idealAnswer: 'Economic systems include capitalism (private ownership), socialism (state ownership), and mixed economies. A mixed economy, which combines elements of both and is practiced by most countries, is often considered most beneficial as it can leverage market efficiency while also allowing for government intervention to correct market failures and provide public goods.'
        },
        {
            id: 'pp-acc-2017-p2-q11',
            questionType: 'Other',
            questionText: 'What value should you place on a share of this XYZ Company Stock?',
            idealAnswer: 'This requires using the multi-stage dividend discount model. The value of the stock is the present value of all expected future dividends. Dividends for the high-growth phases are calculated and discounted individually. The terminal value of the stock at the start of the constant growth phase is calculated using the Gordon Growth Model and then discounted back to the present.'
        }
    ]
  },
  {
    id: 'pp-acc-2018-p1',
    year: 2018,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-acc-2018-p1-q1',
            questionType: 'Other',
            questionText: 'For Muddasar Co., prepare Adjusting Entries, Adjusted Trail Balance, Income Statement & Balance Sheet.',
            idealAnswer: 'This requires preparing adjusting entries for closing inventory, supplies used, expired rent and insurance, outstanding salaries, and depreciation. These adjustments are applied to the unadjusted trial balance to create an adjusted trial balance, from which the income statement and balance sheet are then prepared.'
        },
        {
            id: 'pp-acc-2018-p1-q2',
            questionType: 'Other',
            questionText: 'Perform Horizontal and Vertical Analysis for the financial statements of Abdul Rehman & Co. and comment on the results.',
            idealAnswer: 'Horizontal analysis compares financial data year-over-year to identify trends (e.g., sales growth). Vertical analysis expresses each line item as a percentage of a base figure (e.g., sales on the income statement) to show its relative size. Comments would focus on trends in profitability, liquidity, and solvency.'
        },
        {
            id: 'pp-acc-2018-p1-q3',
            questionType: 'Other',
            questionText: 'Calculate the amount that would be reported as cash flow from the sale of the machine for XYZ Co.',
            idealAnswer: 'The sale resulted in a gain of Rs. 10,000. Book value of the machine = Cost - Accumulated Depreciation = 400,000 - 290,000 = 110,000. Sale Price = Book Value + Gain = 110,000 + 10,000 = 120,000. The cash flow from the sale is Rs. 120,000.'
        },
        {
            id: 'pp-acc-2018-p1-q4',
            questionType: 'Other',
            questionText: 'Compute the annual depreciation expense for each year for Ayesha Industries under the listed depreciation methods.',
            idealAnswer: 'This requires calculating annual depreciation using: 1. Straight-line method. 2. 20% declining-balance method. 3. Sum-of-the-years\'-digits method. 4. MACRS method based on the 3-year property class rates.'
        },
        {
            id: 'pp-acc-2018-p1-q5',
            questionType: 'Other',
            questionText: 'Prepare a revised income statement and cost of goods manufactured statement for ABC Industries and explain the difference in net profit.',
            idealAnswer: 'This involves reclassifying costs correctly between manufacturing and operating expenses, preparing a formal COGM statement, and then a revised income statement. The difference in profit would be due to the incorrect treatment of factory-related expenses in the original statement.'
        },
        {
            id: 'pp-acc-2018-p1-q6',
            questionType: 'Other',
            questionText: 'Prepare the Cost of Production Report for November 2017 for Delight Food Products.',
            idealAnswer: 'This report requires calculating equivalent units for materials and conversion costs, accounting for normal and abnormal losses. Costs are then assigned to units transferred out, abnormal loss, and ending work in process inventory.'
        },
        {
            id: 'pp-acc-2018-p1-q7',
            questionType: 'Other',
            questionText: 'How many sets of clubs must be sold for Ahmad Enterprises to reach their breakeven point?',
            idealAnswer: 'Breakeven point in units = Fixed Costs / (Selling Price per unit - Variable Cost per unit). Breakeven = 50,000 / (600 - (160000/400)) = 50,000 / (600 - 400) = 250 sets.'
        },
        {
            id: 'pp-acc-2018-p1-q8',
            questionType: 'Other',
            questionText: 'Determine the under-applied or over-applied factory overhead for XYZ Enterprises and pass the required journal entries.',
            idealAnswer: 'Applied FOH = 580,000 * 60% = 348,000. Actual FOH = 428,000. Under-applied FOH = 428,000 - 348,000 = 80,000. Journal entries would close the variance, either to COGS alone or by prorating it among COGS, Finished Goods, and WIP.'
        },
        {
            id: 'pp-acc-2018-p1-q9',
            questionType: 'Other',
            questionText: 'Calculate Total Factory Overhead Variance, Capacity Variance, and Budget Variance for Ayesha & Co.',
            idealAnswer: 'This requires calculating the predetermined overhead rate. Total variance = Actual FOH - Applied FOH. Budget variance = Actual FOH - Budgeted FOH for actual hours. Capacity variance = Budgeted FOH for actual hours - Applied FOH.'
        },
        {
            id: 'pp-acc-2018-p1-q10',
            questionType: 'Other',
            questionText: 'Calculate the total fixed cost of the shipping department of Areeba & Co.',
            idealAnswer: 'Fixed costs are those that do not vary with activity. Fixed Salaries = 800,000 * 75% = 600,000. Fixed Rent = 250,000. Total Fixed Cost = 600,000 + 250,000 = Rs. 850,000. Packaging and postage are variable.'
        }
    ]
  },
  {
    id: 'pp-acc-2018-p2',
    year: 2018,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-acc-2018-p2-q1',
            questionType: 'Other',
            questionText: 'How does an internal control system help management? Explain the difference among internal check, internal audit, and internal control.',
            idealAnswer: 'Internal control helps management safeguard assets, ensure reliable financial reporting, and promote operational efficiency. Internal control is the overall system. Internal check is a part of it, involving the day-to-day arrangement of duties to prevent fraud. Internal audit is an independent appraisal function within the organization to examine and evaluate its activities.'
        },
        {
            id: 'pp-acc-2018-p2-q2',
            questionType: 'Other',
            questionText: 'Explain the purpose of auditing financial statements and the three elements of audit risk.',
            idealAnswer: 'The purpose of an audit is to provide an independent opinion on whether the financial statements present a true and fair view. The three elements of audit risk are: 1. Inherent Risk (the susceptibility of an assertion to a material misstatement), 2. Control Risk (risk that a misstatement will not be prevented or detected by internal controls), and 3. Detection Risk (risk that the auditor\'s procedures will not detect a misstatement).'
        },
        {
            id: 'pp-acc-2018-p2-q3',
            questionType: 'Other',
            questionText: 'Explain the inherent limitations of an audit of financial statements.',
            idealAnswer: 'Inherent limitations mean an audit can only provide reasonable, not absolute, assurance. These limitations include: the use of sampling, the inherent limitations of any accounting and internal control system, the fact that much audit evidence is persuasive rather than conclusive, and the possibility of management override or collusion.'
        },
        {
            id: 'pp-acc-2018-p2-q4',
            questionType: 'Other',
            questionText: 'Explain the law regarding the definition of business and taxability of business income under section (18) of Income Tax Ordinance 2001.',
            idealAnswer: 'Section 18 defines "business" broadly to include any trade, commerce, manufacture, or adventure in the nature of trade. The income from such activities is taxable under the head "Income from Business," after allowing for deductible expenses.'
        },
        {
            id: 'pp-acc-2018-p2-q5',
            questionType: 'Other',
            questionText: 'Calculate the tax payable for Mr. Atif for the tax year 2017.',
            idealAnswer: 'The calculation involves determining his total taxable income by summing salary, bonus, and taxable allowances. Capital gains on securities have a separate tax treatment. Agricultural income is exempt from federal income tax. Zakat paid is a deductible allowance. The final tax is calculated based on the applicable tax slabs for a non-filer.'
        },
        {
            id: 'pp-acc-2018-p2-q6',
            questionType: 'Other',
            questionText: 'What is the scope of sales tax? What is the procedure for transfer of registration and deregistration under Sales Tax Act, 1990?',
            idealAnswer: 'The scope of sales tax covers the supply of all taxable goods and services in Pakistan. Transfer of registration is required when a business is sold or transferred. De-registration can occur if a registered person ceases to make taxable supplies. Both processes involve submitting an application to the FBR.'
        },
        {
            id: 'pp-acc-2018-p2-q7',
            questionType: 'Other',
            questionText: 'Calculate the sales tax liability for Mr Abdul Packages Ltd for July 2016.',
            idealAnswer: 'The calculation involves summing the output tax on all taxable supplies (to registered and non-registered persons) and subtracting the admissible input tax on taxable purchases from registered persons and imports. Exempt and zero-rated supplies are treated differently.'
        },
        {
            id: 'pp-acc-2018-p2-q8',
            questionType: 'Other',
            questionText: 'Explain the role of information technology in business organisations in Pakistan’s scenario.',
            idealAnswer: 'In Pakistan, IT plays a crucial role in improving efficiency through automation, enabling e-commerce, facilitating better communication, and providing access to global markets. It is a key driver for economic growth and competitiveness.'
        },
        {
            id: 'pp-acc-2018-p2-q9',
            questionType: 'Other',
            questionText: 'Calculate the present value of each basketball contract for Raheel Abbas and provide advice.',
            idealAnswer: 'The present value of each offer is calculated by discounting the annual payments back to the present using the given interest rates (8% and 14%). The offer with the higher present value is the better financial choice. Advice would be to choose the contract with the highest NPV.'
        },
        {
            id: 'pp-acc-2018-p2-q10',
            questionType: 'Other',
            questionText: 'Define financial markets and explain their features and classification.',
            idealAnswer: 'Financial markets are platforms where financial instruments like stocks and bonds are traded. Features include price determination and liquidity. They are classified into money markets (short-term debt) and capital markets (long-term debt and equity).'
        },
        {
            id: 'pp-acc-2018-p2-q11',
            questionType: 'Other',
            questionText: 'Calculate the NPV and IRR for the ABC Company\'s new product line project.',
            idealAnswer: 'NPV is calculated by discounting all future cash inflows and outflows to the present using the required rate of return (15% and 10%). If NPV is positive, the project is acceptable. IRR is the discount rate at which the NPV of the project is zero.'
        }
    ]
  },
  {
    id: 'pp-acc-2019-p1',
    year: 2019,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-acc-2019-p1-q1',
            questionType: 'Other',
            questionText: 'Determine the missing amounts in the financial statements of XY. Co.',
            idealAnswer: 'This requires solving for the unknowns using accounting equations. Total Assets = Total Liabilities + Equity. Retained Earnings (End) = RE (Beg) + Net Income - Dividends. Net Income = Revenue - Expenses. By working through these equations, all missing values can be found.'
        },
        {
            id: 'pp-acc-2019-p1-q2',
            questionType: 'Other',
            questionText: 'What is the amount of accumulated depreciation at Dec. 31, 2006 for Burno Co. using the straight-line method?',
            idealAnswer: 'Total cost = 280,000 + 5,000 + 25,000 = 310,000. Depreciable amount = 310,000 - 10,000 = 300,000. Annual Dep. = 300,000 / 5 = 60,000. Accumulated Dep. at Dec 31, 2006 (after 2 years) = 60,000 * 2 = Rs. 120,000.'
        },
        {
            id: 'pp-acc-2019-p1-q3',
            questionType: 'Other',
            questionText: 'What gain or loss should be recognized on the retirement of the plant asset?',
            idealAnswer: 'Annual Dep. = 27,000 / 9 = 3,000. Dep. for 2008 = 3,000 / 2 = 1,500 (discarded June 30). Book Value at disposal = 27,000 - 1,500 = 25,500. Since there were no cash proceeds, the loss on disposal is Rs. 25,500.'
        },
        {
            id: 'pp-acc-2019-p1-q4',
            questionType: 'Other',
            questionText: 'Pass the journal entry for the sale of office furniture for B. Co.',
            idealAnswer: 'Annual Dep. = (150,000-15,000)/10 = 13,500. Acc. Dep. for 5.5 years = 13,500 * 5.5 = 74,250. Book Value = 150,000-74,250=75,750. Sale price=60,000. Loss=15,750. Entry: Dr Cash 60,000, Dr Acc. Dep. 74,250, Dr Loss on Sale 15,750; Cr Office Furniture 150,000.'
        },
        {
            id: 'pp-acc-2019-p1-q5',
            questionType: 'Other',
            questionText: 'Compute the working capital, current ratio, quick ratio, and super quick ratio for AB Ltd.',
            idealAnswer: 'Calculations would be based on the balance sheet figures provided. For example, Current Ratio = Current Assets (Cash + Debtors + Inventory + Prepaid) / Current Liabilities (Creditors + Bills Payable + Other).'
        },
        {
            id: 'pp-acc-2019-p1-q6',
            questionType: 'Other',
            questionText: 'Prepare the cost of production report of Department III by Weighted Average for AB & Co.',
            idealAnswer: 'This involves calculating the cost per equivalent unit for materials and conversion costs using the weighted average method ( (Beginning Cost + Current Cost) / Equivalent Units) and then allocating these costs to the units transferred out and the units in ending work in process.'
        },
        {
            id: 'pp-acc-2019-p1-q7',
            questionType: 'Other',
            questionText: 'For K Co., determine (1) The budget allowance, based on capacity utilized, and (2) the actual factory overhead.',
            idealAnswer: 'Budget Allowance = (Budgeted Fixed OH) + (Budgeted Variable OH Rate * Actual Capacity). The actual factory overhead can be calculated using the spending variance and budget allowance.'
        },
        {
            id: 'pp-acc-2019-p1-q8',
            questionType: 'Other',
            questionText: 'For A Co., determine Mr. X’s total earning, the time saved, daily earnings and the labor cost per unit.',
            idealAnswer: 'This requires applying the 100% Bonus plan. Time saved is the difference between standard hours for production and actual hours worked. The bonus is the time saved multiplied by the hourly rate. Total earnings = (Hours worked * rate) + Bonus.'
        },
        {
            id: 'pp-acc-2019-p1-q9',
            questionType: 'Other',
            questionText: 'Prepare a new contribution format income statement under each of the given conditions for ABC Company.',
            idealAnswer: 'This involves CVP analysis. For each scenario, the sales, variable expenses, contribution margin, and fixed expenses are recalculated to determine the new net operating income.'
        },
        {
            id: 'pp-acc-2019-p1-q10',
            questionType: 'Other',
            questionText: 'Calculate the labor variances for Binamul & Co.',
            idealAnswer: 'Labor Rate Variance = (Actual Rate - Standard Rate) * Actual Hours. Labor Efficiency Variance = (Actual Hours - Standard Hours for actual output) * Standard Rate.'
        }
    ]
  },
  {
    id: 'pp-acc-2019-p2',
    year: 2019,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-acc-2019-p2-q1',
            questionType: 'Other',
            questionText: 'Explain all audit assertions related to class of transactions, account balances, and presentation & disclosure.',
            idealAnswer: 'Assertions for transactions include Occurrence, Completeness, Accuracy, Cutoff, and Classification. For account balances: Existence, Rights & Obligations, Completeness, and Valuation. For presentation & disclosure: Occurrence, Completeness, Classification & Understandability, and Accuracy & Valuation.'
        },
        {
            id: 'pp-acc-2019-p2-q2',
            questionType: 'Other',
            questionText: 'Define and explain different types of audit risks. How are these risks used to manage the audit assignment?',
            idealAnswer: 'Audit risk is the risk that an auditor expresses an inappropriate audit opinion. It consists of Inherent Risk, Control Risk, and Detection Risk. Auditors assess inherent and control risk to determine the acceptable level of detection risk, which in turn dictates the nature, timing, and extent of substantive audit procedures.'
        },
        {
            id: 'pp-acc-2019-p2-q3',
            questionType: 'Other',
            questionText: 'What are Computer Assisted Audit Techniques (CAATs) that can be used in an e-commerce environment?',
            idealAnswer: 'CAATs are applications of auditing procedures using the computer as an audit tool. In e-commerce, they can be used for data analytics (e.g., identifying unusual transactions), testing electronic controls, and verifying the integrity of data processed through online systems.'
        },
        {
            id: 'pp-acc-2019-p2-q4',
            questionType: 'Other',
            questionText: 'Explain the concept of input tax, output tax, zero-rated supply, exempt supply and input tax credit.',
            idealAnswer: 'Output tax is sales tax charged on taxable supplies. Input tax is sales tax paid on purchases. Input tax credit allows a registered person to deduct input tax from their output tax liability. A zero-rated supply is taxable but at a 0% rate (allowing input tax credits). An exempt supply is not subject to sales tax (and no input tax credit is allowed).'
        },
        {
            id: 'pp-acc-2019-p2-q5',
            questionType: 'Other',
            questionText: 'Calculate the tax payable by Mr. Aslam for the year ended 30th June 2018.',
            idealAnswer: 'The calculation involves summing up all taxable income sources (salary, special pay, bonus, allowances), adjusting for the value of free accommodation, and then deducting allowable credits/deductions (Zakat, donation, investment tax credit) to arrive at the final tax payable based on tax slabs.'
        },
        {
            id: 'pp-acc-2019-p2-q6',
            questionType: 'Other',
            questionText: 'What deductions are not allowed to be deducted before arriving at the taxable profits of a business?',
            idealAnswer: 'Deductions not allowed (inadmissible expenses) typically include any personal expenses, capital expenditures, fines and penalties, and provisions for doubtful debts. These are added back to the accounting profit to arrive at taxable profit.'
        },
        {
            id: 'pp-acc-2019-p2-q7',
            questionType: 'Other',
            questionText: 'Calculate the tax payable by Mr. Mohammad Adil.',
            idealAnswer: 'The calculation requires determining total taxable income by adding salary, allowances, and the taxable benefits of the interest-free loan and company car. Agricultural income is exempt. Allowable deductions like Zakat and investment tax credit are then subtracted before applying the tax rates.'
        },
        {
            id: 'pp-acc-2019-p2-q8',
            questionType: 'Other',
            questionText: 'Explain Yield To Maturity (YTM), its calculation, and the procedure used to value bonds that pay interest semiannually.',
            idealAnswer: 'YTM is the total return anticipated on a bond if it is held until it matures. It is the discount rate that equates the present value of a bond\'s future cash flows (coupons and face value) to its current market price. For semiannual bonds, the coupon payments, number of periods, and YTM are all halved and doubled respectively for valuation.'
        },
        {
            id: 'pp-acc-2019-p2-q9',
            questionType: 'Other',
            questionText: 'Calculate the annual, end-of-year loan payment for Joan Messineo and prepare a loan amortization schedule.',
            idealAnswer: 'The annual payment is calculated using the present value of an annuity formula. The amortization schedule then breaks down each payment into its interest component (outstanding balance * interest rate) and principal repayment component (payment - interest).'
        },
        {
            id: 'pp-acc-2019-p2-q10',
            questionType: 'Other',
            questionText: 'Explain the relationships among financial decisions, return, risk and the firm’s value.',
            idealAnswer: 'Financial decisions (investment, financing, dividend) affect the firm\'s risk and return profile. Higher risk investments are expected to generate higher returns. The firm\'s value is determined by the present value of its expected future cash flows, discounted at a rate that reflects its risk. The goal is to make decisions that maximize firm value by finding the optimal balance between risk and return.'
        },
        {
            id: 'pp-acc-2019-p2-q11',
            questionType: 'Other',
            questionText: 'Calculate the payback period, NPV, and IRR for Nicholson Roofing\'s projects and make a recommendation.',
            idealAnswer: 'Payback period is the time to recover the initial investment. NPV is the present value of cash inflows minus the initial investment. IRR is the discount rate at which NPV is zero. The recommendation should be based on which project best meets the company\'s criteria (e.g., highest NPV, acceptable payback period).'
        }
    ]
  },
  {
    id: 'pp-acc-2020-p1',
    year: 2020,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-acc-2020-p1-q1',
            questionType: 'Other',
            questionText: 'Journalize transactions, prepare trial balances (unadjusted and adjusted), and prepare financial statements for R and Equipment Repair, Inc.',
            idealAnswer: 'This comprehensive problem requires: 1. Journalizing September transactions. 2. Preparing a trial balance. 3. Journalizing and posting adjusting entries for supplies, salaries, depreciation, and unearned revenue. 4. Preparing an adjusted trial balance. 5. Preparing the income statement, statement of retained earnings, and balance sheet.'
        },
        {
            id: 'pp-acc-2020-p1-q2',
            questionType: 'Other',
            questionText: 'Supply the missing data and comment on the relative performance of Companies X, Y, and Z.',
            idealAnswer: 'This involves using financial ratio formulas (Profit Margin, Asset Turnover, ROA) to solve for the missing values (a through i). Comments would compare the companies based on their profitability and efficiency in using their assets.'
        },
        {
            id: 'pp-acc-2020-p1-q3',
            questionType: 'Other',
            questionText: 'Compute the accounts receivable turnover and collection period for The Rivers Company and evaluate the results.',
            idealAnswer: 'A/R Turnover = Net Credit Sales / Average A/R. Collection Period = 365 / A/R Turnover. The results would be evaluated by comparing them between the two years and to the company\'s credit terms (net 30 days) to assess the efficiency of collecting receivables.'
        },
        {
            id: 'pp-acc-2020-p1-q4',
            questionType: 'Other',
            questionText: 'Estimate future cash inflows and determine the NPV for the Wessal Karim Corporation\'s proposed conveyor project.',
            idealAnswer: 'This requires calculating the annual after-tax cash flows, which include cost savings and new costs, and also considers the tax shield from depreciation (using MACRS). The NPV is then calculated by discounting these cash flows at 10%. A positive NPV would indicate the project should be accepted.'
        },
        {
            id: 'pp-acc-2020-p1-q5',
            questionType: 'Other',
            questionText: 'Prepare Majid, Inc.\'s statement of cash flows using the direct method.',
            idealAnswer: 'The statement of cash flows organizes cash flows into three activities: Operating, Investing, and Financing. The direct method for operating activities lists major classes of gross cash receipts and payments (e.g., cash collected from customers, cash paid to suppliers).'
        },
        {
            id: 'pp-acc-2020-p1-q6',
            questionType: 'Other',
            questionText: 'Compute the budgeted factory overhead rates and total overhead cost for Job #10 for Modern Geezer Company.',
            idealAnswer: 'FOH Rate Dept. A = Budgeted FOH / Budgeted Direct Labor Cost. FOH Rate Dept. B = Budgeted FOH / Budgeted Machine Hours. Total overhead for Job #10 is the sum of overhead applied from both departments using their respective rates and the job\'s actual activity.'
        },
        {
            id: 'pp-acc-2020-p1-q7',
            questionType: 'Other',
            questionText: 'Determine the annual manufacturing overhead cost-allocation rate and the costs allocated to the Somerset High School Job.',
            idealAnswer: 'The allocation rate = Total Estimated Mfg. Overhead / Total Estimated Machine Hours. The cost allocated to the job = Allocation Rate * Actual Machine Hours for the job. The total cost is the sum of direct materials, direct labor, and allocated overhead.'
        },
        {
            id: 'pp-acc-2020-p1-q8',
            questionType: 'Other',
            questionText: 'Determine the equivalent units in process for direct materials and conversion costs for Sodius Chemical Inc.',
            idealAnswer: 'Equivalent units measure the work done on units, expressed in fully completed units. For weighted-average, EU = (Units completed and transferred out) + (Equivalent units in ending WIP). This is calculated separately for materials and conversion costs.'
        },
        {
            id: 'pp-acc-2020-p1-q9',
            questionType: 'Other',
            questionText: 'Prepare income statements using absorption costing and variable costing for Asghar Manufacturing Company.',
            idealAnswer: 'Absorption costing includes fixed manufacturing overhead in the cost of goods sold. Variable costing treats all fixed costs as period expenses. The different treatment of fixed overhead in inventory causes the net income to differ between the two methods.'
        },
        {
            id: 'pp-acc-2020-p1-q10',
            questionType: 'Other',
            questionText: 'What is the total manufacturing cost per chip for Big Mind Corporation and how are the costs allocated?',
            idealAnswer: 'This requires a process costing calculation. The cost per equivalent unit is calculated for materials and conversion costs. This unit cost is then used to allocate the total manufacturing costs between the completed chips and the chips remaining in ending work in process inventory.'
        },
        {
            id: 'pp-acc-2020-p1-q11',
            questionType: 'Other',
            questionText: 'Compute the budgeted factory overhead rate, applied overhead, and the amount of over/under applied overhead for Smart-view Company.',
            idealAnswer: 'Budgeted Rate = Budgeted FOH / Budgeted DLH. Applied FOH = Budgeted Rate * Actual DLH. Over/under applied = Actual FOH - Applied FOH.'
        },
        {
            id: 'pp-acc-2020-p1-q12',
            questionType: 'Other',
            questionText: 'Prepare a production cost worksheet, using FIFO for the finishing department of Umar Company.',
            idealAnswer: 'The FIFO method in process costing separates the costs of the beginning inventory from the costs of the current period. The worksheet would track the flow of units and costs, calculating separate costs for units started and completed in the current period and for completing the beginning WIP.'
        },
        {
            id: 'pp-acc-2020-p1-q13',
            questionType: 'Other',
            questionText: 'Provide ideas for what may have caused the direct materials and direct labor variances for Luqman Manufacturing Company.',
            idealAnswer: 'Material price variance could be caused by purchasing higher/lower quality materials or price fluctuations. Material efficiency variance could be due to worker skill or material quality. Labor price variance could be due to using higher/lower skilled workers. Labor efficiency variance could be due to worker skill or poor supervision.'
        }
    ]
  },
  {
    id: 'pp-acc-2020-p2',
    year: 2020,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-acc-2020-p2-q1',
            questionType: 'Other',
            questionText: 'Why is computerized audit required in the presence of manual audit? Elaborate on using CAATs.',
            idealAnswer: 'Computerized audit is required to effectively audit complex, high-volume electronic data systems where manual auditing would be impractical or impossible. CAATs (Computer Assisted Audit Techniques) allow auditors to analyze large datasets, test system controls, and perform substantive tests more efficiently and effectively.'
        },
        {
            id: 'pp-acc-2020-p2-q2',
            questionType: 'Other',
            questionText: 'Define audit and comment on "reasonable assurance" and "True & Fair view".',
            idealAnswer: 'An audit is an independent examination of financial information. "Reasonable assurance" means the auditor provides a high, but not absolute, level of assurance because of inherent limitations in an audit. "True & Fair view" is the auditor\'s opinion that the financial statements are free from material misstatements and faithfully represent the company\'s financial position and performance.'
        },
        {
            id: 'pp-acc-2020-p2-q3',
            questionType: 'Other',
            questionText: 'Write notes on Audit materiality, Misstatement and Fraud, and Test of Control and Substantive Procedures.',
            idealAnswer: 'Audit materiality refers to the significance of an amount, transaction, or discrepancy. Misstatement is an error, while fraud is an intentional act of deception. Tests of control evaluate the effectiveness of a client\'s internal controls. Substantive procedures are designed to detect material misstatements at the assertion level.'
        },
        {
            id: 'pp-acc-2020-p2-q4',
            questionType: 'Other',
            questionText: 'Elaborate on the definitions of Heads of Income, Tax Credits, and Capital Gains under the Income Tax Ordinance 2001.',
            idealAnswer: 'Heads of Income are the categories under which income is classified for tax purposes (Salary, Property, Business, Capital Gains, Other Sources). Tax Credits are reductions in tax liability for certain investments or donations. Capital Gains are profits from the sale of capital assets like property or shares.'
        },
        {
            id: 'pp-acc-2020-p2-q5',
            questionType: 'Other',
            questionText: 'Calculate the total income and tax payable by ABC (Pvt) Limited for the tax year 2019.',
            idealAnswer: 'The calculation involves starting with the net profit and adding back all inadmissible expenses (like un-vouched expenses, provision for bad debts, donation to unrecognized institutions) to arrive at the taxable income. Tax liability is then calculated based on the corporate tax rates for a non-filer.'
        },
        {
            id: 'pp-acc-2020-p2-q6',
            questionType: 'Other',
            questionText: 'How many legal forms of Business Entity exist in Pakistan? Explain the features and formation of a Joint Stock Company.',
            idealAnswer: 'Main forms are Sole Proprietorship, Partnership, and Joint Stock Company. A Joint Stock Company is a legal entity separate from its owners (shareholders), has limited liability, and perpetual succession. Formation stages include promotion, incorporation (registration with SECP), and commencement of business.'
        },
        {
            id: 'pp-acc-2020-p2-q7',
            questionType: 'Other',
            questionText: 'What is the Weighted Average Cost of Capital (WACC) for XYZ Co. assuming it does not pay taxes?',
            idealAnswer: 'WACC = (Weight of Debt * Cost of Debt) + (Weight of Preferred Stock * Cost of Preferred Stock) + (Weight of Common Stock * Cost of Common Stock). Since there are no taxes, the cost of debt is not adjusted. The weights are based on the market values of each capital component.'
        }
    ]
  },
  {
    id: 'pp-acc-2021-p1',
    year: 2021,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-acc-2021-p1-q1',
            questionType: 'Other',
            questionText: 'Prepare an Income Statement for the period ending 31st December, 2019 based on the provided data.',
            idealAnswer: 'The income statement would be prepared in a multi-step format. Start with Sales, deduct Sales Returns and Discounts to get Net Sales. Calculate Cost of Goods Sold (Opening Inv + Purchases - Purchase Returns/Discounts - Closing Inv). Gross Profit = Net Sales - COGS. Then deduct Selling Expenses and Administrative Expenses to find Net Income.'
        },
        {
            id: 'pp-acc-2021-p1-q2',
            questionType: 'Other',
            questionText: 'Show the journal entries for the admission of partner K, if he pays for goodwill in cash, and if he is unable to bring cash for goodwill.',
            idealAnswer: '(A) If cash is paid: Dr. Cash, Cr. K\'s Capital, Dr. Cash, Cr. Goodwill (or existing partners\' capital accounts). (B) If cash is not paid: Goodwill is raised by debiting Goodwill account and crediting old partners\' capital accounts in their old profit-sharing ratio. Then, the goodwill is written off by debiting all partners (including new) in the new ratio and crediting Goodwill.'
        },
        {
            id: 'pp-acc-2021-p1-q3',
            questionType: 'Other',
            questionText: 'Calculate the annual depreciation expense for the XYZ delivery truck by applying the sum-of-the-year-digits method and prepare the depreciation schedule.',
            idealAnswer: 'Sum of digits for 5 years = 5+4+3+2+1=15. Depreciable base = 65,000 - 5,000 = 60,000. Year 1 Dep = (5/15)*60,000. Year 2 Dep = (4/15)*60,000, and so on. The schedule would show the annual depreciation, accumulated depreciation, and book value for each year.'
        },
        {
            id: 'pp-acc-2021-p1-q4',
            questionType: 'Other',
            questionText: 'Prepare a job order cost sheet for Attock Engineering Co. Ltd and calculate the sales price.',
            idealAnswer: 'The job order cost sheet would accumulate all costs for the job: total direct materials, total direct labor from both departments, and applied factory overhead from both departments. The total cost to manufacture is then calculated. Marketing and admin costs (20%) are added to get total cost. Finally, a 40% markup is added to find the sales price.'
        },
        {
            id: 'pp-acc-2021-p1-q5',
            questionType: 'Other',
            questionText: 'Compute Volter company’s CM ratio, variable expense ratio, and breakeven point.',
            idealAnswer: 'CM Ratio = Contribution Margin / Sales = 300,000 / 1,200,000 = 25%. Variable Expense Ratio = Variable Expenses / Sales = 900,000 / 1,200,000 = 75%. Breakeven (Rs) = Fixed Expenses / CM Ratio = 240,000 / 0.25 = 960,000. Breakeven (units) = Fixed Expenses / CM per unit = 240,000 / 15 = 16,000 units.'
        },
        {
            id: 'pp-acc-2021-p1-q6',
            questionType: 'Other',
            questionText: 'Prepare the cost of production report for Department 2 for April for Brooks Inc.',
            idealAnswer: 'This report requires calculating the equivalent units of production for costs from the preceding department, materials, and conversion costs. The degree of completion for the units still in process is a weighted average. The cost per equivalent unit is then calculated and used to value the goods transferred out and the ending WIP inventory.'
        },
        {
            id: 'pp-acc-2021-p1-q7',
            questionType: 'Other',
            questionText: 'Determine the predetermined overhead rate and the overhead applied during the year for Tasty Inc.',
            idealAnswer: '(A) Predetermined Rate = Estimated Overhead / Estimated Machine Hours = 75,000 / 25,000 = Rs. 3 per machine hour. (B) Overhead Applied = Predetermined Rate * Actual Machine Hours = 3 * 24,000 = Rs. 72,000.'
        }
    ]
  },
  {
    id: 'pp-acc-2021-p2',
    year: 2021,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-acc-2021-p2-q1',
            questionType: 'Other',
            questionText: 'Explain in detail why there is an established need for auditing services for various organizations.',
            idealAnswer: 'Auditing is needed to provide credibility to financial information for external stakeholders (investors, lenders) in public/private corporations. For government agencies, it ensures accountability for public funds. For partnerships, it can prevent and detect fraud and provide assurance to partners.'
        },
        {
            id: 'pp-acc-2021-p2-q2',
            questionType: 'Other',
            questionText: 'Explain computer audit approaches and the characteristics of an Electronic Data Processing (EDP) system.',
            idealAnswer: 'Computer audit approaches include "auditing around the computer" (testing inputs and outputs) and "auditing through the computer" (using the computer itself to test controls and data, e.g., with CAATs). EDP systems are characterized by concentration of data and functions, lack of a visible audit trail, and uniform processing of transactions.'
        },
        {
            id: 'pp-acc-2021-p2-q3',
            questionType: 'Other',
            questionText: 'Write a detailed note on the types of audit and auditors (GAAS).',
            idealAnswer: 'Types of audits include financial statement audits, compliance audits, and operational audits. Types of auditors include external (independent) auditors, internal auditors, and governmental auditors. GAAS (Generally Accepted Auditing Standards) are the professional standards against which the quality of an auditor\'s performance is measured.'
        },
        {
            id: 'pp-acc-2021-p2-q4',
            questionType: 'Other',
            questionText: 'What do we mean by Resident and Non-Resident persons and different kinds of tax years according to the Income Tax Ordinance, 2001?',
            idealAnswer: 'A resident person (individual or company) is generally one who is present in Pakistan for a certain period or is managed from within Pakistan; their global income is taxable. A non-resident\'s Pakistan-source income is taxable. A normal tax year ends on June 30. A special tax year is any other 12-month period.'
        },
        {
            id: 'pp-acc-2021-p2-q5',
            questionType: 'Other',
            questionText: 'Calculate the tax payable by Mr. Sohail Aslam for the year ended 30th June 2020.',
            idealAnswer: 'The calculation involves determining total taxable income by summing salary, special pay, bonus, and taxable portions of allowances and benefits. Deductions for Zakat, donations, and pension contributions are then applied. The final tax liability is calculated based on the applicable tax slabs for that year.'
        },
        {
            id: 'pp-acc-2021-p2-q6',
            questionType: 'Other',
            questionText: 'Give hypothetical journal transactions that will have various effects on the elements of the balance sheet equation.',
            idealAnswer: '(i) Buy asset on credit: Dr Asset, Cr Liability. (ii) Pay liability with cash: Dr Liability, Cr Asset (Cash). (iii) Buy asset with cash: Dr Asset, Cr Asset (Cash). (iv) Owner invests cash: Dr Asset (Cash), Cr Equity. (v) Buy asset with part cash, part credit: Dr Asset, Cr Asset (Cash), Cr Liability.'
        },
        {
            id: 'pp-acc-2021-p2-q7',
            questionType: 'Other',
            questionText: 'Complete the balance sheet using the provided financial ratios.',
            idealAnswer: 'This is a puzzle that requires using the given ratios and starting values to solve for all the unknown balance sheet items. For example, use the Gross Profit Margin to find COGS, then Inventory Turnover to find Inventory, then Acid-Test Ratio to find other current assets, and so on.'
        },
        {
            id: 'pp-acc-2021-p2-q8',
            questionType: 'Other',
            questionText: 'Explain in detail the factors which are related to the risk structure of interest rates.',
            idealAnswer: 'The risk structure of interest rates explains why bonds with the same maturity have different interest rates. Factors include: 1. Default Risk (the risk the issuer won\'t pay). 2. Liquidity (less liquid bonds have higher rates). 3. Tax Treatment (tax-exempt bonds have lower rates).'
        }
    ]
  },
  {
    id: 'pp-acc-2022-p1',
    year: 2022,
    subject: 'Accountancy & Auditing',
    questions: [
      {
        id: 'pp-acc-2022-p1-q1',
        questionType: 'Other',
        questionText: 'For Campus Theater, prepare the necessary adjusting entries for August.',
        idealAnswer: 'This requires preparing 8 adjusting entries for: expired film rental, building depreciation, equipment depreciation, accrued interest, earned admissions revenue, accrued concessions revenue, accrued salaries, and accrued income taxes.'
      },
      {
        id: 'pp-acc-2022-p1-q2',
        questionType: 'Other',
        questionText: 'For Campus Theater, how many months of expense are included in Utilities Expense, Depreciation Expense, and Accumulated Depreciation: Building?',
        idealAnswer: '1. Utilities Expense: 1 month (as bills are recorded monthly). 2. Depreciation Expense: 1 month (August depreciation). 3. Accumulated Depreciation: Building: 8 months (Jan-Aug).'
      },
      {
        id: 'pp-acc-2022-p1-q3',
        questionType: 'Other',
        questionText: 'Explain why Campus Theater\'s income taxes expense is larger than its income taxes payable.',
        idealAnswer: 'This is normal because income tax expense is accrued monthly based on that month\'s profit, while the actual cash payment to the government is made in installments (e.g., quarterly). The payable account represents the amount currently due, while the expense reflects the total tax for the period.'
      },
      {
        id: 'pp-acc-2022-p1-q4',
        questionType: 'Other',
        questionText: 'Prepare journal entries to record each of the disposal transactions for Hitchcock Developers.',
        idealAnswer: 'Each transaction requires a journal entry to remove the asset and its accumulated depreciation from the books, record any cash or other assets received, and recognize any gain or loss on the disposal.'
      },
      {
        id: 'pp-acc-2022-p1-q5',
        questionType: 'Other',
        questionText: 'Will the gains and losses recorded for Hitchcock Developers affect the gross profit?',
        idealAnswer: 'No, gains and losses on the disposal of plant assets are typically reported in the "Other Income and Expenses" section of the income statement, after the calculation of gross profit. Gross profit is only affected by sales and the cost of goods sold.'
      },
      {
        id: 'pp-acc-2022-p1-q6',
        questionType: 'Other',
        questionText: 'Work out a Profit and Loss Adjustment Account and show revised Capital Accounts for partners S, T, and Q.',
        idealAnswer: 'This requires first calculating the opening capital for 2021. Then, a P&L Adjustment Account must be prepared to correct the errors (omitted interest on capital, salary, and interest on loan). The resulting adjusted profit/loss is re-allocated, and revised capital accounts are prepared.'
      },
      {
        id: 'pp-acc-2022-p1-q7',
        questionType: 'Other',
        questionText: 'Explain what, if any, disclosure is required for the five given items under GAAP.',
        idealAnswer: '(a) Yes, disclosure of accounting policy is required. (b) No, not required as it\'s a non-financial event. (c) Yes, disclosure of this subsequent event is required. (d) No, disclosure of speculative future profits is not appropriate. (e) Disclosure may be required if the loss is considered probable or reasonably possible.'
      },
      {
        id: 'pp-acc-2022-p1-q8',
        questionType: 'Other',
        questionText: 'Prepare job order cost sheets and journalize the March transactions for Juarez Inc.',
        idealAnswer: 'This involves setting up job cost sheets for the three jobs and posting the beginning balances. Then, all March transactions (materials purchase/requisition, labor, overhead application, completion of jobs, sale of jobs) must be journalized and posted to both the general ledger and the job cost sheets.'
      },
      {
        id: 'pp-acc-2022-p1-q9',
        questionType: 'Other',
        questionText: 'Calculate the dollar amount of the 23.2% labor cost increase for Wheeler Company.',
        idealAnswer: 'First, calculate the labor cost before the plan (40 hours * sum of hourly rates). Then calculate the labor cost after the plan (40 hours * sum of base rates + premium for 15 extra units). The difference is the dollar increase.'
      },
      {
        id: 'pp-acc-2022-p1-q10',
        questionType: 'Other',
        questionText: 'Give an opinion, supported by figures, as to whether the shop superintendent was correct in assuming that the incentive wage plan was too costly.',
        idealAnswer: 'An opinion would involve comparing the percentage increase in labor cost (23.2%) with the percentage increase in productivity (10%). While the labor cost increase is higher, other factors like the contribution margin from the extra 15 units and potential for improved morale should be considered before deeming it "too costly".'
      },
      {
        id: 'pp-acc-2022-p1-q11',
        questionType: 'Other',
        questionText: 'Prepare the budgeted cost of goods manufactured and sold statement for WKZ Inc.',
        idealAnswer: 'This requires working backward from the budgeted earnings and sales figures. Calculate the total allowed manufacturing cost. Since labor is 50%, this determines the direct labor cost. Then, prepare the COGM and COGS statement, solving for the budgeted factory overhead as the balancing figure.'
      }
    ]
  },
  {
    id: 'pp-acc-2022-p2',
    year: 2022,
    subject: 'Accountancy & Auditing',
    questions: [
      {
        id: 'pp-acc-2022-p2-q1',
        questionType: 'Other',
        questionText: 'Define audit planning. What factors should be considered by an auditor in developing an audit plan?',
        idealAnswer: 'Audit planning involves establishing the overall audit strategy. Factors to consider include: understanding the client\'s business and industry, assessing materiality and audit risk, identifying key accounting policies, and determining the nature, timing, and extent of audit procedures.'
      },
      {
        id: 'pp-acc-2022-p2-q2',
        questionType: 'Other',
        questionText: 'Define an audit program. Give its advantages and disadvantages.',
        idealAnswer: 'An audit program is a detailed set of instructions and procedures for the audit. Advantages: ensures all areas are covered, provides a basis for assigning work, and serves as evidence of work done. Disadvantages: can be rigid and may stifle auditor initiative.'
      },
      {
        id: 'pp-acc-2022-p2-q3',
        questionType: 'Other',
        questionText: 'What are the purposes/benefits of conducting an audit through a fixed audit program?',
        idealAnswer: 'Benefits include ensuring systematic and uniform work, providing clear instructions to audit staff, fixing responsibility, and helping to ensure that no important areas are overlooked during the audit.'
      },
      {
        id: 'pp-acc-2022-p2-q4',
        questionType: 'Other',
        questionText: 'Define ‘Fraud’ as applied to accounting. What are different types of frauds?',
        idealAnswer: 'Fraud is an intentional act involving deception to obtain an unjust or illegal advantage. Types include: 1. Fraudulent Financial Reporting (e.g., overstating revenues) and 2. Misappropriation of Assets (e.g., embezzlement, theft of inventory).'
      },
      {
        id: 'pp-acc-2022-p2-q5',
        questionType: 'Other',
        questionText: 'How will you detect and prevent the frauds related with embezzlement of cash?',
        idealAnswer: 'Prevention involves strong internal controls like segregation of duties (handling cash vs. recording it), mandatory vacations, and regular bank reconciliations. Detection involves surprise cash counts, scrutinizing bank statements, and analyzing records for unusual patterns.'
      },
      {
        id: 'pp-acc-2022-p2-q6',
        questionType: 'Other',
        questionText: 'Calculate the taxable income and tax liability of ABC company for the tax year 2021.',
        idealAnswer: 'This requires adjusting the accounting profit by adding back disallowed expenses (e.g., donation to unrecognized institution, portion of vehicle expenses, provision for bad debts, preliminary expenses) and adjusting depreciation to the tax-allowed amount. The tax liability is then calculated on the resulting taxable income.'
      },
      {
        id: 'pp-acc-2022-p2-q7',
        questionType: 'Other',
        questionText: 'Discuss ten allowable deductions under the head of “income from business” under section 20 of Income Tax Ordinance 2001.',
        idealAnswer: 'Allowable deductions include rent of premises, repairs, salaries and wages, interest on borrowed capital, bad debts actually written off, depreciation, scientific research expenditure, and other expenses incurred wholly and exclusively for the purpose of the business.'
      },
      {
        id: 'pp-acc-2022-p2-q8',
        questionType: 'Other',
        questionText: 'What is the purpose of financial markets? How can this purpose be accomplished efficiently?',
        idealAnswer: 'The purpose is to channel funds from savers (lenders) to borrowers (investors). This is accomplished efficiently when markets are liquid, transparent, and have low transaction costs, allowing for accurate price discovery and efficient capital allocation.'
      },
      {
        id: 'pp-acc-2022-p2-q9',
        questionType: 'Other',
        questionText: 'Discuss the functions of financial intermediaries.',
        idealAnswer: 'Functions include: 1. Maturity Transformation (taking short-term deposits and making long-term loans). 2. Risk Transformation (pooling risks). 3. Providing liquidity. 4. Reducing transaction costs by achieving economies of scale.'
      },
      {
        id: 'pp-acc-2022-p2-q10',
        questionType: 'Other',
        questionText: 'Why do bonds with long maturities fluctuate more in price than bonds with short maturities, given the same change in yield to maturity?',
        idealAnswer: 'This is due to the concept of duration. Long-maturity bonds have a longer duration, meaning their cash flows are received further in the future. A change in interest rates has a greater impact on the present value of these distant cash flows, causing their price to be more volatile.'
      }
    ]
  },
  {
    id: 'pp-acc-2023-p1',
    year: 2023,
    subject: 'Accountancy & Auditing',
    questions: [
      {
        id: 'pp-acc-2023-p1-q1',
        questionType: 'Other',
        questionText: 'What are the Accounting Principles? Define any four accounting principles shortly.',
        idealAnswer: 'Accounting principles are the basic rules and guidelines for financial reporting. Four examples: 1. Cost Principle: Assets are recorded at their original cost. 2. Matching Principle: Expenses are matched with the revenues they generate. 3. Full Disclosure Principle: All relevant information must be disclosed. 4. Revenue Recognition Principle: Revenue is recognized when earned.'
      },
      {
        id: 'pp-acc-2023-p1-q2',
        questionType: 'Other',
        questionText: 'What are the Accounting Conventions? Define any four accounting conventions shortly.',
        idealAnswer: 'Accounting conventions are customs or traditions that guide the preparation of financial statements. Four examples: 1. Conservatism: When in doubt, choose the solution that least overstates assets and income. 2. Consistency: Use the same accounting methods year after year. 3. Materiality: Ignore insignificant items. 4. Industry Practice: Follow the specific practices of an industry.'
      },
      {
        id: 'pp-acc-2023-p1-q3',
        questionType: 'Other',
        questionText: 'Prepare a Trial Balance for Emerging Technologies Pvt. Ltd. as on 31st August 2022.',
        idealAnswer: 'A trial balance lists all general ledger accounts and their balances. Debits (Assets, Drawings, Expenses, Returns Inward) are listed in one column and Credits (Liabilities, Capital, Revenue, Returns Outward) in another. The two columns must be equal.'
      },
      {
        id: 'pp-acc-2023-p1-q4',
        questionType: 'Other',
        questionText: 'Compute EPS, ROE, and Book Value per share for Deluxe Software for 2020 and 2021.',
        idealAnswer: 'EPS = Profit after tax / Number of Shares. ROE = Profit after tax / Closing Equity * 100. BV per share = Closing Equity / Number of Shares.'
      },
      {
        id: 'pp-acc-2023-p1-q5',
        questionType: 'Other',
        questionText: 'Compute dividend per share and rate of dividend for the year 2022 for Deluxe Software.',
        idealAnswer: 'The question likely meant for 2021 and 2020. Dividend per share = Total Dividend / Number of Shares. Rate of dividend = (Total Dividend / Profit after tax) * 100 (payout ratio) or (Dividend per share / book value per share).'
      },
      {
        id: 'pp-acc-2023-p1-q6',
        questionType: 'Other',
        questionText: 'Compute the estimated book value, Profit after Tax, Dividend and Equity for Deluxe Software for the year 2022.',
        idealAnswer: 'This requires working backward from the targets. Estimated PAT = EPS target * Number of shares. Estimated Closing Equity = PAT / ROE target. Estimated Dividend can be calculated if a payout ratio is assumed or from the change in equity.'
      },
      {
        id: 'pp-acc-2023-p1-q7',
        questionType: 'Other',
        questionText: 'Prepare a cash flow statement of Premium Fabrics as per IAS-7 for the year 2022.',
        idealAnswer: 'The cash flow statement requires calculating cash flows from operating, investing, and financing activities. Operating activities can be calculated using the indirect method, starting with net income and adjusting for non-cash items and changes in working capital. Investing activities include the sale of the motor vehicle. Financing activities include dividends paid and changes in running finance.'
      },
      {
        id: 'pp-acc-2023-p1-q8',
        questionType: 'Other',
        questionText: 'Prepare Trading and Profit and Loss account and Balance Sheet for Mr. Haider\'s business as on 31st December 2022.',
        idealAnswer: 'This requires constructing the financial statements from the cash book and other data. Calculate total sales (cash + credit) and total purchases. Prepare the P&L account to find the net profit. Prepare the balance sheet by listing assets (Cash, Receivables, Stock, Motorbike net of depreciation) and liabilities & equity (Payables, Capital + Profit - Drawings).'
      },
      {
        id: 'pp-acc-2023-p1-q9',
        questionType: 'Other',
        questionText: 'Calculate the gross wage of Mr. Afzal for the week using the Rowan Premium bonus scheme.',
        idealAnswer: 'First, calculate basic wage (48 hours * rate) and dearness allowance. Then for the bonus, calculate Time Saved = Time Allowed - Time Taken. Bonus = (Time Saved / Time Allowed) * Time Taken * Basic Wage Rate. Gross wage = Basic + DA + Bonus.'
      },
      {
        id: 'pp-acc-2023-p1-q10',
        questionType: 'Other',
        questionText: 'Calculate Economic Order Quantity (EOQ) and Reorder point for the Automobile factory.',
        idealAnswer: 'EOQ = sqrt( (2 * Annual Demand * Ordering Cost) / Holding Cost per unit ). Reorder Point = (Demand per day * Lead time) + Safety Stock. Safety Stock = Demand per day * 2 days.'
      },
      {
        id: 'pp-acc-2023-p1-q11',
        questionType: 'Other',
        questionText: 'Prepare an Income Statement for the Lahore manufacturing company for the year ended 31st December 2022.',
        idealAnswer: 'The income statement would be prepared by first calculating the cost of goods manufactured, then the cost of goods sold, which is subtracted from net sales to get gross profit. Finally, selling and administrative expenses are deducted to arrive at the net profit.'
      },
      {
        id: 'pp-acc-2023-p1-q12',
        questionType: 'Other',
        questionText: 'Calculate the breakeven point and required turnover for Khizra manufacturing corporation.',
        idealAnswer: 'a) Breakeven Point (Units) = Fixed Costs / (Selling Price - Variable Cost). b) Contribution = Sales * CM Ratio. Profit = Contribution - Fixed Costs. c) Required Sales = (Fixed Costs + Target Profit) / CM Ratio.'
      },
      {
        id: 'pp-acc-2023-p1-q13',
        questionType: 'Other',
        questionText: 'Prepare an Income statement for 2022 and a Balance Sheet as on 31st December 2022 for Fazal Din & Co.',
        idealAnswer: 'This complex problem requires working through the transactions of the year to reconstruct the financial statements. It involves calculating COGM, COGS, adjusting for overhead variance, and then using the resulting net income and changes in assets/liabilities to build the closing balance sheet.'
      },
      {
        id: 'pp-acc-2023-p1-q14',
        questionType: 'Other',
        questionText: 'Prepare the payroll for the chemical factory for the last week of December 2022 showing basic pay, overtime, and incentive amount.',
        idealAnswer: 'This requires calculating: 1. Basic pay for normal hours. 2. Overtime pay at a premium rate for hours worked above normal. 3. Total time saved (Standard time for output - Total hours worked). 4. The group incentive bonus, which is then allocated to each grade based on hours worked.'
      }
    ]
  },
  {
    id: 'pp-acc-2023-p2',
    year: 2023,
    subject: 'Accountancy & Auditing',
    questions: [
      {
        id: 'pp-acc-2023-p2-q1',
        questionType: 'Other',
        questionText: 'Define professional skepticism and explain its key characteristics. Why should auditors act as though there is always a potential conflict of interest between the auditor and the management?',
        idealAnswer: 'Professional skepticism is an attitude that includes a questioning mind and a critical assessment of audit evidence. Characteristics include being alert to conditions that may indicate misstatement and not being satisfied with less-than-persuasive evidence. Auditors should assume a potential conflict of interest because management has incentives to present the company in the best possible light, which may lead to bias or intentional misstatement.'
      },
      {
        id: 'pp-acc-2023-p2-q2',
        questionType: 'Other',
        questionText: 'What are CAATs? What are some audit procedures that can be performed using them, and what are their advantages?',
        idealAnswer: 'CAATs (Computer-Assisted Audit Techniques) use software to audit electronic data. Procedures include data analytics to identify outliers, recalculating balances, and selecting samples. Advantages include the ability to test 100% of a population, increased efficiency, and improved effectiveness in detecting fraud.'
      },
      {
        id: 'pp-acc-2023-p2-q3',
        questionType: 'Other',
        questionText: 'Define and explain the differences among several kinds of employee frauds that might occur at an audit client.',
        idealAnswer: 'Employee fraud, or misappropriation of assets, can include: 1. Larceny (theft of cash after it has been recorded). 2. Skimming (theft of cash before it is recorded). 3. Fictitious expense reimbursement schemes. 4. Payroll fraud (e.g., ghost employees). The key difference is the method used to steal company assets.'
      },
      {
        id: 'pp-acc-2023-p2-q4',
        questionType: 'Other',
        questionText: 'Compute the taxable income of Zia and Ishaq for the tax year 20x5.',
        idealAnswer: 'For Zia, the sale of shares results in a capital gain, which is taxable. The gift to his son is not a taxable event for Zia. For Ishaq, the cost base of the gifted assets is the cost to the original owner (his grandfather). His taxable income is the capital gain calculated as (Sale Price - Original Cost).'
      },
      {
        id: 'pp-acc-2023-p2-q5',
        questionType: 'Other',
        questionText: 'Explain the correct tax treatment in each of the six given situations.',
        idealAnswer: '1. Donation is eligible for a tax credit. 2. Sale of sculpture held for more than one year is a capital gain, taxed at a specific rate. 3. Forfeited advance is taxed as "Income from Other Sources". 4. Sale of a personal car is generally not subject to capital gains tax. 5. Imran\'s residency status needs to be determined to see if his foreign salary is taxable in Pakistan. 6. The net receipt from consultancy is income from business; the gross amount (50,000) is taxable.'
      },
      {
        id: 'pp-acc-2023-p2-q6',
        questionType: 'Other',
        questionText: 'For Fitch Industries, calculate the payback period, NPV, and IRR for each project and make a recommendation.',
        idealAnswer: 'Payback is the time to recover the initial investment. NPV is the present value of inflows minus outflows, discounted at the 9% cost of capital. IRR is the discount rate where NPV is zero. The recommendation should be for the project with the higher NPV, as it adds more value, assuming it meets the payback period requirement.'
      },
      {
        id: 'pp-acc-2023-p2-q7',
        questionType: 'Other',
        questionText: 'How have globalization and information technology created new opportunities for entrepreneurs? How does an aging population create opportunities? Describe demographic trends for new businesses.',
        idealAnswer: 'Globalization and IT create opportunities by providing access to global markets, enabling e-commerce, and lowering barriers to entry. An aging population creates opportunities in healthcare, senior living, and leisure services. Current trends like urbanization and the rise of the gig economy also create opportunities for new goods and services.'
      }
    ]
  },
  {
    id: 'pp-econ-2023-p1',
    year: 2023,
    subject: 'Economics',
    questions: [
        {
            id: 'pp-econ-2023-p1-q1',
            questionType: 'Other',
            questionText: 'Explain the concept of fiscal deficit and its implications for a developing country like Pakistan.',
            idealAnswer: 'Fiscal deficit is when a government\'s total expenditures exceed its total revenues, excluding money from borrowings. For a developing country, implications of a high fiscal deficit include increased public debt, inflation (due to printing money), and the "crowding out" of private investment as government borrowing increases interest rates.',
        }
    ]
  },
  {
    id: 'pp-cs-2022-p1',
    year: 2022,
    subject: 'Computer Science',
    questions: [
        {
            id: 'pp-cs-2022-p1-q1',
            questionType: 'Other',
            questionText: 'Explain the OSI model and its seven layers.',
            idealAnswer: 'The OSI (Open Systems Interconnection) model is a 7-layer conceptual framework for network communication. The layers are: 1. Physical (hardware), 2. Data Link (node-to-node transfer), 3. Network (routing, IP), 4. Transport (reliable data transfer, TCP/UDP), 5. Session (manages sessions), 6. Presentation (data translation/encryption), 7. Application (user services, HTTP).',
        }
    ]
  },
  {
    id: 'pp-polsci-2021-p1',
    year: 2021,
    subject: 'Political Science',
    questions: [
        {
            id: 'pp-polsci-2021-p1-q1',
            questionType: 'Other',
            questionText: 'Compare and contrast the political philosophies of Plato and Aristotle.',
            idealAnswer: 'Plato advocated for an idealist, top-down state ruled by a "philosopher-king" (The Republic). Aristotle, his student, was more pragmatic and empirical, focusing on the rule of law, the importance of the middle class, and classifying existing constitutions (Politics). The core difference lies in Plato\'s idealism versus Aristotle\'s realism.',
        }
    ]
  },
  {
    id: 'pp-ir-2022-p1',
    year: 2022,
    subject: 'International Relations',
    questions: [
        {
            id: 'pp-ir-2022-p1-q1',
            questionType: 'Other',
            questionText: 'Explain the core tenets of Realism in International Relations theory.',
            idealAnswer: 'The core tenets of Realism are: 1. Statism: The state is the primary actor in international politics. 2. Survival: The main goal of every state is to survive. 3. Self-help: States must rely on their own power and resources to ensure their security in an anarchic international system. Realism sees international relations as a perpetual struggle for power.',
        }
    ]
  },
];
