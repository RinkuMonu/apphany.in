"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgePercent,
  CalendarCheck2,
  Gift,
  Sparkles,
  WalletCards,
} from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const offerGroups = {
  recharge: [
    [
      "First recharge offer",
      "Eligible new users can check the app for a promotional first-recharge discount.",
      BadgePercent,
      "Explore plans",
      "Up to 50% off*",
    ],
    [
      "App-only rewards",
      "Check the Apphany app for rewards available on eligible recharges.",
      Gift,
      "View app offers",
      "Bonus rewards*",
    ],
    [
      "Payment deals",
      "Look for eligible bank, card or payment-method promotions before paying.",
      WalletCards,
      "Check payment deals",
      "Bank offers*",
    ],
  ],
  utility: [
    [
      "First bill-payment offer",
      "Eligible new users can check for a promotional discount on their first bill payment.",
      CalendarCheck2,
      "View bill offers",
      "Up to 25% off*",
    ],
    [
      "App rewards",
      "Check for service-specific rewards available through the Apphany app.",
      Gift,
      "View app rewards",
      "Reward bonus*",
    ],
    [
      "Payment-method deals",
      "Compare eligible card, bank and payment-method promotions at checkout.",
      WalletCards,
      "Check payment deals",
      "Extra savings*",
    ],
  ],
  finance: [
    [
      "Payment rewards",
      "Check for eligible rewards before completing this financial payment.",
      Gift,
      "View rewards",
      "Reward points*",
    ],
    [
      "Partner offers",
      "Explore promotions that may be available from participating institutions.",
      BadgePercent,
      "Explore partner deals",
      "Partner deal*",
    ],
    [
      "Payment-method benefits",
      "Review eligible bank, card or payment-method benefits before confirming.",
      WalletCards,
      "Check benefits",
      "Bank benefit*",
    ],
  ],
  insurance: [
    [
      "Policy payment offers",
      "Check for eligible rewards when paying a supported insurance premium.",
      ShieldOfferIcon,
      "View policy offers",
      "Premium rewards*",
    ],
    [
      "Partner promotions",
      "Explore promotions that may be available from participating insurance providers.",
      BadgePercent,
      "Explore promotions",
      "Partner deal*",
    ],
    [
      "Payment benefits",
      "Review eligible bank, card or payment-method benefits before paying.",
      WalletCards,
      "Check benefits",
      "Bank benefit*",
    ],
  ],
  travel: [
    [
      "First booking offer",
      "Eligible new users can check for a promotional discount on their first booking.",
      BadgePercent,
      "View booking deals",
      "Up to 20% off*",
    ],
    [
      "Seasonal offers",
      "Explore travel rewards that may be available for selected dates or destinations.",
      Gift,
      "Explore seasonal offers",
      "Seasonal deal*",
    ],
    [
      "Payment-method deals",
      "Review eligible card, bank and payment-method promotions at checkout.",
      WalletCards,
      "Check payment deals",
      "Bank offers*",
    ],
  ],
  lifestyle: [
    [
      "Welcome offer",
      "Eligible new users can discover introductory promotions available for this service.",
      Sparkles,
      "Explore offers",
      "Welcome deal*",
    ],
    [
      "Partner deals",
      "Check deals from eligible brands, institutions or service partners.",
      BadgePercent,
      "View partner deals",
      "Partner offer*",
    ],
    [
      "Payment rewards",
      "Look for eligible rewards linked to your selected payment method.",
      Gift,
      "Check rewards",
      "Bonus rewards*",
    ],
  ],
};

const dealThemes = [
  {
    card: "border-[#a9deea] bg-[linear-gradient(145deg,#e6f8fc,#ffffff_72%)]",
    icon: "bg-[#cceff6] text-[#027a99]",
    badge: "bg-[#cceff6] text-[#027a99]",
    glow: "bg-[#00a8e8]/14",
    link: "text-[#027f9f]",
  },
  {
    card: "border-[#cbe4b8] bg-[linear-gradient(145deg,#f0fae9,#ffffff_72%)]",
    icon: "bg-[#dff1d2] text-[#4f8c25]",
    badge: "bg-[#dff1d2] text-[#4f8c25]",
    glow: "bg-[#82c950]/16",
    link: "text-[#57932d]",
  },
  {
    card: "border-[#f1d4aa] bg-[linear-gradient(145deg,#fff5e5,#ffffff_72%)]",
    icon: "bg-[#ffe6bd] text-[#b86b08]",
    badge: "bg-[#ffe6bd] text-[#a85f05]",
    glow: "bg-[#f59e0b]/14",
    link: "text-[#b86b08]",
  },
];

