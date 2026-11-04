
import { Course, UserProfile, Job, FullInstitutionData, CommunityPost, Mentor, Club, UserSettings, Program, InstructorSettings, MentorshipMeeting, SubscriptionTier } from './types';
import BookOpenIcon from './components/icons/BookOpenIcon';
import SparklesIcon from './components/icons/SparklesIcon';
import TrophyIcon from './components/icons/TrophyIcon';

export const courses: Course[] = [];

export const userProfile: UserProfile = {
  name: 'Alex Turner',
  displayName: 'Alex T.',
  username: 'alex_turner',
  academicInstitution: 'State University',
  avatarUrl: 'https://i.pravatar.cc/150?u=alexturner',
  coverImageUrl: 'https://picsum.photos/seed/profile-banner/1200/300',
  bio: "Passionate lifelong learner exploring the intersection of technology and design. Currently diving deep into AI-powered UX and advanced state management in React. My goal is to build intuitive, user-centric applications that make a positive impact.",
  contact: {
    email: 'alex.turner@example.com',
  },
  location: {
    city: 'San Francisco',
    country: 'USA',
  },
  skills: ['React', 'TypeScript', 'UX/UI Design', 'State Management', 'Figma', 'Generative AI'],
  socialLinks: {
    linkedin: 'https://linkedin.com/in/alex-turner',
    github: 'https://github.com/alex-turner',
    behance: 'https://www.behance.net/alexturner',
    portfolio: 'https://alex-turner-portfolio.com',
  },
  education: [
    { id: 'edu1', institution: 'Tech University', degree: 'B.S. in Computer Science', period: '2018 - 2022' },
  ],
  title: 'Lifelong Learner & Frontend Developer',
  coursesInProgress: 0,
  coursesCompleted: 0,
  achievements: [
    { id: 'ach1', name: 'First Steps', description: 'Completed your first lesson.', Icon: BookOpenIcon, color: 'bg-green-500' },
    { id: 'ach2', name: 'Curious Mind', description: 'Asked a question to the AI Tutor.', Icon: SparklesIcon, color: 'bg-purple-500' },
    { id: 'ach4', name: 'Course Conqueror', description: 'Finish your first course on ledger.', Icon: TrophyIcon, color: 'bg-yellow-500' },
    { id: 'ach5', name: 'Lesson Leader', description: 'Complete a lesson and take a step forward.', Icon: TrophyIcon, color: 'bg-teal-500' },
  ],
  certificates: [],
  learningGoals: [
    'Master React State Management',
    'Build a full-stack MERN application',
    'Contribute to an open-source project',
  ],
  mentorshipStatus: 'offering',
  targetCareer: 'Frontend Developer',
};

export const userSettings: UserSettings = {
    account: {
        email: 'alex.turner@example.com',
        phone: '+1 (555) 123-4567',
        twoFactorEnabled: true,
        connectedAccounts: ['google', 'linkedin'],
    },
    learning: {
        language: 'en-US',
        subtitles: true,
        videoSpeed: 1,
        videoQuality: 'auto',
        autoPlay: true,
    },
    notifications: {
        reminders: true,
        certificates: true,
        offers: false,
        forum: 'highlights',
    },
    privacy: {
        profileVisibility: 'public',
        showCompletedCourses: true,
        showAchievements: true,
    },
    payment: {
        plan: 'Premium Annual',
        paymentMethods: [
            { type: 'credit_card', last4: '4242', expiry: '12/26' },
        ],
        billingHistory: [
            { id: 'inv1', date: '2024-06-01', amount: 120.00, invoiceUrl: '#' },
            { id: 'inv2', date: '2023-06-01', amount: 120.00, invoiceUrl: '#' },
        ],
    },
    accessibility: {
        highContrast: false,
    },
    support: {
        lastDataExportRequest: null,
        lastAccountDeletionRequest: null,
    },
};

