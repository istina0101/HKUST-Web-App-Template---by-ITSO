const RC_PROJECTS = [
  { id: 'RC-2041', name: 'Coastal wind-field modelling', pi: 'Prof. CHAN Wing Hong', dept: 'Civil & Environmental Engineering', school: 'SENG', used: 82, cpu: '412k', storage: '18 TB', status: 'Active', expires: '31 Dec 2026' },
  { id: 'RC-2038', name: 'Protein folding ensembles', pi: 'Prof. LEUNG Mei Ling', dept: 'Chemical & Biological Engineering', school: 'SENG', used: 96, cpu: '1.2M', storage: '64 TB', status: 'Expiring', expires: '30 Sep 2026' },
  { id: 'RC-2031', name: 'Large-language-model evaluation', pi: 'Dr. WONG Ka Fai', dept: 'Computer Science & Engineering', school: 'SENG', used: 41, cpu: '2.8M', storage: '120 TB', status: 'Active', expires: '28 Feb 2027' },
  { id: 'RC-2027', name: 'Pearl River Delta air quality', pi: 'Prof. TAM Siu Ming', dept: 'Environment & Sustainability', school: 'IPO', used: 67, cpu: '380k', storage: '22 TB', status: 'Active', expires: '31 Oct 2026' },
  { id: 'RC-2019', name: 'Quantum many-body dynamics', pi: 'Prof. LAU Yuen Ting', dept: 'Physics', school: 'SSCI', used: 100, cpu: '640k', storage: '9 TB', status: 'Suspended', expires: '15 Aug 2026' },
  { id: 'RC-2012', name: 'Market microstructure simulation', pi: 'Dr. HO Chi Keung', dept: 'Finance', school: 'SBM', used: 23, cpu: '96k', storage: '4 TB', status: 'Active', expires: '30 Jun 2027' },
  { id: 'RC-2005', name: 'Cantonese speech corpus', pi: 'Prof. NG Sau Lan', dept: 'Humanities', school: 'SHSS', used: 58, cpu: '150k', storage: '31 TB', status: 'Active', expires: '31 Mar 2027' },
];
const RC_REQUESTS = [
  { id: 'REQ-5120', project: 'RC-2038', what: 'Extend allocation · +400k CPU hours', by: 'Prof. LEUNG Mei Ling', when: '2 hours ago', tone: 'warning', st: 'Pending review' },
  { id: 'REQ-5118', project: 'RC-2031', what: 'Add 8 GPU nodes for 30 days', by: 'Dr. WONG Ka Fai', when: 'Yesterday', tone: 'warning', st: 'Pending review' },
  { id: 'REQ-5115', project: 'RC-2027', what: 'Storage increase · 22 → 40 TB', by: 'Prof. TAM Siu Ming', when: '2 days ago', tone: 'success', st: 'Approved' },
  { id: 'REQ-5109', project: 'RC-2019', what: 'Reinstate suspended project', by: 'Prof. LAU Yuen Ting', when: '4 days ago', tone: 'danger', st: 'Rejected' },
];
const RC_ACTIVITY = [
  { time: '03 Sep 2026 09:12', text: 'Allocation extended · RC-2027 · +40 TB storage', meta: 'ITSO Research Computing · REQ-5115' },
  { time: '02 Sep 2026 17:40', text: 'Member added · CHEUNG Ka Yan (RA) · RC-2031', meta: 'Dr. WONG Ka Fai' },
  { time: '02 Sep 2026 08:05', text: 'Project suspended · RC-2019 · allocation exhausted', meta: 'System · policy RC-07' },
  { time: '01 Sep 2026 14:22', text: 'Monthly usage report sent to 38 PIs', meta: 'System' },
];
const RC_MEMBERS = [
  { n: 'Prof. CHAN Wing Hong', role: 'Principal investigator', email: 'wchan@ust.hk', jobs: 312, status: 'Active' },
  { n: 'LI Jia Hao', role: 'PhD student', email: 'jhli@connect.ust.hk', jobs: 1204, status: 'Active' },
  { n: 'CHEUNG Ka Yan', role: 'Research assistant', email: 'kycheung@ust.hk', jobs: 87, status: 'Active' },
  { n: 'Dr. SO Pui Shan', role: 'Postdoctoral fellow', email: 'psso@ust.hk', jobs: 0, status: 'Pending' },
];
const RC_NAV = [
  { pg: 'dashboard', icon: 'layout-grid', label: 'Dashboard' }, { label: 'Research computing' }, { pg: 'projects', icon: 'briefcase', label: 'Projects' }, { pg: 'requests', icon: 'clipboard-list', label: 'Requests', count: 2 }, { pg: 'wizard', icon: 'circle-plus', label: 'New request' },
  { label: 'Account' }, { pg: 'settings', icon: 'settings', label: 'Settings' }, { pg: 'states', icon: 'circle-alert', label: 'Empty & error states' },
];
const RC_META = { dashboard: ['Dashboard', 'Research computing at a glance · September 2026'], projects: ['Projects', 'All allocations you administer'], requests: ['Requests', 'Allocation changes waiting on you'], wizard: ['New request', 'Ask for compute, GPU or storage on an existing project'], settings: ['Settings', 'Profile, notifications and account'], states: ['Empty & error states', 'What screens show when there is nothing, or something went wrong'], detail: ['Project', ''] };
Object.assign(window, { RC_PROJECTS, RC_REQUESTS, RC_ACTIVITY, RC_MEMBERS, RC_NAV, RC_META });
