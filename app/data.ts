export const profile = {
  name: "Arbab Khizar",
  role: "Sr. WordPress Developer",
  location: "Lahore, Pakistan",
  email: "arbabkhizar992@gmail.com",
  phone: "+92 324 7959250",
  whatsapp: "https://wa.me/923247959250",
  linkedin: "https://www.linkedin.com/in/arbab-khizar-1606b524a",
  summary:
    "Experienced WordPress custom developer skilled in HTML, CSS, JavaScript and PHP. I specialize in customizing themes, plugins and templates for exceptional user experiences, and I build secure, visually appealing websites that drive client success.",
};

export const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "520+", label: "Projects delivered" },
  { value: "100+", label: "Live websites showcased" },
  { value: "100%", label: "Client satisfaction" },
];

export const services = [
  {
    title: "Custom WordPress Development",
    text: "Bespoke themes, templates and functionality written in PHP, JavaScript and CSS, built around your business instead of a generic theme.",
  },
  {
    title: "Plugin & Widget Development",
    text: "Custom plugins, Elementor widgets and integrations that add exactly the features your site needs, cleanly and securely.",
  },
  {
    title: "Elementor & Divi Builds",
    text: "Pixel-perfect, fully responsive page-builder sites that your team can edit with ease after launch.",
  },
  {
    title: "WooCommerce Stores",
    text: "Online stores with product catalogs, custom checkouts and payment flows designed to convert visitors into customers.",
  },
  {
    title: "Speed & On-Page SEO",
    text: "Performance tuning, Core Web Vitals improvements and on-page SEO so your site loads fast and ranks well.",
  },
  {
    title: "Dynamic Content & CMS",
    text: "JetEngine, ACF and custom post types for listings, podcasts, directories and any content that needs structure.",
  },
];

export type FeaturedProject = {
  name: string;
  niche: string;
  url: string;
  description: string;
  tags: string[];
  previewImage?: string;
};

export const featured: FeaturedProject[] = [
  {
    name: "Course Habitat",
    niche: "Online courses & digital learning",
    url: "https://coursehabitat.com",
    description:
      "A polished online learning store for discovering affordable courses and digital resources, with clear course search, category browsing and trust-building highlights.",
    tags: ["WordPress", "WooCommerce", "E-learning"],
    previewImage: "/images/course-habitat-preview.png",
  },
  {
    name: "4iT",
    niche: "Managed IT services",
    url: "https://4it.com.au",
    description:
      "A bold Sydney IT services homepage focused on clear service positioning, local coverage, and direct callback and booking actions.",
    tags: ["WordPress", "IT Services", "Lead Gen"],
    previewImage: "/images/4it-preview.png",
  },
  {
    name: "Blue Sky Internet Solutions",
    niche: "AI consulting & automation",
    url: "https://www.blueskyinternetsolutions.ai",
    description:
      "A modern AI and automation services site with a clear revenue-focused message, bright visual identity and prominent conversion paths.",
    tags: ["WordPress", "AI Services", "Automation"],
    previewImage: "/images/blue-sky-preview.jpg",
  },
  {
    name: "Avalon Law",
    niche: "Personal injury law",
    url: "https://avalonlaw.com",
    description:
      "A personal injury law firm website with structured service pages, testimonials and lead-generation forms, plus a bilingual English/Spanish system.",
    tags: ["WordPress", "Elementor", "Bilingual"],
  },
  {
    name: "Sendero Property Group",
    niche: "Property management",
    url: "https://senderopropertymanagement.com",
    description:
      "A property management site serving Central Texas with rental listings, resident and owner portals, and clear service information.",
    tags: ["WordPress", "Elementor", "Listings"],
  },
  {
    name: "Ink Whale Editorial",
    niche: "Editorial services",
    url: "https://inkwhaleeditorial.com",
    description:
      "An editorial services site for authors and academics showcasing manuscript editing and proofreading, with testimonials and consultation paths.",
    tags: ["WordPress", "Elementor", "Editorial"],
  },
  {
    name: "Favored Live",
    niche: "Video commerce",
    url: "https://favored.live",
    description:
      "A platform site for livestream shopping and shoppable video, with interactive content sections for brands and creators.",
    tags: ["WordPress", "Elementor", "UI/UX"],
  },
  {
    name: "Real Estate PDX",
    niche: "Real estate brokerage",
    url: "https://realestatepdx.com",
    description:
      "A Portland real estate brokerage website with MLS property search, neighborhood pages and guides for buyers, sellers and investors.",
    tags: ["WordPress", "Elementor", "MLS Search"],
  },
];

