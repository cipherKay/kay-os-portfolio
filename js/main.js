"use strict";
const os=document.getElementById('os'),area=document.getElementById('window-area'),active=document.getElementById('active-app'),menu=document.getElementById('start-menu'),start=document.getElementById('start');
let lastFocus=null, topZ=15;
const apps={
missionx:{title:'Mission-X · Operation Red Planet',html:'<div data-mission-x></div>'},
about:{title:'About Kay',html:`<div class="section-label">PROFILE / ABOUT</div><h2>Building better systems.</h2><p>I'm Kay, an IT support and automation professional pursuing a B.S. in Cybersecurity at Southern New Hampshire University.</p><p>I connect practical IT operations, software development, cybersecurity, and process improvement to make technology work better for people.</p><span class="pill">IT Operations</span><span class="pill">Cybersecurity</span><span class="pill">Automation</span><span class="pill">Development</span>`},
projects:{title:'Project Explorer',html:`<div class="explorer"><div class="explorer-intro"><div class="section-label">KAY OS / PROJECT EXPLORER / v3.3</div><h2>Explore the work behind the systems.</h2><p>Real-world technical projects, presented as public-safe case studies. Select a project to see the challenge, implementation, and impact.</p><div class="explorer-filters" role="group" aria-label="Filter projects"><button class="filter-chip selected" data-filter="all" aria-pressed="true">All projects</button><button class="filter-chip" data-filter="automation" aria-pressed="false">Automation</button><button class="filter-chip" data-filter="development" aria-pressed="false">Development</button><button class="filter-chip" data-filter="security" aria-pressed="false">Security</button></div></div><button type="button" class="explorer-back" data-explorer-back>← Back to projects</button><div class="explorer-layout"><div class="explorer-list" aria-label="Projects"><button class="explorer-item selected" data-project="reporting" data-category="automation"><span class="explorer-glyph">▥</span><span><strong>Reporting Automation</strong><small>Power BI · Power Automate</small></span><b>94%</b></button><button class="explorer-item" data-project="recognition" data-category="automation"><span class="explorer-glyph">✧</span><span><strong>Employee Recognition</strong><small>Power Apps · SharePoint</small></span><b>600+</b></button><button class="explorer-item" data-project="devices" data-category="development"><span class="explorer-glyph">⌘</span><span><strong>Device Tracking</strong><small>Python · Django</small></span><b>DB</b></button><button class="explorer-item" data-project="security" data-category="security"><span class="explorer-glyph">⬡</span><span><strong>Security Lab</strong><small>Networking · Defense</small></span><b>LAB</b></button><button class="explorer-item" data-project="orders" data-category="automation"><span class="explorer-glyph">▣</span><span><strong>Device Ordering & Status Notifications</strong><small>Power Apps · SharePoint · Automate</small></span><b>FLOW</b></button><button class="explorer-item" data-project="library" data-category="automation"><span class="explorer-glyph">▣</span><span><strong>SharePoint Document Library</strong><small>SharePoint · Information Architecture</small></span><b>DOCS</b></button><button class="explorer-item" data-project="newsletter" data-category="automation"><span class="explorer-glyph">▤</span><span><strong>SharePoint Newsletter Library</strong><small>Separate pages · Combined PDF · Engagement</small></span><b>PDF</b></button><button class="explorer-item" data-project="revamp" data-category="development"><span class="explorer-glyph">▣</span><span><strong>SharePoint Site Revamp</strong><small>SharePoint · UX · Governance</small></span><b>SITE</b></button><button class="explorer-item" data-project="redesign" data-category="automation"><span class="explorer-glyph">▣</span><span><strong>Reporting Redesign</strong><small>Power BI · UX · Reporting</small></span><b>BI</b></button></div><div class="explorer-detail" data-project-detail aria-live="polite"></div></div><p class="note">All examples are summaries or educational demonstrations. No private employer systems, credentials, or data are published.</p></div>`},
automation:{title:'Automation Studio',html:`<div class="section-label">PROJECT / AUTOMATION</div><h2>Reporting automation</h2><div class="metric">94% faster</div><p>Reduced a recurring manual reporting workflow from approximately eight hours to thirty minutes.</p><p><strong>Challenge:</strong> Time-consuming manual collection, transformation, and reporting.</p><p><strong>Solution:</strong> Automated refresh and reporting using Power BI, Power Automate, SharePoint, and Excel.</p><span class="pill">Power BI</span><span class="pill">Power Automate</span><span class="pill">Excel</span><p class="note">Portfolio case study: private employer data and internal systems are not reproduced.</p>`},
recognition:{title:'Employee Recognition App',html:`<div class="section-label">PROJECT / APPLICATION</div><h2>Employee recognition platform</h2><p>A Power Apps solution designed for department-wide recognition, with approvals, points tracking, notifications, and role-based controls.</p><p><strong>Approach:</strong> Power Apps interface, SharePoint-backed records, and Power Automate workflows for approvals and messaging.</p><span class="pill">Power Apps</span><span class="pill">Power Automate</span><span class="pill">SharePoint</span><p class="note">Architecture summary only; no private application or employee records are included.</p>`},
devices:{title:'Device Tracking Database',html:`<div class="section-label">PROJECT / DEVELOPMENT</div><h2>Device tracking database</h2><p>Python and Django-based device management workflows supporting inventory visibility and reliable device tracking.</p><p><strong>Focus:</strong> Data modeling, device records, and repeatable operations.</p><span class="pill">Python</span><span class="pill">Django</span><span class="pill">Database Design</span><p class="note">Project overview only; no production device data is included.</p>`},
orders:{title:'Device Ordering Workflow',html:`<div class="section-label">PROJECT / AUTOMATION · INTERACTIVE DEMO</div><h2>Device ordering & status notifications</h2><p>Explore a fictional example of a request form feeding a tracking list. Changing the status prepares a notification for the requester.</p><div class="demo-grid"><form id="device-order-form" class="demo-card"><h3>New device request</h3><label>Requester name<input name="requester" maxlength="60" required placeholder="e.g., Jordan Lee"></label><label>Device type<select name="device"><option>Laptop</option><option>Tablet</option><option>Workstation</option><option>Mobile device</option></select></label><label>Request details<input name="details" maxlength="100" placeholder="Optional notes"></label><button class="demo-primary" type="submit">Add request to list</button></form><div class="demo-card"><h3>Device order tracking list</h3><p class="note">Edit the status field to simulate a SharePoint list update.</p><div class="demo-table-wrap"><table class="demo-table"><thead><tr><th>ID</th><th>Requester</th><th>Device</th><th>Status</th></tr></thead><tbody data-order-rows></tbody></table></div></div></div><div class="demo-card" style="margin-top:14px"><h3>Notification preview</h3><div data-notification-preview aria-live="polite">Update an order status to see the client notification that would be generated.</div><p class="note">Demo only. No emails are sent and no requests are saved to a server. In production, a SharePoint list change can trigger a Power Automate notification flow.</p></div>`},
library:{title:'SharePoint Document Library',html:`<div class="section-label">PROJECT / SHAREPOINT</div><h2>SharePoint document library</h2><p>Organized documents into accessible libraries, with consistent navigation, templates and content structures to support faster retrieval and collaboration.</p><h3>Design approach</h3><p>Document categorization, library organization, reusable templates and clearer paths to commonly used resources.</p><div class="explorer-stack"><span class="pill">SharePoint</span><span class="pill">Document Management</span><span class="pill">Information Architecture</span></div><p class="note">Portfolio summary; no internal documents or confidential links are included.</p>`},
newsletter:{title:'SharePoint Newsletter Library',html:`<div class="section-label">PROJECT / SHAREPOINT · INTERACTIVE DEMO</div><h2>Newsletter library & page engagement</h2><p>Each newsletter page is maintained as a separate SharePoint library item for page-level engagement visibility, while the published PDF presents the pages as one seamless issue.</p><div class="nl-app"><div class="nl-toolbar"><label>Newsletter issue <select id="nl-issue"><option value="oct">October Operations</option><option value="sep">September Spotlight</option></select></label><button type="button" id="nl-reset">Reset demo views</button></div><div class="nl-layout"><section class="nl-card"><h3>SharePoint page library</h3><p class="note">Select a separately stored page to preview it and record a fictional page view.</p><div id="nl-pages"></div></section><section class="nl-card"><h3>Seamless PDF reader simulation</h3><p class="note">Pages appear together in issue order, as they would in a combined newsletter PDF.</p><div id="nl-reader" class="nl-reader"></div></section><section class="nl-card"><h3>Viewer engagement</h3><p class="note">Illustrative page-level view counts, not actual SharePoint analytics.</p><div id="nl-chart"></div><div id="nl-summary" class="nl-summary" aria-live="polite"></div></section></div></div><p class="note">Demonstration only: fictional newsletter content and local simulated analytics. No SharePoint or PDF service is connected.</p>`},
revamp:{title:'SharePoint Site Revamp',html:`<div class="section-label">PROJECT / MODERNIZATION</div><h2>SharePoint site revamp</h2><p>Modernized collaboration spaces to make resources easier to discover, organize and maintain.</p><h3>Approach</h3><p>Restructured site navigation and libraries, improved page organization, and introduced reusable content patterns to encourage adoption.</p><h3>Reported impact</h3><p>Workstream estimates included 35–50% faster information retrieval and increased adoption; specific attribution and measurement should be confirmed before public use.</p><div class="explorer-stack"><span class="pill">SharePoint Online</span><span class="pill">UX</span><span class="pill">Content Governance</span></div>`},
redesign:{title:'Reporting Redesign',html:`<div class="section-label">PROJECT / REPORTING DESIGN</div><h2>Reporting redesign</h2><p>Reworked reporting layouts and delivery so stakeholders could locate useful metrics, understand trends and act on data more efficiently.</p><h3>Design priorities</h3><p>Clear KPI hierarchy, standardized views, repeatable refresh processes, and more useful reporting experiences across teams.</p><div class="explorer-stack"><span class="pill">Power BI</span><span class="pill">Power Query</span><span class="pill">Data Visualization</span><span class="pill">Stakeholder Reporting</span></div><p class="note">Public-safe case study. No confidential dashboards or datasets are shown.</p>`},
security:{title:'Security Lab',html:`<div class="section-label">WORKSPACE / SECURITY</div><h2>Security Lab</h2><p>A growing space for hands-on learning in network security, defensive controls, access management, and incident response.</p><div class="app-grid"><div class="app-project"><strong>⬡ Network Defense</strong><small>Security controls and network fundamentals</small></div><div class="app-project"><strong>◈ Incident Response</strong><small>Investigation and response workflows</small></div></div><p class="note">Detailed labs and verified walkthroughs will be added as they are completed.</p>`},
terminal:{title:'KAY Terminal',html:`<div class="section-label">TOOLS / TERMINAL</div><h2>System console</h2><div class="terminal-lines">kay@portfolio:~$ whoami\nKay — cybersecurity / automation / development\n\nkay@portfolio:~$ ls projects/\nreporting-automation  recognition-app  device-tracking\n\nkay@portfolio:~$ status\nKAY OS v3.3 — ready to explore_</div>`},
contact:{title:'Contact & Links',html:`<div class="section-label">CONNECT / LINKS</div><h2>Let's connect.</h2><p>Explore my public projects and code on GitHub.</p><p><a href="https://github.com/cipherKay" target="_blank" rel="noopener noreferrer">github.com/cipherKay ↗</a></p><p>Additional contact details can be added after verification.</p>`}
};

