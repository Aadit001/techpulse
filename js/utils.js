/**
 * TechPulse - Utility Functions
 */

function categorize(title) {
    const lower = title.toLowerCase();
    for (const cat of PM_CATEGORIES) {
        if (cat.keywords.some(kw => lower.includes(kw))) return cat.category;
    }
    return 'Industry News';
}

function assessImpact(score) {
    if (score > 200) return 'high';
    if (score > 80) return 'medium';
    return 'low';
}

function timeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - new Date(timestamp).getTime()) / 1000);
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
}

function detectLocation(loc) {
    const lower = (loc || '').toLowerCase();
    if (lower.includes('bangalore') || lower.includes('bengaluru')) return 'bangalore';
    if (lower.includes('mumbai')) return 'mumbai';
    if (lower.includes('delhi') || lower.includes('gurgaon') || lower.includes('noida') || lower.includes('gurugram')) return 'delhi';
    if (lower.includes('hyderabad')) return 'hyderabad';
    if (lower.includes('pune')) return 'pune';
    if (lower.includes('chennai')) return 'chennai';
    if (lower.includes('india')) return 'india';
    if (lower.includes('remote') || lower.includes('anywhere') || lower.includes('worldwide') || lower.includes('apac')) return 'remote';
    return 'india';
}

function detectLevel(title) {
    const lower = (title || '').toLowerCase();
    if (lower.includes('director') || lower.includes('vp') || lower.includes('head of')) return 'lead';
    if (lower.includes('lead') || lower.includes('principal') || lower.includes('staff') || lower.includes('group')) return 'lead';
    if (lower.includes('senior') || lower.includes('sr.') || lower.includes('sr ')) return 'senior';
    if (lower.includes('associate') || lower.includes('junior') || lower.includes('entry') || lower.includes('apm')) return 'apm';
    return 'pm';
}

function openModal(html) {
    document.getElementById('modal-content').innerHTML = html;
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('modal-overlay').classList.add('hidden');
}
window.closeModal = closeModal;
