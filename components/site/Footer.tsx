// components/site/Footer.tsx
import Container from "@/components/site/Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <Container>
        <p className="text-sm text-foreground/70">
          © {new Date().getFullYear()} Academic Solutions. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}