const projectDetails={
reporting:{label:'AUTOMATION / CASE STUDY',name:'Reporting Automation',metric:'8 hours → 30 minutes',metricLabel:'94% less manual processing time',challenge:'Recurring reporting required lengthy manual data collection, preparation, and distribution.',solution:'Connected Power BI, Power Automate, SharePoint and Excel to standardize datasets, automate refreshes and reduce repetitive steps.',impact:'Reduced an approximately eight-hour reporting workflow to thirty minutes; documented broader time savings across reporting workstreams.',stack:['Power BI','Power Automate','SharePoint','Excel'],app:'automation'},
recognition:{label:'POWER PLATFORM / APPLICATION',name:'Employee Recognition App',metric:'600+ users',metricLabel:'Department-wide solution',challenge:'Recognition points, approvals and notifications needed a more consistent workflow.',solution:'Built a Power Apps interface backed by SharePoint, with Power Automate approval flows, notifications, role-based limits and a points ledger.',impact:'Designed for a department-wide audience of 600+ users and approximately 1,500 monthly points.',stack:['Power Apps','Power Automate','SharePoint','Teams'],app:'recognition'},
devices:{label:'DEVELOPMENT / DATABASE',name:'Device Tracking Database',metric:'Python + Django',metricLabel:'Inventory workflow modernization',challenge:'Device records and inventory workflows needed clearer tracking and repeatable processes.',solution:'Developed database-backed device tracking workflows with Django and Python to organize inventory records and operational updates.',impact:'Improved the structure and maintainability of device management workflows; no unverified numerical impact claimed.',stack:['Python','Django','Databases'],app:'devices'},
orders:{label:'AUTOMATION / WORKFLOW',name:'Device Ordering & Status Notifications',metric:'Form → List → Alert',metricLabel:'Request-to-notification workflow',challenge:'Requesters needed visibility into device orders without repeatedly asking for updates.',solution:'Designed a device ordering form feeding a tracking list; changes to a status field trigger client notifications through an automated workflow.',impact:'Improved status visibility and communication; no numerical impact asserted.',stack:['Forms','SharePoint Lists','Power Automate','Notifications'],app:'orders'},
library:{label:'SHAREPOINT / DOCUMENT MANAGEMENT',name:'SharePoint Document Library',metric:'Structured content',metricLabel:'Faster document discovery',challenge:'Scattered files and inconsistent organization made resources difficult to locate.',solution:'Organized document libraries, templates and navigation around common user needs.',impact:'Made content easier to discover and maintain; employer content remains private.',stack:['SharePoint','Document Libraries','Templates'],app:'library'},
newsletter:{label:'SHAREPOINT / PUBLISHING & ANALYTICS',name:'SharePoint Newsletter Library',metric:'Separate pages → one PDF',metricLabel:'Page-level engagement and seamless reading',challenge:'Publish a cohesive newsletter while retaining visibility into engagement with individual pages.',solution:'Store newsletter pages separately in a SharePoint library, then present them as one seamless linked PDF issue; maintain a page-oriented view for engagement reporting.',impact:'Combines a unified reading experience with page-level engagement visibility. No specific audience metrics asserted.',stack:['SharePoint','Document Libraries','PDF Publishing','Engagement Analytics'],app:'newsletter'},
revamp:{label:'SHAREPOINT / MODERNIZATION',name:'SharePoint Site Revamp',metric:'Site modernization',metricLabel:'Navigation and adoption',challenge:'Existing collaboration spaces needed clearer structure and more accessible resources.',solution:'Refreshed SharePoint site organization, navigation, libraries and reusable content patterns.',impact:'Reported improvements in retrieval and adoption across modernization efforts; project-level attribution should be verified.',stack:['SharePoint Online','UX','Information Architecture'],app:'revamp'},
redesign:{label:'REPORTING / USER EXPERIENCE',name:'Reporting Redesign',metric:'Decision-ready views',metricLabel:'KPI hierarchy and reporting UX',challenge:'Stakeholders needed clearer, more consistent reporting outputs.',solution:'Redesigned report structure, visuals, KPIs and delivery workflows using Power BI and related tools.',impact:'Improved readability and repeatability of reporting; no new quantitative impact claimed.',stack:['Power BI','Power Query','Reporting','UX'],app:'redesign'},
security:{label:'CYBERSECURITY / LEARNING',name:'Security Lab',metric:'Defensive focus',metricLabel:'Hands-on learning portfolio',challenge:'Translate networking and security coursework into demonstrable defensive skills.',solution:'Organize learning artifacts around network security, access controls and incident response. Detailed verified lab walkthroughs will be published as they are completed.',impact:'Educational work in progress; no production security environment or employer data is shown.',stack:['Networking','Access Control','Incident Response'],app:'security'}
};
function showProject(win,id){const data=projectDetails[id];if(!data)return;const panel=win.querySelector('[data-project-detail]');if(!panel)return;win.querySelectorAll('[data-project]').forEach(el=>{const selected=el.dataset.project===id;el.classList.toggle('selected',selected);el.setAttribute('aria-pressed',String(selected))});panel.innerHTML=`<div class="section-label">${data.label}</div><h3>${data.name}</h3><div class="explorer-metric"><strong>${data.metric}</strong><span>${data.metricLabel}</span></div><h4>Challenge</h4><p>${data.challenge}</p><h4>Implementation</h4><p>${data.solution}</p><h4>Outcome</h4><p>${data.impact}</p><div class="explorer-stack">${data.stack.map(tag=>`<span class="pill">${tag}</span>`).join('')}</div><button class="explorer-open" data-app="${data.app}">Open interactive demo ↗</button>`;if(window.matchMedia("(max-width:700px)").matches && win.dataset.explorerUserSelected==="true"){win.classList.add("explorer-show-detail");const content=win.querySelector(".window-content");if(content)content.scrollTop=0}}
document.addEventListener('click',e=>{const back=e.target.closest('[data-explorer-back]');if(back){const win=back.closest('.window');if(win){win.classList.remove('explorer-show-detail');win.dataset.explorerUserSelected='false';win.querySelector('.window-content').scrollTop=0;}return;}const filter=e.target.closest('[data-filter]');if(filter){const win=filter.closest('.window');if(!win)return;const type=filter.dataset.filter;win.querySelectorAll('[data-filter]').forEach(el=>{const selected=el===filter;el.classList.toggle('selected',selected);el.setAttribute('aria-pressed',String(selected))});const items=[...win.querySelectorAll('[data-project]')];items.forEach(el=>el.hidden=type!=='all'&&el.dataset.category!==type);const chosen=items.find(el=>!el.hidden);if(chosen)showProject(win,chosen.dataset.project);return}const item=e.target.closest('[data-project]');if(item){const win=item.closest('.window');if(win){win.dataset.explorerUserSelected='true';showProject(win,item.dataset.project)}}});
function launch(app){if(os.classList.contains('hidden')){lastFocus=document.activeElement;os.classList.remove('hidden');document.body.classList.add('os-open');os.focus()}if(app)openApp(app)}
function exit(){os.classList.add('hidden');document.body.classList.remove('os-open');menu.classList.add('hidden');start.setAttribute('aria-expanded','false');area.replaceChildren();active.textContent='Desktop ready';lastFocus?.focus?.()}
function windowBounds(win){
  const margin=window.innerWidth<=700?10:20;
  const top=window.innerWidth<=700?74:82;
  const bottom=window.innerWidth<=700?68:74;
  return {margin,top,bottom,width:Math.max(280,window.innerWidth-margin*2),height:Math.max(200,window.innerHeight-top-bottom)};
}
function fitWindow(win,center=false){
  if(!win.isConnected)return;
  const b=windowBounds(win);
  if(win.classList.contains('is-maximized')){win.style.left=b.margin+'px';win.style.top=b.top+'px';return;}
  const r=win.getBoundingClientRect();
  const width=Math.min(r.width,b.width),height=Math.min(r.height,b.height);
  if(r.width>b.width)win.style.width=b.width+'px';
  if(r.height>b.height)win.style.height=b.height+'px';
  const currentX=Number.parseFloat(win.style.left);
  const x=center?Math.max(b.margin,(window.innerWidth-width)/2):Math.max(b.margin,Math.min(Number.isFinite(currentX)?currentX:r.left,window.innerWidth-width-b.margin));
  const currentY=Number.parseFloat(win.style.top);
  const y=center?Math.max(b.top,Math.min((window.innerHeight-height)/2,window.innerHeight-height-b.bottom)):Math.max(b.top,Math.min(Number.isFinite(currentY)?currentY:r.top,window.innerHeight-height-b.bottom));
  win.style.left=Math.round(x)+'px';win.style.top=Math.round(y)+'px';
}
function openApp(id){
 const a=apps[id];if(!a)return;
 menu.classList.add('hidden');start.setAttribute('aria-expanded','false');
 let win=area.querySelector(`[data-window="${id}"]`);
 if(win){win.style.zIndex=++topZ;fitWindow(win);win.focus();return;}
 win=document.createElement('section');win.className='window';win.dataset.window=id;win.tabIndex=-1;
 win.setAttribute('role','region');win.setAttribute('aria-label',a.title);win.style.zIndex=++topZ;
 const bar=document.createElement('div');bar.className='window-bar';
 const title=document.createElement('span');title.className='window-title';title.textContent='◈  '+a.title;
 const controls=document.createElement('div');controls.className='window-controls';
 const maximize=document.createElement('button');maximize.type='button';maximize.className='window-maximize';maximize.textContent='□';maximize.setAttribute('aria-label','Maximize '+a.title);
 maximize.setAttribute('aria-pressed','false');
 maximize.addEventListener('click',()=>{
   if(!win.classList.contains('is-maximized')){win.dataset.restoreLeft=win.style.left;win.dataset.restoreTop=win.style.top;}
   const isMax=win.classList.toggle('is-maximized');
   maximize.textContent=isMax?'❐':'□';maximize.setAttribute('aria-label',(isMax?'Restore ':'Maximize ')+a.title);maximize.setAttribute('aria-pressed',String(isMax));
   if(!isMax){win.style.left=win.dataset.restoreLeft||'';win.style.top=win.dataset.restoreTop||'';}
   fitWindow(win);
 });
 const close=document.createElement('button');close.type='button';close.textContent='✕';close.setAttribute('aria-label','Close '+a.title);
 close.addEventListener('click',()=>{win.remove();active.textContent=area.lastElementChild?.getAttribute('aria-label')||'Desktop ready'});
 controls.append(maximize,close);bar.append(title,controls);
 const body=document.createElement('div');body.className='window-content';body.innerHTML=a.html;win.append(bar,body);
 area.append(win);fitWindow(win,true);
 if(id==='projects')showProject(win,'reporting');if(id==='orders')renderOrders(win);if(id==='missionx')window.MissionX?.init(win);
 active.textContent=a.title;win.addEventListener('pointerdown',()=>win.style.zIndex=++topZ);
 enableDrag(win,bar);win.focus();
}
function enableDrag(win,handle){
 let initial=null;
 handle.addEventListener('pointerdown',e=>{
  if(win.classList.contains('is-maximized')||e.target.closest('button')||e.button!==0||window.innerWidth<=700)return;
  const r=win.getBoundingClientRect();initial={x:e.clientX,y:e.clientY,left:r.left,top:r.top};
  handle.setPointerCapture(e.pointerId);
 });
 handle.addEventListener('pointermove',e=>{
  if(!initial)return;
  const b=windowBounds(win),r=win.getBoundingClientRect();
  win.style.left=Math.round(Math.max(b.margin,Math.min(window.innerWidth-r.width-b.margin,initial.left+e.clientX-initial.x)))+'px';
  win.style.top=Math.round(Math.max(b.top,Math.min(window.innerHeight-r.height-b.bottom,initial.top+e.clientY-initial.y)))+'px';
 });
 const stop=()=>{initial=null;fitWindow(win)};
 handle.addEventListener('pointerup',stop);handle.addEventListener('pointercancel',stop);
}
window.addEventListener('resize',()=>area.querySelectorAll('.window').forEach(win=>fitWindow(win)));

