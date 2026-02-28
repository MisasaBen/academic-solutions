import Link from "next/link";
import Container from "@/components/site/Container";
import ThemeToggle from "@/components/site/ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#service", label: "Services" },
  { href: "#price", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span>Academic Solutions</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-foreground/80 hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}