import React, { useState, useEffect } from 'react';
import {
    Terminal,
    Code2,
    Layers,
    Cpu,
    Database,
    Smartphone,
    Server,
    Globe,
    Sparkles,
    Clock,
    ArrowUpRight,
    CheckCircle2,
    MessageSquare,
    ChevronLeft,
    ChevronRight,
    Download,

    ExternalLink,
    ShieldCheck,
    Workflow,
    Zap,
    Send,
    Check,
    Menu,
    X,
    PhoneCall,
    Star
} from 'lucide-react';

// --- DATA STRUCTURES & MOCK DATA ---

interface Project {
    id: string;
    title: string;
    category: 'SaaS' | 'Admin Panel' | 'Mobile App' | 'Web App';
    description: string;
    technologies: string[];
    features: string[];
    metrics: string;
    imageColor: string; // Dynamic modern gradients instead of missing screenshot files
    mockPreview: string; // Text representation of the app's UI
    demoUrl: string;
    sourceUrl?: string;
}

interface Testimonial {
    name: string;
    role: string;
    company: string;
    avatarLetter: string;
    avatarBg: string;
    text: string;
    rating: number;
    tags: string[];
}

interface BlogArticle {
    id: string;
    title: string;
    category: string;
    readTime: string;
    date: string;
    excerpt: string;
    content: string;
    imageColor: string;
}

const PROFILE_IMAGE = "/images/tawhid.png";

