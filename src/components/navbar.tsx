import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "#contact" },
];

const logoSrc = "/logo/Wine%20Network%201.svg";

export function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="pointer-events-auto mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-6 py-5 sm:px-10 lg:px-20">
        <Link
          href="/"
          prefetch={false}
          className="relative block h-9 w-[188px] shrink-0 justify-self-start md:h-10 md:w-[220px]"
          aria-label="Wine Network home"
        >
          <Image
            src={logoSrc}
            alt="Wine Network"
            fill
            priority
            unoptimized
            className="object-contain object-left"
            sizes="220px"
          />
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-12 justify-self-center text-[11px] font-semibold uppercase tracking-[0.08em] text-white/88 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={false}
              className="nav-link-motion transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="justify-self-end">
          <a
            href="#"
            aria-label="Cart"
            className="relative inline-flex transition hover:opacity-90"
          >
            <span className="absolute -right-0.5 -top-0.5 z-10 h-2 w-2 rounded-full bg-white shadow-[0_0_0_2px_#131313]" aria-hidden />
            <Image
              src="/icon/cart.svg"
              alt=""
              width={38}
              height={38}
              className="block h-[38px] w-[38px]"
              draggable={false}
              unoptimized
            />
          </a>
        </div>
      </div>
    </header>
  );
}