export const initialInstructorSettings: InstructorSettings = {
    publicProfile: {
        displayName: 'Alex Turner',
        bio: 'Passionate instructor dedicated to making modern JavaScript accessible to everyone. With over 10 years of experience in frontend development, I specialize in React, performance optimization, and building scalable applications.',
        socialLinks: {
            twitter: 'https://twitter.com/alexturner',
            website: 'https://alextuner.dev',
        },
        achievements: [
            { id: 'ach-instr-1', name: 'Top Instructor', description: 'Rated in the top 5% of instructors on the platform.', Icon: TrophyIcon, color: 'bg-amber-500' },
            { id: 'ach-instr-2', name: 'Course Creator', description: 'Published over 5 courses.', Icon: BookOpenIcon, color: 'bg-blue-500' },
        ],
        certifications: [
            { id: 'cert-instr-1', courseId: 'react-adv', courseTitle: 'Advanced React Certified Developer', issuedDate: '2023-01-15', transactionHash: '0xabc123def456', linkedinShareUrl: '#' },
        ],
        accreditations: [
            'Certified Web Development Professional (WDP)',
            'Official JavaScript Educator',
        ],
        licenses: [
            'State Teaching License #12345',
        ],
        resumeUrl: '/documents/alex-turner-cv.pdf',
    },
    payout: {
        method: 'paypal',
        paypalEmail: 'alex.t@paypal.com',
        stripeConnected: false,
    },
    notifications: {
        studentJoins: true,
        courseReviews: true,
        newEnrollments: true,
    },
};

export const recommendedJobs: Job[] = [
    { id: 'job1', title: 'Frontend Developer', company: 'Innovate Inc.', location: 'Remote', matchPercentage: 92, skills: ['React', 'TypeScript', 'State Management', 'HTML', 'CSS'] },
    { id: 'job2', title: 'UX/UI Designer', company: 'Creative Solutions', location: 'New York, NY', matchPercentage: 78, skills: ['UX/UI Design', 'Figma', 'Generative AI', 'User Research'] },
    { id: 'job3', title: 'Data Scientist', company: 'DataDriven Co.', location: 'San Francisco, CA', matchPercentage: 65, skills: ['Python', 'Data Science', 'Machine Learning'] },
     { id: 'job4', title: 'React Native Developer', company: 'MobileFirst', location: 'Remote', matchPercentage: 88, skills: ['React', 'State Management', 'Mobile Development'] },
];

export const instructorCourses: Course[] = [];

export const seekingMentorshipLearners: UserProfile[] = [
  {
    name: 'Sarah Connor',
    username: 'sarah_connor',
    avatarUrl: 'https://i.pravatar.cc/150?u=sarahconnor',
    title: 'Aspiring Full Stack Developer',
    coursesInProgress: 4,
    coursesCompleted: 2,
    mentorshipStatus: 'seeking',
    targetCareer: 'Full Stack Developer',
    bio: "Eager to learn backend technologies and combine them with my frontend skills. Looking for guidance on building scalable applications.",
    achievements: [],
    certificates: [],
  },
  {
    name: 'Kyle Reese',
    username: 'kyle_reese',
    avatarUrl: 'https://i.pravatar.cc/150?u=kylereese',
    title: 'UX/UI Design Student',
    coursesInProgress: 2,
    coursesCompleted: 1,
    mentorshipStatus: 'seeking',
    targetCareer: 'UX/UI Designer',
    bio: "Passionate about creating intuitive user interfaces. I'm seeking a mentor to help me build a strong portfolio and navigate the design industry.",
    achievements: [],
    certificates: [],
  },
  {
    name: 'John Anderton',
    username: 'john_anderton',
    avatarUrl: 'https://i.pravatar.cc/150?u=johnanderton',
    title: 'Cybersecurity Enthusiast',
    coursesInProgress: 5,
    coursesCompleted: 3,
    mentorshipStatus: 'seeking',
    targetCareer: 'Cybersecurity Analyst',
    bio: "Deeply interested in ethical hacking and network security. Looking for a mentor to guide my career path in the cybersecurity field.",
    achievements: [],
    certificates: [],
  },
];

