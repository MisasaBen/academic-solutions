import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";
import { site } from "@/lib/site-data";

const items = [
  {
    name: "Client A",
    text: "Clean communication and timely delivery. Highly recommended.",
  },
  {
    name: "Client B",
    text: "Very professional work and great attention to detail.",
  },
  {
    name: "Client C",
    text: "Fast turnaround and quality results. Will return again.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black/[.02]">
      <Container>
        <SectionHeading title="Testimonials" subtitle="What clients say" />

        <div className="grid gap-4 lg:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="rounded-3xl border border-black/10 bg-background p-6">
              <p className="text-sm leading-6 text-foreground/70">“{t.text}”</p>
              <p className="mt-4 text-sm font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}