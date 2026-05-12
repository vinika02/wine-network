import Image from "next/image";

import { footerLinks } from "@/lib/home-data";

export function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-black">
      <div className="mx-auto max-w-[1442px] px-6 pt-16 sm:px-10 sm:pt-20 lg:px-[79px] lg:pt-[88px]">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:items-start lg:gap-4">
          <FooterColumn label="Quick Links">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-[15px] leading-[1.6] tracking-tight text-white transition hover:text-white/70"
              >
                {link.label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn label="Contact Us">
            <a
              href="tel:+6582003305"
              className="font-display text-[15px] leading-[1.6] tracking-tight text-white transition hover:text-white/70"
            >
              +6582003305
            </a>
            <a
              href="mailto:keith@winenetwork.sg"
              className="font-display text-[15px] leading-[1.6] tracking-tight text-white transition hover:text-white/70"
            >
              keith@winenetwork.sg
            </a>
          </FooterColumn>

          <FooterColumn label="Address">
            <p className="font-display text-[15px] leading-[1.6] tracking-tight text-white">
              301 Boon Keng Rd, Singapore 339779
            </p>
          </FooterColumn>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <Image
              src="/logo/Wine Network 1.svg"
              alt="Wine Network"
              width={237}
              height={45}
              className="h-[30px] w-auto md:h-[34px] lg:h-[36px]"
              unoptimized
            />
            <Image
              src="/icon/social.svg"
              alt="Social links"
              width={152}
              height={32}
              className="h-7 w-auto"
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-hidden sm:mt-8 lg:mt-6">
        <Image
          src="/logo/wine-network-watermark.png"
          alt=""
          width={2504}
          height={457}
          priority={false}
          className="pointer-events-none block w-[104%] min-w-[920px] max-w-none -translate-x-[0.6%] translate-y-[18%] select-none opacity-[0.16] sm:min-w-[1320px] lg:min-w-0"
        />
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
    <div className="flex flex-col gap-4">
      <p className="font-display text-[14px] font-medium uppercase leading-[1.4] tracking-[0.04em] text-white/60">
        {label}
      </p>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}
