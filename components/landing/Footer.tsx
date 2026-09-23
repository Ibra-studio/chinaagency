import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";

const socialLinks = [
  { icon: IconBrandFacebook, href: "https://facebook.com/omascholars", label: "Facebook" },
  { icon: IconBrandInstagram, href: "https://instagram.com/omascholars", label: "Instagram" },
  { icon: IconBrandTiktok, href: "https://tiktok.com/@omascholars", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="bg-white ">
      <div className="p-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 relative">
          {/* Wordmark */}
          <h2 className="font-heading font-bold uppercase text-primary text-center md:text-left leading-[1.2] text-[clamp(3.5rem,13vw,12rem)]">
            OMA
            <br />
            Scholars
          </h2>

          {/* Contact + réseaux sociaux */}
          <div className="flex flex-col items-center md:items-end gap-4 md:pt-4 md:absolute md:top-0 md:right-0 md:items-end">
            <div className="text-center md:text-right text-sm font-semibold">
              <p>contact@omascholars.com</p>
              <p>+31 6XX XXX XXX</p>
            </div>
            <div className="w-40 h-px bg-foreground/80" />
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors no-underline"
                >
                  <Icon className="h-5 w-5" stroke={1.75} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 md:mt-16 flex flex-col items-center gap-1 text-center text-xs text-muted-foreground sm:flex-row sm:justify-center sm:gap-2">
  <span>© 2026 OMA Scholars. Tous droits réservés.</span>
  <span className="hidden sm:inline">·</span>
  <Link href="/mentions-legales" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
    Mentions légales
  </Link>
  <span className="hidden sm:inline">·</span>
  <Link href="/confidentialite" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
    Politique de confidentialité
  </Link>
</div>

{/* Crédit dev */}
<div className="mt-3 text-center text-[11px] text-muted-foreground/70">
  Site conçu et développé par{" "}
  <Link
    href="https://ton-portfolio.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-foreground underline-offset-4 hover:underline"
  >
    Ibrahim
    </Link>
  
</div>
      </div>
    </footer>
  );
}