




import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  MapPin,
  Phone,
  ShieldCheck,
  Bug,
  Home,
  Building2,
  Search,
  Sparkles,
} from "lucide-react";

export default function AboutPassionSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const LOCAL = {
    area: "Marylebone",
    city: "London",
    postcode: "NW1 6UB",
    address: "49 Shroton St, London NW1 6UB, United Kingdom",
    businessName: "Superguard Services Marylebone",
    shortName: "Superguard Marylebone",
    phoneDisplay: "+44 7356 236459",
    phoneTel: "+447356236459",
  };

  const pestServices = [
    {
      number: "01",
      title: "Rats & Mice",
      icon: Bug,
      description:
        "Professional rodent control focused on activity, entry points and protecting your property.",
    },
    {
      number: "02",
      title: "Bed Bugs",
      icon: ShieldCheck,
      description:
        "Targeted treatment for bed bug activity in bedrooms, accommodation and affected properties.",
    },
    {
      number: "03",
      title: "Cockroaches",
      icon: Bug,
      description:
        "Practical cockroach control for homes, businesses and commercial environments.",
    },
    {
      number: "04",
      title: "Wasps",
      icon: Sparkles,
      description:
        "Professional wasp nest treatment with attention to nest location and property safety.",
    },
    {
      number: "05",
      title: "Fleas",
      icon: Home,
      description:
        "Property-focused flea treatment designed around affected rooms and areas.",
    },
    {
      number: "06",
      title: "Ants",
      icon: Search,
      description:
        "Control focused on ant activity, access routes and areas where colonies may be established.",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".sgm-about-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("sgm-about-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sgm-about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="marylebone-about-heading"
      className="relative overflow-hidden bg-white text-[#17151D]"
    >
      <style>{`
        /* =========================================================
           SUPERGUARD MARYLEBONE
           EDITORIAL PEST CONTROL ABOUT SECTION
        ========================================================= */

        .sgm-about-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 900ms cubic-bezier(.16,1,.3,1),
            transform 900ms cubic-bezier(.16,1,.3,1);
        }

        .sgm-about-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sgm-about-delay-1 {
          transition-delay: 120ms;
        }

        .sgm-about-delay-2 {
          transition-delay: 240ms;
        }

        .sgm-about-delay-3 {
          transition-delay: 360ms;
        }

        .sgm-about-delay-4 {
          transition-delay: 480ms;
        }

        .sgm-about-circle {
          transition:
            transform 900ms cubic-bezier(.16,1,.3,1),
            box-shadow 500ms ease;
        }

        .sgm-about-circle:hover {
          transform: scale(1.025);
          box-shadow:
            0 40px 100px rgba(96,85,166,.25);
        }

        .sgm-about-card {
          transition:
            transform 450ms cubic-bezier(.16,1,.3,1),
            background-color 350ms ease,
            color 350ms ease,
            border-color 350ms ease,
            box-shadow 350ms ease;
        }

        .sgm-about-card:hover {
          transform: translateY(-8px);
          background: #6055A6;
          color: white;
          border-color: #6055A6;
          box-shadow: 0 25px 70px rgba(96,85,166,.22);
        }

        .sgm-about-card:hover .sgm-card-muted {
          color: rgba(255,255,255,.65);
        }

        .sgm-about-card:hover .sgm-card-icon {
          background: white;
          color: #6055A6;
        }

        .sgm-about-card:hover .sgm-card-number {
          color: rgba(255,255,255,.45);
        }

        .sgm-about-card:hover .sgm-card-arrow {
          transform: translate(4px,-4px);
        }

        .sgm-card-icon {
          transition:
            background-color 300ms ease,
            color 300ms ease,
            transform 350ms cubic-bezier(.16,1,.3,1);
        }

        .sgm-card-arrow {
          transition: transform 350ms cubic-bezier(.16,1,.3,1);
        }

        .sgm-about-pill {
          transition:
            background-color 300ms ease,
            color 300ms ease,
            border-color 300ms ease;
        }

        .sgm-about-pill:hover {
          background: #6055A6;
          color: white;
          border-color: #6055A6;
        }

        .sgm-about-cta {
          transition:
            transform 300ms cubic-bezier(.16,1,.3,1),
            box-shadow 300ms ease,
            background-color 300ms ease;
        }

        .sgm-about-cta:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 55px rgba(0,0,0,.18);
        }

        .sgm-about-line {
          animation: sgmLineGrow 1.2s cubic-bezier(.16,1,.3,1) both;
          transform-origin: left;
        }

        @keyframes sgmLineGrow {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        @keyframes sgmFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        .sgm-about-float {
          animation: sgmFloat 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .sgm-about-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .sgm-about-circle,
          .sgm-about-card,
          .sgm-about-cta,
          .sgm-about-float {
            animation: none;
            transition: none;
          }
        }
      `}</style>

      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Large purple corner */}
        <div className="absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-[#6055A6]/[0.055]" />

        {/* Thin circle */}
        <div className="absolute -left-72 top-[40%] h-[620px] w-[620px] rounded-full border border-[#6055A6]/10" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#6055A6 1px, transparent 1px), linear-gradient(90deg, #6055A6 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* Vertical accent */}
        <div className="absolute bottom-0 left-[8%] hidden h-[45%] w-px bg-[#6055A6]/10 lg:block" />

        {/* Ghost text */}
        <span className="absolute right-[-40px] top-[42%] hidden select-none text-[210px] font-black leading-none tracking-[-0.12em] text-[#6055A6]/[0.025] xl:block">
          SG
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

        {/* =======================================================
            TOP BRAND / LOCATION
        ======================================================= */}

        <div className="sgm-about-reveal flex flex-col gap-5 border-t border-[#17151D]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-[#6055A6] text-white">
              <ShieldCheck size={17} strokeWidth={2.4} />
            </span>

            <div>
              <span className="block text-[8px] font-black uppercase tracking-[0.28em] text-[#17151D]/35">
                Pest Control Services
              </span>

              <span className="mt-1 block text-[11px] font-black uppercase tracking-[0.08em]">
                {LOCAL.businessName}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">

            <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-[#17151D]/45">
              <MapPin size={13} className="text-[#6055A6]" />
              {LOCAL.area}, {LOCAL.city}
            </span>

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.16em] text-[#6055A6]"
            >
              <Phone size={13} />
              {LOCAL.phoneDisplay}
            </a>

          </div>
        </div>

        {/* =======================================================
            HERO — COMPLETELY NEW LAYOUT
        ======================================================= */}

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20">

          {/* LEFT CONTENT */}

          <div className="sgm-about-reveal sgm-about-delay-1">

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#6055A6]" />

              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
                Who We Are
              </span>
            </div>

            <h2
              id="marylebone-about-heading"
              className="mt-8 max-w-[720px] text-[55px] font-black leading-[0.88] tracking-[-0.075em] sm:text-[75px] lg:text-[88px] xl:text-[100px]"
            >
              Pest control
              <span className="block text-[#6055A6]">
                without
              </span>
              the guesswork.
            </h2>

            <p className="mt-8 max-w-[590px] text-[15px] font-medium leading-8 text-[#17151D]/55 sm:text-base">
              {LOCAL.businessName} provides practical pest control
              services for homes, landlords, offices, shops and
              commercial properties across{" "}
              <strong className="font-black text-[#17151D]">
                {LOCAL.area}, {LOCAL.city}
              </strong>
              .
            </p>

            <p className="mt-4 max-w-[590px] text-sm font-medium leading-7 text-[#17151D]/45">
              We focus on understanding the pest problem, identifying
              the areas affected and choosing an appropriate way
              forward for the property.
            </p>

            {/* Small service pills */}

            <div className="mt-9 flex flex-wrap gap-2">

              {[
                "Residential",
                "Commercial",
                "Landlords",
                "Property Protection",
              ].map((item) => (
                <span
                  key={item}
                  className="sgm-about-pill border border-[#17151D]/10 px-4 py-2.5 text-[8px] font-black uppercase tracking-[0.15em] text-[#17151D]/55"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() => navigate("/contact-us")}
                className="sgm-about-cta group flex min-h-[57px] items-center justify-between gap-10 bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[0.18em] text-white sm:min-w-[220px]"
              >
                Talk To Our Team

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="flex min-h-[57px] items-center justify-center gap-3 border border-[#17151D]/15 px-7 text-[9px] font-black uppercase tracking-[0.18em] text-[#17151D] transition-all duration-300 hover:border-[#6055A6] hover:text-[#6055A6]"
              >
                <Phone size={15} />
                Call Us
              </a>

            </div>
          </div>

          {/* RIGHT CIRCULAR IMAGE */}

          <div className="sgm-about-reveal sgm-about-delay-2 relative flex justify-center lg:justify-end">

            {/* Outer decorative ring */}

            <div className="absolute right-[4%] top-[3%] h-[min(78vw,620px)] w-[min(78vw,620px)] rounded-full border border-[#6055A6]/20 lg:right-[3%]" />

            <div className="absolute right-[9%] top-[8%] h-[min(68vw,540px)] w-[min(68vw,540px)] rounded-full border border-[#6055A6]/10" />

            {/* Main circle */}

            <div className="sgm-about-circle relative z-10 h-[min(78vw,570px)] w-[min(78vw,570px)] overflow-hidden rounded-full border-[12px] border-white bg-[#17151D] shadow-[0_35px_100px_rgba(23,21,29,.18)] sm:border-[18px]">

              <img
                src="/images/about-superguard-banner.webp"
                alt={`${LOCAL.businessName} pest control services in ${LOCAL.area}`}
                className="absolute inset-0 h-full w-full object-contain object-center"
                loading="lazy"
              />

              {/* Image overlay */}

              <div className="absolute inset-0 bg-[#17151D]/10" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17151D]/70 via-transparent to-transparent" />

              {/* Circle image label */}

              <div className="absolute bottom-[13%] left-[10%] right-[10%]">

                <div className="flex items-center gap-3">

                  <span className="h-2 w-2 rounded-full bg-[#BDB6FF]" />

                  <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/65">
                    Serving {LOCAL.area}
                  </span>

                </div>

                <h3 className="mt-3 max-w-[390px] text-[32px] font-black leading-[0.9] tracking-[-0.05em] text-white sm:text-[42px]">
                  Protection starts with understanding.
                </h3>

              </div>
            </div>

            {/* Floating location card */}

            <div className="sgm-about-float absolute bottom-[2%] left-0 z-20 w-[270px] bg-white p-5 shadow-[0_25px_70px_rgba(23,21,29,.2)] sm:left-[2%] sm:w-[310px]">

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6055A6] text-white">
                  <MapPin size={18} />
                </div>

                <div>

                  <span className="block text-[7px] font-black uppercase tracking-[0.24em] text-[#17151D]/35">
                    Marylebone Location
                  </span>

                  <address className="mt-2 not-italic text-[11px] font-black leading-5 text-[#17151D]">
                    {LOCAL.address}
                  </address>

                </div>

              </div>

            </div>

            {/* Floating service badge */}

            <div className="absolute right-0 top-[10%] z-20 hidden bg-[#6055A6] px-5 py-4 text-white shadow-[0_20px_50px_rgba(96,85,166,.25)] sm:block">

              <span className="block text-[7px] font-black uppercase tracking-[0.25em] text-white/55">
                Service
              </span>

              <span className="mt-1 block text-[12px] font-black uppercase tracking-[0.08em]">
                Pest Control
              </span>

            </div>
          </div>
        </div>

        {/* =======================================================
            STATEMENT BAND
        ======================================================= */}

        <div className="sgm-about-reveal sgm-about-delay-3 mt-24 border-y border-[#17151D]/10 lg:mt-32">

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

            <div className="border-b border-[#17151D]/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">

              <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#6055A6]">
                Our Philosophy
              </span>

              <p className="mt-5 max-w-[800px] text-[28px] font-black leading-[1.05] tracking-[-0.045em] sm:text-[38px] lg:text-[44px]">
                A pest problem is rarely just about the pest.
                <span className="text-[#6055A6]">
                  {" "}
                  The property matters too.
                </span>
              </p>

            </div>

            <div className="flex items-center p-7 sm:p-10 lg:p-12">

              <div>

                <div className="flex items-center gap-3">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6055A6]/10 text-[#6055A6]">
                    <Check size={16} strokeWidth={3} />
                  </span>

                  <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#17151D]/45">
                    Property-focused approach
                  </span>

                </div>

                <p className="mt-5 max-w-[500px] text-sm font-medium leading-7 text-[#17151D]/50">
                  We consider signs of activity, affected areas,
                  possible access points and the property itself when
                  planning the appropriate service.
                </p>

              </div>

            </div>
          </div>
        </div>

        








        {/* =======================================================
            APPROACH / DARK SECTION
        ======================================================= */}

        <div className="mt-24 lg:mt-32">

          <div className="relative overflow-hidden bg-[#17151D]">

            {/* Purple vertical panel */}

            <div className="absolute bottom-0 right-0 top-0 hidden w-[31%] bg-[#6055A6] lg:block" />

            {/* Decorative circle */}

            <div className="pointer-events-none absolute -bottom-48 -left-20 h-[500px] w-[500px] rounded-full border-[70px] border-white/[0.025]" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_0.38fr]">

              <div className="p-8 sm:p-12 lg:p-16">

                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#BDB6FF]">
                  How We Approach The Problem
                </span>

                <h2 className="mt-6 max-w-[820px] text-[43px] font-black leading-[0.9] tracking-[-0.065em] text-white sm:text-[60px] lg:text-[75px]">
                  Notice.
                  <span className="text-[#8F80E4]">
                    {" "}
                    Understand.
                  </span>
                  <br />
                  Respond.
                </h2>

                <p className="mt-7 max-w-[650px] text-sm font-medium leading-7 text-white/45 sm:text-base sm:leading-8">
                  Good pest control starts with the details. We look
                  at what is happening, where it is happening and
                  what may be allowing the activity to continue.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">

                  {[
                    {
                      number: "01",
                      title: "Notice",
                      text: "Identify signs and affected areas.",
                    },
                    {
                      number: "02",
                      title: "Understand",
                      text: "Consider likely causes and access.",
                    },
                    {
                      number: "03",
                      title: "Respond",
                      text: "Choose a practical service route.",
                    },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="border-t border-white/10 pt-5"
                    >
                      <span className="text-[8px] font-black tracking-[0.2em] text-[#BDB6FF]">
                        {item.number}
                      </span>

                      <h3 className="mt-3 text-lg font-black text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[11px] font-medium leading-5 text-white/35">
                        {item.text}
                      </p>
                    </div>
                  ))}

                </div>

              </div>

              {/* Right information panel */}

              <div className="relative flex min-h-[330px] flex-col justify-between bg-[#6055A6] p-8 sm:p-12 lg:min-h-[520px] lg:p-10">

                <div>

                  <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/50">
                    Marylebone
                  </span>

                  <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#6055A6]">
                    <MapPin size={22} />
                  </div>

                </div>

                <div>

                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/50">
                    Local Base
                  </span>

                  <address className="mt-3 not-italic text-sm font-black leading-6 text-white">
                    {LOCAL.address}
                  </address>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="mt-6 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.15em] text-white"
                  >
                    <Phone size={15} />
                    {LOCAL.phoneDisplay}
                  </a>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            FINAL CTA
        ======================================================= */}

        <div className="sgm-about-reveal mt-16 lg:mt-20">

          <div className="relative overflow-hidden bg-[#6055A6] px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">

            {/* Decorative circles */}

            <div className="pointer-events-none absolute -right-28 -top-28 h-[380px] w-[380px] rounded-full border-[55px] border-white/[0.07]" />

            <div className="pointer-events-none absolute -bottom-32 right-[22%] h-[250px] w-[250px] rounded-full border border-white/[0.12]" />

            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

              <div>

                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/55">
                  Superguard Services Marylebone
                </span>

                <h2 className="mt-5 max-w-[850px] text-[43px] font-black leading-[0.88] tracking-[-0.07em] text-white sm:text-[60px] lg:text-[75px]">
                  Something
                  <span className="text-white/40">
                    {" "}
                    bothering
                  </span>
                  <br />
                  you?
                </h2>

                <p className="mt-6 max-w-[560px] text-sm font-medium leading-7 text-white/60">
                  Tell us what pest activity you have noticed and our
                  team can help you understand the next step.
                </p>

              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">

                <button
                  type="button"
                  onClick={() => navigate("/contact-us")}
                  className="sgm-about-cta group flex min-h-[58px] min-w-[235px] items-center justify-between gap-8 bg-white px-7 text-[9px] font-black uppercase tracking-[0.18em] text-[#17151D]"
                >
                  Send An Enquiry

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="flex min-h-[58px] items-center justify-center gap-3 border border-white/25 px-7 text-[9px] font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                  <Phone size={15} />
                  {LOCAL.phoneDisplay}
                </a>

              </div>

            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM INFORMATION
        ======================================================= */}

        <div className="mt-7 flex flex-col gap-3 text-[8px] font-black uppercase tracking-[0.18em] text-[#17151D]/30 sm:flex-row sm:items-center sm:justify-between">

          <span>{LOCAL.businessName}</span>

          <span>
            {LOCAL.area} · {LOCAL.city}
          </span>

          <span className="text-[#6055A6]">
            {LOCAL.postcode}
          </span>

        </div>

      </div>
    </section>
  );
}