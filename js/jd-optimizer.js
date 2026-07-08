/**
 * TechPulse - JD Optimizer Module
 * Paste a Job Description → get ATS keywords, STAR bullets, resume content
 */

let jdAnalysis = null;

function renderJDOptimizer() {
    const container = document.getElementById('jd-content');
    container.innerHTML = `
        <div class="mb-6">
            <h2 class="text-2xl font-bold mb-2">📄 JD Optimizer — ATS Resume Generator</h2>
            <p class="text-sm text-[#94a3b8]">Paste any job description below. Get ATS keywords, STAR-format achievements, skills, and resume-ready content you can copy-paste directly.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Input Panel -->
            <div class="lg:col-span-1">
                <div class="card p-5 sticky top-20">
                    <h3 class="font-semibold text-sm mb-3">Paste Job Description</h3>
                    <textarea id="jd-input" rows="14" placeholder="Paste the full job description here...

Example:
Senior Product Manager - Payments
We're looking for a Senior PM to lead our payments platform. You'll define product strategy, work with engineering to ship features, and drive growth metrics. Requirements: 5+ years PM experience, fintech background, data-driven decision making, SQL proficiency..."
                        class="w-full bg-[#0f172a] border border-white/10 rounded-lg px-3 py-2 text-sm resize-none focus:border-indigo-500/50 focus:outline-none transition-all"></textarea>
                    <button onclick="window.analyzeJD()" id="analyze-btn" class="w-full mt-3 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-all">
                        ✨ Generate Resume Content
                    </button>
                    <p class="text-[10px] text-[#64748b] mt-2">All processing happens locally in your browser. Nothing is sent to any server.</p>
                </div>
            </div>

            <!-- Output Panel -->
            <div class="lg:col-span-2" id="jd-output">
                <div class="card p-6 text-center text-[#64748b]">
                    <p class="text-4xl mb-3">📋</p>
                    <p class="text-sm">Paste a job description and click "Generate" to get:</p>
                    <div class="grid grid-cols-2 gap-3 mt-4 text-xs text-left max-w-md mx-auto">
                        <div class="bg-[#0f172a]/50 rounded-lg p-3">🎯 ATS Keywords</div>
                        <div class="bg-[#0f172a]/50 rounded-lg p-3">🌟 STAR Bullets</div>
                        <div class="bg-[#0f172a]/50 rounded-lg p-3">🛠️ Skills Section</div>
                        <div class="bg-[#0f172a]/50 rounded-lg p-3">📝 Summary Statement</div>
                        <div class="bg-[#0f172a]/50 rounded-lg p-3">📊 Metrics to Include</div>
                        <div class="bg-[#0f172a]/50 rounded-lg p-3">💡 Pro Tips</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

window.analyzeJD = function() {
    const jdText = document.getElementById('jd-input').value.trim();
    if (!jdText || jdText.length < 50) {
        alert('Please paste a complete job description (at least 50 characters).');
        return;
    }

    const btn = document.getElementById('analyze-btn');
    btn.innerHTML = '<span class="animate-pulse">Analyzing...</span>';
    btn.disabled = true;

    // Simulate brief processing delay for UX
    setTimeout(() => {
        jdAnalysis = analyzeJobDescription(jdText);
        renderAnalysis(jdAnalysis);
        btn.innerHTML = '✨ Generate Resume Content';
        btn.disabled = false;
    }, 800);
};

function analyzeJobDescription(text) {
    const lower = text.toLowerCase();
    const words = text.split(/\s+/);

    // Extract keywords
    const atsKeywords = extractATSKeywords(lower);
    const skills = extractSkills(lower);
    const level = detectJDLevel(lower);
    const domain = detectDomain(lower);
    const metrics = suggestMetrics(lower, domain);
    const starBullets = generateSTARBullets(skills, domain, level);
    const summary = generateSummary(skills, domain, level);
    const proTips = generateProTips(lower, level);

    return { atsKeywords, skills, level, domain, metrics, starBullets, summary, proTips, wordCount: words.length };
}

function extractATSKeywords(text) {
    const keywordPatterns = {
        'Product Strategy': /product\s*strateg/i,
        'Roadmap': /roadmap/i,
        'Stakeholder Management': /stakeholder/i,
        'Cross-functional': /cross[\s-]*function/i,
        'Data-driven': /data[\s-]*driven/i,
        'A/B Testing': /a\/b\s*test/i,
        'User Research': /user\s*research/i,
        'Agile/Scrum': /agile|scrum/i,
        'OKRs': /okr/i,
        'KPIs': /kpi/i,
        'Go-to-market': /go[\s-]*to[\s-]*market|gtm/i,
        'Product-Market Fit': /product[\s-]*market\s*fit/i,
        'Customer Discovery': /customer\s*discover/i,
        'Prioritization': /prioriti[sz]/i,
        'SQL': /\bsql\b/i,
        'Python': /\bpython\b/i,
        'Analytics': /analytics/i,
        'Metrics': /metric/i,
        'Revenue': /revenue/i,
        'Growth': /growth/i,
        'Retention': /retention/i,
        'Conversion': /conversion/i,
        'Monetization': /monetiz/i,
        'Platform': /platform/i,
        'API': /\bapi\b/i,
        'Machine Learning': /machine\s*learning|\bml\b|\bai\b/i,
        'B2B': /\bb2b\b/i,
        'B2C': /\bb2c\b/i,
        'SaaS': /\bsaas\b/i,
        'Mobile': /mobile/i,
        'UX': /\bux\b|user\s*experience/i,
        'PRD': /\bprd\b|product\s*requirement/i,
        'Sprint Planning': /sprint/i,
        'Backlog': /backlog/i,
        'Wireframing': /wireframe|prototyp/i,
        'Customer Journey': /customer\s*journey/i,
        'Funnel': /funnel/i,
        'Experimentation': /experiment/i,
        'Hypothesis': /hypothesis/i,
        'Discovery': /discovery/i,
        'Delivery': /delivery/i,
        'Launch': /launch/i,
        'Scale': /scale|scaling/i,
        'Enterprise': /enterprise/i,
        'Integration': /integrat/i,
        'Technical PM': /technical\s*pm|technical\s*product/i,
    };

    const found = [];
    for (const [keyword, pattern] of Object.entries(keywordPatterns)) {
        if (pattern.test(text)) found.push(keyword);
    }
    return found;
}

function extractSkills(text) {
    const hardSkills = [];
    const softSkills = [];

    const hardPatterns = { 'SQL': /\bsql\b/, 'Python': /\bpython\b/, 'Tableau/Looker': /tableau|looker/, 'Jira': /jira/, 'Figma': /figma/, 'Amplitude': /amplitude/, 'Mixpanel': /mixpanel/, 'Google Analytics': /google\s*analytics/, 'APIs & Integrations': /\bapi\b|integrat/, 'A/B Testing Tools': /a\/b|experiment/, 'Data Analysis': /data\s*analy|analytics/, 'Wireframing': /wireframe|prototyp|figma/, 'Agile/Scrum': /agile|scrum|sprint/, 'Machine Learning': /machine\s*learning|\bml\b|\bai\b/ };
    const softPatterns = { 'Stakeholder Management': /stakeholder/, 'Cross-functional Leadership': /cross[\s-]*function/, 'Strategic Thinking': /strateg/, 'Communication': /communicat/, 'Prioritization': /prioriti/, 'Problem Solving': /problem\s*solv/, 'Decision Making': /decision/, 'Influence': /influence|persuad/, 'Mentoring': /mentor|coach/, 'Customer Empathy': /customer|user\s*empathy|user\s*centric/ };

    for (const [skill, pattern] of Object.entries(hardPatterns)) {
        if (pattern.test(text)) hardSkills.push(skill);
    }
    for (const [skill, pattern] of Object.entries(softPatterns)) {
        if (pattern.test(text)) softSkills.push(skill);
    }

    return { hard: hardSkills, soft: softSkills };
}

function detectJDLevel(text) {
    if (/\b(director|vp|head of|chief)\b/.test(text)) return 'Director/VP';
    if (/\b(senior|sr\.?|lead|principal|staff)\b/.test(text)) return 'Senior PM';
    if (/\b(associate|apm|junior|entry)\b/.test(text)) return 'Associate PM';
    return 'Product Manager';
}

function detectDomain(text) {
    if (/fintech|payment|banking|lending|insurance/.test(text)) return 'Fintech';
    if (/e[\s-]*commerce|retail|marketplace/.test(text)) return 'E-commerce';
    if (/health|medical|clinical/.test(text)) return 'HealthTech';
    if (/education|learning|edtech/.test(text)) return 'EdTech';
    if (/\bai\b|machine\s*learning|ml\b/.test(text)) return 'AI/ML';
    if (/\bsaas\b|enterprise|b2b/.test(text)) return 'B2B SaaS';
    if (/mobile|app|consumer/.test(text)) return 'Consumer/Mobile';
    if (/cloud|infrastructure|devops/.test(text)) return 'Cloud/Infra';
    return 'Tech';
}

function suggestMetrics(text, domain) {
    const base = ['Revenue impact (₹/$ value)', 'User growth/retention rate', 'Feature adoption %', 'NPS/CSAT improvement'];
    const domainMetrics = {
        'Fintech': ['Transaction volume growth', 'Payment success rate', 'Fraud reduction %', 'Time to disburse'],
        'E-commerce': ['Conversion rate', 'AOV increase', 'Cart abandonment reduction', 'GMV growth'],
        'HealthTech': ['Patient engagement rate', 'Appointment completion', 'Clinical outcome improvements'],
        'AI/ML': ['Model accuracy improvement', 'Inference latency reduction', 'ML feature adoption rate'],
        'B2B SaaS': ['ARR growth', 'Churn reduction', 'Expansion revenue', 'Time to value'],
        'Consumer/Mobile': ['DAU/MAU ratio', 'Session duration', 'D7 retention', 'Viral coefficient'],
    };
    return [...base, ...(domainMetrics[domain] || [])];
}

function generateSTARBullets(skills, domain, level) {
    const bullets = [];
    const domainActions = {
        'Fintech': ['Designed and launched a payments feature processing ₹X Cr monthly, improving transaction success rate by Y%', 'Led cross-functional team of 8 to build lending product from 0→1, achieving Z disbursals in first quarter', 'Reduced payment fraud by X% through ML-based anomaly detection, saving ₹Y Cr annually'],
        'E-commerce': ['Owned end-to-end checkout optimization, reducing cart abandonment by X% and driving ₹Y Cr incremental revenue', 'Launched personalized recommendation engine, increasing AOV by X% across 10M+ monthly users', 'Led marketplace seller tools redesign, improving seller onboarding time from X days to Y hours'],
        'B2B SaaS': ['Drove product-led growth initiative that increased self-serve signups by X%, contributing $YM ARR', 'Redesigned enterprise onboarding flow, reducing time-to-value from X weeks to Y days', 'Built integration marketplace with Z partners, becoming top-3 feature in enterprise deals'],
        'AI/ML': ['Shipped ML-powered feature that improved user engagement by X%, processing Y million predictions/day', 'Defined and executed AI product strategy, taking model from research to production serving Z users', 'Reduced model inference latency by X% while maintaining accuracy, improving user experience for Y million users'],
        'Consumer/Mobile': ['Led mobile app redesign that improved D7 retention by X% and increased DAU by Y%', 'Launched social features driving viral growth with K-factor of X, adding Y new users/month organically', 'Optimized push notification strategy using ML, improving open rates by X% without increasing unsubscribes'],
    };

    const genericBullets = [
        `Identified and prioritized key user pain points through customer interviews (N=X) and data analysis, leading to Y% improvement in [metric]`,
        `Led cross-functional team of X (eng + design + data) to ship [feature] in Y weeks, Z% ahead of schedule`,
        `Established OKR framework for product team, improving goal attainment from X% to Y% quarter-over-quarter`,
        `Drove A/B testing program that ran X experiments/quarter, generating Y% cumulative improvement in conversion`,
        `Presented product strategy to C-suite stakeholders, securing $XM budget allocation for new initiative`,
        `Mentored X junior PMs, with Y getting promoted within Z months of mentorship`,
    ];

    bullets.push(...(domainActions[domain] || domainActions['B2B SaaS']));
    bullets.push(...genericBullets);

    return bullets;
}

function generateSummary(skills, domain, level) {
    const years = level === 'Director/VP' ? '10+' : level === 'Senior PM' ? '6-8' : level === 'Associate PM' ? '1-2' : '3-5';
    const domainText = domain !== 'Tech' ? ` in ${domain}` : '';
    const topSkills = [...skills.hard.slice(0, 3), ...skills.soft.slice(0, 2)].join(', ');

    return `Results-driven ${level} with ${years} years of experience building and scaling products${domainText}. Proven track record of driving [X]% growth in key metrics through data-driven decision making, user-centric design, and cross-functional leadership. Core strengths: ${topSkills || 'Product Strategy, Data Analysis, Stakeholder Management'}. Passionate about solving complex problems at scale and delivering measurable business impact.`;
}

function generateProTips(text, level) {
    const tips = [
        'Mirror the exact language from the JD in your resume — ATS systems match keywords literally',
        'Quantify EVERY bullet point. "Improved conversion" → "Improved conversion by 23% (+₹1.2Cr revenue)"',
        'Start bullets with action verbs: Led, Drove, Shipped, Defined, Launched, Optimized, Scaled',
        'Include both the WHAT and the SO-WHAT: "Built feature X" → "Built feature X, resulting in Y impact"',
    ];

    if (level === 'Senior PM' || level === 'Director/VP') {
        tips.push('At senior levels, show strategic thinking: "Identified market opportunity" > "Built feature"');
        tips.push('Mention team size and scope: "Led team of 12" shows leadership scale');
        tips.push('Include cross-functional influence stories: engineering, design, data, business');
    }
    if (/sql|data|analytics/.test(text)) {
        tips.push('Mention specific tools: "Used SQL + Amplitude to identify drop-off" shows hands-on capability');
    }
    if (/remote|global|distributed/.test(text)) {
        tips.push('Highlight remote collaboration: async communication, timezone management, distributed team experience');
    }
    return tips;
}

function renderAnalysis(analysis) {
    const output = document.getElementById('jd-output');
    output.innerHTML = `
        <!-- Summary -->
        <div class="card p-5 mb-4">
            <div class="flex items-center justify-between mb-3">
                <h3 class="font-semibold text-sm">🎯 Analysis Summary</h3>
                <div class="flex gap-2">
                    <span class="badge badge-info">${analysis.level}</span>
                    <span class="badge badge-medium">${analysis.domain}</span>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-3 text-center">
                <div class="bg-[#0f172a]/50 rounded-lg p-2">
                    <div class="text-lg font-bold text-indigo-400">${analysis.atsKeywords.length}</div>
                    <div class="text-[10px] text-[#94a3b8]">ATS Keywords</div>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-2">
                    <div class="text-lg font-bold text-green-400">${analysis.skills.hard.length + analysis.skills.soft.length}</div>
                    <div class="text-[10px] text-[#94a3b8]">Skills Found</div>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-2">
                    <div class="text-lg font-bold text-amber-400">${analysis.starBullets.length}</div>
                    <div class="text-[10px] text-[#94a3b8]">Bullet Suggestions</div>
                </div>
            </div>
        </div>

        <!-- Professional Summary -->
        <div class="card p-5 mb-4">
            <div class="flex items-center justify-between mb-2">
                <h3 class="font-semibold text-sm">📝 Professional Summary (copy this)</h3>
                <button onclick="window.copySection('summary-text')" class="text-xs text-indigo-400 hover:text-indigo-300">📋 Copy</button>
            </div>
            <div id="summary-text" class="bg-[#0f172a]/50 rounded-lg p-3 text-xs text-[#94a3b8] leading-relaxed">${analysis.summary}</div>
        </div>

        <!-- ATS Keywords -->
        <div class="card p-5 mb-4">
            <div class="flex items-center justify-between mb-2">
                <h3 class="font-semibold text-sm">🎯 ATS Keywords (include these in your resume)</h3>
                <button onclick="window.copySection('keywords-text')" class="text-xs text-indigo-400 hover:text-indigo-300">📋 Copy All</button>
            </div>
            <div id="keywords-text" class="flex flex-wrap gap-1.5">
                ${analysis.atsKeywords.map(kw => `<span class="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded text-xs text-indigo-300">${kw}</span>`).join('')}
            </div>
        </div>

        <!-- Skills Section -->
        <div class="card p-5 mb-4">
            <div class="flex items-center justify-between mb-2">
                <h3 class="font-semibold text-sm">🛠️ Skills Section (ready to paste)</h3>
                <button onclick="window.copySection('skills-text')" class="text-xs text-indigo-400 hover:text-indigo-300">📋 Copy</button>
            </div>
            <div id="skills-text" class="bg-[#0f172a]/50 rounded-lg p-3 text-xs text-[#94a3b8] leading-relaxed">
                <p><strong class="text-white">Technical:</strong> ${analysis.skills.hard.join(', ') || 'Product Analytics, SQL, A/B Testing, Agile/Scrum'}</p>
                <p class="mt-1"><strong class="text-white">Leadership:</strong> ${analysis.skills.soft.join(', ') || 'Cross-functional Leadership, Stakeholder Management, Strategic Thinking'}</p>
                <p class="mt-1"><strong class="text-white">Domain:</strong> ${analysis.domain}, ${analysis.atsKeywords.slice(0, 5).join(', ')}</p>
            </div>
        </div>

        <!-- STAR Bullets -->
        <div class="card p-5 mb-4">
            <div class="flex items-center justify-between mb-2">
                <h3 class="font-semibold text-sm">🌟 STAR Achievement Bullets (customize with your numbers)</h3>
                <button onclick="window.copySection('bullets-text')" class="text-xs text-indigo-400 hover:text-indigo-300">📋 Copy All</button>
            </div>
            <div id="bullets-text" class="bg-[#0f172a]/50 rounded-lg p-3 space-y-2">
                ${analysis.starBullets.map(b => `<p class="text-xs text-[#94a3b8] leading-relaxed">• ${b}</p>`).join('')}
            </div>
            <p class="text-[10px] text-amber-400 mt-2">⚠️ Replace X, Y, Z with your actual numbers. ATS + hiring managers love quantified impact.</p>
        </div>

        <!-- Metrics to Include -->
        <div class="card p-5 mb-4">
            <div class="flex items-center justify-between mb-2">
                <h3 class="font-semibold text-sm">📊 Metrics You Should Mention</h3>
                <button onclick="window.copySection('metrics-text')" class="text-xs text-indigo-400 hover:text-indigo-300">📋 Copy</button>
            </div>
            <div id="metrics-text" class="grid grid-cols-2 gap-2">
                ${analysis.metrics.map(m => `<div class="bg-[#0f172a]/50 rounded p-2 text-xs text-[#94a3b8]">📈 ${m}</div>`).join('')}
            </div>
        </div>

        <!-- Pro Tips -->
        <div class="card p-5">
            <h3 class="font-semibold text-sm mb-3">💡 Pro Tips for This Application</h3>
            <div class="space-y-2">
                ${analysis.proTips.map(t => `<p class="text-xs text-[#94a3b8] leading-relaxed">• ${t}</p>`).join('')}
            </div>
        </div>
    `;
}

window.copySection = function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const text = el.innerText || el.textContent;
    navigator.clipboard.writeText(text).then(() => {
        // Brief visual feedback
        const btn = el.previousElementSibling || el.closest('.card').querySelector('button');
        if (btn && btn.textContent.includes('Copy')) {
            const original = btn.textContent;
            btn.textContent = '✓ Copied!';
            setTimeout(() => { btn.textContent = original; }, 1500);
        }
    });
};
