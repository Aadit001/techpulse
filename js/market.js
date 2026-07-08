/**
 * TechPulse - Market Intelligence Module
 * Hiring trends, company signals (clickable), best time to apply
 */

function renderMarket() {
    const currentMonth = new Date().getMonth();
    const currentMonthData = MARKET_DATA.hiringTrends[currentMonth];
    const nextMonth = MARKET_DATA.hiringTrends[(currentMonth + 1) % 12];
    const isGoodTime = currentMonthData.score >= 70;

    document.getElementById('market-grid').innerHTML = `
        <!-- Health Score -->
        <div class="card p-5 md:col-span-2 lg:col-span-3">
            <h3 class="font-semibold mb-3">Market Health</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div class="bg-[#0f172a]/50 rounded-lg p-3 text-center">
                    <div class="text-xl font-bold text-green-400">${MARKET_DATA.healthScore}/100</div>
                    <div class="text-[10px] text-[#94a3b8]">Health Score</div>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-3 text-center">
                    <div class="text-xl font-bold text-indigo-400">${MARKET_DATA.totalOpenings}+</div>
                    <div class="text-[10px] text-[#94a3b8]">Open Roles</div>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-3 text-center">
                    <div class="text-xl font-bold text-cyan-400">${MARKET_DATA.avgTimeToHire}</div>
                    <div class="text-[10px] text-[#94a3b8]">Avg Time to Hire</div>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-3 text-center">
                    <div class="text-xl font-bold text-amber-400">${MARKET_DATA.competitionRatio}</div>
                    <div class="text-[10px] text-[#94a3b8]">Jobs:Applicants</div>
                </div>
            </div>
            <div class="p-3 rounded-lg ${isGoodTime ? 'bg-green-500/5 border border-green-500/20' : 'bg-amber-500/5 border border-amber-500/20'}">
                <p class="text-sm font-medium ${isGoodTime ? 'text-green-400' : 'text-amber-400'}">${isGoodTime ? '✅ Good time to apply!' : '⏳ Market is moderate'}</p>
                <p class="text-xs text-[#94a3b8] mt-1">${currentMonthData.month}: ${currentMonthData.label} (Score: ${currentMonthData.score}/100). Next: ${nextMonth.month} — ${nextMonth.label}</p>
            </div>
        </div>

        <!-- Hiring Trends -->
        <div class="card p-5 md:col-span-2">
            <h3 class="font-semibold mb-3">📈 Monthly Hiring Trends</h3>
            <div class="space-y-1.5">
                ${MARKET_DATA.hiringTrends.map((m, i) => {
                    const isCurrent = i === currentMonth;
                    const barColor = m.score >= 75 ? 'bg-green-400' : m.score >= 60 ? 'bg-yellow-400' : 'bg-red-400';
                    return `
                    <div class="flex items-center gap-2 ${isCurrent ? 'bg-indigo-500/10 -mx-2 px-2 py-1 rounded' : ''}">
                        <span class="text-[10px] w-7 ${isCurrent ? 'text-indigo-400 font-bold' : 'text-[#64748b]'}">${m.month}</span>
                        <div class="flex-1 bg-[#0f172a] rounded-full h-2">
                            <div class="${barColor} h-2 rounded-full transition-all" style="width:${m.score}%"></div>
                        </div>
                        <span class="text-[10px] w-5 text-right ${isCurrent ? 'text-indigo-400 font-bold' : 'text-[#64748b]'}">${m.score}</span>
                        ${isCurrent ? '<span class="text-[10px] text-indigo-400 font-medium">NOW</span>' : ''}
                    </div>`;
                }).join('')}
            </div>
        </div>

        <!-- Hot Skills -->
        <div class="card p-5">
            <h3 class="font-semibold mb-3">🔥 In-Demand Skills</h3>
            <div class="flex flex-wrap gap-1.5">
                ${MARKET_DATA.hotSkills.map(skill =>
                    `<a href="https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(skill + ' product manager')}&location=India" target="_blank" class="filter-chip text-[10px] hover:bg-pink-500/20 hover:border-pink-500/30 hover:text-pink-300">${skill}</a>`
                ).join('')}
            </div>
        </div>

        <!-- Company Signals - CLICKABLE -->
        <div class="card p-5 md:col-span-2 lg:col-span-3">
            <h3 class="font-semibold mb-2">🏢 Company Hiring Signals</h3>
            <p class="text-xs text-[#64748b] mb-4">Click any company to see details, compensation & apply links</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                ${MARKET_DATA.companySignals.map((c, idx) => `
                    <button onclick="window.showCompanyDetail(${idx})" class="text-left bg-[#0f172a]/50 rounded-lg p-3 border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all cursor-pointer">
                        <div class="flex items-center justify-between mb-1">
                            <span class="text-xs font-semibold">${c.name}</span>
                            <span class="badge ${c.urgency === 'high' ? 'badge-high' : 'badge-medium'}">${c.roles}</span>
                        </div>
                        <p class="text-[10px] text-[#64748b] line-clamp-1">${c.signal}</p>
                        <p class="text-[10px] text-indigo-400 mt-1">View & Apply →</p>
                    </button>
                `).join('')}
            </div>
        </div>

        <!-- Top Sectors -->
        <div class="card p-5">
            <h3 class="font-semibold mb-3">🏭 Top Sectors</h3>
            <div class="space-y-2">
                ${MARKET_DATA.topSectors.map(s => `
                    <a href="https://www.linkedin.com/jobs/search/?keywords=product+manager+${encodeURIComponent(s.name)}&location=India" target="_blank" class="block group">
                        <div class="flex justify-between text-xs mb-0.5">
                            <span class="text-[#94a3b8] group-hover:text-indigo-400 transition-colors">${s.name}</span>
                            <span class="${s.trend === 'up' ? 'text-green-400' : s.trend === 'down' ? 'text-red-400' : 'text-yellow-400'}">${s.trend === 'up' ? '↑' : s.trend === 'down' ? '↓' : '→'}</span>
                        </div>
                        <div class="w-full bg-[#0f172a] rounded-full h-1.5">
                            <div class="bg-cyan-400 h-1.5 rounded-full" style="width:${s.growth}%"></div>
                        </div>
                    </a>
                `).join('')}
            </div>
        </div>

        <!-- Best Time to Apply -->
        <div class="card p-5">
            <h3 class="font-semibold mb-3">⏰ Strategy Now</h3>
            <p class="text-xs text-[#94a3b8] leading-relaxed">
                ${currentMonthData.score >= 75
                    ? 'Market is hot. Apply aggressively — 3-5 targeted applications/week. Prioritize companies showing multiple PM openings.'
                    : currentMonthData.score >= 60
                    ? 'Moderate market. Focus on quality over quantity. Network, upskill, and apply selectively to high-match roles.'
                    : `Hiring is slow now. Strengthen your portfolio, prep case studies. Market picks up in ${nextMonth.month}.`}
            </p>
            <div class="mt-3 space-y-1">
                <p class="text-[10px] text-[#64748b]">• Update LinkedIn with "AI Product Management" keywords</p>
                <p class="text-[10px] text-[#64748b]">• Practice product sense cases</p>
                <p class="text-[10px] text-[#64748b]">• Set job alerts on LinkedIn & Naukri</p>
            </div>
        </div>

        <!-- Market Summary -->
        <div class="card p-5">
            <h3 class="font-semibold mb-3">📋 Summary</h3>
            <div class="space-y-1.5 text-xs text-[#94a3b8]">
                <p>• PM hiring <span class="text-green-400 font-medium">up ${MARKET_DATA.monthlyChange}</span> MoM</p>
                <p>• AI PMs seeing <span class="text-indigo-400 font-medium">2x demand</span> vs last year</p>
                <p>• Remote = ~25% of all PM openings</p>
                <p>• Series A-C startups hiring most</p>
                <p>• Top companies offer 25-40% hikes</p>
            </div>
        </div>
    `;
}

