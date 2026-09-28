export const profile = {
  name: "Akap Azmon",
  role: "Backend Software Engineer",
  location: "Ontario, Canada",
  email: "akap@azmon.dev",
  linkedin: "https://www.linkedin.com/in/akap-azmon/",
  github: "https://github.com/casyazmon",
  resume: "/resume.pdf",
};

export const stats = [
  { value: "6+", unit: "yrs", label: "Building Java & Spring Boot backends" },
  { value: "30", unit: "%", label: "Throughput gain on scaled microservices" },
  { value: "25", unit: "%", label: "Request latency cut via AWS integration" },
  { value: "<100", unit: "ms", label: "Response times held on critical workflows" },
];

export type Role = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  points: string[];
  tech: string[];
};

export const experience: Role[] = [
  {
    title: "Backend Software Developer",
    company: "Intact Financial Corporation",
    location: "Montreal, QC",
    start: "Jan 2026",
    end: "Present",
    current: true,
    points: [
      "Built and scaled Java/Spring Boot microservices, increasing system throughput by 30% and improving reliability.",
      "Designed and documented REST APIs with OpenAPI, giving consuming teams clear contracts and smoother integration.",
      "Integrated cloud-native APIs with AWS services, cutting request latency by 25%.",
      "Introduced Kafka event-driven messaging to decouple services and support asynchronous processing.",
      "Tuned API and database performance to hold sub-100 ms response times on critical workflows.",
    ],
    tech: ["Java", "Spring Boot", "Apache Kafka", "AWS", "OpenAPI"],
  },
  {
    title: "Software Developer (Freelance)",
    company: "Independent",
    location: "Remote, Canada",
    start: "May 2024",
    end: "Sept 2025",
    points: [
      "Built e-learning web platforms with Next.js, adding server-side rendering and image optimization that cut initial load time by 60% and bounce rate by 25%.",
      "Integrated payment gateways, CRMs and analytics tools; delivered features on schedule working directly with clients.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Payments"],
  },
  {
    title: "Software Developer",
    company: "Afkanerd",
    location: "Bamenda, Cameroon",
    start: "Jan 2020",
    end: "Feb 2024",
    points: [
      "Built a Spring Boot marketplace API with a cross-functional team, covering user registration, product listings and order processing.",
      "Designed the Hibernate/JPA data layer for efficient retrieval and persistence.",
      "Maintained code quality through regular code reviews and knowledge sharing.",
    ],
    tech: ["Java", "Spring Boot", "Hibernate/JPA", "REST"],
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "Kotlin", "TypeScript", "JavaScript"] },
  {
    group: "Backend",
    items: ["Spring Boot", "JPA / Hibernate", "REST", "OpenAPI", "Microservices", "Apache Kafka"],
  },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  {
    group: "Cloud & DevOps",
    items: ["AWS (EKS, ECS)", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"],
  },
  { group: "Frontend", items: ["React", "Next.js", "Angular"] },
  { group: "Practices", items: ["TDD", "Code review", "Agile / Scrum"] },
];

export const education = [
  { title: "M.Sc. Computer Science", school: "University of Bamenda", years: "2018 – 2020" },
  { title: "Full Stack Development Bootcamp", school: "Obsidi Academy, Toronto", years: "2025" },
];
