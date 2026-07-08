/**
 * TechPulse - Data & Constants
 * All static data, categories, salary info, and market intelligence
 */

// ===== NEWS CONSTANTS =====
const PM_CATEGORIES = [
    { keywords: ['ai', 'gpt', 'llm', 'machine learning', 'openai', 'anthropic', 'gemini', 'copilot', 'neural', 'deep learning', 'chatgpt', 'claude'], category: 'AI & Machine Learning' },
    { keywords: ['launch', 'release', 'announce', 'ship', 'beta', 'general availability', 'update', 'introduces', 'unveil', 'new version'], category: 'Product Launches' },
    { keywords: ['funding', 'series', 'valuation', 'ipo', 'acquisition', 'acquire', 'merge', 'billion', 'million', 'raise', 'invest'], category: 'Funding & M&A' },
    { keywords: ['api', 'sdk', 'platform', 'developer', 'devtools', 'framework', 'library', 'open source', 'github', 'rust', 'typescript'], category: 'Developer Tools' },
    { keywords: ['cloud', 'aws', 'azure', 'gcp', 'serverless', 'kubernetes', 'docker', 'infrastructure'], category: 'Cloud & Infra' },
    { keywords: ['security', 'breach', 'vulnerability', 'privacy', 'gdpr', 'compliance', 'hack', 'encrypt'], category: 'Security & Privacy' },
    { keywords: ['startup', 'founder', 'yc', 'venture', 'disruption', 'pivot', 'bootstrap'], category: 'Startups' },
    { keywords: ['regulation', 'antitrust', 'eu', 'policy', 'ban', 'congress', 'ftc', 'law'], category: 'Regulation & Policy' },
];

const CATEGORY_ICONS = {
    'AI & Machine Learning': '🤖',
    'Product Launches': '🚀',
    'Funding & M&A': '💰',
    'Developer Tools': '🛠️',
    'Cloud & Infra': '☁️',
    'Security & Privacy': '🔒',
    'Startups': '🌱',
    'Regulation & Policy': '⚖️',
    'Industry News': '📰',
};

const IMPACT_COLORS = {
    high: 'bg-red-500/10 text-red-400 border-red-500/30',
    medium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    low: 'bg-green-500/10 text-green-400 border-green-500/30',
};

// ===== COMPENSATION DATA =====
const SALARY_DATA_INDIA = [
    { level: 'Associate PM (0-2 yrs)', range: '₹8-18 LPA', avg: '₹12 LPA', color: 'bg-green-400' },
    { level: 'PM (2-5 yrs)', range: '₹18-35 LPA', avg: '₹25 LPA', color: 'bg-blue-400' },
    { level: 'Senior PM (5-8 yrs)', range: '₹35-60 LPA', avg: '₹45 LPA', color: 'bg-purple-400' },
    { level: 'Lead/Principal PM (8-12 yrs)', range: '₹55-90 LPA', avg: '₹70 LPA', color: 'bg-pink-400' },
    { level: 'Director of Product (12+ yrs)', range: '₹80-1.5 Cr', avg: '₹1.1 Cr', color: 'bg-amber-400' },
    { level: 'VP Product / CPO', range: '₹1.2-3+ Cr', avg: '₹1.8 Cr', color: 'bg-red-400' },
];

const SALARY_DATA_REMOTE = [
    { level: 'PM (Remote, India-based)', range: '$40K-80K/yr', avg: '$55K', color: 'bg-green-400' },
    { level: 'Senior PM (Remote)', range: '$80K-140K/yr', avg: '$110K', color: 'bg-blue-400' },
    { level: 'Lead PM (US Remote)', range: '$140K-200K/yr', avg: '$165K', color: 'bg-purple-400' },
    { level: 'Director+ (Remote)', range: '$180K-300K+/yr', avg: '$230K', color: 'bg-pink-400' },
];

