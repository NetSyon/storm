# M365 Security Portal

A modern, professional portal for Microsoft 365 Security teams to access portals, documentation, GitHub resources, and team contact information.

## Features

### 🌐 Portal Tab
- **16 Essential M365 Security Portals** - Quick access to:
  - Microsoft 365 Defender & Multi-tenant
  - Microsoft Security Copilot
  - Microsoft Purview
  - Defender for Cloud Apps, Endpoints, Identity
  - Microsoft Entra Admin Center
  - Azure Portal & Sentinel
  - Privileged Identity Management
  - Microsoft Secure Score
  - Attack Simulation Training
  - And more...
- **Smart Search** - Find portals quickly
- **Category Filtering** - Filter by Security & Compliance, Cloud Security, Identity, etc.
- **Direct Links** - Click any portal card to open in new tab

### 📚 Documentation Tab
- Curated Microsoft Learn documentation resources
- Categorized by topic (Security, Endpoint, Cloud, Identity, Compliance, Best Practices)
- Tabbed interface for easy navigation
- Direct links to official Microsoft documentation

### 💻 GitHub Tab
- Quick access to team repository: [SAYANKO/MSFTACT](https://github.com/SAYANKO/MSFTACT)
- Links to Issues, Pull Requests, and Wiki
- Repository information and features

### 📧 Contact Tab
- Team contact information
- Contact form for security inquiries
- Emergency security incident hotline
- Multiple communication channels (Email, Teams, Phone)

## Design Features

- **Modern Dark Theme** - Professional security-focused design
- **Responsive Layout** - Works on desktop, tablet, and mobile
- **Animated Backgrounds** - Subtle cyan/blue gradients
- **Smooth Transitions** - Professional hover and interaction effects
- **Accessibility** - Built with Shadcn UI components for accessibility

## Tech Stack

- **Frontend**: React 19 with React Router
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: Sonner (Toast notifications)

## Deployment to GitHub Pages

### Option 1: Build and Deploy Manually

1. **Build the production bundle:**
   ```bash
   cd frontend
   yarn build
   ```

2. **The build folder contains your static site** - Copy `build/` contents to your GitHub Pages repository.

3. **Configure GitHub Pages:**
   - Go to your repository Settings
   - Navigate to Pages section
   - Set source to deploy from main branch / root (or docs folder if you place build there)

### Option 2: Automated Deployment with GitHub Actions

1. **Create `.github/workflows/deploy.yml` in your repository:**
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

2. **Commit and push** - GitHub Actions will automatically build and deploy

### Option 3: Using gh-pages package

1. **Install gh-pages:**
   ```bash
   cd frontend
   yarn add -D gh-pages
   ```

2. **Add to `package.json`:**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "yarn build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy:**
   ```bash
   yarn deploy
   ```

## Environment Setup (For Development)

This project uses a FastAPI backend + React frontend + MongoDB stack. For GitHub Pages (static deployment), only the frontend is needed.

### Frontend Development:
```bash
cd frontend
yarn install
yarn start
```

The frontend runs on `http://localhost:3000`

### Backend (Optional - Not needed for GitHub Pages):
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

## Customization

### Update Portal Links
Edit `/frontend/src/data/mock.js`:
- `securityPortals` - Add/remove/modify portal links
- `documentationResources` - Update documentation links
- `githubRepo` - Change GitHub repository info
- `teamContact` - Update team contact information

### Update Branding
- Logo: Update Shield icon in `App.js`
- Colors: Modify Tailwind classes (cyan-500, blue-500, etc.)
- Title: Change "M365 Security Portal" in `App.js`

### Add New Pages
1. Create component in `/frontend/src/pages/`
2. Add route in `App.js`
3. Add navigation item to `navItems` array

## License

MIT License - Feel free to use and customize for your team

## Credits

- Portal data sourced from [MSPortals.io](https://msportals.io)
- Built with ❤️ for M365 Security Teams
- UI Components from [Shadcn UI](https://ui.shadcn.com/)

---

**Note**: This is a frontend-only static site perfect for GitHub Pages. All portal links open the actual Microsoft services in new tabs. No backend or authentication is required.
