/**
 * TechPulse - News Module
 * Fetches from HN + Dev.to, renders news grid and PM insights
 * Also handles "Load More" PM career content (interviews, guidance, job switch tips)
 */

let allNews = [];
let pmCareerContent = [];
let selectedCategory = 'all';
let selectedPMTopic = 'all';
let pmContentLoaded = false;

// ===== NEWS FETCHING =====
async function fetchHackerNews() {
    try {
        const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const ids = await res.json();
        const top20 = ids.slice(0, 20);
        const stories = await Promise.all(
            top20.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json()))
        );
        return stories.filter(s => s && s.title).map(story => ({
            id: 'hn-' + story.id,
            title: story.title,
            summary: `${story.score} pts by ${story.by}. ${story.text ? story.text.substring(0, 100).replace(/<[^>]*>/g, '') + '...' : ''}`,
            category: categorize(story.title),
            source: 'Hacker News',
            url: story.url || `https://news.ycombinator.com/item?id=${story.id}`,
            publishedAt: new Date(story.time * 1000).toISOString(),
            impact: assessImpact(story.score || 0),
        }));
    } catch (e) {
        console.error('HN fetch error:', e);
        return [];
    }
}

async function fetchDevTo() {
    try {
        const res = await fetch('https://dev.to/api/articles?top=1&per_page=10');
        if (!res.ok) return [];
        const articles = await res.json();
        return articles.map(a => ({
            id: 'dev-' + a.id,
            title: a.title,
            summary: a.description || a.tag_list.join(', '),
            category: categorize(a.title + ' ' + (a.tag_list || []).join(' ')),
            source: 'Dev.to',
            url: a.url,
            publishedAt: a.published_at,
            impact: assessImpact(a.positive_reactions_count || 0),
        }));
    } catch (e) {
        console.error('Dev.to error:', e);
        return [];
    }
}

async function loadNews() {
    const [hn, dev] = await Promise.all([fetchHackerNews(), fetchDevTo()]);
    allNews = [...hn, ...dev].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    renderNews();
}