export const interests = [
    { name: 'Web Development', icon: '💻' },
    { name: 'Data Science', icon: '📊' },
    { name: 'AI & Machine Learning', icon: '🤖' },
    { name: 'Design', icon: '🎨' },
    { name: 'Business', icon: '📈' },
    { name: 'Marketing', icon: '📢' },
    { name: 'Cloud & DevOps', icon: '☁️' },
    { name: 'Cybersecurity', icon: '🛡️' },
    { name: 'Mobile Development', icon: '📱' },
    { name: 'Game Development', icon: '🎮' },
    { name: 'Health & Wellness', icon: '❤️' },
    { name: 'Finance', icon: '💰' },
];

export const motivationalQuotes = [
    "The secret to getting ahead is getting started.",
    "The beautiful thing about learning is that nobody can take it away from you.",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there."
];

const institutionalCourses: Course[] = [];

const institutionalPrograms: Program[] = [];

export const fullInstitutionData: FullInstitutionData = {
  name: 'State University',
  profile: {
    tagline: 'Excellence in Digital Education.',
    about: 'Founded in 1950, State University has been a pioneer in accessible and innovative education. Our digital campus offers world-class programs designed to equip learners with the skills needed for the future of work. We are accredited by the National Council for Higher Education.',
    bannerUrl: 'https://picsum.photos/seed/stateu-banner/1600/400',
    website: 'https://stateu.edu',
    social: {
      linkedin: 'https://linkedin.com/school/state-university',
      twitter: 'https://twitter.com/stateu',
    },
    contact: {
      email: 'admissions@stateu.edu',
      phone: '+1 (555) 123-4567',
    },
    supportLinks: {
        faq: 'https://stateu.edu/faq',
        helpDesk: 'https://stateu.edu/help',
        applicationPortal: 'https://stateu.edu/apply',
    },
    faculty: [
      { id: 'f1', name: 'Dr. Evelyn Reed', title: 'Head of Computer Science', avatarUrl: 'https://i.pravatar.cc/150?u=evelynreed', bio: 'Expert in AI and Machine Learning with over 20 years of research experience.' },
      { id: 'f2', name: 'Prof. Samuel Jones', title: 'Lead, Business Analytics', avatarUrl: 'https://i.pravatar.cc/150?u=samueljones', bio: 'Brings a decade of industry experience from Fortune 500 companies to the classroom.' },
    ],
    locations: [
      { id: 'loc1', name: 'Main Campus', address: '123 University Ave, Capital City, USA', imageUrl: 'https://picsum.photos/seed/campus1/400/250' },
      { id: 'loc2', name: 'Digital Innovation Hub', address: '456 Tech Park, Silicon Valley, USA', imageUrl: 'https://picsum.photos/seed/campus2/400/250' },
    ],
    partnerships: [
      { name: 'Innovate Inc.', logoUrl: 'https://picsum.photos/seed/innovate/200/100' },
      { name: 'DataDriven Co.', logoUrl: 'https://picsum.photos/seed/datadriven/200/100' },
    ],
    videoIntroductionUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    gallery: [
      { id: 'gal1', imageUrl: 'https://picsum.photos/seed/gallery1/600/400', caption: 'State-of-the-art library facilities.' },
      { id: 'gal2', imageUrl: 'https://picsum.photos/seed/gallery2/600/400', caption: 'Collaborative student spaces.' },
      { id: 'gal3', imageUrl: 'https://picsum.photos/seed/gallery3/600/400', caption: 'Vibrant campus life.' },
      { id: 'gal4', imageUrl: 'https://picsum.photos/seed/gallery4/600/400', caption: 'Modern engineering labs.' },
    ],
    impactStories: [
      { 
        id: 'story1', 
        title: 'From Classroom to Career', 
        author: 'John Doe, Alumnus 2022', 
        content: 'The skills I learned at State University directly translated to my success at Innovate Inc. The hands-on projects were invaluable.', 
        imageUrl: 'https://picsum.photos/seed/story1/400/250' 
      },
      { 
        id: 'story2', 
        title: 'Groundbreaking Research in AI', 
        author: 'Dr. Evelyn Reed', 
        content: 'Our latest research, published in the Journal of AI, pushes the boundaries of machine learning and was developed right here in our labs.', 
        imageUrl: 'https://picsum.photos/seed/story2/400/250' 
      },
    ],
    testimonials: [
        { 
            id: 'it1', 
            name: 'Sarah L.', 
            avatarUrl: 'https://i.pravatar.cc/150?u=sarahl', 
            quote: 'The flexible online programs allowed me to get a world-class education while working full-time. The faculty is incredibly supportive!',
            rating: 5,
        },
        { 
            id: 'it2', 
            name: 'David C.', 
            avatarUrl: 'https://i.pravatar.cc/150?u=davidc', 
            quote: 'State University\'s career services are top-notch. I landed my dream job at DataDriven Co. thanks to the skills I learned here.',
            rating: 5,
        },
    ],
    mentorshipProgram: {
        description: 'Our award-winning mentorship program connects students with industry experts and esteemed faculty to provide guidance, support, and career advice. All students are encouraged to participate.',
        officeHours: [
            { id: 'oh1', day: 'Monday', time: '2:00 PM - 4:00 PM', facultyName: 'Dr. Evelyn Reed' },
            { id: 'oh2', day: 'Wednesday', time: '10:00 AM - 12:00 PM', facultyName: 'Prof. Samuel Jones' },
            { id: 'oh3', day: 'Friday', time: '1:00 PM - 2:00 PM', facultyName: 'General Advising' },
        ]
    },
  },
  branding: {
    logoUrl: 'https://picsum.photos/seed/stateu-logo/200/60',
    primaryColor: '#A855F7', // purple-500
  },
  settings: {
    customDomain: 'learn.stateu.edu',
    whiteLabel: true,
    multiLanguage: false,
    profileVisibility: 'public',
  },
  analytics: {
    totalLearners: 5280,
    activeCourses: 0,
    certificatesIssued: 0,
    learnersPlacedInJobs: 452,
    totalRevenue: 0,
    revenueByCourse: [],
    progressDistribution: [
      { status: 'Completed', count: 1250 },
      { status: 'In Progress', count: 2530 },
      { status: 'Not Started', count: 1500 },
    ],
    demographicsByDepartment: [
      { department: 'Engineering', count: 2100 },
      { department: 'Business', count: 1500 },
      { department: 'Arts & Sciences', count: 1000 },
      { department: 'Other', count: 680 },
    ],
    demographicsByRegion: [
        { region: 'N. America', count: 2800 },
        { region: 'Europe', count: 1200 },
        { region: 'Asia', count: 800 },
        { region: 'S. America', count: 300 },
        { region: 'Other', count: 180 },
    ],
    demographicsByAge: [
        { ageGroup: '18-24', count: 1500 },
        { ageGroup: '25-34', count: 2500 },
        { ageGroup: '35-44', count: 900 },
        { ageGroup: '45+', count: 380 },
    ],
    employerConnections: [
        { employer: 'Innovate Inc.', learnersHired: 58 },
        { employer: 'DataDriven Co.', learnersHired: 42 },
        { employer: 'TechCorp', learnersHired: 35 },
        { employer: 'Creative Solutions', learnersHired: 28 },
        { employer: 'Global Net', learnersHired: 21 },
    ],
  },
  admins: [
    { id: 'admin1', name: 'Alice Johnson', email: 'alice.j@stateu.edu', role: 'Owner', lastLogin: '2 hours ago' },
    { id: 'admin2', name: 'Bob Williams', email: 'bob.w@stateu.edu', role: 'Admin', lastLogin: '1 day ago' },
  ],
  learners: [
        { id: 'learner1', name: 'John Doe', email: 'john.d@stateu.edu', progress: 85, lastActive: '2 hours ago', department: 'Engineering' },
        { id: 'learner2', name: 'Jane Smith', email: 'jane.s@stateu.edu', progress: 40, lastActive: '1 day ago', department: 'Business' },
        { id: 'learner3', name: 'Peter Jones', email: 'peter.j@stateu.edu', progress: 100, lastActive: '3 days ago', department: 'Engineering' },
        { id: 'learner4', name: 'Mary Johnson', email: 'mary.j@stateu.edu', progress: 15, lastActive: '5 days ago', department: 'Arts & Sciences' },
  ],
  monetization: {
    pricingTiers: [
        { id: 'tier1', name: 'Corporate Bulk License', price: 5000, description: 'Per 100 learners / year' },
        { id: 'tier2', name: 'Departmental Access', price: 1200, description: 'Per 20 learners / year' }
    ],
    scholarshipsEnabled: true,
    discounts: [
        { code: 'STATEU_FALL24', discount: 15, type: 'percentage' },
        { code: 'ALUMNI_50', discount: 50, type: 'fixed' },
    ],
    programBundles: [],
  },
  courses: institutionalCourses,
  programs: institutionalPrograms,
  communityPosts: [
    {
        id: 'ipost1',
        author: 'StateU Admissions',
        avatarUrl: 'https://picsum.photos/seed/stateu-logo/200/60',
        timestamp: '8 hours ago',
        content: 'Welcome, new and prospective students! Feel free to ask any questions about our programs or campus life here. #Welcome #StateU',
        likes: 55,
        comments: 12,
    },
    {
        id: 'ipost2',
        author: 'Alice Johnson (Admin)',
        avatarUrl: 'https://i.pravatar.cc/150?u=alicej',
        timestamp: '2 days ago',
        content: 'Don\'t forget, enrollment for the upcoming "Advanced Cloud Architecture" course is now open! Secure your spot today.',
        likes: 31,
        comments: 4,
    },
  ],
  rolePermissions: {
    Owner: { editProfile: true, manageCourses: true, viewAnalytics: true, manageTeam: true },
    Admin: { editProfile: true, manageCourses: true, viewAnalytics: true, manageTeam: false },
    'Billing Manager': { editProfile: false, manageCourses: false, viewAnalytics: true, manageTeam: false },
  },
  instructorVerifications: [
    { id: 'iv1', name: 'Dr. Alan Grant', email: 'alan.g@example.com', submittedDate: '2024-07-20' },
    { id: 'iv2', name: 'Dr. Ellie Sattler', email: 'ellie.s@example.com', submittedDate: '2024-07-18' },
  ],
};

