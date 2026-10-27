"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  BadgeIndianRupee,
  BadgePercent,
  BarChart3,
  Bike,
  Briefcase,
  Building2,
  BusFront,
  Calculator,
  CarFront,
  CarTaxiFront,
  CircleEllipsis,
  CreditCard,
  Droplets,
  Fuel,
  Gauge,
  GraduationCap,
  Gift,
  Hotel,
  HandHeart,
  Home,
  Landmark,
  Layers,
  Lightbulb,
  ReceiptIndianRupee,
  Repeat2,
  Router,
  SatelliteDish,
  Shield,
  ShieldCheck,
  Smartphone,
  PlaneTakeoff,
  TrainFront,
  Truck,
  Tv,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

const loanServices = [
  { slug: "loan-emi", label: "Pay Loan EMI", icon: BadgeIndianRupee, href: "/service-payment/loan-emi" },
  { slug: "loan-overview", label: "Loan Overview", icon: Landmark, href: "/loan" },
  { slug: "instant-loan", label: "Instant Loan", icon: Zap, href: "/instant-loan" },
  { slug: "personal-loan", label: "Personal Loan", icon: Users, href: "/loan/personal-loan" },
  { slug: "home-loan", label: "Home Loan", icon: Home, href: "/loan/home-loan" },
  { slug: "car-loan", label: "Car Loan", icon: CarFront, href: "/loan/car-loan" },
  { slug: "business-loan", label: "Business Loan", icon: Briefcase, href: "/loan/business-loan" },
  { slug: "construction-loan", label: "Construction Loan", icon: Truck, href: "/loan/construction-equipment-loan" },
  { slug: "emi-calculator", label: "EMI Calculator", icon: Calculator, href: "/loan-emi" },
];

const creditCardServices = [
  { slug: "credit-card-bill", label: "Pay Credit Card Bill", icon: CreditCard, href: "/service-payment/credit-card-bill" },
  { slug: "credit-card", label: "Credit Cards Overview", icon: Layers, href: "/credit-card" },
  { slug: "apply-card", label: "Apply Credit Card", icon: WalletCards, href: "/credit-card#credit-cards" },
  { slug: "rewards-offers", label: "Rewards & Offers", icon: BadgePercent, href: "/credit-card#credit-cards" },
  { slug: "credit-score", label: "Free Credit Score", icon: BarChart3, href: "/free-credit-score" },
  { slug: "financial-payments", label: "Financial Payments", icon: Landmark, href: "/financial-payments" },
];

const insuranceServices = [
  { slug: "insurance", label: "Pay Insurance / LIC", icon: ShieldCheck, href: "/service-payment/insurance" },
  { slug: "insurance-overview", label: "Insurance Overview", icon: Shield, href: "/insurance" },
  { slug: "car-insurance", label: "Car Insurance", icon: CarFront, href: "/insurance/car-insurance" },
  { slug: "bike-insurance", label: "Bike Insurance", icon: Bike, href: "/insurance/bike-insurance" },
  { slug: "taxi-insurance", label: "Taxi Insurance", icon: CarTaxiFront, href: "/insurance/taxi-insurance" },
  { slug: "commercial-vehicle", label: "Commercial Vehicle", icon: Truck, href: "/insurance/commercial-vehicle" },
];

const npsServices = [
  { slug: "nps", label: "Make NPS Contribution", icon: Landmark, href: "/service-payment/nps" },
  { slug: "nps-providers", label: "NPS Providers", icon: Building2, href: "/service-payment/nps#providers" },
  { slug: "financial-payments", label: "Financial Payments", icon: WalletCards, href: "/financial-payments" },
  { slug: "recurring-deposit", label: "Recurring Deposit", icon: Repeat2, href: "/service-payment/recurring-deposit" },
  { slug: "retirement-planning", label: "Retirement Planning", icon: Calculator, href: "/income-calc" },
  { slug: "insurance", label: "Insurance & Pension", icon: ShieldCheck, href: "/service-payment/insurance" },
];

const recurringDepositServices = [
  { slug: "recurring-deposit", label: "Pay Recurring Deposit", icon: Repeat2, href: "/service-payment/recurring-deposit" },
  { slug: "nps", label: "NPS Contribution", icon: Landmark, href: "/service-payment/nps" },
  { slug: "financial-payments", label: "Financial Payments", icon: WalletCards, href: "/financial-payments" },
  { slug: "savings-planning", label: "Savings & Planning", icon: Calculator, href: "/income-calc" },
  { slug: "loan-emi", label: "Pay Loan EMI", icon: BadgeIndianRupee, href: "/service-payment/loan-emi" },
  { slug: "insurance", label: "Insurance & Savings", icon: ShieldCheck, href: "/service-payment/insurance" },
];

