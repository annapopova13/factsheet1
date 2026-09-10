/* ---------------- data ---------------- */
const barriers = [
  {
    tag: "Barrier 01",
    title: "Policy Implementation, Coherence & Compliance",
    solutions: [
      "Strengthen and harmonise national OA policies, including clear mandates for secondary publication.",
      "Create or reinforce OA / Open Science task forces bringing together ministries, funders, universities, libraries, publishers and infrastructures.",
      "Provide clear national and institutional guidance on copyright and licensing."
    ]
  },
  {
    tag: "Barrier 02",
    title: "Limited Awareness, Support & Capacity on the Ground",
    solutions: [
      "Invest in people-centred capacity building.",
      "Develop clear institutional support structures and workflows for rights retention.",
      "Improve coordination among research offices, finance, libraries and legal departments.",
      "Build cross-country peer-learning networks to share existing OA solutions and tools.",
      "Provide targeted support for SSH communities and small institutions."
    ]
  },
  {
    tag: "Barrier 03",
    title: "Funding & Sustainability",
    solutions: [
      "Redirect public funding from subscriptions and Article Processing Charges towards non-profit OA infrastructures.",
      "Create multi-annual funding mechanisms treating OA publishing as research infrastructure, not an add-on.",
      "Expand national OA funding instruments and align them with EU-level conditions.",
      "Encourage differentiated business models to reduce reliance on APC-heavy commercial pathways."
    ]
  },
  {
    tag: "Barrier 04",
    title: "Metadata, Infrastructure & Discoverability",
    solutions: [
      "Develop shared national and European metadata standards and registries for OA journals and books.",
      "Establish national aggregation mechanisms linking institutional, library and ministry data flows to OAPEN, DOAB, OPERAS, EOSC.",
      "Agree on a minimum common metadata set to enable reliable monitoring and policy planning.",
      "Integrate long-term preservation, accessibility and cybersecurity into OA infrastructure planning."
    ]
  },
  {
    tag: "Barrier 05",
    title: "Research Assessment Systems & Incentives",
    solutions: [
      "Reform research assessment to embed Open Science and align with CoARA-compatible principles.",
      "Develop open, interoperable infrastructures for responsible research assessment.",
      "Explicitly recognise OA books, multilingual publications and community-driven journals in evaluation criteria.",
      "Ensure publishing open access never disadvantages researchers in institutional rankings."
    ]
  },
  {
    tag: "Barrier 06",
    title: "New Risks Linked to AI & Integrity",
    solutions: [
      "Clarify legal and ethical frameworks for AI in scholarly communication.",
      "Develop institutional and national guidelines on acceptable AI use.",
      "Protect OA infrastructures from malicious scraping and integrity threats.",
      "Ensure AI governance measures reinforce — not weaken — open access and reuse of trusted research."
    ]
  }
];

const recommendations = [
  {
    id: "ec", label: "European Commission", level: "Strategic level",
    items: [
      "Strengthen action under the ERA Policy Agenda and the ERA Act in support of open, interoperable infrastructures.",
      "Reopen dialogue with publishers and funders on feasible routes to open access compliance.",
      "Support common European metadata standards and stronger links with OAPEN, DOAB, OPERAS and EOSC.",
      "Address copyright, secondary publication rights, research exceptions and the use of AI in future legal frameworks.",
      "Invest in capacity building and peer-learning networks across Member States and institutions."
    ]
  },
  {
    id: "ms", label: "Member States", level: "National system level",
    items: [
      "Move from policy declarations to durable OA implementation mechanisms.",
      "Stabilise national open access funding instruments and align them with European programme conditions.",
      "Create or strengthen multi-stakeholder national forums bringing together all OA actors.",
      "Develop shared metadata standards and aggregation mechanisms for OA publications.",
      "Provide practical guidance so OA obligations can be implemented consistently across institutions."
    ]
  },
  {
    id: "rfo", label: "RFOs", level: "Operational / funding level",
    items: [
      "Align open access policies with research assessment reform.",
      "Provide researchers with practical guidance on licensing, repositories and self-archiving rights.",
      "Design funding instruments that support public infrastructures and Diamond OA, not just APCs.",
      "Use funding mechanisms to reward openness in ways feasible for SSH communities and less-resourced institutions."
    ]
  },
  {
    id: "rpo", label: "RPOs", level: "Institutional level",
    items: [
      "Establish clear internal open access policies and support for legal, technical and administrative issues.",
      "Strengthen libraries, repositories and university presses as core parts of the OA ecosystem.",
      "Streamline publication-funding workflows and link OA to staff evaluation and institutional strategy.",
      "Develop institutional AI guidance for scholarly communication."
    ]
  }
];