export const communityPosts: CommunityPost[] = [
    {
        id: 'post1',
        author: 'Jane Doe',
        avatarUrl: 'https://i.pravatar.cc/150?u=janedoe',
        timestamp: '2 hours ago',
        content: 'Just published a new lesson on `useMemo` and `useCallback` in the Advanced React course! Let me know what you think. #react #webdev',
        likes: 42,
        comments: 8,
    },
    {
        id: 'post2',
        author: 'Chris G.',
        avatarUrl: 'https://i.pravatar.cc/150?u=chrisg',
        timestamp: '5 hours ago',
        content: '🎉 Just completed the "Data Science with Python" course and earned my certificate! It was an amazing learning experience. Big thanks to Emily White!',
        likes: 128,
        comments: 15,
    },
    {
        id: 'post3',
        author: 'Alex Turner',
        avatarUrl: 'https://i.pravatar.cc/150?u=alexturner',
        timestamp: '1 day ago',
        content: 'I\'m looking for a study buddy for the AI-Powered UX/UI Design course. Anyone interested in teaming up?',
        likes: 23,
        comments: 5,
    },
];

export const mentorshipMeetings: MentorshipMeeting[] = [
    {
      id: 'meet1',
      title: 'Mentorship Check-in',
      with: 'Jane Doe',
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'meet2',
      title: 'Project Review',
      with: 'John Smith',
      date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    }
];

