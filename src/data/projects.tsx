// src/data/projects.ts

export type ProjectStatus = 'Live' | 'Completed' | 'In Development';

// Definisikan tipe untuk satu fitur
export type Feature = {
  icon: string; // Nama ikon dari library lucide-react (e.g., 'zap', 'shield')
  title: string;
  description: string;
};

// Update tipe Project dengan properti keyFeatures
export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'website' | 'mobile' | 'design';
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  status: ProjectStatus;
  keyFeatures?: Feature[]; // Properti baru untuk fitur dinamis
};

// Data proyek yang sudah diupdate dengan keyFeatures
export const projectsData: Project[] = [
  {
    slug: "dievaluasi",
    title: "Dievaluasi",
    description: "An AI-powered, CAT-based tryout platform for CPNS, BUMN, TOEFL, and SNBT exam preparation.",
    longDescription: `
      <p>Dievaluasi represents a revolutionary approach to standardized test preparation, leveraging cutting-edge artificial intelligence and Computer Adaptive Testing (CAT) technology to create a truly personalized learning experience.</p>
      
      <p>The platform addresses the critical challenge faced by thousands of Indonesian students preparing for high-stakes examinations like CPNS (Civil Service), BUMN (State-Owned Enterprises), TOEFL, and SNBT (National Selection Test for State University Admission). Traditional one-size-fits-all preparation methods often leave students struggling with concepts they've already mastered while neglecting their actual weak areas.</p>
      
      <p>Our AI engine continuously analyzes user performance patterns, identifying knowledge gaps with surgical precision. The adaptive algorithm then curates personalized question sets that challenge students at their optimal difficulty level, ensuring maximum learning efficiency. The real-time scoring system provides instant feedback, mimicking the pressure and format of actual examinations.</p>
      
      <p>Built with modern web technologies, Dievaluasi offers a seamless, responsive experience across all devices. The comprehensive analytics dashboard empowers users to track their progress, visualize improvement patterns, and make data-driven decisions about their study strategy.</p>
    `,
    image: "/assets/images/project/web1.png",
    githubUrl: "https://github.com/rakudev2025/raku-dev",
    category: "website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    status: "In Development",
    keyFeatures: [
      { icon: 'brain-circuit', title: 'AI-Powered Analysis', description: 'Analyzes user weaknesses and provides personalized learning recommendations.' },
      { icon: 'clipboard-check', title: 'Real-Time Scoring', description: 'Instant and accurate automated scoring system that mimics the real test.' },
      { icon: 'bar-chart-3', title: 'Performance Analytics', description: 'Dashboard to track progress, score history, and user performance over time.' },
      { icon: 'database', title: 'Extensive Question Bank', description: 'Thousands of high-quality questions covering all test categories.' }
    ]
  },
  {
    slug: "sibanpri",
    title: "SIBANPRI",
    description: "A decision support system to objectively determine priority recipients for agricultural assistance.",
    longDescription: `
      <p>SIBANPRI (Sistem Bantuan Prioritas) is a sophisticated decision support system engineered to revolutionize the distribution of agricultural assistance programs. The platform tackles the critical challenge of ensuring that limited government resources reach those who need them most through objective, data-driven evaluation processes.</p>
      
      <p>The system employs advanced multi-criteria decision analysis algorithms to evaluate potential beneficiaries across multiple dimensions including economic status, agricultural productivity potential, land ownership, and social vulnerability factors. This comprehensive approach eliminates subjective bias and ensures transparent, accountable distribution of aid resources.</p>
      
      <p>Built with scalability in mind, SIBANPRI features a flexible criteria management system that allows administrators to adjust evaluation parameters based on changing policy priorities or regional requirements. The automated ranking system processes thousands of applications efficiently, dramatically reducing processing time from months to days.</p>
      
      <p>The platform's robust reporting capabilities generate detailed documentation for audit purposes, ensuring full compliance with government transparency requirements. Integration capabilities allow seamless data exchange with existing government databases, creating a unified ecosystem for agricultural aid management.</p>
    `,
    image: "/assets/images/project/web2.png",
    githubUrl: "https://github.com/kmgmhndra",
    category: "website",
    technologies: ["React", "JavaScript", "Bootstrap", "Django", "PostgreSQL"],
    status: "Completed",
    keyFeatures: [
      { icon: 'list-checks', title: 'Dynamic Criteria', description: 'Admins can set and weigh each assessment criterion as needed.' },
      { icon: 'trending-up', title: 'Automated Ranking', description: 'Automatically calculates and ranks candidates based on their final scores.' },
      { icon: 'users', title: 'Recipient Management', description: 'Centralized and structured management of aid recipient data.' },
      { icon: 'file-text', title: 'Exportable Reports', description: 'Generates final reports in PDF or Excel format for documentation.' }
    ]
  },
  {
    slug: "tridatu-heritage",
    title: "Tridatu Heritage",
    description: "A digital platform dedicated to preserving and promoting the rich cultural heritage and traditions of Bali.",
    longDescription: `
      <p>Tridatu Heritage emerges as a groundbreaking digital sanctuary dedicated to preserving, celebrating, and sharing the magnificent cultural tapestry of Bali. Named after the sacred tri-color thread representing the Hindu trinity, this platform serves as a bridge between ancient wisdom and modern accessibility.</p>
      
      <p>The project addresses the urgent need to document and preserve Balinese cultural practices that face the risk of being lost in our rapidly globalizing world. Through meticulous research and collaboration with cultural experts, local communities, and traditional practitioners, Tridatu Heritage creates a comprehensive digital archive that captures the essence of Balinese spirituality, artistry, and social traditions.</p>
      
      <p>The platform features an intuitive, culturally-sensitive design that reflects Balinese aesthetics while maintaining modern usability standards. Interactive galleries showcase traditional ceremonies, architectural marvels, and artistic expressions through high-resolution imagery and immersive video content.</p>
      
      <p>Beyond preservation, Tridatu Heritage actively supports the economic empowerment of local artisans through its integrated marketplace, creating sustainable income opportunities while promoting authentic Balinese craftsmanship to a global audience. The cultural calendar keeps the community connected with traditional celebrations and ceremonies, fostering continued participation in cultural practices.</p>
    `,
    image: "/assets/images/project/web3.png",
    githubUrl: "https://github.com/kmgmhndra",
    category: "website",
    technologies: ["Vue.js", "JavaScript", "Vuify", "Laravel", "MySQL"],
    status: "Completed",
    keyFeatures: [
      { icon: 'book-open', title: 'Cultural Encyclopedia', description: 'An extensive library of articles on Balinese traditions, history, and philosophy.' },
      { icon: 'image', title: 'Visual Galleries', description: 'High-resolution photo and video galleries showcasing Balinese arts and ceremonies.' },
      { icon: 'calendar', title: 'Event Calendar', description: 'An up-to-date calendar of cultural events, festivals, and ceremonies across Bali.' },
      { icon: 'shopping-basket', title: 'Artisan Showcase', description: 'A dedicated space to promote and support local Balinese craftsmen and their products.' }
    ]
  },
  {
    slug: "monalisa",
    title: "MONALISA",
    description: "A quality monitoring system for statistical data at BPS (Statistics Indonesia) to ensure accuracy and reliability.",
    longDescription: `
      <p>MONALISA (Monitoring dan Analisis Statistical Quality Assurance) stands as a cornerstone system for Statistics Indonesia (BPS), ensuring the integrity and reliability of national statistical data that influences critical government policies and economic decisions.</p>
      
      <p>The system addresses the complex challenge of maintaining data quality across multiple statistical domains, from population censuses to economic indicators. With Indonesia's vast geographical spread and diverse data collection methodologies, ensuring consistent quality standards requires sophisticated automated monitoring and validation processes.</p>
      
      <p>Built on enterprise-grade architecture using Angular and Spring Boot, MONALISA implements advanced statistical quality frameworks aligned with international standards. The system continuously monitors data flows, applying multi-layered validation rules that detect anomalies, inconsistencies, and potential errors in real-time.</p>
      
      <p>The platform's intelligent dashboard provides statisticians and data analysts with comprehensive insights into data quality metrics, enabling proactive quality management. Automated alert systems ensure immediate response to quality issues, while detailed audit trails maintain complete transparency in data processing workflows.</p>
      
      <p>MONALISA's impact extends beyond technical excellence – it builds public trust in national statistics by ensuring that every data point released to the public meets the highest quality standards, supporting evidence-based policy making and national development planning.</p>
    `,
    image: "/assets/images/project/web4.png",
    githubUrl: "https://github.com/kmgmhndra/Front-Monalisa",
    category: "website",
    technologies: ["Angular", "TypeScript", "Material Design", "Spring Boot", "Oracle DB"],
    status: "Completed",
    keyFeatures: [
      { icon: 'layout-dashboard', title: 'Real-time Dashboard', description: 'Visualizes key quality metrics for quick assessment of data integrity.' },
      { icon: 'shield-check', title: 'Data Validation Rules', description: 'Implements a rules engine to automatically check data for inconsistencies.' },
      { icon: 'activity', title: 'Quality Metric Tracking', description: 'Monitors various statistical quality dimensions over time.' },
      { icon: 'siren', title: 'Anomaly Detection', description: 'Automatically flags unusual data points or deviations from standards for review.' }
    ]
  },
  {
    slug: "monaku",
    title: "MONAKU",
    description: "A financial administration monitoring system to enhance transparency, accountability, and efficiency.",
    longDescription: `
      <p>MONAKU (Monitoring Keuangan dan Akuntabilitas) represents a paradigm shift in public financial management, delivering unprecedented transparency and accountability in government fiscal operations. This comprehensive system transforms how organizations track, analyze, and report their financial activities.</p>
      
      <p>The platform addresses critical challenges in public sector financial management, where manual processes often lead to delays, errors, and limited visibility into spending patterns. MONAKU automates complex financial workflows while maintaining strict compliance with government accounting standards and regulatory requirements.</p>
      
      <p>Leveraging modern web technologies including Next.js and TypeScript, the system provides real-time financial monitoring capabilities that enable proactive budget management. Advanced analytics engine processes vast amounts of financial data to identify spending trends, predict budget overruns, and optimize resource allocation.</p>
      
      <p>The platform's strength lies in its comprehensive audit trail system, which logs every financial transaction with immutable timestamps and user attribution. This creates an environment of complete transparency where every rupiah can be traced from allocation to expenditure, supporting anti-corruption efforts and public accountability.</p>
      
      <p>MONAKU's automated reporting system generates standardized financial reports that comply with government reporting requirements, significantly reducing administrative burden while improving accuracy and consistency in financial documentation.</p>
    `,
    image: "/assets/images/project/web5.png",
    githubUrl: "https://github.com/kmgmhndra/Front-Monalisa",
    category: "website",
    technologies: ["Next.js", "TypeScript", "Chakra UI", "Node.js", "Express", "MongoDB"],
    status: "Completed",
    keyFeatures: [
      { icon: 'dollar-sign', title: 'Budget Tracking', description: 'Monitors budget allocation and usage across different departments in real-time.' },
      { icon: 'file-pie-chart', title: 'Spending Realization', description: 'Compares planned expenditures with actual spending to ensure accountability.' },
      { icon: 'file-text', title: 'Automated Reporting', description: 'Generates periodic financial reports automatically to save time and reduce errors.' },
      { icon: 'history', title: 'Audit Trail', description: 'Logs all financial transactions and changes for complete transparency and security.' }
    ]
  },

  // Mobile Projects
  {
    slug: "surga-tani-mobile",
    title: "Surga Tani Mobile",
    description: "A mobile application to support agricultural commodity price surveys with instant reporting features.",
    longDescription: `
      <p>Surga Tani Mobile revolutionizes agricultural data collection by empowering field surveyors with a powerful, intuitive mobile application designed specifically for commodity price monitoring across Indonesia's diverse agricultural landscape.</p>
      
      <p>The application addresses the critical challenge of collecting accurate, timely agricultural commodity prices from remote markets and farming communities where internet connectivity is often unreliable. Traditional paper-based surveys were prone to errors, delays, and data loss, creating significant gaps in market intelligence.</p>
      
      <p>Built with React Native and Expo, Surga Tani Mobile delivers a native-like experience across both iOS and Android platforms. The application's offline-first architecture ensures that surveyors can continue their work even in areas with no network coverage, automatically synchronizing data when connectivity is restored.</p>
      
      <p>The GPS geotagging feature adds crucial spatial intelligence to price data, enabling analysts to identify regional price variations and market trends. This geographic context is essential for understanding supply chain dynamics and supporting farmers with location-specific market insights.</p>
      
      <p>The app's impact extends beyond data collection – it provides field surveyors with historical price charts and market trends, transforming them from data collectors into informed market advisors who can provide valuable insights to local farmers and traders.</p>
    `,
    image: "/assets/images/project/mobile1.png",
    githubUrl: "https://github.com/kmgmhndra/surga_tani",
    category: "mobile",
    technologies: ["React Native", "JavaScript", "Expo", "Firebase"],
    status: "Completed",
    keyFeatures: [
      { icon: 'wifi-off', title: 'Offline Data Entry', description: 'Allows surveyors to collect data in remote areas without an internet connection.' },
      { icon: 'map-pin', title: 'GPS Geotagging', description: 'Automatically tags each survey entry with location data for accuracy.' },
      { icon: 'cloud-upload', title: 'Instant Sync', description: 'Data is automatically synchronized with the central server once a connection is available.' },
      { icon: 'bar-chart-3', title: 'Historical Price Charts', description: 'Provides surveyors with access to historical price data directly in the app.' }
    ]
  },

  // Design & Media Projects
  {
    slug: "social-media-content-design",
    title: "Social Media Content Design",
    description: "Designing strategic visual content for social media to enhance brand aesthetics and audience engagement.",
    longDescription: `
      <p>Social Media Content Design represents a comprehensive approach to visual storytelling in the digital age, where every post, story, and visual element is meticulously crafted to not just capture attention, but to build meaningful connections between brands and their audiences.</p>
      
      <p>In today's saturated social media landscape, generic content gets lost in the noise. This project focuses on developing distinctive visual identities that cut through the clutter, creating scroll-stopping content that aligns with brand objectives while resonating with target demographics.</p>
      
      <p>The design process begins with deep audience research and brand analysis, establishing visual guidelines that ensure consistency across all platforms while allowing for platform-specific optimizations. Each design element is crafted with psychological principles in mind, leveraging color psychology, visual hierarchy, and composition techniques that drive engagement.</p>
      
      <p>Using industry-leading tools like Figma, Adobe Photoshop, and Illustrator, the creative process emphasizes versatility and scalability. Template systems are developed to maintain brand consistency while enabling rapid content production, essential for maintaining active social media presence.</p>
      
      <p>The measurable impact of strategic visual content design extends beyond aesthetic appeal – it directly influences engagement rates, brand recognition, and ultimately, conversion metrics that drive business growth in the digital marketplace.</p>
    `,
    image: "/assets/images/project/design1.png",
    githubUrl: "--- IGNORE ---",
    category: "design",
    technologies: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    status: "Completed",
    keyFeatures: [
      { icon: 'gem', title: 'Brand Strategy', description: 'Developing a cohesive visual strategy that aligns with brand goals.' },
      { icon: 'layout-template', title: 'Custom Templates', description: 'Creating reusable templates for posts and stories to ensure consistency.' },
      { icon: 'palette', title: 'Visual Consistency', description: 'Maintaining a consistent look and feel across all social media platforms.' },
      { icon: 'line-chart', title: 'Engagement-focused Design', description: 'Designing visuals specifically to maximize likes, comments, and shares.' }
    ]
  },
  {
    slug: "poster-infographic-design",
    title: "Poster & Infographic Design",
    description: "Creative visual design to communicate complex ideas and information in a clear and engaging way.",
    longDescription: `
      <p>Poster & Infographic Design bridges the gap between complex information and public understanding, transforming dense data and intricate concepts into visually compelling narratives that educate, inform, and inspire action.</p>
      
      <p>In our information-rich society, the ability to distill complex ideas into digestible visual formats has become crucial for effective communication. This project specializes in creating infographics and posters that not only inform but also engage audiences through thoughtful design and strategic visual hierarchy.</p>
      
      <p>The design process emphasizes clarity above all else, employing proven information design principles to guide viewers through complex information flows. Each element is purposefully placed to create natural reading patterns that enhance comprehension and retention.</p>
      
      <p>Utilizing advanced design tools including Figma, Adobe Photoshop, and Canva, the creative workflow balances aesthetic appeal with functional clarity. Color schemes are carefully selected to support information hierarchy, while typography choices enhance readability across various viewing contexts.</p>
      
      <p>The versatility of deliverables ensures optimal performance across multiple channels – from large-format prints for conferences and exhibitions to digital formats optimized for social media sharing and web presentation. This multi-format approach maximizes the reach and impact of important information.</p>
    `,
    image: "/assets/images/project/design2.png",
    githubUrl: "https://figma.com/username/design-system",
    category: "design",
    technologies: ["Figma", "Adobe Photoshop", "Canva"],
    status: "Completed",
    keyFeatures: [
      { icon: 'bar-chart-big', title: 'Data Visualization', description: 'Transforming complex data and statistics into easy-to-understand graphics.' },
      { icon: 'type', title: 'Clear Typography', description: 'Utilizing strong typography to create a clear visual hierarchy and enhance readability.' },
      { icon: 'swatch-book', title: 'Brand Alignment', description: "Ensuring all designs are perfectly aligned with the client's brand identity." },
      { icon: 'smartphone', title: 'Print & Digital Formats', description: 'Delivering optimized files for both physical printing and digital screens.' }
    ]
  },
  {
    slug: "cover-letter-design",
    title: "Resume & Cover Letter Design",
    description: "Designing professional application documents that blend readability with modern aesthetics.",
    longDescription: `
      <p>Resume & Cover Letter Design transforms the traditional job application process by creating visually striking, professionally crafted documents that help candidates stand out in competitive job markets while maintaining the professionalism and clarity that recruiters demand.</p>
      
      <p>In today's competitive employment landscape, a well-designed resume can be the difference between landing an interview and being overlooked. This project focuses on creating application documents that not only showcase qualifications effectively but also reflect the candidate's personal brand and attention to detail.</p>
      
      <p>The design philosophy emphasizes the delicate balance between creativity and professionalism, ensuring that visual elements enhance rather than distract from the candidate's qualifications. Each layout is strategically designed to guide the recruiter's attention to key achievements and skills.</p>
      
      <p>Using professional design tools like Adobe InDesign, Illustrator, and Canva, the creative process incorporates modern design trends while maintaining compatibility with Applicant Tracking Systems (ATS). This dual-optimization ensures that documents perform well in both automated screening processes and human review.</p>
      
      <p>The comprehensive approach includes developing consistent visual branding across all application materials, creating a cohesive professional identity that reinforces the candidate's brand throughout the application process. Typography, color schemes, and layout structures are carefully selected to convey professionalism while reflecting the candidate's personality and industry requirements.</p>
    `,
    image: "/assets/images/project/design3.png",
    githubUrl: "https://behance.net/username/campaign-project",
    category: "design",
    technologies: ["Adobe InDesign", "Adobe Illustrator", "Canva"],
    status: "Completed",
    keyFeatures: [
      { icon: 'layout-grid', title: 'Professional Layout', description: "Creating clean, structured layouts that guide the recruiter's eye."},
      { icon: 'pen-tool', title: 'Custom Typography', description: 'Selecting and pairing fonts that reflect personal brand and professionalism.' },
      { icon: 'award', title: 'Personal Branding', description: "Designing documents that consistently represent an individual's professional identity." },
      { icon: 'file-scan', title: 'ATS-Friendly Design', description: 'Ensuring the design is compatible with Applicant Tracking Systems (ATS).' }
    ]
  }
];

export const categories = [
  { id: 'all', label: 'All Projects', icon: '📁' },
  { id: 'website', label: 'Website', icon: '🌐' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
  { id: 'design', label: 'Design & Media', icon: '🎨' }
];