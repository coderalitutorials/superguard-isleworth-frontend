








// import React from 'react'
// import HeroSection from '../components/HeroSection'




// import AboutIntroSection from '../components/AboutIntro'
// import MissionBannerSection from '../components/MissionBannerSection'

// import PrimeShieldTestimonials from '../components/PrimeShieldTestimonials'
// import SuperGuardServicesSection from '../components/IronServices'


// const Home = () => {
//   return (
//     <div>
//       <HeroSection/>
//       <AboutIntroSection/>
   
//         <SuperGuardServicesSection/>
//       <MissionBannerSection/>
    
   
   
     
//     </div>
//   )
// }

// export default Home






















import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Home,
  MapPin,
  Phone,
  Rat,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Bug,
  Building2,
  Wrench,
  Mail,
  ChevronDown,
} from "lucide-react";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const LOCAL = {
    company: "SuperGuard Services Isleworth",
    shortName: "SuperGuard Isleworth",
    area: "Isleworth",
    city: "London",
    postcode: "TW7 7HG",
    streetAddress: "71 Talbot Rd",
    fullAddress:
      "71 Talbot Rd, Isleworth TW7 7HG, United Kingdom",
    phoneDisplay: "7405 940152",
    phoneTel: "+447405940152",
  };

  /* =========================================================
     SAME API ENDPOINT
  ========================================================= */

  const API_URL =
    "http://localhost:5000/api/callback";

  /* =========================================================
     SERVICES
  ========================================================= */

  const services = [
    {
      number: "01",
      title: "Rats & Mice",
      label: "RODENT CONTROL",
      image: "/images/rodents.webp",
      icon: Rat,
      description:
        "Professional rodent control for houses, flats, lofts, gardens and commercial properties.",
    },
    {
      number: "02",
      title: "Bed Bugs",
      label: "BED BUG TREATMENT",
      image: "/images/bedbugs.webp",
      icon: Bug,
      description:
        "Focused treatment for active bed bug infestations with attention to harbourage and affected areas.",
    },
    {
      number: "03",
      title: "Wasp Nests",
      label: "WASP CONTROL",
      image: "/images/wasps.webp",
      icon: ShieldCheck,
      description:
        "Professional treatment for wasp nests around roofs, walls, gardens and surrounding areas.",
    },
  ];

  /* =========================================================
     WHY US
  ========================================================= */

  const reasons = [
    {
      no: "01",
      title: "Local knowledge",
      text:
        "A focused service for properties throughout Isleworth and nearby areas.",
      icon: MapPin,
    },
    {
      no: "02",
      title: "Inspection first",
      text:
        "We consider signs of activity, location and possible access points before deciding on a response.",
      icon: Search,
    },
    {
      no: "03",
      title: "Clear treatment",
      text:
        "The approach is kept straightforward so you understand the problem and the next steps.",
      icon: Target,
    },
    {
      no: "04",
      title: "Practical prevention",
      text:
        "Where appropriate, useful guidance can help reduce the chance of repeat pest activity.",
      icon: ShieldCheck,
    },
  ];

  /* =========================================================
     PROCESS
  ========================================================= */

  const process = [
    {
      no: "01",
      title: "Contact",
      text:
        "Tell us what you have noticed and where the pest activity is occurring.",
    },
    {
      no: "02",
      title: "Assess",
      text:
        "The property and signs of activity are considered to understand the situation.",
    },
    {
      no: "03",
      title: "Treat",
      text:
        "A suitable treatment approach is selected according to the pest and property.",
    },
    {
      no: "04",
      title: "Protect",
      text:
        "Practical prevention advice can be provided where relevant.",
    },
  ];

  /* =========================================================
     PROPERTY TYPES
  ========================================================= */

  const propertyTypes = [
    {
      title: "Residential",
      text: "Houses, flats and other residential properties.",
      icon: Home,
    },
    {
      title: "Landlords",
      text: "Support for rental and managed properties.",
      icon: Building2,
    },
    {
      title: "Commercial",
      text: "Pest control support for business premises.",
      icon: Wrench,
    },
  ];

  /* =========================================================
     FORM
  ========================================================= */

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number.");
      return;
    }

    setLoading(true);

    try {
      await toast.promise(
        axios.post(API_URL, {
          ...formData,
          area: LOCAL.area,
          business: LOCAL.company,
          address: LOCAL.fullAddress,
        }),
        {
          loading: "Sending your callback request...",
          success: "Your callback request has been sent.",
          error: (error) =>
            error.response?.data?.message ||
            "Something went wrong. Please try again.",
        }
      );

      setFormData({
        name: "",
        postcode: "",
        phone: "",
      });
    } catch (error) {
      // toast.promise handles the visible error
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     REVEAL
  ========================================================= */

  useEffect(() => {
    const elements = document.querySelectorAll(".sg-new-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("sg-new-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("sg-new-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main
      className="overflow-hidden bg-white text-[#15131A]"
      itemScope
      itemType="https://schema.org/PestControl"
    >
      <Toaster position="top-right" />

      <meta itemProp="name" content={LOCAL.company} />
      <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
      <meta
        itemProp="areaServed"
        content={`${LOCAL.area}, ${LOCAL.city}`}
      />
      <meta itemProp="address" content={LOCAL.fullAddress} />

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .sg-new-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sg-new-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sg-delay-1 {
          transition-delay: 100ms;
        }

        .sg-delay-2 {
          transition-delay: 180ms;
        }

        .sg-delay-3 {
          transition-delay: 260ms;
        }

        .sg-img {
          transition:
            transform 900ms cubic-bezier(0.16, 1, 0.3, 1),
            filter 500ms ease;
        }

        .sg-img-wrap:hover .sg-img {
          transform: scale(1.045);
        }

        .sg-line {
          position: relative;
        }

        .sg-line::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 0;
          height: 1px;
          background: #6055A6;
          transition: width 400ms ease;
        }

        .sg-line:hover::after {
          width: 100%;
        }

        .sg-service-row {
          transition:
            background-color 300ms ease,
            padding 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sg-service-row:hover {
          background: #F7F6FA;
        }

        .sg-service-row:hover .sg-service-image {
          transform: scale(1.035);
        }

        .sg-service-image {
          transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sg-arrow {
          transition:
            transform 300ms ease,
            background-color 300ms ease,
            color 300ms ease;
        }

        .sg-service-row:hover .sg-arrow {
          transform: translateX(5px);
          background: #6055A6;
          color: white;
        }

        .sg-reason {
          transition:
            transform 350ms ease,
            border-color 350ms ease;
        }

        .sg-reason:hover {
          transform: translateX(7px);
          border-color: rgba(96,85,166,0.35);
        }

        .sg-reason:hover .sg-reason-no {
          background: #6055A6;
          color: white;
        }

        .sg-reason-no {
          transition:
            background-color 300ms ease,
            color 300ms ease;
        }

        .sg-input {
          transition:
            border-color 250ms ease,
            background-color 250ms ease;
        }

        .sg-input:focus {
          border-color: #6055A6;
          background: white;
        }

        .sg-cta {
          transition:
            transform 250ms ease,
            background-color 250ms ease;
        }

        .sg-cta:hover {
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .sg-new-reveal,
          .sg-img,
          .sg-service-image,
          .sg-arrow,
          .sg-reason,
          .sg-cta {
            transition: none;
          }

          .sg-new-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* =====================================================
          HERO — COMPLETELY NEW EDITORIAL LAYOUT
      ====================================================== */}

      <section className="relative bg-[#6055A6] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full border border-white/[0.06]" />
          <div className="absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border-[70px] border-[#6055A6]/10" />
          <div className="absolute bottom-[-250px] left-[-150px] h-[500px] w-[500px] rounded-full bg-[#6055A6]/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

         

          {/* HERO */}

          <div className="grid min-h-[730px] items-center gap-16 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24 lg:py-20">

            <div className="sg-new-reveal">

              <div className="flex items-center gap-4">
                <span className="h-px w-14 bg-[#A59ED8]" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#A59ED8]">
                  Isleworth & Nearby Areas
                </span>
              </div>

              <h1 className="mt-8 max-w-[900px] text-[57px] font-black leading-[0.88] tracking-[-0.075em] sm:text-[76px] md:text-[92px] lg:text-[108px]">
                Pest control
                <span className="block text-white/25">
                  with a
                </span>
                clear plan.
              </h1>

              <p className="mt-9 max-w-[620px] text-[15px] leading-7 text-white/55 sm:text-[16px]">
                Professional pest control for homes, landlords and
                businesses across Isleworth and nearby areas.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="sg-cta inline-flex items-center gap-3 bg-[#6055A6] px-7 py-4 text-[9px] font-black uppercase tracking-[0.17em] text-white hover:bg-[#51478F]"
                >
                  <Phone size={14} />
                  Call {LOCAL.phoneDisplay}
                  <ArrowUpRight size={15} />
                </a>

                <Link
                  to="/services"
                  className="sg-line inline-flex items-center gap-2 pb-1 text-[9px] font-black uppercase tracking-[0.17em] text-white/65 hover:text-white"
                >
                  Explore Services
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="mt-12 grid max-w-[600px] grid-cols-3 border-t border-white/10 pt-6">
                <div>
                  <p className="text-lg font-black text-white">
                    Isleworth
                  </p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.17em] text-white/30">
                    Local coverage
                  </p>
                </div>

                <div className="border-l border-white/10 pl-5">
                  <p className="text-lg font-black text-white">
                    Local
                  </p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.17em] text-white/30">
                    Service focus
                  </p>
                </div>

                <div className="border-l border-white/10 pl-5">
                  <p className="text-lg font-black text-white">
                    Clear
                  </p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.17em] text-white/30">
                    Process
                  </p>
                </div>
              </div>
            </div>

            {/* FORM — NEW FLAT EDITORIAL STYLE */}

            <div className="sg-new-reveal sg-delay-2 relative">

              <div className="mb-5 flex items-center justify-between">
                <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/30">
                  Request A Callback
                </span>

                <span className="h-px w-16 bg-white/15" />
              </div>

              <div className="border border-white/10 bg-white/[0.035] p-6 sm:p-8">

                <div className="border-b border-white/10 pb-7">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A59ED8]">
                    Tell us what is happening
                  </p>

                  <h2 className="mt-4 text-[34px] font-black leading-[0.95] tracking-[-0.055em] sm:text-[42px]">
                    We’ll help you
                    <span className="block text-white/25">
                      understand the problem.
                    </span>
                  </h2>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-7"
                >
                  <div className="border-b border-white/10 py-1">
                    <label className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="h-11 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20"
                    />
                  </div>

                  <div className="border-b border-white/10 py-1">
                    <label className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
                      Postcode
                    </label>

                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="Your postcode"
                      className="h-11 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20"
                    />
                  </div>

                  <div className="border-b border-white/10 py-1">
                    <label className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
                      Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="h-11 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="sg-cta mt-7 flex min-h-[54px] w-full items-center justify-between bg-[#6055A6] px-5 text-[9px] font-black uppercase tracking-[0.17em] hover:bg-[#51478F] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>
                      {loading
                        ? "Sending..."
                        : "Request A Callback"}
                    </span>

                    <ArrowUpRight size={16} />
                  </button>
                </form>

                <div className="mt-5 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.14em] text-white/25">
                  <ShieldCheck
                    size={13}
                    className="text-[#A59ED8]"
                  />
                  Local Isleworth service
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HERO BOTTOM MARKER */}

        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
              Residential / Commercial
            </span>

            <ChevronDown
              size={15}
              className="text-white/25"
            />

            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
              Isleworth / London
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION — BIG TYPOGRAPHY
      ====================================================== */}

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.35fr_1.65fr] lg:gap-16">

            <div className="sg-new-reveal">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
                01 / The SuperGuard Approach
              </p>

              <div className="mt-7 h-px w-16 bg-[#6055A6]" />
            </div>

            <div className="sg-new-reveal sg-delay-1">
              <h2 className="max-w-[1100px] text-[44px] font-black leading-[0.94] tracking-[-0.065em] sm:text-[62px] lg:text-[76px]">
                A pest problem is easier to deal with when you know
                <span className="text-[#6055A6]">
                  {" "}what you’re dealing with.
                </span>
              </h2>

              <div className="mt-10 grid gap-10 border-t border-black/10 pt-8 md:grid-cols-2">

                <p className="text-[15px] leading-7 text-black/50">
                  SuperGuard Services Isleworth provides professional pest
                  control for residential and commercial properties. We
                  focus on understanding the pest activity and the property
                  before deciding on an appropriate response.
                </p>

                <p className="text-[15px] leading-7 text-black/50">
                  From rodents and bed bugs to wasp nests, our aim is to
                  keep the process practical and straightforward — identify
                  the issue, treat it appropriately and explain the next
                  steps.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT — ASYMMETRIC IMAGE + TEXT
      ====================================================== */}

      <section className="bg-[#F7F6FA]">
        <div className="grid lg:grid-cols-2">

          <div className="sg-new-reveal sg-img-wrap min-h-[560px] lg:min-h-[720px]">
            <img
              src="/images/about-superguard.webp"
              alt="SuperGuard Services Isleworth pest control"
              className="sg-img h-full min-h-[560px] w-full object-cover lg:min-h-[720px]"
              loading="lazy"
            />

            <div className="absolute bottom-0 left-0 bg-[#6055A6] px-7 py-6 text-white sm:px-10">
              <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/50">
                Local Focus
              </p>

              <p className="mt-2 text-lg font-black tracking-[-0.03em]">
                Isleworth & nearby areas
              </p>
            </div>
          </div>

          <div className="flex items-center px-6 py-20 sm:px-10 sm:py-28 lg:px-16 xl:px-24">

            <div className="sg-new-reveal max-w-[620px]">

              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
                About Us
              </p>

              <h2 className="mt-6 text-[45px] font-black leading-[0.94] tracking-[-0.06em] sm:text-[60px]">
                Local service.
                <span className="block text-black/25">
                  Practical thinking.
                </span>
              </h2>

              <p className="mt-8 text-[15px] leading-7 text-black/50">
                SuperGuard Services Isleworth is focused on helping
                property owners and occupiers deal with common pest
                problems through a clear and considered approach.
              </p>

              <div className="mt-10 space-y-0 border-t border-black/10">

                {[
                  "Residential properties",
                  "Landlords & rental properties",
                  "Commercial premises",
                  "Isleworth & nearby areas",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 border-b border-black/10 py-5"
                  >
                    <span className="text-[9px] font-black text-[#6055A6]">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-bold text-black/65">
                      {item}
                    </span>

                    <Check
                      size={15}
                      className="ml-auto text-[#6055A6]"
                    />
                  </div>
                ))}
              </div>

              <Link
                to="/about-us"
                className="sg-line mt-9 inline-flex items-center gap-3 pb-2 text-[9px] font-black uppercase tracking-[0.17em] text-[#6055A6]"
              >
                More About SuperGuard
                <ArrowUpRight size={15} />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES — EDITORIAL LIST, NOT CARDS
      ====================================================== */}

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="sg-new-reveal grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
                02 / Services
              </p>

              <h2 className="mt-5 max-w-[850px] text-[50px] font-black leading-[0.9] tracking-[-0.07em] sm:text-[72px]">
                What can we
                <span className="text-black/20">
                  {" "}help with?
                </span>
              </h2>
            </div>

            <Link
              to="/services"
              className="sg-line inline-flex items-center gap-2 pb-2 text-[9px] font-black uppercase tracking-[0.17em] text-[#6055A6]"
            >
              All Services
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.number}
                  to="/services"
                  className={`sg-new-reveal sg-service-row group grid items-center gap-8 border-b border-black/10 py-8 sm:py-10 lg:grid-cols-[90px_280px_1fr_auto] lg:gap-10 lg:py-12 ${
                    index === 0 ? "lg:pt-10" : ""
                  }`}
                >
                  <div className="flex items-center justify-between lg:block">
                    <span className="text-[11px] font-black tracking-[0.12em] text-[#6055A6]">
                      {service.number}
                    </span>

                    <Icon
                      size={19}
                      className="text-black/20 lg:mt-8"
                    />
                  </div>

                  <div className="sg-img-wrap relative h-[210px] overflow-hidden sm:h-[270px] lg:h-[185px]">
                    <img
                      src={service.image}
                      alt={`${service.title} pest control in Isleworth`}
                      className="sg-service-image h-full w-full object-cover"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#6055A6]">
                      {service.label}
                    </p>

                    <h3 className="mt-3 text-[35px] font-black leading-none tracking-[-0.055em] sm:text-[45px]">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-[520px] text-sm leading-6 text-black/45">
                      {service.description}
                    </p>
                  </div>

                  <span className="sg-arrow flex h-12 w-12 items-center justify-center border border-black/10 bg-white text-[#6055A6]">
                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          DARK STATEMENT SECTION
      ====================================================== */}

      <section className="bg-[#24212D] py-24 text-white sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">

            <div className="sg-new-reveal">

              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#A59ED8]">
                03 / Why SuperGuard
              </p>

              <div className="mt-8 h-px w-16 bg-[#6055A6]" />

              <h2 className="mt-8 max-w-[480px] text-[50px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[67px]">
                Simple
                <span className="block text-white/20">
                  decisions.
                </span>
                Clear
                <span className="block text-[#A59ED8]">
                  direction.
                </span>
              </h2>

              <p className="mt-8 max-w-[450px] text-[15px] leading-7 text-white/45">
                Good pest control starts with understanding the situation,
                rather than simply treating what is immediately visible.
              </p>

            </div>

            <div className="sg-new-reveal sg-delay-1">

              <div className="border-t border-white/10">

                {reasons.map((reason) => {
                  const Icon = reason.icon;

                  return (
                    <div
                      key={reason.no}
                      className="sg-reason grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:py-9"
                    >

                      <span className="sg-reason-no flex h-11 w-11 items-center justify-center border border-white/10 text-[9px] font-black text-white/35">
                        {reason.no}
                      </span>

                      <div>
                        <h3 className="text-xl font-black tracking-[-0.025em]">
                          {reason.title}
                        </h3>

                        <p className="mt-2 max-w-[520px] text-sm leading-6 text-white/35">
                          {reason.text}
                        </p>
                      </div>

                      <Icon
                        size={20}
                        className="hidden text-[#A59ED8] sm:block"
                      />

                    </div>
                  );
                })}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION — IMAGE OVERLAP
      ====================================================== */}

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-24">

            <div className="sg-new-reveal">

              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
                04 / Our Mission
              </p>

              <h2 className="mt-6 max-w-[750px] text-[50px] font-black leading-[0.9] tracking-[-0.07em] sm:text-[72px]">
                Solve the
                <span className="block text-[#6055A6]">
                  problem.
                </span>
                Protect the
                <span className="block text-black/20">
                  property.
                </span>
              </h2>

              <p className="mt-9 max-w-[600px] text-[15px] leading-7 text-black/50">
                Pest activity can involve hidden harbourage, access points
                and conditions around a property. Our approach is therefore
                focused on understanding the wider situation and taking
                practical steps.
              </p>

              <div className="mt-9 grid max-w-[620px] gap-3 sm:grid-cols-2">
                {[
                  "Understand the activity",
                  "Consider the property",
                  "Choose a suitable response",
                  "Reduce repeat activity",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-l-2 border-[#6055A6] bg-[#F7F6FA] px-4 py-4"
                  >
                    <Check
                      size={14}
                      className="text-[#6055A6]"
                    />

                    <span className="text-xs font-bold text-black/60">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            <div className="sg-new-reveal sg-delay-2 relative">

              <div className="absolute -left-5 -top-5 hidden h-40 w-40 bg-[#6055A6]/10 sm:block" />

              <div className="relative overflow-hidden">
                <img
                  src="/images/mission-superguard.webp"
                  alt="SuperGuard Services mission"
                  className="sg-img h-[520px] w-full object-cover sm:h-[650px]"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-0 right-0 bg-[#6055A6] px-6 py-5 text-white sm:px-8 sm:py-6">
                <Sparkles size={18} />

                <p className="mt-3 text-[8px] font-black uppercase tracking-[0.2em] text-white/50">
                  SuperGuard
                </p>

                <p className="mt-1 text-sm font-black">
                  Protecting local properties
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS — HORIZONTAL EDITORIAL
      ====================================================== */}

      <section className="bg-[#F7F6FA] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="sg-new-reveal">

            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
              05 / How It Works
            </p>

            <h2 className="mt-5 max-w-[900px] text-[50px] font-black leading-[0.9] tracking-[-0.07em] sm:text-[70px]">
              From first contact
              <span className="text-black/20">
                {" "}to next steps.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid border-t border-black/10 lg:grid-cols-4">

            {process.map((step, index) => (
              <div
                key={step.no}
                className={`sg-new-reveal ${
                  index > 0
                    ? "border-t border-black/10 lg:border-l lg:border-t-0"
                    : ""
                } p-7 sm:p-9 lg:min-h-[330px] lg:p-8 xl:p-10`}
              >

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-[#6055A6]">
                    {step.no}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-black/20"
                  />
                </div>

                <h3 className="mt-20 text-2xl font-black tracking-[-0.04em]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-black/45">
                  {step.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          PROPERTY TYPES
      ====================================================== */}

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            <div className="sg-new-reveal">

              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
                06 / Who We Help
              </p>

              <h2 className="mt-6 text-[48px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[62px]">
                Different
                <span className="block text-black/20">
                  properties.
                </span>
                Same clear
                <span className="block text-[#6055A6]">
                  approach.
                </span>
              </h2>

            </div>

            <div className="sg-new-reveal sg-delay-1">

              {propertyTypes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-center gap-6 border-b border-black/10 py-7 sm:py-9"
                  >

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F7F6FA] text-[#6055A6] transition group-hover:bg-[#6055A6] group-hover:text-white">
                      <Icon size={19} />
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[8px] font-black text-[#6055A6]">
                          0{index + 1}
                        </span>

                        <h3 className="text-xl font-black tracking-[-0.025em]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-black/40">
                        {item.text}
                      </p>
                    </div>

                    <ArrowRight
                      size={16}
                      className="ml-auto text-black/20 transition group-hover:translate-x-1 group-hover:text-[#6055A6]"
                    />

                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCAL COVERAGE — NEW MAP-STYLE PANEL
      ====================================================== */}

      <section className="bg-[#F7F6FA] py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="grid overflow-hidden bg-[#24212D] lg:grid-cols-[1.2fr_0.8fr]">

            <div className="relative min-h-[500px] overflow-hidden p-8 text-white sm:p-12 lg:min-h-[600px] lg:p-16">

              <div className="absolute inset-0 opacity-60">
                <div className="absolute left-[15%] top-[20%] h-[1px] w-[70%] rotate-[12deg] bg-white/10" />
                <div className="absolute left-[5%] top-[45%] h-[1px] w-[80%] rotate-[-17deg] bg-white/10" />
                <div className="absolute left-[25%] top-[70%] h-[1px] w-[60%] rotate-[8deg] bg-white/10" />
                <div className="absolute left-[50%] top-[5%] h-[90%] w-[1px] rotate-[20deg] bg-white/10" />
                <div className="absolute left-[30%] top-[10%] h-[80%] w-[1px] rotate-[-28deg] bg-white/10" />
              </div>

              <div className="absolute left-[42%] top-[38%] flex h-24 w-24 items-center justify-center rounded-full border border-[#6055A6]/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6055A6] shadow-[0_0_0_15px_rgba(96,85,166,0.12)]">
                  <MapPin size={20} />
                </div>
              </div>

              <div className="relative z-10">

                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#A59ED8]">
                  07 / Local Coverage
                </p>

                <h2 className="mt-6 max-w-[650px] text-[48px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[68px]">
                  Based in
                  <span className="block text-white/20">
                    Isleworth.
                  </span>
                  Serving
                  <span className="block text-[#A59ED8]">
                    nearby areas.
                  </span>
                </h2>

              </div>

              <div className="absolute bottom-8 left-8 right-8 z-10 flex items-end justify-between border-t border-white/10 pt-5 sm:bottom-12 sm:left-12 sm:right-12 lg:bottom-16 lg:left-16 lg:right-16">

                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
                    Base
                  </p>

                  <p className="mt-2 text-sm font-bold text-white/70">
                    {LOCAL.area}, London
                  </p>
                </div>

                <MapPin
                  size={17}
                  className="text-[#A59ED8]"
                />

              </div>
            </div>

            <div className="flex flex-col justify-between bg-[#6055A6] p-8 text-white sm:p-12 lg:p-14">

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/45">
                  Local Address
                </p>

                <p className="mt-5 max-w-[360px] text-[24px] font-black leading-[1.05] tracking-[-0.04em] sm:text-[31px]">
                  {LOCAL.streetAddress}
                  <span className="block text-white/45">
                    {LOCAL.area} {LOCAL.postcode}
                  </span>
                </p>
              </div>

              <div className="mt-16">

                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/45">
                  Call SuperGuard
                </p>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="mt-4 block text-[27px] font-black tracking-[-0.04em] sm:text-[35px]"
                >
                  {LOCAL.phoneDisplay}
                </a>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="sg-cta mt-7 inline-flex items-center gap-3 bg-[#24212D] px-6 py-4 text-[9px] font-black uppercase tracking-[0.17em] hover:bg-[#15131A]"
                >
                  <Phone size={14} />
                  Call Local Team
                  <ArrowUpRight size={14} />
                </a>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA — COMPLETELY DIFFERENT
      ====================================================== */}

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="sg-new-reveal border-y border-black/10 py-14 sm:py-20 lg:py-24">

            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
                  SuperGuard Services Isleworth
                </p>

                <h2 className="mt-6 max-w-[1000px] text-[52px] font-black leading-[0.86] tracking-[-0.075em] sm:text-[75px] lg:text-[94px]">
                  Got a pest
                  <span className="text-black/20">
                    {" "}problem?
                  </span>
                  <span className="block text-[#6055A6]">
                    Let’s deal with it.
                  </span>
                </h2>

                <p className="mt-8 max-w-[580px] text-[15px] leading-7 text-black/45">
                  Contact SuperGuard Services Isleworth to discuss the
                  pest activity affecting your property.
                </p>

              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="sg-cta inline-flex min-h-[58px] items-center justify-center gap-3 bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[0.17em] text-white hover:bg-[#51478F]"
                >
                  <Phone size={15} />
                  {LOCAL.phoneDisplay}
                  <ArrowUpRight size={15} />
                </a>

                <Link
                  to="/contact-us"
                  className="sg-cta inline-flex min-h-[58px] items-center justify-center gap-3 border border-black/10 px-7 text-[9px] font-black uppercase tracking-[0.17em] text-black/60 hover:border-[#6055A6] hover:text-[#6055A6]"
                >
                  Send An Enquiry
                  <ArrowRight size={15} />
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          END CONTACT BAR — NOT FOOTER
      ====================================================== */}

      {/* <section className="border-t border-black/10 bg-[#F7F6FA]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">

          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.22em] text-black/30">
              SuperGuard Services Isleworth
            </p>

            <p className="mt-2 text-sm font-bold">
              {LOCAL.fullAddress}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-[#6055A6]"
            >
              <Phone size={14} />
              {LOCAL.phoneDisplay}
            </a>

            <Link
              to="/services"
              className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-black/50 hover:text-[#6055A6]"
            >
              Services
              <ArrowRight size={14} />
            </Link>

            <Link
              to="/contact-us"
              className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-black/50 hover:text-[#6055A6]"
            >
              Contact
              <ArrowRight size={14} />
            </Link>

          </div>

        </div>
      </section> */}
    </main>
  );
}