// ===== NEWS RENDERING =====
function renderNews() {
    document.getElementById('news-loading').classList.add('hidden');

    const high = allNews.filter(n => n.impact === 'high').length;
    document.getElementById('news-stats').innerHTML = `
        <span>${allNews.length} stories</span>
        <span class="text-red-400">${high} high impact</span>
        <span class="text-green-400">Live</span>
    `;

    const cats = [...new Set(allNews.map(n => n.category))];
    document.getElementById('category-filters').innerHTML =
        `<button class="filter-chip ${selectedCategory === 'all' ? 'active' : ''}" onclick="window.filterNews('all')">All</button>` +
        cats.map(c => `<button class="filter-chip ${selectedCategory === c ? 'active' : ''}" onclick="window.filterNews('${c}')">${CATEGORY_ICONS[c] || '📰'} ${c}</button>`).join('');

    const aiNews = allNews.filter(n => n.category === 'AI & Machine Learning').slice(0, 3);
    const highImpact = allNews.filter(n => n.impact === 'high').slice(0, 3);
    document.getElementById('pm-insights').innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="card p-4">
                <h3 class="text-sm font-semibold text-red-400 mb-2">🔴 Must-Know Today</h3>
                ${highImpact.length ? highImpact.map(n => `<a href="${n.url}" target="_blank" class="block text-xs text-[#94a3b8] hover:text-white mb-1 truncate">• ${n.title}</a>`).join('') : '<p class="text-xs text-[#475569]">No high-impact stories yet.</p>'}
            </div>
            <div class="card p-4">
                <h3 class="text-sm font-semibold text-purple-400 mb-2">🤖 AI Radar</h3>
                ${aiNews.length ? aiNews.map(n => `<a href="${n.url}" target="_blank" class="block text-xs text-[#94a3b8] hover:text-white mb-1 truncate">• ${n.title}</a>`).join('') : '<p class="text-xs text-[#475569]">No AI news in feed.</p>'}
            </div>
        </div>
    `;

    const filtered = selectedCategory === 'all' ? allNews : allNews.filter(n => n.category === selectedCategory);
    document.getElementById('news-grid').innerHTML = filtered.map((item, i) => `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="card p-4 animate-in block" style="animation-delay:${i * 30}ms">
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-[#94a3b8]">${CATEGORY_ICONS[item.category] || '📰'} ${item.category}</span>
                <span class="badge badge-${item.impact}">${item.impact}</span>
            </div>
            <h3 class="text-sm font-semibold mb-1 line-clamp-2">${item.title}</h3>
            <p class="text-xs text-[#64748b] line-clamp-2 mb-2">${item.summary}</p>
            <div class="flex justify-between text-xs text-[#475569]">
                <span>${item.source}</span>
                <span>${timeAgo(item.publishedAt)}</span>
            </div>
        </a>
    `).join('');
}

window.filterNews = function(cat) {
    selectedCategory = cat;
    renderNews();
};

// ===== PM CAREER CONTENT (Load More) =====
const PM_CAREER_TOPICS = [
    { id: 'all', label: 'All', icon: '📋' },
    { id: 'interview', label: 'Interviews', icon: '🎤' },
    { id: 'career', label: 'Career Growth', icon: '📈' },
    { id: 'switch', label: 'Job Switch', icon: '🔄' },
    { id: 'skills', label: 'Skills & Readiness', icon: '🛠️' },
    { id: 'leadership', label: 'Leadership', icon: '👑' },
    { id: 'frameworks', label: 'PM Frameworks', icon: '🧩' },
];

const PM_TOPIC_KEYWORDS = {
    interview: ['interview', 'hiring', 'case study', 'whiteboard', 'assessment', 'screening', 'offer', 'negotiate'],
    career: ['career', 'growth', 'promotion', 'senior', 'principal', 'director', 'path', 'progression', 'mentor'],
    switch: ['switch', 'transition', 'changing', 'new role', 'first 90', 'onboarding', 'resign', 'notice period', 'offer'],
    skills: ['skill', 'learn', 'upskill', 'sql', 'data', 'analytics', 'technical', 'roadmap', 'strategy', 'communication'],
    leadership: ['lead', 'leadership', 'manage', 'team', 'influence', 'stakeholder', 'executive', 'vision'],
    frameworks: ['framework', 'okr', 'kpi', 'rice', 'moscow', 'prioritiz', 'agile', 'scrum', 'kanban', 'discovery'],
};

function classifyPMTopic(title, desc) {
    const text = (title + ' ' + desc).toLowerCase();
    for (const [topic, keywords] of Object.entries(PM_TOPIC_KEYWORDS)) {
        if (keywords.some(kw => text.includes(kw))) return topic;
    }
    return 'career';
}

// Fetch PM-specific career articles from Dev.to
async function fetchPMCareerArticles() {
    const queries = [
        'product+manager+interview',
        'product+management+career',
        'pm+career+growth',
        'product+manager+skills',
        'product+leadership',
    ];

    const results = await Promise.all(queries.map(async (q) => {
        try {
            const res = await fetch(`https://dev.to/api/articles?tag=${q}&per_page=5&top=30`);
            if (!res.ok) return [];
            return await res.json();
        } catch { return []; }
    }));

    const articles = results.flat();
    // Deduplicate by id
    const seen = new Set();
    return articles.filter(a => {
        if (seen.has(a.id)) return false;
        seen.add(a.id);
        return true;
    }).map(a => ({
        id: 'pm-' + a.id,
        title: a.title,
        summary: a.description || '',
        topic: classifyPMTopic(a.title, a.description || ''),
        source: 'Dev.to',
        url: a.url,
        author: a.user ? a.user.name : '',
        publishedAt: a.published_at,
        reactions: a.positive_reactions_count || 0,
        readTime: a.reading_time_minutes || 3,
        tags: a.tag_list || [],
    }));
}

