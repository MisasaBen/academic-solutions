import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading title="Contact" subtitle="Request a quote" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 p-8">
            <p className="text-foreground/70 leading-7">
              Tell us what you need and we’ll respond with a quote and timeline.
            </p>

            <div className="mt-6 space-y-3 text-sm text-foreground/70">
              <p>• Include deadline and scope</p>
              <p>• Mention required format (APA/MLA/etc.)</p>
              <p>• Attach any instructions (if needed)</p>
            </div>
          </div>

          <form className="rounded-3xl border border-black/10 p-8">
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Name</span>
                <input
                  className="h-11 rounded-xl border border-black/10 bg-background px-4 outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="font-medium">Email</span>
                <input
                  type="email"
                  className="h-11 rounded-xl border border-black/10 bg-background px-4 outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="font-medium">Message</span>
                <textarea
                  className="min-h-[120px] rounded-xl border border-black/10 bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="What do you need help with?"
                />
              </label>

              <button
                type="button"
                className="h-11 rounded-full bg-foreground px-5 text-sm font-semibold text-background hover:bg-foreground/90"
              >
                Send message
              </button>

              <p className="text-xs text-foreground/60">
                (Next step: we’ll wire this to email or an API route.)
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}