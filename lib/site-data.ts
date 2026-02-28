export const site = {
  brand: "Academic Solutions",
  hero: {
    kicker: "Hello,",
    title: "We offer Academic Solutions",
    subtitle: "What we do | How we do it",
    ctas: [
      { href: "#service", label: "What we do" },
      { href: "#about", label: "How we do it" },
      { href: "#contact", label: "Find a quote", primary: true },
    ],
    backgroundImage: "/imgs/header.jpg",
  },
  about: {
    title: "About Us",
    subtitle: "Who we are",
    bullets: [
      "Clear requirements and milestones",
      "Professional formatting and quality checks",
      "Privacy-first handling of client data",
    ],
    image: "/imgs/students.jpg",
  },
  services: {
    title: "Services",
    subtitle: "What we do",
    items: [
      { title: "Assignments", desc: "Well-structured writing with clear delivery milestones." },
      { title: "Projects", desc: "Software, documentation, and research-based projects delivered professionally." },
      { title: "Editing & Formatting", desc: "Proofreading, APA/MLA/Chicago formatting, and cleanup." },
      { title: "Tutoring & Guidance", desc: "Step-by-step support so you understand the work, not just submit it." },
      { title: "Data & Analysis", desc: "Spreadsheets, dashboards, and data insights (where applicable)." },
      { title: "Consultation", desc: "Quick clarification of scope, timeline, and delivery plan." },
    ],
  },
  pricing: {
    title: "Pricing",
    subtitle: "Flexible quotes",
    plans: [
      { name: "Basic", price: "Custom", points: ["Small tasks", "Clear turnaround", "Standard formatting"], featured: false },
      { name: "Standard", price: "Custom", points: ["Medium scope", "Priority support", "Quality checks"], featured: true },
      { name: "Premium", price: "Custom", points: ["Large scope", "Best turnaround", "Deep review & polish"], featured: false },
    ],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What clients say",
    items: [
      { name: "Client A", text: "Clean communication and timely delivery. Highly recommended." },
      { name: "Client B", text: "Very professional work and great attention to detail." },
      { name: "Client C", text: "Fast turnaround and quality results. Will return again." },
    ],
  },
};