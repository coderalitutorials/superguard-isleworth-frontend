

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  Crosshair,
  Activity,
  Building2,
  ChevronDown,
} from "lucide-react";

export default function AboutStorySection() {
  const navigate = useNavigate();

  const LOCAL = {
    company: "Superguard Services Marylebone",
    shortName: "Superguard Marylebone",
    area: "Marylebone",
    city: "London",
    postcode: "NW1 6UB",
    address: "49 Shroton St, London NW1 6UB, United Kingdom",
    phoneDisplay: "+44 7356 236459",
    phoneTel: "+447356236459",
  };

  const services = [
    {
      number: "01",
      title: "Rats & Mice",
      text: "Rodent activity, entry points and property protection.",
      icon: Bug,
    },
    {
      number: "02",
      title: "Bed Bugs",
      text: "Targeted treatment for established bed bug activity.",
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: "Cockroaches",
      text: "Professional control for domestic and commercial properties.",
      icon: Activity,
    },
    {
      number: "04",
      title: "Ant Control",
      text: "Treatment focused on activity, access points and affected areas.",
      icon: Target,
    },
    {
      number: "05",
      title: "Flea Treatment",
      text: "Property-focused treatment for flea infestations.",
      icon: Crosshair,
    },
    {
      number: "06",
      title: "Wasp Control",
      text: "Professional nest treatment and practical guidance.",
      icon: ShieldCheck,
    },
    {
      number: "07",
      title: "Carpet Moths",
      text: "Control for moth activity affecting carpets and fabrics.",
      icon: Bug,
    },
    {
      number: "08",
      title: "Bird Control",
      text: "Practical solutions for bird-related property problems.",
      icon: Building2,
    },
  ];

  const scrollToServices = () => {
    const section = document.getElementById("marylebone-services");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      aria-labelledby="marylebone-about-heading"
      className="relative mt-10 overflow-hidden bg-white text-[#16141B]"
    >
      <style>{`
        /* =========================================================
           SUPERGUARD MARYLEBONE
           CIRCULAR FIELD OPERATIONS DESIGN
        ========================================================= */

        @keyframes sgFieldReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sgFieldImage {
          from {
            opacity: 0;
            transform: scale(0.94);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes sgFieldPulse {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.18);
          }
        }

        @keyframes sgFieldFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes sgCircleSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .sg-field-reveal {
          animation: sgFieldReveal 850ms cubic-bezier(.16,1,.3,1) both;
        }

        .sg-field-image {
          animation: sgFieldImage 1100ms cubic-bezier(.16,1,.3,1) both;
        }

        .sg-field-delay-1 {
          animation-delay: 120ms;
        }

        .sg-field-delay-2 {
          animation-delay: 240ms;
        }

        .sg-field-delay-3 {
          animation-delay: 360ms;
        }

        .sg-field-delay-4 {
          animation-delay: 480ms;
        }

        .sg-field-pulse {
          animation: sgFieldPulse 2.4s ease-in-out infinite;
        }

        .sg-field-float {
          animation: sgFieldFloat 5s ease-in-out infinite;
        }

        .sg-circle-spin {
          animation: sgCircleSpin 22s linear infinite;
        }

        .sg-field-service {
          transition:
            transform 400ms cubic-bezier(.16,1,.3,1),
            background-color 400ms ease,
            color 400ms ease,
            border-color 400ms ease;
        }

        .sg-field-service:hover {
          transform: translateX(8px);
          background: #6055A6;
          border-color: #6055A6;
          color: white;
        }

        .sg-field-service:hover .sg-field-service-number {
          color: rgba(255,255,255,.55);
        }

        .sg-field-service:hover .sg-field-service-text {
          color: rgba(255,255,255,.65);
        }

        .sg-field-service:hover .sg-field-service-icon {
          background: white;
          color: #6055A6;
        }

        .sg-field-service-icon {
          transition:
            background-color 350ms ease,
            color 350ms ease,
            transform 350ms cubic-bezier(.16,1,.3,1);
        }

        .sg-field-service:hover .sg-field-service-icon {
          transform: rotate(8deg);
        }

        .sg-field-stat {
          transition:
            background-color 300ms ease,
            transform 300ms cubic-bezier(.16,1,.3,1);
        }

        .sg-field-stat:hover {
          background: #6055A6;
          color: white;
          transform: translateY(-4px);
        }

        .sg-field-stat:hover span {
          color: white;
        }

        .sg-field-button {
          transition:
            transform 300ms cubic-bezier(.16,1,.3,1),
            background-color 300ms ease,
            box-shadow 300ms ease;
        }

        .sg-field-button:hover {
          transform: translateY(-3px);
          background: #16141B;
          box-shadow: 0 18px 45px rgba(22,20,27,.18);
        }

        .sg-field-outline {
          transition:
            transform 300ms cubic-bezier(.16,1,.3,1),
            border-color 300ms ease,
            color 300ms ease,
            background-color 300ms ease;
        }

        .sg-field-outline:hover {
          transform: translateY(-3px);
          border-color: #6055A6;
          color: #6055A6;
          background: rgba(96,85,166,.035);
        }

        @media (prefers-reduced-motion: reduce) {
          .sg-field-reveal,
          .sg-field-image,
          .sg-field-pulse,
          .sg-field-float,
          .sg-circle-spin {
            animation: none;
          }

          .sg-field-service,
          .sg-field-service-icon,
          .sg-field-stat,
          .sg-field-button,
          .sg-field-outline {
            transition: none;
          }
        }
      `}</style>

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute right-0 top-0 hidden h-[850px] w-[16%] bg-[#6055A6] lg:block" />

        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage:
              "linear-gradient(#6055A6 1px, transparent 1px), linear-gradient(90deg, #6055A6 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <span className="absolute -left-16 top-[620px] hidden select-none text-[250px] font-black leading-none tracking-[-0.12em] text-[#6055A6]/[0.025] xl:block">
          SG
        </span>

        <div className="absolute left-[4%] top-[28%] hidden lg:block">
          <div className="h-20 w-px bg-[#6055A6]/20" />
          <div className="mt-3 h-px w-20 bg-[#6055A6]/20" />
        </div>

        <div className="absolute bottom-[13%] right-[7%] hidden lg:block">
          <div className="h-px w-28 bg-white/30" />
        </div>
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1540px] px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-32 lg:pt-24">

        {/* =======================================================
            TOP OPERATIONS HEADER
        ======================================================= */}

        <div className="sg-field-reveal grid border-y border-[#16141B]/10 lg:grid-cols-[1fr_auto_auto]">

          <div className="flex items-center gap-4 py-5 lg:pr-8">
            <div className="relative flex h-10 w-10 items-center justify-center bg-[#16141B] text-white">
              <ShieldCheck size={18} strokeWidth={2.4} />

              <span className="sg-field-pulse absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#6055A6]" />
            </div>

            <div>
              <span className="block text-[8px] font-black uppercase tracking-[0.27em] text-[#16141B]/35">
                Pest Control Operations
              </span>

              <span className="mt-1 block text-xs font-black uppercase tracking-[0.05em]">
                {LOCAL.company}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-[#16141B]/10 py-5 lg:border-l lg:border-t-0 lg:px-7">
            <MapPin
              size={15}
              className="text-[#6055A6]"
              strokeWidth={2.5}
            />

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#16141B]/50">
              {LOCAL.area} · {LOCAL.city}
            </span>
          </div>

          <a
            href={`tel:${LOCAL.phoneTel}`}
            className="flex items-center gap-3 border-t border-[#16141B]/10 py-5 text-[#6055A6] transition-colors hover:text-[#16141B] lg:border-l lg:border-t-0 lg:pl-7"
          >
            <Phone size={15} />

            <span className="text-[8px] font-black uppercase tracking-[0.15em]">
              {LOCAL.phoneDisplay}
            </span>
          </a>
        </div>

        {/* =======================================================
            HERO
        ======================================================= */}

        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-[1fr_0.86fr] lg:gap-16">

          {/* LEFT HERO */}

          <div className="sg-field-reveal sg-field-delay-1 flex flex-col justify-center">

            <div className="flex items-center gap-3">
              <span className="h-[3px] w-12 bg-[#6055A6]" />

              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
                About Superguard
              </span>
            </div>

            <h1
              id="marylebone-about-heading"
              className="mt-8 max-w-[920px] text-[60px] font-black leading-[0.84] tracking-[-0.08em] text-[#16141B] sm:text-[82px] lg:text-[100px] xl:text-[120px]"
            >
              We don't

              <span className="block text-[#6055A6]">
                chase pests.
              </span>

              <span className="block">
                We find
              </span>

              <span className="block text-[#16141B]/25">
                the cause.
              </span>
            </h1>

            <p className="mt-9 max-w-[620px] text-[15px] font-medium leading-8 text-[#16141B]/55 sm:text-base">
              {LOCAL.company} provides practical pest control services
              for homes, landlords, offices, shops and commercial
              properties across{" "}
              <strong className="font-black text-[#16141B]">
                {LOCAL.area}, {LOCAL.city}
              </strong>
              .
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() => navigate("/contact-us")}
                className="sg-field-button group flex min-h-[58px] items-center justify-between gap-10 bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[0.18em] text-white sm:min-w-[225px]"
              >
                Contact Our Team

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={scrollToServices}
                className="sg-field-outline group flex min-h-[58px] items-center justify-between gap-8 border border-[#16141B]/15 px-7 text-[9px] font-black uppercase tracking-[0.18em] sm:min-w-[180px]"
              >
                View Services

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#16141B]/10 pt-6">

              <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.16em] text-[#16141B]/45">
                <Check size={13} className="text-[#6055A6]" />
                Residential
              </span>

              <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.16em] text-[#16141B]/45">
                <Check size={13} className="text-[#6055A6]" />
                Commercial
              </span>

              <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.16em] text-[#16141B]/45">
                <Check size={13} className="text-[#6055A6]" />
                Marylebone
              </span>

            </div>
          </div>

          {/* =====================================================
              CIRCULAR IMAGE
          ===================================================== */}

          <div className="sg-field-image sg-field-delay-2 relative flex items-center justify-center py-8 sm:py-12">

            {/* Large purple circular background */}
            <div className="absolute h-[92%] w-[92%] rounded-full bg-[#6055A6] opacity-95" />

            {/* Outer decorative ring */}
            <div className="sg-circle-spin absolute h-[108%] w-[108%] rounded-full border border-[#6055A6]/25" />

            {/* Dashed circular ring */}
            <div className="absolute h-[101%] w-[101%] rounded-full border border-dashed border-[#6055A6]/35" />

            {/* Main circular image */}
            <div className="relative z-10 aspect-square w-[88%] overflow-hidden rounded-full border-[10px] border-white bg-[#16141B] shadow-[0_35px_90px_rgba(22,20,27,.25)] sm:border-[14px]">

              <img
                src="/images/about-story.webp"
                alt={`${LOCAL.company} pest control services in ${LOCAL.area}, London`}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] hover:scale-[1.07]"
                loading="eager"
                fetchPriority="high"
              />

              {/* Circular image overlays */}
              <div className="absolute inset-0 bg-[#16141B]/10" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#16141B]/80 via-transparent to-transparent" />

              {/* Image top badge */}
              <div className="absolute left-[8%] right-[8%] top-[8%] flex items-center justify-between">

                <div className="rounded-full bg-white px-4 py-3 shadow-lg sm:px-5">
                  <span className="block text-[7px] font-black uppercase tracking-[0.25em] text-[#16141B]/35">
                    Service Area
                  </span>

                  <span className="mt-1 block text-[9px] font-black uppercase tracking-[0.14em] text-[#6055A6]">
                    {LOCAL.area} · London
                  </span>
                </div>

                <div className="sg-field-float flex h-11 w-11 items-center justify-center rounded-full bg-[#6055A6] text-white shadow-lg sm:h-12 sm:w-12">
                  <Crosshair size={19} strokeWidth={2} />
                </div>
              </div>

              {/* Image bottom content */}
              <div className="absolute bottom-[9%] left-[9%] right-[9%]">

                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#6055A6]" />

                  <span className="text-[7px] font-black uppercase tracking-[0.28em] text-[#D0CAEF] sm:text-[8px]">
                    Property Focused
                  </span>
                </div>

                <h2 className="mt-4 text-[34px] font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-[46px] lg:text-[52px]">
                  Look closer.

                  <span className="block text-white/45">
                    Act smarter.
                  </span>
                </h2>

                <p className="mt-4 max-w-[460px] text-xs font-medium leading-6 text-white/55 sm:text-sm">
                  Our approach starts with understanding the signs,
                  affected areas and likely access points before
                  deciding on the appropriate service.
                </p>
              </div>
            </div>

            {/* Floating location card */}
            <div className="absolute bottom-0 left-1/2 z-30 w-[88%] -translate-x-1/2 bg-white p-4 shadow-[0_25px_70px_rgba(22,20,27,.18)] sm:bottom-2 sm:w-[360px] sm:p-5 lg:-bottom-2">

              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
                  <MapPin size={18} />
                </div>

                <div>
                  <span className="block text-[7px] font-black uppercase tracking-[0.24em] text-[#16141B]/35">
                    Marylebone Base
                  </span>

                  <address className="mt-1.5 not-italic text-xs font-black leading-5 text-[#16141B]">
                    {LOCAL.address}
                  </address>
                </div>

              </div>
            </div>

            {/* Small floating purple dot */}
            <div className="sg-field-pulse absolute right-[2%] top-[12%] h-4 w-4 rounded-full bg-[#6055A6] ring-4 ring-[#6055A6]/10" />

          </div>
        </div>

        {/* =======================================================
            DATA STRIP
        ======================================================= */}

        <div className="sg-field-reveal sg-field-delay-3 mt-20 grid border-y border-[#16141B]/10 sm:grid-cols-3 lg:mt-28">

          <div className="sg-field-stat flex min-h-[150px] flex-col justify-between border-b border-[#16141B]/10 p-7 sm:border-b-0 sm:border-r">
            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#16141B]/35">
              Service Area
            </span>

            <div>
              <span className="block text-[38px] font-black leading-none tracking-[-0.06em] text-[#6055A6]">
                NW1
              </span>

              <span className="mt-2 block text-[9px] font-black uppercase tracking-[0.16em] text-[#16141B]/45">
                Marylebone · London
              </span>
            </div>
          </div>

          <div className="sg-field-stat flex min-h-[150px] flex-col justify-between border-b border-[#16141B]/10 p-7 sm:border-b-0 sm:border-r">
            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#16141B]/35">
              Property Support
            </span>

            <div>
              <span className="block text-[38px] font-black leading-none tracking-[-0.06em] text-[#6055A6]">
                08
              </span>

              <span className="mt-2 block text-[9px] font-black uppercase tracking-[0.16em] text-[#16141B]/45">
                Core pest services
              </span>
            </div>
          </div>

          <div className="sg-field-stat flex min-h-[150px] flex-col justify-between p-7">
            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#16141B]/35">
              Contact
            </span>

            <div>
              <span className="block text-[25px] font-black leading-none tracking-[-0.04em] text-[#6055A6]">
                Call Us
              </span>

              <span className="mt-3 block text-[9px] font-black uppercase tracking-[0.12em] text-[#16141B]/45">
                {LOCAL.phoneDisplay}
              </span>
            </div>
          </div>

        </div>

        {/* =======================================================
            SERVICE COMMAND LIST
        ======================================================= */}

        <div
          id="marylebone-services"
          className="sg-field-reveal sg-field-delay-4 mt-24 lg:mt-32"
        >

          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">

            <div>
              <div className="flex items-center gap-3">
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
                  01 / Service Range
                </span>

                <span className="h-px w-16 bg-[#6055A6]" />
              </div>

              <h2 className="mt-5 max-w-[700px] text-[46px] font-black leading-[0.88] tracking-[-0.07em] sm:text-[65px] lg:text-[78px]">
                One property.

                <span className="block text-[#6055A6]">
                  Different problems.
                </span>
              </h2>
            </div>

            <div className="flex justify-between gap-8 lg:pb-2">

              <p className="max-w-[500px] text-sm font-medium leading-7 text-[#16141B]/50">
                From rodents and insects to nests and fabric pests,
                Superguard provides practical pest control support for
                properties throughout Marylebone.
              </p>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center border border-[#16141B]/15 text-[#6055A6] sm:flex">
                <ChevronDown size={18} />
              </div>

            </div>
          </div>

          <div className="mt-10 border-t-2 border-[#16141B]">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <button
                  key={service.number}
                  type="button"
                  onClick={() => navigate("/contact-us")}
                  className="sg-field-service group grid w-full border-b border-[#16141B]/10 text-left sm:grid-cols-[90px_70px_1fr_80px] sm:items-center"
                >

                  <div className="sg-field-service-number flex min-h-[105px] items-center border-b border-[#16141B]/10 px-5 text-[10px] font-black tracking-[0.2em] text-[#6055A6] sm:min-h-[115px] sm:border-b-0 sm:border-r sm:px-7">
                    {service.number}
                  </div>

                  <div className="flex items-center px-5 py-5 sm:justify-center sm:px-0">
                    <span className="sg-field-service-icon flex h-11 w-11 items-center justify-center bg-[#6055A6]/[0.08] text-[#6055A6]">
                      <Icon size={18} strokeWidth={2.2} />
                    </span>
                  </div>

                  <div className="px-5 pb-6 sm:px-7 sm:py-5 sm:pb-5">

                    <h3 className="text-[25px] font-black leading-none tracking-[-0.045em] sm:text-[30px]">
                      {service.title}
                    </h3>

                    <p className="sg-field-service-text mt-3 max-w-[620px] text-xs font-medium leading-6 text-[#16141B]/45">
                      {service.text}
                    </p>

                  </div>

                  <div className="hidden items-center justify-center sm:flex">
                    <ArrowUpRight
                      size={21}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                </button>
              );
            })}

          </div>
        </div>

        {/* =======================================================
            APPROACH SECTION
        ======================================================= */}

        <div className="mt-24 lg:mt-32">

          <div className="grid overflow-hidden bg-[#16141B] lg:grid-cols-[0.9fr_1.1fr]">

            <div className="relative min-h-[420px] overflow-hidden bg-[#6055A6] p-8 sm:p-12 lg:p-14">

              <span className="absolute -bottom-12 -right-5 select-none text-[240px] font-black leading-none tracking-[-0.15em] text-white/[0.08]">
                02
              </span>

              <div className="relative z-10">

                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/55">
                  02 / Our Method
                </span>

                <h2 className="mt-8 max-w-[520px] text-[45px] font-black leading-[0.86] tracking-[-0.065em] text-white sm:text-[60px]">
                  Don't guess

                  <span className="block text-white/40">
                    what's happening.
                  </span>

                  Investigate it.
                </h2>

                <div className="mt-10 flex items-center gap-3">

                  <span className="flex h-9 w-9 items-center justify-center border border-white/25">
                    <Check size={15} strokeWidth={3} />
                  </span>

                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/65">
                    Property-focused service
                  </span>

                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12 lg:p-14">

              <div className="flex items-center justify-between border-b border-white/10 pb-6">

                <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/35">
                  Field Process
                </span>

                <Crosshair
                  size={18}
                  className="text-[#AFA8DE]"
                />

              </div>

              <div className="mt-8">

                {[
                  {
                    no: "01",
                    title: "Inspect",
                    text: "Look at visible signs, affected areas and possible access points.",
                  },
                  {
                    no: "02",
                    title: "Assess",
                    text: "Understand the likely source and the conditions supporting activity.",
                  },
                  {
                    no: "03",
                    title: "Respond",
                    text: "Recommend a practical pest control approach for the property.",
                  },
                ].map((item) => (
                  <div
                    key={item.no}
                    className="grid grid-cols-[55px_1fr] border-b border-white/10 py-7 last:border-b-0"
                  >

                    <span className="text-[9px] font-black tracking-[0.18em] text-[#AFA8DE]">
                      {item.no}
                    </span>

                    <div>
                      <h3 className="text-[25px] font-black tracking-[-0.035em] text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-[500px] text-xs font-medium leading-6 text-white/40">
                        {item.text}
                      </p>
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            LOCATION / CONTACT
        ======================================================= */}

        <div className="mt-20 grid border-y border-[#16141B]/10 lg:grid-cols-[1fr_auto_1fr]">

          <div className="flex gap-5 p-7 sm:p-9">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#6055A6] text-white">
              <MapPin size={19} />
            </div>

            <div>
              <span className="block text-[8px] font-black uppercase tracking-[0.25em] text-[#16141B]/35">
                Marylebone Base
              </span>

              <address className="mt-3 not-italic text-sm font-black leading-6 text-[#16141B]/75">
                {LOCAL.address}
              </address>
            </div>

          </div>

          <div className="hidden w-px bg-[#16141B]/10 lg:block" />

          <a
            href={`tel:${LOCAL.phoneTel}`}
            className="group flex items-center justify-between gap-6 border-t border-[#16141B]/10 p-7 sm:p-9 lg:border-t-0"
          >

            <div>
              <span className="block text-[8px] font-black uppercase tracking-[0.25em] text-[#16141B]/35">
                Direct Contact
              </span>

              <span className="mt-3 block text-xl font-black tracking-[-0.035em] text-[#6055A6]">
                {LOCAL.phoneDisplay}
              </span>
            </div>

            <span className="flex h-12 w-12 items-center justify-center bg-[#16141B] text-white transition-transform duration-300 group-hover:translate-x-1">
              <Phone size={17} />
            </span>

          </a>
        </div>

        {/* =======================================================
            FINAL CTA
        ======================================================= */}

        <div className="relative mt-16 overflow-hidden bg-[#6055A6] px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">

          <div className="pointer-events-none absolute right-0 top-0 h-full w-[35%] border-l border-white/10">

            <div className="absolute right-12 top-12 h-32 w-32 rounded-full border border-white/10" />

            <div className="absolute right-24 top-24 h-8 w-8 rounded-full bg-white/10" />

          </div>

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>

              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/55">
                Need Pest Control?
              </span>

              <h2 className="mt-5 max-w-[850px] text-[43px] font-black leading-[0.88] tracking-[-0.07em] text-white sm:text-[60px] lg:text-[76px]">

                Tell us what's

                <span className="block text-white/40">
                  happening.
                </span>

              </h2>

              <p className="mt-6 max-w-[570px] text-sm font-medium leading-7 text-white/60">
                Contact {LOCAL.shortName} for practical pest control
                support across {LOCAL.area}, London.
              </p>

            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">

              <button
                type="button"
                onClick={() => navigate("/contact-us")}
                className="group flex min-h-[58px] min-w-[235px] items-center justify-between gap-8 bg-white px-7 text-[9px] font-black uppercase tracking-[0.18em] text-[#16141B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#16141B] hover:text-white"
              >
                Send An Enquiry

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="flex min-h-[58px] items-center justify-center gap-3 border border-white/25 px-7 text-[9px] font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <Phone size={15} />
                Call {LOCAL.phoneDisplay}
              </a>

            </div>
          </div>
        </div>

        {/* =======================================================
            FOOTER MICRO DATA
        ======================================================= */}

        <div className="mt-7 flex flex-col gap-3 text-[8px] font-black uppercase tracking-[0.18em] text-[#16141B]/30 sm:flex-row sm:items-center sm:justify-between">

          <span>{LOCAL.company}</span>

          <span>{LOCAL.address}</span>

          <span className="text-[#6055A6]">
            {LOCAL.area} · {LOCAL.postcode}
          </span>

        </div>
      </div>
    </section>
  );
}