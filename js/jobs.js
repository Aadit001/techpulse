/**
 * TechPulse - Jobs Module
 * Fetches PM jobs, renders listings, handles quick apply
 */

let allJobs = [];

async function fetchRemoteOKJobs() {
    try {
        const res = await fetch('https://remoteok.com/api?tag=product');
        if (!res.ok) return [];
        const data = await res.json();
        const jobs = Array.isArray(data) ? data.slice(1) : [];
        return jobs.filter(j => {
            const t = (j.position || '').toLowerCase();
            return t.includes('product') || t.includes('pm') || t.includes('growth');
        }).slice(0, 10).map(job => ({
            id: 'rok-' + job.id,
            title: job.position || 'Product Manager',
            company: job.company || 'Unknown',
            location: job.location || 'Remote',
            locationType: detectLocation(job.location || 'Remote'),
            level: detectLevel(job.position || ''),
            salary: job.salary_min && job.salary_max ? `$${(job.salary_min/1000).toFixed(0)}K-$${(job.salary_max/1000).toFixed(0)}K` : 'Not disclosed',
            tags: (job.tags || []).slice(0, 4),
            description: (job.description || '').replace(/<[^>]*>/g, '').substring(0, 150),
            url: job.url || `https://remoteok.com/l/${job.id}`,
            applyUrl: job.apply_url || job.url || `https://remoteok.com/l/${job.id}`,
            postedAt: job.date || new Date().toISOString(),
            source: 'RemoteOK',
        }));
    } catch (e) {
        console.error('RemoteOK error:', e);
        return [];
    }
}

async function loadJobs() {
    const [remote] = await Promise.all([fetchRemoteOKJobs()]);
    const curated = getCuratedIndiaJobs();
    allJobs = [...curated, ...remote].sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
    renderJobs();
    renderSalaryGuide();
    renderJobLinks();
}

function renderJobs() {
    const locFilter = document.getElementById('job-location-filter').value;
    const lvlFilter = document.getElementById('job-level-filter').value;

    const filtered = allJobs.filter(job => {
        const matchLoc = locFilter === 'all' || job.locationType === locFilter || (locFilter === 'india' && !['remote'].includes(job.locationType));
        const matchLvl = lvlFilter === 'all' || job.level === lvlFilter;
        return matchLoc && matchLvl;
    });

    document.getElementById('jobs-grid').innerHTML = filtered.length === 0
        ? `<div class="col-span-2 card p-8 text-center">
            <p class="text-[#94a3b8] mb-4">No jobs match current filters.</p>
            <div class="flex flex-wrap gap-2 justify-center">
                <a href="https://www.linkedin.com/jobs/search/?keywords=product+manager&location=India&f_TPR=r604800" target="_blank" class="badge badge-info px-3 py-2 text-xs">LinkedIn India</a>
                <a href="https://www.naukri.com/product-manager-jobs" target="_blank" class="badge badge-info px-3 py-2 text-xs">Naukri</a>
            </div>
           </div>`
        : filtered.map((job, i) => `
        <div class="card p-4 animate-in" style="animation-delay:${i * 40}ms">
            <div class="flex items-start justify-between mb-2">
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <span class="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-400">${job.company.charAt(0)}</span>
                        <span class="text-xs text-[#94a3b8]">${job.company}</span>
                    </div>
                    <h3 class="font-semibold text-sm">${job.title}</h3>
                </div>
                <span class="badge badge-info">${job.level}</span>
            </div>
            <div class="flex flex-wrap gap-2 text-xs text-[#94a3b8] mb-2">
                <span>📍 ${job.location}</span>
                <span class="text-green-400 font-medium">${job.salary}</span>
                <span>${timeAgo(job.postedAt)}</span>
            </div>
            <p class="text-xs text-[#64748b] mb-3 line-clamp-2">${job.description}</p>
            <div class="flex flex-wrap gap-1 mb-3">
                ${job.tags.map(t => `<span class="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-[#94a3b8]">${t}</span>`).join('')}
            </div>
            <div class="flex gap-2">
                <a href="${job.applyUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-medium rounded-lg transition-all">Apply →</a>
                <a href="${job.url}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 text-xs text-indigo-400 hover:text-indigo-300">Details</a>
            </div>
        </div>
    `).join('');
}

function renderSalaryGuide() {
    document.getElementById('salary-guide').innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="card p-5">
                <h3 class="font-semibold text-sm mb-3">💰 India PM Salaries (2024-25)</h3>
                <div class="space-y-2">
                    ${SALARY_DATA_INDIA.map(s => `
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-[#94a3b8]">${s.level}</span>
                            <span class="text-green-400 font-medium">${s.range}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="card p-5">
                <h3 class="font-semibold text-sm mb-3">🌍 Remote PM Compensation</h3>
                <div class="space-y-2">
                    ${SALARY_DATA_REMOTE.map(s => `
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-[#94a3b8]">${s.level}</span>
                            <span class="text-blue-400 font-medium">${s.range}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderJobLinks() {
    document.getElementById('job-links').innerHTML = `
        <h3 class="font-semibold text-sm mb-3">🔍 Search More PM Jobs</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <a href="https://www.linkedin.com/jobs/search/?keywords=product+manager&location=India&f_TPR=r604800" target="_blank" class="px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-xs text-center text-blue-300 transition-all">LinkedIn India</a>
            <a href="https://www.naukri.com/product-manager-jobs" target="_blank" class="px-3 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 rounded-lg text-xs text-center text-purple-300 transition-all">Naukri</a>
            <a href="https://instahyre.com/search-jobs/?job_function_id=2" target="_blank" class="px-3 py-2 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/30 rounded-lg text-xs text-center text-amber-300 transition-all">Instahyre</a>
            <a href="https://www.linkedin.com/jobs/search/?keywords=product+manager+remote&f_WT=2" target="_blank" class="px-3 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-lg text-xs text-center text-green-300 transition-all">LinkedIn Remote</a>
            <a href="https://wellfound.com/role/product-manager?location=india" target="_blank" class="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-center text-[#94a3b8] transition-all">Wellfound</a>
            <a href="https://cutshort.io/jobs/product-management" target="_blank" class="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-center text-[#94a3b8] transition-all">CutShort</a>
        </div>
    `;
}

window.filterJobs = renderJobs;
