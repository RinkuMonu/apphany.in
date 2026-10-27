import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const banners = [
  {
    eyebrow: "Instant PAN Card",
    title: "Apply or update PAN online.",
    description: "Paperless application, quick verification & doorstep delivery.",
    image: "/home/pan3d.png",
    background:
      "bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#f8fbff] border border-[#bfdbfe]/60 shadow-[0_4px_20px_rgba(37,99,235,0.06)]",
    href: "/pan-card",
    cta: "Apply PAN Card",
  },
  {
    eyebrow: "Quick & Flexible Loans",
    title: "Instant loans for every need.",
    description: "Personal, business, home & car loans with low rates and quick approval.",
    image: "/loan/loan53d.png",
    background:
      "bg-gradient-to-br from-[#fef3c7] via-[#fffbeb] to-[#fefce8] border border-[#fde68a]/70 shadow-[0_4px_20px_rgba(217,119,6,0.08)]",
    href: "/loan",
    cta: "Explore Loans",
    eyebrowColor: "text-[#b45309]",
    starColor: "text-amber-400/90",
    imageContainerClass: "-bottom-3 -right-3 h-[145px] w-[160px] sm:h-[155px] sm:w-[170px]",
  },
  {
    eyebrow: "Smart business planning",
    title: "Estimate. Plan. Grow.",
    description: "Understand your earning potential and make informed business decisions.",
    image: "/image/income-calc-img.png",
    background:
      "bg-gradient-to-br from-[#d3f2f7] via-[#e6f8fa] to-[#f4fcfe] border border-[#b2e7f0]/60 shadow-[0_4px_20px_rgba(2,137,173,0.06)]",
    href: "/income-calc",
    cta: "Calculate Income",
  },
];

export default function HomePromoBanners() {
  return (
    <section
      className="overflow-hidden bg-[#f5f9fb] py-7 md:px-6 lg:px-8"
      aria-label="Featured Apphany services"
    >
      <div className="scrollbar-hidden mx-auto flex max-w-[1760px] snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-1 [scroll-padding-inline:1rem] [-webkit-overflow-scrolling:touch] md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
        {banners.map((banner, index) => (
          <article
            key={banner.title}
            className={`relative min-h-[190px] w-[86vw] max-w-[370px] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[72vw] md:min-h-[170px] md:w-auto md:max-w-none md:snap-none ${banner.background}`}
            aria-label={`${index + 1} of ${banners.length}: ${banner.title}`}
          >
            <div className="relative z-10 flex h-full max-w-[66%] flex-col items-start px-5 py-4 sm:px-6 sm:py-5">
              <p
                className={`text-[8px] font-extrabold uppercase tracking-[0.13em] ${banner.eyebrowColor || "text-[#0289ad]"}`}
              >
                {banner.eyebrow}
              </p>
              <h2 className="mt-1.5 text-[18px] font-extrabold leading-[1.08] tracking-tight text-[#073b7a] sm:text-[20px]">
                {banner.title}
              </h2>
              <p className="mt-1.5 text-[10px] font-medium leading-4 text-[#315766] sm:text-[11px]">
                {banner.description}
              </p>
              <Link
                href={banner.href}
                target={banner.href.startsWith("http") ? "_blank" : undefined}
                rel={banner.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group mt-auto inline-flex items-center gap-1.5 rounded-full bg-[#073b7a] px-3.5 py-2 text-[10px] font-bold text-white shadow-[0_6px_14px_rgba(7,59,122,0.16)] transition hover:-translate-y-0.5 hover:bg-[#026381]"
              >
                {banner.cta}
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div
              className={`absolute ${banner.imageContainerClass || "-bottom-6 -right-5 h-[145px] w-[145px] sm:h-[155px] sm:w-[155px]"}`}
            >
              <Image
                src={banner.image}
                alt=""
                fill
                sizes="170px"
                className={`object-contain object-bottom ${banner.imageClass || ""}`}
              />
            </div>
            <span className={`absolute right-4 top-3 text-base ${banner.starColor || "text-white/80"}`}>✦</span>
          </article>
        ))}
      </div>
      <div
        className="mt-3 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#56808a] md:hidden"
        aria-hidden="true"
      >
        <span className="text-[#0289ad]">←</span>
        <span>Swipe to explore</span>
        <span className="text-[#0289ad]">→</span>
      </div>
    </section>
  );
}
