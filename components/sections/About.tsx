import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";
import Image from "next/image";
import { site } from "@/lib/site-data";

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading title="About Us" subtitle="Who we are" />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-black/10 p-8">
            <p className="text-foreground/75 leading-7">
              We provide academic and professional support with a clean workflow:
              clear scope, clear timeline, and quality delivery. This section is
              ready for your client’s final copy.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-foreground/70">
              <li>• Clear requirements and milestones</li>
              <li>• Professional formatting and quality checks</li>
              <li>• Privacy-first handling of client data</li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href="#contact"
                className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
              >
                Get a quote
              </a>
              <a
                href="#service"
                className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold hover:bg-black/[.04]"
              >
                View services
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-black/10">
            <div className="relative aspect-[4/3]">
              <Image
                src="/imgs/students.jpg"
                alt="Students"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}