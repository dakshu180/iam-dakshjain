/**
 * Central portfolio data — generated from Daksh Jain's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Daksh Jain',
  displayName: 'Daksh Jain',
  firstName: 'DAKSH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A DAKSH ORIGINAL',
  role: 'Student • CEO, Renvova Resource Solutions',
  tagline: ['CEO, Renvova Solutions', 'AI, Robotics & Systems', 'Student Builder'],
  intro:
    'A student, builder, and CEO at Renvova Resource Solutions, exploring systems engineering, AI, robotics, and accessible technology. I turn ideas into prototypes—from offline ophthalmic tools and sign-language translation to student learning platforms—while taking on research, science, and entrepreneurship challenges.',
  location: 'Raipur, Chhattisgarh, India',
  email: 'deadshotdakshu180@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/dakshu-j',
    github: 'https://github.com/dakshu180',
    instagram: 'https://www.instagram.com/renvovasolutions/',
  },
  resumePdf: '/assets/Daksh_Jain_Resume_v3.pdf',
  portrait: {
    src: '/assets/daksh-monogram.svg',
    srcSet: '',
    alt: 'Daksh Jain monogram artwork',
  },
  interests: ['Custom Firmware', 'Cryptography', 'AI & Robotics'],
};

export const education = [
  {
    school: 'Brighton International School',
    place: 'Raipur, Chhattisgarh, India',
    degree: 'Class 9 Student',
    period: '2026 – Present',
    score: 'Class 9',
  },
];

export const experience: {
  company: string;
  role: string;
  place: string;
  period: string;
  points: string[];
}[] = [
  {
    company: 'Renvova Resource Solutions',
    role: 'CEO',
    place: 'Raipur, Chhattisgarh',
    period: '2026 – Present',
    points: [
      'Leads the company profile and early-stage business activity focused on heavy material processing, logistics, and transportation.',
      'Helps communicate the company’s services and operations through its public Instagram profile.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'smart-retinoscope',
    title: 'Smart Retinoscope',
    year: '2026',
    genre: 'MedTech • Computer Vision • Hardware',
    logline: 'A portable ophthalmic screening prototype pairing a smartphone with a 20D/28D condensing lens for offline use.',
    stack: ['Smartphone', '20D/28D Lens', 'Offline Workflow', 'PDF Reporting'],
    build: [
      'Co-developed and presented a portable AI-assisted ophthalmic screening prototype with teammate Atharva Agrawal.',
      'Designed the workflow to run offline on a low-power setup and save screening reports as PDFs for doctor review.',
    ],
    features: [
      'Smartphone paired with a 20D/28D condensing aspheric lens',
      'Offline, low-power screening workflow',
      'PDF report generation for clinician review',
      'Presented at the NITTTR-INAE Youth Conclave',
    ],
    metrics: [{ value: 'Offline', label: 'designed for field use' }],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'isl-project',
    title: 'ISL Neural Network',
    year: '2026',
    genre: 'AI • Computer Vision • Accessibility',
    logline: 'A deep-learning pipeline for recognizing Indian Sign Language gestures, built around a 49-class model.',
    stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'Kaggle'],
    build: [
      'Built a computer-vision translation pipeline using Python, TensorFlow/Keras, OpenCV, and MediaPipe.',
      'The project README reports 49 gesture classes and a large-scale image dataset; model weights are not included in the repository.',
    ],
    features: [
      'Indian Sign Language gestures translated toward text output',
      '49-class model architecture described in the project README',
      'Kaggle GPU training workflow',
      'Repository: dakshu180/isl-project',
    ],
    metrics: [{ value: '49', label: 'gesture classes in the project README' }],
    github: 'https://github.com/dakshu180/isl-project',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'speclearn',
    title: 'SpecLearn',
    year: '2026',
    genre: 'AI • EdTech • Accessibility',
    logline: 'An accessible online learning portal for children with diverse learning needs, with a Gemini-powered tutor concept.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Google Gemini'],
    build: [
      'Designed an inclusive learning interface with study modules, assignments, and an AI tutor experience.',
      'The public README describes accessibility-focused design and scholarship assessment flows.',
    ],
    features: [
      'Inclusive learning portal concept',
      'Gemini-powered tutor described in the repository',
      'Accessibility-aware, responsive interface',
      'Repository: dakshu180/SpecLearn',
    ],
    metrics: [],
    github: 'https://github.com/dakshu180/SpecLearn',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'project-omega',
    title: 'Project OMEGA',
    year: '2026',
    genre: 'AI • Computer Vision • Desktop',
    logline: 'A desktop assistant concept combining computer vision, a Gemini-powered interface, and device telemetry.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'Gemini', 'Electron', 'React'],
    build: [
      'Built a Python-based assistant architecture with computer-vision features and a desktop shell.',
      'The public repository describes a liveness-aware unlock concept, gesture interaction, and hardware telemetry.',
    ],
    features: [
      'Camera-based liveness and gesture interaction concepts',
      'Electron/React desktop interface',
      'Python computer-vision components',
      'Repository: dakshu180/Project-OMEGA',
    ],
    metrics: [],
    github: 'https://github.com/dakshu180/Project-OMEGA',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'ai-document-interrogator',
    title: 'AI Document Interrogator',
    year: '2026',
    genre: 'Generative AI • RAG • Desktop',
    logline: 'A desktop document Q&A prototype that retrieves relevant passages from PDFs before generating an answer.',
    stack: ['Python', 'PyMuPDF', 'NumPy', 'Google Gemini', 'CustomTkinter'],
    build: [
      'Created a retrieval-augmented document workflow that extracts PDF text, creates embeddings, and ranks relevant passages.',
      'The repository describes a Gemini-powered generation step and an asynchronous desktop interface.',
    ],
    features: [
      'PDF ingestion with PyMuPDF',
      'Embedding similarity search with NumPy',
      'Gemini-assisted contextual answers',
      'Repository: dakshu180/ai-document-interrogator',
    ],
    metrics: [],
    github: 'https://github.com/dakshu180/ai-document-interrogator',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'opticare-ai',
    title: 'OptiCare AI',
    year: '2026',
    genre: 'AI • MedTech • Computer Vision',
    logline: 'An ophthalmic screening web-app prototype exploring retinal-image classification and clinician review.',
    stack: ['Python', 'TensorFlow', 'EfficientNet', 'Streamlit'],
    build: [
      'Built a public retinal screening project using a TensorFlow image-classification workflow and a Streamlit interface.',
      'The README describes explainability views and clinician-in-the-loop review; it is an educational prototype, not a medical device.',
    ],
    features: [
      'Retinal-image screening prototype',
      'Streamlit web interface',
      'Explainability and clinician-review concepts',
      'Repository: dakshu180/Diabetic-Retinopathy-AI-Portal',
    ],
    metrics: [],
    github: 'https://github.com/dakshu180/Diabetic-Retinopathy-AI-Portal',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'brighton-school-website',
    title: 'Brighton School Web Platform',
    year: '2026',
    genre: 'Web • School Platform • CMS',
    logline: 'A school website project using a fast static front end with hybrid rendering and a Git-based CMS.',
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Decap CMS'],
    build: [
      'Created a school web-platform repository with a static-first site and server-side capabilities for a parent portal.',
      'The repository README lists Astro, Tailwind CSS, TypeScript, and Decap CMS.',
    ],
    features: [
      'Static-first school web experience',
      'Parent portal rendering capabilities',
      'Git-based CMS workflow',
      'Repository: dakshu180/brighton-school-website',
    ],
    metrics: [],
    github: 'https://github.com/dakshu180/brighton-school-website',
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'pdf-sentinel',
    title: 'PDF Sentinel',
    year: '2026',
    genre: 'Privacy • Desktop Utility',
    logline: 'An offline PDF utility for merging documents and applying password encryption without uploading files.',
    stack: ['Python', 'pypdf', 'AES Encryption', 'CustomTkinter'],
    build: [
      'Built a local document utility that processes PDF files on the user’s machine.',
      'The project README describes batch merging and AES password protection for sensitive documents.',
    ],
    features: [
      'Merge multiple PDF files',
      'Apply password-based AES encryption',
      'Local-first processing for document privacy',
      'Repository: dakshu180/pdf-sentinel',
    ],
    metrics: [{ value: 'Offline', label: 'local document processing' }],
    github: 'https://github.com/dakshu180/pdf-sentinel',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'waveguard-aquashield',
    title: 'WaveGuard AquaShield',
    year: '2026',
    genre: 'Engineering • Climate Resilience',
    logline: 'A collaborative engineering concept for a protective tsunami-barrier system.',
    stack: ['Engineering Design', 'Coastal Resilience', 'Research'],
    build: [
      'Collaborated on the design and presentation of a concept for a protective tsunami barrier.',
      'Explored engineering responses to coastal hazards and community resilience.',
    ],
    features: ['Tsunami-barrier concept', 'Collaborative engineering', 'Presentation and design'],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'severn-narmada-research',
    title: 'Severn–Narmada Economic Research',
    year: '2026',
    genre: 'Research • Infrastructure • Economics',
    logline: 'A collaborative study of regional economics, global logistics, and strategic infrastructure.',
    stack: ['Regional Research', 'Logistics', 'Infrastructure'],
    build: [
      'Co-authored comparative economic and infrastructure research with Satyam Shrigopal.',
      'Explored logistics, infrastructure, and macroeconomic themes.',
    ],
    features: ['Regional economic research', 'Global logistics analysis', 'Strategic infrastructure'],
    metrics: [],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'john-locke',
    title: 'Commendation',
    org: 'John Locke Institute Global Essay Prize • 2026',
    detail: 'Earned a commendation in International Relations for research on macroeconomics and US–China trade relations, with an invitation to the London awards gala.',
    laurel: 'Global Recognition',
  },
  {
    id: 'nitttr-inae-conclave',
    title: 'Certificate of Appreciation',
    org: 'NITTTR–INAE Youth Conclave • 2026',
    detail: 'Presented the Smart Retinoscope project at the Raipur conclave in October 2026.',
    laurel: 'Project Showcase',
  },
  {
    id: 'jito-education-olympiad',
    title: 'International Rank 47',
    org: 'JITO Education Olympiad • 2025–2026',
    detail: 'Advanced to the second round and secured an international rank of 47.',
    laurel: 'Olympiad',
  },
  {
    id: 'immerse-scholarship',
    title: '30% Scholarship',
    org: 'Immerse Education',
    detail: 'Awarded an academic scholarship based on competition performance and academic merit.',
    laurel: 'Academic Merit',
  },
  {
    id: 'times-ai-masterclass',
    title: 'AI Student Masterclass',
    org: 'The Times of India',
    detail: 'Featured custom AI study bots and student software tools in the AI Winter Camp showcase.',
    laurel: 'AI Showcase',
  },
  {
    id: 'innovation-showcases',
    title: 'Innovation Showcases',
    org: 'NIT Raipur & SRIJAN 5.0',
    detail: 'Pitched the Smart Retinoscope at a NIT Raipur innovation competition and SRIJAN 5.0 at Anjaneya University in October 2026.',
    laurel: 'MedTech Pitch',
  },
  {
    id: 'vivo-ignite',
    title: 'Changemakers Challenge',
    org: 'vivo Ignite • 4th Edition',
    detail: 'Participated in the Changemakers Challenge with a student project proposal.',
    laurel: 'Innovation',
  },
  {
    id: 'samsung-solve-for-tomorrow',
    title: 'Solve for Tomorrow',
    org: 'Samsung • 2026',
    detail: 'Submitted an ophthalmic screening project to the Samsung Solve for Tomorrow challenge.',
    laurel: 'National Challenge',
  },
  {
    id: 'hack-club-gemini',
    title: 'Hack Club & Gemini 3 Hackathon',
    org: 'Hack Club • Devpost',
    detail: 'Active in the Hack Club developer community and participated in a Gemini 3 Hackathon on Devpost.',
    laurel: 'Community & Build',
  },
  {
    id: 'robofest',
    title: 'Robotics Builder',
    org: 'Robofest Gujarat 5.0',
    detail: 'Engineered a junior-level high-speed athletic robot with Raspberry Pi 5, Teensy 4.1, Maxon motors, and a custom 360° chassis.',
    laurel: 'Robotics',
  },
  {
    id: 'global-quantum-challenge',
    title: 'Quantum Mechanics Challenge',
    org: 'Global Challenge • 2026',
    detail: 'Participated in a global challenge focused on quantum mechanics.',
    laurel: 'Science Challenge',
  },
  {
    id: 'isro-missions-workshop',
    title: 'ISRO Missions Workshop',
    org: 'ISRO • May 2026',
    detail: 'Participated in a workshop exploring ISRO missions and space science.',
    laurel: 'Space Science',
  },
  {
    id: 'student-competitions',
    title: 'Student Challenges',
    org: 'INSEF • Breakthrough Junior • Blue Ocean',
    detail: 'Registered for student science and entrepreneurship competitions, including INSEF, Breakthrough Junior Challenge, and Blue Ocean Student Entrepreneur Competition.',
    laurel: 'Competitions',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'IAAC', name: 'International Astronomy and Astrophysics Competition Certification' },
  { issuer: 'Google & Kaggle', name: '5-Day AI Agents / Generative AI Intensive' },
  { issuer: 'ISRO', name: 'ISRO Missions Workshop • May 2026' },
  { issuer: 'Global Quantum Challenge', name: 'Quantum Mechanics Challenge • 2026' },
  { issuer: 'Claude', name: 'Claude 101 Workshops' },
  { issuer: 'NITTTR–INAE', name: 'Certificate of Appreciation • Youth Conclave 2026' },
  { issuer: 'Cylab', name: 'Cybersecurity Workshop • 2026' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming and web fundamentals',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Frameworks & libraries listed on the resume',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Vite', mono: 'Vi' },
      { name: 'Astro', mono: 'As' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Apps, APIs & retrieval workflows',
    skills: [
      { name: 'Flask', mono: 'Fl' },
      { name: 'Streamlit', mono: 'St' },
      { name: 'Gemini API', mono: 'Ge' },
      { name: 'RAG', mono: 'Rg' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'AI, data & hardware systems',
    skills: [
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'Keras', mono: 'Kr' },
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'MediaPipe', mono: 'Mp' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Kaggle GPU', mono: 'Kg' },
      { name: 'Electron', mono: 'El' },
      { name: 'Google Gemini', mono: 'Gm' },
      { name: 'Raspberry Pi 5', mono: 'R5' },
      { name: 'Teensy 4.1', mono: 'T4' },
      { name: 'Sensors', mono: 'Se' },
      { name: 'Motor Controllers', mono: 'Mc' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Persistence & retrieval',
    skills: [
      { name: 'SQLite', mono: 'Sq' },
      { name: 'Vector Embeddings', mono: 'Ve' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Core Competencies',
    subtitle: 'Systems, security & applied AI',
    skills: [
      { name: 'Cryptography', mono: 'Cr' },
      { name: 'Custom Firmware', mono: 'Fw' },
      { name: 'Deep Learning', mono: 'Dl' },
      { name: 'Computer Vision', mono: 'Cv' },
      { name: 'Full-Stack Web', mono: 'Fw' },
      { name: 'Cryptographic Storage', mono: 'Cs' },
      { name: 'Offline-First Design', mono: 'Of' },
      { name: 'CAD & Robotics', mono: 'Ca' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Areas of exploration',
    skills: [
      { name: 'Systems Engineering', mono: 'Se' },
      { name: 'Artificial Intelligence', mono: 'Ai' },
      { name: 'Robotics', mono: 'Rb' },
      { name: 'Space Science', mono: 'Ss' },
      { name: 'MedTech', mono: 'Mt' },
      { name: 'Economic Research', mono: 'Er' },
      { name: 'Entrepreneurship', mono: 'En' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['ISL Neural Network', 'Project OMEGA', 'AI Document Interrogator'],
  React: ['Project OMEGA'],
  Astro: ['Brighton School Web Platform'],
  'Tailwind CSS': ['Brighton School Web Platform'],
  'Gemini API': ['SpecLearn', 'AI Document Interrogator'],
  RAG: ['AI Document Interrogator'],
  Flask: ['Project OMEGA'],
  Streamlit: ['OptiCare AI'],
  TensorFlow: ['ISL Neural Network', 'OptiCare AI'],
  Keras: ['ISL Neural Network'],
  PyTorch: ['ISL Neural Network'],
  OpenCV: ['ISL Neural Network', 'Project OMEGA'],
  MediaPipe: ['ISL Neural Network', 'Project OMEGA'],
  NumPy: ['AI Document Interrogator'],
  'Kaggle GPU': ['ISL Neural Network'],
  Electron: ['Project OMEGA'],
  'Google Gemini': ['SpecLearn', 'AI Document Interrogator', 'Project OMEGA'],
  SQLite: ['Project OMEGA'],
  'Vector Embeddings': ['AI Document Interrogator'],
  'Raspberry Pi 5': ['Robofest Gujarat 5.0'],
  'Teensy 4.1': ['Robofest Gujarat 5.0'],
  Sensors: ['Robofest Gujarat 5.0'],
  'Motor Controllers': ['Robofest Gujarat 5.0'],
  Cryptography: ['PDF Sentinel'],
  'Cryptographic Storage': ['PDF Sentinel'],
  'Offline-First Design': ['Smart Retinoscope', 'PDF Sentinel'],
  'CAD & Robotics': ['Robofest Gujarat 5.0', 'WaveGuard AquaShield'],
  'Custom Firmware': ['Robofest Gujarat 5.0'],
  'Deep Learning': ['ISL Neural Network', 'OptiCare AI'],
  'Computer Vision': ['Smart Retinoscope', 'ISL Neural Network', 'OptiCare AI'],
  'Full-Stack Web': ['Project OMEGA', 'Brighton School Web Platform'],
  MedTech: ['Smart Retinoscope', 'OptiCare AI'],
  'Economic Research': ['Severn–Narmada Economic Research'],
  Entrepreneurship: ['Renvova Resource Solutions', 'vivo Ignite'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Student & Scholar',
    period: '2026 – Present',
    synopsis: 'A school-year story shaped by academic ambition, research writing, and competitive challenges.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Studying in Class 9 at Brighton International School in Raipur, Chhattisgarh.',
        tags: ['Class 9', 'Brighton International School'],
        runtime: '2026 – Present',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Scholarship',
        description: 'Earned a 30% Immerse Education academic scholarship based on competition performance and merit.',
        tags: ['Immerse Education', '30% Scholarship'],
        runtime: 'Academic merit',
        palette: jade,
      },
      {
        code: 'S01 E03',
        title: 'Rank 47',
        description: 'Advanced to round two of the JITO Education Olympiad and secured international rank 47.',
        tags: ['JITO', 'International Rank 47'],
        runtime: '2025 – 2026',
        palette: ocean,
      },
      {
        code: 'S01 E04',
        title: 'The Commendation',
        description: 'Received a John Locke Institute commendation for International Relations research on macroeconomics and US–China trade.',
        tags: ['John Locke Institute', 'International Relations'],
        runtime: '2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'AI & MedTech',
    period: '2026',
    synopsis: 'Building accessible technology prototypes at the intersection of computer vision, healthcare, and communication.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Smart Retinoscope',
        description: 'Co-developed and presented an offline, low-power ophthalmic screening prototype with doctor-review PDF reports.',
        tags: ['MedTech', 'Offline-First', 'NITTTR–INAE'],
        runtime: 'Project & showcase',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Sign Translator',
        description: 'An Indian Sign Language gesture-recognition project using a deep-learning pipeline and computer vision.',
        tags: ['Python', 'TensorFlow', 'MediaPipe'],
        runtime: '49 classes',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Retinal Portal',
        description: 'OptiCare AI explores retinal image screening and clinician review as an educational software prototype.',
        tags: ['TensorFlow', 'Streamlit', 'XAI'],
        runtime: 'GitHub Original',
        palette: crimson,
      },
      {
        code: 'S02 E04',
        title: 'The Showcase',
        description: 'Presented the Smart Retinoscope at NITTTR–INAE Youth Conclave and innovation events in Raipur.',
        tags: ['NIT Raipur', 'SRIJAN 5.0'],
        runtime: 'October 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning Platforms',
    period: '2026',
    synopsis: 'Designing web experiences for learning, accessibility, and school communities.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'SpecLearn',
        description: 'An inclusive online learning concept with an AI tutor, student dashboard, and scholarship assessment.',
        tags: ['EdTech', 'Accessibility', 'Gemini'],
        runtime: 'GitHub Original',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The School Platform',
        description: 'A Brighton International School web-platform repository using Astro, TypeScript, Tailwind, and a Git-based CMS.',
        tags: ['Astro', 'TypeScript', 'Decap CMS'],
        runtime: 'GitHub Original',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'The Document Interrogator',
        description: 'A desktop RAG prototype that searches PDF passages and uses Gemini to answer questions with context.',
        tags: ['RAG', 'PyMuPDF', 'Gemini'],
        runtime: 'GitHub Original',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Systems & Robotics',
    period: '2026',
    synopsis: 'Exploring hardware, assistive interfaces, and automation through prototypes and hands-on builds.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Project OMEGA',
        description: 'A desktop assistant concept combining computer vision, gesture interaction, and a React/Electron interface.',
        tags: ['Python', 'OpenCV', 'Electron'],
        runtime: 'GitHub Original',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'The Athletic Robot',
        description: 'Engineered a junior-level high-speed robot using Raspberry Pi 5, Teensy 4.1, Maxon motors, and a custom chassis.',
        tags: ['Robofest Gujarat 5.0', 'Raspberry Pi', 'Teensy'],
        runtime: 'Robotics build',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'WaveGuard AquaShield',
        description: 'A collaborative engineering and presentation project for a protective tsunami-barrier concept.',
        tags: ['Engineering', 'Coastal Resilience'],
        runtime: 'Team project',
        palette: ocean,
      },
      {
        code: 'S04 E04',
        title: 'The Offline Toolkit',
        description: 'PDF Sentinel merges and protects documents locally, without sending files to a web service.',
        tags: ['Python', 'PDF', 'AES'],
        runtime: 'GitHub Original',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'Research & Ideas',
    period: '2026',
    synopsis: 'Taking technical ideas into research, essay writing, science events, and national showcases.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Researcher',
        description: 'Co-authored comparative economic and infrastructure research on the Severn–Narmada corridor.',
        tags: ['Research', 'Logistics', 'Infrastructure'],
        runtime: 'Research project',
        palette: amber,
      },
      {
        code: 'S05 E02',
        title: 'The Trade Analysis',
        description: 'Wrote a formal macroeconomics research paper on bilateral US–China trade policy and global economic shifts.',
        tags: ['Macroeconomics', 'US–China Trade', 'LaTeX'],
        runtime: 'Research paper',
        palette: jade,
      },
      {
        code: 'S05 E03',
        title: 'The AI Masterclass',
        description: 'Showcased custom AI study bots and student software tools at The Times of India AI Student Masterclass.',
        tags: ['The Times of India', 'AI Winter Camp'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 6,
    title: 'The Entrepreneurial Arc',
    period: '2026 – Present',
    synopsis: 'Taking on company leadership while learning about industrial operations, material processing, and logistics.',
    episodes: [
      {
        code: 'S06 E01',
        title: 'The CEO',
        description: 'CEO of Renvova Resource Solutions, focused on heavy material processing, logistics, and transportation.',
        tags: ['Renvova Resource Solutions', 'Leadership'],
        runtime: '2026 – Present',
        palette: amber,
      },
      {
        code: 'S06 E02',
        title: 'The Operations View',
        description: 'Learning about business outreach, logistics, and commissioning in the Raipur EV-battery recycling ecosystem.',
        tags: ['Operations', 'Logistics', 'EV Battery Recycling'],
        runtime: 'Industry exposure',
        palette: jade,
      },
      {
        code: 'S06 E03',
        title: 'The Changemaker',
        description: 'Participated in vivo Ignite and submitted the Smart Retinoscope to Samsung Solve for Tomorrow.',
        tags: ['vivo Ignite', 'Samsung Solve for Tomorrow'],
        runtime: '2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 7,
    title: 'Communities & Challenges',
    period: '2026',
    synopsis: 'Learning with developer communities, science organizations, workshops, and student competitions.',
    episodes: [
      {
        code: 'S07 E01',
        title: 'The AI Intensive',
        description: 'Completed a five-day AI Agents and Generative AI intensive by Google and Kaggle.',
        tags: ['Google', 'Kaggle', 'Generative AI'],
        runtime: '5 days',
        palette: ocean,
      },
      {
        code: 'S07 E02',
        title: 'The Space Workshop',
        description: 'Joined the ISRO Missions Workshop and engaged with space-science institutions.',
        tags: ['ISRO', 'IAAC', 'Space Science'],
        runtime: 'May 2026',
        palette: violet,
      },
      {
        code: 'S07 E03',
        title: 'The Builder Community',
        description: 'Active in Hack Club, joined a Gemini 3 Hackathon on Devpost, and explores open-source contribution.',
        tags: ['Hack Club', 'Gemini 3', 'Devpost'],
        runtime: 'Community',
        palette: jade,
      },
      {
        code: 'S07 E04',
        title: 'The Next Chapter',
        description: 'Continuing to explore systems engineering, custom firmware, AI, robotics, and research.',
        tags: ['Systems', 'AI', 'Robotics'],
        runtime: 'In production',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Global recognition', title: 'John Locke', detail: 'International Relations commendation • 2026', palette: amber },
  { label: 'MedTech Original', title: 'Smart Retinoscope', detail: 'Offline screening prototype • showcased in Raipur', palette: ocean },
  { label: 'AI & accessibility', title: 'ISL Neural Network', detail: '49 gesture classes • TensorFlow • computer vision', palette: jade },
  { label: 'Future of learning', title: 'SpecLearn', detail: 'Accessible learning portal with an AI tutor concept', palette: crimson },
  { label: 'CEO', title: 'Renvova Solutions', detail: 'Heavy material processing • logistics • transportation', palette: amber },
  { label: 'Systems Original', title: 'Project OMEGA', detail: 'Computer vision • gesture interface • desktop shell', palette: violet },
  { label: 'AI showcase', title: 'Google × Kaggle', detail: 'Five-day AI Agents and Generative AI intensive', palette: ocean },
  { label: 'Academic honor', title: 'JITO Olympiad', detail: 'International Rank 47 • second round', palette: jade },
  { label: 'Robotics build', title: 'Robofest 5.0', detail: 'High-speed robot • Raspberry Pi 5 • Teensy 4.1', palette: crimson },
  { label: 'Current focus', title: 'Systems & AI', detail: 'Firmware • robotics • accessible technology', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'Class 9',
    lines: ['Brighton International School', 'Raipur, Chhattisgarh · 2026 – Present'],
    chips: ['Student'],
  },
  {
    kicker: 'Skills',
    title: 'Systems & AI.',
    lines: ['Python · JavaScript · HTML · CSS', 'React · Vite · Astro · Tailwind CSS'],
    chips: ['Python', 'React', 'PyTorch', 'OpenCV', 'Robotics'],
  },
  {
    kicker: 'Projects',
    title: `${projects.length} Originals`,
    lines: ['Smart Retinoscope · ISL Neural Network · OptiCare AI', 'SpecLearn · Brighton School Web Platform', 'Project OMEGA · RAG Document Interrogator · PDF Sentinel'],
  },
  {
    kicker: 'Achievements',
    title: 'The Recognition Arc',
    lines: ['John Locke Institute Commendation · International Relations', 'JITO Education Olympiad · International Rank 47', 'NITTTR–INAE Youth Conclave · NIT Raipur · SRIJAN 5.0'],
  },
  {
    kicker: 'Credentials & Workshops',
    title: 'Learning in Public',
    lines: ['Google × Kaggle AI Agents / Generative AI Intensive', 'IAAC · ISRO Missions Workshop · Global Quantum Mechanics Challenge', 'Claude 101 · Cylab Security Workshop'],
  },
  {
    kicker: 'Company',
    title: 'Renvova Solutions',
    lines: ['CEO · Renvova Resource Solutions', 'Heavy material processing · logistics · transportation'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Custom Firmware · Cryptography · AI · Robotics'],
  },
];

export type ProfileId = 'main' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'main',
    name: 'Daksh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & interests', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