// Local-only sample data for the Device Ordering demo. Never sends real requests.
const statuses=['Submitted','Approved','Ordered','Shipped','Delivered','Cancelled'];
const sampleOrders=[{id:1001,requester:'Jordan Lee',device:'Laptop',status:'Submitted'}];
let nextOrder=1002;
function renderOrders(win){const tbody=win.querySelector('[data-order-rows]');if(!tbody)return;tbody.replaceChildren();sampleOrders.forEach(order=>{const tr=document.createElement('tr');[order.id,order.requester,order.device].forEach(value=>{const td=document.createElement('td');td.textContent=value;tr.append(td)});const td=document.createElement('td');const select=document.createElement('select');select.setAttribute('aria-label','Status for order '+order.id);select.dataset.orderId=order.id;statuses.forEach(st=>{const option=document.createElement('option');option.value=st;option.textContent=st;option.selected=st===order.status;select.append(option)});td.append(select);tr.append(td);tbody.append(tr)})}
document.addEventListener('submit',e=>{if(e.target.id!=='device-order-form')return;e.preventDefault();const win=e.target.closest('.window');const form=new FormData(e.target);const requester=String(form.get('requester')||'').trim();if(!requester){e.target.reportValidity();return;}sampleOrders.push({id:nextOrder++,requester,device:String(form.get('device')),status:'Submitted'});renderOrders(win);e.target.reset();win.querySelector('[data-notification-preview]').textContent='Request added successfully to the demo tracking list. Change its status to preview a client notification.'});
document.addEventListener('change',e=>{const select=e.target.closest('[data-order-id]');if(!select)return;const order=sampleOrders.find(x=>x.id===Number(select.dataset.orderId));if(!order)return;order.status=select.value;const win=select.closest('.window');win.querySelector('[data-notification-preview]').textContent=`To: ${order.requester} (demo requester) | Subject: Device request #${order.id} update | Your ${order.device.toLowerCase()} request status is now: ${order.status}. This is a preview; no message was sent.`});