const categories = [
  {id:"guidance", label:"Guidance", color:"var(--cat-guidance)"},
  {id:"assessment", label:"Assessment", color:"var(--cat-assessment)"},
  {id:"infrastructure", label:"Infrastructure", color:"var(--cat-infrastructure)"},
  {id:"framework", label:"Framework", color:"var(--cat-framework)"},
  {id:"capacity", label:"Capacity", color:"var(--cat-capacity)"},
  {id:"standards", label:"Standards", color:"var(--cat-standards)"}
];

const tools = [
  {name:"OA Books Toolkit", desc:"Practical guidance for authors and policymakers on OA monographs.", cat:"guidance"},
  {name:"CoARA Working Group (OI4RRA)", desc:"Open infrastructures for responsible research assessment, with action plans for RPOs/RFOs.", cat:"assessment"},
  {name:"Open Access & FAIR data principles", desc:"Embedded in funding requirements, data management plans and ERA-level monitoring.", cat:"framework"},
  {name:"OpenAIRE", desc:"Pan-European infrastructure making research outputs openly discoverable and reusable.", cat:"infrastructure"},
  {name:"DOAJ", desc:"Global, community-driven index of quality open access journals.", cat:"infrastructure"},
  {name:"OAPEN & DOAB", desc:"Trusted platforms for hosting and indexing peer-reviewed OA books.", cat:"infrastructure"},
  {name:"European Open Science Cloud", desc:"Repositories and services enabling cross-border discovery and reuse of research data.", cat:"infrastructure"},
  {name:"Open Science ambassador programmes (OPUS)", desc:"Train researchers to drive cultural change inside institutions.", cat:"capacity"},
  {name:"DIAMAS", desc:"EU project supporting institutional and Diamond Open Access publishing.", cat:"standards"},
  {name:"European Diamond Capacity Hub (EDCH)", desc:"Services for Diamond OA publishers, service providers and tools.", cat:"capacity"},
  {name:"OPERAS & OPERAS Innovation Lab", desc:"Research infrastructures supporting Diamond OA and SSH-focused publishing.", cat:"infrastructure"},
  {name:"EOSC EU Node", desc:"Common entry point and governance framework so national nodes become interoperable.", cat:"infrastructure"},
  {name:"GraspOS", desc:"Horizon Europe project building open infrastructure for OS-aligned research assessment.", cat:"assessment"},
  {name:"Diamond Open Access Standard (DOAS)", desc:"Quality framework and self-assessment tool for DOA publishers.", cat:"standards"},
  {name:"GATE", desc:"Strengthens open science capacities — people, infrastructure and practice.", cat:"capacity"}
];

