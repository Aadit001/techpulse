# ⚡ TechPulse — Daily Tech Digest & PM Career Hub

A comprehensive web app built for Product Managers to stay updated, find jobs, prepare for interviews, and optimize their resumes — all in one place.

**🔗 [Live Demo](https://aadit001.github.io/techpulse/)**

---

## Features

### 📰 Tech News & PM Career Trends
- Real-time aggregation from Hacker News and Dev.to
- Auto-categorization: AI/ML, Product Launches, Funding, Developer Tools, etc.
- Impact scoring (high/medium/low) based on community engagement
- PM Career Trends loaded by default with curated resources on interviews, career growth, job switching, and upskilling

### 💼 PM Jobs (India & Remote)
- 20+ curated PM roles from top companies (Google, Microsoft, Razorpay, Flipkart, PhonePe, Stripe, etc.)
- Live listings from RemoteOK API
- Filter by location (Bangalore, Mumbai, Delhi, Hyderabad, Remote) and level (APM to Director)
- Salary guides for India (₹8L–₹3Cr+) and remote roles ($40K–$300K+)
- Direct links to LinkedIn, Naukri, Instahyre, Wellfound, CutShort

### 📊 Job Market Intelligence
- Market health score with hiring trend analysis (month-by-month)
- Company hiring signals — 20 top companies with compensation data, clickable for details and direct apply links
- Best time to apply strategy based on current month
- In-demand skills and top hiring sectors

### 🎤 Interview Prep
- Mock questions with detailed model answers across 7 categories: Product Sense, Execution, Strategy, Leadership, Technical, Behavioral (STAR), Storytelling
- Quick Reference frameworks (RICE, OKRs, North Star metrics, etc.)
- **Sample Q&A Starter Bank** — 30+ ready-to-read conversation starters covering Product, Technical, HR, Behavioral, Negotiation, Storytelling, and Situational questions

### 📄 Resume Optimizer (JD-to-Resume)
- Paste any job description → get instant analysis
- ATS keyword extraction
- Professional summary generator
- STAR-format achievement bullets tailored to the role's domain
- Skills section (Technical + Leadership + Domain)
- Metrics suggestions and pro tips
- Everything copy-paste ready

---

## Tech Stack

- **Pure HTML/CSS/JavaScript** — no build tools, no frameworks, no dependencies
- **Tailwind CSS** (CDN) for styling
- **APIs**: Hacker News Firebase API, Dev.to API, RemoteOK API, HN Algolia Search
- **Storage**: Browser localStorage for user preferences
- Runs entirely in the browser — no backend, no server, no data sent anywhere

---

## Getting Started

1. Clone this repo
2. Open `index.html` in any modern browser
3. That's it. No `npm install`, no build step.

```bash
git clone https://github.com/YOUR_USERNAME/techpulse.git
cd techpulse
# Open index.html in browser
```

---

## Project Structure

```
├── index.html              # Main HTML (lightweight shell)
├── css/styles.css          # Custom styles + animations
├── js/
│   ├── data.js             # Static data (companies, salaries, curated jobs)
│   ├── utils.js            # Shared helpers
│   ├── news.js             # News fetching + PM career content
│   ├── jobs.js             # Job listings & filtering
│   ├── market.js           # Market intelligence + company signals
│   ├── interview.js        # Interview prep + Sample Q&A bank
│   ├── jd-optimizer.js     # JD analysis & resume content generator
│   └── app.js              # Tab switching & initialization
└── README.md
```

---

## Deployment

This is a static site. Deploy anywhere for free:

- **Netlify**: Drag & drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages**: Settings → Pages → Source: main branch
- **Vercel**: Connect repo at [vercel.com](https://vercel.com)

---

## Built For

Product Managers in India and remote roles who want to:
- Stay current with tech industry trends
- Find high-paying PM jobs quickly
- Understand market timing for job switches
- Prepare for interviews at top companies
- Optimize their resume for ATS systems

---

## Author

<<<<<<< HEAD
Built with ⚡ by [Aditya Tiwari](https://www.linkedin.com/in/aditya-tiwari-0011) | [LinkedIn](https://www.linkedin.com/in/aditya-tiwari-0011)
=======
Built by [Aditya Tiwari] [LinkedIn](https://linkedin.com/in/aditya-tiwari-0011)
>>>>>>> aeb136e78178d611aa0e0adc77bb3005cfdf9c39

---

## License

MIT
