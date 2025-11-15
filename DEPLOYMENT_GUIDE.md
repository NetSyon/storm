# Storm Smart Dashboard - Deployment Guide

## Customizing Links

### 1. Change Wiki URL
Edit `/app/frontend/src/pages/Wiki.jsx`:
```javascript
const [wikiUrl] = useState('https://your-wiki-url.com');
```

### 2. Change GitHub Repository
Edit `/app/frontend/src/data/mock.js`:
```javascript
export const githubRepo = {
  name: "YOUR-REPO-NAME",
  owner: "YOUR-GITHUB-USERNAME",
  url: "https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPO-NAME",
  description: "Your repository description"
};
```

### 3. Change Jira Portal and Team Info
Edit `/app/frontend/src/data/mock.js`:
```javascript
export const teamContact = {
  jiraPortal: "https://your-jira-instance.atlassian.net",
  groupName: "Your Team Name",
  supportedProducts: [
    "Product 1",
    "Product 2",
    "Product 3"
  ]
};
```

---

## Deploying to GitHub Pages

### Method 1: Using gh-pages (Recommended - Easiest)

**Step 1: Install gh-pages**
```bash
cd /app/frontend
yarn add -D gh-pages
```

**Step 2: Update package.json**
Add these lines to `/app/frontend/package.json`:
```json
{
  "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME",
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build",
    ...existing scripts...
  }
}
```

**Step 3: Deploy**
```bash
cd /app/frontend
yarn deploy
```

This will:
- Build your app
- Create a `gh-pages` branch
- Push the build folder to GitHub
- Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

---

### Method 2: Manual GitHub Pages Setup

**Step 1: Build your app**
```bash
cd /app/frontend
yarn build
```

**Step 2: Initialize Git (if not already done)**
```bash
cd /app
git init
git add .
git commit -m "Initial commit - Storm Smart Dashboard"
```

**Step 3: Create GitHub repository**
- Go to GitHub.com
- Click "New repository"
- Name it (e.g., "storm-dashboard")
- Don't initialize with README

**Step 4: Push to GitHub**
```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

**Step 5: Configure GitHub Pages**
- Go to your repository on GitHub
- Settings → Pages
- Source: Deploy from a branch
- Branch: Select `main` → `/frontend/build`
- Save

**Step 6: Add build folder to git**
Since build folders are typically ignored, you'll need to:
```bash
# Remove build from .gitignore
# Then commit build folder
git add frontend/build -f
git commit -m "Add build folder for GitHub Pages"
git push
```

---

### Method 3: GitHub Actions (Automated)

**Step 1: Create workflow file**
Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: |
        cd frontend
        yarn install
        
    - name: Build
      run: |
        cd frontend
        yarn build
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./frontend/build
```

**Step 2: Push to GitHub**
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment"
git push
```

**Step 3: Configure GitHub Pages**
- Go to Settings → Pages
- Source: Deploy from a branch
- Branch: Select `gh-pages` → `/ (root)`
- Save

Now every time you push to `main`, it will automatically build and deploy!

---

## Important Notes

### For GitHub Pages with Custom Domain
If you have a custom domain, add this to `/app/frontend/public/CNAME`:
```
yourdomain.com
```

### Base URL for Subdirectory Deployment
If your site is at `username.github.io/repo-name` (not root), update `/app/frontend/package.json`:
```json
{
  "homepage": "https://username.github.io/repo-name"
}
```

### Testing Locally Before Deploy
```bash
cd /app/frontend
yarn build
yarn global add serve
serve -s build
```
Open http://localhost:3000 to test your production build

---

## Troubleshooting

### Issue: 404 Error on GitHub Pages
- Check that GitHub Pages is enabled in repository settings
- Verify the correct branch and folder are selected
- Wait 5-10 minutes for first deployment

### Issue: Blank page
- Check browser console for errors
- Verify `homepage` in package.json matches your GitHub Pages URL
- Make sure you're using relative paths (our app already does this)

### Issue: Links not working
- GitHub Pages serves static files - all links must be absolute URLs
- Our portal links are already configured correctly

---

## Quick Deployment Checklist

- [ ] Update Wiki URL in `Wiki.jsx`
- [ ] Update GitHub repo info in `mock.js`
- [ ] Update Jira portal in `mock.js`
- [ ] Update team name and supported products in `mock.js`
- [ ] Build the app: `yarn build`
- [ ] Test locally: `serve -s build`
- [ ] Deploy using one of the methods above
- [ ] Verify deployment at your GitHub Pages URL

---

## Need Help?

**Common Commands:**
```bash
# Install dependencies
cd /app/frontend && yarn install

# Run locally
cd /app/frontend && yarn start

# Build for production
cd /app/frontend && yarn build

# Deploy (after setting up gh-pages)
cd /app/frontend && yarn deploy
```

**File Locations:**
- Configuration: `/app/frontend/src/data/mock.js`
- Wiki URL: `/app/frontend/src/pages/Wiki.jsx`
- Styling: `/app/frontend/src/App.css`
- Main App: `/app/frontend/src/App.js`
