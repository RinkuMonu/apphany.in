import Image from "next/image";
import Link from "next/link";
import { Gauge, Mail, ShieldCheck } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Blog", "/blog"],
  ["Contact Us", "/contact"],
  ["Refer & Earn", "/refer-earn"],
];

const navigationLinks = [
  {
    title: "Payment Services",
    links: [
      ["Financial Payments", "/financial-payments"],
      ["Credit Card", "/credit-card"],
      ["PAN Card", "/pan-card"],
      ["PAN Address Update", "/pan-card/pan-card-address-update"],
      ["Reprint PAN Card", "/pan-card/reprint-pan"],
    ],
  },
  {
    title: "Loans",
    links: [
      ["Loan Overview", "/loan"],
      ["Instant Loan", "/instant-loan"],
      ["Personal Loan", "/loan/personal-loan"],
      ["Home Loan", "/loan/home-loan"],
      ["Car Loan", "/loan/car-loan"],
      ["Business Loan", "/loan/business-loan"],
      ["Construction Loan", "/loan/construction-equipment-loan"],
    ],
  },
  {
    title: "Insurance",
    links: [
      ["Insurance Overview", "/insurance"],
      ["Car Insurance", "/insurance/car-insurance"],
      ["Bike Insurance", "/insurance/bike-insurance"],
      ["Taxi Insurance", "/insurance/taxi-insurance"],
      ["Commercial Vehicle", "/insurance/commercial-vehicle"],
      ["Pay Insurance Premium", "/insurance"],
    ],
  },
];

const legalLinks = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms of Use", "/terms-of-use"],
  ["Cancellation & Refund Policy", "/refund-policy"],
  ["Chargeback Policy", "/charge-back-policy"],
  ["KYC Policy", "/kyc-policy"],
];

const socialLinks = [
  [FaFacebookF, "https://www.facebook.com/apphany", "Facebook"],
  [FaYoutube, "https://www.youtube.com/@Apphany", "YouTube"],
  [FaInstagram, "https://www.instagram.com/apphany", "Instagram"],
  [FaLinkedinIn, "https://www.linkedin.com/company/apphany", "LinkedIn"],
  [FaXTwitter, "https://x.com/Apphany", "X"],
];

function FooterHeading({ children }) {
  return (
    <h3 className="mb-5 text-xs font-bold uppercase tracking-wide text-white">
      {children}
      <span className="mt-2 block h-0.5 w-8 bg-lime-400" />
    </h3>
  );
}

export default function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="border-t border-white/20 bg-[radial-gradient(circle_at_center,_#018EDE,_#0C3D4C_70%)] text-white"
    >
      <div className="mx-auto max-w-7xl px-5 pb-7 pt-10 sm:px-6 lg:py-12">
        {/* Top 4-Column Section */}
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <section className="lg:pr-6">
            <Link
              href="/"
              className="inline-flex flex-col items-start rounded-md bg-white p-1.5"
              aria-label="Apphany home"
            >
              <Image
                src="/image/apphany-logoo.png"
                alt="Apphany"
                width={1686}
                height={933}
                className="h-auto w-44 object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-5 text-white/80">
              Innovating digital payment solutions and simplifying business operations across India.
            </p>
            <div className="mt-4 space-y-2 text-xs text-white/90">
              <a
                href="mailto:support@apphany.in"
                className="flex items-center gap-2 transition hover:text-lime-300"
              >
                <Mail size={14} /> support@apphany.in
              </a>
            </div>
            {/* Social Links */}
            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map(([Icon, href, label]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-white/85 transition hover:bg-lime-400 hover:text-[#0C3D4C]"
                >
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </section>

          <section className="border-white/15 lg:border-l lg:pl-8">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-3 text-xs">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/85 transition hover:text-lime-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-white/15 lg:border-l lg:pl-8">
            <FooterHeading>Tools</FooterHeading>
            <ul className="space-y-4 text-xs">
              <li>
                <Link
                  href="/free-credit-score"
                  className="flex items-center gap-2 text-white/85 transition hover:text-lime-300"
                >
                  <Gauge size={14} /> Free Credit Score
                </Link>
              </li>
              <li>
                <Link
                  href="/loan-emi"
                  className="flex items-center gap-2 whitespace-nowrap text-white/85 transition hover:text-lime-300"
                >
                  <Gauge size={14} className="shrink-0" /> Loan EMI Calculator
                </Link>
              </li>
            </ul>
          </section>

          <section className="border-white/15 lg:border-l lg:pl-8">
            <FooterHeading>Company</FooterHeading>
            <p className="text-xs leading-5 text-white/80">
              Office No. 506, 5th Floor, Chordia&apos;s Kosmos (A Block), Plot No. E-5, Dr.
              Rajendra Prasad Nagar E, Village Badarwas, Jaipur, Rajasthan – 302019
            </p>
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/10 p-3.5 ring-1 ring-white/10">
              <ShieldCheck size={28} className="shrink-0 text-lime-400" />
              <p className="text-xs font-medium leading-5">
                Trusted by 3,50,000+ customers across India
              </p>
            </div>
          </section>
        </div>

        {/* Services Navigation: 3 Balanced Columns (Payment Services, Loans, Insurance) */}
        <nav
          className="mt-10 grid gap-8 border-t border-white/15 pt-9 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Footer services navigation"
        >
          {navigationLinks.map((group) => (
            <section key={group.title}>
              <FooterHeading>{group.title}</FooterHeading>
              <ul className="grid grid-cols-2 gap-x-5 gap-y-2.5 text-xs">
                {group.links.map(([label, href]) => (
                  <li key={label + href}>
                    <Link href={href} className="text-white/85 transition hover:text-lime-300">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-white/20 bg-black/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center text-xs text-white/80 sm:px-8 lg:flex-row lg:text-left">
          <p className="pl-1 sm:pl-0">
            &copy; {new Date().getFullYear()} Apphany Technologies Pvt. Ltd. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-3 gap-y-2 pr-0 sm:pr-10 lg:pr-16">
            {legalLinks.map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                className={`transition hover:text-lime-300 ${
                  index < legalLinks.length - 1 ? "after:ml-3 after:text-white/30 after:content-['|']" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
