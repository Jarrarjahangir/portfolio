import type { Project, Achievement, CapabilityCategory, MetricItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Jarrar Jahangir',
  title: 'Entrepreneur · Digital Growth Strategist · Builder',
  eyebrow: 'ENTREPRENEUR · DIGITAL GROWTH STRATEGIST · BUILDER',
  headlineStart: 'Turning Ideas into',
  headlineEmphasis: 'Real-World',
  headlineEnd: 'Businesses.',
  bioShort:
    "I'm Jarrar Jahangir, a student, entrepreneur and digital growth strategist. I help businesses grow through marketing, websites, and strategic execution — and I'm building VAXION Advertisements to do this at scale.",
  location: 'Pakistan',
  locationDetail: 'Based in Pakistan · Working Globally',
  focusAreas: ['Entrepreneurship', 'Digital Growth', 'E-commerce', 'AI & Automation'],
  email: 'jarrarjahangir75@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/jarrarjahangir',
  whatsapp: '+92 327 7589425',
  whatsappUrl: 'https://wa.me/923277589425',
  handle: '@jarrarjahangir',
  socials: [
    { name: 'Instagram', handle: '@jarrarjahangir', url: 'https://instagram.com/jarrarjahangir' },
    { name: 'LinkedIn', handle: 'in/jarrarjahangir', url: 'https://www.linkedin.com/in/jarrarjahangir' },
    { name: 'TikTok', handle: '@jarrarjahangir', url: 'https://tiktok.com/@jarrarjahangir' },
    { name: 'Threads', handle: '@jarrarjahangir', url: 'https://threads.net/@jarrarjahangir' },
    { name: 'Facebook', handle: 'jarrarjahangir', url: 'https://facebook.com/jarrarjahangir' },
  ],
  agencyName: 'VAXION Advertisements',
};

export const KEY_METRICS: MetricItem[] = [
  {
    value: '3+',
    label: 'Businesses Worked With',
    sublabel: 'Across UAE & International Markets',
  },
  {
    value: '+40%',
    label: 'Sales Growth',
    sublabel: 'Embellish Gold (Reported within 3 mos)',
  },
  {
    value: '7X',
    label: 'ROAS Achieved',
    sublabel: 'Embellish Gold (Reported peak return)',
  },
  {
    value: '2X',
    label: 'More Leads',
    sublabel: 'FAM-Tours (Reported in 1st month)',
  },
];

