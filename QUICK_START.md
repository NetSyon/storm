# Quick Start - Customize Your Dashboard

## 🔧 Change Links (3 Easy Steps)

### 1️⃣ Change Wiki URL
**File:** `/app/frontend/src/pages/Wiki.jsx` (Line 6)

```javascript
const [wikiUrl] = useState('https://www.microsoft.com');
// Change to:
const [wikiUrl] = useState('https://your-wiki-url.com');
```

### 2️⃣ Change GitHub Repository
**File:** `/app/frontend/src/data/mock.js` (Lines 1145-1150)

```javascript
export const githubRepo = {
  name: "YOUR-REPO",
  owner: "YOUR-USERNAME", 
  url: "https://github.com/YOUR-USERNAME/YOUR-REPO",
  description: "Your description"
};
```

### 3️⃣ Change Jira Portal & Team Info
**File:** `/app/frontend/src/data/mock.js` (Lines 1153-1164)

```javascript
export const teamContact = {
  jiraPortal: "https://your-jira.atlassian.net",
  groupName: "Your Team Name",
  supportedProducts: [
    "Product 1",
    "Product 2",
    "Product 3"
  ]
};
```

---

## 🚀 Deploy to GitHub Pages (Easiest Method)

### Step 1: Install gh-pages
```bash
cd /app/frontend
yarn add -D gh-pages
```

### Step 2: Edit package.json
Add these 2 lines to `/app/frontend/package.json`:

```json
{
  "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME",
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build",
    ...other scripts...
  }
}
```

### Step 3: Deploy!
```bash
cd /app/frontend
yarn deploy
```

✅ Done! Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

---

## 📝 Full Documentation
See `DEPLOYMENT_GUIDE.md` for:
- Alternative deployment methods
- Troubleshooting
- Custom domain setup
- GitHub Actions automation

---

## 🎯 File Locations Quick Reference

| What to Change | File Location | Line |
|---------------|--------------|------|
| Wiki URL | `/app/frontend/src/pages/Wiki.jsx` | 6 |
| GitHub Repo | `/app/frontend/src/data/mock.js` | 1145-1150 |
| Jira Portal | `/app/frontend/src/data/mock.js` | 1154 |
| Team Name | `/app/frontend/src/data/mock.js` | 1155 |
| Supported Products | `/app/frontend/src/data/mock.js` | 1156-1163 |
| Portal Links | `/app/frontend/src/data/mock.js` | 1-1144 |