// Fetch from HN Algolia for PM-related content
async function fetchHNPMContent() {
    const queries = ['product manager interview', 'career advice PM', 'product management framework'];
    const results = await Promise.all(queries.map(async (q) => {
        try {
            const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(q)}&tags=story&hitsPerPage=5`);
            if (!res.ok) return [];
            const data = await res.json();
            return data.hits || [];
        } catch { return []; }
    }));

    const stories = results.flat();
    const seen = new Set();
    return stories.filter(s => {
        if (!s.title || seen.has(s.objectID)) return false;
        seen.add(s.objectID);
        return true;
    }).map(s => ({
        id: 'hn-pm-' + s.objectID,
        title: s.title,
        summary: `${s.points || 0} points, ${s.num_comments || 0} comments on Hacker News`,
        topic: classifyPMTopic(s.title, ''),
        source: 'Hacker News',
        url: s.url || `https://news.ycombinator.com/item?id=${s.objectID}`,
        author: s.author || '',
        publishedAt: s.created_at,
        reactions: s.points || 0,
        readTime: 5,
        tags: [],
    }));
}

// Curated evergreen PM career resources
function getCuratedPMResources() {
    return [
        { id: 'res-1', title: 'How to Crack PM Interviews at Google, Meta & Top Tech', summary: 'Comprehensive guide covering product sense, execution, and strategy questions with frameworks.', topic: 'interview', source: 'Curated', url: 'https://www.productmanagementexercises.com/', author: 'PM Exercises', publishedAt: new Date().toISOString(), reactions: 500, readTime: 15, tags: ['Interview', 'FAANG'] },
        { id: 'res-2', title: 'The PM Career Ladder: From APM to CPO', summary: 'What each level looks like, what to focus on at each stage, and how to get promoted.', topic: 'career', source: 'Curated', url: 'https://www.lennysnewsletter.com/', author: "Lenny's Newsletter", publishedAt: new Date().toISOString(), reactions: 420, readTime: 10, tags: ['Career', 'Growth'] },
        { id: 'res-3', title: 'Switching to Product Management from Engineering/Design', summary: 'Step-by-step guide for career changers: how to position yourself, build a portfolio, and land PM roles.', topic: 'switch', source: 'Curated', url: 'https://www.breakinto.tech/', author: 'Break Into Tech', publishedAt: new Date().toISOString(), reactions: 380, readTime: 12, tags: ['Career Switch', 'Transition'] },
        { id: 'res-4', title: 'SQL, Python & Data Skills Every PM Needs in 2025', summary: 'Technical skills that set top PMs apart. Practical examples of how data literacy improves product decisions.', topic: 'skills', source: 'Curated', url: 'https://mode.com/sql-tutorial/', author: 'Mode Analytics', publishedAt: new Date().toISOString(), reactions: 350, readTime: 8, tags: ['SQL', 'Data', 'Technical'] },
        { id: 'res-5', title: 'RICE, ICE, MoSCoW: Prioritization Frameworks Compared', summary: 'When to use which framework, with real examples from Spotify, Airbnb, and Stripe PMs.', topic: 'frameworks', source: 'Curated', url: 'https://www.productplan.com/glossary/rice-scoring-model/', author: 'ProductPlan', publishedAt: new Date().toISOString(), reactions: 300, readTime: 7, tags: ['Prioritization', 'Frameworks'] },
        { id: 'res-6', title: 'First 90 Days as a New PM: Complete Playbook', summary: 'How to onboard, build relationships, understand the product, and ship your first win.', topic: 'switch', source: 'Curated', url: 'https://www.reforge.com/', author: 'Reforge', publishedAt: new Date().toISOString(), reactions: 450, readTime: 12, tags: ['New Role', 'Onboarding'] },
        { id: 'res-7', title: 'How to Negotiate a 30-50% Salary Hike When Switching', summary: 'Tactics for Indian PM market: timing, competing offers, equity negotiation, and when to walk away.', topic: 'switch', source: 'Curated', url: 'https://www.levels.fyi/', author: 'Levels.fyi', publishedAt: new Date().toISOString(), reactions: 520, readTime: 6, tags: ['Salary', 'Negotiation'] },
        { id: 'res-8', title: 'Building Influence Without Authority: PM Leadership Guide', summary: 'How to align engineering, design, and business stakeholders when you have no direct reports.', topic: 'leadership', source: 'Curated', url: 'https://newsletter.pragmaticengineer.com/', author: 'Pragmatic Engineer', publishedAt: new Date().toISOString(), reactions: 380, readTime: 10, tags: ['Leadership', 'Influence'] },
        { id: 'res-9', title: 'Product Sense Interview: The Complete Guide', summary: 'How to structure answers, identify user pain points, and impress interviewers with product intuition.', topic: 'interview', source: 'Curated', url: 'https://www.tryexponent.com/', author: 'Exponent', publishedAt: new Date().toISOString(), reactions: 430, readTime: 15, tags: ['Interview', 'Product Sense'] },
        { id: 'res-10', title: 'OKRs for Product Teams: Setting Goals That Drive Impact', summary: 'How Atlassian, Google, and Razorpay use OKRs. Common mistakes and how to write great objectives.', topic: 'frameworks', source: 'Curated', url: 'https://www.whatmatters.com/', author: 'What Matters', publishedAt: new Date().toISOString(), reactions: 290, readTime: 8, tags: ['OKRs', 'Goals'] },
        { id: 'res-11', title: 'AI Product Management: How to Build ML Features', summary: 'Understanding ML capabilities, setting realistic expectations, and designing AI-powered user experiences.', topic: 'skills', source: 'Curated', url: 'https://pair.withgoogle.com/', author: 'Google PAIR', publishedAt: new Date().toISOString(), reactions: 400, readTime: 12, tags: ['AI/ML', 'Technical PM'] },
        { id: 'res-12', title: 'Cracking the Metrics Interview: North Star & Success Metrics', summary: 'How to define and defend product metrics in interviews and on the job. Real examples from top companies.', topic: 'interview', source: 'Curated', url: 'https://www.stellarpeers.com/', author: 'Stellar Peers', publishedAt: new Date().toISOString(), reactions: 340, readTime: 9, tags: ['Metrics', 'Interview'] },
    ];
}