export const TRUSTED_BRANDS = [
  {
    name: 'Embellish Gold',
    badge: 'EG',
    industry: 'Jewellery E-commerce',
    location: 'UAE',
  },
  {
    name: 'FAM-TOURS',
    badge: 'FAM',
    industry: 'Luxury Yacht Charters',
    location: 'Abu Dhabi & Dubai',
  },
  {
    name: 'ROYAL GOLD',
    badge: 'RG',
    industry: 'Fine Jewellery (Pre-Launch)',
    location: 'UAE',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'embellish-gold',
    number: '01',
    title: 'Embellish Gold UAE',
    subtitle: 'Fine Jewellery E-Commerce Growth & Online Infrastructure',
    industry: 'Jewellery E-commerce',
    category: 'ecommerce',
    role: 'Growth Strategist & Web Developer',
    status: 'Completed',
    tags: ['E-commerce Growth', 'Paid Ads', 'Website Optimization', 'Business Profile'],
    image: '/assets/embellish-gold-site.jpg',
    imageAlt: 'Embellish Gold UAE high-converting jewelry e-commerce website',
    challenge:
      'Embellish Gold needed to establish a refined online storefront and scale digital sales in the competitive UAE fine jewelry market, improving both visitor conversion and paid traffic efficiency.',
    solution:
      'Engineered an enhanced e-commerce customer experience, structured targeted advertising campaigns across Meta and Google, and optimized the local business presence to capture high-intent jewelry shoppers.',
    contributions: [
      'Configured and structured paid advertising funnels across relevant social and search channels.',
      'Refined e-commerce catalog structure, product pages, and checkout friction points.',
      'Optimized digital business profiles for enhanced trust and local search discoverability.',
    ],
    reportedOutcomes: [
      {
        value: '+40%',
        label: 'Sales Growth in 3 Months',
        disclaimer: 'Reported client outcome. Reflects sales growth trajectory over three consecutive months.',
      },
      {
        value: '7X',
        label: 'ROAS Achieved in 5 Months',
        disclaimer: 'Reported return on advertising spend during campaign optimization. ROAS does not denote net profit.',
      },
    ],
    disclaimer: 'Reported project outcomes provided by project records. Individual campaign metrics depend on seasonal market factors and inventory availability.',
  },
  {
    id: 'fam-tours',
    number: '02',
    title: 'FAM-Tours',
    subtitle: 'Luxury Yacht Charter Lead Generation & Digital Presence',
    industry: 'Tourism & Marine Charters',
    category: 'tourism',
    role: 'Lead Generation & Digital Strategist',
    status: 'Completed',
    tags: ['Lead Generation', 'Website Experience', 'Paid Ads', 'Business Profile'],
    image: '/assets/fam-tours-site.jpg',
    imageAlt: 'FAM Tours luxury yacht charters website in Dubai and Abu Dhabi',
    challenge:
      'FAM-Tours operates premium yacht and marine experiences across Dubai and Abu Dhabi. They required a streamlined digital acquisition funnel to attract high-ticket bookings and qualified private inquiries.',
    solution:
      'Built a targeted lead generation engine, enhanced website clarity and booking call-to-actions, and fortified their verified digital presence to convert luxury travelers and corporate planners.',
    contributions: [
      'Executed high-intent advertising campaigns tailored to luxury tourists and corporate event organizers.',
      'Audited and refined website journey, focusing on mobile speed, WhatsApp chat integration, and clear charter package presentations.',
      'Optimized Google Business profiles and local search authority across Dubai and Abu Dhabi.',
    ],
    reportedOutcomes: [
      {
        value: '2X',
        label: 'More Inbound Leads',
        disclaimer: 'Reported outcome within the first month of campaign launch.',
      },
      {
        value: 'High-Ticket',
        label: 'Charter Inquiries',
        disclaimer: 'Targeted private charters and corporate packages in UAE.',
      },
    ],
    disclaimer: 'Reported project results pending formal client telemetry audit. Reflects direct inquiries via WhatsApp and digital capture forms.',
  },
  {
    id: 'royal-gold',
    number: '03',
    title: 'Royal Gold UAE',
    subtitle: 'Brand Infrastructure & Pre-Launch E-Commerce Platform',
    industry: 'Jewellery',
    category: 'ecommerce',
    role: 'Web Development & E-commerce Architect',
    status: 'Pre-Launch',
    tags: ['Pre-Launch Project', 'Website Architecture', 'Catalog Design', 'Digital Presence'],
    image: '/assets/embellish-gold-site.jpg', // Placeholder frame for jewelry site
    imageAlt: 'Royal Gold UAE pre-launch digital infrastructure',
    challenge:
      'A new fine jewelry venture preparing for market entry in the UAE, requiring end-to-end digital architecture, brand alignment, and a reliable pre-launch foundation.',
    solution:
      'Architected the pre-launch web presence, designed catalog taxonomy, established business profile verification frameworks, and prepared checkout integrations prior to operational launch.',
    contributions: [
      'Developed responsive website templates and pre-launch showcase pages.',
      'Configured business profile foundations and digital presence assets.',
      'Prepared e-commerce inventory workflows and digital analytics tracking.',
    ],
    reportedOutcomes: [
      {
        value: 'Pre-Launch',
        label: 'Status: In Development',
        disclaimer: 'This business is not yet publicly trading. All work represents infrastructure preparation.',
      },
      {
        value: '100%',
        label: 'Infrastructure Readiness',
        disclaimer: 'Catalog design, profile setup, and web architecture prepared for commercial launch.',
      },
    ],
    disclaimer: 'Important: This business is currently inactive/pre-launch. No live commercial sales or growth metrics are attributed to this project.',
  },
];

