
import type { PastPaper } from '../../types';

export const pastPapers: PastPaper[] = [
  {
    id: 'pp-aa-2016-1',
    year: 2016,
    subject: 'Accountancy & Auditing',
    questions: [
      {
        id: 'pp-aa-2016-1-q2a',
        questionType: 'Other',
        questionText: 'Global Service Company was organized on April 1, 2015. The company prepares quarterly financial statements. The adjusted trial balance at June 30, 2015 is given below. Prepare an income statement for the Quarter April 1 to June 30.',
        idealAnswer: 'Based on the provided adjusted trial balance, the income statement would show total revenues (Service Revenue + Rent Revenue) and subtract all listed expenses (Salaries and wages, Rent, Depreciation, Supplies, Utilities, Interest) to arrive at the Net Income for the quarter.'
      },
      {
        id: 'pp-aa-2016-1-q2b',
        questionType: 'Other',
        questionText: 'Global Service Company was organized on April 1, 2015. Prepare a statement of Retained Earnings.',
        idealAnswer: 'The Statement of Retained Earnings starts with the beginning retained earnings (which is 0 as the company was just organized), adds the Net Income calculated in the income statement, and subtracts any dividends paid during the period to arrive at the ending Retained Earnings balance.'
      },
      {
        id: 'pp-aa-2016-1-q2c',
        questionType: 'Other',
        questionText: 'Global Service Company was organized on April 1, 2015. Prepare a Balance Sheet with proper headings.',
        idealAnswer: 'The Balance Sheet at June 30, 2015 would list all assets (Cash, Accounts Receivable, Prepaid Rent, Supplies, Equipment less Accumulated Depreciation) on one side. The other side would list all liabilities (Notes Payable, Accounts Payable, Salaries and Wages Payable, Interest Payable, Unearned Rent Revenue) and Equity (Share Capital-Ordinary, and the ending Retained Earnings from the retained earnings statement). The total assets must equal total liabilities and equity.'
      },
      {
        id: 'pp-aa-2016-1-q3a',
        questionType: 'Other',
        questionText: 'Pool and Burns, who share profits and losses equally, decide to dissolve their partnership at June 30, 2015. Their balance sheet on that date was as follows... Required: Prepare the accounts necessary to show the results of the realization and of the disposal of the cash.',
        idealAnswer: 'This requires preparing a Realization Account, Cash Account, and Partners\' Capital Accounts. The Realization Account is debited with assets and credited with liabilities and cash received from asset sales. The resulting profit or loss on realization is transferred to the partners\' capital accounts. The Cash Account is updated with all receipts and payments, and the final balances are paid out to the partners.'
      },
      {
        id: 'pp-aa-2016-1-q3b',
        questionType: 'Other',
        questionText: 'The trial balance before and after adjustment for Mushtaq company at the end of its fiscal year is presented below. Instructions : Prepare the adjusting journal entries that were made during the period.',
        idealAnswer: 'The adjusting entries can be deduced by comparing the before and after adjustment columns. Entries would include recognizing supplies expense, insurance expense, depreciation expense, salaries expense, rent revenue earned, and service revenue earned.'
      },
      {
        id: 'pp-aa-2016-1-q4a',
        questionType: 'Other',
        questionText: 'On January 1, 2015, Hydri Construction acquired a small excavator for Rs.85,000. Prepare a schedule showing annual depreciation expense, show asset appearance on balance sheet, and prepare journal entries for acquisition, depreciation, and sale.',
        idealAnswer: 'Using the double-declining balance method, the depreciation rate is 2 * (1/4) = 50%. The schedule would show depreciation expense for each year based on the declining book value. Journal entries would be required for the initial purchase, annual depreciation, and the final sale, recording any gain or loss.'
      },
      {
        id: 'pp-aa-2016-1-q4b',
        questionType: 'Other',
        questionText: 'Rabika Limited has the following balance sheet and income statement for 2015. Compute various financial ratios.',
        idealAnswer: 'The ratios are calculated as follows: Current Ratio = Current Assets / Current Liabilities. Acid-Test Ratio = (Current Assets - Inventory) / Current Liabilities. Average Collection Period = Accounts Receivable / (Sales/365). Inventory Turnover = Cost of Goods Sold / Average Inventory. Debt to Net Worth = Total Debt / Shareholders\' Equity. Gross Profit Margin = Gross Profit / Sales. Net Profit Margin = Net Profit / Sales. ROE = Net Profit / Shareholders\' Equity.'
      },
      {
        id: 'pp-aa-2016-1-q5a',
        questionType: 'Other',
        questionText: 'The records of the Electronic Equipment Company show the following information for the year ended 31 December 2015. Required: An income statement, number of units manufactured, unit cost, gross profit per unit, income per unit, and profitability ratios.',
        idealAnswer: 'This requires preparing a Cost of Goods Manufactured statement first, then a full income statement. The number of units manufactured is calculated from the finished goods inventory data. The other required figures are derived from these two statements.'
      },
      {
        id: 'pp-aa-2016-1-q5b',
        questionType: 'Other',
        questionText: 'The Homes Garments Company has decided to distribute the costs of service departments by the algebraic method. Required: Total factory overhead of producing department Cutting after distribution of service department costs.',
        idealAnswer: 'The algebraic method requires setting up simultaneous equations to represent the inter-service department costs (Maintenance = 30000 + 0.20*Cafeteria; Cafeteria = 26400 + 0.10*Maintenance). Solving these equations gives the total cost for each service department, which is then allocated to the producing departments based on the given percentages.'
      },
      {
        id: 'pp-aa-2016-1-q6a',
        questionType: 'Other',
        questionText: 'Ten employees work as a group in Altech Manufacturing Company. When the group’s weekly production exceeds the standard... Required: Calculate the group’s bonus for each day and for the week, and the week’s earnings of each employee.',
        idealAnswer: 'For each day, calculate the actual production per hour and compare it to the standard of 200. The bonus percentage is half the percentage by which production exceeds the standard. This percentage is applied to the bonus wage rate ($9) to find the bonus per hour, which is then multiplied by hours worked to get the daily bonus. Weekly earnings are the sum of regular wages plus the weekly bonus.'
      },
      {
        id: 'pp-aa-2016-1-q6b',
        questionType: 'Other',
        questionText: 'The Cambridge Company uses job order costing. Required: T-accounts for Work in Process, Finished Goods, Cost of Goods sold, etc., and general journal entries.',
        idealAnswer: 'This involves setting up T-accounts and posting the beginning balances. Then, record the flow of costs: materials and labor to Work in Process, and applied overhead to Work in Process. As jobs are completed, transfer costs from Work in Process to Finished Goods, and then to Cost of Goods Sold upon sale. Finally, close the over-or-under applied overhead to Cost of Goods Sold.'
      },
      {
        id: 'pp-aa-2016-1-q7a',
        questionType: 'Other',
        questionText: 'The budgeted results of Best Gases Limited are as under. Required: Prepare a statement showing amount of loss, if any being incurred at present and recommend a change in the sale value of each product... which will eliminate the said loss.',
        idealAnswer: 'Calculate the contribution margin for each product (Sales * PV ratio). Sum the contribution margins and subtract the fixed overheads to find the current loss. To eliminate the loss, the total contribution margin must equal the fixed overheads (Rs 2,511,000). The required increase in sales can be calculated based on the weighted average PV ratio.'
      },
      {
        id: 'pp-aa-2016-1-q7b',
        questionType: 'Other',
        questionText: 'Fedder manufacturing company provides the following information concerning its 2015 operations. Required: Prepare an absorption costing income statement, a variable costing income statement, and reconcile the difference.',
        idealAnswer: 'Absorption costing includes fixed manufacturing overhead in the product cost. Variable costing treats all fixed manufacturing overhead as a period cost. The difference in net income between the two methods is due to the amount of fixed overhead capitalized in ending inventory under absorption costing.'
      },
      {
        id: 'pp-aa-2016-1-q8',
        questionType: 'Other',
        questionText: 'Seven Seas Ltd. has developed a process for the manufacture of after-shave. Required: Using weighted average basis, prepare a cost of production report.',
        idealAnswer: 'This requires calculating equivalent units of production for materials and conversion costs using the weighted average method. Then, calculate the cost per equivalent unit. Finally, use these costs to determine the value of goods transferred out and the value of the ending work-in-process inventory.'
      },
      {
        id: 'pp-aa-2016-2-q2',
        questionType: 'Other',
        questionText: 'As an Auditor of an entity, during your interim visit you observed that Internal Control were not in use throughout the period under Audit. What are the Control Objectives you would like to consider for your purpose?',
        idealAnswer: 'The control objectives to consider would include: Validity (ensuring transactions are authorized), Completeness (ensuring all transactions are recorded), Accuracy (ensuring amounts are correct), Cut-off (ensuring transactions are recorded in the correct period), and Classification. Weak internal controls increase the risk of material misstatement.'
      },
      {
        id: 'pp-aa-2016-2-q3',
        questionType: 'Other',
        questionText: 'What is materiality? Discuss materiality in planning and performing an Audit in relations to ISA-320.',
        idealAnswer: 'Materiality is the concept that an item is significant enough to likely influence the decisions of users of financial statements. ISA 320 requires auditors to determine materiality for the financial statements as a whole when planning the audit, and to revise it as the audit progresses if necessary. It helps determine the nature, timing, and extent of audit procedures.'
      },
      {
        id: 'pp-aa-2016-2-q4',
        questionType: 'Other',
        questionText: 'Financial Statements of a company are prepared in accordance with International Financial Reporting Standards. Being an Auditor what consideration would be taken while planning & performing Audit based on this condition?',
        idealAnswer: 'The auditor must have a thorough understanding of IFRS to assess whether the financial statements are prepared, in all material respects, in accordance with the applicable financial reporting framework. This involves checking that the correct accounting policies have been applied consistently and that the disclosures required by IFRS are adequate.'
      },
      {
        id: 'pp-aa-2016-2-q5a',
        questionType: 'Other',
        questionText: 'What is Income from Property? What are possible deduction allowed under Income from Property, explain in detail?',
        idealAnswer: 'Income from Property is the rent received or receivable by a person for a tax year. Deductions allowed include repairs allowance, insurance premium, local rates/taxes, ground rent, interest on a mortgage used to acquire the property, and legal charges for rent recovery.'
      },
      {
        id: 'pp-aa-2016-2-q5b',
        questionType: 'Other',
        questionText: 'You are Manager of a Tax Consultant Firm... Calculate the Taxable Income & Tax Payable based on above data.',
        idealAnswer: 'Taxable income calculation would involve summing up the basic salary, taxable portion of allowances (e.g., medical), and perquisites like free accommodation and the benefit of the concessional loan. Agricultural income is generally exempt but may be used for rate purposes. Tax payable is calculated by applying the relevant tax slabs to the taxable income.'
      },
      {
        id: 'pp-aa-2016-2-q6a',
        questionType: 'Other',
        questionText: 'What is Sales Tax? What procedure a person should follow to get himself registered under Sales Tax Act, 1990? What are conditions under Sales Tax Act, 1990, where registration becomes compulsory?',
        idealAnswer: 'Sales tax is an indirect tax on the sale of goods and services. Registration involves submitting an application to the FBR. Registration is compulsory for manufacturers and retailers exceeding a certain turnover threshold, and for all importers.'
      },
      {
        id: 'pp-aa-2016-2-q6b',
        questionType: 'Other',
        questionText: 'Shahid Dairy Products Ltd is registered manufacturer of Ice-Cream... Compute the sales Tax liability of Shahid Dairy Products Ltd for month of May-2015.',
        idealAnswer: 'Sales tax liability is calculated as Output Tax (on taxable supplies) minus Input Tax (on taxable purchases). The calculation would involve determining the output tax on all taxable sales and the admissible input tax on purchases from registered persons, while accounting for any zero-rated or exempt items.'
      },
      {
        id: 'pp-aa-2016-2-q7a',
        questionType: 'Other',
        questionText: 'Explain the Contemporary challenges posed by business now a days in Pakistan.',
        idealAnswer: 'Challenges include political instability, a chronic energy crisis, high inflation and interest rates, security concerns, inconsistent government policies, and a large informal economy that creates an uneven playing field for tax-compliant businesses.'
      },
      {
        id: 'pp-aa-2016-2-q7b',
        questionType: 'Other',
        questionText: 'You have just the following information about ABC Ltd... Work out overall cost of capital assuming 7% market risk premium and 5% risk free rate of return.',
        idealAnswer: 'This requires calculating the Weighted Average Cost of Capital (WACC). First, calculate the cost of debt (using the bond valuation), cost of preferred stock, and cost of equity (using the Capital Asset Pricing Model: Cost of Equity = Risk-Free Rate + Beta * Market Risk Premium). Then, calculate the WACC using the market value weights of each component.'
      },
      {
        id: 'pp-aa-2016-2-q8a',
        questionType: 'Other',
        questionText: 'Define & explain Business Cycle and discuss its implications in detail.',
        idealAnswer: 'The business cycle refers to the fluctuations in economic activity that an economy experiences over a period of time, characterized by phases of expansion, peak, contraction, and trough. Implications affect unemployment, inflation, and business investment decisions.'
      },
      {
        id: 'pp-aa-2016-2-q8b',
        questionType: 'Other',
        questionText: 'Mr. Tom has $ 50,000/- that he can deposit in any of the three saving accounts for a period of three years... Compute Effective Annual Rate (EAR) and the future value for each bank.',
        idealAnswer: 'EAR = (1 + stated rate/m)^m - 1, where m is the number of compounding periods per year. The future value is calculated using the formula FV = P(1 + i)^n, where i is the periodic interest rate and n is the total number of periods. The bank with the most frequent compounding (Bank C, quarterly) will have the highest EAR and future value.'
      }
    ]
  },
  {
    id: 'pp-aa-2017-1',
    year: 2017,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-aa-2017-1-q2',
            questionType: 'Other',
            questionText: 'Bella Beauty Salon\'s unadjusted trial balance for the current year follows... Based on the above information, prepare the adjusting journal entries for Bella\'s Beauty Salon and adjusted trial balance for Bella\'s Beauty Salon.',
            idealAnswer: 'Adjusting entries are required for expired insurance, used supplies, depreciation, accrued rent revenue, earned rent revenue, accrued salaries, accrued property taxes, and accrued interest. These entries will then be used to create the adjusted trial balance, ensuring all revenues and expenses are recorded in the correct period.'
        },
        {
            id: 'pp-aa-2017-1-q3a',
            questionType: 'Other',
            questionText: 'A corporation had stockholders\' equity on January 1 as follows... Prepare journal entries to record the following transactions.',
            idealAnswer: 'The 10% stock dividend is recorded by debiting Retained Earnings (at market value) and crediting Common Stock Dividend Distributable and Paid-in Capital in Excess of Par. The sale of shares is recorded by debiting Cash and crediting Common Stock (at par) and Paid-in Capital in Excess of Par. The dividend issuance reverses the distributable account into the common stock account.'
        },
        {
            id: 'pp-aa-2017-1-q3b',
            questionType: 'Other',
            questionText: 'Company installs a computerized manufacturing machine in its factory... Determine the machine’s second-year depreciation under the straight-line method.',
            idealAnswer: 'Straight-line depreciation is calculated as (Cost - Salvage Value) / Useful Life. The cost is $42,300, salvage value is $6,000, and useful life is 10 years. Annual depreciation = ($42,300 - $6,000) / 10 = $3,630. The depreciation for the second year will be $3,630.'
        },
        {
            id: 'pp-aa-2017-1-q4',
            questionType: 'Other',
            questionText: 'The following financial data were taken from the annual financial statements of Smith Corporation... Based on these data, calculate the following for 2008 and 2009 and evaluate the results.',
            idealAnswer: 'The ratios are calculated for both years to assess trends in short-term liquidity. Working Capital = Current Assets - Current Liabilities. Current Ratio = CA/CL. Acid-test = (CA - Inventory)/CL. A/R Turnover = Sales / Avg A/R. Inventory Turnover = COGS / Avg Inventory. The evaluation would comment on whether the company\'s liquidity is improving or deteriorating based on these trends.'
        },
        {
            id: 'pp-aa-2017-1-q5',
            questionType: 'Other',
            questionText: 'The marketing department of Graber Corporation has submitted the following sales forecast... Prepare the company’s sales budget and schedule of expected cash collections, and the company’s production budget.',
            idealAnswer: 'The sales budget is units sold * selling price per quarter. The schedule of cash collections calculates cash inflow based on the collection pattern (75% in the current quarter, 20% in the next). The production budget calculates the required production units per quarter: Budgeted Sales + Desired Ending Inventory - Beginning Inventory.'
        },
        {
            id: 'pp-aa-2017-1-q6',
            questionType: 'Other',
            questionText: 'Valenko Company provided the following account balances for the year ended December 31... Prepare schedules of cost of goods manufactured and cost of goods sold and an income statement.',
            idealAnswer: 'This requires working backward. Start with the income statement to find missing values like sales or expenses. Then prepare the Cost of Goods Sold schedule to find the cost of goods manufactured. Finally, prepare the Cost of Goods Manufactured schedule, which will help determine the direct labor cost and beginning work-in-process inventory.'
        },
        {
            id: 'pp-aa-2017-1-q7',
            questionType: 'Other',
            questionText: 'Linden Company manufactures and sells a single product... Determine the unit product cost under absorption and variable costing, prepare variable costing income statements, and reconcile the incomes.',
            idealAnswer: 'Unit product cost under absorption includes all manufacturing costs (variable + fixed). Under variable costing, it only includes variable manufacturing costs. The variable costing income statement separates variable and fixed costs. The reconciliation shows that the difference in net income is due to the fixed overhead deferred in (or released from) inventory under absorption costing.'
        },
        {
            id: 'pp-aa-2017-1-q8',
            questionType: 'Other',
            questionText: 'The PVC Company manufactures a high-quality plastic pipe... Using the weighted-average method, prepare a cost reconciliation report.',
            idealAnswer: 'This involves calculating equivalent units for materials and conversion costs. Then, calculate the cost per equivalent unit by combining beginning inventory costs with current period costs. Finally, assign these costs to the units transferred out and the units remaining in ending work-in-process inventory.'
        },
        {
            id: 'pp-aa-2017-2-q2',
            questionType: 'Other',
            questionText: 'What system of Internal check would you recommend for a large manufacturing company to prevent fraud in connection with the purchase of raw material on credit basis?',
            idealAnswer: 'A robust internal check system would include: 1. Segregation of duties (purchasing, receiving, and accounting should be separate). 2. A proper purchase requisition and purchase order system. 3. Verification of goods received against the purchase order. 4. Three-way matching of the purchase order, receiving report, and supplier invoice before payment is authorized.'
        },
        {
            id: 'pp-aa-2017-2-q3',
            questionType: 'Other',
            questionText: 'A fraud has been committed in a business. Being a Manager of Accounts you are asked by the authorities to take up investigative measures and steps to extract the fraudulent matter. Discuss the measures and steps you will take in this regard.',
            idealAnswer: 'Steps would include: 1. Securing all relevant records. 2. Conducting a detailed review of financial documents and transactions. 3. Interviewing relevant personnel. 4. Using forensic accounting techniques to identify anomalies. 5. Quantifying the loss. 6. Reporting the findings to the authorities and recommending improvements to internal controls.'
        },
        {
            id: 'pp-aa-2017-2-q4',
            questionType: 'Other',
            questionText: 'What is meant by Auditor\'s Report? Describe the key characteristics of a good audit report, along with the significance of Auditor\'s report to show the transparent picture of the company.',
            idealAnswer: 'An auditor\'s report is a formal opinion issued by an auditor about the fairness of a company\'s financial statements. Key characteristics include a clear title, addressee, an opinion section, basis for opinion, and the auditor\'s signature. Its significance lies in providing credibility and assurance to stakeholders that the financial statements are free from material misstatement, thus enhancing transparency.'
        },
        {
            id: 'pp-aa-2017-2-q5a',
            questionType: 'Other',
            questionText: 'Define the concept of sales tax &amp; describe the sales tax act of 1990. Identify the official positions of Inland revenue officers and their powers.',
            idealAnswer: 'Sales tax is an indirect tax on the supply of goods and services. The Sales Tax Act, 1990 is the primary legislation governing it in Pakistan. Inland Revenue officers have powers to register taxpayers, conduct audits, assess tax liability, and enforce the collection of tax.'
        },
        {
            id: 'pp-aa-2017-2-q5b',
            questionType: 'Other',
            questionText: 'Mr. Sartaj is registered under the Sales Tax Act, 1990... Compute the sales tax liability of Mr. Sartaj along with input tax to be carried forward.',
            idealAnswer: 'The sales tax liability is calculated as Output Tax - Input Tax. Output tax is calculated on all taxable supplies. Input tax can be claimed on taxable purchases from registered persons and on commercial imports. Export sales are zero-rated, meaning no output tax is charged, but input tax can be claimed as a refund. Any excess input tax can be carried forward.'
        },
        {
            id: 'pp-aa-2017-2-q6a',
            questionType: 'Other',
            questionText: 'Identify the main features of Income Tax ordinance 2001. Also discuss the exemptions and tax concessions available to a taxpayer under that ordinance.',
            idealAnswer: 'Main features include a system of universal self-assessment, taxation based on residential status, distinct heads of income, and a withholding tax regime. Exemptions and concessions include those for certain types of income (e.g., agricultural), and tax credits for investments and donations.'
        },
        {
            id: 'pp-aa-2017-2-q6b',
            questionType: 'Other',
            questionText: 'Mr. Ahmed is an employee of a company. He has submitted the following information for the tax year 2016. Compute the total income, taxable income and tax liability of Mr. Ahmed.',
            idealAnswer: 'Total income includes basic salary, bonus, and all allowances. Taxable perquisites like the accommodation and company car benefit are calculated and added. From total income, deductible allowances like Zakat are subtracted to get taxable income. Tax liability is then calculated based on the applicable tax slabs.'
        },
        {
            id: 'pp-aa-2017-2-q7a',
            questionType: 'Other',
            questionText: 'Identify the major barriers that hamper global business in an open economy.',
            idealAnswer: 'Major barriers include tariffs, non-tariff barriers (quotas, regulations), currency exchange rate volatility, political and economic instability in different countries, and cultural and legal differences.'
        },
        {
            id: 'pp-aa-2017-2-q7b',
            questionType: 'Other',
            questionText: 'Consider a coupon bond that has a face value of $1000, has a yield of 16%, pays a semi annual coupon of 70, and matures in one year. Calculate the price of the bond.',
            idealAnswer: 'The price of the bond is the present value of its future cash flows (coupons and face value) discounted at the yield to maturity. The cash flows are two semi-annual coupons of $70 and the face value of $1000 at maturity. The semi-annual yield is 16%/2 = 8%. Price = 70/(1.08) + (70+1000)/(1.08)^2.'
        },
        {
            id: 'pp-aa-2017-2-q8a',
            questionType: 'Other',
            questionText: 'Describe the economic systems, also Identify which system is more beneficial for the economic development of the country.',
            idealAnswer: 'Economic systems include capitalism (private ownership), socialism (state ownership), and mixed economies. Most countries have mixed economies. The debate over which is more beneficial is ongoing, but a mixed economy that combines market efficiency with government regulation and social safety nets is often seen as most effective for development.'
        },
        {
            id: 'pp-aa-2017-2-q8b',
            questionType: 'Other',
            questionText: 'XYZ company presently pays a dividend of $ 1.50 per share... What value should you place on a share of this Stock?',
            idealAnswer: 'This requires using the multi-stage Dividend Discount Model (DDM). Calculate the present value of the dividends for the first four years (growing at 20%), the present value of the dividends for the next four years (growing at 13%), and the present value of the terminal value of the stock (calculated using the Gordon Growth Model with a 7% growth rate). The sum of these present values is the value of the stock.'
        }
    ]
  },
  {
    id: 'pp-aa-2018-1',
    year: 2018,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-aa-2018-1-q2',
            questionType: 'Other',
            questionText: 'Following is the summary of closing balances (unadjusted trial balance) of Muddasar Co... Based upon above information, prepare Adjusting Entries, Adjusted Trail Balance and Income Statement &amp; Balance Sheet.',
            idealAnswer: 'This comprehensive problem requires preparing adjusting entries for closing inventory, supplies used, expired rent and insurance, outstanding salaries, and depreciation. These adjustments are then used to create an adjusted trial balance. Finally, an income statement and balance sheet are prepared from the adjusted trial balance figures.'
        },
        {
            id: 'pp-aa-2018-1-q3',
            questionType: 'Other',
            questionText: 'The Income Statement of the Abdul Rehman &amp; Co for the year on December 31... Required: Horizontal Analysis and Vertical Analysis for the above given financial statements.',
            idealAnswer: 'Horizontal analysis compares financial data across different periods (e.g., year-over-year percentage change). Vertical analysis (common-size analysis) expresses each line item as a percentage of a base figure (e.g., sales for the income statement, total assets for the balance sheet) for a single period. These analyses help in identifying trends and the relative importance of different accounts.'
        },
        {
            id: 'pp-aa-2018-1-q4a',
            questionType: 'Other',
            questionText: 'The XYZ Co. purchased a large machine 5 years ago at a total cost of Rs. 400,000. The accumulated depreciation on this machine is Rs. 290,000. The corporation sold the machine at Rs.10,000 gain. Calculate the amount would be reported as cash flow from this sale.',
            idealAnswer: 'Book Value = Cost - Accumulated Depreciation = 400,000 - 290,000 = 110,000. Selling Price = Book Value + Gain = 110,000 + 10,000 = 120,000. The amount reported as cash flow from this sale is the selling price, Rs. 120,000.'
        },
        {
            id: 'pp-aa-2018-1-q4b',
            questionType: 'Other',
            questionText: 'On April 1, 1993 Ayesha Industries purchased new equipment at a cost of Rs. 325000... Compute the annual depreciation expense for each year under each depreciation method.',
            idealAnswer: 'This requires calculating depreciation using four different methods: Straight-line, 20% declining-balance, sum-of-the-years\'-digits, and MACRS. Each method has a different formula and convention for calculating annual depreciation expense over the asset\'s life.'
        },
        {
            id: 'pp-aa-2018-1-q5',
            questionType: 'Other',
            questionText: 'Proprietor (Owner) of ABC Industries has limited knowledge of Cost &amp; Managerial Accounting who prepared an incorrect Income Statement... Prepare cost of goods manufactured and cost of goods sold statement, prepare revised income statement, and explain the difference.',
            idealAnswer: 'This involves reclassifying costs correctly between manufacturing costs (direct material, direct labor, factory overhead) and selling/administrative expenses. A Cost of Goods Manufactured statement needs to be prepared to calculate the cost of goods sold. The revised income statement will use the correct cost of goods sold figure and properly classify expenses, leading to a different, more accurate net profit.'
        },
        {
            id: 'pp-aa-2018-1-q6a',
            questionType: 'Other',
            questionText: 'Delight Food Products produces Squash Cubes by continuous processing in three departments... Prepare the Cost of Production Report for the month of November, 2017(for Department B).',
            idealAnswer: 'This process costing problem requires preparing a cost of production report. Key steps include calculating equivalent units of production (accounting for normal and abnormal loss), calculating the cost per equivalent unit, and then assigning the total costs to the units transferred out and the units remaining in ending work-in-process.'
        },
        {
            id: 'pp-aa-2018-1-q6b',
            questionType: 'Other',
            questionText: 'Ahmad Enterprises produces and sells the finest quality golf clubs... How many sets of clubs (unit) must be sold for Ahmad Enterprises to reach their breakeven point?',
            idealAnswer: 'The breakeven point in units is calculated as Total Fixed Costs / (Selling Price per Unit - Variable Cost per Unit). Total fixed costs are 50,000. Variable cost per unit is not given directly but can be inferred from the total variable costs and units sold. However, the total variable cost is given as 160,000 for 400 sets, so VC/unit = 400. Breakeven point = 50,000 / (600 - 400) = 250 sets.'
        },
        {
            id: 'pp-aa-2018-1-q7',
            questionType: 'Other',
            questionText: 'XYZ Enterprises applies factory overhead @ 60% of direct labour cost... Determine under-applied or over-applied factory overhead and pass journal entries to dispose of it.',
            idealAnswer: 'First, calculate the applied factory overhead (580,000 * 60% = 348,000). Compare this to the actual overhead (428,000) to find the variance (under-applied by 80,000). Journal entries are needed to close the applied and actual overhead accounts and to dispose of the variance, either to Cost of Goods Sold (if insignificant) or by allocating it among COGS, Finished Goods, and Work in Progress (if significant).'
        },
        {
            id: 'pp-aa-2018-1-q8a',
            questionType: 'Other',
            questionText: 'Ayesha &amp; Co. Prepared following estimates for the year 2017... Calculate Total Factory overhead variance, Capacity variance, and Budget variance.',
            idealAnswer: 'Total FOH variance = Actual FOH - Applied FOH. Capacity variance measures the effect of operating at a different capacity level than budgeted. Budget variance (or spending variance) measures the difference between actual overhead costs and the budgeted costs for the actual level of activity.'
        },
        {
            id: 'pp-aa-2018-1-q8b',
            questionType: 'Other',
            questionText: 'Calculate the total fixed cost of the shipping department of Areeba &amp; Co. based upon the following information for the year 2016.',
            idealAnswer: 'Fixed costs are those that do not vary with the level of activity. Here, the fixed costs are: 75% of salaries (0.75 * 800,000 = 600,000) and the annual lease for the warehouse (250,000). Packaging and postage are variable. Total fixed cost = 600,000 + 250,000 = Rs. 850,000.'
        },
        {
            id: 'pp-aa-2018-2-q2',
            questionType: 'Other',
            questionText: 'How an internal control system helps the management in conduct of their business affairs? Explain the difference among internal check, internal audit and internal control.',
            idealAnswer: 'Internal control is the overall system established by management to ensure reliable financial reporting, operational efficiency, and compliance. Internal check is a part of this system involving the day-to-day arrangement of duties to minimize fraud. Internal audit is an independent appraisal function within the organization to examine and evaluate its activities.'
        },
        {
            id: 'pp-aa-2018-2-q3',
            questionType: 'Other',
            questionText: 'ABC Company is an audit and assurance firm, which has recently accepted the audit of XYZ. Explain the purpose of auditing financial statement of XYZ and the three elements of audit risk faced by the company.',
            idealAnswer: 'The purpose of an audit is to provide an independent opinion on whether the financial statements present a true and fair view. The three elements of audit risk are: 1. Inherent Risk (the susceptibility of an account to misstatement), 2. Control Risk (the risk that internal controls will not prevent or detect a misstatement), and 3. Detection Risk (the risk that the auditor\'s procedures will not detect a misstatement).'
        },
        {
            id: 'pp-aa-2018-2-q4',
            questionType: 'Other',
            questionText: 'Due to the inherent limitations of audit, auditors are only able to offer \'reasonable assurance\' rather than absolute assurance. Explain the limitation of audit of financial statement.',
            idealAnswer: 'Inherent limitations of an audit include: the use of testing and sampling rather than examining every transaction, the inherent limitations of any accounting and internal control system, the fact that much audit evidence is persuasive rather than conclusive, and the possibility of collusion or management override of controls.'
        },
        {
            id: 'pp-aa-2018-2-q5a',
            questionType: 'Other',
            questionText: 'Explain the law regarding the definition of business and taxability of business income along with the relevant examples under section (18) of Income Tax Ordinance 2001.',
            idealAnswer: 'Section 18 defines "business" broadly to include any trade, commerce, manufacture, or any adventure or concern in the nature of trade, commerce, or manufacture. Business income is taxable under the head "Income from Business" and is computed after allowing for deductible expenses.'
        },
        {
            id: 'pp-aa-2018-2-q5b',
            questionType: 'Other',
            questionText: 'Mr. Atif is working as Chief accountant of a multi-national company... Calculate his tax payable.',
            idealAnswer: 'Tax payable is calculated by first determining the taxable income, which includes salary, bonus, and taxable allowances. Capital gains on securities would be taxed separately. Agricultural income is exempt from federal tax. Zakat paid is a deductible allowance. The resulting taxable income is then subjected to the applicable tax rates for a non-filer.'
        },
        {
            id: 'pp-aa-2018-2-q6a',
            questionType: 'Other',
            questionText: 'What is the scope of sales tax? What is the procedure for transfer of registration and deregistration under Sales Tax Act, 1990?',
            idealAnswer: 'The scope of sales tax in Pakistan covers the supply of all taxable goods and services. Transfer of registration is required when a business changes ownership. Deregistration can occur if a registered person ceases to make taxable supplies. Both processes involve submitting an application to the FBR.'
        },
        {
            id: 'pp-aa-2018-2-q6b',
            questionType: 'Other',
            questionText: 'Mr Abdul Packages Ltd is a registered manufacturer of candies... Calculate the sales tax liability for July 2016',
            idealAnswer: 'Sales tax liability is Output Tax minus Input Tax. Output tax is calculated on all taxable turnover. Input tax credit can be claimed on taxable purchases from registered persons and on imported raw materials. Exempt sales and zero-rated supplies must be treated according to the law (input tax on zero-rated supplies is refundable).'
        },
        {
            id: 'pp-aa-2018-2-q7a',
            questionType: 'Other',
            questionText: 'Explain the role of information technology in business organisation in Pakistan’s scenario.',
            idealAnswer: 'In Pakistan, IT plays a role in improving efficiency through automation, enabling e-commerce and digital marketing, facilitating better communication and data management, and creating new opportunities in the services sector, such as freelancing and software development.'
        },
        {
            id: 'pp-aa-2018-2-q7b',
            questionType: 'Other',
            questionText: 'You have been hired as a financial advisor to Raheel Abbas. He has received two offers for playing professional basketball... Calculate the present value of each contract and advise.',
            idealAnswer: 'The present value (PV) of each offer is calculated by discounting the future annual cash flows to their value today using the given interest rates (8% and 14%). The offer with the higher PV is the better financial choice. The advice would be to choose the contract with the higher present value at the relevant discount rate.'
        },
        {
            id: 'pp-aa-2018-2-q8a',
            questionType: 'Other',
            questionText: 'Define financial markets and explain the features and classification of financial markets.',
            idealAnswer: 'Financial markets are markets where financial instruments like stocks and bonds are traded. Features include determining prices and providing liquidity. They are classified into money markets (short-term debt) and capital markets (long-term debt and equity).'
        },
        {
            id: 'pp-aa-2018-2-q8b',
            questionType: 'Other',
            questionText: 'ABC Company is considering a new product line... if the required rate of return is 15% what is the net present value of the project. Is it acceptable? What is its internal rate of return? What would be the case if the required rate of return was 10%?',
            idealAnswer: 'The Net Present Value (NPV) is calculated by discounting all future cash inflows and subtracting the initial investments. If NPV is positive, the project is acceptable. The Internal Rate of Return (IRR) is the discount rate at which NPV equals zero. If IRR is greater than the required rate of return, the project is acceptable. The calculations would need to be redone for a 10% required rate of return.'
        }
    ]
  },
  {
    id: 'pp-aa-2019-1',
    year: 2019,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-aa-2019-1-q2',
            questionType: 'Other',
            questionText: 'Some amounts are omitted in each of the following financial statements for XY. Co. Determine the missing amounts.',
            idealAnswer: 'The missing amounts can be determined using accounting equations. Total Liabilities = Total Assets - Equity. Expenses = Revenue - Net Income. Beginning Retained Earnings = Ending Retained Earnings - Net Income + Dividends.'
        },
        {
            id: 'pp-aa-2019-1-q3a',
            questionType: 'Other',
            questionText: 'Burno Co. purchased equipment... What is the amount of accumulated depreciation at Dec. 31, 2006 if the straight-line method of depreciation is used?',
            idealAnswer: 'Depreciable Cost = 280,000 + 5,000 + 25,000 - 10,000 = 300,000. Annual Depreciation = 300,000 / 5 = 60,000. Accumulated Depreciation at Dec 31, 2006 (after 2 years) = 60,000 * 2 = 120,000.'
        },
        {
            id: 'pp-aa-2019-1-q3b',
            questionType: 'Other',
            questionText: 'A plant asset cost Rs.27,000... was depreciated by the straight-line method... What gain or loss should be recognized on the retirement? Pass the entry.',
            idealAnswer: 'Annual depreciation = 27,000 / 9 = 3,000. Depreciation up to June 30, 2008 (0.5 years) is 1,500. Book value at retirement = 27,000 - 1,500 = 25,500. Since it was discarded with no proceeds, the loss on retirement is 25,500. The entry would be to debit Accumulated Depreciation and Loss on Disposal, and credit the Plant Asset account.'
        },
        {
            id: 'pp-aa-2019-1-q3c',
            questionType: 'Other',
            questionText: 'On June 30, 2010 B. Co. sells office furniture for Rs.60,000 cash... What gain or loss should be recognized?',
            idealAnswer: 'Annual Depreciation = (150,000 - 15,000) / 10 = 13,500. Depreciation for 5.5 years = 74,250. Book Value = 150,000 - 74,250 = 75,750. Since it was sold for 60,000, there is a loss of 15,750.'
        },
        {
            id: 'pp-aa-2019-1-q4',
            questionType: 'Other',
            questionText: 'The balance sheet of AB Ltd. is as under... Compute Working capital, Current ratio, Quick or liquid ratio, Super quick ratio.',
            idealAnswer: 'Working Capital = Current Assets - Current Liabilities. Current Ratio = CA / CL. Quick Ratio = (CA - Inventory) / CL. Super Quick Ratio = (Cash + Marketable Securities) / CL. All current assets and liabilities need to be identified from the balance sheet to perform the calculations.'
        },
        {
            id: 'pp-aa-2019-1-q5',
            questionType: 'Other',
            questionText: 'The AB &amp; Co produces a chemical which requires processing in three departments... Prepare cost of production report of Department III by Weighted Average.',
            idealAnswer: 'This process costing problem requires preparing a cost of production report for Department III using the weighted average method. This involves calculating equivalent units, cost per equivalent unit for previous department costs, materials, and conversion costs, and then assigning these costs to units transferred out and ending work-in-process.'
        },
        {
            id: 'pp-aa-2019-1-q6a',
            questionType: 'Other',
            questionText: 'K Co. was totally destroyed by fire... Determine (1) The budget allowance, based on capacity utilized, and (2) the actual factory overhead.',
            idealAnswer: 'This requires working backward from the given variances. Applied FOH = Budgeted Rate * Standard Hours. Budget Allowance = Fixed FOH + (Variable Rate * Standard Hours). The variances can be used to solve for the unknown budget allowance and actual factory overhead.'
        },
        {
            id: 'pp-aa-2019-1-q6b',
            questionType: 'Other',
            questionText: 'A Co. uses 100% Bonus plan with a wage rate of Rs.20 per hour... Determine Mr. X’s total earning, the time saved, daily earnings and the labor cost per unit.',
            idealAnswer: 'For each day, calculate the standard time allowed (Units Produced / 40). Calculate time saved (Standard Time - Actual Time). The bonus is the time saved multiplied by the wage rate. Total earnings are the regular wage plus the bonus. Labor cost per unit is the total daily earning divided by units produced.'
        },
        {
            id: 'pp-aa-2019-1-q7',
            questionType: 'Other',
            questionText: 'ABC Company’s most recent contribution format income statement is shown below... Prepare a new contribution format income statement under each of the four conditions.',
            idealAnswer: 'This involves CVP (Cost-Volume-Profit) analysis. For each scenario, recalculate the sales, variable expenses, and contribution margin based on the changes in sales volume, selling price, and variable cost. The fixed expenses may also change in some scenarios. Then calculate the new net operating income.'
        },
        {
            id: 'pp-aa-2019-1-q8',
            questionType: 'Other',
            questionText: 'The following information is gathered from the labor records of Binamul &amp; Co... Calculate the labor variances.',
            idealAnswer: 'This requires calculating the labor rate variance and the labor efficiency variance. Labor Rate Variance = (Actual Rate - Standard Rate) * Actual Hours. Labor Efficiency Variance = (Actual Hours - Standard Hours Allowed) * Standard Rate. The standard hours allowed for the output is 4,500 units * 2 hours/unit = 9,000 hours.'
        },
        {
            id: 'pp-aa-2019-2-q2',
            questionType: 'Other',
            questionText: 'Explain shortly all audit assertions related to class of transactions (revenue and expenses), account balances (assets/liabilities/equities), and presentation &amp; disclosure.',
            idealAnswer: 'Assertions for transactions: Occurrence, Completeness, Accuracy, Cutoff, Classification. Assertions for account balances: Existence, Rights &amp; Obligations, Completeness, Valuation &amp; Allocation. Assertions for presentation: Occurrence, Completeness, Classification &amp; Understandability, Accuracy &amp; Valuation.'
        },
        {
            id: 'pp-aa-2019-2-q3',
            questionType: 'Other',
            questionText: 'Define and explain different types of audit risks. How these risks are used to manage the audit assignment.',
            idealAnswer: 'Audit risk is the risk of giving a wrong audit opinion. It consists of Inherent Risk, Control Risk, and Detection Risk. Auditors assess inherent and control risk to determine the acceptable level of detection risk, which in turn determines the nature, timing, and extent of audit procedures.'
        },
        {
            id: 'pp-aa-2019-2-q4',
            questionType: 'Other',
            questionText: 'What are Computer Assisted Audit Techniques (CAATs) that can be used in e-commerce environment.',
            idealAnswer: 'CAATs involve using computers to automate audit procedures. In e-commerce, this can include using audit software to analyze large volumes of transaction data for anomalies, test system controls, and perform reconciliations, such as comparing online sales records to bank deposits.'
        },
        {
            id: 'pp-aa-2019-2-q5a',
            questionType: 'Other',
            questionText: 'Explain the concept of input tax, output tax, zero rated supply, exempt supply and input tax credit.',
            idealAnswer: 'Output tax is the sales tax charged on taxable supplies. Input tax is the sales tax paid on purchases. Input tax credit allows a registered person to deduct the input tax from their output tax liability. Zero-rated supplies are taxable but at a 0% rate (input tax is refundable). Exempt supplies are not subject to sales tax (input tax is not claimable).'
        },
        {
            id: 'pp-aa-2019-2-q5b',
            questionType: 'Other',
            questionText: 'From the following data, calculate the tax payable by Mr. Aslam for the year ended 30th June 2018.',
            idealAnswer: 'Calculate total income by summing salary, special pay, bonus, and allowances. Add the value of the accommodation benefit. Deduct Zakat. Calculate the available tax credits for donations and investments. Apply the relevant tax slabs to the taxable income to find the gross tax, then subtract the tax credits to find the net tax payable.'
        },
        {
            id: 'pp-aa-2019-2-q6a',
            questionType: 'Other',
            questionText: 'What deductions are not allowed to be deducted before arriving at the taxable profits of a business?',
            idealAnswer: 'Deductions that are generally not allowed (inadmissible expenses) include any tax paid, fines or penalties for violation of law, personal expenses, and any expenditure for which the required withholding tax has not been deducted.'
        },
        {
            id: 'pp-aa-2019-2-q6b',
            questionType: 'Other',
            questionText: 'Mr. Mohammad Adil received the following emoluments during the year ended 30th June 2018. Calculate the tax payable by Mr. Mohammad Adil.',
            idealAnswer: 'Calculate taxable income by summing salary, house rent allowance, and utilities allowance. Add the taxable benefit of the interest-free loan and the company car. Medical allowance may be exempt up to a limit. Agricultural income is exempt. Deduct Zakat paid. Calculate tax credits for investment in shares. Apply tax rates to find the final tax payable.'
        },
        {
            id: 'pp-aa-2019-2-q7a',
            questionType: 'Other',
            questionText: 'Explain Yield To Maturity (YTM), its calculation, and the procedure used to value bonds that pay interest semiannually.',
            idealAnswer: 'YTM is the total return anticipated on a bond if it is held until it matures. It is the discount rate that equates the present value of the bond\'s future cash flows (coupons and face value) to its current market price. For semi-annual bonds, coupon payments and the number of periods are doubled, and the YTM is halved for the calculation.'
        },
        {
            id: 'pp-aa-2019-2-q7b',
            questionType: 'Other',
            questionText: 'Joan Messineo borrowed $15,000 at a 14% annual rate of interest to be repaid over 3 years... Calculate the annual loan payment and prepare a loan amortization schedule.',
            idealAnswer: 'The annual payment can be calculated using the present value of an annuity formula. The amortization schedule would show the payment for each year, broken down into the interest portion (calculated on the outstanding balance) and the principal portion. The interest portion declines each year as the principal balance is paid down.'
        },
        {
            id: 'pp-aa-2019-2-q8a',
            questionType: 'Other',
            questionText: 'Explain the relationships among financial decisions, return, risk and the firm’s value.',
            idealAnswer: 'Financial decisions (investment, financing, dividend) aim to maximize the firm\'s value. This involves managing the trade-off between risk and return. Higher return projects often come with higher risk. The optimal combination of financial decisions will minimize the firm\'s cost of capital and maximize its value.'
        },
        {
            id: 'pp-aa-2019-2-q8b',
            questionType: 'Other',
            questionText: 'Nicholson Roofing Materials, Inc., is considering two mutually exclusive projects... Calculate the payback period, NPV, and IRR for each project and make a recommendation.',
            idealAnswer: 'Payback period is the time it takes to recover the initial investment. NPV is the present value of cash inflows minus the initial investment. IRR is the discount rate at which NPV is zero. For mutually exclusive projects, the one with the higher NPV should be chosen, as it adds more value to the firm.'
        }
    ]
  },
  {
    id: 'pp-aa-2020-1',
    year: 2020,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-aa-2020-1-q2',
            questionType: 'Other',
            questionText: 'On September 1, 2011, the account balances of R and Equipment Repair, Inc. were as follows... Journalize the September transactions, prepare a trial balance, adjusting entries, adjusted trial balance, and financial statements.',
            idealAnswer: 'This comprehensive accounting cycle problem involves: 1. Journalizing September\'s transactions. 2. Preparing an unadjusted trial balance. 3. Journalizing and posting adjusting entries for supplies, depreciation, accrued salaries, and unearned revenue. 4. Preparing an adjusted trial balance. 5. Preparing the income statement, statement of retained earnings, and balance sheet.'
        },
        {
            id: 'pp-aa-2020-1-q3a',
            questionType: 'Other',
            questionText: 'Industry A has three companies whose income statements and balance sheets are summarized below... supply the missing data in the table above. Then comment on the relative performance of each company.',
            idealAnswer: 'The missing data can be calculated using the provided financial ratios (e.g., Sales = Net Income / Profit Margin; Total Assets = Sales / Total Asset Turnover). The comment on performance would involve comparing the profitability (Profit Margin, ROA) and efficiency (Asset Turnover) of the three companies.'
        },
        {
            id: 'pp-aa-2020-1-q3b',
            questionType: 'Other',
            questionText: 'The Rivers Company reports the following data relative to accounts receivable... Compute the accounts receivable turnover and the collection period, and evaluate the results.',
            idealAnswer: 'A/R Turnover = Net Credit Sales / Average A/R. Collection Period = 365 / A/R Turnover. The results would be evaluated by comparing them to the company\'s credit terms (net 30 days) to see if receivables are being collected in a timely manner.'
        },
        {
            id: 'pp-aa-2020-1-q4a',
            questionType: 'Other',
            questionText: 'The Wessal Karim Corporation is considering installing a new conveyor... Estimate future cash inflows for the proposed project and determine the project\'s NPV at 10 percent.',
            idealAnswer: 'Future cash inflows are calculated by taking the annual cost savings (labor, damages) and subtracting the annual cost increases (electricity, maintenance). This net operating cash flow, along with the tax savings from depreciation (depreciation tax shield), is discounted at 10% to find the present value. The NPV is the PV of inflows minus the initial cost. If positive, the project should be accepted.'
        },
        {
            id: 'pp-aa-2020-1-q4b',
            questionType: 'Other',
            questionText: 'Majid, Inc., accountants have developed the following data from the company’s accounting records... Prepare Majid’s statement of cash flows for the year ended April 30, 2017. Use the direct method.',
            idealAnswer: 'The statement of cash flows using the direct method involves listing the actual cash inflows and outflows from operating activities (collections from customers, payments to suppliers, etc.). It also includes cash flows from investing activities (purchase/sale of plant assets) and financing activities (issuance of stock, payment of dividends, notes payable transactions).'
        },
        {
            id: 'pp-aa-2020-1-q5a',
            questionType: 'Other',
            questionText: 'Modern Geezer Company has two departments... Compute the budgeted factory overhead rate for each department and the total overhead cost for Job #10.',
            idealAnswer: 'FOH Rate for Dept A = Budgeted FOH / Budgeted Direct Labor Cost. FOH Rate for Dept B = Budgeted FOH / Budgeted Machine Hours. The total overhead for Job #10 is the sum of the overhead applied in each department, calculated by multiplying the respective rates by the actual direct labor cost (for A) and machine hours (for B) used on the job.'
        },
        {
            id: 'pp-aa-2020-1-q5b',
            questionType: 'Other',
            questionText: 'Chief Manufacturing is a small textile manufacturer... determine the annual manufacturing overhead cost-allocation rate, the amount of MOH allocated to the job, and the estimated total manufacturing costs for the job.',
            idealAnswer: 'The overhead allocation rate = Total Estimated MOH / Total Estimated Machine Hours. The overhead allocated to the job = Rate * Machine hours for the job. Total manufacturing cost for the job = Direct Materials + Direct Labor + Allocated MOH.'
        },
        {
            id: 'pp-aa-2020-1-q6a',
            questionType: 'Other',
            questionText: 'Sodius Chemical Inc. placed 220,000 liters of direct materials into the mixing process... Determine the equivalent units in process for direct materials and conversion costs.',
            idealAnswer: 'This process costing problem requires calculating equivalent units (EUP). For part (a) with no beginning inventory, EUP for materials is units completed + units in ending WIP. EUP for conversion is units completed + (units in ending WIP * % complete). For part (b) with beginning inventory, the same calculation is used for the weighted-average method.'
        },
        {
            id: 'pp-aa-2020-1-q6b',
            questionType: 'Other',
            questionText: 'Asghar Manufacturing Company sells its products for Rs.33 each... Prepare an income statement using absorption costing and variable costing.',
            idealAnswer: 'Absorption costing includes fixed manufacturing overhead in the cost of goods sold. Variable costing treats all fixed manufacturing overhead as a period expense. Since production (50,000 units) is greater than sales (40,000 units), absorption costing will show a higher profit because some fixed overhead is deferred in the ending inventory.'
        },
        {
            id: 'pp-aa-2020-1-q7a',
            questionType: 'Other',
            questionText: 'Big Mind Corporation was recently formed... What is the total manufacturing cost per chip for June? Allocate the total costs between the completed chips and the chips in ending inventory.',
            idealAnswer: 'This requires calculating the equivalent units for materials and conversion costs. Then, calculate the cost per equivalent unit for each. The total cost per chip is the sum of these two costs. Finally, allocate the total manufacturing costs to the completed units and the ending WIP based on their respective equivalent units.'
        },
        {
            id: 'pp-aa-2020-1-q7b',
            questionType: 'Other',
            questionText: 'The following information was gathered for Smart-view Company... Compute the budgeted factory overhead rate, the factory overhead applied, and the amount of over/under applied overhead.',
            idealAnswer: 'Budgeted FOH rate = Budgeted FOH / Budgeted direct labor-hours. Applied FOH = Rate * Actual direct labor-hours. Over/under applied overhead is the difference between the Actual FOH and the Applied FOH.'
        },
        {
            id: 'pp-aa-2020-1-q8a',
            questionType: 'Other',
            questionText: 'Umar Company produces baseball bats and cricket paddles... Prepare a production cost worksheet, using FIFO for the finishing department.',
            idealAnswer: 'This requires preparing a production cost report for the finishing department using the FIFO method. This method keeps beginning inventory costs separate from current period costs. Equivalent units and cost per equivalent unit are calculated based only on the work done and costs added during the current period.'
        },
        {
            id: 'pp-aa-2020-1-q8b',
            questionType: 'Other',
            questionText: 'During February the Luqman Manufacturing Company\'s costing system reported several variances... Provide the manager with some ideas as to what may have caused the price variances and the efficiency variances.',
            idealAnswer: 'Price variances (materials and labor) can be caused by factors like paying more or less than standard for materials/labor, or using a different quality of material. Efficiency variances (materials and labor) can be caused by using more or less material/labor than the standard quantity allowed for the output, due to factors like worker skill, machine efficiency, or material quality.'
        },
        {
            id: 'pp-aa-2020-2-q2',
            questionType: 'Other',
            questionText: 'Why computerized audit is required in the presence of manual audit? Elaborate the computerized auditing by application of Computer Assisted Audit Techniques (CAAT).',
            idealAnswer: 'Computerized audit is required to effectively audit modern, complex IT systems where manual audit is impractical. CAATs, like audit software, allow auditors to test 100% of a data population for exceptions, perform complex calculations, and analyze system controls more efficiently and effectively than manual methods.'
        },
        {
            id: 'pp-aa-2020-2-q3',
            questionType: 'Other',
            questionText: 'Define audit and auditing. Comment on the auditor’s consideration of “reasonable assurance” and “True &amp; Fair view” for the financial audit of a corporate entity.',
            idealAnswer: 'Auditing is the systematic examination of financial records to provide an opinion. Auditors provide "reasonable assurance," not absolute assurance, that the financial statements are free from material misstatement. A "true and fair view" means the financial statements are factually accurate and present an unbiased picture of the company\'s financial position and performance.'
        },
        {
            id: 'pp-aa-2020-2-q4',
            questionType: 'Other',
            questionText: 'Write notes on: (a) Audit materiality (b) Misstatement and Fraud (c) Test of Control and Substantive Procedures',
            idealAnswer: '(a) Materiality: an item is material if its omission or misstatement could influence users\' decisions. (b) Misstatement is an error, while fraud is an intentional act of deception. (c) Tests of Control evaluate the effectiveness of internal controls, while Substantive Procedures are designed to detect material misstatements at the assertion level.'
        },
        {
            id: 'pp-aa-2020-2-q5',
            questionType: 'Other',
            questionText: 'Elaborate the following fundamental definitions/terminologies as defined under Section 2 of the Income Tax Ordinance 2001: (a) Heads of Income [Section 11] (b) Tax Credits [Section 61 to 65] (c) Capital Gains [Section 37 to 38]',
            idealAnswer: '(a) The five heads of income are Salary, Income from Property, Income from Business, Capital Gains, and Income from Other Sources. (b) Tax credits are reductions in tax liability for specific actions like donations or investments. (c) Capital Gains are profits from the sale of a capital asset.'
        },
        {
            id: 'pp-aa-2020-2-q6',
            questionType: 'Other',
            questionText: 'ABC (Pvt) Limited has earned income from business... Calculate Total income and the Tax payable by the Company for the tax year 2019.',
            idealAnswer: 'This requires calculating the taxable income from property by taking rent and subtracting allowable deductions. Then, this is added to the income from business to get total taxable income. The tax payable is calculated by applying the corporate tax rate for a non-filer company to the total taxable income, and then subtracting the tax already withheld by tenants.'
        },
        {
            id: 'pp-aa-2020-2-q7',
            questionType: 'Other',
            questionText: 'How many legal forms of Business Entity exist in Pakistan? Explain the features of Joint Stock Company and its procedure of formation.',
            idealAnswer: 'The main forms are Sole Proprietorship, Partnership, and Joint Stock Company. A Joint Stock Company is a separate legal entity with limited liability and perpetual succession. Formation stages include promotion, incorporation (registration with SECP), and, for a public limited company, obtaining a certificate to commence business.'
        },
        {
            id: 'pp-aa-2020-2-q8',
            questionType: 'Other',
            questionText: 'XYZ Co. has Rs. 400 million in outstanding debt and Rs. 100 million in preferred stock... What is its Weighted Average Cost of Capital (WACC) assuming it will continue to not pay taxes?',
            idealAnswer: 'WACC = (Weight of Equity * Cost of Equity) + (Weight of Preferred * Cost of Preferred) + (Weight of Debt * Cost of Debt). The weights are based on market values. Since the company does not pay taxes, the cost of debt is not adjusted for a tax shield. Equity value = Total Value - Debt - Preferred = 300m. WACC = (300/800)*12% + (100/800)*9% + (400/800)*8%.'
        }
    ]
  },
  {
    id: 'pp-aa-2021-1',
    year: 2021,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-aa-2021-1-q2',
            questionType: 'Other',
            questionText: 'You are required to prepare Income Statement for the period ending 31st December, 2019.',
            idealAnswer: 'An income statement would be prepared by starting with Sales, subtracting Sales Returns and Sales Discounts to get Net Sales. Then, calculate Cost of Goods Sold (Opening Inventory + Purchases + Carriage In - Purchase Returns/Discounts - Closing Inventory). Subtract COGS from Net Sales to get Gross Profit. Finally, subtract all selling and administrative expenses to arrive at Net Income.'
        },
        {
            id: 'pp-aa-2021-1-q3',
            questionType: 'Other',
            questionText: 'A, B are two partners sharing profits and losses in the ratio of 3:1. They admit K as a partner... Show the journal entries, if: (A) K pays for the goodwill in cash. (B) He is unable to bring the cash for the goodwill.',
            idealAnswer: '(A) If cash is brought, debit Cash and credit Goodwill, then debit Goodwill and credit old partners\' capital accounts in their sacrificing ratio. (B) If unable to bring cash, goodwill is raised by debiting K\'s Capital Account and crediting the old partners\' capital accounts in the sacrificing ratio.'
        },
        {
            id: 'pp-aa-2021-1-q4',
            questionType: 'Other',
            questionText: 'XYZ purchased a delivery truck... Calculate the annual depreciation expense by applying sum of the year digit method and pass journal entries.',
            idealAnswer: 'The sum of the years\' digits for a 5-year life is 5+4+3+2+1=15. Depreciable amount = 65,000 - 5,000 = 60,000. Depreciation for Year 1 = (5/15) * 60,000. Year 2 = (4/15) * 60,000, and so on. Journal entries would debit Depreciation Expense and credit Accumulated Depreciation each year.'
        },
        {
            id: 'pp-aa-2021-1-q5',
            questionType: 'Other',
            questionText: 'Attock Engineering Co. Ltd produces machines as per customer’s specifications... Prepare job order cost sheet. Calculate sales price of the job...',
            idealAnswer: 'The job order cost sheet will sum up all costs for Job 1122: Direct Materials (for both weeks), Direct Labor (for both departments for both weeks), and Applied Factory Overhead (calculated based on the given rates for each department). Marketing and admin costs (20% of manufacturing cost) are added to get the total cost. The sales price is then calculated by adding a 40% markup.'
        },
        {
            id: 'pp-aa-2021-1-q6',
            questionType: 'Other',
            questionText: 'Volter company’s contribution format income statement for the recent year is given below... Compute the company’s CM ratio and variable expense ratio, and the breakeven point.',
            idealAnswer: 'CM Ratio = Contribution Margin / Sales. Variable Expense Ratio = Variable Expenses / Sales. Breakeven Point (Units) = Fixed Expenses / Contribution Margin per Unit. Breakeven Point (Sales Rs.) = Fixed Expenses / CM Ratio.'
        },
        {
            id: 'pp-aa-2021-1-q7',
            questionType: 'Other',
            questionText: 'Brooks Inc. uses process costing... prepare The cost of production report for Department 2 for April.',
            idealAnswer: 'This process costing problem requires preparing a cost of production report. Key steps include calculating equivalent units of production (for transferred-in costs, materials, and conversion costs), calculating the cost per equivalent unit, and then assigning the total costs to the units transferred out and the units remaining in ending work-in-process.'
        },
        {
            id: 'pp-aa-2021-1-q8',
            questionType: 'Other',
            questionText: 'When setting its predetermined overhead application rate, Tasty Inc. estimated its overhead... Determine the predetermined overhead rate and the overhead applied during the year.',
            idealAnswer: 'Predetermined Overhead Rate = Estimated Overhead / Estimated Machine Hours = 75,000 / 25,000 = Rs. 3 per machine hour. Overhead Applied = Rate * Actual Machine Hours = 3 * 24,000 = Rs. 72,000.'
        },
        {
            id: 'pp-aa-2021-2-q2',
            questionType: 'Other',
            questionText: 'Explain in detail why there is an established need for auditing services for each of the following organizations: Publicly owned corps, Privately owned corps, Govt agencies, Partnerships.',
            idealAnswer: 'Audits are needed to provide assurance and credibility to financial statements for various stakeholders. For public corporations, it\'s for investors. For private ones, it can be for lenders. For government agencies, it\'s for public accountability. For partnerships, it\'s to ensure fair distribution of profits among partners.'
        },
        {
            id: 'pp-aa-2021-2-q3',
            questionType: 'Other',
            questionText: 'Explain computer audit approaches and also write a detailed note on the characteristics of Electronic Data Processing (EDP) system.',
            idealAnswer: 'Approaches include auditing around the computer (testing inputs and outputs) and auditing through the computer (using CAATs to test processing). Characteristics of EDP systems include concentration of data, lack of a visible audit trail, and systematic processing, which present unique risks and challenges for auditors.'
        },
        {
            id: 'pp-aa-2021-2-q4',
            questionType: 'Other',
            questionText: 'Write a detailed note on the types of audit and auditors (GAAS).',
            idealAnswer: 'Types of audit include financial statement audit, compliance audit, and operational audit. Types of auditors include external (independent) auditors, internal auditors, and government auditors. GAAS (Generally Accepted Auditing Standards) are the professional standards for the performance of an audit.'
        },
        {
            id: 'pp-aa-2021-2-q5a',
            questionType: 'Other',
            questionText: 'According to the income tax ordinance, 2001, what do we mean by Resident and Non-Resident persons (sections 81-84)? Elaborate on the different types of resident persons.',
            idealAnswer: 'A resident person is generally one who is present in Pakistan for 183 days or more in a tax year. Types include resident individual, resident company, and resident association of persons. Non-residents are taxed on their Pakistan-source income, while residents are generally taxed on their global income.'
        },
        {
            id: 'pp-aa-2021-2-q5b',
            questionType: 'Other',
            questionText: 'According to the income tax ordinance, 2001, what do we mean by tax year [section 2(68)]. Elaborate on different kinds of tax years.',
            idealAnswer: 'The tax year is the 12-month period for which income is calculated and tax is paid. The "Normal Tax Year" ends on June 30. A "Special Tax Year" is any 12-month period ending on a date other than June 30, as permitted by the tax authorities.'
        },
        {
            id: 'pp-aa-2021-2-q6',
            questionType: 'Other',
            questionText: 'From the following data, calculate the tax payable by Mr. Sohail Aslam for the year ended 30th June 2020.',
            idealAnswer: 'Calculate total taxable income by summing salary, special pay, bonus, and allowances. Add the taxable benefit for accommodation. Medical expenses reimbursement under contract is exempt. Subtract Zakat deduction. Calculate tax credits for donation and pension scheme contribution. Apply tax rates to find gross tax, then subtract credits for the final tax payable.'
        },
        {
            id: 'pp-aa-2021-2-q7a',
            questionType: 'Other',
            questionText: 'Give hypothetical journal transactions that will have the following types of effects on the elements of balance sheet equation (Assets = Liabilities + Owner’s Equity).',
            idealAnswer: '(i) Buy asset on credit. (ii) Pay off a liability with cash. (iii) Buy asset with cash. (iv) Owner invests cash. (v) Buy asset with part cash and part credit.'
        },
        {
            id: 'pp-aa-2021-2-q7b',
            questionType: 'Other',
            questionText: 'Using the information given in the following table, complete the balance sheet given underneath and write it down in answer book provided.',
            idealAnswer: 'This requires working backward from the given financial ratios. For example, if total asset turnover is 2.5 and sales are known (or can be derived), total assets can be calculated. This process is repeated for each ratio to fill in the missing balance sheet values.'
        },
        {
            id: 'pp-aa-2021-2-q8',
            questionType: 'Other',
            questionText: 'Explain in detail the factors which are related to the risk structure of interest rates.',
            idealAnswer: 'The risk structure of interest rates explains why bonds with the same maturity have different interest rates. Factors include: 1. Default Risk (the risk the issuer won\'t pay). 2. Liquidity (how easily the bond can be sold). 3. Tax Treatment (whether the interest is tax-exempt).'
        }
    ]
  },
  {
    id: 'pp-aa-2022-1',
    year: 2022,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-aa-2022-1-q2',
            questionType: 'Other',
            questionText: 'Campus Theater adjusts its accounts every month... For each of the numbered paragraphs, prepare the necessary adjusting entry.',
            idealAnswer: 'This requires preparing adjusting entries for various items: recognizing film rental expense from prepaid, depreciation for building and equipment, accrued interest payable, earned admissions revenue from unearned, accrued concessions revenue, and accrued salaries and income taxes.'
        },
        {
            id: 'pp-aa-2022-1-q3',
            questionType: 'Other',
            questionText: 'During the current year, Hitchcock Developers disposed of plant assets in the following transactions... Prepare journal entries to record each of the disposal transactions.',
            idealAnswer: 'Each transaction requires a journal entry. For disposals, debit Cash and Accumulated Depreciation, credit the asset account, and recognize any gain or loss on the disposal. For trade-ins, the accounting depends on whether the transaction has commercial substance.'
        },
        {
            id: 'pp-aa-2022-1-q4',
            questionType: 'Other',
            questionText: 'S, T and Q were partners sharing profits in the proportion of 3:2:1... Work out a Profit and Loss Adjustment Account and show the Journal Entries necessary for readjustments.',
            idealAnswer: 'This requires preparing a P&L Adjustment account to correct the previously distributed profit. This involves reversing the old profit distribution and accounting for the omitted items: interest on capital, partner\'s salary, and interest on loan. The corrected profit is then distributed in the new ratio, and adjusting journal entries are passed through the partners\' capital accounts.'
        },
        {
            id: 'pp-aa-2022-1-q5',
            questionType: 'Other',
            questionText: 'Listed below are five items that may—or may not—require disclosure in the notes that accompany financial statements. Explain what, if any, disclosure is required.',
            idealAnswer: '(a) Yes, disclosure of accounting policy is required. (b) No, unless it severely impacts future viability. (c) Yes, disclosure of this non-adjusting subsequent event is required. (d) No, this is speculative and not disclosed. (e) Yes, disclosure of this contingent liability is required if the loss is probable or possible.'
        },
        {
            id: 'pp-aa-2022-1-q6',
            questionType: 'Other',
            questionText: 'Juarez Inc. had the following inventories on March 1... Journalize the March transactions and prepare a schedule of inventories.',
            idealAnswer: 'This job order costing problem involves journalizing the flow of costs through the inventory accounts (Materials, WIP, Finished Goods). This includes requisitions of direct and indirect materials, recording labor costs, applying factory overhead, and recording the completion and sale of jobs.'
        },
        {
            id: 'pp-aa-2022-1-q7',
            questionType: 'Other',
            questionText: 'Wheeler Company, a small supplier of computer parts, is currently producing a new computer sensory unit... Calculate the dollar amount of the 23.2% labour cost increase and give an opinion on whether the incentive plan was too costly.',
            idealAnswer: 'Calculate the labor cost before and after the incentive plan to verify the 23.2% increase. The opinion should consider not just the increased labor cost per unit, but also the benefit of the increased production (10% more units) and its effect on absorbing fixed overhead costs.'
        },
        {
            id: 'pp-aa-2022-1-q8',
            questionType: 'Other',
            questionText: 'WKZ Inc., with $20,000,000 of par stock outstanding, plans to budget earnings of 6% before income tax... Prepare the budgeted cost of goods manufactured and sold statement.',
            idealAnswer: 'This requires working backward from the budgeted income statement. First, determine the target profit (6% of 20M). Then, calculate the required Cost of Goods Sold (Sales - Expenses - Target Profit). Finally, use the COGS figure and the inventory information to prepare the budgeted Cost of Goods Manufactured and Sold statement.'
        },
        {
            id: 'pp-aa-2022-2-q2',
            questionType: 'Other',
            questionText: 'Define audit planning. What factors should be considered by an auditor in developing an audit plan.',
            idealAnswer: 'Audit planning involves establishing the overall audit strategy. Factors to consider include understanding the client\'s business and industry, assessing materiality and audit risk, identifying significant accounts and transactions, and determining the nature, timing, and extent of audit procedures.'
        },
        {
            id: 'pp-aa-2022-2-q3',
            questionType: 'Other',
            questionText: 'Define an audit program. Give its advantages and disadvantages. What are the purposes/benefits of conducting audit through a fixed audit program?',
            idealAnswer: 'An audit program is a detailed set of audit procedures to be performed. Advantages include ensuring all areas are covered and work can be allocated. Disadvantages include inflexibility. A fixed program ensures uniformity and helps in training junior staff.'
        },
        {
            id: 'pp-aa-2022-2-q4',
            questionType: 'Other',
            questionText: 'Define ‘Fraud’ as applied to accounting. What are different types of frauds? How will you detect and prevent the frauds related with embezzlement of cash?',
            idealAnswer: 'Fraud is an intentional act of deception to gain an unjust advantage. Types include fraudulent financial reporting and misappropriation of assets (embezzlement). Embezzlement of cash can be detected and prevented through strong internal controls like segregation of duties, bank reconciliations, and surprise cash counts.'
        },
        {
            id: 'pp-aa-2022-2-q5',
            questionType: 'Other',
            questionText: 'ABC is a private limited company... Calculate the taxable income and tax liability of the company for the tax year 2021 from the above data.',
            idealAnswer: 'This requires preparing a computation of taxable income by starting with the net profit and adding back all inadmissible expenses (like provision for bad debts, preliminary expenses, certain donations) and subtracting any income exempt from tax or taxed under a different head. Then apply the corporate tax rate.'
        },
        {
            id: 'pp-aa-2022-2-q6',
            questionType: 'Other',
            questionText: 'Discuss ten allowable deductions under the head of “income from business” under section 20 of Income Tax Ordinance 2001.',
            idealAnswer: 'Allowable deductions include rent, rates, repairs, insurance premiums for business assets, interest on business loans, employee salaries, bad debts actually written off, depreciation, and any other expenditure incurred wholly and exclusively for the purpose of the business.'
        },
        {
            id: 'pp-aa-2022-2-q7',
            questionType: 'Other',
            questionText: 'What is the purpose of financial markets? How can this purpose be accomplished efficiently? Discuss the functions of financial intermediaries.',
            idealAnswer: 'The purpose is to channel funds from savers to borrowers. This is accomplished efficiently through price discovery and providing liquidity. Financial intermediaries (like banks) facilitate this process by pooling funds, managing risk, and reducing transaction costs.'
        },
        {
            id: 'pp-aa-2022-2-q8',
            questionType: 'Other',
            questionText: 'Why do bonds with long maturities fluctuate more in price than do bonds with short maturities, given the same change in yield to maturity?',
            idealAnswer: 'This is due to the concept of duration. The price of a long-maturity bond is more sensitive to changes in interest rates because its cash flows are received further into the future, and thus are discounted over a longer period. A change in the discount rate has a larger percentage impact on the present value of these distant cash flows.'
        }
    ]
  },
  {
    id: 'pp-aa-2023-1',
    year: 2023,
    subject: 'Accountancy & Auditing',
    questions: [
        {
            id: 'pp-aa-2023-1-q2a',
            questionType: 'Other',
            questionText: 'What are the Accounting Principles? Define any four accounting principles shortly.',
            idealAnswer: 'Accounting principles are the rules and guidelines companies must follow when reporting financial data. Four key principles are: 1. Cost Principle: Assets are recorded at their original cost. 2. Matching Principle: Expenses are matched with the revenues they help generate. 3. Full Disclosure Principle: All information that could affect a user\'s understanding must be disclosed. 4. Revenue Recognition Principle: Revenue is recognized when it is earned and realizable.'
        },
        {
            id: 'pp-aa-2023-1-q2b',
            questionType: 'Other',
            questionText: 'What are the Accounting Conventions? Define any four accounting conventions shortly.',
            idealAnswer: 'Accounting conventions are customs or traditions that guide the preparation of financial statements. Four key conventions are: 1. Conservatism: When in doubt, choose the solution that will be least likely to overstate assets and income. 2. Consistency: Once an accounting method is chosen, it should be used consistently. 3. Materiality: The significance of an item should be considered when it is reported. 4. Full Disclosure: All relevant information should be disclosed.'
        },
        {
            id: 'pp-aa-2023-1-q2c',
            questionType: 'Other',
            questionText: 'The below mentioned balances are extracted from the books of Emerging Technologies Pvt. Ltd... Prepare a Trial Balance as on that date in a proper format.',
            idealAnswer: 'A trial balance is a list of all general ledger accounts with their debit and credit balances. The format involves listing all debit balance accounts (like assets and expenses) in one column and all credit balance accounts (like liabilities, equity, and revenue) in another. The total of the debit column must equal the total of the credit column.'
        },
        {
            id: 'pp-aa-2023-1-q3',
            questionType: 'Other',
            questionText: 'Deluxe Software Private Limited closes its books on 31st December every year... compute EPS, ROE, BV, and perform estimations for the next year.',
            idealAnswer: 'EPS = (Net Income - Preferred Dividends) / Number of Common Shares. ROE = Net Income / Average Shareholders\' Equity. BV per share = (Total Equity - Preferred Equity) / Number of Common Shares. The estimations for the next year involve using the target EPS and ROE to work backward and calculate the required profit and equity figures.'
        },
        {
            id: 'pp-aa-2023-1-q4a',
            questionType: 'Other',
            questionText: 'Post-closing Trial Balance of Premium Fabrics Private Limited for the year ended December 31, 2021 and 2022 are as follows... prepare a cash flow statement of Premium Fabrics as per IAS-7 for the year 2022.',
            idealAnswer: 'A cash flow statement reports cash flows from three activities: operating, investing, and financing. This would require calculating cash flow from operations (using the indirect method, starting with net income and adjusting for non-cash items and changes in working capital), investing activities (purchase/sale of assets), and financing activities (dividends paid, changes in loans and capital).'
        },
        {
            id: 'pp-aa-2023-1-q4b',
            questionType: 'Other',
            questionText: 'Mr. Haider started a business on March 1st 2022... Prepare Trading and Profit and Loss account and Balance Sheet as on 31st December 2022.',
            idealAnswer: 'This requires preparing financial statements from incomplete records (single entry). First, a statement of affairs is needed to find the opening capital. Then, a Trading Account is prepared to find Gross Profit (Sales - Cost of Goods Sold). A Profit and Loss account is prepared to find Net Profit. Finally, a Balance Sheet is prepared listing assets and liabilities to show the financial position.'
        },
        {
            id: 'pp-aa-2023-1-q5a',
            questionType: 'Other',
            questionText: 'Eagle Star is a manufacturing company. The Company uses Rowan Premium bonus scheme... Calculate gross wage of Mr. Afzal for the week.',
            idealAnswer: 'The Rowan premium is calculated as (Time Saved / Standard Time) * Time Taken * Hourly Rate. First, calculate the standard time for the output and the time saved. The bonus is calculated for the productive hours. The gross wage is the basic wage for all hours worked (including idle time) plus the Rowan premium and the dearness allowance.'
        },
        {
            id: 'pp-aa-2023-1-q5b',
            questionType: 'Other',
            questionText: 'An Automobile factory will use 500,000 tyres for its production in coming year... Calculate Economic Order Quantity and Reorder point.',
            idealAnswer: 'Economic Order Quantity (EOQ) = sqrt( (2 * Annual Demand * Ordering Cost) / Holding Cost ). Reorder Point = (Demand per day * Lead time) + Safety Stock. The daily usage and safety stock need to be calculated first.'
        },
        {
            id: 'pp-aa-2023-1-q6a',
            questionType: 'Other',
            questionText: 'A manufacturing company of Lahore submits the following information... Prepare an Income Statement for the year ended 31st December 2022',
            idealAnswer: 'This requires preparing a formal multi-step income statement. First, calculate the Cost of Goods Manufactured. Then, use that to calculate the Cost of Goods Sold. Gross Profit = Sales - COGS. Finally, subtract all selling and administrative expenses to arrive at the Net Income.'
        },
        {
            id: 'pp-aa-2023-1-q6b',
            questionType: 'Other',
            questionText: 'Khizra manufacturing corporation has fixed cost for the year... Calculate Break Even point, estimated contribution and profit, and the turnover required for a target profit.',
            idealAnswer: 'a) Breakeven Point (Units) = Fixed Costs / Contribution Margin per Unit. b) Contribution = Sales * (CM Ratio). Profit = Contribution - Fixed Costs. c) Required Sales (in units) = (Fixed Costs + Target Profit) / Contribution Margin per Unit. Then convert units to turnover value.'
        },
        {
            id: 'pp-aa-2023-1-q7',
            questionType: 'Other',
            questionText: 'The Balance Sheet of Fazal Din &amp; Co. as on 31st December 2021 was as follows... Prepare an Income statement for 2022 and a balance Sheet as on 31st December 2022.',
            idealAnswer: 'This is a comprehensive problem requiring the reconstruction of the income statement and balance sheet from transactional data and changes in balances. It involves tracking the flow of costs through inventory accounts, calculating net income, and then preparing the final balance sheet ensuring it balances.'
        },
        {
            id: 'pp-aa-2023-1-q8',
            questionType: 'Other',
            questionText: 'A chemical factory manufactures three kinds of chemicals... Prepare the payroll for the last week of December 2022.',
            idealAnswer: 'This involves calculating the payroll for each grade of labor. First, calculate the standard hours produced by the group. Then, calculate the time saved and the group incentive bonus. This bonus is allocated among the grades. Overtime is calculated at a premium. The total payroll for each grade is the sum of basic pay, overtime, and their share of the incentive bonus.'
        },
        {
            id: 'pp-aa-2023-2-q2',
            questionType: 'Other',
            questionText: 'Define professional skepticism and explain its key characteristics. Why should auditors act as though there is always a potential conflict of interest between the auditor and the management of the enterprise under audit?',
            idealAnswer: 'Professional skepticism is an attitude that includes a questioning mind and a critical assessment of audit evidence. Its key characteristics are questioning, being alert to conditions that may indicate misstatement, and critically evaluating evidence. Auditors assume a potential conflict of interest because management has incentives to present the company in the best possible light, which may lead to bias or misstatement.'
        },
        {
            id: 'pp-aa-2023-2-q3',
            questionType: 'Other',
            questionText: 'What are CAATs? What are some audit procedures that can be performed using CAATs? What advantages are derived from using CAATs in the financial statement audit?',
            idealAnswer: 'CAATs (Computer-Assisted Audit Techniques) use software to automate audit procedures. Procedures include selecting sample items, testing calculations, and identifying exceptions in large data sets. Advantages include increased efficiency, the ability to test 100% of a population, and improved quality of audit evidence.'
        },
        {
            id: 'pp-aa-2023-2-q4',
            questionType: 'Other',
            questionText: 'Define and explain the differences among several kinds of employee frauds that might occur at an audit client.',
            idealAnswer: 'Employee frauds typically fall under misappropriation of assets. Examples include: 1. Larceny (stealing cash after it has been recorded). 2. Skimming (stealing cash before it is recorded). 3. Fictitious expense reimbursements. 4. Payroll fraud (ghost employees). The key difference lies in the method used to steal the company\'s assets.'
        },
        {
            id: 'pp-aa-2023-2-q5',
            questionType: 'Other',
            questionText: 'Zia inherited certain assets from his father in the year 20x1... compute the taxable income of Zia and Ishaq for the tax year 20x5 and give a brief explanation for the items not included.',
            idealAnswer: 'For Zia, the sale of shares results in a capital gain, calculated as sale proceeds minus the fair market value at the time of inheritance (his cost). For Ishaq, the gift itself is not income. However, when he sells the assets, his cost basis is the same as Zia\'s (the value at the time of original inheritance), and he will have a capital gain based on the sale price minus that cost.'
        },
        {
            id: 'pp-aa-2023-2-q6',
            questionType: 'Other',
            questionText: 'Explain the correct tax treatment in each of the following situations.',
            idealAnswer: 'This requires applying specific sections of the Income Tax Ordinance. 1. Donation credit is calculated. 2. Sale of sculpture is a capital gain. 3. Forfeited advance is taxed as "Income from Other Sources". 4. Sale of personal car is not a taxable event. 5. This involves determining residential status and taxability of foreign-source salary. 6. Net receipt needs to be grossed up to find the full taxable income.'
        },
        {
            id: 'pp-aa-2023-2-q7',
            questionType: 'Other',
            questionText: 'Fitch Industries is in the process of choosing the better of two equal-risk, mutually exclusive capital expenditure projects... Calculate the payback period, NPV, and IRR and recommend.',
            idealAnswer: 'Payback period is the time to recover the initial cost. NPV is the present value of inflows minus the initial cost, discounted at the cost of capital (9%). IRR is the discount rate that makes NPV zero. For mutually exclusive projects, the one with the higher NPV should be recommended, as it adds more value to the firm.'
        },
        {
            id: 'pp-aa-2023-2-q8',
            questionType: 'Other',
            questionText: 'How have globalization and information technology created new opportunities for entrepreneurs? How does an aging population create opportunities for entrepreneurs? Describe current demographic trends that suggest new goods and services.',
            idealAnswer: 'Globalization and IT have created opportunities through e-commerce, access to global markets, and the gig economy. An aging population creates opportunities in healthcare, assisted living, and leisure services for seniors. Other trends like urbanization and a growing youth bulge suggest opportunities in areas like urban mobility, tech education, and entertainment.'
        }
    ]
  }
]