const PROJECTS: Project[] = [
    {
        id: 'invoicing-saas',
        title: 'Freelancer Invoicing SaaS',
        category: 'SaaS',
        description: 'A multi-tenant invoice automation platform designed for international freelancers and agencies. Handles automated PDF generations, recurring subscription billing, dynamic invoice templates, and real-time client payment dashboards.',
        technologies: ['Laravel', 'React.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe API'],
        features: ['Multi-tenant database schema', 'Automated recurring billing cycles', 'Responsive custom template editor', 'Stripe invoice webhooks integration'],
        metrics: '$2.5M+ processed securely',
        imageColor: 'from-blue-600 to-indigo-700',
        mockPreview: '📄 FreelancerInvoice Pro | Active Subscriptions: 142 | Revenue: $18,450/mo',
        demoUrl: '#demo',
        sourceUrl: '#github'
    },
    {
        id: 'pos-system',
        title: 'POS Management System',
        category: 'Admin Panel',
        description: 'An enterprise-grade cloud-hosted POS solution optimized for retail networks with multi-branch management requirements. Synchronizes and compiles real-time inventory adjustments, handles hardware-level barcode scanning, and prints receipts gracefully.',
        technologies: ['React.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'WebSockets'],
        features: ['Instant inventory depletion tracking', 'Offline support with local storage caching', 'Role-based manager controls', 'Hardware barcode scanner API triggers'],
        metrics: '99.9% uptime across 12 physical branches',
        imageColor: 'from-purple-600 to-pink-700',
        mockPreview: '📊 POS Dashboard | Branch A: Active | Transaction count: 12,401',
        demoUrl: '#demo'
    },
    {
        id: 'rx-system',
        title: 'Doctor Prescription System',
        category: 'Web App',
        description: 'A secure healthcare management application allowing practitioners to draft, generate, and sign digital prescriptions. Integrates a custom drug interactions warning API and offers real-time patient appointment schedulers with SMS reminders.',
        technologies: ['Next.js', 'PostgreSQL', 'Node.js', 'TypeScript', 'Tailwind CSS'],
        features: ['HIPAA compliant encrypted databases', 'Custom AI drug compatibility alerts', 'Interactive doctor appointment schedulers', 'Automated digital PDF signing and export'],
        metrics: 'Used by 240+ certified doctors',
        imageColor: 'from-cyan-600 to-blue-700',
        mockPreview: '🏥 RxPort | Prescriptions issued today: 1,842 | Doctors online: 45',
        demoUrl: '#demo'
    },
    {
        id: 'card-scanner',
        title: 'Business Card Scanner App',
        category: 'Mobile App',
        description: 'A cross-platform mobile application that scans paper business cards, extracts data using machine learning OCR APIs, and automatically drafts and persists visual contacts on-device with auto email follow-ups.',
        technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Google ML Kit OCR'],
        features: ['On-device machine learning text extraction', 'Automatic CSV and Excel list exporter', 'Intelligent smart phone contacts integration', 'Pre-configured email follow-up shortcuts'],
        metrics: '50k+ downloads on App Store & Google Play',
        imageColor: 'from-amber-600 to-orange-700',
        mockPreview: '📱 Scanned Cards: 1,402 | Extracted accuracy: 99.4% | Contacts: Synced',
        demoUrl: '#demo'
    },
    {
        id: 'crm-dashboard',
        title: 'CRM Dashboard Console',
        category: 'Admin Panel',
        description: 'A high-definition executive control room designed for scaling B2B agencies. Displays responsive data charts of sales pipelines, active customer journeys, key performance indicators, task assignments, and internal lead sources.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'REST APIs'],
        features: ['Dynamic drag-and-drop lead kanban boards', 'Optimized Recharts visualization vectors', 'Secure role-based access control filters', 'Internal messaging socket notifications'],
        metrics: 'Boosted client close rate by 24%',
        imageColor: 'from-teal-600 to-emerald-700',
        mockPreview: '💼 CRM Admin | Pipelines active: 4 | Leads generated: +328 this week',
        demoUrl: '#demo',
        sourceUrl: '#github'
    },
    {
        id: 'ecommerce-admin',
        title: 'E-commerce Admin Orchestrator',
        category: 'Admin Panel',
        description: 'A ultra-fast catalog management dashboard for high-volume retailers. Includes batch product editing, discount engine routers, flexible product variants builders, smart order fulfillment streams, and graphical revenue analytical panels.',
        technologies: ['Laravel', 'React.js', 'MySQL', 'Tailwind CSS', 'Chart.js'],
        features: ['Bulk Excel spreadsheet parser and validator', 'Smart category voucher engine rules', 'Real-time stripe checkout hooks', 'Automated invoice email receipts scheduler'],
        metrics: 'Handles 15,000 requests per minute',
        imageColor: 'from-indigo-600 to-violet-700',
        mockPreview: '🛒 ShopForce | Active products: 24,103 | Pending shipments: 84',
        demoUrl: '#demo',
        sourceUrl: '#github'
    }
];

const TESTIMONIALS: Testimonial[] = [
    {
        name: 'Alexander Lindqvist',
        role: 'Founder & CEO',
        company: 'Svea SaaS Ventures (Sweden)',
        avatarLetter: 'A',
        avatarBg: 'bg-blue-600',
        text: "Tawhid Jony is a world-class Laravel and React engineer. He structured our multi-tenant SaaS application from the ground up, keeping code exceptionally clean, highly performant, and perfectly optimized for security. He is highly responsive, possesses great business understanding, and delivers on time. Absolute professional!",
        rating: 5,
        tags: ['SaaS Build', 'Laravel', 'React']
    },
    {
        name: 'Sarah Jenkins',
        role: 'Product Director',
        company: 'Apex Digital Systems (USA)',
        avatarLetter: 'S',
        avatarBg: 'bg-purple-600',
        text: "We hired Tawhid to rebuild our slow admin panel dashboard in Next.js. The difference was night and day! The page size was reduced by 70%, loading times plummeted, and the database architecture he engineered is incredibly robust and easy to maintain. We have signed a long-term retainer with him.",
        rating: 5,
        tags: ['Next.js', 'Database Design']
    },
    {
        name: 'Mustafa Al-Kadhimi',
        role: 'Operations Lead',
        company: 'Kadhimi Logistics (UAE)',
        avatarLetter: 'M',
        avatarBg: 'bg-cyan-600',
        text: "Tawhid built our flagship Flutter tracking application and Laravel REST APIs. His grasp of system architecture is remarkable. The APIs are blazing fast and handle spikes beautifully. His level of documentation is supreme, and he communicates flawlessly. Highly recommended for complex solutions.",
        rating: 5,
        tags: ['Mobile Application', 'REST APIs', 'MySQL']
    }
];

const BLOG_ARTICLES: BlogArticle[] = [
    {
        id: 'laravel-scale',
        title: 'Strategies for Scaling Laravel APIs Beyond 1M Daily Requests',
        category: 'Backend Architecture',
        readTime: '6 min read',
        date: 'June 4, 2026',
        excerpt: 'Explore how to leverage Redis caching layers, query optimizations, horizontal database partitioning, and queue workers to engineer a highly resilient Laravel REST API.',
        content: `Scaling a PHP applications doesn't have to be a nightmare. When we developed an enterprise dashboard handling millions of queries daily, we encountered various bottlenecks in the MVC runtime that standard tutorials ignore.

    Here are the core paradigms we utilized to secure performance:
    1. Read-Write Database Segregation: By configuring separate connection arrays in database.php for reads and writes, we routed transactional requests to a writable master and heavy read loads to read replicas.
    2. Intelligent Query Chunking & Eager Loading: Standard database leaks occur due to N+1 query problems. By utilizing strict compiler rules to disable lazy loading (Model::preventLazyLoading()), we eliminated redundant query cycles.
    3. Queue Worker Pools: Delegating intensive work like PDF rendering, OCR reading, and email dispatch networks to Redis-backed supervisor workers keeps API responses below 120ms.
    
    Implementing these changes led to a stable response average of 72ms even during traffic surges.`,
        imageColor: 'from-red-600 to-rose-700'
    },
    {
        id: 'nextjs-lcp',
        title: 'Optimizing Next.js LCP: A Case Study on Core Web Vitals',
        category: 'Frontend Performance',
        readTime: '5 min read',
        date: 'May 20, 2026',
        excerpt: 'Deep dive into boosting your Lighthouse score and Largest Contentful Paint (LCP) in Next.js applications using advanced image streaming, font preloads, and dynamic routing.',
        content: `Core Web Vitals are directly linked to client conversion rates. In our latest enterprise portal, lowering Largest Contentful Paint (LCP) from 3.5s to 1.1s translated into a 18% improvement in registration completions.

    How did we do it?
    - Next.js Image Component Strategy: We prioritized above-the-fold visual components using the priority attribute, forcing Google servers to preheat cache routing.
    - Font Pre-connecting: We decoupled third-party script bloat and embedded local webfonts utilizing local NextFont configurations. This eliminated any flash-of-unstyled-text (FOUT).
    - Lightweight Bundle Splits: By utilizing transient dynamic loaders (dynamic() from next/dynamic), we shaved 240kB off the initial Javascript bundle size delivered to mobile devices.`,
        imageColor: 'from-blue-600 to-cyan-700'
    },
    {
        id: 'secure-rest-api',
        title: 'Designing Robust REST APIs: Best Practices for Versioning and Security',
        category: 'System Design',
        readTime: '8 min read',
        date: 'April 12, 2026',
        excerpt: 'A comprehensive checklist for engineering secure production APIs: including rate limiting, JWT strategies, sanitization, and structured JSON standardizations.',
        content: `Building APIs is straightforward, but securing them for financial or enterprise access is a strict discipline. Let's explore the absolute minimum security suite for any SaaS network:

    - Architectural Versioning: Always wrap APIs in specific routes (e.g., /api/v1/). Prefer header-based versioning for continuous delivery, or route-based versioning for straightforward client consumption.
    - Triple Protection: Set up throttle middleware in Laravel or Express to enforce strict API rate limiting (e.g., maximum 60 requests per minute from a single IP signature).
    - Token Expiring: Use state-locked JWT tokens with low time-to-live paired with cryptographically secure refresh scopes inside HttpOnly, SameSite cookie architectures.`,
        imageColor: 'from-purple-600 to-indigo-700'
    }
];

export default function Home() {
    // Navigation & UI States
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'All' | 'SaaS' | 'Admin Panel' | 'Mobile App' | 'Web App'>('All');
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

    // Resume Download State
    const [downloading, setDownloading] = useState(false);

    // Custom Dynamic Interactive Project Timeline Estimator (SaaS pricing/timeline calculator - great conversion feature!)
    const [calcService, setCalcService] = useState<'saas' | 'admin' | 'website' | 'mobile'>('saas');
    const [calcScale, setCalcScale] = useState<'mvp' | 'standard' | 'enterprise'>('standard');
    const [calculatedWeeks, setCalculatedWeeks] = useState(6);
    const [estimatedCost, setEstimatedCost] = useState(5500);

    // Form states
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        budget: 'custom',
        details: ''
    });
    const [formSubmitting, setFormSubmitting] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [generatedProposal, setGeneratedProposal] = useState<string>('');

    // Timeline effect for Estimator
    useEffect(() => {
        let baseWeeks = 4;
        let basePrice = 3000;

        switch (calcService) {
            case 'saas': baseWeeks = 8; basePrice = 7500; break;
            case 'admin': baseWeeks = 6; basePrice = 5000; break;
            case 'website': baseWeeks = 4; basePrice = 3000; break;
            case 'mobile': baseWeeks = 10; basePrice = 9000; break;
        }

        let multiplier = 1;
        switch (calcScale) {
            case 'mvp': multiplier = 0.7; break;
            case 'standard': multiplier = 1.0; break;
            case 'enterprise': multiplier = 1.6; break;
        }

        setCalculatedWeeks(Math.round(baseWeeks * multiplier));
        setEstimatedCost(Math.round(basePrice * multiplier));
    }, [calcService, calcScale]);

    // Testimonial Navigation
    const nextTestimonial = () => {
        setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };
    const prevTestimonial = () => {
        setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    // Handle inquiry submission & generate active client response based on budget & name
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;

        setFormSubmitting(true);

        setTimeout(() => {
            setFormSubmitting(false);
            setFormSuccess(true);

            // Auto generate a custom proposal draft based on inputs
            // const serviceWord =
            //     calcService === 'saas' ? 'SaaS Web Platform' :
            //         calcService === 'admin' ? 'Interactive Admin Dashboard' :
            //             calcService === 'mobile' ? 'Flutter Mobile Application' : 'Custom Web Application';

            const proposalText = `Thank you, ${formData.name}! An automated, preliminary roadmap draft has been generated for ${formData.company || 'your project'}:

• Tech Stack Draft: ${calcService === 'saas' ? 'Laravel + React + PostgreSQL' : calcService === 'mobile' ? 'Flutter + Firebase' : 'Next.js + TypeScript + Node.js'}
• Suggested Phase 1 (Weeks 1-2): Database design, modular authentication & clean architecture boilerplate.
• Suggested Phase 2 (Weeks 3-5): Responsive core workflows, user-specific data portals & payment rails.
• Estimated Launch Timeline: ~${calculatedWeeks} weeks.
• Estimated Project Scale: Budget tier matches local allocation of $${estimatedCost.toLocaleString()}.

I have received your official inquiry notification. A formal PDF proposal with scheduling link has been sent to ${formData.email}. Let's build something exceptional!`;

            setGeneratedProposal(proposalText);
        }, 1500);
    };

    // Download CV action simulator
    const triggerResumeDownload = () => {
        setDownloading(true);
        setTimeout(() => {
            setDownloading(false);
            // Simulate real download
            const content = `---- TAWHID JONY - SENIOR FULL STACK DEVELOPER PORTFOLIO ----\nExperience: 6+ Years\nLocation: Bangladesh\nContact: tawhid.jony.jhm@gmail.com\nSpecialties: Laravel, Express, React, Next.js, Flutter, Databases, System Architecture`;
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = "Tawhid_Jony_FullStack_Resume.txt";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 1000);
    };

    // Filter Projects
    const filteredProjects = activeTab === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeTab);

    // Generate GitHub-style green grid list mock of contributions (7 rows, 52 cols)
    const renderGithubGrid = () => {
        const grid = [];
        const seed = [1, 2, 0, 3, 1, 4, 2, 0, 1, 2, 4, 3, 2, 1, 0, 3, 1, 2, 0, 4, 3, 1, 2, 3, 1, 4, 2, 2, 0, 3, 1, 2, 4, 3, 2, 1, 0, 2, 1, 3, 4, 2, 1, 0, 3, 1, 2, 0, 4, 3, 1, 2];

        // Render 7 columns of dots (days of week) by 42 rows (recent weeks)
        for (let day = 0; day < 7; day++) {
            const rowDots = [];
            for (let wk = 0; wk < 42; wk++) {
                const hash = (day * wk + wk * 3) % seed.length;
                const level = seed[hash];
                let color = 'bg-[#1e293b]'; // 0
                if (level === 1) color = 'bg-emerald-950';
                if (level === 2) color = 'bg-emerald-800';
                if (level === 3) color = 'bg-emerald-600';
                if (level === 4) color = 'bg-emerald-400';
                rowDots.push(
                    <div
                        key={`${day}-${wk}`}
                        className={`w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-sm ${color} transition-colors duration-300 hover:scale-125 hover:bg-cyan-400 cursor-pointer`}
                        title={`Active commits contribution index: ${level * 4}`}
                    />
                );
            }
            grid.push(
                <div key={day} className="flex gap-[3px] select-none">
                    {rowDots}
                </div>
            );
        }
        return grid;
    };

    const [fetchData, setFetchData] = useState([])

    async function getUserData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data
        } catch (error) {
            console.error('Fetch failed:', error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData();
            setFetchData(data)
        };
        fetchData();
    }, []);

    console.log("fetchData=======", fetchData);
    


    return (
        <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] overflow-x-hidden selection:bg-blue-600 selection:text-white">

            {/* Decorative ambient background glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-700/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-[1200px] right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-purple-700/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[800px] left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-700/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

            {/* --- STICKY NAVIGATION BAR --- */}
            <header id="navbar" className="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 select-none">
                <div className="flex justify-between items-center px-5 py-3 h-16 bg-slate-800/40 border border-slate-700/50 rounded-2xl backdrop-blur-sm shadow-lg">

                    {/* Logo & Status */}
                    <div className="flex items-center gap-3">
                        <a href="#hero" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                                TJ
                            </div>
                            <div className="hidden sm:block">
                                <span className="block font-bold text-sm tracking-tight heading-font text-white">Tawhid Jony</span>
                                <span className="block text-[10px] text-slate-400 mono-font">Full Stack Architect</span>
                            </div>
                        </a>

                        {/* Live Availability Badge */}
                        <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] uppercase font-bold text-green-500 tracking-wider hidden lg:inline">Available for Projects</span>
                            <span className="text-[10px] uppercase font-bold text-green-500 tracking-wider lg:hidden inline">Available</span>
                        </div>
                    </div>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400 font-medium">
                        <a href="#about" className="hover:text-white hover:border-b-2 hover:border-[#3B82F6] pb-0.5 transition-all">About</a>
                        <a href="#skills" className="hover:text-white hover:border-b-2 hover:border-[#8B5CF6] pb-0.5 transition-all">Skills</a>
                        <a href="#services" className="hover:text-white hover:border-b-2 hover:border-[#06B6D4] pb-0.5 transition-all">Services</a>
                        <a href="#projects" className="hover:text-white hover:border-b-2 hover:border-[#3B82F6] pb-0.5 transition-all">Projects</a>
                        <a href="#timeline" className="hover:text-white hover:border-b-2 hover:border-[#8B5CF6] pb-0.5 transition-all">Experience</a>
                        <a href="#blog" className="hover:text-white hover:border-b-2 hover:border-[#06B6D4] pb-0.5 transition-all">Blog</a>
                        <a href="#contact" className="hover:text-white hover:border-b-2 hover:border-[#3B82F6] pb-0.5 transition-all">Contact</a>
                    </nav>

                    {/* Desktop Action Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={triggerResumeDownload}
                            disabled={downloading}
                            className="px-4 py-2 bg-slate-800 border border-slate-700 hover:bg-slate-750 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer disabled:opacity-75"
                        >
                            <Download className={`w-3.5 h-3.5 ${downloading ? 'animate-bounce' : ''}`} />
                            {downloading ? 'Downloading...' : 'Resume'}
                        </button>
                        <a
                            href="#contact"
                            className="px-4 py-2 bg-[#3B82F6] hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-500/20"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Hamburger Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-xl"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-2 p-4 bg-slate-800/90 border border-slate-700/50 rounded-2xl backdrop-blur-md shadow-xl space-y-4 animate-fadeIn">
                        <nav className="flex flex-col gap-3 font-medium text-slate-300">
                            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-700/30 hover:text-blue-400">About</a>
                            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-700/30 hover:text-blue-400">Skills</a>
                            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-700/30 hover:text-[#06B6D4]">Services</a>
                            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-700/30 hover:text-blue-400">Projects</a>
                            <a href="#timeline" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-700/30 hover:text-[#8B5CF6]">Experience</a>
                            <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-700/30 hover:text-[#06B6D4]">Blog</a>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-blue-400">Contact</a>
                        </nav>
                        <div className="pt-2 flex flex-col gap-3">
                            <button
                                onClick={() => { triggerResumeDownload(); setMobileMenuOpen(false); }}
                                className="w-full justify-center px-4 py-2.5 text-xs font-bold rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-100 border border-slate-700/50 flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" /> Download Resume
                            </button>
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full text-center px-4 py-2.5 text-xs font-bold rounded-xl bg-[#3B82F6] text-white"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>
                )}
            </header>

            <div className='pt-8 pb-16 md:pt-16 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <ul className='space-y-4'>
                    {fetchData?.map((item:any, index)=> {
                        return (
                            <li key={index} className='border rounded px-2 py-1 border-gray-600'>{item?.name}</li>
                        )
                    })}
                </ul>
            </div>

            {/* --- HERO SECTION --- */}
            <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                    {/* Hero Left Content - Styled as Bento Main Card */}
                    <div className="lg:col-span-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-6 sm:p-10 relative overflow-hidden group flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 blur-[80px] rounded-full -mr-20 -mt-20"></div>

                        <div className="relative z-10 space-y-6">
                            {/* Experience Pulse Badge */}
                            <div className="inline-block px-3 py-1 bg-blue-500/10 text-[#3B82F6] border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                Senior Full Stack Developer
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-4xl lg:text-5xl font-bold leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 heading-font">
                                Building Scalable Web Applications <br />That <span className="text-[#3B82F6]">Grow Your Business</span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
                                I help startups develop high-performance web applications, SaaS platforms, and APIs using Laravel, React, Next.js, and modern technologies.
                            </p>

                            {/* Dual Actions CTA */}
                            <div className="flex flex-wrap gap-4 pt-2">
                                <a
                                    href="#contact"
                                    className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xl hover:scale-105 transition-transform duration-305"
                                >
                                    <span>Hire Me Now</span>
                                    <PhoneCall className="w-4 h-4 text-slate-800" />
                                </a>
                                <a
                                    href="#projects"
                                    className="px-6 py-3 bg-slate-800 border border-slate-705 border-slate-700 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors hover:bg-slate-750"
                                >
                                    <span>View Projects</span>
                                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                                </a>
                            </div>
                        </div>

                        {/* Primary Trust Signals Counters */}
                        <div className="grid grid-cols-3 gap-4 pt-6 mt-8 border-t border-slate-700/50 relative z-10">
                            <div className="p-1">
                                <span className="block text-2xl sm:text-3xl font-bold text-white heading-font">120+</span>
                                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-tighter">PROJECTS DONE</span>
                            </div>
                            <div className="p-1">
                                <span className="block text-2xl sm:text-3xl font-bold text-[#06B6D4] heading-font">6+ Yrs</span>
                                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-tighter">EXPERIENCE</span>
                            </div>
                            <div className="p-1">
                                <span className="block text-2xl sm:text-3xl font-bold text-[#8B5CF6] heading-font">15+</span>
                                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-tighter">TECH STACKS</span>
                            </div>
                        </div>

                    </div>

                    {/* Hero Right Visual Column - Premium 3D Bento Portrait Grid */}
                    <div className="lg:col-span-4 relative flex flex-col justify-between h-full">
                        <div className="relative group mx-auto max-w-sm lg:max-w-none h-full w-full">

                            {/* Outer neon color borders */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] rounded-3xl blur-md opacity-20 group-hover:opacity-45 transition duration-700 pointer-events-none" />

                            {/* Content box */}
                            <div className="relative h-full rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl p-6 space-y-6 flex flex-col justify-between">

                                {/* Visual Terminal Header Mockup */}
                                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                                        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                                    </div>
                                    <span className="text-[11px] text-slate-500 mono-font">developer.terminal — bash</span>
                                    <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                                    </div>
                                </div>

                                {/* Developer Illustration Block */}
                                <div className="relative w-full aspect-square max-h-[300px] rounded-xl overflow-hidden bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 flex flex-col items-center justify-center p-4 border border-slate-800/80 group">

                                    {/* Since image png is a physical file we don't have, we can check if there's any way to display a gorgeous UI image representation or embed a highly styled placeholder. Let's build a stunning abstract coder canvas with embedded profile layout. */}

                                    {/* Subtle vector mesh representing developer network */}
                                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                                    {/* Elegant central headshot block */}
                                    <div className="relative z-10 w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 shadow-xl">
                                        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center relative">
                                            <img className="w-full h-full object-cover" src={PROFILE_IMAGE} alt="tawhidjony" />
                                        </div>
                                    </div>

                                    {/* Floating badge for experience inside the image box */}
                                    <div className="absolute top-4 left-4 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-lg text-[10px] text-blue-400 font-semibold flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Laravel Specialist
                                    </div>

                                    <div className="absolute bottom-4 right-4 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-lg text-[10px] text-purple-400 font-semibold flex items-center gap-1">
                                        <Terminal className="w-3 h-3 text-purple-400 font-bold" /> React/Next.js Expert
                                    </div>

                                    {/* Core skills ring simulation */}
                                    <div className="absolute inset-0 pointer-events-none border-2 border-dashed border-slate-800/45 rounded-xl animate-[spin_100s_linear_infinite]" />
                                </div>

                                {/* Simulated interactive live IDE terminal code lines */}
                                <div className="text-left space-y-1 text-xs text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800/80 font-mono overflow-x-auto select-all">
                                    <p><span className="text-pink-500">const</span> developer = &#123;</p>
                                    <p className="pl-4">name: <span className="text-emerald-400">"Tawhid Jony"</span>,</p>
                                    <p className="pl-4">role: <span className="text-emerald-400">"Senior Full Stack & SaaS Developer"</span>,</p>
                                    <p className="pl-4">experience: <span className="text-amber-400">"6+ Years"</span>,</p>
                                    <p className="pl-4">location: <span className="text-emerald-400">"Bangladesh 🇧🇩"</span>,</p>
                                    <p className="pl-2.5">
                                        skills: [
                                        <span className="text-blue-400">"Laravel"</span>,
                                        <span className="text-blue-400">"React"</span>,
                                        <span className="text-blue-400">"Next.js"</span>
                                        ]
                                    </p>
                                    <p>&#125;;</p>
                                    <p className="text-slate-500 text-[11px] pt-1">// Currently accepting international contracts</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- BRAND SCROLL ticker --- */}
            <section className="border-y border-slate-800/40 bg-slate-900/35 py-8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="block text-xs uppercase text-slate-500 font-semibold tracking-widest mb-6">ENGINEERING APPLICATIONS USING THE BEST MODERN TECH STACKS</span>

                    {/* Loop list columns */}
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm font-semibold text-slate-400">
                        <span className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
                            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> PHP / Laravel
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> React.js
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Next.js
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-blue-300 transition-colors">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-300" /> TypeScript / JS
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Flutter Mobile
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-sky-500 transition-colors">
                            <span className="w-2.5 h-2.5 rounded-full bg-sky-500" /> MySQL / Postgres
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> Docker DevOps
                        </span>
                    </div>

                </div>
            </section>

            {/* --- SECTION 2: ABOUT ME --- */}
            <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Visual Left - The Philosophical Code Card */}
                    <div className="lg:col-span-5">
                        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 border border-slate-800/80 relative overflow-hidden shadow-2xl backdrop-blur-sm group">
                            <div className="absolute top-0 right-0 p-4 opacity-15">
                                <Code2 className="w-24 h-24 text-blue-500" />
                            </div>

                            <h3 className="text-lg font-bold text-white heading-font mb-4 flex items-center gap-2">
                                <Terminal className="w-5 h-5 text-blue-400" />
                                The Core Development Philosophy
                            </h3>

                            <div className="space-y-4 text-xs font-mono text-slate-350">
                                <div className="pb-3 border-b border-slate-800/60">
                                    <span className="text-blue-450 block font-bold mb-1 text-[#3B82F6]">// 1. UNCOMPROMISING PERFORMANCE</span>
                                    <p className="text-[11px] leading-relaxed font-sans text-slate-400">
                                        Sloppy database queries kill user retention. I write highly indexed database schemas and implement robust caching arrays to keep server feedback instantaneous.
                                    </p>
                                </div>
                                <div className="pb-3 border-b border-slate-800/60">
                                    <span className="text-purple-450 block font-bold mb-1 text-[#8B5CF6]">// 2. ENTERPRISE SCALABILITY</span>
                                    <p className="text-[11px] leading-relaxed font-sans text-slate-400">
                                        Startups expand fast. I build systems using stateless API structures, isolated services, and reliable containerization so traffic surges do not break operations.
                                    </p>
                                </div>
                                <div>
                                    <span className="text-cyan-450 block font-bold mb-1 text-[#06B6D4]">// 3. CLEAN MAINTAINABILITY</span>
                                    <p className="text-[11px] leading-relaxed font-sans text-slate-400">
                                        Spaghetti code slows down feature rollouts. I follow strict DRY (Don't Repeat Yourself), SOLID design principles, and comprehensive documentation patterns.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Texts Right */}
                    <div className="lg:col-span-7 space-y-6">
                        <span className="text-xs uppercase text-blue-400 tracking-widest font-extrabold block">BIOGRAPHY & VALUES</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            Engineering Clean Digital Products That Deliver High Business Value
                        </h2>
                        <div className="space-y-4 text-slate-350 leading-relaxed text-sm">
                            <p>
                                Hello! I am <strong>Tawhid Jony</strong>, a dedicated <strong>Senior Full Stack Developer & Systems Architect</strong> based in Bangladesh. With over 6 years of deep-dive practical expertise in designing, coding, and scaling robust web landscapes, I operate at the intersection of powerful backend logic and flawless frontend visual execution.
                            </p>
                            <p>
                                My professional specialization encompasses full product lifecycles—ranging from multi-tenant SaaS application engineering, scalable RESTful API deployment, custom admin dashboard orchestrators, to responsive cross-platform Flutter mobile builds.
                            </p>
                            <p>
                                Over the years, startup founders, business owners, and international agencies have relied on my ability to translate abstract product blueprints into highly structured, performant, and production-ready applications. I don't just write lines of code; I design business growth engines.
                            </p>
                        </div>

                        {/* Quick Metrics Tag */}
                        <div className="flex gap-3 flex-wrap pt-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/5 border border-[#3B82F6]/20 shadow-sm">
                                <Check className="w-4 h-4 text-[#3B82F6]" />
                                <span className="text-xs font-bold text-slate-250">Clean MVC Pattern Coding</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 shadow-sm">
                                <Check className="w-4 h-4 text-[#8B5CF6]" />
                                <span className="text-xs font-bold text-slate-250">Stateless API Deployments</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#06B6D4]/5 border border-[#06B6D4]/20 shadow-sm">
                                <Check className="w-4 h-4 text-[#06B6D4]" />
                                <span className="text-xs font-bold text-slate-250">Continuous Support Guarantee</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- SECTION 3: SKILLS CARD GRID --- */}
            <section id="skills" className="py-20 bg-slate-950/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <span className="text-xs uppercase text-indigo-400 tracking-widest font-extrabold block">TECHNICAL EXPERTISE</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font">Comprehensive Tech Stack Matrix</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
                        <p className="text-slate-400 text-sm">
                            A comprehensive view of my technologies and execution levels. Specialized in integrating these stacks to form incredibly fast, secure, and modern digital platforms.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Backend Cards */}
                        <div className="rounded-3xl bg-slate-900/50 p-6 sm:p-8 border border-slate-800 hover:border-[#3B82F6]/40 hover:bg-slate-900/80 transition-all duration-300 space-y-6 shadow-md">
                            <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                                <h3 className="font-bold text-white heading-font flex items-center gap-2.5">
                                    <Server className="w-5 h-5 text-[#3B82F6]" />
                                    Backend Architecture
                                </h3>
                                <span className="text-[9px] uppercase font-bold text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20 px-2 py-0.5 rounded tracking-widest">PRIMARY</span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs font-semibold mb-1">
                                        <span className="text-slate-350 font-sans">PHP / Laravel Framework</span>
                                        <span className="text-slate-400 font-mono">95%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                                        <div className="w-[95%] h-full bg-gradient-to-r from-[#3B82F6] to-indigo-500 rounded-full animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-semibold mb-1">
                                        <span className="text-slate-350 font-sans">REST APIs Development</span>
                                        <span className="text-slate-400 font-mono">92%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                                        <div className="w-[92%] h-full bg-gradient-to-r from-[#3B82F6] to-indigo-500 rounded-full animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-semibold mb-1">
                                        <span className="text-slate-350 font-sans">System Architecture & Design</span>
                                        <span className="text-slate-400 font-mono">88%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                                        <div className="w-[88%] h-full bg-gradient-to-r from-[#3B82F6] to-indigo-500 rounded-full animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Frontend Cards */}
                        <div className="rounded-3xl bg-slate-900/50 p-6 sm:p-8 border border-slate-800 hover:border-[#8B5CF6]/40 hover:bg-slate-900/80 transition-all duration-300 space-y-6 shadow-md">
                            <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                                <h3 className="font-bold text-white heading-font flex items-center gap-2.5">
                                    <Code2 className="w-5 h-5 text-[#8B5CF6]" />
                                    Frontend Engineering
                                </h3>
                                <span className="text-[9px] uppercase font-bold text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 px-2 py-0.5 rounded tracking-widest">PRIMARY</span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs font-semibold mb-1">
                                        <span className="text-slate-350 font-sans">ReactJS / NextJS Core</span>
                                        <span className="text-slate-400 font-mono">90%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                                        <div className="w-[90%] h-full bg-gradient-to-r from-[#8B5CF6] to-indigo-500 rounded-full animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-semibold mb-1">
                                        <span className="text-slate-350 font-sans">TypeScript / ESNext</span>
                                        <span className="text-slate-400 font-mono">85%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                                        <div className="w-[85%] h-full bg-gradient-to-r from-[#8B5CF6] to-indigo-500 rounded-full animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-semibold mb-1">
                                        <span className="text-slate-350 font-sans">Tailwind CSS Styling</span>
                                        <span className="text-slate-400 font-mono">95%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                                        <div className="w-[95%] h-full bg-gradient-to-r from-[#8B5CF6] to-indigo-500 rounded-full animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile / Cross Platforms */}
                        <div className="rounded-3xl bg-slate-900/50 p-6 sm:p-8 border border-slate-800 hover:border-[#06B6D4]/40 hover:bg-slate-900/80 transition-all duration-300 space-y-6 shadow-md">
                            <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                                <h3 className="font-bold text-white heading-font flex items-center gap-2.5">
                                    <Smartphone className="w-5 h-5 text-[#06B6D4]" />
                                    Mobile & Databases
                                </h3>
                                <span className="text-[9px] uppercase font-bold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-2 py-0.5 rounded tracking-widest">SPECIALIST</span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs font-semibold mb-1">
                                        <span className="text-slate-350 font-sans">Flutter / Dart Mobile Apps</span>
                                        <span className="text-slate-400 font-mono">80%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                                        <div className="w-[80%] h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-semibold mb-1">
                                        <span className="text-slate-350 font-sans">MySQL & PostgreSQL Design</span>
                                        <span className="text-slate-400 font-mono">86%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                                        <div className="w-[86%] h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-semibold mb-1">
                                        <span className="text-slate-350 font-sans">Docker Containerization</span>
                                        <span className="text-slate-400 font-mono">78%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                                        <div className="w-[78%] h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* --- SECTION 4: SERVICES SECTION --- */}
            <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <span className="text-xs uppercase text-blue-400 tracking-widest font-extrabold block">WHAT I OFFER</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font">Specialized Software Services</h2>
                    <p className="text-slate-400 text-sm">
                        I build tailored architectural solutions, keeping client commercial achievements centrally in mind. High-quality services designed for immediate release.
                    </p>
                </div>

                {/* Cards Grid (8 Services) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Service 1: Custom Web App Development */}
                    <div className="p-6 sm:p-8 bg-slate-800/20 border border-slate-705/40 rounded-3xl hover:border-slate-600 hover:bg-slate-800/30 transition-all duration-300 flex flex-col justify-between group shadow-lg">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform duration-300">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-white heading-font text-base leading-tight">Custom Web Application Development</h3>
                            <p className="text-xs text-slate-450 leading-relaxed font-sans text-slate-400">
                                Full-scale tailored web systems aligned exactly to your specific operational workflows, designed for speed and security database structures.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-800/40 mt-5 space-y-1">
                            <span className="block text-[9px] uppercase font-bold text-blue-400 tracking-widest">KEY BENEFIT</span>
                            <span className="text-xs text-slate-350 font-medium flex items-center gap-1.5 pt-0.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" /> Aligns perfectly with vision
                            </span>
                        </div>
                    </div>

                    {/* Service 2: SaaS Development */}
                    <div className="p-6 sm:p-8 bg-slate-800/20 border border-slate-705/40 rounded-3xl hover:border-slate-600 hover:bg-slate-800/30 transition-all duration-300 flex flex-col justify-between group shadow-lg">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform duration-300">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-white heading-font text-base leading-tight">SaaS Application Development</h3>
                            <p className="text-xs text-slate-450 leading-relaxed font-sans text-slate-400">
                                Engineering multi-tenant platforms with robust user roles segregation, integrated Stripe subscription pipelines, and automated dashboard controllers.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-800/40 mt-5 space-y-1">
                            <span className="block text-[9px] uppercase font-bold text-purple-400 tracking-widest">KEY BENEFIT</span>
                            <span className="text-xs text-slate-350 font-medium flex items-center gap-1.5 pt-0.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" /> Secure multi-tenant architecture
                            </span>
                        </div>
                    </div>

                    {/* Service 3: Admin Dashboard Development */}
                    <div className="p-6 sm:p-8 bg-slate-800/20 border border-slate-705/40 rounded-3xl hover:border-slate-600 hover:bg-slate-800/30 transition-all duration-300 flex flex-col justify-between group shadow-lg">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-white heading-font text-base leading-tight">Admin Dashboard Development</h3>
                            <p className="text-xs text-slate-450 leading-relaxed font-sans text-slate-400">
                                High-performance control interfaces displaying real-time metrics, interactive tables, charts representation using Recharts or D3 vectors.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-800/40 mt-5 space-y-1">
                            <span className="block text-[9px] uppercase font-bold text-cyan-400 tracking-widest">KEY BENEFIT</span>
                            <span className="text-xs text-slate-350 font-medium flex items-center gap-1.5 pt-0.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" /> Actionable analytics insights
                            </span>
                        </div>
                    </div>

                    {/* Service 4: API Development & Integration */}
                    <div className="p-6 sm:p-8 bg-slate-800/20 border border-slate-705/40 rounded-3xl hover:border-slate-600 hover:bg-slate-800/30 transition-all duration-300 flex flex-col justify-between group shadow-lg">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform duration-300">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-white heading-font text-base leading-tight">API Development & Integration</h3>
                            <p className="text-xs text-slate-450 leading-relaxed font-sans text-slate-400">
                                Building stateless, rate-limited REST APIs that connect apps smoothly, securing endpoints with standardized tokens.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-800/40 mt-5 space-y-1">
                            <span className="block text-[9px] uppercase font-bold text-orange-400 tracking-widest">KEY BENEFIT</span>
                            <span className="text-xs text-slate-350 font-medium flex items-center gap-1.5 pt-0.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" /> Secure rate-limited data flows
                            </span>
                        </div>
                    </div>

                    {/* Service 5: Laravel Specialist Coding */}
                    <div className="p-6 sm:p-8 bg-slate-800/20 border border-slate-705/40 rounded-3xl hover:border-slate-600 hover:bg-slate-800/30 transition-all duration-300 flex flex-col justify-between group shadow-lg">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform duration-300">
                                <Server className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-white heading-font text-base leading-tight">Laravel Specialized Development</h3>
                            <p className="text-xs text-slate-450 leading-relaxed font-sans text-slate-400">
                                Harnessing the maximum power of Eloquent, Queue Jobs, Caches, and Artisan tools to form robust PHP server application setups.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-800/40 mt-5 space-y-1">
                            <span className="block text-[9px] uppercase font-bold text-red-400 tracking-widest">KEY BENEFIT</span>
                            <span className="text-xs text-slate-350 font-medium flex items-center gap-1.5 pt-0.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" /> Highly mature robust code
                            </span>
                        </div>
                    </div>

                    {/* Service 6: React & Next.js Frontends */}
                    <div className="p-6 sm:p-8 bg-slate-800/20 border border-slate-705/40 rounded-3xl hover:border-slate-600 hover:bg-slate-800/30 transition-all duration-300 flex flex-col justify-between group shadow-lg">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:scale-105 transition-transform duration-300">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-white heading-font text-base leading-tight">React & Next.js Engineering</h3>
                            <p className="text-xs text-slate-450 leading-relaxed font-sans text-slate-400">
                                Engaging React 19 UI blocks, server component caching grids, and fast static export pages giving ultimate SEO advantages.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-800/40 mt-5 space-y-1">
                            <span className="block text-[9px] uppercase font-bold text-blue-500 tracking-widest">KEY BENEFIT</span>
                            <span className="text-xs text-slate-355 font-medium flex items-center gap-1.5 pt-0.5 text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" /> Sub-second browser loading
                            </span>
                        </div>
                    </div>

                    {/* Service 7: Flutter Mobile App Development */}
                    <div className="p-6 sm:p-8 bg-slate-800/20 border border-slate-705/40 rounded-3xl hover:border-slate-600 hover:bg-slate-800/30 transition-all duration-300 flex flex-col justify-between group shadow-lg">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform duration-300">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-white heading-font text-base leading-tight">Flutter Mobile App Development</h3>
                            <p className="text-xs text-slate-450 leading-relaxed font-sans text-slate-400">
                                Deploying cross-platform iOS and Android apps with beautiful shared canvases, clean local storage schemas, and ML OCR integrations.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-800/40 mt-5 space-y-1">
                            <span className="block text-[9px] uppercase font-bold text-teal-400 tracking-widest">KEY BENEFIT</span>
                            <span className="text-xs text-slate-355 font-medium flex items-center gap-1.5 pt-0.5 text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" /> Dual platforms, shared base
                            </span>
                        </div>
                    </div>

                    {/* Service 8: DB Architecture & Tuning */}
                    <div className="p-6 sm:p-8 bg-slate-800/20 border border-slate-705/40 rounded-3xl hover:border-slate-600 hover:bg-slate-800/30 transition-all duration-300 flex flex-col justify-between group shadow-lg">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-450 group-hover:scale-105 transition-transform duration-300">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-white heading-font text-base leading-tight">Database Architecture & Tuning</h3>
                            <p className="text-xs text-slate-450 leading-relaxed font-sans text-slate-400">
                                Designing logical MySQL & PostgreSQL query flows, indexing key metrics, preventing locks, and minimizing CPU bottlenecks.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-slate-800/40 mt-5 space-y-1">
                            <span className="block text-[9px] uppercase font-bold text-indigo-400 tracking-widest">KEY BENEFIT</span>
                            <span className="text-xs text-slate-355 font-medium flex items-center gap-1.5 pt-0.5 text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" /> Millions of records scaled
                            </span>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- SECTION 5: FEATURED PROJECTS (FILTERABLE) --- */}
            <section id="projects" className="py-20 bg-slate-950/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div className="space-y-4">
                            <span className="text-xs uppercase text-blue-400 tracking-widest font-extrabold block">PORTFOLIO DEMOS</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font">Recent Projects Portfolio</h2>
                            <p className="text-slate-400 text-sm max-w-lg">
                                Explore custom-built functional deliverables. Filter through real developer use cases representing modern databases, full stack patterns, and SaaS.
                            </p>
                        </div>

                        {/* Project Filter Tabs - highly interactive */}
                        <div className="flex flex-wrap gap-2">
                            {(['All', 'SaaS', 'Admin Panel', 'Mobile App', 'Web App'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-xs font-bold rounded-full border transition-all duration-300 cursor-pointer ${activeTab === tab
                                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/15'
                                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Project Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group rounded-3xl bg-slate-900 border border-slate-800/80 overflow-hidden hover:border-blue-500/30 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
                            >

                                {/* Visual Image Area (High-End Dynamic Gradient Mockup) */}
                                <div className={`w-full aspect-video bg-gradient-to-tr ${project.imageColor} p-6 relative flex flex-col justify-between`}>

                                    {/* Subtle Grid Pattern Overlay */}
                                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] opacity-10" />

                                    {/* Category Tag */}
                                    <span className="relative z-10 self-start bg-slate-950/80 backdrop-blur-md text-[9px] text-white font-bold tracking-wider px-2.5 py-1 rounded-full uppercase border border-white/10 shadow-sm">
                                        {project.category}
                                    </span>

                                    {/* Inside Mock Code Console Mockup */}
                                    <div className="relative z-10 bg-slate-950/90 rounded-xl p-2.5 font-mono text-[9px] text-emerald-400 border border-slate-800 text-left select-none shadow-lg">
                                        {project.mockPreview}
                                    </div>

                                    {/* Performance metric tag */}
                                    <span className="relative z-10 self-end bg-blue-950/90 text-blue-400 text-[9px] font-bold px-2 rounded-full border border-blue-500/20 py-0.5">
                                        {project.metrics}
                                    </span>
                                </div>

                                {/* Project Details */}
                                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-bold text-white heading-font">{project.title}</h3>
                                        <p className="text-xs text-slate-350 leading-relaxed font-sans">{project.description}</p>

                                        {/* Features list */}
                                        <div className="space-y-1.5 pt-1">
                                            <span className="block text-[10px] font-bold tracking-wider uppercase text-slate-400 font-sans">Key Deliverables</span>
                                            {project.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
                                                    <span className="font-sans">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer Stack & Actions */}
                                    <div className="space-y-4 pt-4 border-t border-slate-800/80 mt-4">

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="text-[10px] font-mono font-medium text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA Links */}
                                        <div className="flex items-center gap-3 pt-1">
                                            <a
                                                href={project.demoUrl}
                                                className="flex-1 text-center py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-1.5"
                                            >
                                                <span>Live Preview</span>
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                            {project.sourceUrl && (
                                                <a
                                                    href={project.sourceUrl}
                                                    className="px-3 py-2 text-xs font-bold text-slate-350 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-xl border border-slate-700/65 flex items-center justify-center gap-1.5 transition-all"
                                                >
                                                    {/* <Github className="w-4 h-4" /> */}
                                                    <span>Code</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* --- SECTION 6: SERVICE TIMELINE --- */}
            <section id="timeline" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <span className="text-xs uppercase text-purple-400 tracking-widest font-extrabold block">PROFESSIONAL ROADMAP</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font">Professional Journey & Evolution</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
                </div>

                {/* Vertical Timeline */}
                <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">

                    {/* Node 1 */}
                    <div className="relative">
                        <div className="absolute -left-[31px] sm:-left-[39px] w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-950 shadow-md flex items-center justify-center">
                            <Zap className="w-2.5 h-2.5 text-white animate-pulse" />
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-bold font-mono text-blue-400">2024 - PRESENT</span>
                            <h3 className="text-lg font-bold text-white heading-font">Senior Full Stack Developer & SaaS Systems Tech</h3>
                            <p className="text-xs text-slate-400 font-medium">Independent International Consultant | Bangladesh / Sweden / Remote</p>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                                Leading full development lifecycles of complex web and mobile platforms. Helping businesses design SaaS models, configure multi-tenant MySQL schemas, write stateless backends in PHP/Laravel, and link React web dashboards. Acted as a remote system architect for startup founders inside European markets.
                            </p>
                        </div>
                    </div>

                    {/* Node 2 */}
                    <div className="relative">
                        <div className="absolute -left-[31px] sm:-left-[39px] w-6 h-6 rounded-full bg-purple-500 border-4 border-slate-950 shadow-md flex items-center justify-center">
                            <Terminal className="w-2.5 h-2.5 text-white" />
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-bold font-mono text-purple-400">2022 - 2024</span>
                            <h3 className="text-lg font-bold text-white heading-font">Lead Software Engineer</h3>
                            <p className="text-xs text-slate-400 font-medium">Core Web Architects Group</p>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                                Spearheaded a team of 4 junior developers code auditing structures. Migrated various legacy PHP monolith structures into scalable Vue/React layouts integrated with secure Laravel REST APIs. Shaved 40% loading times across production dashboards.
                            </p>
                        </div>
                    </div>

                    {/* Node 3 */}
                    <div className="relative">
                        <div className="absolute -left-[31px] sm:-left-[39px] w-6 h-6 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-md flex items-center justify-center">
                            <Code2 className="w-2.5 h-2.5 text-white" />
                        </div>
                        <div className="space-y-2">
                            <span className="text-xs font-bold font-mono text-cyan-400">2020 - 2022</span>
                            <h3 className="text-lg font-bold text-white heading-font">Laravel Specialist & Web Programmer</h3>
                            <p className="text-xs text-slate-400 font-medium">Software Hub Solutions</p>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                                Engineered robust, secure, and clean custom web applications, SaaS admin platforms, and databases using MySQL. Specialized in implementing Stripe billing systems, PDF invoice automation systems, and email queue services.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- EXTRA ADVANCED HIGHLIGHT: INTERACTIVE GITHUB CONTRIBUTION SIMULATOR --- */}
            <section id="github-contributions" className="py-16 bg-slate-950/45 border-y border-slate-800/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 border border-slate-800 hover:border-slate-700/60 transition-all duration-300 space-y-6 shadow-2xl">

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold text-white heading-font flex items-center gap-2">
                                    {/* <Github className="w-5 h-5 text-slate-400" /> */}
                                    GitHub Code Contributions
                                </h3>
                                <p className="text-xs text-slate-400 font-medium font-sans">
                                    Active visual compilation representing real-time commit integrations in Laravel repositories.
                                </p>
                            </div>
                            <div className="flex items-center gap-4 text-xs font-mono">
                                <div className="text-right">
                                    <span className="block text-slate-450 text-[10px]">CURRENT STREAK</span>
                                    <span className="block font-bold text-emerald-450">142 Days Active</span>
                                </div>
                                <div className="text-right border-l border-slate-800 pl-4">
                                    <span className="block text-slate-450 text-[10px]">TOTAL COMMITS (YTD)</span>
                                    <span className="block font-bold text-white">2,842 Commits</span>
                                </div>
                            </div>
                        </div>

                        {/* Scrolling Responsive Grid */}
                        <div className="overflow-x-auto pb-2">
                            <div className="min-w-[500px] flex flex-col gap-[3px]">
                                {renderGithubGrid()}
                            </div>
                        </div>

                        {/* Grid labels */}
                        <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                            <span>Less Active</span>
                            <div className="flex gap-1 items-center">
                                <div className="w-[10px] h-[10px] rounded bg-[#1e293b]" />
                                <div className="w-[10px] h-[10px] rounded bg-emerald-950" />
                                <div className="w-[10px] h-[10px] rounded bg-emerald-800" />
                                <div className="w-[10px] h-[10px] rounded bg-emerald-600" />
                                <div className="w-[10px] h-[10px] rounded bg-emerald-400" />
                            </div>
                            <span>More Active</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- SECTION 7: WHY CLIENTS HIRE ME --- */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <span className="text-xs uppercase text-blue-400 tracking-widest font-extrabold block">BUSINESS BENEFITS</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font">Why Startups & Clients Choose Me</h2>
                    <p className="text-slate-400 text-sm">
                        I bridges the gap between sophisticated mockups and actual functional deliverables. Here are my commercial standards:
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Card 1: Fast Communication */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800/80 hover:border-[#3B82F6]/30 transition-all duration-300 shadow-md group">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                            <Clock className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-white heading-font mb-2 text-base">Fast Communication</h3>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            No long gaps or dark periods. I handle communications inside slack or email swiftly, ensuring you stay active in decision loops.
                        </p>
                    </div>

                    {/* Card 2: Clean Architecture */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800/80 hover:border-[#8B5CF6]/30 transition-all duration-300 shadow-md group">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-105 transition-transform">
                            <Workflow className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-white heading-font mb-2 text-base">Clean SOLID Architecture</h3>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            Engineered with care and modular design so other programmers or agencies can append functions without hitting errors.
                        </p>
                    </div>

                    {/* Card 3: Scalable Solutions & Optimization */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800/80 hover:border-[#06B6D4]/30 transition-all duration-300 shadow-md group">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                            <Zap className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-white heading-font mb-2 text-base">Performance Optimized</h3>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            Blazing fast response timers (sub-100ms API routes) that keep your search engine ranks up and bounce rates down.
                        </p>
                    </div>

                    {/* Card 4: SEO Friendly Coding */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800/80 hover:border-teal-500/30 transition-all duration-300 shadow-md group">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-105 transition-transform">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-white heading-font mb-2 text-base">SEO Friendly Applications</h3>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            We leverage modern Next.js server pre-rendering or rich semantic code layers so search crawlers parse details effortlessly.
                        </p>
                    </div>

                    {/* Card 5: Scalable Databases */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 shadow-md group">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                            <Database className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-white heading-font mb-2 text-base">Scalable Systems</h3>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            I index databases securely, preventing system deadlock under heavy, persistent loads.
                        </p>
                    </div>

                    {/* Card 6: Long-Term Retainers */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800/80 hover:border-purple-500/30 transition-all duration-300 shadow-md group">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-105 transition-transform">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-white heading-font mb-2 text-base">Long-Term Support</h3>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            We don't vanish post-deployment. I guarantee comprehensive debugging retainer scopes keeping you covered.
                        </p>
                    </div>

                </div>
            </section>

            {/* --- SECTION 8: TESTIMONIALS SLIDER --- */}
            <section className="py-20 bg-slate-950/40 relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
                        <span className="text-xs uppercase text-indigo-400 tracking-widest font-extrabold block">CLIENT ENDORSEMENTS</span>
                        <h2 className="text-3xl font-bold text-white heading-font">Client Reviews</h2>
                        <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
                    </div>

                    {/* Testimonial Active Display Area */}
                    <div className="relative rounded-3xl bg-slate-900 border border-slate-800/80 p-6 sm:p-10 text-center space-y-6 shadow-2xl hover:border-slate-705/80 transition-all duration-300">

                        {/* Stars rating */}
                        <div className="flex gap-1 items-center justify-center text-amber-450">
                            {[...Array(TESTIMONIALS[testimonialIndex].rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-450" />
                            ))}
                        </div>

                        {/* Card Content Text */}
                        <p className="text-sm sm:text-base text-slate-100 leading-relaxed italic max-w-3xl mx-auto">
                            "{TESTIMONIALS[testimonialIndex].text}"
                        </p>

                        {/* Author Profile */}
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <div className={`w-12 h-12 rounded-full ${TESTIMONIALS[testimonialIndex].avatarBg} flex items-center justify-center text-white text-lg font-bold shadow-lg`}>
                                {TESTIMONIALS[testimonialIndex].avatarLetter}
                            </div>
                            <div>
                                <span className="block font-bold text-white heading-font text-base">{TESTIMONIALS[testimonialIndex].name}</span>
                                <span className="block text-xs text-slate-400">{TESTIMONIALS[testimonialIndex].role} &middot; <strong className="text-blue-400 font-medium">{TESTIMONIALS[testimonialIndex].company}</strong></span>
                            </div>
                        </div>

                        {/* Skills Tag in Testimonial */}
                        <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                            {TESTIMONIALS[testimonialIndex].tags.map((tag) => (
                                <span key={tag} className="text-[10px] font-mono bg-slate-800/80 px-2 py-0.5 rounded text-slate-350 border border-slate-700/30">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Left & Right arrow triggers */}
                        <div className="flex justify-center gap-4 pt-4 border-t border-slate-800/60 w-36 mx-auto">
                            <button
                                onClick={prevTestimonial}
                                className="p-1.5 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="p-1.5 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                    </div>

                </div>
            </section>

            {/* --- EXTRA ADVANCED CONVERSION HIGHLIGHT: INTERACTIVE PROJECT ROADMAP ESTIMATOR --- */}
            <section id="estimator" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">

                    <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Estimator Settings Left */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="space-y-2">
                                <span className="text-xs uppercase text-blue-400 tracking-widest font-extrabold block">INTERACTIVE ROADMAP BUILDER</span>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white heading-font">Estimate Your Development Project</h2>
                                <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                                    Select your product type and scale model below. Our instant interactive formula calculates preliminary timelines and standard local budget bounds.
                                </p>
                            </div>

                            {/* Service Selection */}
                            <div className="space-y-2.5">
                                <span className="block text-xs font-semibold text-slate-300">1. Select Application Form</span>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {[
                                        { id: 'saas', label: 'SaaS Platform', icon: Layers },
                                        { id: 'admin', label: 'Admin Panel', icon: Terminal },
                                        { id: 'website', label: 'Web Custom', icon: Globe },
                                        { id: 'mobile', label: 'Mobile App', icon: Smartphone }
                                    ].map((srv) => (
                                        <button
                                            key={srv.id}
                                            onClick={() => setCalcService(srv.id as any)}
                                            className={`p-3 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-all text-xs font-semibold cursor-pointer ${calcService === srv.id
                                                ? 'bg-blue-600/10 border-blue-500 text-blue-400'
                                                : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                                                }`}
                                        >
                                            <srv.icon className="w-4 h-4" />
                                            {srv.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Scale Selection */}
                            <div className="space-y-2.5">
                                <span className="block text-xs font-semibold text-slate-300">2. Select Project Scale</span>
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { id: 'mvp', label: 'MVP Scope', desc: 'Focus on core feature release' },
                                        { id: 'standard', label: 'Standard Build', desc: 'Mature build, ready to deploy' },
                                        { id: 'enterprise', label: 'Enterprise Scope', desc: 'Premium, scaling components' }
                                    ].map((scl) => (
                                        <button
                                            key={scl.id}
                                            onClick={() => setCalcScale(scl.id as any)}
                                            className={`p-3 rounded-xl border text-center flex flex-col justify-center transition-all cursor-pointer ${calcScale === scl.id
                                                ? 'bg-purple-600/10 border-purple-500 text-purple-400'
                                                : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                                                }`}
                                        >
                                            <span className="block text-xs font-bold">{scl.label}</span>
                                            <span className="hidden sm:block text-[9px] text-slate-450 mt-0.5">{scl.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Estimator Outcomes Right Card */}
                        <div className="lg:col-span-5">
                            <div className="rounded-2xl bg-slate-950 p-6 border border-slate-800/80 space-y-6 text-center select-none">
                                <h3 className="text-sm uppercase text-slate-400 tracking-wider font-extrabold">ROADMAP OUTCOME</h3>

                                {/* Result Timeline */}
                                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-800/60">
                                    <div>
                                        <span className="block text-slate-500 text-[10px]">TIMELINE ESTIMATE</span>
                                        <span className="block text-2xl sm:text-3xl font-bold text-white heading-font">~{calculatedWeeks} Wks</span>
                                    </div>
                                    <div>
                                        <span className="block text-slate-500 text-[10px]">ESTIMATED RATE</span>
                                        <span className="block text-2xl sm:text-3xl font-bold text-blue-400 heading-font">${estimatedCost.toLocaleString()}</span>
                                    </div>
                                </div>

                                {/* Scope Breakdown list */}
                                <div className="text-left space-y-2.5">
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">INCLUDED ROADMAP ASSURANCES</span>
                                    <div className="flex items-start gap-2 text-xs text-slate-350">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                        <span>Stateless API Routing & full schema indexing</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-xs text-slate-350">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                        <span>Handcrafted visual aesthetics (no templates)</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-xs text-slate-350">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                        <span>30-Days secure database support coverage</span>
                                    </div>
                                </div>

                                {/* Conversion Button */}
                                <a
                                    href="#contact"
                                    onClick={() => {
                                        // Pre-fill budget selection if they click
                                        setFormData(p => ({
                                            ...p,
                                            budget: estimatedCost <= 3000 ? 'tier1' : estimatedCost <= 6000 ? 'tier2' : 'tier3',
                                            details: `Inquiry generated via Project Estimator:\nType: ${calcService.toUpperCase()} (${calcScale.toUpperCase()} Scale)\nEstimated timeframe: ~${calculatedWeeks} weeks.\nBudget target: $${estimatedCost.toLocaleString()}`
                                        }));
                                    }}
                                    className="block w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold tracking-wide shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 transition-all text-center"
                                >
                                    Apply Estimate Roadmap
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- SECTION 9: BLOG SECTION --- */}
            <section id="blog" className="py-20 bg-slate-950/20 border-t border-slate-800/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <span className="text-xs uppercase text-cyan-400 tracking-widest font-extrabold block">TECHNICAL INSIGHTS</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font">Core Engineering Articles</h2>
                        <p className="text-slate-400 text-sm">
                            I share practical engineering insights to demonstrate architecture authority. Read my deep technical dives:
                        </p>
                    </div>

                    {/* Cards list */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {BLOG_ARTICLES.map((article) => (
                            <article
                                key={article.id}
                                onClick={() => setSelectedArticle(article)}
                                className="group rounded-3xl bg-slate-900 border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/30 cursor-pointer h-full transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-cyan-500/5"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-xs text-slate-500">
                                        <span className="bg-slate-950/60 font-mono text-[10px] text-cyan-400 border border-slate-800 px-2 py-0.5 rounded-md">
                                            {article.category}
                                        </span>
                                        <span>{article.readTime}</span>
                                    </div>

                                    <h3 className="font-bold text-white heading-font text-base sm:text-lg hover:text-blue-400 leading-tight">
                                        {article.title}
                                    </h3>

                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-800/80 items-center justify-between flex mt-6">
                                    <span className="text-[11px] text-slate-550 mono-font">{article.date}</span>
                                    <span className="text-xs font-bold text-blue-400 items-center flex gap-1 group-hover:translate-x-1 transition-transform">
                                        Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>

                {/* Blog Article Full Detail Modal */}
                {selectedArticle && (
                    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 flex items-center justify-center p-4">
                        <div className="bg-slate-900 rounded-3xl border border-slate-805 max-w-2xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleUp">

                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                                aria-label="Close dialog"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="space-y-2">
                                <span className="text-[10px] font-mono uppercase font-bold text-cyan-400 bg-cyan-400/5 px-2.5 py-1 rounded">
                                    {selectedArticle.category}
                                </span>
                                <span className="block text-xs text-slate-500 mt-2 font-mono">{selectedArticle.date} &middot; {selectedArticle.readTime}</span>
                                <h3 className="text-xl sm:text-2xl font-bold text-white heading-font leading-tight pt-1">
                                    {selectedArticle.title}
                                </h3>
                            </div>

                            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4 border-t border-slate-800/80 pt-5 whitespace-pre-line font-sans">
                                {selectedArticle.content}
                            </div>

                            <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                                <span className="text-slate-450 text-xs font-semibold">Tawhid Jony &middot; Senior Developer</span>
                                <button
                                    onClick={() => setSelectedArticle(null)}
                                    className="px-4 py-2 bg-slate-850 hover:bg-slate-800 text-xs font-bold rounded-lg text-slate-100 border border-slate-750 transition-all cursor-pointer"
                                >
                                    Close Article Preview
                                </button>
                            </div>

                        </div>
                    </div>
                )}
            </section>

            {/* --- SECTION 10: LEAD MAGNET & CONTACT FORM --- */}
            <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Contact Cards info Left */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <span className="text-xs uppercase text-blue-400 tracking-widest font-extrabold block">GET IN TOUCH</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white heading-font">Let's Discuss Your Project</h2>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Have an active roadmap idea or an enterprise bottleneck? Share your details! I review all inquiries within 12 standard business hours.
                            </p>
                        </div>

                        {/* Quick Contact Links */}
                        <div className="space-y-4">

                            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold">EMAIL ADDRESS</span>
                                    <a href="mailto:tawhid.jony.jhm@gmail.com" className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-blue-400">
                                        Tawhid.jony.jhm@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold">WHATSAPP CHAT</span>
                                    <a href="https://wa.me/8801700000000" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400">
                                        +880 (WhatsApp Connect)
                                    </a>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0">
                                    {/* <Linkedin className="w-5 h-5" /> */}
                                </div>
                                <div>
                                    <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold">LINKEDIN INTEGRATION</span>
                                    <a href="https://linkedin.com/in/tawhidjony" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-blue-400">
                                        linkedin.com/in/tawhidjony
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Visual Call To Action Tag */}
                        <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/10 to-slate-950 border border-slate-800/80 text-left space-y-3">
                            <span className="text-xs font-bold text-indigo-400 mono-font">// ACTIVE WORLDWIDE SERVICES</span>
                            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                                Currently supporting setups in Sweden, USA, and GCC timezone clusters securely.
                            </p>
                        </div>
                    </div>

                    {/* Form wrapper Right */}
                    <div className="lg:col-span-7">
                        <div className="rounded-3xl bg-slate-900 border border-slate-800/80 p-6 sm:p-8 space-y-6 shadow-2xl hover:border-slate-700/40 transition-all duration-300">

                            {!formSuccess ? (
                                <form onSubmit={handleFormSubmit} className="space-y-5">
                                    <h3 className="text-lg font-bold text-white heading-font">Inquiry Form</h3>

                                    {/* Name & Email Group */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="form-name" className="block text-xs font-bold text-slate-300">Name*</label>
                                            <input
                                                id="form-name"
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={p => setFormData(v => ({ ...v, name: p.target.value }))}
                                                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl text-xs sm:text-sm focus:border-blue-500 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="form-email" className="block text-xs font-bold text-slate-300">Email Address*</label>
                                            <input
                                                id="form-email"
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={p => setFormData(v => ({ ...v, email: p.target.value }))}
                                                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl text-xs sm:text-sm focus:border-blue-500 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Company & Budget */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="form-company" className="block text-xs font-bold text-slate-300">Company Name</label>
                                            <input
                                                id="form-company"
                                                type="text"
                                                placeholder="Acme Corp"
                                                value={formData.company}
                                                onChange={p => setFormData(v => ({ ...v, company: p.target.value }))}
                                                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl text-xs sm:text-sm focus:border-blue-500 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="form-budget" className="block text-xs font-bold text-slate-300">Select Budget Range</label>
                                            <select
                                                id="form-budget"
                                                value={formData.budget}
                                                onChange={p => setFormData(v => ({ ...v, budget: p.target.value }))}
                                                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl text-xs sm:text-sm focus:border-blue-500 outline-none transition-all cursor-pointer"
                                            >
                                                <option value="custom">Select Range...</option>
                                                <option value="tier1">$1,500 - $3,000</option>
                                                <option value="tier2">$3,000 - $6,000</option>
                                                <option value="tier3">$6,000 - $12,000</option>
                                                <option value="tier4">$12,000+</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message details */}
                                    <div className="space-y-1.5">
                                        <label htmlFor="form-details" className="block text-xs font-bold text-slate-300">Project Details & Objectives*</label>
                                        <textarea
                                            id="form-details"
                                            rows={4}
                                            required
                                            placeholder="Outline what you want to construct, target features, timelines..."
                                            value={formData.details}
                                            onChange={p => setFormData(v => ({ ...v, details: p.target.value }))}
                                            className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 text-slate-300 rounded-xl text-xs sm:text-sm focus:border-blue-500 outline-none transition-all font-sans leading-relaxed"
                                        />
                                    </div>

                                    {/* Submission Action */}
                                    <button
                                        type="submit"
                                        disabled={formSubmitting}
                                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-blue-500/10 cursor-pointer disabled:opacity-75 relative flex items-center justify-center gap-1.5 group transition-all"
                                    >
                                        <Send className="w-4 h-4 group-hover:scale-105 transition-transform" />
                                        {formSubmitting ? 'Submitting Your Inquiry...' : 'Submit Inquiry & Auto-Generate Proposal Roadmap'}
                                    </button>

                                    <div className="text-center">
                                        <span className="text-[10px] text-slate-550 mono-font">Security verified. Your private details are never sold.</span>
                                    </div>

                                </form>
                            ) : (
                                // Success state with automatic roadmapping proposal sheet
                                <div className="space-y-6 text-left animate-[fadeIn_0.5s_ease-out]">

                                    {/* Headline */}
                                    <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                                            <Check className="w-5 h-5 font-bold" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white heading-font text-base">Inquiry Submitted Successfully!</h3>
                                            <span className="text-xs text-slate-450">Tawhid Jony's Auto-Roadmap proposal generator.</span>
                                        </div>
                                    </div>

                                    {/* Generated proposal box */}
                                    <div className="bg-slate-950/90 border border-slate-808/85 rounded-xl p-5 font-mono text-[11px] leading-relaxed text-slate-200 whitespace-pre-line relative overflow-hidden shadow-inner">
                                        <div className="absolute top-0 right-0 py-1 px-2.5 bg-emerald-500/10 text-emerald-400 text-[8px] font-bold tracking-widest border-bl border-slate-800 uppercase pointer-events-none">
                                            v1.1 draft
                                        </div>
                                        {generatedProposal}
                                    </div>

                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        A copies of this custom proposal has been dispatched to are local agent client trackers. We've also queued an instant calendar slot trigger, stay tuned to your email inbox!
                                    </p>

                                    <button
                                        onClick={() => {
                                            setFormSuccess(false);
                                            setFormData({ name: '', email: '', company: '', budget: 'custom', details: '' });
                                        }}
                                        className="w-full py-2.5 text-xs text-center border border-slate-800 hover:border-slate-700 bg-slate-950 hover:bg-slate-900 rounded-xl text-slate-300 font-bold transition-all cursor-pointer"
                                    >
                                        Back to Inquiry Form
                                    </button>

                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="border-t border-slate-800/80 bg-slate-950 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-80)/80">

                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-sm text-white">
                                TJ
                            </div>
                            <span className="font-bold text-sm tracking-tight heading-font text-white">Tawhid Jony</span>
                        </div>

                        {/* Quick social redirects */}
                        <div className="flex gap-4 items-center">
                            <a
                                href="https://github.com/tawhidjony"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 flex items-center justify-center transition-all"
                                aria-label="GitHub Profile"
                            >
                                {/* <Github className="w-4 h-4" /> */}
                            </a>
                            <a
                                href="https://linkedin.com/in/tawhidjony"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 flex items-center justify-center transition-all"
                                aria-label="LinkedIn Profile"
                            >
                                {/* <Linkedin className="w-4 h-4" /> */}
                            </a>
                            <a
                                href="mailto:tawhid.jony.jhm@gmail.com"
                                className="w-8 h-8 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 flex items-center justify-center transition-all"
                                aria-label="Email Tawhid"
                            >
                                <MessageSquare className="w-4 h-4" />
                            </a>
                        </div>

                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
                        <span>&copy; {new Date().getFullYear()} Tawhid Jony. All Rights Reserved.</span>
                        <div className="flex gap-4">
                            <span>Bangladesh Developer Portfolio</span>
                            <span>Built with React + Vite + Tailwind CSS</span>
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    );
}