export const mentors: Mentor[] = [
    { id: 'mentor1', name: 'Jane Doe', avatarUrl: 'https://i.pravatar.cc/150?u=janedoe', title: 'Senior Frontend Engineer @ TechCorp', expertise: ['React', 'TypeScript', 'Performance'] },
    { id: 'mentor2', name: 'John Smith', avatarUrl: 'https://i.pravatar.cc/150?u=johnsmith', title: 'Principal UX Designer @ Creative AI', expertise: ['UX/UI', 'Generative AI', 'Figma'] },
    { id: 'mentor3', name: 'Emily White', avatarUrl: 'https://i.pravatar.cc/150?u=emilywhite', title: 'Lead Data Scientist @ DataDriven', expertise: ['Python', 'Machine Learning', 'Pandas'] },
];

export const clubs: Club[] = [
    { id: 'club1', name: 'Web Dev Wizards', description: 'A community for passionate frontend and backend developers.', memberCount: 1250, imageUrl: 'https://picsum.photos/seed/club-web/400/200' },
    { id: 'club2', name: 'AI Innovators', description: 'Exploring the frontiers of Artificial Intelligence and Machine Learning.', memberCount: 890, imageUrl: 'https://picsum.photos/seed/club-ai/400/200' },
    { id: 'club3', name: 'Design Thinkers', description: 'For UX/UI designers shaping the future of digital products.', memberCount: 640, imageUrl: 'https://picsum.photos/seed/club-design/400/200' },
];

