export const profile = {
  name: "Yusuf Vhora",
  role: "Full Stack Web Developer",
  focus: "Laravel & PHP",
  tagline:
    "Building modern, secure, and scalable web applications with clean code, responsive design, and user-focused experiences.",
  location: "Ahmedabad, Gujarat, India",
  email: "vhoray8@gmail.com",
  phone: "+91 8488070737",
  linkedin: "https://www.linkedin.com/in/yusuf-vhora-752bb8333/",
  github: "https://github.com/Yusufvhora2308",
<<<<<<< HEAD
  resumeFile: `${import.meta.env.BASE_URL}resume.pdf`,
  about:
    "I'm Yusuf Vhora, an MCA student and a passionate full-stack web developer with a strong interest in building modern web applications using Laravel, PHP, MySQL, JavaScript, and Bootstrap. I enjoy transforming ideas into clean, responsive, and user-friendly digital solutions. During my internship and personal projects, I gained hands-on experience developing real-world applications and continuously improving my technical skills. I'm always eager to learn new technologies, solve challenging problems, and contribute to impactful software development.",
=======
  resumeFile: "/resume.pdf",
  about:
    "I'm Yusuf Vhora, an MCA student and a passionate full-stack web developer with a strong interest in building modern web applications using Laravel, PHP, React.js, MySQL, and Tailwind CSS. I enjoy turning ideas into clean, responsive, and user-friendly digital solutions. Through my internship and personal projects, I have gained hands-on experience developing real-world applications, from secure REST APIs to polished admin dashboards, and I keep improving my technical skills every day. I'm always eager to learn new technologies, solve challenging problems, and contribute to impactful software.",
>>>>>>> 7647192 (Add QuickFix and LifeSync projects, remove School Management System)
  currentlyLearning: "Data Science & Machine Learning",
};

export const stats = [
  { label: "Months of internship experience", value: 5, suffix: "" },
<<<<<<< HEAD
  { label: "Full-stack projects shipped", value: 3, suffix: "+" },
=======
  { label: "Full-stack projects built", value: 4, suffix: "" },
>>>>>>> 7647192 (Add QuickFix and LifeSync projects, remove School Management System)
  { label: "Languages & frameworks", value: 10, suffix: "+" },
  { label: "Coursera certifications", value: 4, suffix: "" },
];

export const skills = {
  languages: [
    { name: "PHP", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "Java", level: 65 },
    { name: "C++", level: 65 },
    { name: "C", level: 60 },
    { name: "Python", level: 60 },
  ],
  frameworks: [
    { name: "Laravel", level: 85 },
    { name: "Bootstrap", level: 85 },
<<<<<<< HEAD
    { name: "React", level: 55, note: "Learning" },
  ],
  tools: ["Git", "GitHub", "VS Code", "XAMPP", "MySQL", "Postman"],
};

export const projects = [
  {
    title: "Job Portal System",
    category: "Laravel",
    description:
      "A role-based job portal with company and student authentication, job search & filtering, an application pipeline, and an admin dashboard for managing postings and users.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    highlights: [
      "Company & student authentication",
      "Job search, filters and applications",
      "Admin dashboard for jobs & users",
=======
    { name: "Tailwind CSS", level: 75 },
    { name: "React.js", level: 70 },
  ],
  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "XAMPP",
    "MySQL",
    "Postman",
    "REST API",
    "Laravel Sanctum",
  ],
};

// NOTE: Replace each `github` value with the exact repository link
// (e.g. https://github.com/Yusufvhora2308/lifesync) so visitors land on the code.
// Leave `demo` empty until a live link exists; the button should stay hidden then.
export const projects = [
  {
    title: "LifeSync – Smart Daily Life Management Platform",
    category: "Full Stack",
    description:
      "A complete personal finance and daily life management platform that helps users manage income, expenses, savings, budgets, groceries, shopping lists, bills, subscriptions, and everyday activities. It includes a centralized admin dashboard for user management, transaction monitoring, category management, and support operations.",
    stack: [
      "Laravel",
      "PHP",
      "React.js",
      "MySQL",
      "Tailwind CSS",
      "REST API",
      "Sanctum",
    ],
    highlights: [
      "Secure authentication with Laravel Sanctum and profile management",
      "Income, expenses, budgets, savings goals, and recurring transactions",
      "Grocery stock, shopping lists, bills, and subscription reminders",
      "Admin dashboard, help center, feedback, and support requests",
    ],
    github: "https://github.com/Yusufvhora2308",
    demo: "",
  },
  {
    title: "QuickFix – Service Provider Management Portal",
    category: "Full Stack",
    description:
      "A complete service booking and management platform that connects customers with service providers. It includes customer and provider management, service listings, booking requests, appointment tracking, support tickets, feedback, and a centralized admin dashboard.",
    stack: ["Laravel", "PHP", "React.js", "MySQL", "Tailwind CSS", "REST API"],
    highlights: [
      "Customer and provider registration, login, and profiles",
      "Service listings, booking requests, and status tracking",
      "Admin panel for users, providers, services, and bookings",
      "Help center, FAQs, support requests, and feedback management",
    ],
    github: "https://github.com/Yusufvhora2308",
    demo: "",
  },
  {
    title: "Job Portal System",
    category: "Laravel",
    description:
      "A role-based job portal with company and student authentication, job search and filtering, an application pipeline, and an admin dashboard for managing job postings and users.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    highlights: [
      "Company and student authentication",
      "Job search, filters, and applications",
      "Admin dashboard for jobs and users",
>>>>>>> 7647192 (Add QuickFix and LifeSync projects, remove School Management System)
    ],
    github: "https://github.com/Yusufvhora2308",
    demo: "",
  },
  {
    title: "E-Commerce Management System",
    category: "Full Stack",
    description:
<<<<<<< HEAD
      "A complete storefront and admin system covering product & category management, cart and checkout, image uploads, and inventory tracking with optimized queries.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    highlights: [
      "Cart & checkout flow",
      "Admin panel for products & customers",
      "Image upload & inventory management",
    ],
    github: "https://github.com/Yusufvhora2308",
    demo: "",
  },
  {
    title: "School Management System",
    category: "Full Stack",
    description:
      "A management system for handling students, staff, classes, and records end-to-end, built with a focus on clean CRUD workflows and role-based access.",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    highlights: [
      "CRUD-driven records management",
      "Role-based access control",
      "Responsive admin interface",
=======
      "A complete storefront and admin system covering product and category management, cart and checkout, image uploads, and inventory tracking with optimized database queries.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    highlights: [
      "Cart and checkout flow",
      "Admin panel for products and customers",
      "Image uploads and inventory management",
>>>>>>> 7647192 (Add QuickFix and LifeSync projects, remove School Management System)
    ],
    github: "https://github.com/Yusufvhora2308",
    demo: "",
  },
];

