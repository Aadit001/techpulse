/**
 * TechPulse - Main App Controller
 * Tab switching, initialization, auto-refresh
 */

let currentTab = 'news';
let newsLoaded = false;
let jobsLoaded = false;

// Tab switching
window.switchTab = function(tab) {
    currentTab = tab;
    ['news', 'jobs', 'market', 'interview', 'jd'].forEach(t => {
        const panel = document.getElementById(`panel-${t}`);
        const btn = document.getElementById(`tab-${t}`);
        if (panel) panel.classList.toggle('hidden', t !== tab);
        if (btn) btn.classList.toggle('active', t === tab);
    });

    if (tab === 'jobs' && !jobsLoaded) {
        jobsLoaded = true;
        loadJobs();
    }
    if (tab === 'market') renderMarket();
    if (tab === 'interview') renderInterviewPrep();
    if (tab === 'jd') renderJDOptimizer();
};

// Expose refresh for the news section button
window.loadAllNews = loadNews;

// Initialize
(async function init() {
    newsLoaded = true;

    // Load PM Career content first (above the fold)
    window.loadPMCareerContent();

    // Load industry news below
    await loadNews();

    // Auto-refresh every 5 min
    setInterval(() => {
        if (currentTab === 'news') loadNews();
        else if (currentTab === 'jobs') loadJobs();
    }, 5 * 60 * 1000);
})();