export const teamMembers = [
  { name: 'Dr. Evelyn Reed', title: 'CEO & Founder', avatarUrl: 'https://i.pravatar.cc/150?u=evelynreed' },
  { name: 'John Smith', title: 'Head of Product', avatarUrl: 'https://i.pravatar.cc/150?u=johnsmith' },
  { name: 'Jane Doe', title: 'Lead Instructor', avatarUrl: 'https://i.pravatar.cc/150?u=janedoe' },
  { name: 'Alex Turner', title: 'Lead Frontend Engineer', avatarUrl: 'https://i.pravatar.cc/150?u=alexturner' },
];

export const learnerSubscriptionTiers: SubscriptionTier[] = [
    {
        name: 'Basic',
        price: 0,
        idealFor: 'Casual learners wanting to explore.',
        features: [
            'Access to all free courses',
            'Basic AI Tutor access',
            'Community forum access',
            'Track progress on courses',
        ],
        objective: 'Start your learning journey.',
        cta: 'Start for Free'
    },
    {
        name: 'Plus',
        price: 15,
        idealFor: 'Dedicated learners aiming for certification.',
        features: [
            'Everything in Basic, plus:',
            'Access to all premium courses',
            'Unlimited AI Tutor sessions',
            'Earn verifiable certificates',
            'Access to Career Hub',
            'AI-powered skill suggestions'
        ],
        objective: 'Accelerate your learning and career.',
        cta: 'Choose Plus',
        featured: true
    },
    {
        name: 'Pro',
        price: 29,
        idealFor: 'Professionals seeking mentorship and advanced tools.',
        features: [
            'Everything in Plus, plus:',
            'Priority access to new courses',
            '1-on-1 mentorship matching',
            'AI Tools Suite access',
            'Download course materials for offline access'
        ],
        objective: 'Master your craft with premium features.',
        cta: 'Choose Pro'
    }
];


