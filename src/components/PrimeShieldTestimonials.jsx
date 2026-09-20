



import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Home,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function SuperGuardTestimonials() {
  const navigate = useNavigate();

  const LOCAL = {
    company: "SuperGuard Services Westminster",
    shortName: "SuperGuard Westminster",
    area: "Westminster",
    city: "London",
    postcode: "SW1P 4BD",
    streetAddress: "14 Regency St",
    fullAddress: "14 Regency St, London SW1P 4BD",
    phoneDisplay: "07466 936103",
    phoneTel: "+447466936103",
  };

  const reviews = [
    {
      number: "01",
      initials: "DM",
      name: "Daniel Morgan",
      role: "Homeowner, Westminster",
      service: "Rats & Mice Control",
      icon: Home,
      title: "Everything was handled clearly from the beginning.",
      quote:
        "We had been hearing movement near the kitchen during the evening. The technician inspected the relevant areas carefully, explained where the activity might be coming from and talked us through the treatment without making the process feel complicated.",
      highlight: "Clear inspection and practical advice",
      theme: "light",
    },
    {
      number: "02",
      initials: "SA",
      name: "Sophie Anderson",
      role: "Flat Resident, SW1P",
      service: "Bed Bug Treatment",
      icon: ShieldCheck,
      title: "Professional support during a difficult situation.",
      quote:
        "The preparation instructions were straightforward and the treatment process was explained properly. The team remained calm, respectful and professional throughout the visit, which made a stressful issue much easier to manage.",
      highlight: "Respectful and organised service",
      theme: "purple",
    },
    {
      number: "03",
      initials: "RB",
      name: "Richard Bennett",
      role: "Commercial Property Manager",
      service: "Commercial Pest Control",
      icon: Building2,
      title: "A discreet service that worked around our premises.",
      quote:
        "We required pest control assistance without causing disruption to staff or visitors. Communication was prompt, the inspection was organised and the recommended next steps were presented in a clear and professional way.",
      highlight: "Minimal business disruption",
      theme: "dark",
    },
  ];

  const standards = [
    "Clear communication",
    "Property-focused inspection",
    "Responsible treatment planning",
    "Practical aftercare guidance",
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".sgw-review-journal-reveal"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("sgw-review-journal-show");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("sgw-review-journal-show");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getTheme = (theme) => {
    if (theme === "purple") {
      return {
        wrapper:
          "border-[#6254B4] bg-[#6254B4] text-white",
        number: "text-white/20",
        service: "text-[#D8D2FF]",
        title: "text-white",
        quote: "text-white/75",
        divider: "border-white/15",
        avatar: "bg-white text-[#6254B4]",
        name: "text-white",
        role: "text-white/50",
        badge:
          "border-white/15 bg-white/[0.08] text-white",
        quoteIcon: "text-white/10",
        iconBox: "border-white/15 bg-white/[0.08] text-white",
      };
    }

    if (theme === "dark") {
      return {
        wrapper:
          "border-[#18141F] bg-[#18141F] text-white",
        number: "text-white/[0.07]",
        service: "text-[#BDB6FF]",
        title: "text-white",
        quote: "text-white/65",
        divider: "border-white/10",
        avatar: "bg-[#6254B4] text-white",
        name: "text-white",
        role: "text-white/45",
        badge:
          "border-white/10 bg-white/[0.05] text-white",
        quoteIcon: "text-white/[0.04]",
        iconBox: "border-white/10 bg-white/[0.05] text-[#BDB6FF]",
      };
    }

    return {
      wrapper:
        "border-[#DCD7E5] bg-white text-[#18141F]",
      number: "text-[#6254B4]/[0.07]",
      service: "text-[#6254B4]",
      title: "text-[#18141F]",
      quote: "text-[#625D69]",
      divider: "border-[#E7E3EB]",
      avatar: "bg-[#6254B4] text-white",
      name: "text-[#18141F]",
      role: "text-[#8B8592]",
      badge:
        "border-[#DED9E7] bg-[#F7F5FC] text-[#312B3A]",
      quoteIcon: "text-[#6254B4]/[0.055]",
      iconBox: "border-[#E2DDE9] bg-[#F7F5FC] text-[#6254B4]",
    };
  };

  return (
    <section
      aria-labelledby="customer-journal-heading"
      className="relative overflow-hidden bg-[#F3F0F8] py-20 sm:py-24 lg:py-28"
    >
      <style>{`
        .sgw-review-journal-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sgw-review-journal-show {
          opacity: 1;
          transform: translateY(0);
        }

        .sgw-review-journal-delay-1 {
          transition-delay: 100ms;
        }

        .sgw-review-journal-delay-2 {
          transition-delay: 180ms;
        }

        .sgw-review-journal-delay-3 {
          transition-delay: 260ms;
        }

        .sgw-review-journal-delay-4 {
          transition-delay: 340ms;
        }

        .sgw-review-dot-pattern {
          background-image: radial-gradient(
            circle,
            rgba(98, 84, 180, 0.28) 1.2px,
            transparent 1.2px
          );
          background-size: 11px 11px;
        }

        @media (prefers-reduced-motion: reduce) {
          .sgw-review-journal-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-64 top-10 h-[560px] w-[560px] rounded-full bg-[#6254B4]/10 blur-[150px]" />

        <div className="absolute -right-72 bottom-[-230px] h-[620px] w-[620px] rounded-full border-[110px] border-[#6254B4]/[0.035]" />

        <div className="sgw-review-dot-pattern absolute right-5 top-10 h-44 w-44 opacity-40" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#6254B4 1px, transparent 1px), linear-gradient(90deg, #6254B4 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* LARGE BACKGROUND WORD */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 select-none whitespace-nowrap text-[80px] font-black uppercase leading-none tracking-[-0.08em] text-[#6254B4]/[0.035] sm:text-[140px] lg:text-[220px]"
      >
        Reviews
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
        {/* TOP LINE */}
        <div className="sgw-review-journal-reveal flex flex-col gap-5 border-y border-[#D4CDDF] py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#6254B4] shadow-[0_0_18px_rgba(98,84,180,0.55)]" />

            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#6254B4]">
              Westminster Customer Journal
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin
              size={16}
              strokeWidth={2.5}
              className="shrink-0 text-[#6254B4]"
            />

            <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#6F6976]">
              {LOCAL.fullAddress}
            </span>
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="mt-14 grid gap-12 xl:grid-cols-[370px_minmax(0,1fr)] xl:gap-14 2xl:grid-cols-[410px_minmax(0,1fr)]">
          {/* LEFT JOURNAL INTRO */}
          <aside className="sgw-review-journal-reveal sgw-review-journal-delay-1 xl:sticky xl:top-28 xl:self-start">
            <span className="text-[9px] font-black uppercase tracking-[0.27em] text-[#6254B4]">
              Customer Experiences
            </span>

            <h2
              id="customer-journal-heading"
              className="mt-5 max-w-[420px] text-[47px] font-black leading-[0.94] tracking-[-0.055em] text-[#18141F] sm:text-[60px] xl:text-[65px]"
            >
              Real words from
              <span className="block text-[#6254B4]">
                local properties.
              </span>
            </h2>

            <p className="mb-0 mt-7 max-w-[365px] text-[15px] font-medium leading-7 text-[#66606D]">
              Feedback from residents and businesses who valued clear
              advice, professional conduct and a well-organised pest
              control service.
            </p>

            {/* SCORE PANEL */}
            <div className="mt-9 border border-[#D8D2E0] bg-white p-6">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-[0.21em] text-[#8D8693]">
                    Service rating
                  </span>

                  <span className="mt-2 block text-[60px] font-black leading-none tracking-[-0.07em] text-[#18141F]">
                    5.0
                  </span>
                </div>

                <Quote
                  size={52}
                  strokeWidth={1.5}
                  className="text-[#6254B4]/15"
                />
              </div>

              <div className="mt-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    strokeWidth={1.8}
                    className="fill-[#6254B4] text-[#6254B4]"
                  />
                ))}
              </div>

              <div className="mt-6 border-t border-[#E7E3EB] pt-5">
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#312B3A]">
                  Based on service-focused customer feedback
                </span>
              </div>
            </div>

            {/* CONTACT */}
            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="group mt-4 flex min-h-[56px] w-full items-center justify-between bg-[#18141F] px-5 text-white transition-colors duration-300 hover:bg-[#6254B4]"
            >
              <span>
                <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/45">
                  Speak with our team
                </span>

                <span className="mt-1 block text-sm font-black">
                  {LOCAL.phoneDisplay}
                </span>
              </span>

              <Phone
                size={19}
                strokeWidth={2.3}
                className="transition-transform duration-300 group-hover:rotate-6"
              />
            </a>
          </aside>

          {/* REVIEW JOURNAL ENTRIES */}
          <div className="space-y-5">
            {reviews.map((review, index) => {
              const Icon = review.icon;
              const theme = getTheme(review.theme);

              return (
                <article
                  key={review.name}
                  className={`sgw-review-journal-reveal ${
                    index === 0
                      ? "sgw-review-journal-delay-2"
                      : index === 1
                        ? "sgw-review-journal-delay-3"
                        : "sgw-review-journal-delay-4"
                  } group relative overflow-hidden border transition-all duration-500 hover:-translate-y-1 ${theme.wrapper}`}
                >
                  {/* LARGE NUMBER */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-3 -top-9 text-[170px] font-black leading-none tracking-[-0.09em] ${theme.number}`}
                  >
                    {review.number}
                  </span>

                  <Quote
                    aria-hidden="true"
                    size={150}
                    strokeWidth={1.2}
                    className={`pointer-events-none absolute bottom-[-35px] right-[12%] ${theme.quoteIcon}`}
                  />

                  <div className="relative z-10 grid lg:grid-cols-[190px_minmax(0,1fr)]">
                    {/* CUSTOMER COLUMN */}
                    <div
                      className={`flex flex-col justify-between border-b p-6 sm:p-8 lg:border-b-0 lg:border-r ${theme.divider}`}
                    >
                      <div>
                        <div
                          className={`flex h-14 w-14 items-center justify-center border ${theme.iconBox}`}
                        >
                          <Icon size={25} strokeWidth={2.2} />
                        </div>

                        <span
                          className={`mt-7 block text-[9px] font-black uppercase tracking-[0.21em] ${theme.service}`}
                        >
                          {review.service}
                        </span>
                      </div>

                      <div className="mt-8 lg:mt-16">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full text-[12px] font-black ${theme.avatar}`}
                        >
                          {review.initials}
                        </div>

                        <h3
                          className={`mt-4 text-[15px] font-black ${theme.name}`}
                        >
                          {review.name}
                        </h3>

                        <p
                          className={`mb-0 mt-1 text-xs font-semibold leading-5 ${theme.role}`}
                        >
                          {review.role}
                        </p>
                      </div>
                    </div>

                    {/* REVIEW CONTENT */}
                    <div className="flex min-h-[360px] flex-col p-6 sm:p-8 lg:p-10">
                      <div className="flex items-center justify-between gap-5">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map(
                            (_, starIndex) => (
                              <Star
                                key={starIndex}
                                size={15}
                                strokeWidth={1.8}
                                className={
                                  review.theme === "light"
                                    ? "fill-[#6254B4] text-[#6254B4]"
                                    : "fill-[#D8D2FF] text-[#D8D2FF]"
                                }
                              />
                            )
                          )}
                        </div>

                        <span
                          className={`text-[9px] font-black uppercase tracking-[0.19em] ${theme.service}`}
                        >
                          Journal Entry {review.number}
                        </span>
                      </div>

                      <h3
                        className={`mt-7 max-w-[730px] text-[27px] font-black leading-[1.05] tracking-[-0.04em] sm:text-[34px] ${theme.title}`}
                      >
                        {review.title}
                      </h3>

                      <blockquote
                        className={`mt-6 max-w-[760px] text-[15px] font-medium leading-7 sm:text-base sm:leading-8 ${theme.quote}`}
                      >
                        “{review.quote}”
                      </blockquote>

                      <div
                        className={`mt-auto flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between ${theme.divider}`}
                      >
                        <div
                          className={`inline-flex w-fit items-center gap-3 border px-4 py-3 ${theme.badge}`}
                        >
                          <BadgeCheck
                            size={17}
                            strokeWidth={2.4}
                            className={
                              review.theme === "light"
                                ? "text-[#6254B4]"
                                : "text-[#D8D2FF]"
                            }
                          />

                          <span className="text-[9px] font-black uppercase tracking-[0.15em]">
                            {review.highlight}
                          </span>
                        </div>

                        <span
                          className={`text-[9px] font-black uppercase tracking-[0.15em] ${theme.role}`}
                        >
                          Verified service feedback
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* SERVICE STANDARD LEDGER */}
        <div className="sgw-review-journal-reveal sgw-review-journal-delay-4 mt-16 border-y border-[#CFC8DA]">
          <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="flex items-center gap-4 border-b border-[#CFC8DA] py-7 lg:border-b-0 lg:border-r lg:pr-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#6254B4] text-white">
                <ShieldCheck size={22} strokeWidth={2.5} />
              </span>

              <div>
                <span className="block text-[8px] font-black uppercase tracking-[0.22em] text-[#8B8490]">
                  Service journal
                </span>

                <span className="mt-1 block text-sm font-black text-[#18141F]">
                  What customers value
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4">
              {standards.map((standard, index) => (
                <div
                  key={standard}
                  className={`flex items-center gap-3 py-6 lg:px-6 ${
                    index !== standards.length - 1
                      ? "xl:border-r xl:border-[#CFC8DA]"
                      : ""
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8E3F5] text-[#6254B4]">
                    <Check size={14} strokeWidth={3} />
                  </span>

                  <span className="text-[11px] font-black uppercase leading-5 tracking-[0.11em] text-[#312B3A]">
                    {standard}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="sgw-review-journal-reveal sgw-review-journal-delay-4 relative mt-10 overflow-hidden bg-[#18141F] px-6 py-9 text-white sm:px-9 lg:px-12 lg:py-11">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border-[48px] border-white/[0.035]" />

          <div className="pointer-events-none absolute bottom-[-160px] left-[35%] h-80 w-80 rounded-full bg-[#6254B4]/30 blur-[120px]" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[850px]">
              <span className="text-[9px] font-black uppercase tracking-[0.23em] text-[#BDB6FF]">
                Start your service enquiry
              </span>

              <h3 className="mt-3 text-[31px] font-black leading-tight tracking-[-0.04em] sm:text-[40px]">
                Tell us what you have noticed at your Westminster
                property.
              </h3>

              <p className="mb-0 mt-4 max-w-3xl text-sm font-medium leading-7 text-white/60">
                Share the pest signs, affected area and property type
                with our team so we can help you understand the next
                appropriate step.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/contact-us")}
              className="group flex min-h-[58px] shrink-0 items-center justify-between gap-7 bg-white px-7 text-[10px] font-black uppercase tracking-[0.16em] text-[#18141F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6254B4] hover:text-white"
            >
              Contact Our Team

              <ArrowRight
                size={20}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}