const mainServices = [
  ["mobile", "Mobile", Smartphone],
  ["fastag", "Fastag", CarFront],
  ["dth", "DTH", SatelliteDish],
  ["electricity", "Electricity", Lightbulb],
  ["loan-emi", "Loan EMI", BadgeIndianRupee],
  ["insurance", "Insurance / LIC", ShieldCheck],
  ["piped-gas", "Piped Gas Bill", Fuel],
  ["cylinder", "Book a Cylinder", Fuel],
  ["water", "Water Supply", Droplets],
  ["broadband", "Broadband/Landline", Router],
  ["challan", "E-Challan", Landmark],
];

const moreServices = [
  ["mobile-prepaid", "Mobile Prepaid", Smartphone, "mobile"],
  ["mobile-postpaid", "Mobile Postpaid", Smartphone, "mobile"],
  ["broadband-postpaid", "Broadband Postpaid", Router, "broadband"],
  ["landline-postpaid", "Landline Postpaid", Router, "broadband"],
  ["nps", "NPS", BadgeIndianRupee],
  ["cable-tv", "Cable TV", Tv],
  ["prepaid-meter", "Prepaid Meter", Gauge],
  ["credit-card-bill", "Credit Card Bill Payment", CreditCard],
  ["loan-repayment", "Loan Repayment", BadgeIndianRupee, "loan-emi"],
  ["recurring-deposit", "Recurring Deposit", Repeat2],
  ["rental-payment", "Rental Payment", Home],
  ["subscription", "Subscription Payment", ReceiptIndianRupee],
  ["education-fees", "Education Fees", GraduationCap],
  ["ncmc", "NCMC", BusFront],
  ["life-insurance", "Life Insurance", ShieldCheck, "insurance"],
  ["health-insurance", "Health Insurance", ShieldCheck, "insurance"],
  ["gas-supply", "Gas Supply", Fuel, "piped-gas"],
  ["housing-society", "Housing Society Payments", Building2],
  ["club-fees", "Clubs & Associations Fees", Users],
  ["municipal", "Municipal Services", Building2],
  ["municipal-taxes", "Municipal Taxes", Building2, "municipal"],
  ["donation", "Donation", HandHeart],
  ["gift-card", "Gift Cards", Gift],
  ["car-insurance", "Car Insurance", CarFront],
  ["bike-insurance", "Bike Insurance", ShieldCheck],
  ["taxi-insurance", "Taxi Insurance", CarFront],
  ["commercial-vehicle-insurance", "Commercial Vehicle Insurance", ShieldCheck],
  ["bus-booking", "Bus Booking", BusFront],
  ["train-booking", "Train Booking", TrainFront],
  ["flight-booking", "Flight Booking", PlaneTakeoff],
  ["hotel-booking", "Hotel Booking", Hotel],
];

const mobileMainServices = mainServices.slice(0, 3);
const mobileMoreServices = [...mainServices.slice(3), ...moreServices];