export const instructorSubscriptionTiers: SubscriptionTier[] = [
    {
        name: 'Starter Amplify Plan',
        price: 49,
        idealFor: 'Independent trainers beginning their journey and seeking visibility.',
        features: [
            'Personalized Profile Boost: AI-optimized trainer profile highlighting expertise and courses.',
            'Featured Listings (2 per month): Courses spotlighted in learner dashboards.',
            'Basic Email Campaigns: Platform-driven emails recommending the trainer’s courses to targeted learners.',
            'Analytics Snapshot: Monthly report on impressions, clicks, and enrollments.',
            'Community Shoutout: Trainer featured once per month in CogniSacra Academy’s learner community feed.',
        ],
        objective: 'Increased visibility and a steady flow of new learners discovering your content.',
        cta: 'Choose Starter Plan'
    },
    {
        name: 'Growth Accelerator Plan',
        price: 129,
        idealFor: 'Trainers with established courses looking to scale their reach and revenue.',
        features: [
            'Enhanced Course Spotlight (5 per month): Premium placement in search results and recommended feeds.',
            'AI-Targeted Ads: In-platform ads tailored to learner interests and past behavior.',
            'Custom Email Campaigns: 2 campaigns per month segmented by learner demographics.',
            'Social Boost: Inclusion in CogniSacra Academy’s official social media highlights (LinkedIn, Facebook, Instagram).',
            'Detailed Analytics Dashboard: Real-time engagement metrics and learner insights.',
            'Review & Rating Amplification: Positive reviews spotlighted to attract more enrollments.',
        ],
        objective: 'Stronger brand recognition, higher learner engagement, and accelerated sales growth.',
        cta: 'Choose Growth Plan',
        featured: true
    },
    {
        name: 'Elite Brand Dominator Plan',
        price: 299,
        idealFor: 'Professional trainers seeking maximum reach, premium positioning, and brand authority.',
        features: [
            'Unlimited Premium Spotlight: Courses consistently highlighted in all top learner feeds.',
            'Exclusive Banner Ads: Custom banners featured on course category pages.',
            'Personalized AI Marketing Funnel: Automated learner retargeting to boost course completion and upselling.',
            'Advanced Email Marketing Suite: 4 segmented campaigns with A/B testing and performance tracking.',
            'Social Media Takeover: Dedicated monthly feature across CogniSacra Academy’s social media platforms.',
            'Custom Video Promo: 1 AI-enhanced promotional video produced and circulated within the platform.',
            'Strategic Growth Consultation: Monthly 1-on-1 session with a CogniSacra Academy marketing strategist.',
            'Full Analytics Suite: In-depth learner behavior reports, ROI tracking, and recommendations.',
        ],
        objective: 'Maximum brand visibility, strong learner loyalty, and exponential revenue growth.',
        cta: 'Choose Elite Plan'
    }
];

export const institutionSubscriptionTiers: SubscriptionTier[] = [
    {
        name: 'Starter Visibility Plan',
        price: 499,
        idealFor: 'Small educational institutions and independent instructors who want affordable, entry-level visibility.',
        features: [
            'Sponsored Course Listings: Priority placement in learner searches (appears in top 5 results).',
            'Basic Banner Ads: Rotating ad placements on course recommendation pages.',
            'Institution Profile Highlight: Institution’s profile featured once per week on the platform’s homepage.',
            'Performance Report: Monthly insights report (impressions, clicks, and learner engagement).',
        ],
        objective: 'Establish presence and boost visibility to attract first wave of learners.',
        cta: 'Choose Starter Plan'
    },
    {
        name: 'Growth Amplifier Plan',
        price: 1499,
        idealFor: 'Mid-sized institutions looking to expand brand reach and consistently attract new learners.',
        features: [
            'Premium Course Promotion: Dedicated spotlight section for top courses.',
            'Targeted Ads: AI-driven ads targeted by demographics, subject interests, and learner behavior.',
            'Video Showcase Slot: Short promotional video featured on learner dashboards.',
            'Weekly Profile Highlights: Institution’s profile featured weekly across platform categories.',
            'Advanced Analytics Dashboard: Real-time tracking of ad performance, conversions, and ROI.',
            'Campaign Strategy Support: Monthly consultation with CogniSacra Academy’s marketing team.',
        ],
        objective: 'Accelerate course enrollments and establish strong brand recognition on the platform.',
        cta: 'Choose Growth Plan',
        featured: true
    },
    {
        name: 'Elite Partner Accelerator Plan',
        price: 4999,
        idealFor: 'Large institutions and universities aiming for maximum exposure and sustained sales growth.',
        features: [
            'Exclusive Homepage Takeover: Institution branding featured prominently on the homepage once per month.',
            'Featured Courses Section: Always-on placement of up to 5 flagship courses.',
            'AI-Powered Retargeting Ads: Personalized ads to re-engage learners who visited but didn’t enroll.',
            'Custom Content Campaigns: Branded articles, success stories, and case studies published within the platform’s knowledge hub.',
            'Live Webinar Promotion: Institution webinars promoted directly to relevant learner groups.',
            'Bi-Weekly Strategy Consultation: Direct support to refine campaigns and maximize results.',
            'Comprehensive Data Insights: Deep learner behavior analysis to optimize future campaigns.',
        ],
        objective: 'Dominate visibility, drive large-scale enrollments, and position the institution as a leading authority in education.',
        cta: 'Choose Elite Plan'
    }
];
