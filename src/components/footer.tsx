import Image from "next/image";

import { footerLinks } from "@/lib/home-data";

export function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-black lg:min-h-[420px]">
      <Image
        src="/layout/footer.svg"
        alt=""
        width={1440}
        height={420}
        priority={false}
        sizes="100vw"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 block w-full max-w-none select-none"
      />

      <div className="relative z-10 mx-auto max-w-[1442px] px-6 pt-12 pb-24 sm:px-10 sm:pt-14 sm:pb-28 lg:px-[56px] lg:pt-[72px] lg:pb-[156px]">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[220px_220px_300px_auto] lg:items-start lg:gap-[42px]">
          <FooterColumn label="Quick Links">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-[16px] leading-[1.55] tracking-tight text-white transition hover:text-white/70"
              >
                {link.label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn label="Contact Us">
            <a
              href="tel:+6582003305"
              className="font-display text-[16px] leading-[1.55] tracking-tight text-white transition hover:text-white/70"
            >
              +6582003305
            </a>
            <a
              href="mailto:keith@winenetwork.sg"
              className="font-display text-[16px] leading-[1.55] tracking-tight text-white transition hover:text-white/70"
            >
              keith@winenetwork.sg
            </a>
          </FooterColumn>

          <FooterColumn label="Address">
            <p className="font-display text-[16px] leading-[1.55] tracking-tight text-white">
              301 Boon Keng Rd, Singapore 339779
            </p>
          </FooterColumn>

          <div className="flex flex-col items-start gap-5 lg:justify-self-end lg:items-end">
            <Image
              src="/logo/Wine Network 1.svg"
              alt="Wine Network"
              width={237}
              height={45}
              className="h-[30px] w-auto md:h-[36px] lg:h-[38px]"
              unoptimized
            />
            <Image
              src="/icon/social.svg"
              alt="Social links"
              width={152}
              height={32}
              className="h-7 w-auto lg:h-[28px]"
              unoptimized
            />
          </div>
        </div>
      </div>

    </footer>
  );
}

function FooterColumn({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-display text-[11px] font-medium uppercase leading-[1.4] tracking-[0.08em] text-white/60 lg:text-[10px]">
        {label}
      </p>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  );
}
