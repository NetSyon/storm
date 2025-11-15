// Microsoft 365 Security Portals Data
export const securityPortals = [
  // Microsoft 365 Admin Portals
  {
    id: 1,
    name: "Microsoft 365 Admin Center",
    description: "Central admin hub for M365",
    url: "https://admin.cloud.microsoft",
    category: "M365 Admin",
    icon: "Settings"
  },
  {
    id: 2,
    name: "Microsoft 365 Apps Admin Center",
    description: "Manage M365 apps deployment and settings",
    url: "https://config.office.com",
    category: "M365 Admin",
    icon: "Package"
  },
  {
    id: 3,
    name: "Exchange Admin Center",
    description: "Exchange email administration",
    url: "https://admin.cloud.microsoft/exchange#/homepage",
    category: "M365 Admin",
    icon: "Mail"
  },
  {
    id: 4,
    name: "Microsoft Intune Admin Center",
    description: "Endpoint Manager for device management",
    url: "https://intune.microsoft.com",
    category: "M365 Admin",
    icon: "Smartphone"
  },
  {
    id: 5,
    name: "Microsoft Purview",
    description: "Data governance and compliance",
    url: "https://purview.microsoft.com/",
    category: "M365 Admin",
    icon: "Shield"
  },
  {
    id: 6,
    name: "Microsoft Teams Admin Center",
    description: "Teams management and configuration",
    url: "https://admin.teams.microsoft.com",
    category: "M365 Admin",
    icon: "Users"
  },
  {
    id: 7,
    name: "Teams Rooms Pro Management",
    description: "Manage Teams Rooms devices",
    url: "https://portal.rooms.microsoft.com/",
    category: "M365 Admin",
    icon: "Video"
  },
  {
    id: 8,
    name: "Teams Places Space Management",
    description: "Manage workspace locations in Teams",
    url: "https://places.cloud.microsoft/places/admin/space-management",
    category: "M365 Admin",
    icon: "MapPin"
  },
  {
    id: 9,
    name: "Power Apps Maker Portal",
    description: "Create and manage Power Apps",
    url: "https://make.powerapps.com",
    category: "Power Platform",
    icon: "Zap"
  },
  {
    id: 10,
    name: "Power Automate Maker Portal",
    description: "Create workflows and automation",
    url: "https://make.powerautomate.com",
    category: "Power Platform",
    icon: "Workflow"
  },
  {
    id: 11,
    name: "Power BI Admin Portal",
    description: "Power BI administration and analytics",
    url: "https://app.powerbi.com/admin-portal/usageMetrics?noSignUpCheck=1",
    category: "Power Platform",
    icon: "BarChart"
  },
  {
    id: 12,
    name: "Power Pages Preview",
    description: "Build external-facing websites",
    url: "https://make.powerpages.microsoft.com/",
    category: "Power Platform",
    icon: "Globe"
  },
  {
    id: 13,
    name: "Power Platform Admin Center",
    description: "Centralized Power Platform management",
    url: "https://admin.powerplatform.microsoft.com",
    category: "Power Platform",
    icon: "Boxes"
  },
  {
    id: 14,
    name: "SharePoint Admin Center",
    description: "SharePoint sites and settings management",
    url: "https://admin.microsoft.com/sharepoint",
    category: "M365 Admin",
    icon: "FolderTree"
  },
  {
    id: 15,
    name: "Yammer Admin",
    description: "Enterprise social networking administration",
    url: "https://www.yammer.com/office365/admin",
    category: "M365 Admin",
    icon: "MessageCircle"
  },
  {
    id: 16,
    name: "My Applications",
    description: "User app portal and access",
    url: "https://myapps.microsoft.com/",
    category: "End User",
    icon: "Grid"
  },
  {
    id: 17,
    name: "My Access",
    description: "Access requests and approvals",
    url: "https://myaccess.microsoft.com/",
    category: "End User",
    icon: "Key"
  },
  
  // Azure Admin Portals
  {
    id: 18,
    name: "Microsoft Entra Admin Center",
    description: "Identity and access management (formerly Azure AD)",
    url: "https://entra.microsoft.com",
    category: "Azure Admin",
    icon: "UserCircle"
  },
  {
    id: 19,
    name: "Microsoft Purview (Azure)",
    description: "Azure and Fabric governance",
    url: "https://web.purview.azure.com/",
    category: "Azure Admin",
    icon: "Database"
  },
  {
    id: 20,
    name: "Azure Resource Explorer",
    description: "Explore and manage Azure resources",
    url: "https://resources.azure.com",
    category: "Azure Admin",
    icon: "Search"
  },
  {
    id: 21,
    name: "Azure Resource Explorer (Raw)",
    description: "Raw resource explorer interface",
    url: "https://resources.azure.com/raw",
    category: "Azure Admin",
    icon: "Code"
  },
  {
    id: 22,
    name: "TypeSpec Azure API Playground",
    description: "Azure API explorer and testing",
    url: "https://azure.github.io/typespec-azure/playground",
    category: "Azure Admin",
    icon: "Terminal"
  },
  {
    id: 23,
    name: "Azure Monitor",
    description: "Monitor Azure resources and applications",
    url: "https://portal.azure.com/#view/Microsoft_Azure_Monitoring/AzureMonitoringBrowseBlade/~/overview",
    category: "Azure Admin",
    icon: "Activity"
  },
  {
    id: 24,
    name: "Privileged Identity Management",
    description: "Just-in-time privileged access",
    url: "https://portal.azure.com/#blade/Microsoft_Azure_PIMCommon/CommonMenuBlade/quickStart",
    category: "Azure Admin",
    icon: "Lock"
  },
  {
    id: 25,
    name: "Azure Sentinel",
    description: "Cloud-native SIEM and SOAR",
    url: "https://portal.azure.com/#blade/Microsoft_Azure_Security_Insights/WorkspaceSelectorBlade",
    category: "Security",
    icon: "AlertTriangle"
  },
  {
    id: 26,
    name: "Security Copilot Calculator",
    description: "Calculate Security Copilot costs",
    url: "https://securitycopilot.microsoft.com/calculator",
    category: "Security",
    icon: "Calculator"
  },
  {
    id: 27,
    name: "Azure New Support Request",
    description: "Create Azure support tickets",
    url: "https://portal.azure.com/#create/Microsoft.Support",
    category: "Azure Admin",
    icon: "HelpCircle"
  },
  
  // Microsoft Defender / Security Portals
  {
    id: 28,
    name: "Microsoft 365 Defender",
    description: "Unified security portal for threat protection",
    url: "https://security.microsoft.com",
    category: "Security",
    icon: "Shield"
  },
  {
    id: 29,
    name: "Microsoft Security Copilot",
    description: "AI-powered security assistant",
    url: "https://securitycopilot.microsoft.com/",
    category: "Security",
    icon: "Brain"
  },
  {
    id: 30,
    name: "Microsoft Defender Threat Intelligence",
    description: "Threat intelligence and analysis",
    url: "https://security.microsoft.com/intel-explorer",
    category: "Security",
    icon: "Eye"
  },
  {
    id: 31,
    name: "Microsoft Defender for Cloud Apps",
    description: "Cloud app security broker",
    url: "https://security.microsoft.com/cloudapps/policies/management",
    category: "Security",
    icon: "Cloud"
  },
  {
    id: 32,
    name: "Microsoft Defender for Identity",
    description: "Identity threat detection",
    url: "https://security.microsoft.com/",
    category: "Security",
    icon: "UserCheck"
  },
  {
    id: 33,
    name: "Microsoft Defender for IoT",
    description: "Internet of Things security",
    url: "https://portal.azure.com/#blade/Microsoft_Azure_IoT_Defender/IoTDefenderDashboard",
    category: "Security",
    icon: "Wifi"
  },
  {
    id: 34,
    name: "Microsoft Defender API Explorer",
    description: "Explore Defender APIs",
    url: "https://security.microsoft.com/interoperability/api-explorer",
    category: "Security",
    icon: "Code"
  },
  {
    id: 35,
    name: "Microsoft Defender ATP Testground",
    description: "Test Defender ATP capabilities",
    url: "https://demo.wd.microsoft.com/",
    category: "Security",
    icon: "TestTube"
  },
  {
    id: 36,
    name: "Attack Simulation Training",
    description: "Phishing and security awareness training",
    url: "https://security.microsoft.com/attacksimulator",
    category: "Security",
    icon: "Target"
  },
  {
    id: 37,
    name: "Microsoft Defender for Cloud",
    description: "Cloud security posture management",
    url: "https://portal.azure.com/#blade/Microsoft_Azure_Security/SecurityMenuBlade/0",
    category: "Security",
    icon: "CloudLightning"
  },
  {
    id: 38,
    name: "Microsoft Secure Score",
    description: "Security posture measurement",
    url: "https://security.microsoft.com/securescore",
    category: "Security",
    icon: "TrendingUp"
  },
  {
    id: 39,
    name: "Microsoft Security Intelligence",
    description: "Security threat intelligence",
    url: "https://microsoft.com/wdsi",
    category: "Security",
    icon: "Lightbulb"
  },
  {
    id: 40,
    name: "Multi-factor Authentication (MFA)",
    description: "MFA management portal",
    url: "https://account.activedirectory.windowsazure.com/usermanagement/multifactorverification.aspx",
    category: "Security",
    icon: "ShieldCheck"
  },
  {
    id: 41,
    name: "Entra ID Error Code Lookup",
    description: "Troubleshoot Entra ID errors",
    url: "https://login.microsoftonline.com/error",
    category: "Security",
    icon: "AlertCircle"
  },
  {
    id: 42,
    name: "Report Unsafe Site (Login)",
    description: "Report malicious websites",
    url: "https://www.microsoft.com/en-us/wdsi/support/report-unsafe-site",
    category: "Security",
    icon: "Flag"
  },
  {
    id: 43,
    name: "Report Unsafe Site (Guest)",
    description: "Report malicious websites as guest",
    url: "https://www.microsoft.com/en-us/wdsi/support/report-unsafe-site-guest",
    category: "Security",
    icon: "Flag"
  },
  {
    id: 44,
    name: "Submit File for Malware Analysis",
    description: "Submit suspicious files",
    url: "https://www.microsoft.com/en-us/wdsi/filesubmission",
    category: "Security",
    icon: "Upload"
  },
  {
    id: 45,
    name: "Submit Vulnerability",
    description: "Report security vulnerabilities",
    url: "https://msrc.microsoft.com/report/vulnerability",
    category: "Security",
    icon: "Bug"
  },
  {
    id: 46,
    name: "Report Infringement or DCMA",
    description: "Report intellectual property infringement",
    url: "https://www.microsoft.com/en-us/legal/intellectualproperty/infringement",
    category: "Security",
    icon: "Scale"
  },
  {
    id: 47,
    name: "Submit Abuse Report (CERT)",
    description: "Report security abuse",
    url: "https://msrc.microsoft.com/report/abuse",
    category: "Security",
    icon: "AlertTriangle"
  },
  
  // Developer Tools
  {
    id: 48,
    name: "Microsoft Graph Explorer",
    description: "Test Microsoft Graph API calls",
    url: "https://developer.microsoft.com/en-us/graph/graph-explorer",
    category: "Developer",
    icon: "Code"
  },
  {
    id: 49,
    name: "JWT/MS Token Decoder",
    description: "Decode JWT tokens",
    url: "https://jwt.ms/",
    category: "Developer",
    icon: "FileCode"
  },
  {
    id: 50,
    name: "Microsoft Graph Toolkit",
    description: "Graph UI components",
    url: "https://mgt.dev/",
    category: "Developer",
    icon: "Box"
  },
  
  // Health / Status Portals
  {
    id: 51,
    name: "Microsoft Service Health Status",
    description: "M365, Azure, Power Platform status",
    url: "https://status.cloud.microsoft",
    category: "Health & Status",
    icon: "Activity"
  },
  {
    id: 52,
    name: "M365 Service Health Status",
    description: "Microsoft 365 service health",
    url: "https://portal.office.com/ServiceStatus",
    category: "Health & Status",
    icon: "HeartPulse"
  },
  {
    id: 53,
    name: "M365 Service Health (Admin)",
    description: "Admin portal service health",
    url: "https://admin.microsoft.com/AdminPortal/Home#/servicehealth",
    category: "Health & Status",
    icon: "Stethoscope"
  },
  {
    id: 54,
    name: "Azure DevOps Status",
    description: "Azure DevOps service status",
    url: "https://status.dev.azure.com",
    category: "Health & Status",
    icon: "GitBranch"
  },
  {
    id: 55,
    name: "Azure Service Health",
    description: "Azure service issues and health",
    url: "https://portal.azure.com/?source=akams%2F#blade/Microsoft_Azure_Health/AzureHealthBrowseBlade/serviceIssues",
    category: "Health & Status",
    icon: "CloudOff"
  },
  {
    id: 56,
    name: "Azure Status",
    description: "Azure platform status page",
    url: "https://status.azure.com/status/",
    category: "Health & Status",
    icon: "CheckCircle"
  },
  {
    id: 57,
    name: "M365 Status on Twitter",
    description: "Real-time M365 status updates",
    url: "https://twitter.com/MSFT365Status",
    category: "Health & Status",
    icon: "Twitter"
  },
  {
    id: 58,
    name: "M365 Network Connectivity Test",
    description: "Test network connectivity to M365",
    url: "https://connectivity.office.com",
    category: "Health & Status",
    icon: "Network"
  },
  {
    id: 59,
    name: "M365 Network Insights",
    description: "Network performance insights",
    url: "https://portal.office.com/adminportal/home#/networkperformance",
    category: "Health & Status",
    icon: "Gauge"
  },
  {
    id: 60,
    name: "Microsoft Call Quality Dashboard",
    description: "Teams call quality analytics",
    url: "https://cqd.teams.microsoft.com",
    category: "Health & Status",
    icon: "Phone"
  },
  
  // Other Useful Portals
  {
    id: 61,
    name: "Partner Cybersecurity Investment",
    description: "Partner security investment program",
    url: "https://cloudaccelerator.microsoft.com/csi-partner-investment",
    category: "Resources",
    icon: "TrendingUp"
  },
  {
    id: 62,
    name: "Azure AD Data Location",
    description: "Where is your tenant data located?",
    url: "https://msit.powerbi.com/view?r=eyJrIjoiODdjOWViZDctMWRhZS00ODUzLWI4MmQtNWM5NjBkZTBkNjFlIiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9",
    category: "Resources",
    icon: "Map"
  },
  {
    id: 63,
    name: "Customer Voice",
    description: "Collect customer feedback",
    url: "https://customervoice.microsoft.com/",
    category: "Resources",
    icon: "MessageSquare"
  },
  {
    id: 64,
    name: "Feedback Portal",
    description: "Submit product feedback",
    url: "https://feedbackportal.microsoft.com/",
    category: "Resources",
    icon: "MessageCircle"
  },
  {
    id: 65,
    name: "Group Policy Search",
    description: "Search Group Policy settings",
    url: "https://gpsearch.azurewebsites.net/",
    category: "Resources",
    icon: "Search"
  },
  {
    id: 66,
    name: "Infringement Report",
    description: "Report infringement issues",
    url: "https://msrc.microsoft.com/report/infringement",
    category: "Resources",
    icon: "AlertTriangle"
  },
  {
    id: 67,
    name: "M365 Message Center Archive",
    description: "Historical message center posts",
    url: "https://mc.merill.net/",
    category: "Resources",
    icon: "Archive"
  },
  {
    id: 68,
    name: "M365 URLs and IP Ranges",
    description: "Network requirements documentation",
    url: "https://learn.microsoft.com/microsoft-365/enterprise/urls-and-ip-address-ranges",
    category: "Resources",
    icon: "Globe"
  },
  {
    id: 69,
    name: "Microsoft Adoption",
    description: "Adoption resources and guidance",
    url: "https://adoption.microsoft.com/",
    category: "Resources",
    icon: "Rocket"
  },
  {
    id: 70,
    name: "Microsoft Assessments",
    description: "Technical assessments and learning",
    url: "https://learn.microsoft.com/en-gb/assessments/",
    category: "Resources",
    icon: "ClipboardCheck"
  },
  {
    id: 71,
    name: "Microsoft Blogs",
    description: "Official Microsoft blogs",
    url: "https://blogs.microsoft.com/",
    category: "Resources",
    icon: "Newspaper"
  },
  {
    id: 72,
    name: "Microsoft Community",
    description: "Community support forum",
    url: "https://answers.microsoft.com",
    category: "Resources",
    icon: "Users"
  },
  {
    id: 73,
    name: "Microsoft Documentation",
    description: "Official Microsoft Learn docs",
    url: "https://learn.microsoft.com/docs/",
    category: "Resources",
    icon: "BookOpen"
  },
  {
    id: 74,
    name: "Dynamics 365 Roadmap",
    description: "Dynamics and Power Platform roadmap",
    url: "https://experience.dynamics.com/releaseplans/",
    category: "Resources",
    icon: "Map"
  },
  {
    id: 75,
    name: "Microsoft Events",
    description: "Microsoft events calendar",
    url: "https://events.microsoft.com",
    category: "Resources",
    icon: "Calendar"
  },
  {
    id: 76,
    name: "Microsoft Marketplace",
    description: "Azure and AppSource marketplace",
    url: "https://marketplace.microsoft.com",
    category: "Resources",
    icon: "ShoppingCart"
  },
  {
    id: 77,
    name: "Remote Connectivity Analyzer",
    description: "Test connectivity to Microsoft services",
    url: "https://testconnectivity.microsoft.com",
    category: "Resources",
    icon: "Plug"
  },
  {
    id: 78,
    name: "Security Response Center",
    description: "Microsoft security updates",
    url: "https://msrc-blog.microsoft.com/",
    category: "Resources",
    icon: "ShieldAlert"
  },
  {
    id: 79,
    name: "Office 365 Anti-Spam IP Delist",
    description: "Request IP delist from spam filters",
    url: "https://sender.office.com",
    category: "Resources",
    icon: "Mail"
  },
  {
    id: 80,
    name: "PowerShell Gallery",
    description: "PowerShell modules repository",
    url: "https://www.powershellgallery.com/",
    category: "Resources",
    icon: "Terminal"
  },
  {
    id: 81,
    name: "Service Trust Portal",
    description: "Compliance and trust information",
    url: "https://servicetrust.microsoft.com",
    category: "Resources",
    icon: "Shield"
  },
  {
    id: 82,
    name: "Tech Community Video Hub",
    description: "Technical video content",
    url: "https://techcommunity.microsoft.com/t5/video-hub/ct-p/VideoHub",
    category: "Resources",
    icon: "Video"
  },
  {
    id: 83,
    name: "Volume Licensing Central",
    description: "Volume licensing management",
    url: "https://vlcentral.microsoft.com/",
    category: "Resources",
    icon: "FileText"
  },
  {
    id: 84,
    name: "Windows Release Health",
    description: "Windows update information",
    url: "https://learn.microsoft.com/windows/release-health/",
    category: "Resources",
    icon: "Monitor"
  },
  
  // End User Apps
  {
    id: 85,
    name: "Bookings",
    description: "Schedule and manage appointments",
    url: "https://outlook.office.com/bookings",
    category: "End User",
    icon: "Calendar"
  },
  {
    id: 86,
    name: "Calendar",
    description: "Outlook calendar",
    url: "https://outlook.office.com/calendar",
    category: "End User",
    icon: "CalendarDays"
  },
  {
    id: 87,
    name: "Microsoft 365 Copilot",
    description: "AI-powered productivity assistant",
    url: "https://m365.cloud.microsoft/",
    category: "End User",
    icon: "Sparkles"
  },
  {
    id: 88,
    name: "Additional Security Information",
    description: "Manage security settings",
    url: "https://account.activedirectory.windowsazure.com",
    category: "End User",
    icon: "ShieldCheck"
  },
  {
    id: 89,
    name: "Converged MFA & SSPR Portal",
    description: "Multi-factor auth and password reset",
    url: "https://mysignins.microsoft.com/security-info",
    category: "End User",
    icon: "Lock"
  },
  {
    id: 90,
    name: "Microsoft AppSource",
    description: "Business applications marketplace",
    url: "https://store.office.com/redirect.aspx",
    category: "End User",
    icon: "Store"
  },
  {
    id: 91,
    name: "Azure Information Protection",
    description: "Track protected documents",
    url: "https://track.azurerms.com/",
    category: "End User",
    icon: "FileCheck"
  },
  {
    id: 92,
    name: "Microsoft Copilot",
    description: "AI chat assistant",
    url: "https://copilot.microsoft.com/",
    category: "End User",
    icon: "Bot"
  },
  {
    id: 93,
    name: "Microsoft Create",
    description: "Free design templates",
    url: "https://create.microsoft.com/",
    category: "End User",
    icon: "Palette"
  },
  {
    id: 94,
    name: "Microsoft Designer",
    description: "AI-powered design tool",
    url: "https://designer.microsoft.com/",
    category: "End User",
    icon: "Wand2"
  },
  {
    id: 95,
    name: "Microsoft Family Safety",
    description: "Family account management",
    url: "https://account.microsoft.com/family/",
    category: "End User",
    icon: "Users"
  },
  {
    id: 96,
    name: "Intune Web Company Portal",
    description: "Access company apps and resources",
    url: "https://portal.manage.microsoft.com/",
    category: "End User",
    icon: "Building"
  },
  {
    id: 97,
    name: "Microsoft PSTN Settings",
    description: "Phone system user settings",
    url: "https://dialin.teams.microsoft.com/usp/pstnconferencing",
    category: "End User",
    icon: "Phone"
  },
  {
    id: 98,
    name: "MFA Setup",
    description: "Configure multi-factor authentication",
    url: "https://account.activedirectory.windowsazure.com/proofup.aspx",
    category: "End User",
    icon: "ShieldCheck"
  },
  {
    id: 99,
    name: "My Account (Consumer)",
    description: "Personal Microsoft account",
    url: "https://account.microsoft.com",
    category: "End User",
    icon: "User"
  },
  {
    id: 100,
    name: "My Account",
    description: "Work or school account settings",
    url: "https://myaccount.microsoft.com",
    category: "End User",
    icon: "UserCircle"
  },
  {
    id: 101,
    name: "My Groups",
    description: "Manage group memberships",
    url: "https://mygroups.microsoft.com",
    category: "End User",
    icon: "Users"
  },
  {
    id: 102,
    name: "My Sign-Ins",
    description: "Review sign-in activity",
    url: "https://mysignins.microsoft.com",
    category: "End User",
    icon: "LogIn"
  },
  {
    id: 103,
    name: "Office 365 Apps",
    description: "Access Office applications",
    url: "https://www.office.com/apps",
    category: "End User",
    icon: "Grid"
  },
  {
    id: 104,
    name: "Security - Quarantined Items",
    description: "Review quarantined emails",
    url: "https://security.microsoft.com/quarantine",
    category: "End User",
    icon: "MailWarning"
  },
  {
    id: 105,
    name: "Self Service Password Reset",
    description: "Reset forgotten password",
    url: "https://passwordreset.microsoftonline.com",
    category: "End User",
    icon: "KeyRound"
  },
  
  // Third Party Tools
  {
    id: 106,
    name: "AADInternals Tenant OSINT",
    description: "Tenant information lookup",
    url: "https://aadinternals.com/osint/",
    category: "Third Party",
    icon: "Search"
  },
  {
    id: 107,
    name: "ADMX Viewer",
    description: "Group Policy ADMX viewer",
    url: "https://gpedit.tplant.com.au/",
    category: "Third Party",
    icon: "Eye"
  },
  {
    id: 108,
    name: "Azure Charts",
    description: "Azure services visual charts",
    url: "https://azurecharts.com/",
    category: "Third Party",
    icon: "PieChart"
  },
  {
    id: 109,
    name: "Azure Diagrams",
    description: "Azure architecture diagrams",
    url: "https://azurediagrams.com/",
    category: "Third Party",
    icon: "Network"
  },
  {
    id: 110,
    name: "Azure Governance Tracker",
    description: "Track Azure governance changes",
    url: "https://www.azadvertizer.net",
    category: "Third Party",
    icon: "TrendingUp"
  },
  {
    id: 111,
    name: "Azure Periodic Table",
    description: "Visual Azure services reference",
    url: "https://www.azureperiodictable.com/",
    category: "Third Party",
    icon: "Table"
  },
  {
    id: 112,
    name: "ChangeWindows",
    description: "Windows update changelog",
    url: "https://changewindows.org/",
    category: "Third Party",
    icon: "History"
  },
  {
    id: 113,
    name: "Conditional Access Documenter",
    description: "Document CA policies",
    url: "https://idpowertoys.merill.net/ca",
    category: "Third Party",
    icon: "FileText"
  },
  {
    id: 114,
    name: "Defender for Endpoint KQL Tools",
    description: "KQL queries and tools",
    url: "https://m365internals.com",
    category: "Third Party",
    icon: "Code"
  },
  {
    id: 115,
    name: "Entra Mind Maps",
    description: "Visual Entra ID concepts",
    url: "https://entra.news/p/entra-mind-maps",
    category: "Third Party",
    icon: "Brain"
  },
  {
    id: 116,
    name: "Get Security Done",
    description: "Security implementation guides",
    url: "https://dcaddick.github.io/gsd_public/",
    category: "Third Party",
    icon: "CheckCircle"
  },
  {
    id: 117,
    name: "IntuneMaps",
    description: "Intune feature diagrams",
    url: "https://intunemaps.com/",
    category: "Third Party",
    icon: "Map"
  },
  {
    id: 118,
    name: "KQL Search",
    description: "Kusto Query Language search",
    url: "https://www.kqlsearch.com/",
    category: "Third Party",
    icon: "Search"
  },
  {
    id: 119,
    name: "Message Header Analyzer",
    description: "Analyze email headers",
    url: "https://mha.azurewebsites.net",
    category: "Third Party",
    icon: "Mail"
  },
  {
    id: 120,
    name: "M365 Custom CSS Designer",
    description: "Design custom M365 themes",
    url: "https://ms365-css-designer.vercel.app",
    category: "Third Party",
    icon: "Palette"
  },
  {
    id: 121,
    name: "M365 Licensing Maps",
    description: "Visual licensing diagrams",
    url: "https://m365maps.com/",
    category: "Third Party",
    icon: "Map"
  },
  {
    id: 122,
    name: "Microsoft Acronyms Glossary",
    description: "Decode Microsoft acronyms",
    url: "https://tpm.ms/TLA",
    category: "Third Party",
    icon: "BookOpen"
  },
  {
    id: 123,
    name: "App Control Policy Wizard",
    description: "WDAC policy creation",
    url: "https://webapp-wdac-wizard.azurewebsites.net/",
    category: "Third Party",
    icon: "Wand2"
  },
  {
    id: 124,
    name: "Microsoft365DSC",
    description: "M365 configuration as code",
    url: "https://microsoft365dsc.com/",
    category: "Third Party",
    icon: "Code"
  },
  {
    id: 125,
    name: "MSShells.net",
    description: "PowerShell modules for M365",
    url: "https://msshells.net/",
    category: "Third Party",
    icon: "Terminal"
  },
  {
    id: 126,
    name: "M365 Visual Roadmap",
    description: "Visual product roadmap",
    url: "https://m365visualroadmap.net/",
    category: "Third Party",
    icon: "Map"
  },
  {
    id: 127,
    name: "Office 365 ATP Safe Links Decoder",
    description: "Decode Safe Links URLs",
    url: "https://o365atp.com",
    category: "Third Party",
    icon: "Link"
  },
  {
    id: 128,
    name: "Microsoft Store Link Generator",
    description: "Generate store download links",
    url: "https://store.rg-adguard.net/",
    category: "Third Party",
    icon: "Download"
  },
  {
    id: 129,
    name: "Regular Expressions 101",
    description: "Test and debug regex patterns",
    url: "https://regex101.com",
    category: "Third Party",
    icon: "Code"
  },
  {
    id: 130,
    name: "Tenant Availability Check",
    description: "Check tenant name availability",
    url: "https://o365.rocks",
    category: "Third Party",
    icon: "Search"
  },
  {
    id: 131,
    name: "URL Defanger",
    description: "Safely defang malicious URLs",
    url: "https://trustifi.com/url-defang-tool/",
    category: "Third Party",
    icon: "ShieldAlert"
  },
  {
    id: 132,
    name: "Dmarcian Tools",
    description: "DMARC, SPF, and DKIM tools",
    url: "https://dmarcian.com/fr/",
    category: "Third Party",
    icon: "Mail"
  },
  {
    id: 133,
    name: "What Is My Tenant ID",
    description: "Find your Azure tenant ID",
    url: "https://www.whatismytenantid.com",
    category: "Third Party",
    icon: "Search"
  },
  {
    id: 134,
    name: "Where's My Tenant",
    description: "Locate tenant partition",
    url: "https://gettenantpartitionweb.azurewebsites.net/",
    category: "Third Party",
    icon: "MapPin"
  }
];