export default function PaymentServiceNavigation({ activeSlug }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 16 });
  const moreButtonRef = useRef(null);
  const moreMenuRef = useRef(null);
  const desktopMoreActive =
    activeSlug === "more" || moreServices.some(([slug]) => slug === activeSlug);
  const mobileMoreActive =
    activeSlug === "more" || mobileMoreServices.some(([slug]) => slug === activeSlug);

  const closeAfterLeavingButton = (event) => {
    if (!moreMenuRef.current?.contains(event.relatedTarget)) {
      setMoreOpen(false);
    }
  };

  const closeAfterLeavingMenu = (event) => {
    if (!moreButtonRef.current?.contains(event.relatedTarget)) {
      setMoreOpen(false);
    }
  };

  useEffect(() => {
    if (!moreOpen) return undefined;

    const closeMenu = () => setMoreOpen(false);
    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    const closeOnOutsideClick = (event) => {
      if (
        !moreButtonRef.current?.contains(event.target) &&
        !moreMenuRef.current?.contains(event.target)
      ) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", closeMenu);
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      window.removeEventListener("scroll", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [moreOpen]);

  const toggleMore = (event) => {
    moreButtonRef.current = event.currentTarget;
    const bounds = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: Math.round(bounds.bottom),
      right: Math.max(16, Math.round(window.innerWidth - bounds.right)),
    });
    setMoreOpen((open) => !open);
  };

  const isLoanService = activeSlug === "loan-emi" || activeSlug === "loan-repayment";

  if (isLoanService) {
    return (
      <div className="relative mx-auto max-w-7xl">
        {/* Desktop Loan Services Navigation */}
        <nav className="hidden gap-3 pb-2 lg:flex lg:justify-between">
          {loanServices.map(({ slug, label, icon: Icon, href }) => {
            const active =
              activeSlug === slug ||
              (slug === "loan-emi" && (activeSlug === "loan-emi" || activeSlug === "loan-repayment"));
            return (
              <Link
                key={slug}
                href={href}
                className={`flex min-w-max flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-xs transition sm:text-sm ${
                  active
                    ? "border-[#58d7ed] text-white"
                    : "border-transparent text-white/80 hover:text-white"
                }`}
              >
                <Icon
                  size={22}
                  strokeWidth={1.7}
                  className={active ? "text-[#58d7ed]" : "text-white"}
                />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Loan Services Navigation */}
        <nav className="scrollbar-hidden flex items-center gap-4 overflow-x-auto pb-2 lg:hidden">
          {loanServices.map(({ slug, label, icon: Icon, href }) => {
            const active =
              activeSlug === slug ||
              (slug === "loan-emi" && (activeSlug === "loan-emi" || activeSlug === "loan-repayment"));
            return (
              <Link
                key={slug}
                href={href}
                className={`flex min-w-max shrink-0 flex-col items-center gap-1.5 border-b-2 px-2 pb-1.5 text-center text-xs transition ${
                  active
                    ? "border-[#58d7ed] text-white"
                    : "border-transparent text-white/80 hover:text-white"
                }`}
              >
                <Icon
                  size={21}
                  strokeWidth={1.7}
                  className={active ? "text-[#58d7ed]" : "text-white"}
                />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    );
  }

  const isCreditCardService =
    activeSlug === "credit-card-bill" || activeSlug === "credit-card";

  if (isCreditCardService) {
    return (
      <div className="relative mx-auto max-w-7xl">
        {/* Desktop Credit Card Services Navigation */}
        <nav className="hidden gap-3 pb-2 lg:flex lg:justify-between">
          {creditCardServices.map(({ slug, label, icon: Icon, href }) => {
            const active =
              activeSlug === slug ||
              (slug === "credit-card-bill" &&
                (activeSlug === "credit-card-bill" || activeSlug === "credit-card"));
            return (
              <Link
                key={slug}
                href={href}
                className={`flex min-w-max flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-xs transition sm:text-sm ${
                  active
                    ? "border-[#58d7ed] text-white"
                    : "border-transparent text-white/80 hover:text-white"
                }`}
              >
                <Icon
                  size={22}
                  strokeWidth={1.7}
                  className={active ? "text-[#58d7ed]" : "text-white"}
                />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Credit Card Services Navigation */}
        <nav className="scrollbar-hidden flex items-center gap-4 overflow-x-auto pb-2 lg:hidden">
          {creditCardServices.map(({ slug, label, icon: Icon, href }) => {
            const active =
              activeSlug === slug ||
              (slug === "credit-card-bill" &&
                (activeSlug === "credit-card-bill" || activeSlug === "credit-card"));
            return (
              <Link
                key={slug}
                href={href}
                className={`flex min-w-max shrink-0 flex-col items-center gap-1.5 border-b-2 px-2 pb-1.5 text-center text-xs transition ${
                  active
                    ? "border-[#58d7ed] text-white"
                    : "border-transparent text-white/80 hover:text-white"
                }`}
              >
                <Icon
                  size={21}
                  strokeWidth={1.7}
                  className={active ? "text-[#58d7ed]" : "text-white"}
                />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    );
  }

  const isInsuranceService =
    activeSlug === "insurance" ||
    activeSlug === "life-insurance" ||
    activeSlug === "health-insurance";

  if (isInsuranceService) {
    return (
      <div className="relative mx-auto max-w-7xl">
        {/* Desktop Insurance Services Navigation */}
        <nav className="hidden gap-3 pb-2 lg:flex lg:justify-between">
          {insuranceServices.map(({ slug, label, icon: Icon, href }) => {
            const active =
              activeSlug === slug ||
              (slug === "insurance" &&
                (activeSlug === "insurance" ||
                  activeSlug === "life-insurance" ||
                  activeSlug === "health-insurance"));
            return (
              <Link
                key={slug}
                href={href}
                className={`flex min-w-max flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-xs transition sm:text-sm ${
                  active
                    ? "border-[#58d7ed] text-white"
                    : "border-transparent text-white/80 hover:text-white"
                }`}
              >
                <Icon
                  size={22}
                  strokeWidth={1.7}
                  className={active ? "text-[#58d7ed]" : "text-white"}
                />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Insurance Services Navigation */}
        <nav className="scrollbar-hidden flex items-center gap-4 overflow-x-auto pb-2 lg:hidden">
          {insuranceServices.map(({ slug, label, icon: Icon, href }) => {
            const active =
              activeSlug === slug ||
              (slug === "insurance" &&
                (activeSlug === "insurance" ||
                  activeSlug === "life-insurance" ||
                  activeSlug === "health-insurance"));
            return (
              <Link
                key={slug}
                href={href}
                className={`flex min-w-max shrink-0 flex-col items-center gap-1.5 border-b-2 px-2 pb-1.5 text-center text-xs transition ${
                  active
                    ? "border-[#58d7ed] text-white"
                    : "border-transparent text-white/80 hover:text-white"
                }`}
              >
                <Icon
                  size={21}
                  strokeWidth={1.7}
                  className={active ? "text-[#58d7ed]" : "text-white"}
                />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    );
  }

  const isNpsService = activeSlug === "nps";

  if (isNpsService) {
    return (
      <div className="relative mx-auto max-w-7xl">
        {/* Desktop NPS Services Navigation */}
        <nav className="hidden gap-3 pb-2 lg:flex lg:justify-between">
          {npsServices.map(({ slug, label, icon: Icon, href }) => {
            const active = activeSlug === slug || (slug === "nps" && activeSlug === "nps");
            return (
              <Link
                key={slug}
                href={href}
                className={`flex min-w-max flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-xs transition sm:text-sm ${
                  active
                    ? "border-[#58d7ed] text-white"
                    : "border-transparent text-white/80 hover:text-white"
                }`}
              >
                <Icon
                  size={22}
                  strokeWidth={1.7}
                  className={active ? "text-[#58d7ed]" : "text-white"}
                />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile NPS Services Navigation */}
        <nav className="scrollbar-hidden flex items-center gap-4 overflow-x-auto pb-2 lg:hidden">
          {npsServices.map(({ slug, label, icon: Icon, href }) => {
            const active = activeSlug === slug || (slug === "nps" && activeSlug === "nps");
            return (
              <Link
                key={slug}
                href={href}
                className={`flex min-w-max shrink-0 flex-col items-center gap-1.5 border-b-2 px-2 pb-1.5 text-center text-xs transition ${
                  active
                    ? "border-[#58d7ed] text-white"
                    : "border-transparent text-white/80 hover:text-white"
                }`}
              >
                <Icon
                  size={21}
                  strokeWidth={1.7}
                  className={active ? "text-[#58d7ed]" : "text-white"}
                />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    );
  }

  const isRecurringDepositService = activeSlug === "recurring-deposit";

  if (isRecurringDepositService) {
    return (
      <div className="relative mx-auto max-w-7xl">
        {/* Desktop Recurring Deposit Services Navigation */}
        <nav className="hidden gap-3 pb-2 lg:flex lg:justify-between">
          {recurringDepositServices.map(({ slug, label, icon: Icon, href }) => {
            const active = activeSlug === slug || (slug === "recurring-deposit" && activeSlug === "recurring-deposit");
            return (
              <Link
                key={slug}
                href={href}
                className={`flex min-w-max flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-xs transition sm:text-sm ${
                  active
                    ? "border-[#58d7ed] text-white"
                    : "border-transparent text-white/80 hover:text-white"
                }`}
              >
                <Icon
                  size={22}
                  strokeWidth={1.7}
                  className={active ? "text-[#58d7ed]" : "text-white"}
                />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Recurring Deposit Services Navigation */}
        <nav className="scrollbar-hidden flex items-center gap-4 overflow-x-auto pb-2 lg:hidden">
          {recurringDepositServices.map(({ slug, label, icon: Icon, href }) => {
            const active = activeSlug === slug || (slug === "recurring-deposit" && activeSlug === "recurring-deposit");
            return (
              <Link
                key={slug}
                href={href}
                className={`flex min-w-max shrink-0 flex-col items-center gap-1.5 border-b-2 px-2 pb-1.5 text-center text-xs transition ${
                  active
                    ? "border-[#58d7ed] text-white"
                    : "border-transparent text-white/80 hover:text-white"
                }`}
              >
                <Icon
                  size={21}
                  strokeWidth={1.7}
                  className={active ? "text-[#58d7ed]" : "text-white"}
                />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-7xl">
      <nav className="hidden gap-3 pb-2 lg:flex lg:justify-between">
        {mainServices.map(([slug, label, Icon]) => {
          const active = activeSlug === slug;
          return (
            <Link
              key={slug}
              href={`/service-payment/${slug}`}
              className={`flex min-w-max flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-xs transition sm:text-sm ${active ? "border-[#58d7ed] text-white" : "border-transparent text-white/80 hover:text-white"}`}
            >
              <Icon
                size={22}
                strokeWidth={1.7}
                className={active ? "text-[#58d7ed]" : "text-white"}
              />
              {label}
            </Link>
          );
        })}

        <button
          type="button"
          onClick={toggleMore}
          onMouseLeave={closeAfterLeavingButton}
          aria-expanded={moreOpen}
          className={`flex min-w-[58px] flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-sm transition ${desktopMoreActive ? "border-[#58d7ed] text-white" : "border-transparent text-white/80 hover:text-white"}`}
        >
          <CircleEllipsis size={22} strokeWidth={1.7} />
          More
        </button>
      </nav>

      <nav className="flex items-start justify-between gap-2 pb-2 lg:hidden">
        {mobileMainServices.map(([slug, label, Icon]) => {
          const active = activeSlug === slug;
          return (
            <Link
              key={slug}
              href={`/service-payment/${slug}`}
              className={`flex min-w-0 flex-1 flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-center text-[11px] leading-4 transition sm:text-sm ${active ? "border-[#58d7ed] text-white" : "border-transparent text-white/80 hover:text-white"}`}
            >
              <Icon
                size={21}
                strokeWidth={1.7}
                className={active ? "text-[#58d7ed]" : "text-white"}
              />
              {label}
            </Link>
          );
        })}

        <button
          type="button"
          onClick={toggleMore}
          aria-expanded={moreOpen}
          className={`flex min-w-0 flex-1 flex-col items-center gap-1.5 border-b-2 px-1 pb-1.5 text-[11px] leading-4 transition sm:text-sm ${mobileMoreActive ? "border-[#58d7ed] text-white" : "border-transparent text-white/80 hover:text-white"}`}
        >
          <CircleEllipsis size={21} strokeWidth={1.7} />
          More
        </button>
      </nav>

      {moreOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={moreMenuRef}
            onMouseLeave={closeAfterLeavingMenu}
            className="more-services-scrollbar fixed z-[3000] max-h-[300px] w-[min(250px,calc(100vw-32px))] overflow-y-auto rounded-lg border border-slate-200 bg-white py-1 text-slate-800 shadow-[0_14px_35px_rgba(0,0,0,0.18)]"
            style={{ top: menuPosition.top, right: menuPosition.right }}
          >
            <div className="lg:hidden">
              {mobileMoreServices.map(([slug, label, Icon, targetSlug]) => (
                <Link
                  key={slug}
                  href={`/service-payment/${targetSlug || slug}`}
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center gap-4 border-b border-[#d9edf2] px-4 py-3 text-sm font-medium transition last:border-0 hover:bg-[#e9f8fb] hover:text-[#026381]"
                >
                  <Icon size={22} className="shrink-0 text-[#026381]" strokeWidth={1.6} />
                  {label}
                </Link>
              ))}
            </div>
            <div className="hidden lg:block">
              {moreServices.map(([slug, label, Icon, targetSlug]) => (
                <Link
                  key={slug}
                  href={`/service-payment/${targetSlug || slug}`}
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center gap-4 border-b border-[#d9edf2] px-4 py-3 text-sm font-medium transition last:border-0 hover:bg-[#e9f8fb] hover:text-[#026381]"
                >
                  <Icon size={22} className="shrink-0 text-[#026381]" strokeWidth={1.6} />
                  {label}
                </Link>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
