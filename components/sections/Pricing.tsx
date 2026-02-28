import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";
import { site } from "@/lib/site-data";

const plans = [
  {
    name: "Basic",
    price: "Custom",
    points: ["Small tasks", "Clear turnaround", "Standard formatting"],
    featured: false,
  },
  {
    name: "Standard",
    price: "Custom",
    points: ["Medium scope", "Priority support", "Quality checks"],
    featured: true,
  },
  {
    name: "Premium",
    price: "Custom",
    points: ["Large scope", "Best turnaround", "Deep review & polish"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="price" className="py-20">
      <Container>
        <SectionHeading title="Pricing" subtitle="Flexible quotes" />

        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={[
                "rounded-3xl border p-8",
                p.featured
                  ? "border-foreground/20 bg-foreground text-background"
                  : "border-black/10 bg-background",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold tracking-tight">
                  {p.name}
                </h3>
                <span
                  className={p.featured ? "text-background/80" : "text-foreground/60"}
                >
                  {p.price}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {p.points.map((x) => (
                  <li key={x} className={p.featured ? "text-background/85" : "text-foreground/70"}>
                    • {x}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={[
                  "mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold",
                  p.featured
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-foreground text-background hover:bg-foreground/90",
                ].join(" ")}
              >
                Get a quote
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}