// Company detail modal — CLICKABLE
window.showCompanyDetail = function(idx) {
    const c = MARKET_DATA.companySignals[idx];
    if (!c) return;
    openModal(`
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold">${c.name}</h3>
                <span class="badge ${c.urgency === 'high' ? 'badge-high' : 'badge-medium'}">${c.urgency === 'high' ? '🔥 High Urgency' : 'Moderate'}</span>
            </div>
            <p class="text-sm text-[#94a3b8]">${c.signal}</p>
            <div class="grid grid-cols-2 gap-3">
                <div class="bg-[#0f172a]/50 rounded-lg p-3">
                    <p class="text-[10px] text-[#64748b]">Open Roles</p>
                    <p class="font-semibold text-indigo-400">${c.roles} positions</p>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-3">
                    <p class="text-[10px] text-[#64748b]">Compensation</p>
                    <p class="font-semibold text-green-400">${c.salary}</p>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-3">
                    <p class="text-[10px] text-[#64748b]">Locations</p>
                    <p class="text-sm">${c.locations.join(', ')}</p>
                </div>
                <div class="bg-[#0f172a]/50 rounded-lg p-3">
                    <p class="text-[10px] text-[#64748b]">Domain</p>
                    <p class="text-sm">${c.domain}</p>
                </div>
            </div>
            <div class="space-y-2">
                <a href="${c.careerUrl}" target="_blank" class="block w-full py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-lg text-center transition-all">View Roles on ${c.name} →</a>
                <a href="https://www.linkedin.com/jobs/search/?keywords=product+manager+${encodeURIComponent(c.name)}&location=India" target="_blank" class="block w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg text-center transition-all">🔗 Search LinkedIn</a>
                <a href="https://www.naukri.com/${encodeURIComponent(c.name.toLowerCase().replace(/\s+/g, '-'))}-jobs" target="_blank" class="block w-full py-2.5 bg-[#0f172a] border border-white/10 hover:border-indigo-500/30 text-white text-sm rounded-lg text-center transition-all">Search Naukri</a>
            </div>
            <button onclick="closeModal()" class="w-full py-2 text-sm text-[#94a3b8] hover:text-white transition-colors">Close</button>
        </div>
    `);
};