// Documentation Resources
export const documentationResources = [
  {
    id: 1,
    title: "Microsoft 365 Security Documentation",
    description: "Comprehensive guide to M365 security features",
    url: "https://learn.microsoft.com/en-us/microsoft-365/security/",
    category: "Security",
    icon: "BookOpen"
  },
  {
    id: 2,
    title: "Microsoft Defender for Endpoint Docs",
    description: "Endpoint protection and response documentation",
    url: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/",
    category: "Endpoint Security",
    icon: "FileText"
  },
  {
    id: 3,
    title: "Azure Security Documentation",
    description: "Azure security best practices and guides",
    url: "https://learn.microsoft.com/en-us/azure/security/",
    category: "Cloud Security",
    icon: "Shield"
  },
  {
    id: 4,
    title: "Microsoft Entra ID Documentation",
    description: "Identity and access management guides",
    url: "https://learn.microsoft.com/en-us/entra/identity/",
    category: "Identity",
    icon: "Users"
  },
  {
    id: 5,
    title: "Microsoft Purview Documentation",
    description: "Data governance and compliance resources",
    url: "https://learn.microsoft.com/en-us/purview/",
    category: "Compliance",
    icon: "CheckSquare"
  },
  {
    id: 6,
    title: "Security Best Practices",
    description: "Microsoft security best practices guide",
    url: "https://learn.microsoft.com/en-us/security/",
    category: "Best Practices",
    icon: "Award"
  }
];

// GitHub Repository Info
export const githubRepo = {
  name: "MSFTACT",
  owner: "SAYANKO",
  url: "https://github.com/SAYANKO/MSFTACT",
  description: "Microsoft 365 Security Team Repository"
};

// Team Contact Information
export const teamContact = {
  jiraPortal: "https://jira.company.com",
  groupName: "M365 Security Operations Team",
  supportedProducts: [
    "Microsoft 365 Defender",
    "Microsoft Entra ID",
    "Microsoft Intune",
    "Microsoft Purview",
    "Azure Security",
    "Endpoint Protection"
  ]
};