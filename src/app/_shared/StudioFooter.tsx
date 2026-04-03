import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#studio" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
];

const socialLinks = ["Instagram", "TikTok", "LinkedIn", "Dribbble"];

const SectionHeader = ({ label }: { label: string }) => (
  <div className="mb-3 flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      className="fill-current text-(--color-studio-muted)"
      aria-hidden="true"
    >
      <path d="M4.929 4.929A10 10 0 1 1 19.07 19.07A10 10 0 0 1 4.93 4.93m8.071 4.071a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z" />
    </svg>
    <span className="text-xs font-semibold tracking-tight text-(--color-studio-muted) uppercase">
      {label}
    </span>
  </div>
);

export default function StudioFooter() {
  return (
    <footer className="w-full">
      <div className="border-t border-(--color-studio-border) bg-(--color-studio-bg) text-(--color-studio-text)">
        <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 lg:px-16">
          <div className="flex flex-col gap-12 lg:gap-20">
            {/* Top Row: Contact, Navigation, Socials */}
            <div className="grid grid-cols-2 gap-10 lg:grid-cols-3">
              <div className="col-span-2 flex flex-col gap-1 lg:col-span-1">
                <SectionHeader label="Contact" />
                <div className="flex flex-col gap-1 text-3xl font-semibold tracking-tight">
                  <a href="tel:+40721000000" className="hover:opacity-80">
                    (0721) 000 000
                  </a>
                  <a
                    href="mailto:hello@boldstudios.ro"
                    className="text-2xl hover:opacity-80 sm:text-3xl"
                  >
                    hello@boldstudios.ro
                  </a>
                </div>
              </div>

              <div className="flex flex-col">
                <SectionHeader label="Navigation" />
                <ul className="flex flex-col gap-2 text-base font-medium">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:opacity-80">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col">
                <SectionHeader label="Socials" />
                <ul className="flex flex-col gap-2 text-base font-medium">
                  {socialLinks.map((label) => (
                    <li key={label}>
                      <span className="inline-flex items-center gap-2 opacity-70">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Row: Logo from center */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="hidden lg:block" /> {/* Spacer to reach center */}
              <div className="pt-2">
                <Image
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="BOLD Studios"
                  width={600}
                  height={200}
                  className="logo-theme h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-(--color-studio-text) text-(--color-studio-bg)">
        <div className="mx-auto w-full max-w-7xl px-6 pt-6 pb-24 sm:pb-20 md:px-10 md:pb-20 lg:px-16 lg:pb-28 xl:pb-32">
          <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
            <span>
              © {new Date().getFullYear()} BOLD Studios. All rights reserved.
            </span>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/politica-de-confidentialitate"
                className="hover:opacity-80"
              >
                Politica de confidentialitate
              </Link>
              <Link
                href="/termeni-si-conditii"
                className="hover:opacity-80"
              >
                Termeni si conditii
              </Link>
              <Link
                href="/politica-cookie"
                className="hover:opacity-80"
              >
                Politica cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