// KAY OS v4.2 — restore portfolio/desktop controls removed in an earlier build.
// Delegate app clicks so dynamically created Project Explorer buttons also work.
document.addEventListener('click', (event) => {
  const appButton = event.target.closest('[data-app]');
  if (appButton) {
    event.preventDefault();
    const id = appButton.dataset.app;
    if (apps[id]) launch(id);
    return;
  }
  const launcher = event.target.closest('[data-launch]');
  if (launcher) {
    event.preventDefault();
    const fromProjects = Boolean(launcher.closest('#projects'));
    launch(fromProjects ? 'projects' : undefined);
  }
});

const exitButton = document.getElementById('exit-os');
if (exitButton) exitButton.addEventListener('click', exit);
if (start) start.addEventListener('click', () => {
  const willOpen = menu.classList.contains('hidden');
  menu.classList.toggle('hidden', !willOpen);
  start.setAttribute('aria-expanded', String(willOpen));
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !os.classList.contains('hidden')) {
    if (!menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      start.setAttribute('aria-expanded','false');
    } else {
      const topWindow = [...area.querySelectorAll('.window')]
        .sort((a,b) => Number(b.style.zIndex) - Number(a.style.zIndex))[0];
      if (topWindow) topWindow.querySelector('.window-controls button:last-child')?.click();
      else exit();
    }
  }
});
const themeButton = document.getElementById('theme');
if (themeButton) themeButton.addEventListener('click', () => document.body.classList.toggle('light'));
const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();
const clockNode = document.getElementById('clock');
function updateClock() { if(clockNode) clockNode.textContent = new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}); }
updateClock();
setInterval(updateClock, 30000);

// Support links previously published with #/projects while preserving normal #projects anchors.
function handlePortfolioRoute() {
  if (location.hash === '#/projects') launch('projects');
}
window.addEventListener('hashchange', handlePortfolioRoute);
handlePortfolioRoute();

window.addEventListener("resize",()=>{if(window.innerWidth>700)document.querySelectorAll(".window.explorer-show-detail").forEach(w=>w.classList.remove("explorer-show-detail"));});