// ===== MARKET DATA =====
const MARKET_DATA = {
    healthScore: 72,
    trend: 'growing',
    monthlyChange: '+8%',
    totalOpenings: 2400,
    avgTimeToHire: '28 days',
    competitionRatio: '1:45',
    topSectors: [
        { name: 'AI/ML Products', growth: 85, trend: 'up' },
        { name: 'Fintech', growth: 70, trend: 'up' },
        { name: 'SaaS/B2B', growth: 65, trend: 'stable' },
        { name: 'E-commerce', growth: 55, trend: 'stable' },
        { name: 'Health Tech', growth: 50, trend: 'up' },
        { name: 'EdTech', growth: 35, trend: 'down' },
    ],
    hotSkills: [
        'AI/ML Product Management', 'Data Analytics', 'Platform Thinking',
        'API Strategy', 'Growth PM', 'B2B SaaS', 'Experimentation',
        'SQL/Python basics', 'Stakeholder Mgmt', 'OKRs'
    ],
    hiringTrends: [
        { month: 'Jan', score: 60, label: 'Slow start, budgets being finalized' },
        { month: 'Feb', score: 65, label: 'Hiring picks up post-appraisals' },
        { month: 'Mar', score: 78, label: 'Peak hiring — Q1 budget unlocked' },
        { month: 'Apr', score: 82, label: 'Strong demand, fiscal year starts' },
        { month: 'May', score: 75, label: 'Good momentum continues' },
        { month: 'Jun', score: 70, label: 'Moderate — mid-year reviews' },
        { month: 'Jul', score: 68, label: 'Slight dip, monsoon slowdown' },
        { month: 'Aug', score: 72, label: 'Recovery begins' },
        { month: 'Sep', score: 80, label: 'Strong H2 hiring push' },
        { month: 'Oct', score: 85, label: 'Peak — festive budget + Q3 goals' },
        { month: 'Nov', score: 78, label: 'Good, but slowing for year-end' },
        { month: 'Dec', score: 55, label: 'Lowest — holiday freeze' },
    ],
    companySignals: [
        { name: 'Google India', signal: 'Actively hiring PMs for AI products', urgency: 'high', roles: 12, salary: '₹45-90 LPA', careerUrl: 'https://www.google.com/about/careers/applications/jobs/results/?location=India&q=product%20manager', locations: ['Bangalore', 'Hyderabad'], domain: 'AI/ML, Search, Cloud' },
        { name: 'Microsoft India', signal: 'Scaling PM teams for Copilot & Azure', urgency: 'high', roles: 15, salary: '₹40-85 LPA', careerUrl: 'https://careers.microsoft.com/v2/global/en/search?q=product%20manager&l=India', locations: ['Bangalore', 'Hyderabad', 'Noida'], domain: 'AI, Cloud, Enterprise' },
        { name: 'Amazon India', signal: 'PM hiring across retail & AWS', urgency: 'high', roles: 20, salary: '₹35-75 LPA', careerUrl: 'https://www.amazon.jobs/en/search?base_query=product+manager&loc_query=India', locations: ['Bangalore', 'Hyderabad', 'Chennai'], domain: 'E-commerce, AWS, Payments' },
        { name: 'Razorpay', signal: 'Expanding PM team for lending products', urgency: 'high', roles: 5, salary: '₹30-60 LPA', careerUrl: 'https://razorpay.com/jobs/?department=Product', locations: ['Bangalore'], domain: 'Fintech, Payments, Lending' },
        { name: 'Flipkart', signal: 'New PM roles in quick commerce', urgency: 'medium', roles: 8, salary: '₹30-65 LPA', careerUrl: 'https://www.flipkartcareers.com/#!/joblist', locations: ['Bangalore'], domain: 'E-commerce, Quick Commerce' },
        { name: 'Atlassian', signal: 'Remote PM roles open for APAC', urgency: 'high', roles: 6, salary: '$80-150K (Remote)', careerUrl: 'https://www.atlassian.com/company/careers/all-jobs?team=Product%20Management&location=India', locations: ['Bangalore', 'Remote'], domain: 'Developer Tools, SaaS' },
        { name: 'Swiggy', signal: 'Hiring growth PMs post-IPO', urgency: 'medium', roles: 4, salary: '₹28-55 LPA', careerUrl: 'https://careers.swiggy.com/#/careers?department=Product%20Management', locations: ['Bangalore'], domain: 'Food Delivery, Quick Commerce' },
        { name: 'PhonePe', signal: 'Building new verticals, PM heavy', urgency: 'high', roles: 7, salary: '₹30-60 LPA', careerUrl: 'https://www.phonepe.com/careers/', locations: ['Bangalore', 'Pune'], domain: 'Fintech, UPI, Insurance' },
        { name: 'Stripe', signal: 'Remote-friendly PM roles (India eligible)', urgency: 'medium', roles: 3, salary: '$120-200K (Remote)', careerUrl: 'https://stripe.com/jobs/search?q=product+manager', locations: ['Remote (India eligible)'], domain: 'Payments Infrastructure' },
        { name: 'CRED', signal: 'Senior PM positions for fintech products', urgency: 'medium', roles: 3, salary: '₹35-70 LPA', careerUrl: 'https://careers.cred.club/', locations: ['Bangalore'], domain: 'Fintech, Credit, Rewards' },
        { name: 'Zerodha', signal: 'Product roles for trading platform', urgency: 'medium', roles: 2, salary: '₹25-50 LPA', careerUrl: 'https://zerodha.com/careers/', locations: ['Bangalore'], domain: 'Fintech, Trading, Wealth' },
        { name: 'Meesho', signal: 'Hiring PMs for social commerce', urgency: 'medium', roles: 4, salary: '₹28-55 LPA', careerUrl: 'https://meesho.io/careers', locations: ['Bangalore'], domain: 'Social Commerce, SMB' },
        { name: 'Notion', signal: 'Remote PM roles, India-friendly timezone', urgency: 'high', roles: 3, salary: '$130-190K (Remote)', careerUrl: 'https://www.notion.so/careers', locations: ['Remote'], domain: 'Productivity, SaaS' },
        { name: 'Uber India', signal: 'PM hiring for mobility & delivery', urgency: 'medium', roles: 5, salary: '₹35-70 LPA', careerUrl: 'https://www.uber.com/us/en/careers/list/?query=product%20manager&location=IND', locations: ['Bangalore', 'Hyderabad'], domain: 'Mobility, Delivery, Maps' },
        { name: 'Salesforce India', signal: 'Expanding AI product teams', urgency: 'high', roles: 8, salary: '₹40-80 LPA', careerUrl: 'https://careers.salesforce.com/en/jobs/?search=product+manager&location=India', locations: ['Bangalore', 'Hyderabad'], domain: 'CRM, AI, Enterprise SaaS' },
        { name: 'Coinbase', signal: 'Remote crypto PM roles (India eligible)', urgency: 'medium', roles: 2, salary: '$140-220K (Remote)', careerUrl: 'https://www.coinbase.com/careers/positions?query=product%20manager', locations: ['Remote'], domain: 'Crypto, Web3, Fintech' },
        { name: 'Zomato', signal: 'PM roles for Blinkit & dining', urgency: 'high', roles: 6, salary: '₹30-60 LPA', careerUrl: 'https://www.zomato.com/careers', locations: ['Gurgaon', 'Bangalore'], domain: 'Food Tech, Quick Commerce' },
        { name: 'Dream11', signal: 'Product growth roles in gaming', urgency: 'medium', roles: 3, salary: '₹35-65 LPA', careerUrl: 'https://www.dreamsports.group/careers/', locations: ['Mumbai'], domain: 'Gaming, Fantasy Sports' },
        { name: 'Freshworks', signal: 'PM hiring for CX and ITSM products', urgency: 'medium', roles: 5, salary: '₹30-55 LPA', careerUrl: 'https://careers.freshworks.com/jobs?department=Product%20Management', locations: ['Chennai', 'Bangalore'], domain: 'SaaS, CRM, ITSM' },
        { name: 'Canva', signal: 'Remote design-product PM roles', urgency: 'high', roles: 4, salary: '$100-170K (Remote)', careerUrl: 'https://www.canva.com/careers/', locations: ['Remote (APAC)'], domain: 'Design, Creativity, SaaS' },
    ]
};

