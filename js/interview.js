/**
 * TechPulse - Interview Prep Module
 * Mock questions, STAR storytelling, frameworks for Senior PM interviews
 */

let interviewCategory = 'product-sense';
let sampleQAFilter = 'all';

const SAMPLE_QA_CATEGORIES = [
    { id: 'all', label: 'All', icon: '📋' },
    { id: 'product', label: 'Product', icon: '💡' },
    { id: 'tech', label: 'Technical', icon: '⚙️' },
    { id: 'hr', label: 'HR / Culture', icon: '🤝' },
    { id: 'behavioral', label: 'Behavioral', icon: '🌟' },
    { id: 'negotiation', label: 'Negotiation', icon: '💰' },
    { id: 'storytelling', label: 'Storytelling', icon: '📖' },
    { id: 'situational', label: 'Situational', icon: '🎯' },
];

const INTERVIEW_CATEGORIES = [
    { id: 'product-sense', label: 'Product Sense', icon: '💡' },
    { id: 'execution', label: 'Execution & Metrics', icon: '📊' },
    { id: 'strategy', label: 'Strategy', icon: '♟️' },
    { id: 'leadership', label: 'Leadership & Drive', icon: '👑' },
    { id: 'technical', label: 'Technical', icon: '⚙️' },
    { id: 'behavioral', label: 'Behavioral (STAR)', icon: '🌟' },
    { id: 'storytelling', label: 'Storytelling Guide', icon: '📖' },
];