/* ---------------- render: accordion ---------------- */
const accordionEl = document.getElementById('accordion');
barriers.forEach((b, i) => {
  const item = document.createElement('div');
  item.className = 'accordion-item';
  item.innerHTML = `
    <button class="accordion-trigger" aria-expanded="false">
      <span class="tag">${b.tag}</span>
      <h3>${b.title}</h3>
      <span class="plus" aria-hidden="true"></span>
    </button>
    <div class="accordion-panel">
      <div class="accordion-panel-inner">
        <p class="solutions-label">Recommended solutions</p>
        <ul class="solutions-list">
          ${b.solutions.map(s => `<li><svg viewBox="0 0 20 20"><path d="M7.5 13.4 4.1 10l-1.4 1.4L7.5 16.2 17.3 6.4l-1.4-1.4z"/></svg><span>${s}</span></li>`).join('')}
        </ul>
      </div>
    </div>`;
  const trigger = item.querySelector('.accordion-trigger');
  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.accordion-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.accordion-trigger').setAttribute('aria-expanded','false');
    });
    if (!isOpen){
      item.classList.add('open');
      trigger.setAttribute('aria-expanded','true');
    }
  });
  accordionEl.appendChild(item);
});
// open first by default
accordionEl.querySelector('.accordion-item').classList.add('open');
accordionEl.querySelector('.accordion-trigger').setAttribute('aria-expanded','true');

/* ---------------- render: tabs ---------------- */
const tabbarEl = document.getElementById('tabbar');
const tabpanelsEl = document.getElementById('tabpanels');
recommendations.forEach((r, i) => {
  const btn = document.createElement('button');
  btn.className = 'tab-btn' + (i===0 ? ' active' : '');
  btn.textContent = r.label;
  btn.setAttribute('role','tab');
  btn.dataset.target = r.id;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-'+r.id).classList.add('active');
  });
  tabbarEl.appendChild(btn);

  const panel = document.createElement('div');
  panel.className = 'tab-panel' + (i===0 ? ' active' : '');
  panel.id = 'panel-'+r.id;
  panel.innerHTML = `
    <span class="level">${r.level}</span>
    <ul class="solutions-list">
      ${r.items.map(s => `<li><svg viewBox="0 0 20 20"><path d="M7.5 13.4 4.1 10l-1.4 1.4L7.5 16.2 17.3 6.4l-1.4-1.4z" fill="#0EA5A5"/></svg><span>${s}</span></li>`).join('')}
    </ul>`;
  tabpanelsEl.appendChild(panel);
});

/* ---------------- render: tools filter + grid ---------------- */
const filterRowEl = document.getElementById('filterRow');
const gridEl = document.getElementById('toolsGrid');

const allChip = document.createElement('button');
allChip.className = 'filter-chip active';
allChip.textContent = 'All';
allChip.dataset.cat = 'all';
filterRowEl.appendChild(allChip);

categories.forEach(c => {
  const chip = document.createElement('button');
  chip.className = 'filter-chip';
  chip.textContent = c.label;
  chip.dataset.cat = c.id;
  filterRowEl.appendChild(chip);
});

tools.forEach(t => {
  const cat = categories.find(c => c.id === t.cat);
  const card = document.createElement('div');
  card.className = 'tool-card';
  card.dataset.cat = t.cat;
  card.style.setProperty('--cat-color', cat.color);
  card.innerHTML = `
    <h3>${t.name}</h3>
    <p>${t.desc}</p>
    <span class="cat-tag"><span class="dot"></span>${cat.label}</span>`;
  gridEl.appendChild(card);
});

filterRowEl.addEventListener('click', (e) => {
  const chip = e.target.closest('.filter-chip');
  if (!chip) return;
  filterRowEl.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const cat = chip.dataset.cat;
  gridEl.querySelectorAll('.tool-card').forEach(card => {
    card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
  });
});

/* ---------------- video overlay ---------------- */
const videoPlayer = document.getElementById('videoPlayer');
const videoOverlay = document.getElementById('videoOverlay');
videoOverlay.addEventListener('click', () => {
  videoPlayer.play();
});
videoPlayer.addEventListener('play', () => {
  videoOverlay.classList.add('hidden');
});

/* ---------------- header: nav toggle + search toggle ---------------- */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

const searchToggle = document.getElementById('searchToggle');
const searchBox = document.getElementById('searchBox');
searchToggle.addEventListener('click', () => {
  const isOpen = searchBox.classList.toggle('open');
  if (isOpen) searchBox.querySelector('input').focus();
});