// ===== CURATED INDIA PM JOBS =====
function getCuratedIndiaJobs() {
    const today = new Date().toISOString();
    const yesterday = new Date(Date.now() - 86400000).toISOString();
    return [
        { id: 'cur-1', title: 'Senior Product Manager - AI/ML', company: 'Google India', location: 'Bangalore, India', locationType: 'bangalore', level: 'senior', salary: '₹50-80 LPA', tags: ['AI/ML', 'Search', 'Platform'], description: 'Drive AI product strategy for Google Search and Assistant. Lead cross-functional teams, define product roadmaps, and ship ML-powered features at scale.', url: 'https://www.google.com/about/careers/applications/jobs/results/?location=India&q=product%20manager', applyUrl: 'https://www.google.com/about/careers/applications/jobs/results/?location=India&q=product%20manager', postedAt: today, source: 'Google Careers', logo: '' },
        { id: 'cur-2', title: 'Product Manager - Fintech', company: 'Razorpay', location: 'Bangalore, India', locationType: 'bangalore', level: 'mid', salary: '₹25-45 LPA', tags: ['Fintech', 'Payments', 'B2B'], description: 'Own the payment gateway product for SMBs. Drive adoption, reduce churn, and build new payment instruments for the Indian market.', url: 'https://razorpay.com/jobs/?department=Product', applyUrl: 'https://razorpay.com/jobs/?department=Product', postedAt: today, source: 'Razorpay Careers', logo: '' },
        { id: 'cur-3', title: 'Product Manager - Quick Commerce', company: 'Zomato (Blinkit)', location: 'Gurgaon, India', locationType: 'delhi', level: 'mid', salary: '₹28-50 LPA', tags: ['Quick Commerce', 'Consumer', 'Growth'], description: 'Lead product for Blinkit quick commerce vertical. Focus on user experience, delivery optimization, and catalog expansion.', url: 'https://www.zomato.com/careers', applyUrl: 'https://www.zomato.com/careers', postedAt: today, source: 'Zomato Careers', logo: '' },
        { id: 'cur-4', title: 'Senior PM - Platform', company: 'Flipkart', location: 'Bangalore, India', locationType: 'bangalore', level: 'senior', salary: '₹40-65 LPA', tags: ['E-commerce', 'Platform', 'Scale'], description: 'Build platform capabilities serving 400M+ users. Own seller tools, catalog systems, or supply chain product areas.', url: 'https://www.flipkartcareers.com/#!/joblist', applyUrl: 'https://www.flipkartcareers.com/#!/joblist', postedAt: today, source: 'Flipkart Careers', logo: '' },
        { id: 'cur-5', title: 'Product Manager - UPI/Payments', company: 'PhonePe', location: 'Bangalore, India', locationType: 'bangalore', level: 'mid', salary: '₹28-55 LPA', tags: ['Fintech', 'UPI', 'Payments'], description: 'Own UPI payment flows for 500M+ registered users. Build features for financial inclusion and drive transaction growth.', url: 'https://www.phonepe.com/careers/', applyUrl: 'https://www.phonepe.com/careers/', postedAt: today, source: 'PhonePe Careers', logo: '' },
        { id: 'cur-6', title: 'Product Lead - Growth', company: 'Swiggy', location: 'Bangalore, India', locationType: 'bangalore', level: 'lead', salary: '₹45-70 LPA', tags: ['Growth', 'Consumer', 'Food Tech'], description: 'Lead growth product team for Swiggy core food delivery. Drive user acquisition, activation, and retention through experimentation.', url: 'https://careers.swiggy.com/#/careers?department=Product%20Management', applyUrl: 'https://careers.swiggy.com/#/careers?department=Product%20Management', postedAt: yesterday, source: 'Swiggy Careers', logo: '' },
        { id: 'cur-7', title: 'Senior PM - Cloud/AI', company: 'Microsoft India', location: 'Hyderabad, India', locationType: 'hyderabad', level: 'senior', salary: '₹45-80 LPA', tags: ['Cloud', 'AI', 'Enterprise'], description: 'Build AI-powered enterprise products on Azure. Define product strategy for Copilot features across Microsoft 365.', url: 'https://careers.microsoft.com/v2/global/en/search?q=product%20manager&l=India', applyUrl: 'https://careers.microsoft.com/v2/global/en/search?q=product%20manager&l=India', postedAt: yesterday, source: 'Microsoft Careers', logo: '' },
        { id: 'cur-8', title: 'Product Manager - Credit', company: 'CRED', location: 'Bangalore, India', locationType: 'bangalore', level: 'mid', salary: '₹30-55 LPA', tags: ['Fintech', 'Credit', 'Premium'], description: 'Build credit and rewards products for CRED members. Design engaging experiences for premium user segments.', url: 'https://careers.cred.club/', applyUrl: 'https://careers.cred.club/', postedAt: yesterday, source: 'CRED Careers', logo: '' },
        { id: 'cur-9', title: 'PM - Remote (APAC)', company: 'Atlassian', location: 'Remote, India', locationType: 'remote', level: 'senior', salary: '$80-130K/yr', tags: ['SaaS', 'Dev Tools', 'Remote'], description: 'Build collaborative developer tools used by millions. Remote-first culture, work from anywhere in APAC timezone.', url: 'https://www.atlassian.com/company/careers/all-jobs?team=Product%20Management&location=India', applyUrl: 'https://www.atlassian.com/company/careers/all-jobs?team=Product%20Management&location=India', postedAt: yesterday, source: 'Atlassian Careers', logo: '' },
        { id: 'cur-10', title: 'Product Manager - Retail', company: 'Amazon India', location: 'Bangalore, India', locationType: 'bangalore', level: 'mid', salary: '₹30-55 LPA', tags: ['E-commerce', 'Retail', 'Scale'], description: 'Own product for Amazon India marketplace. Drive seller onboarding, catalog quality, and buyer experience improvements.', url: 'https://www.amazon.jobs/en/search?base_query=product+manager&loc_query=India', applyUrl: 'https://www.amazon.jobs/en/search?base_query=product+manager&loc_query=India', postedAt: yesterday, source: 'Amazon Jobs', logo: '' },
        { id: 'cur-11', title: 'Group PM - Lending', company: 'Paytm', location: 'Noida, India', locationType: 'delhi', level: 'lead', salary: '₹40-70 LPA', tags: ['Fintech', 'Lending', 'B2C'], description: 'Lead lending product vertical. Build credit products, BNPL, and personal loans serving millions of Indian consumers.', url: 'https://paytm.com/careers/', applyUrl: 'https://paytm.com/careers/', postedAt: yesterday, source: 'Paytm Careers', logo: '' },
        { id: 'cur-12', title: 'Senior PM - Fantasy Sports', company: 'Dream11', location: 'Mumbai, India', locationType: 'mumbai', level: 'senior', salary: '₹40-65 LPA', tags: ['Gaming', 'Sports', 'Consumer'], description: 'Build fantasy sports features for 200M+ users. Drive engagement, monetization, and new sport vertical launches.', url: 'https://www.dreamsports.group/careers/', applyUrl: 'https://www.dreamsports.group/careers/', postedAt: yesterday, source: 'Dream11 Careers', logo: '' },
        { id: 'cur-13', title: 'Product Manager - Remote', company: 'Stripe', location: 'Remote (India eligible)', locationType: 'remote', level: 'senior', salary: '$120-180K/yr', tags: ['Payments', 'API', 'Global'], description: 'Build payment infrastructure powering millions of businesses globally. Remote role open to India-based PMs.', url: 'https://stripe.com/jobs/search?q=product+manager', applyUrl: 'https://stripe.com/jobs/search?q=product+manager', postedAt: yesterday, source: 'Stripe Careers', logo: '' },
        { id: 'cur-14', title: 'Product Manager - Trading', company: 'Zerodha', location: 'Bangalore, India', locationType: 'bangalore', level: 'mid', salary: '₹22-45 LPA', tags: ['Fintech', 'Trading', 'Wealth'], description: 'Build trading and investment products for India largest brokerage. Focus on simplifying complex financial workflows.', url: 'https://zerodha.com/careers/', applyUrl: 'https://zerodha.com/careers/', postedAt: yesterday, source: 'Zerodha Careers', logo: '' },
        { id: 'cur-15', title: 'PM - Social Commerce', company: 'Meesho', location: 'Bangalore, India', locationType: 'bangalore', level: 'mid', salary: '₹25-45 LPA', tags: ['E-commerce', 'Social', 'SMB'], description: 'Build products empowering small businesses to sell online. Drive GMV growth through social commerce innovation.', url: 'https://meesho.io/careers', applyUrl: 'https://meesho.io/careers', postedAt: yesterday, source: 'Meesho Careers', logo: '' },
        { id: 'cur-16', title: 'Director of Product', company: 'Salesforce India', location: 'Hyderabad, India', locationType: 'hyderabad', level: 'director', salary: '₹70-1.2 Cr', tags: ['Enterprise', 'AI', 'CRM'], description: 'Lead product strategy for Einstein AI features. Manage a team of PMs building next-gen CRM capabilities.', url: 'https://careers.salesforce.com/en/jobs/?search=product+manager&location=India', applyUrl: 'https://careers.salesforce.com/en/jobs/?search=product+manager&location=India', postedAt: yesterday, source: 'Salesforce Careers', logo: '' },
        { id: 'cur-17', title: 'PM - Mobility', company: 'Uber India', location: 'Bangalore, India', locationType: 'bangalore', level: 'mid', salary: '₹30-55 LPA', tags: ['Mobility', 'Marketplace', 'Consumer'], description: 'Improve rider and driver experience for Uber India. Work on pricing, matching, and marketplace efficiency.', url: 'https://www.uber.com/us/en/careers/list/?query=product%20manager&location=IND', applyUrl: 'https://www.uber.com/us/en/careers/list/?query=product%20manager&location=IND', postedAt: yesterday, source: 'Uber Careers', logo: '' },
        { id: 'cur-18', title: 'Senior PM - Remote', company: 'Canva', location: 'Remote (APAC)', locationType: 'remote', level: 'senior', salary: '$100-160K/yr', tags: ['Design', 'SaaS', 'Creative'], description: 'Build design and productivity features for 150M+ monthly users. Remote-first, APAC-friendly timezone.', url: 'https://www.canva.com/careers/', applyUrl: 'https://www.canva.com/careers/', postedAt: yesterday, source: 'Canva Careers', logo: '' },
        { id: 'cur-19', title: 'PM - Insurance Tech', company: 'Acko', location: 'Bangalore, India', locationType: 'bangalore', level: 'mid', salary: '₹22-40 LPA', tags: ['InsurTech', 'Consumer', 'B2C'], description: 'Build digital-first insurance products. Simplify claims, underwriting, and policy management for Indian consumers.', url: 'https://www.acko.com/careers/', applyUrl: 'https://www.acko.com/careers/', postedAt: yesterday, source: 'Acko Careers', logo: '' },
        { id: 'cur-20', title: 'Associate PM', company: 'Freshworks', location: 'Chennai, India', locationType: 'india', level: 'entry', salary: '₹12-22 LPA', tags: ['SaaS', 'CRM', 'B2B'], description: 'Start your PM career at a listed SaaS company. Work on CX and ITSM products used by 60,000+ businesses worldwide.', url: 'https://careers.freshworks.com/jobs?department=Product%20Management', applyUrl: 'https://careers.freshworks.com/jobs?department=Product%20Management', postedAt: yesterday, source: 'Freshworks Careers', logo: '' },
    ];
}
