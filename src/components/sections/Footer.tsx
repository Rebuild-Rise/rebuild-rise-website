import Link from "next/link";
import { AmpText, Container } from "@/components/ui";
import { FooterNav } from "@/components/navigation/FooterNav";
import { PrivacySettingsButton } from "@/components/privacy/PrivacySettingsButton";
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
        <div className="mt-10 flex flex-col gap-4 border-t border-olive/30 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs">{footer.legal}</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Legal and privacy navigation">
            <Link href="/privacy" className="font-sans text-xs text-cream-muted hover:text-cream">
              Privacy
            </Link>
            <Link href="/terms" className="font-sans text-xs text-cream-muted hover:text-cream">
              Terms
            </Link>
            <PrivacySettingsButton />
          </nav>
        </div>
      </Container>
    </footer>
  );
}