export const categories = [
  "Business & Consulting",
  "Local Services",
  "E-commerce",
  "Real Estate",
  "Legal",
  "Health & Wellness",
  "Agency & Tech",
  "Education & Media",
  "Portfolio & Creative",
] as const;

export type Category = (typeof categories)[number];

export type Site = {
  name: string;
  category: Category;
  niche?: string;
  url: string;
  previewBlocked?: boolean;
  previewImage?: string;
};

export const sites: Site[] = [
  { name: "Neptune Legal Services", category: "Legal", niche: "Law firm", url: "https://neptunelegalservices.com" },
  { name: "Sharpstone Realty", category: "Real Estate", niche: "Property management", url: "https://sharpstonerealty.com/property-management" },
  { name: "Chula Extensions", category: "E-commerce", niche: "Beauty store & salon", url: "https://chulaextensions.com" },
  { name: "Boss Babes Boutiquee", category: "E-commerce", niche: "Fashion boutique", url: "https://www.bossbabesboutiquee.com" },
  { name: "Dukes Sport Shop", category: "E-commerce", niche: "Sports store", url: "https://dukessportshop.com" },
  { name: "Skin Alliance", category: "E-commerce", niche: "Beauty & health store", url: "https://skinalliance.pk" },
  { name: "Brian Boggs Chairmakers", category: "E-commerce", niche: "Product showcase", url: "https://brianboggschairmakers.com" },
  { name: "Boggs Bench", category: "E-commerce", niche: "Product showcase", url: "https://boggsbench.com" },
  { name: "One Speed Services", category: "Local Services", niche: "Cleaning services", url: "https://onespeedservices.com" },
  { name: "Clean Green Texas", category: "Local Services", niche: "Cleaning services", url: "https://cleangreentexas.com" },
  { name: "Phoenix Arizona Roofing", category: "Local Services", niche: "Roofing", url: "https://phoenixarizonaroofing.com" },
  { name: "Arizona Stay Dry Roofing", category: "Local Services", niche: "Roofing", url: "https://azstaydryroofing.com" },
  { name: "OC Stay Dry Roofing", category: "Local Services", niche: "Roofing", url: "https://ocroofs.com" },
  { name: "Encino Roofing", category: "Local Services", niche: "Roofing", url: "https://encinoroofs.com" },
  { name: "Redlands Roofing", category: "Local Services", niche: "Roofing & construction", url: "https://redlandsroofingcompany.com" },
  { name: "Hugh's Detailing", category: "Local Services", niche: "Car paint & detailing", url: "https://hughsdetailing.com" },
  { name: "Bay State Kitchen Gallery", category: "Local Services", niche: "Kitchen & interior design", url: "https://baystatekitchengallery.com" },
  { name: "Benny's Pooch Pawler", category: "Local Services", niche: "Pet services", url: "https://bennyspoochpawler.com" },
  { name: "Bark Bot", category: "Local Services", niche: "Services", url: "https://barkbot.com" },
  { name: "Fork & Flame Catering", category: "Local Services", url: "https://forkandflamecatering.net" },
  { name: "Fitzbuild Lennox Head", category: "Local Services", url: "https://fitzbuildlennoxhead.com.au" },
  { name: "Nathan's Family Chiropractic", category: "Health & Wellness", niche: "Chiropractic", url: "https://nathansfamilychiropractic.com" },
  { name: "OC Myo Therapy", category: "Health & Wellness", niche: "Therapy clinic", url: "https://ocmyotherapy.com" },
  { name: "Valdez Muay Thai Kickboxing", category: "Health & Wellness", niche: "Martial arts gym", url: "https://valdezkickboxing.com" },
  { name: "SCMAGA", category: "Health & Wellness", niche: "Sports association", url: "https://scmaga.org" },
  { name: "Sereniva Health", category: "Health & Wellness", url: "https://serenivahealth.com" },
  { name: "My Shiloh Health", category: "Health & Wellness", url: "https://myshilohhealth.com" },
  { name: "Faiz-e-Sehat", category: "Health & Wellness", url: "https://faizesehat.com" },
  { name: "Americana Tax Planning", category: "Business & Consulting", niche: "Tax consulting", url: "https://americanataxplanning.com" },
  { name: "Public Employees Direct", category: "Business & Consulting", niche: "Employee consulting", url: "https://publicemployeesdirect.org" },
  { name: "Kreddo", category: "Business & Consulting", niche: "Consulting & bookings", url: "https://kreddo.bg" },
  { name: "Sourcing Squad", category: "Business & Consulting", niche: "Product sourcing", url: "https://sourcingsquad.co" },
  { name: "CLE Business", category: "Business & Consulting", niche: "Business services", url: "https://clebusiness.com" },
  { name: "Mijo Entertainment", category: "Business & Consulting", niche: "Event services", url: "https://mijoent.com" },
  { name: "Cognitions", category: "Business & Consulting", url: "https://cognitions.co.uk" },
  { name: "Adreal Group", category: "Business & Consulting", url: "https://adrealgroup.com" },
  { name: "Siache Foods", category: "Business & Consulting", url: "https://siachefoods.denodetech.com" },
  { name: "Jakaura", category: "Business & Consulting", url: "https://jakaura.com" },
  { name: "4iT", category: "Agency & Tech", niche: "IT consulting", url: "https://4it.com.au", previewBlocked: true, previewImage: "/images/4it-preview.png" },
  { name: "IT Visionists", category: "Agency & Tech", niche: "IT consulting", url: "https://itvisionists.com" },
  { name: "Gray Matter IT Solutions", category: "Agency & Tech", niche: "IT solutions", url: "https://graymatterits.com" },
  { name: "On The Verge", category: "Agency & Tech", niche: "Marketing agency", url: "https://ontheverge.io" },
  { name: "Impact 96", category: "Agency & Tech", niche: "Agency", url: "https://impact96.com" },
  { name: "Blue Sky Internet Solutions", category: "Agency & Tech", niche: "AI services", url: "https://www.blueskyinternetsolutions.ai" },
  { name: "Devtics Technologies", category: "Agency & Tech", niche: "Software company", url: "https://devtics.com" },
  { name: "Webrula", category: "Agency & Tech", url: "https://webrula.com" },
  { name: "Lead Quran", category: "Education & Media", niche: "LMS platform", url: "https://leadquran.com" },
  { name: "GEA Safety & Health", category: "Education & Media", niche: "Safety training", url: "https://gea-srl.it" },
  { name: "Write Dissertation", category: "Education & Media", niche: "Academic writing", url: "https://writedissertation.com" },
  { name: "Taza Halaat", category: "Education & Media", niche: "News website", url: "https://tazahalaat.com" },
  { name: "Course Habitat", category: "Education & Media", url: "https://coursehabitat.com", previewBlocked: true, previewImage: "/images/course-habitat-preview.png" },
  { name: "Torrian Scott", category: "Portfolio & Creative", niche: "Personal portfolio", url: "https://torrianscott.com" },
  { name: "Mia Sulak", category: "Portfolio & Creative", niche: "Personal portfolio", url: "https://miasulak.com" },
  { name: "Safero", category: "E-commerce", niche: "Online store", url: "https://safero.co.uk" },
  { name: "Thorndesign", category: "E-commerce", niche: "Online store", url: "https://thorndesign.site" },
  { name: "Furniture Hub Sigma", category: "E-commerce", niche: "Online store", url: "https://furniture-hub-sigma.vercel.app" },
  { name: "Boscomonte", category: "E-commerce", niche: "Online store", url: "https://boscomonte.si" },
  { name: "Kirkuk Medlife Pharmacy", category: "E-commerce", niche: "Online store", url: "https://kirkukmedlifepharmacy.com" },
  { name: "Lightslate Grey Pheasant", category: "E-commerce", niche: "Online store", url: "https://lightslategrey-pheasant-276739.hostingersite.com" },
  { name: "Coral Armadillo", category: "E-commerce", niche: "Online store", url: "https://coral-armadillo-833895.hostingersite.com" },
  { name: "Cartflowy", category: "E-commerce", niche: "Online store", url: "https://cartflowy.com" },
  { name: "Hangar51press", category: "E-commerce", niche: "Online store", url: "https://hangar51press.com" },
  { name: "Darlin", category: "E-commerce", niche: "Online store", url: "https://darlin.com.au" },
  { name: "Moccasin Tiger", category: "E-commerce", niche: "Online store", url: "https://moccasin-tiger-908499.hostingersite.com" },
  { name: "Nextlegal", category: "Legal", niche: "Law firm", url: "https://nextlegal.us" },
  { name: "Wilderandassociates", category: "Legal", niche: "Law firm", url: "https://www.wilderandassociates.com" },
  { name: "Lamargaritasalem", category: "Local Services", niche: "Restaurant", url: "https://lamargaritasalem.co" },
  { name: "Ashburnvillagechiropractic", category: "Health & Wellness", niche: "Healthcare", url: "https://ashburnvillagechiropractic.com" },
  { name: "Artarmondayhospital", category: "Health & Wellness", niche: "Healthcare", url: "https://artarmondayhospital.com.au" },
  { name: "Gilld", category: "Real Estate", niche: "Real estate", url: "https://gilld.co" },
  { name: "Havenrockport", category: "Real Estate", niche: "Real estate", url: "https://havenrockport.com" },
  { name: "Aspire", category: "Local Services", niche: "Service business", url: "https://aspire.pakunit.link" },
  { name: "Bikerentaldubrovnik", category: "Local Services", niche: "Local service", url: "https://bikerentaldubrovnik.com" },
  { name: "Orange Leopard", category: "Local Services", niche: "Service business", url: "https://orange-leopard-209743.hostingersite.com" },
  { name: "Cascade Creatives", category: "Agency & Tech", niche: "Business services", url: "https://cascade-creatives.com" },
  { name: "Inovaqo", category: "Agency & Tech", niche: "Business services", url: "https://inovaqo.com" },
  { name: "Sapiens Me", category: "Agency & Tech", niche: "Business services", url: "https://sapiens-me.com" },
  { name: "Elkeclarke", category: "Portfolio & Creative", niche: "Portfolio", url: "https://elkeclarke.com" },
  { name: "Medium Violet Red Badger", category: "Local Services", niche: "Service business", url: "https://mediumvioletred-badger-105528.hostingersite.com" },
  { name: "Hidewoodfiber", category: "E-commerce", niche: "Online store", url: "https://hidewoodfiber.wpenginepowered.com" },
  { name: "Conseil", category: "Local Services", niche: "Service business", url: "https://conseil.com.lb" },
  { name: "Press Wizard", category: "Education & Media", niche: "Publishing", url: "https://press-wizard.com" },
  { name: "Toppeakroofing", category: "Local Services", niche: "Local service", url: "https://toppeakroofing.com" },
  { name: "Eqvitus", category: "Local Services", niche: "Service business", url: "https://eqvitus.com" },
  { name: "Midnight Blue Goldfinch", category: "Local Services", niche: "Service business", url: "https://midnightblue-goldfinch-713244.hostingersite.com" },
  { name: "White Glove", category: "Local Services", niche: "Service business", url: "https://white-glove.pakunit.link" },
  { name: "Calltree", category: "Agency & Tech", niche: "Business services", url: "https://calltree.pakunit.link" },
  { name: "Accessrevenuehawaii", category: "Local Services", niche: "Service business", url: "https://accessrevenuehawaii.com" },
  { name: "9xi", category: "Local Services", niche: "Service business", url: "https://9xi.co.uk" },
  { name: "Buggy Dubrovnik", category: "Local Services", niche: "Local service", url: "https://buggy-dubrovnik.com" },
  { name: "Linkgrowx", category: "Agency & Tech", niche: "Business services", url: "https://linkgrowx.com" },
  { name: "Thebritishbarbers", category: "Local Services", niche: "Local service", url: "https://thebritishbarbers.sg" },
  { name: "Honeydew Wallaby", category: "Local Services", niche: "Service business", url: "https://honeydew-wallaby-820217.hostingersite.com" },
  { name: "Light Goldenrod Yellow Heron", category: "Local Services", niche: "Service business", url: "https://lightgoldenrodyellow-heron-422120.hostingersite.com" },
  { name: "Sterlinghaven", category: "Real Estate", niche: "Real estate", url: "https://sterlinghaven.pakunit.link" },
  { name: "Lawn Green Ibex", category: "Local Services", niche: "Service business", url: "https://lawngreen-ibex-126235.hostingersite.com" },
  { name: "GPI Edmund", category: "Portfolio & Creative", niche: "Portfolio", url: "https://gpiedmund.wixsite.com/website" },
  { name: "Urban Nest", category: "Real Estate", niche: "Real estate", url: "https://urbannest1.odoo.com" },
  { name: "Organiclab", category: "E-commerce", niche: "Online store", url: "https://organiclab.store" },
  { name: "Pale Violet Red Leopard", category: "Local Services", niche: "Service business", url: "https://palevioletred-leopard-979578.hostingersite.com" },
  { name: "Karakoramtravels", category: "Local Services", niche: "Travel & tourism", url: "https://karakoramtravels.com" },
];