export const services = [
  {
    title: "Website Development",
<<<<<<< HEAD
    description: "End-to-end builds from database schema to a polished, responsive front end.",
  },
  {
    title: "Admin Dashboards",
    description: "Data-dense internal tools for managing users, content, and operations.",
  },
  {
    title: "Responsive Design",
    description: "Interfaces that hold up cleanly on any screen, from mobile to widescreen.",
  },
  {
    title: "Database-Driven Apps",
    description: "MySQL schemas and queries designed for correctness and performance.",
  },
  {
    title: "REST API Integration",
    description: "Clean API layers that connect front ends, services, and third-party tools.",
  },
  {
    title: "Authentication Systems",
    description: "Secure login, role-based access, and permission systems built the right way.",
=======
    description:
      "End-to-end builds, from database schema to a polished, responsive front end.",
  },
  {
    title: "Admin Dashboards",
    description:
      "Data-rich internal tools for managing users, content, and operations.",
  },
  {
    title: "Responsive Design",
    description:
      "Interfaces that hold up cleanly on every screen, from mobile to widescreen.",
  },
  {
    title: "Database-Driven Apps",
    description:
      "MySQL schemas and queries designed for correctness and performance.",
  },
  {
    title: "REST API Development & Integration",
    description:
      "Clean API layers that connect front ends, services, and third-party tools.",
  },
  {
    title: "Authentication Systems",
    description:
      "Secure login, role-based access, and permission systems built the right way.",
>>>>>>> 7647192 (Add QuickFix and LifeSync projects, remove School Management System)
  },
];

export const whyHireMe = [
<<<<<<< HEAD
  { title: "Clean Code", description: "Readable, maintainable code that's built to be handed off." },
  { title: "Responsive Design", description: "Every build is tested and tuned across breakpoints." },
  { title: "Fast Learner", description: "Comfortable picking up new stacks and tools quickly." },
  { title: "Problem Solver", description: "I debug systematically instead of guessing." },
  { title: "Team Player", description: "Used to collaborating through Git, GitHub, and code review." },
  { title: "Quick Delivery", description: "I scope realistically and ship on time." },
=======
  {
    title: "Clean Code",
    description: "Readable, maintainable code that is built to be handed off.",
  },
  {
    title: "Responsive Design",
    description: "Every build is tested and tuned across breakpoints.",
  },
  {
    title: "Fast Learner",
    description: "Comfortable picking up new stacks and tools quickly.",
  },
  {
    title: "Problem Solver",
    description: "I debug systematically instead of guessing.",
  },
  {
    title: "Team Player",
    description:
      "Experienced in collaborating through Git, GitHub, and code review.",
  },
  {
    title: "Reliable Delivery",
    description: "I scope realistically and deliver on time.",
  },
>>>>>>> 7647192 (Add QuickFix and LifeSync projects, remove School Management System)
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "LJ University, Ahmedabad",
    period: "2025 – Present · Semester 3",
    status: "current",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Shri Adarsh BCA College, Radhanpur, Gujarat",
<<<<<<< HEAD
    period: "Completed",
=======
    period: "Completed", // TODO: add the years, e.g. "2022 – 2025"
>>>>>>> 7647192 (Add QuickFix and LifeSync projects, remove School Management System)
    status: "done",
  },
];

export const certificates = [
  {
    title: "Data Visualization with R",
    issuer: "Coursera",
  },
  {
    title: "Developing Websites and Front End with Bootstrap",
    issuer: "Coursera",
  },
  {
    title: "Git and GitHub: Complete Masterclass",
    issuer: "Coursera",
  },
  {
    title: "Master Full Stack Web Development with Laravel & PHP",
    issuer: "Coursera",
  },
];

export const experience = {
  role: "PHP Laravel Developer Intern",
  company: "App Developers India",
  duration: "5 Months",
  responsibilities: [
    "Developed and maintained web applications using Laravel and PHP.",
<<<<<<< HEAD
    "Built reusable and responsive user interfaces with Bootstrap, HTML, CSS, and JavaScript.",
=======
    "Built reusable, responsive user interfaces with Bootstrap, HTML, CSS, and JavaScript.",
>>>>>>> 7647192 (Add QuickFix and LifeSync projects, remove School Management System)
    "Designed and managed MySQL databases for efficient data storage.",
    "Implemented CRUD operations, authentication, and role-based access control.",
    "Fixed bugs, optimized application performance, and improved code quality.",
    "Collaborated with the development team using Git and GitHub.",
  ],
  stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Git", "GitHub"],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
<<<<<<< HEAD
];
=======
];
>>>>>>> 7647192 (Add QuickFix and LifeSync projects, remove School Management System)