const INTERVIEW_QUESTIONS = {
    'product-sense': [
        {
            q: "How would you improve Instagram for creators?",
            framework: "User → Pain Points → Solutions → Prioritize → Metrics",
            answer: `**Framework: User-Centric Product Thinking**

1. **Clarify & Scope**: Focus on mid-tier creators (10K-100K followers) — growth engine but underserved.

2. **User Pain Points**:
   • Discoverability — hard to grow beyond current audience
   • Monetization — limited income unless 100K+ followers
   • Content fatigue — pressure to post daily
   • Analytics gap — don't know what's working

3. **Solutions (Impact × Feasibility)**:
   • Creator Collaboration Hub — match creators for collab content
   • Revenue sharing on Reels — lower threshold to 10K followers
   • Content Calendar AI — suggest best posting times + gaps

4. **Metrics**: Creator retention, posts/week, follower growth velocity, revenue per creator

5. **Tradeoffs**: Revenue sharing costs vs. creator retention value.`,
            tips: "Always start with WHO the user is. Prioritize ruthlessly. End with measurable success metrics."
        },
        {
            q: "Design a product for senior citizens to manage medications.",
            framework: "Users → Context → Jobs-to-be-Done → Solution → MVP",
            answer: `**Framework: Jobs-to-be-Done**

1. **User Persona**: 65+ adults, 3-7 medications, varying tech literacy. Secondary user: caregiver.

2. **Key Jobs**:
   • Remember which pill to take when
   • Alert someone if dose is missed
   • Refill before running out
   • Share status with doctor/family

3. **Design Principles**: Large text, voice-first, minimal steps, forgiving of errors.

4. **MVP**: Smart pill organizer with LED lights + Simple app (photo-based setup) + Caregiver dashboard + Voice interface

5. **GTM**: Partner with pharmacies for distribution.

6. **Metrics**: Medication adherence rate, missed dose reduction, caregiver anxiety score.`,
            tips: "Show empathy. Consider accessibility. Think full ecosystem (patient + caregiver + doctor)."
        },
        {
            q: "You're the PM for Google Maps. What would you build next?",
            framework: "Mission → Gaps → Opportunities → Prioritize",
            answer: `**Framework: Mission-Driven Innovation**

1. **Mission**: Organize the world's geographic information and make it useful.

2. **Current gaps**: Indoor navigation, real-time crowd predictions, accessibility routing, sustainability.

3. **Recommendation: "Live Places"** — real-time activity layer
   • Live occupancy of any business
   • Predict wait times with ML
   • Crowd-sourced live reports

4. **Why**: Leverages existing data, huge pain point, builds moat vs Apple Maps, drives business listings.

5. **Metrics**: Sessions with Live Places, prediction accuracy, user ratings.`,
            tips: "Understand the product's mission. Build on existing strengths. Consider business model."
        },
        {
            q: "How would you improve WhatsApp for small businesses in India?",
            framework: "User → Context → Pain → Solutions → Metrics",
            answer: `**India-specific context**: 15M+ small businesses use WhatsApp informally for orders.

1. **User**: Kirana stores, local services, home businesses (1-5 employees)
2. **Pains**: No catalog, manual order tracking, payment collection friction, no analytics
3. **Solutions**: Visual catalog builder (photo → listing), order management inbox, UPI payment links in-chat, simple sales dashboard
4. **Prioritize**: Catalog first (highest pain), then payments (revenue unlock)
5. **Metrics**: Businesses with active catalog, orders processed via WhatsApp, payment completion rate`,
            tips: "Show India market understanding. Think about low-tech users. Consider WhatsApp's existing ecosystem."
        },
        {
            q: "Design a feature for LinkedIn to help career switchers.",
            framework: "User → Journey Map → Feature → Success Metrics",
            answer: `1. **User**: Mid-career professionals (5-10 yrs) wanting to switch industries/functions
2. **Journey Pain Points**: Don't know transferable skills, can't find relevant roles, network is in old industry
3. **Feature: "Career Bridge"**: Skill mapping (current → target role gaps), curated learning paths, connector introductions (people who made similar switches), success stories feed
4. **MVP**: Skill gap analyzer + suggested connections who switched similarly
5. **Metrics**: Profile updates with new target role, connection requests to switchers, course enrollments, successful transitions (new role in 6 months)`,
            tips: "LinkedIn has rich data on career paths. Use that as the moat."
        },
    ],
    'execution': [
        {
            q: "Your key metric dropped 15% this week. Walk me through your investigation.",
            framework: "Detect → Segment → Hypothesize → Validate → Act",
            answer: `**Framework: Metric Diagnosis Tree**

1. **Confirm**: Is data accurate? Check logging, pipeline delays.
2. **Segment**: By platform, geography, user cohort, time
3. **Example**: DAU dropped 15% → iOS down 25%, Android flat → Only iOS 17.2 users → Started Tuesday (iOS update day)
4. **Root cause**: iOS update broke push notification permissions
5. **Action**: Hotfix for notification re-prompt, add email/SMS backup, build platform-specific monitoring
6. **Communication**: Inform leadership with timeline + projected recovery`,
            tips: "Show structured thinking. Don't jump to conclusions. Verify data first."
        },
        {
            q: "Define success metrics for a food delivery app's 'Group Order' feature.",
            framework: "North Star → Input Metrics → Guardrails → Leading Indicators",
            answer: `1. **North Star**: Group orders as % of total orders
2. **Primary**: Adoption %, AOV lift, completion rate, avg participants per group
3. **Leading**: Share link CTR, time to order placement, reorder rate
4. **Guardrails**: Delivery time (shouldn't increase), restaurant cancellations, support tickets, individual order cannibalization
5. **Success criteria**: >5% adoption in 4 weeks, AOV +30%, completion >60%`,
            tips: "Always include guardrails. Think about unintended consequences."
        },
        {
            q: "An A/B test shows +5% conversion but -2% retention. Ship or not?",
            framework: "Quantify → Timeframe → Reversibility → Decision",
            answer: `1. **Quantify both**: +5% conversion = how much revenue short-term? -2% retention = LTV impact over 12 months?
2. **Usually retention wins**: 2% retention loss compounds over time and often exceeds conversion gains
3. **Investigate WHY**: Is the conversion gain from dark patterns? Misleading copy? That explains retention drop.
4. **Decision framework**: If retention drop is within noise (p>0.05), ship. If significant, don't ship — find a version that lifts conversion WITHOUT hurting retention.
5. **Recommendation**: Don't ship as-is. Run a follow-up test addressing the retention concern.`,
            tips: "Long-term metrics almost always trump short-term. Show you think in terms of LTV."
        },
        {
            q: "How would you set OKRs for a new search feature?",
            framework: "Objective → Key Results → Initiatives",
            answer: `**Objective**: Make search the fastest path to finding what users need.

**Key Results (measurable)**:
• KR1: Increase search-to-action conversion from 25% to 40%
• KR2: Reduce average search-to-result time from 8s to 3s
• KR3: Decrease "no results found" rate from 15% to 5%
• KR4: Achieve search NPS of 45+ (currently 32)

**Initiatives** (how we'll get there):
• Implement auto-complete with ML ranking
• Add filters and faceted search
• Build "did you mean" suggestions
• Personalized result ranking based on user history`,
            tips: "OKRs should be outcomes not outputs. 'Ship feature X' is bad. 'Improve metric Y by Z%' is good."
        },
    ],
    'strategy': [
        {
            q: "Should Spotify enter the podcasting hardware market?",
            framework: "Market → Strengths → Risks → Recommendation",
            answer: `1. **Market**: Hardware commoditized. No dedicated podcast device exists because phones/speakers work.
2. **Strengths**: Content library, recommendation engine, brand.
3. **Case FOR**: Own full stack, lock-in.
4. **Case AGAINST** (stronger): Low-margin, no distribution expertise, users don't need this.
5. **Recommendation: NO.** Instead: Deepen software integrations (cars, speakers), build creator tools, monetize via dynamic ads.
6. **Strategic play**: Content + distribution moat, not hardware.`,
            tips: "Don't be afraid to say no. Show you evaluate opportunity cost."
        },
        {
            q: "How would you enter the Indian payments market as a US fintech?",
            framework: "Market Analysis → Entry Strategy → Risks",
            answer: `1. **Market**: UPI dominates (12B+ txn/month), PhonePe/GPay have 85%+ share. Extremely competitive.
2. **Don't compete on UPI directly** — that's a race to zero.
3. **Entry strategy options**: (a) Acquire a licensed player, (b) Partner with existing UPI app for cross-border, (c) Focus on underserved niche (B2B payments, cross-border remittances)
4. **Recommendation**: Cross-border remittance + B2B international payments (less competition, higher margins, regulatory moat with licenses)
5. **Risks**: RBI regulations, data localization requirements, trust-building in new market`,
            tips: "Show you understand local market dynamics. Don't propose competing head-on with entrenched players."
        },
        {
            q: "Your competitor just launched a free version of your paid feature. What do you do?",
            framework: "Assess Impact → Options → Respond",
            answer: `1. **Don't panic**. Assess: How good is their free version? What % of our users does it threaten?
2. **Segment your users**: Price-sensitive users at risk vs. power users who need depth
3. **Options**: (a) Match with free tier (race to bottom), (b) Differentiate and go upmarket, (c) Bundle with other value, (d) Make switching costly via data/integrations
4. **Usually best**: Differentiate. Add features that justify the premium — integrations, support, advanced analytics. Let them have the low end.
5. **Also**: Accelerate your own moat — data network effects, ecosystem lock-in.`,
            tips: "Show strategic calm. The worst response is reactive price-cutting without a plan."
        },
    ],
    'leadership': [
        {
            q: "Tell me about a time you had to influence without authority.",
            framework: "STAR: Situation → Task → Action → Result",
            answer: `**Situation**: Checkout flow had 45% drop-off. Engineering focused on platform migration, no bandwidth.
**Task**: Get resources allocated without direct authority.
**Action**:
• Built revenue impact model (₹2Cr/month lost)
• Showed engineering checkout fixes could be first module in new platform
• Got Head of Growth on board first, used his support
• Pre-scoped into 3 small experiments (2-day sprints)
• Gave credit proactively — positioned as "Engineering's innovation"
**Result**: 2 engineers + 1 designer allocated in a week. 18% conversion improvement. ₹3.2Cr annual impact.
**Learning**: Influence = Data + Aligned Incentives + Making it Easy + Sharing Credit`,
            tips: "Use specific numbers. Show your PROCESS of influence, not just outcome."
        },
        {
            q: "Describe a time you made a difficult prioritization decision.",
            framework: "STAR with tradeoffs emphasis",
            answer: `**Situation**: 3 competing Q3 requests: CEO dashboard, Sales CRM integration (₹50L pipeline), Performance fix (12% churn impact = ₹80L).
**Task**: Choose focus with only 4 engineers.
**Action**:
• Quantified each option's impact
• Used RICE framework publicly for objectivity
• Had difficult conversation with CEO: proposed Metabase dashboard (2 days, no-code)
• Gave CRM a 2-engineer spike for MVP. Full team on performance.
**Result**: Performance: 4s→1.2s load time, churn dropped 9%. CRM MVP closed 2 deals. CEO got dashboard in 3 days.
**Learning**: Prioritization isn't saying no — it's creative multi-level addressing.`,
            tips: "Show you can push back on powerful stakeholders with data."
        },
        {
            q: "How do you handle disagreements with engineering on scope?",
            framework: "STAR + collaboration emphasis",
            answer: `**Approach**: Never make it adversarial. I use "shared problem-solving."
1. **Listen first**: Understand eng concerns (tech debt? timeline? complexity?)
2. **Separate "what" from "how"**: PM owns the problem, eng owns the solution approach
3. **Find creative middle**: Can we ship 80% of value with 40% of effort? Phased approach?
4. **Example**: Wanted real-time feature, eng said 3 months. Together found: near-real-time (30s delay) = 2 weeks, solved 90% of user need.
5. **If still stuck**: Escalate with data, never with authority. "Here's the user impact of delay vs. the eng cost."`,
            tips: "Show you respect engineering expertise. Best PMs are collaborative, not dictatorial."
        },
    ],
    'technical': [
        {
            q: "How would you design a notification system architecture?",
            framework: "Requirements → Components → Tradeoffs → Scale",
            answer: `**PM-level system design** (you don't need to code):
1. **Requirements**: Push + Email + SMS + In-app. 10M/day. Push within 5s.
2. **Architecture**: Event Producer → Message Queue (Kafka) → Notification Service → Channel Adapters (FCM, SES, Twilio) + Preference Store (Redis) + Analytics
3. **Tradeoffs**: At-least-once delivery + dedup. Batch for email digest, real-time for push. Priority queues.
4. **PM considerations**: Notification fatigue (frequency capping), personalization (best time ML), A/B test copy, GDPR compliance`,
            tips: "Show you understand components and tradeoffs without writing code."
        },
        {
            q: "Explain how you'd use data to make a product decision.",
            framework: "Question → Data Sources → Analysis → Decision",
            answer: `**Example**: Should we add social features to our B2B tool?
1. **Hypothesis**: Social features will increase DAU by 15%
2. **Data I'd gather**: Usage patterns (when do users collaborate?), support tickets about sharing, competitor analysis, user interviews (N=10)
3. **Analysis**: Funnel analysis showing where users drop off, cohort analysis of collaborative vs solo users
4. **SQL example**: "SELECT user_type, avg(sessions_per_week) FROM users GROUP BY collaboration_flag"
5. **Decision**: If collaborative users retain 2x better, social features are validated. If not, don't build.`,
            tips: "Show you can translate business questions into data queries. Mention specific tools."
        },
    ],
    'behavioral': [
        {
            q: "Tell me about your biggest product failure.",
            framework: "STAR + Reflection + Growth",
            answer: `**Situation**: Launched social features for our B2B analytics tool. Convinced it would drive engagement.
**Task**: Increase DAU by 20%.
**Action**: Built full social layer (6 weeks). Launched with big announcement.
**Result (failure)**: 3% adoption. DAU dropped 2% (clutter). Rolled back after 6 weeks.
**What I learned**:
1. Wrong assumption: B2B users don't want B2C features
2. Skipped validation: 5 interviews would have saved 6 weeks
3. Sunk cost trap: Kept pushing despite weak beta data
**Now I**: Never build >2 weeks without validation. Kill experiments early. Separate "features I like" from "features users need."`,
            tips: "Own the failure completely. Show specific behavior changes."
        },
        {
            q: "Tell me about a time you dealt with ambiguity.",
            framework: "STAR with emphasis on structuring chaos",
            answer: `**Situation**: Joined a startup as first PM. No roadmap, no metrics, no user research. Engineering building whatever CEO suggested last.
**Task**: Create order from chaos in 30 days.
**Action**:
• Week 1: Interviewed 15 customers to find top 3 pain points
• Week 2: Built simple metric dashboard (Mixpanel) to baseline current state
• Week 3: Created prioritized roadmap with RICE scores, presented to CEO with data
• Week 4: Shipped first quick win (onboarding fix → 40% activation improvement)
**Result**: Within 30 days had clear roadmap, team alignment, and first measurable win. CEO said "first time we have clarity on what to build."
**Learning**: In ambiguity, start with customers and data. Quick wins build credibility to drive bigger changes.`,
            tips: "Show you can create structure. Don't wait for someone to tell you what to do."
        },
    ],
    'storytelling': [
        {
            q: "How to structure compelling PM stories (Storytelling Masterclass)",
            framework: "The 5-part PM Story Framework",
            answer: `**🎭 The PM Storytelling Framework**

**1. HOOK (5 seconds)** — Grab attention
• "I turned a failing feature into our #1 revenue driver in 3 months"
• Bad: "So at my previous company, I was working on this project..."

**2. CONTEXT (15 seconds)** — Set scene minimally
• Company stage, team size, your role, the ONE key constraint

**3. YOUR ACTIONS (60 seconds)** — The meat
• Use "I" not "we"
• Be specific: "I analyzed 10,000 tickets" not "I looked at data"
• Show THINKING process, not just events
• Include one moment of difficulty

**4. RESULTS (15 seconds)** — Quantify always
• Revenue, users, time saved, relative improvement

**5. INSIGHT (10 seconds)** — Takeaway
• What principle did you learn?
• How does it shape your PM approach today?

**Power Formulas**:
• Impact: "I identified [problem] → validated with [data] → shipped [solution] → achieved [metric]"
• Failure: "I [made mistake] → [consequence] → [learned] → [changed behavior]"
• Influence: "Stakeholder wanted [X] → I showed [data] → aligned on [Y] → [result]"`,
            tips: "Practice each story in under 2 minutes. Record yourself. 90 seconds is ideal."
        },
    ],
};