const offerImages = {
  recharge: ["/allservices/recharge.png", "/home/easy-payment3d.png", "/image/easy-payment.png"],
  utility: ["/image/electricity-vect.webp", "/home/water3d.png", "/home/gasbill3d.png"],
  finance: [
    "/financial-payments/loan-emi.png",
    "/financial-payments/credit-card-bill.png",
    "/financial-payments/nps-contribution.png",
  ],
  insurance: ["/insurance/i1.png", "/insurance/i2.png", "/insurance/i3.png"],
  travel: [
    "/service-providers/booking/bus-booking.jpg",
    "/service-providers/booking/train-booking.jpg",
    "/service-providers/booking/flight-booking.jpg",
  ],
  lifestyle: ["/about/gift.jpg", "/home/education.png", "/financial-payments/rental-payment.png"],
};

const serviceOfferImages = {
  mobile: ["/allservices/recharge.png", "/home/easy-payment3d.png", "/recharge/br.png"],
  fastag: ["/fastag/fastag-banner.jpg", "/image/car-insurance.jpg", "/home/easy-payment3d.png"],
  dth: ["/home/dth3d.png", "/home/dth.png", "/allservices/recharge.png"],
  electricity: ["/image/electricity-vect.webp", "/home/bill-payments.png", "/bbps/billpayment.png"],
  "loan-emi": ["/financial-payments/loan-emi.png", "/loan/loan2.png", "/image/loan-img.png"],
  insurance: [
    "/financial-payments/insurance-premium.png",
    "/insurance/i2.png",
    "/insurance/i3.png",
  ],
  "piped-gas": ["/home/gasbill3d.png", "/home/gashome.png", "/allservices/mahanagar-gas.jpeg"],
  cylinder: ["/home/gasbill3d.png", "/allservices/bharat-gas.png", "/allservices/hp-gas.jpg"],
  water: ["/home/water3d.png", "/home/waterhome.png", "/bbps/billpayment.png"],
  broadband: ["/recharge/br.png", "/home/easy-payment3d.png", "/bbps/billpayment.png"],
  challan: ["/fastag/fastag-banner.jpg", "/image/car-insurance.jpg", "/bbps/billpayment.png"],
  nps: [
    "/financial-payments/nps-contribution.png",
    "/financial-payments-hero-v2.png",
    "/home/easy-payment3d.png",
  ],
  "cable-tv": ["/home/dth3d.png", "/home/dth.png", "/allservices/recharge.png"],
  "prepaid-meter": [
    "/image/electricity-vect.webp",
    "/home/bill-payments.png",
    "/home/easy-payment3d.png",
  ],
  "credit-card-bill": [
    "/financial-payments/credit-card-bill.png",
    "/credit/creditcard.png",
    "/credit/credit2.png",
  ],
  "recurring-deposit": [
    "/financial-payments/recurring-deposit.png",
    "/financial-payments-hero-v2.png",
    "/home/easy-payment3d.png",
  ],
  "rental-payment": [
    "/financial-payments/rental-payment.png",
    "/home/easy-payment3d.png",
    "/bbps/billpayment.png",
  ],
  subscription: [
    "/financial-payments-hero-v2.png",
    "/home/easy-payment3d.png",
    "/bbps/billpayment.png",
  ],
  "education-fees": ["/home/education.png", "/home/easy-payment3d.png", "/bbps/billpayment.png"],
  ncmc: ["/booking/bus.png", "/booking/train.png", "/home/easy-payment3d.png"],
  "housing-society": [
    "/financial-payments/rental-payment.png",
    "/home/easy-payment3d.png",
    "/bbps/billpayment.png",
  ],
  "club-fees": ["/about/gift.jpg", "/home/easy-payment3d.png", "/financial-payments-hero-v2.png"],
  municipal: ["/bbps/billpayment.png", "/home/bill-payments.png", "/home/easy-payment3d.png"],
  donation: ["/about/gift.jpg", "/home/easy-payment3d.png", "/financial-payments-hero-v2.png"],
  "gift-card": ["/about/gift.jpg", "/home/easy-payment3d.png", "/financial-payments-hero-v2.png"],
  "car-insurance": ["/image/car-insurance.jpg", "/insurance/v1.jpg", "/insurance/i2.png"],
  "bike-insurance": ["/insurance/b1.png", "/insurance/b2.png", "/insurance/i2.png"],
  "taxi-insurance": [
    "/insurance/v3.jpg",
    "/insurance/v4.jpg",
    "/financial-payments/insurance-premium.png",
  ],
  "commercial-vehicle-insurance": [
    "/insurance/v2.jpg",
    "/insurance/v4.jpg",
    "/financial-payments/insurance-premium.png",
  ],
  "bus-booking": [
    "/service-providers/booking/bus-booking.jpg",
    "/booking/bus.png",
    "/booking/bus1.png",
  ],
  "train-booking": [
    "/service-providers/booking/train-booking.jpg",
    "/booking/train.png",
    "/booking/train1.png",
  ],
  "flight-booking": [
    "/service-providers/booking/flight-booking.jpg",
    "/aeps/flight-booking.png",
    "/financial-payments-hero-v2.png",
  ],
  "hotel-booking": [
    "/service-providers/booking/hotel-booking.jpg",
    "/booking/hotel.png",
    "/booking/hotel1.png",
  ],
  more: ["/financial-payments-hero-v2.png", "/home/easy-payment3d.png", "/bbps/billpayment.png"],
};

