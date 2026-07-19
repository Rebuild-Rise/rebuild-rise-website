import Link from "next/link";
import { AmpText, Container } from "@/components/ui";
import { FooterNav } from "@/components/navigation/FooterNav";
import { footer } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-olive/30 bg-forest-deep py-[clamp(3rem,7vh,4.5rem)] text-cream-muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[1.35rem] font-medium text-cream">
              <AmpText>{footer.wordmark}</AmpText>
            </p>
            <p className="mt-3 max-w-[52ch] font-sans text-sm leading-[1.65]">
              {footer.mission}
            </p>
          </div>
          <FooterNav />
          <div className="lg:col-span-3">
            <Link
              href={`mailto:${footer.email}`}
              className="font-sans text-sm font-medium text-cream hover:text-ivory"
            >
              {footer.email}
            </Link>
            <p className="mt-2 font-sans text-xs leading-[1.6]">
              {footer.location}
            </p>
          </div>
        </div>
        <p className="mt-10 border-t border-olive/30 pt-5 font-sans text-xs">
          {footer.legal}
        </p>
      </Container>
    </footer>
  );
}
