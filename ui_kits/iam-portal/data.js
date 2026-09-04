const IAM_PERSONAS = {
  fomgr: { name: 'FO Manager', role: 'Manager · Finance Office', av: 'FM', seats: { manager: true }, bg: 'var(--tint-info-bg)', fg: 'var(--hkust-blue)' },
  foadm: { name: 'FO Department Admin', role: 'Department Admin · Finance Office', av: 'FA', seats: { deptAdmin: true }, bg: 'var(--tint-gold-bg)', fg: 'var(--hkust-gold)' },
  jspmro: { name: 'JSPM Resource Owner', role: 'Resource Owner · JSPM', av: 'JR', seats: { owner: true }, bg: 'var(--tint-cyan-bg)', fg: 'var(--tint-cyan-fg)' },
  itso: { name: 'Identity Admin', role: 'Platform Operator · ITSO', av: 'IA', seats: { platform: true }, bg: 'var(--tint-success-bg)', fg: 'var(--tint-success-fg)' },
  itsomgr: { name: 'ITSO Manager', role: 'Manager · ITSO', av: 'IM', seats: { manager: true }, bg: 'var(--tint-info-bg)', fg: 'var(--hkust-blue)' },
  itsoadm: { name: 'ITSO Department Admin', role: 'Department Admin · ITSO', av: 'IA', seats: { deptAdmin: true }, bg: 'var(--tint-gold-bg)', fg: 'var(--hkust-gold)' },
  romgr: { name: 'RO Manager', role: 'Manager · Research Office', av: 'RM', seats: { manager: true }, bg: 'var(--tint-cyan-bg)', fg: 'var(--tint-cyan-fg)' },
};
const IAM_CASES = {
  c1: { tag: 'Case 1', title: 'Position handover · Finance Office', personas: ['fomgr', 'foadm', 'jspmro', 'itso'], defaultPersona: 'fomgr', blurb: "Harvey replaces Johnley as Assistant Manager. Position access follows the HR record automatically; the leaver's application roles can be cloned to any number of colleagues within a 180-day window." },
  c2: { tag: 'Case 2', title: 'Department transfer · ITSO → Research Office', personas: ['itsomgr', 'itsoadm', 'romgr'], defaultPersona: 'itsomgr', blurb: 'Joey transfers from ITSO to the Research Office. ITSO sees a leaver whose application roles can be cloned onward; RO sees a joiner granted position access automatically. Each side sees only its own access.' },
};
const IAM_META = {
  home: ['Home & Apps', 'Your single sign-on workspace'],
  security: ['Sign-in & Security', 'Manage how you sign in: MFA methods and password'],
  request: ['Request Access', 'Browse the catalogue and request the access you need'],
  requests: ['My Requests', 'Requests you submitted, for yourself or on behalf of others'],
  access: ['My Current Access', 'Everything you hold today, with expiry where it applies'],
  approvals: ['Approvals', 'Decisions waiting on you'],
  certify: ['Access Certification', 'Periodic review of who holds sensitive access'],
  team: ['Team lifecycle', 'Joiners, movers and leavers on your team'],
  members: ['Team members', 'Your direct reports: what they hold, and any active lifecycle event'],
  profiles: ['Identity profiles', 'People directory · Finance Office'],
  ops: ['Lifecycle ops', 'HR-driven events across the university · monitoring console'],
  audit: ['Audit log', 'Every grant, revoke, approval and transfer · actor and timestamp'],
};
const IAM_APPS = [
  ['Microsoft 365', 'Mail · Teams · OneDrive', 'layout-grid', 'navy'], ['Outlook Email', 'Staff mailbox', 'mail', 'cyan'], ['HRMS', 'Leave · payslip', 'users', 'green'], ['ECM', 'Documents · records', 'database', 'cyan'],
  ['Library', 'Catalogue · e-resources', 'book-open', 'navy'], ['VPN', 'Remote access', 'shield', 'cyan'], ['Zoom', 'Meetings', 'video', 'navy'], ['ServiceNow', 'IT helpdesk', 'life-buoy', 'gold'],
];
const IAM_SYSTEMS = [
  { key: 'CADS', name: 'CADS', full: 'Central Directory Services', icon: 'building-2', tone: 'navy', roles: ['General User Account', 'Directory Editor', 'IT Administrator'] },
  { key: 'HRMS', name: 'HRMS', full: 'HR Management System', icon: 'users', tone: 'green', sensitive: true, roles: ['Enterprise Portal User', 'Department HR Viewer', 'Leave Approver'] },
  { key: 'ECM', name: 'ECM', full: 'Enterprise Content Management', icon: 'database', tone: 'cyan', roles: ['Policy read only', 'Department Admin', 'Confidential Records Manager'] },
  { key: 'SIS', name: 'PeopleSoft SIS', full: 'Student Information System', icon: 'graduation-cap', tone: 'gold', sensitive: true, roles: ['Academic Advisor', 'Registrar Clerk', 'Programme Viewer'] },
  { key: 'PMS', name: 'PMS', full: 'Project Management System', icon: 'briefcase', tone: 'navy', roles: ['Project Viewer', 'Project Manager (Lvl 1)', 'Portfolio Admin'] },
  { key: 'FIN', name: 'Finance / ERP', full: 'Budget & expense system', icon: 'wallet', tone: 'gold', roles: ['Expense Submitter', 'Budget Viewer', 'Finance Approver'] },
];
const IAM_CLONE_ROWS = [
  { sys: 'CADS', role: 'General User Account', owned: true, tone: 'neutral', st: 'Already owned', ic: 'check' },
  { sys: 'ECM', role: 'Department Admin', tone: 'success', st: 'Available', ic: 'plus' },
  { sys: 'HRMS', role: 'Department HR Viewer', tone: 'warning', st: 'Sensitive · time-bound', ic: 'clock' },
  { sys: 'PMS', role: 'Project Manager (Lvl 1)', tone: 'success', st: 'Available', ic: 'plus' },
];
const IAM_EVENTS = [
  { id: 'LVR-2213', type: 'leaver', name: 'Johnley', meta: 'Assistant Manager · Planning & Budgeting', when: 'Last day 04 Aug 2026', bucket: 'needs', status: ['gold', 'stamp', 'Decision pending'] },
  { id: 'LVR-2050', type: 'leaver', name: 'TAM Ka Yee', meta: 'Officer · Finance Office', when: 'Last day 15 May 2026', bucket: 'needs', status: ['gold', 'stamp', 'Decision pending'] },
  { id: 'JNR-2214', type: 'joiner', name: 'Harvey', meta: 'Assistant Manager · Planning & Budgeting', when: 'Effective 01 Aug 2026', bucket: 'completed', status: ['neutral', 'check', 'Completed'] },
  { id: 'JNR-2190', type: 'joiner', name: 'Summer intern batch (3 people)', meta: 'Summer intern · Finance Office', when: 'Effective 02 Jul 2026', bucket: 'completed', status: ['neutral', 'check', 'Completed'] },
  { id: 'LVR-2101', type: 'leaver', name: 'CHOW Lai Fan', meta: 'Senior Clerk · Finance Office', when: 'Last day 30 Jun 2026', bucket: 'completed', status: ['neutral', 'check', 'Completed'] },
  { id: 'LVR-1900', type: 'leaver', name: 'LAM Wing', meta: 'Senior Officer · Finance Office', when: 'Last day 12 Dec 2025', bucket: 'completed', status: ['danger', 'calendar-x', 'Window closed · roles lapsed'] },
];
const IAM_REPORTS = [
  { n: 'Johnley', email: 'johnley@ust.hk', title: 'Assistant Manager', ev: 'LVR-2213', evTone: 'warning', status: 'Active' },
  { n: 'Harvey', email: 'harvey@ust.hk', title: 'Assistant Manager', ev: 'JNR-2214', evTone: 'info', status: 'Active' },
  { n: 'WONG Ka Ming', email: 'kaming@ust.hk', title: 'Finance Officer', status: 'Active' },
  { n: 'CHEUNG Sara', email: 'sara@ust.hk', title: 'Senior Clerk', status: 'Active' },
  { n: 'FO Department Admin', email: 'fo.deptadmin@ust.hk', title: 'Department Admin', status: 'Active' },
];
Object.assign(window, { IAM_PERSONAS, IAM_CASES, IAM_META, IAM_APPS, IAM_SYSTEMS, IAM_CLONE_ROWS, IAM_EVENTS, IAM_REPORTS });