function ShieldOfferIcon(props) {
  return <Sparkles {...props} />;
}

const rechargeServices = new Set(["mobile", "fastag", "dth", "cylinder", "prepaid-meter", "ncmc"]);
const utilityServices = new Set([
  "electricity",
  "piped-gas",
  "water",
  "broadband",
  "cable-tv",
  "challan",
  "municipal",
  "housing-society",
]);
const financeServices = new Set([
  "loan-emi",
  "nps",
  "credit-card-bill",
  "recurring-deposit",
  "rental-payment",
]);
const insuranceServices = new Set([
  "insurance",
  "car-insurance",
  "bike-insurance",
  "taxi-insurance",
  "commercial-vehicle-insurance",
]);
const travelServices = new Set(["bus-booking", "train-booking", "flight-booking", "hotel-booking"]);

function getOfferCategory(slug) {
  if (rechargeServices.has(slug)) return "recharge";
  if (utilityServices.has(slug)) return "utility";
  if (financeServices.has(slug)) return "finance";
  if (insuranceServices.has(slug)) return "insurance";
  if (travelServices.has(slug)) return "travel";
  return "lifestyle";
}

export default function ServiceOffers({ serviceSlug, serviceName }) {
  const category = getOfferCategory(serviceSlug);
  const offers = offerGroups[category];
  const images = serviceOfferImages[serviceSlug] || offerImages[category];

  return (
    <section className="mt-8 overflow-hidden rounded-[26px] border border-[#d4e9ed] bg-[linear-gradient(135deg,#f0fafb,#ffffff_52%,#f2f9ed)] px-4 py-8 shadow-[0_14px_34px_rgba(12,61,76,.07)] sm:px-7 sm:py-10">
        <ScrollReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.17em] text-[#0289ad]">
              <Sparkles size={15} /> Offers & deals
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0C3D4C] sm:text-3xl">
              Save more on {serviceName}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Explore rewards and partner promotions that may be available for eligible
              transactions.
            </p>
          </div>
          <span className="w-fit rounded-full border border-[#cce5d8] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#4f8830]">
            Updated in the app
          </span>
        </ScrollReveal>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {offers.map(([title, text, Icon, cta, promo], index) => {
            const theme = dealThemes[index];
            return (
              <ScrollReveal key={title} delay={index * 0.07} className="h-full">
                <article
                  className={`group relative h-full overflow-hidden rounded-2xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(12,61,76,.13)] ${theme.card}`}
                >
                  <span
                    className={`absolute -right-7 -top-7 h-20 w-20 rounded-full transition duration-500 group-hover:scale-150 ${theme.glow}`}
                  />
                  <div className="relative -mx-5 -mt-5 mb-5 h-36 overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff,#eaf6f8)] p-3">
                    <Image
                      src={images[index]}
                      alt={`${serviceName} offer`}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0C3D4C]/45 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#026381] shadow-lg">
                      {promo}
                    </span>
                  </div>
                  <div className="relative flex items-start justify-between gap-3">
                    <span className={`grid h-10 w-10 place-items-center rounded-xl ${theme.icon}`}>
                      <Icon size={20} />
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider ${theme.badge}`}
                    >
                      Deal 0{index + 1}
                    </span>
                  </div>
                  <h3 className="relative mt-4 font-extrabold text-[#0C3D4C]">{title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  <span
                    className={`relative mt-4 inline-flex items-center gap-1.5 text-xs font-bold transition group-hover:gap-2.5 ${theme.link}`}
                  >
                    {cta} <ArrowRight size={14} />
                  </span>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <p className="mt-5 text-[10px] leading-5 text-slate-500">
          Offers are subject to eligibility, partner availability and applicable terms. Review the
          final offer details in the Apphany app before payment.
        </p>
      </section>
  );
}
