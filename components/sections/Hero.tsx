import Container from "@/components/site/Container";
import Image from "next/image";
import { site } from "@/lib/site-data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/imgs/header.jpg"
          alt="Header background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <Container>
        <div className="relative py-24 sm:py-32">
          <p className="text-sm font-medium tracking-wide text-white/80">
            Hello,
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            We offer Academic Solutions
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/75">
            What we do | How we do it
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#service"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              What we do
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              How we do it
            </a>
            <a
              href="#contact"
              className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
            >
              Find a quote
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}