export const CAPABILITIES: CapabilityCategory[] = [
  {
    title: 'Digital Growth',
    description: 'Disciplined customer acquisition strategies focused on unit economics and measurable returns.',
    iconName: 'TrendingUp',
    items: [
      'Paid Advertising (Meta, Google)',
      'High-Intent Lead Generation',
      'Search Engine Optimization (SEO)',
      'Conversion Rate Optimization (CRO)',
    ],
  },
  {
    title: 'E-commerce & Web',
    description: 'Modern, high-converting digital storefronts built for smooth UX and robust transactions.',
    iconName: 'ShoppingBag',
    items: [
      'Shopify Store Development',
      'Custom Business Websites',
      'Catalog & Checkout UX Optimization',
      'E-commerce Analytics & Tracking',
    ],
  },
  {
    title: 'Automation & Technology',
    description: 'Streamlining repetitive operations with modern tooling, AI assistance, and API integrations.',
    iconName: 'Cpu',
    items: [
      'AI-Assisted Business Workflows',
      'Automated Lead Routing & CRM Sync',
      'Business Process Automation (Make/Zapier)',
      'Exploration of AI Business Intelligence',
    ],
  },
  {
    title: 'Brand Strategy & Operations',
    description: 'Positioning businesses with clarity to stand out and communicate value effortlessly.',
    iconName: 'Compass',
    items: [
      'Market & Competitor Positioning',
      'Digital Business Profile Verification',
      'Offer Structure & Messaging',
      'Strategic Advisory for Early-Stage Ventures',
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ifg-tetr',
    number: '01',
    title: '2nd Place — IFG × Tetr Global Business Challenge 2026',
    organization: 'International Foundation Group (IFG) × Tetr College of Business',
    year: '2026',
    description:
      'Secured 2nd place internationally in the competitive IFG × Tetr Global Business Challenge. Evaluated on strategic problem-solving, real-world case analysis, market feasibility, and entrepreneurial decision-making against global competitors.',
    statusTag: 'Global Competition',
    verified: true,
  },
  {
    id: 'ifg-scholarship',
    number: '02',
    title: 'IFG Scholarship Offer',
    organization: 'International Foundation Group (IFG)',
    year: '2026',
    description:
      'Received a formal scholarship offer from the International Foundation Group based on competition performance and academic profile (Status: Offer extended, under evaluation).',
    statusTag: 'Academic Honor',
    verified: true,
  },
  {
    id: 'college-leadership',
    number: '03',
    title: 'College Entrepreneurship Leadership',
    organization: 'Student Entrepreneurship Council',
    year: 'Ongoing',
    description:
      'Actively leading student entrepreneurship initiatives. Facilitating business case discussions, organizing youth startup roundtables, and fostering practical problem-solving among aspiring student builders.',
    statusTag: 'Leadership',
    verified: true,
  },
  {
    id: 'agency-founding',
    number: '04',
    title: 'Founded VAXION Advertisements',
    organization: 'VAXION Advertisements',
    year: 'Established',
    description:
      'Launched an independent digital growth and web consultancy. Partnered with regional businesses in e-commerce and tourism across UAE to build digital infrastructure and execute performance growth campaigns.',
    statusTag: 'Milestone',
    verified: true,
  },
];

export const FUTURE_INTERESTS = [
  {
    title: 'Entrepreneurship & Company Building',
    description:
      'Dedicated to understanding how enduring companies are structured from scratch. Learning through practical building: identifying pain points, launching services, and refining product-market fit.',
    icon: 'Rocket',
  },
  {
    title: 'Artificial Intelligence & Systems',
    description:
      'Investigating practical applications of generative models, autonomous agent workflows, and data pipelines to eliminate administrative friction and amplify small team output.',
    icon: 'Sparkles',
  },
  {
    title: 'Business Strategy & Growth Models',
    description:
      'Fascinated by unit economics, scalable distribution models, and customer acquisition psychology. Testing theories against real data rather than textbook assumptions.',
    icon: 'Target',
  },
  {
    title: 'Product Development & Scalable Solutions',
    description:
      'Working toward creating software and technology-driven tools that solve concrete business challenges across multiple geographies and industries.',
    icon: 'Boxes',
  },
];