// Main load function
window.loadPMCareerContent = async function() {
    document.getElementById('pm-career-loading').classList.remove('hidden');

    if (!pmContentLoaded) {
        const [devArticles, hnArticles] = await Promise.all([
            fetchPMCareerArticles(),
            fetchHNPMContent(),
        ]);
        const curated = getCuratedPMResources();
        pmCareerContent = [...curated, ...devArticles, ...hnArticles]
            .sort((a, b) => b.reactions - a.reactions);
        pmContentLoaded = true;
    }

    document.getElementById('pm-career-loading').classList.add('hidden');
    renderPMCareerContent();
};

function renderPMCareerContent() {
    // Topic filters
    document.getElementById('pm-career-filters').innerHTML = PM_CAREER_TOPICS.map(t =>
        `<button class="filter-chip ${selectedPMTopic === t.id ? 'active' : ''}" onclick="window.filterPMTopic('${t.id}')">${t.icon} ${t.label}</button>`
    ).join('');

    // Filter content
    const filtered = selectedPMTopic === 'all'
        ? pmCareerContent
        : pmCareerContent.filter(c => c.topic === selectedPMTopic);

    document.getElementById('pm-career-grid').innerHTML = filtered.length === 0
        ? '<p class="text-[#94a3b8] text-sm col-span-3 text-center py-8">No content for this topic yet. Try another category.</p>'
        : filtered.map((item, i) => `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="card p-4 animate-in block" style="animation-delay:${i * 30}ms">
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-[#94a3b8]">${PM_CAREER_TOPICS.find(t => t.id === item.topic)?.icon || '📋'} ${PM_CAREER_TOPICS.find(t => t.id === item.topic)?.label || 'Career'}</span>
                <span class="badge badge-info">${item.readTime}m read</span>
            </div>
            <h3 class="text-sm font-semibold mb-1 line-clamp-2">${item.title}</h3>
            <p class="text-xs text-[#64748b] line-clamp-2 mb-2">${item.summary}</p>
            <div class="flex flex-wrap gap-1 mb-2">
                ${(item.tags || []).slice(0, 3).map(t => `<span class="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-[#94a3b8]">${t}</span>`).join('')}
            </div>
            <div class="flex justify-between text-xs text-[#475569]">
                <span>${item.source}${item.author ? ' · ' + item.author : ''}</span>
                <span>${item.reactions ? '❤️ ' + item.reactions : ''}</span>
            </div>
        </a>
    `).join('');
}

window.filterPMTopic = function(topic) {
    selectedPMTopic = topic;
    renderPMCareerContent();
};