export const experience = [
  {
    role: "WordPress Custom Developer",
    company: "Epazz Inc.",
    period: "Sep 2025 – Present",
    points: [
      "WordPress custom development",
      "Plugin, template & widget development",
      "Version control with Git & Bitbucket",
      "Working on AWS-based environments",
    ],
  },
  {
    role: "WordPress Developer",
    company: "E1SOL",
    period: "Apr 2025 – Aug 2025",
    points: ["WordPress web development and design", "E-commerce solutions"],
  },
  {
    role: "WordPress Developer",
    company: "Devtics Technologies",
    period: "Aug 2022 – Feb 2025",
    points: [
      "WordPress plugin & theme customization",
      "Custom styling with additional CSS",
    ],
  },
  {
    role: "Freelance WordPress Developer",
    company: "Self-employed",
    period: "Mar 2021 – Aug 2022",
    points: ["WordPress web development", "Custom web development"],
  },
];

export const ongoing = {
  name: "Othership",
  url: "https://othership.com",
  role: "WordPress Custom Developer",
  niche: "Workspace & workplace management software",
  points: [
    "Developed custom plugins and templates",
    "Improved site performance and on-page SEO",
  ],
};

export const skillGroups = [
  { title: "CMS & Builders", items: ["WordPress", "Elementor", "Divi", "Gutenberg", "WooCommerce", "JetEngine", "ACF"] },
  { title: "Languages", items: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"] },
  { title: "Frameworks & Tools", items: ["Bootstrap", "Git", "Bitbucket", "AWS", "MS Office"] },
  { title: "Expertise", items: ["Custom Plugins", "Theme Development", "Speed Optimization", "On-Page SEO", "Responsive Design", "API Integrations"] },
];