function renderInterviewPrep() {
    const container = document.getElementById('interview-content');
    const questions = INTERVIEW_QUESTIONS[interviewCategory] || [];

    container.innerHTML = `
        <div class="mb-6">
            <h2 class="text-2xl font-bold mb-2">🎤 PM Interview Prep</h2>
            <p class="text-sm text-[#94a3b8]">Mock questions with model answers, frameworks, and storytelling guidance to crack Senior PM interviews.</p>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap gap-2 mb-6">
            ${INTERVIEW_CATEGORIES.map(c => `
                <button onclick="window.setInterviewCategory('${c.id}')" class="filter-chip ${interviewCategory === c.id ? 'active' : ''}">${c.icon} ${c.label}</button>
            `).join('')}
        </div>

        <!-- Questions -->
        <div class="space-y-4">
            ${questions.map((item, i) => `
                <div class="card p-5">
                    <div class="flex items-start justify-between gap-3 mb-3">
                        <h3 class="font-semibold text-sm text-indigo-300">${item.q}</h3>
                        <button onclick="window.toggleAnswer(${i})" class="shrink-0 px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 rounded-lg text-xs text-indigo-300 hover:bg-indigo-600/30 transition-all" id="toggle-btn-${i}">Show Answer</button>
                    </div>
                    <div class="mb-2">
                        <span class="badge badge-info">${item.framework}</span>
                    </div>
                    <div id="answer-${i}" class="hidden mt-4 pt-4 border-t border-white/10">
                        <div class="text-[#94a3b8] text-xs leading-relaxed whitespace-pre-line">${item.answer.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')}</div>
                        <div class="mt-4 p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg">
                            <p class="text-xs text-amber-300"><strong>💡 Tip:</strong> ${item.tips}</p>
                        </div>
                        <button onclick="window.copyAnswer(${i})" class="mt-3 px-3 py-1.5 bg-[#0f172a] border border-white/10 rounded-lg text-xs text-[#94a3b8] hover:text-white transition-all">📋 Copy Answer</button>
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- Quick Reference Frameworks -->
        <div class="mt-8 card p-5">
            <h3 class="font-semibold mb-3">📐 Quick Reference: PM Interview Frameworks</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div class="bg-[#0f172a]/50 rounded-lg p-3">
                    <h4 class="text-xs font-semibold text-indigo-400 mb-1">Product Sense</h4>
                    <p class="text-[10px] text-[#94a3b8]">User → Pain → Solutions → Prioritize → Metrics</p>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-3">
                    <h4 class="text-xs font-semibold text-green-400 mb-1">Execution</h4>
                    <p class="text-[10px] text-[#94a3b8]">Goal → Metrics → Decompose → Diagnose → Action</p>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-3">
                    <h4 class="text-xs font-semibold text-purple-400 mb-1">Strategy</h4>
                    <p class="text-[10px] text-[#94a3b8]">Market → Strengths → Options → Recommend → Risks</p>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-3">
                    <h4 class="text-xs font-semibold text-amber-400 mb-1">STAR (Behavioral)</h4>
                    <p class="text-[10px] text-[#94a3b8]">Situation → Task → Action → Result → Learning</p>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-3">
                    <h4 class="text-xs font-semibold text-cyan-400 mb-1">Metrics</h4>
                    <p class="text-[10px] text-[#94a3b8]">North Star → Input → Guardrails → Leading Indicators</p>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-3">
                    <h4 class="text-xs font-semibold text-red-400 mb-1">Prioritization</h4>
                    <p class="text-[10px] text-[#94a3b8]">RICE: Reach × Impact × Confidence / Effort</p>
                </div>
            </div>
        </div>

        <!-- Sample Q&A Starter Bank -->
        <div class="mt-8 card p-5">
            <h3 class="font-semibold mb-2">💬 Sample Q&A Starter Bank</h3>
            <p class="text-xs text-[#64748b] mb-4">Quick-read conversation starters across all PM interview rounds. Read these to have a solid base before any interview.</p>
            <div class="flex flex-wrap gap-2 mb-4" id="sample-qa-filters"></div>
            <div id="sample-qa-grid" class="space-y-3"></div>
        </div>
    `;

    // Render sample Q&A filters separately (avoids template escaping issues)
    document.getElementById('sample-qa-filters').innerHTML = SAMPLE_QA_CATEGORIES.map(c =>
        '<button onclick="window.filterSampleQA(\'' + c.id + '\')" class="filter-chip ' + (sampleQAFilter === c.id ? 'active' : '') + '">' + c.icon + ' ' + c.label + '</button>'
    ).join('');
    document.getElementById('sample-qa-grid').innerHTML = renderSampleQAItems();
}

window.setInterviewCategory = function(cat) {
    interviewCategory = cat;
    renderInterviewPrep();
};

window.toggleAnswer = function(idx) {
    const el = document.getElementById(`answer-${idx}`);
    const btn = document.getElementById(`toggle-btn-${idx}`);
    el.classList.toggle('hidden');
    btn.textContent = el.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
};

window.copyAnswer = function(idx) {
    const questions = INTERVIEW_QUESTIONS[interviewCategory] || [];
    if (questions[idx]) {
        navigator.clipboard.writeText(questions[idx].q + '\n\n' + questions[idx].answer);
    }
};

const SAMPLE_QA_BANK = [
    // Product
    { cat: 'product', q: "What's your product philosophy?", a: "I believe great products solve real pain with the simplest possible solution. I follow: Validate before building, measure everything, and optimize for user outcomes not feature count. Example: At [Company], I killed 3 planned features after user research showed the core flow needed fixing first — resulted in 25% retention lift." },
    { cat: 'product', q: "How do you decide what NOT to build?", a: "I use three filters: (1) Does it serve our North Star metric? (2) Do we have evidence of user demand (data or research)? (3) Is the opportunity cost justified vs alternatives? If any answer is no, it doesn't make the roadmap. I maintain a 'parking lot' so stakeholders feel heard." },
    { cat: 'product', q: "How do you handle feature requests from the CEO?", a: "I treat it as signal, not an order. I ask: 'What problem are you seeing?' Often the underlying insight is valid but the proposed solution isn't optimal. I validate with data, propose alternatives if needed, and present back with evidence. If they still insist, I find the smallest experiment to test the hypothesis." },
    { cat: 'product', q: "How do you know when a product has achieved product-market fit?", a: "Sean Ellis test: 40%+ users say they'd be 'very disappointed' without it. Plus: organic growth without paid acquisition, retention curves flatten (not decay to zero), users complete core action repeatedly. Quantitatively: strong D30 retention, NPS >40, low CAC/LTV ratio." },
    { cat: 'product', q: "Walk me through how you'd launch a 0-to-1 product.", a: "Discovery → Define → Build → Launch → Learn. (1) Customer interviews (N=20+) to validate problem. (2) Define MVP scope — what's the ONE thing that must work. (3) Build with 2-week sprints, weekly user feedback. (4) Soft launch to beta cohort, measure activation. (5) Iterate based on data, then scale distribution." },
    { cat: 'product', q: "How do you balance user needs vs business goals?", a: "They're rarely in conflict long-term. Happy users = retention = revenue. Short-term, I use guardrail metrics — push business goals but watch user satisfaction. Example: Added upsell prompts but set guardrail that support tickets can't increase >5%. Found the sweet spot through A/B testing." },

    // Technical
    { cat: 'tech', q: "How technical should a PM be?", a: "Technical enough to: (1) Have credible conversations with engineers without slowing them down. (2) Understand tradeoffs (build time, scalability, tech debt). (3) Know when something is genuinely hard vs being overcomplicated. I write basic SQL, understand APIs, and can read system design docs — but I don't tell engineers HOW to build." },
    { cat: 'tech', q: "How do you work with engineers who push back on requirements?", a: "I listen first — they often see complexity I don't. I separate the 'what' (my domain) from the 'how' (their domain). I ask: 'What would make this feasible in 2 weeks?' Often there's a 80/20 solution. If true disagreement: data wins. I show user impact, they show effort — we find the intersection." },
    { cat: 'tech', q: "How do you handle tech debt vs feature work?", a: "I allocate 20% of each sprint to tech debt by default (negotiated with eng lead). For larger tech debt: I quantify the cost — 'This slows every feature by 2 days' or 'This causes X outages/month costing Y revenue.' Makes it a business case, not a tech preference." },
    { cat: 'tech', q: "Explain APIs to a non-technical stakeholder.", a: "An API is like a restaurant menu — it lists what you can order (request) and what you'll get back (response). You don't need to know how the kitchen works. Your app sends a request, the other system's API serves the answer. Example: When you check weather in your phone, the app uses a weather API to fetch data." },
    { cat: 'tech', q: "How do you evaluate build vs buy decisions?", a: "Framework: (1) Is this core to our differentiation? Build. (2) Is this commodity? Buy. (3) Time factor — can we afford 6 months to build or do we need it now? (4) Maintenance cost — building means owning forever. (5) Data sensitivity — some things can't leave our systems. Usually: Buy for infrastructure, build for user-facing differentiators." },

    // HR / Culture
    { cat: 'hr', q: "Why do you want to work here?", a: "Structure: (1) What excites you about the PRODUCT (show you've used it). (2) What stage/challenge appeals to you (scaling? 0-1? turnaround?). (3) How your skills match their current need. Be specific — reference a recent launch, a blog post, or a product decision they made that impressed you." },
    { cat: 'hr', q: "Where do you see yourself in 3-5 years?", a: "Honest but aligned: 'I want to grow into a leader who shapes product strategy at the company level. In 3 years I want to be leading a product area with multiple PMs, driving measurable business impact. I'm drawn to [company] because [specific growth opportunity].' Avoid: 'I want your job' or 'I want to start my own company.'" },
    { cat: 'hr', q: "What's your management style?", a: "Context-dependent. For senior ICs: Set direction, remove blockers, give autonomy. For junior team members: More structured coaching, paired working, frequent check-ins. Always: clear expectations, direct feedback, celebrating wins. I ask each report: 'How do you like to receive feedback?' and adapt." },
    { cat: 'hr', q: "How do you handle work-life balance in a demanding PM role?", a: "I'm intentional about energy management, not just time management. I protect deep-work blocks for strategy, batch meetings, and set clear boundaries (e.g., no Slack after 8pm unless P0). I've learned that a rested PM makes better decisions than a burnt-out one working 14-hour days." },
    { cat: 'hr', q: "What's your biggest weakness?", a: "Be genuine but show self-awareness + action. Example: 'I tend to over-research before deciding. I've caught myself doing 2 more user interviews when I already had enough signal. I've worked on this by setting time-boxes for research phases and using the 70% confidence rule — decide when you are 70% sure, don't wait for 100%.'" },

    // Behavioral
    { cat: 'behavioral', q: "Tell me about a conflict with a stakeholder.", a: "STAR: VP of Sales wanted feature X for a big deal. Data showed X would hurt existing users. I: (1) Validated Sales concern (real revenue at stake). (2) Proposed alternative that served 80% of the need without user harm. (3) Presented to both VPs with data. (4) Result: Alternative shipped in 2 weeks, deal closed, no user churn. Key: Empathize first, then redirect with data." },
    { cat: 'behavioral', q: "When did you take a risk that failed?", a: "Launched a gamification feature based on competitor success. Invested 6 weeks. Users found it patronizing in our B2B context. I: owned the failure publicly in retro, shared 3 learnings (context matters > copying, test with 5 users before building, set kill criteria upfront). Team appreciated the transparency. Now I always define 'what does failure look like' before starting." },
    { cat: 'behavioral', q: "How do you handle receiving critical feedback?", a: "I actively seek it. In my last role, I asked 3 cross-functional partners quarterly: 'What's one thing I could do better?' Hardest feedback: 'You move too fast and leave people behind.' I changed by adding a 'pre-alignment' step before big decisions — 1:1s with key people before the group meeting. Feedback in next cycle: 'Much better, people feel included.'" },
    { cat: 'behavioral', q: "Describe a time you had to deliver bad news to leadership.", a: "Had to tell CEO our flagship feature launch would miss by 4 weeks. I: (1) Didn't bury it — raised it the moment I knew. (2) Came with root cause + mitigation plan. (3) Offered options: ship partial in 2 weeks or full in 4. (4) CEO chose partial — actually better outcome. Key: Bad news early + options > bad news late + excuses." },

    // Negotiation
    { cat: 'negotiation', q: "What are your salary expectations?", a: "Deflect early, anchor later. Early stage: 'I'd like to understand the full scope and opportunity first. I'm sure we can find something that works for both sides.' After offer: Research market rate (Levels.fyi, Glassdoor), then: 'Based on my experience and market benchmarks for this level, I was expecting [X]. Can we bridge this gap?' Always negotiate — the first offer is never the best." },
    { cat: 'negotiation', q: "You have a competing offer. How do you use it?", a: "Be honest, not manipulative. 'I want to be transparent — I have another offer at [X]. I prefer [your company] because [genuine reason]. Is there flexibility to match/close the gap?' Works best when you genuinely prefer the company. Never bluff an offer you don't have. If they can't match: ask about sign-on bonus, equity refresh, earlier review cycle." },
    { cat: 'negotiation', q: "How do you negotiate scope/timeline with eng leadership?", a: "I come prepared with: (1) Clear definition of MVP vs nice-to-have. (2) User impact data for each scope item. (3) Proposed phasing. I ask: 'If we had to ship something valuable in half the time, what would you recommend cutting?' This makes eng a partner in scoping, not an adversary. Usually unlocks creative solutions." },
    { cat: 'negotiation', q: "How do you say no to a senior leader's pet project?", a: "Never say 'no' directly. Instead: (1) Acknowledge the insight behind their request. (2) Show what you'd have to STOP doing to accommodate it (opportunity cost). (3) Propose a lighter-weight version or experiment. (4) Let data decide. Frame it as 'how might we test this hypothesis cheaply' rather than 'we won't build this.'" },

    // Storytelling
    { cat: 'storytelling', q: "Tell me about a product you're proud of.", a: "Structure: (1) HOOK: 'I took a feature from 2% adoption to 34% in one quarter.' (2) CONTEXT: What product, what was broken. (3) YOUR INSIGHT: What did YOU see that others missed? (4) ACTIONS: Specific steps — research, hypothesis, execution. (5) RESULTS: Numbers. (6) LEARNING: What principle you now carry forward. Keep under 2 minutes." },
    { cat: 'storytelling', q: "How do you pitch a new idea to leadership?", a: "The 'So What' framework: (1) Start with the BUSINESS PROBLEM (not the solution). (2) Quantify the opportunity: 'This costs us ₹X Cr / affects Y users monthly.' (3) Your hypothesis + evidence. (4) Proposed solution in 1 sentence. (5) What you need (resources, time). (6) Expected outcome with metrics. Never lead with 'I have an idea' — lead with 'We have a problem worth solving.'" },
    { cat: 'storytelling', q: "Describe your working style in a sentence.", a: "Have 2-3 ready. Examples: 'Data-informed but user-obsessed — I start with numbers but always validate with real conversations.' / 'I bring clarity to ambiguity — my teams always know what we're building, why, and how we'll measure success.' / 'I'm a connector — I bridge engineering constraints with business needs to find solutions neither side saw alone.'" },

    // Situational
    { cat: 'situational', q: "Your app goes viral unexpectedly. What do you do?", a: "(1) Immediate: Is infrastructure holding? Coordinate with eng on scaling. (2) Understand WHY: What triggered virality? Protect that magic. (3) Capture: Are new users activating? What's the onboarding funnel showing? (4) Retain: What's Day 1, Day 7 retention for viral cohort? (5) Sustain: Can we replicate the trigger? Build referral loops. Don't celebrate DAU — celebrate retention." },
    { cat: 'situational', q: "You just joined. The team has no roadmap. First 30 days?", a: "Week 1: Listen. Meet every stakeholder, read all docs, use the product daily. Week 2: Talk to 10 customers. Identify top 3 pain points. Week 3: Audit metrics — what are we measuring? What's trending down? Week 4: Present a lightweight roadmap (next 6 weeks only). Ship one quick win. Earn credibility before proposing big changes." },
    { cat: 'situational', q: "Engineering says the feature will take 3 months. You have 3 weeks. What do you do?", a: "(1) Don't panic or pressure. Ask: 'What's the smallest version that delivers core value?' (2) Separate must-have from nice-to-have with eng. (3) Usually 80% of value is in 20% of the work. (4) Propose: 'Ship V0.5 in 3 weeks, iterate to full version in 3 months.' (5) If truly impossible: Go back to stakeholder with tradeoff: scope, time, or quality — pick two." },
    { cat: 'situational', q: "A key engineer on your team wants to quit. What do you do?", a: "First: Listen. Why? Is it fixable? (1) If it's about the work: Can I give them more interesting/impactful projects? (2) If it's growth: Can I create a path to senior/lead? (3) If it's compensation: Escalate to eng manager with business case. (4) If they're set on leaving: Ensure graceful transition, knowledge transfer. Don't take it personally — but DO reflect on team health signals you might have missed." },
    { cat: 'situational', q: "Two PMs on your team disagree on direction. How do you resolve it?", a: "As a Lead PM: (1) Let both present their case with data (not opinions). (2) Ask: 'What would change your mind?' — tests if they're open. (3) If data doesn't resolve: Frame it as a decision with reversibility. Pick one, set a 2-week checkpoint. (4) Key: Make the decision transparent. Document reasoning. Disagreement is healthy — lingering conflict is not." },
];

function renderSampleQAItems() {
    const filtered = sampleQAFilter === 'all' ? SAMPLE_QA_BANK : SAMPLE_QA_BANK.filter(item => item.cat === sampleQAFilter);
    return filtered.map((item, i) => {
        const catInfo = SAMPLE_QA_CATEGORIES.find(c => c.id === item.cat);
        return `
        <div class="bg-[#0f172a]/50 rounded-lg p-4 border border-white/5 hover:border-indigo-500/20 transition-all">
            <div class="flex items-start justify-between gap-3">
                <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1.5">
                        <span class="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-[#94a3b8]">${catInfo ? catInfo.icon + ' ' + catInfo.label : '📋'}</span>
                    </div>
                    <h4 class="text-sm font-medium text-indigo-300 mb-2">${item.q}</h4>
                    <p class="text-xs text-[#94a3b8] leading-relaxed">${item.a}</p>
                </div>
                <button onclick="window.copySampleQA(${i})" class="shrink-0 px-2 py-1 text-[10px] text-[#64748b] hover:text-indigo-400 transition-colors" title="Copy">📋</button>
            </div>
        </div>`;
    }).join('');
}

window.copySampleQA = function(idx) {
    const filtered = sampleQAFilter === 'all' ? SAMPLE_QA_BANK : SAMPLE_QA_BANK.filter(item => item.cat === sampleQAFilter);
    if (filtered[idx]) {
        navigator.clipboard.writeText('Q: ' + filtered[idx].q + '\n\nA: ' + filtered[idx].a);
    }
};

window.filterSampleQA = function(cat) {
    sampleQAFilter = cat;
    renderInterviewPrep();
};
