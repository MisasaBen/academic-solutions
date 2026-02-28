import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";
import { site } from "@/lib/site-data";

const services = [
  {
    title: "Assignments",
    desc: "Well-structured writing with clear delivery milestones.",
  },
  {
    title: "Projects",
    desc: "Software, documentation, and research-based projects delivered professionally.",
  },
  {
    title: "Editing & Formatting",
    desc: "Proofreading, APA/MLA/Chicago formatting, and cleanup.",
  },
  {
    title: "Tutoring & Guidance",
    desc: "Step-by-step support so you understand the work, not just submit it.",
  },
  {
    title: "Data & Analysis",
    desc: "Spreadsheets, dashboards, and data insights (where applicable).",
  },
  {
    title: "Consultation",
    desc: "Quick calls/messages to clarify scope and plan delivery.",
  },
];

export default function Services() {
  return (
    <section id="service" className="py-20 bg-black/[.02]">
      <Container>
        <SectionHeading title="Services" subtitle="What we do" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-black/10 bg-background p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                {s.desc}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex text-sm font-semibold text-foreground hover:underline"
              >
                Request this service →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}