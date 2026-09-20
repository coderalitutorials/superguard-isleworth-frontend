


// import React, { useEffect } from "react";
// import {
//   ShieldCheck,
//   Phone,
//   MapPin,
//   CheckCircle2,
//   SearchCheck,
//   Home,
//   ClipboardCheck,
// } from "lucide-react";

// export default function WhyChooseSuperGuard() {
//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     baseAddress: "36 Sutherland Square, London SE17 3EE",
//     businessName: "SuperGuard Walworth",
//     phone: "07466 565503",
//     phoneTel: "+447466565503",
//   };

//   const reasons = [
//     {
//       icon: SearchCheck,
//       title: "Inspection Before Treatment",
//       text: "We check pest signs, hiding places and entry routes first, so treatment is based on what is actually happening.",
//     },
//     {
//       icon: Home,
//       title: "Walworth Property Knowledge",
//       text: "Our service fits SE17 flats, houses, landlords, shops, offices and shared buildings.",
//     },
//     {
//       icon: ClipboardCheck,
//       title: "Clear Aftercare Advice",
//       text: "You get simple guidance on what was found, what was treated and how to reduce pest return risks.",
//     },
//   ];

//   useEffect(() => {
//     const items = document.querySelectorAll(".why-showcase-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting)
//             entry.target.classList.add("why-showcase-show");
//         });
//       },
//       { threshold: 0.18 }
//     );

//     items.forEach((item) => observer.observe(item));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#F8F6FF] py-24 lg:py-32">
//       <style>{`
//         .why-showcase-animate {
//           opacity: 0;
//           transform: translateY(28px);
//           transition:
//             opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .why-showcase-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .why-delay-1 { transition-delay: 100ms; }
//         .why-delay-2 { transition-delay: 180ms; }
//         .why-delay-3 { transition-delay: 260ms; }
//         .why-delay-4 { transition-delay: 340ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .why-showcase-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute left-0 top-0 h-[520px] w-full bg-[#5F52B5]" />
//         <div className="absolute left-[-130px] top-[-90px] h-[430px] w-[430px] rounded-full bg-white/18 blur-3xl" />
//         <div className="absolute right-[-140px] top-32 h-[480px] w-[480px] rounded-full bg-[#17122F]/18 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         {/* HEADER */}
//         <div className="why-showcase-animate grid gap-8 lg:grid-cols-12 lg:items-end">
//           <div className="lg:col-span-8">
//             <span className="inline-flex bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#5F52B5] shadow-xl">
//               Why Choose {LOCAL.businessName}
//             </span>

//             <h2 className="mt-7 max-w-5xl text-4xl font-black leading-[0.94] tracking-tight text-white sm:text-5xl lg:text-7xl">
//               Practical Pest Control With A Clear Local Process.
//             </h2>
//           </div>

//           <p className="lg:col-span-4 text-base font-medium leading-relaxed text-white/82">
//             We keep pest control simple, organised and property-focused — from
//             first inspection to treatment and aftercare advice.
//           </p>
//         </div>

//         {/* MAIN LAYOUT */}
//         <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:items-stretch">
//           {/* LEFT IMAGE CARD */}
//           <div className="why-showcase-animate why-delay-1 lg:col-span-5">
//             <div className="relative h-full min-h-[620px] overflow-hidden bg-[#17122F] shadow-2xl shadow-[#17122F]/20">
//               <img
//                 src="/images/why-choose.webp"
//                 alt={`${LOCAL.businessName} pest control service in ${LOCAL.area}`}
//                 className="absolute inset-0 h-full w-full object-cover opacity-80"
//                 loading="lazy"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#17122F] via-[#17122F]/35 to-transparent" />

//               <div className="absolute left-6 top-6 bg-white px-5 py-4 shadow-xl">
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                   Area Covered
//                 </span>
//                 <span className="block text-xl font-black text-[#17122F]">
//                   {LOCAL.area} {LOCAL.postcode}
//                 </span>
//               </div>

//               <div className="absolute bottom-6 left-6 right-6 bg-white p-6 shadow-2xl">
//                 <div className="flex items-start gap-4">
//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#5F52B5] text-white">
//                     <ShieldCheck className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <h3 className="text-2xl font-black text-[#17122F]">
//                       Inspection-Led Treatments
//                     </h3>
//                     <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">
//                       We focus on the reason pests are appearing, not only the
//                       visible activity.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT REASON WALL */}
//           <div className="lg:col-span-7">
//             <div className="grid h-full gap-6">
//               {reasons.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className={`why-showcase-animate why-delay-${
//                       index + 1
//                     } group bg-white p-7 shadow-xl shadow-[#17122F]/7 transition-all hover:-translate-y-1`}
//                   >
//                     <div className="grid gap-5 md:grid-cols-[90px_1fr_auto] md:items-center">
//                       <div className="flex h-20 w-20 items-center justify-center bg-[#5F52B5] text-white transition-all group-hover:bg-[#17122F]">
//                         <Icon className="h-8 w-8" strokeWidth={2.4} />
//                       </div>

//                       <div>
//                         <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
//                           Reason 0{index + 1}
//                         </span>

//                         <h4 className="mt-2 text-3xl font-black leading-tight text-[#17122F]">
//                           {item.title}
//                         </h4>

//                         <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
//                           {item.text}
//                         </p>
//                       </div>

//                       <CheckCircle2 className="hidden h-8 w-8 text-[#5F52B5] md:block" />
//                     </div>
//                   </div>
//                 );
//               })}

//               <div className="why-showcase-animate why-delay-4 grid gap-6 md:grid-cols-[1fr_0.75fr]">
//                 <div className="bg-[#17122F] p-7 text-white shadow-2xl shadow-[#17122F]/15">
//                   <MapPin className="mb-4 h-6 w-6 text-[#AFA6FF]" />
//                   <span className="block text-[10px] font-black uppercase tracking-widest text-white/45">
//                     Local Base
//                   </span>
//                   <address className="mt-2 not-italic text-xl font-black leading-snug">
//                     {LOCAL.baseAddress}
//                   </address>
//                 </div>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="flex flex-col justify-center bg-[#5F52B5] p-7 text-white shadow-2xl shadow-[#5F52B5]/20 transition-all hover:bg-[#17122F]"
//                 >
//                   <Phone className="mb-4 h-6 w-6" />
//                   <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
//                     Call Walworth Team
//                   </span>
//                   <span className="mt-2 text-3xl font-black">
//                     {LOCAL.phone}
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* TRUST STRIP */}
//         <div className="why-showcase-animate why-delay-4 mt-8 grid gap-4 md:grid-cols-3">
//           {["Inspection First", "SE17 Local Support", "Clear Aftercare"].map(
//             (item) => (
//               <div
//                 key={item}
//                 className="bg-white px-5 py-5 shadow-xl shadow-[#17122F]/6 flex items-center gap-3"
//               >
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#5F52B5] text-white">
//                   <CheckCircle2 className="h-5 w-5" />
//                 </span>

//                 <span className="text-sm font-black text-[#17122F]">{item}</span>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
















import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Home,
  MapPin,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

export default function WhyChooseSuperGuard() {
  const navigate = useNavigate();

  const LOCAL = {
    company: "SuperGuard Services Limited Holborn",
    shortName: "SuperGuard Holborn",
    area: "Holborn",
    city: "London",
    postcode: "WC2R 3JF",
    streetAddress: "50 Essex Street",
    fullAddress: "50 Essex Street, London, WC2R 3JF",
  };

  const reasons = [
    {
      number: "01",
      icon: SearchCheck,
      title: "Inspection Before Treatment",
      text: "We assess pest signs, hiding areas, possible entry routes and property conditions before deciding which treatment approach is suitable.",
    },
    {
      number: "02",
      icon: Home,
      title: "Built Around Holborn Properties",
      text: "Our service is adapted for homes, flats, rental properties, offices, shops and commercial premises throughout Holborn.",
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: "Clear Advice And Aftercare",
      text: "We explain what was identified, what action was taken and which practical steps may help reduce future pest activity.",
    },
  ];

  const trustItems = [
    "Inspection-Led Service",
    "Holborn Property Support",
    "Clear Treatment Planning",
    "Practical Prevention Advice",
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".sg-holborn-why-animate"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("sg-holborn-why-show");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sg-holborn-why-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      itemScope
      itemType="https://schema.org/PestControlService"
      aria-labelledby="why-choose-heading"
      className="relative overflow-hidden bg-[#F7F5FC] py-20 font-sans sm:py-24 lg:py-28"
    >
      <meta itemProp="name" content={LOCAL.company} />

      <meta
        itemProp="areaServed"
        content={`${LOCAL.area}, Central London`}
      />

      <div
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
        className="hidden"
      >
        <meta itemProp="streetAddress" content={LOCAL.streetAddress} />
        <meta itemProp="addressLocality" content={LOCAL.city} />
        <meta itemProp="postalCode" content={LOCAL.postcode} />
        <meta itemProp="addressCountry" content="GB" />
      </div>

      <style>{`
        .sg-holborn-why-animate {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sg-holborn-why-show {
          opacity: 1;
          transform: translateY(0);
        }

        .sg-holborn-why-delay-1 {
          transition-delay: 100ms;
        }

        .sg-holborn-why-delay-2 {
          transition-delay: 180ms;
        }

        .sg-holborn-why-delay-3 {
          transition-delay: 260ms;
        }

        .sg-holborn-why-delay-4 {
          transition-delay: 340ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .sg-holborn-why-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-220px] top-[-200px] h-[580px] w-[580px] rounded-full bg-[#6157A7]/12 blur-[140px]" />

        <div className="absolute bottom-[-240px] right-[-180px] h-[620px] w-[620px] rounded-full bg-[#6157A7]/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(97,87,167,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(97,87,167,0.18) 1px, transparent 1px)",
            backgroundSize: "78px 78px",
          }}
        />
      </div>

      {/* BACKGROUND WORD */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none whitespace-nowrap text-[80px] font-black uppercase leading-none tracking-[-0.08em] text-[#6157A7]/[0.04] sm:text-[130px] lg:text-[205px]"
      >
        Why Us
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14">
        {/* TOP INFORMATION LINE */}
        <div className="sg-holborn-why-animate flex flex-col items-center gap-4 border-b border-[#6157A7]/15 pb-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#6157A7] shadow-[0_0_16px_rgba(97,87,167,0.55)]" />

            <span className="text-[9px] font-black uppercase tracking-[0.24em] text-[#6157A7] sm:text-[10px]">
              Why Choose SuperGuard Holborn
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.14em] text-slate-500 sm:text-[10px] sm:tracking-[0.17em]">
            <MapPin
              size={15}
              strokeWidth={2.4}
              className="shrink-0 text-[#6157A7]"
            />

            {LOCAL.fullAddress}
          </div>
        </div>

        {/* SECTION HEADING */}
        <div className="sg-holborn-why-animate sg-holborn-why-delay-1 mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#6157A7]/55 sm:w-16" />

              <span className="text-[9px] font-black uppercase tracking-[0.27em] text-[#6157A7] sm:text-[10px]">
                A Clear Local Process
              </span>
            </div>

            <h2
              id="why-choose-heading"
              className="mt-6 max-w-[950px] text-[43px] font-black leading-[0.94] tracking-[-0.052em] text-[#171327] sm:text-[58px] md:text-[70px] lg:text-[78px]"
            >
              Practical Pest Control
              <span className="block text-[#6157A7]">
                Built Around Your Property.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-sm font-medium leading-7 text-slate-600 sm:text-base sm:leading-8">
              We keep each stage organised and understandable, from the first
              property inspection to treatment planning and practical
              prevention guidance.
            </p>

            <button
              type="button"
              onClick={() => navigate("/about-us")}
              className="group mt-6 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#171327]"
            >
              About SuperGuard Holborn

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6157A7] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#171327]">
                <ArrowUpRight
                  size={17}
                  strokeWidth={2.6}
                />
              </span>
            </button>
          </div>
        </div>

        {/* MAIN CINEMATIC PANEL */}
        <div className="sg-holborn-why-animate sg-holborn-why-delay-2 relative mt-14 overflow-hidden rounded-[34px] bg-[#171327] shadow-[0_35px_100px_rgba(23,19,39,0.18)] lg:mt-16">
          <div className="relative min-h-[700px] lg:min-h-[720px]">
            <img
              src="/images/why-choose.webp"
              alt={`${LOCAL.company} professional pest control service in ${LOCAL.area}`}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />

            {/* IMAGE OVERLAYS */}
            <div className="absolute inset-0 bg-[#171327]/28" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#171327]/95 via-[#171327]/62 to-[#171327]/12" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#171327]/85 via-transparent to-[#171327]/15" />

            <div className="absolute inset-0 bg-[#6157A7]/12 mix-blend-multiply" />

            {/* PURPLE GLOW */}
            <div className="pointer-events-none absolute -left-28 bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#6157A7]/35 blur-[120px]" />

            {/* TOP BADGES */}
            <div className="absolute left-5 right-5 top-5 flex flex-col gap-3 sm:left-7 sm:right-7 sm:top-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 shadow-xl">
                <MapPin
                  size={16}
                  strokeWidth={2.5}
                  className="text-[#6157A7]"
                />

                <span className="text-[10px] font-black uppercase tracking-[0.17em] text-[#171327]">
                  Holborn • {LOCAL.postcode}
                </span>
              </div>

              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-md">
                <ShieldCheck
                  size={17}
                  strokeWidth={2.4}
                />

                <span className="text-[10px] font-black uppercase tracking-[0.17em]">
                  Inspection-Led Service
                </span>
              </div>
            </div>

            {/* MAIN IMAGE CONTENT */}
            <div className="relative z-10 flex min-h-[700px] items-end p-5 pt-32 sm:p-8 sm:pt-36 lg:min-h-[720px] lg:p-12">
              <div className="max-w-[690px]">
                <span className="text-[9px] font-black uppercase tracking-[0.26em] text-[#C7C1FF] sm:text-[10px]">
                  Property-Focused Pest Control
                </span>

                <h3 className="mt-4 text-4xl font-black leading-[0.96] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                  We Look Beyond The Visible Pest Activity.
                </h3>

                <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/75 sm:text-base sm:leading-8">
                  Our process considers the pest signs, property layout,
                  possible access routes and conditions that may be supporting
                  the problem before treatment begins.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => navigate("/contact-us")}
                    className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#6157A7] px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6157A7]"
                  >
                    Request Pest Support

                    <ArrowUpRight
                      size={17}
                      strokeWidth={2.6}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/services")}
                    className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6157A7]"
                  >
                    Explore Services

                    <ArrowUpRight
                      size={17}
                      strokeWidth={2.6}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* FLOATING ADDRESS PANEL */}
            <div className="absolute bottom-8 right-8 hidden max-w-[300px] rounded-[24px] border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl xl:block">
              <MapPin
                size={23}
                strokeWidth={2.4}
                className="text-[#C7C1FF]"
              />

              <span className="mt-5 block text-[9px] font-black uppercase tracking-[0.22em] text-white/50">
                Local Holborn Base
              </span>

              <address className="mt-2 not-italic text-xl font-black leading-snug text-white">
                {LOCAL.fullAddress}
              </address>
            </div>
          </div>
        </div>

        {/* REASONS */}
        <div className="relative mt-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`sg-holborn-why-animate sg-holborn-why-delay-${
                    index + 1
                  } group relative overflow-hidden rounded-[28px] border border-[#6157A7]/10 bg-white p-6 shadow-[0_20px_60px_rgba(23,19,39,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(23,19,39,0.12)] sm:p-7 lg:p-8`}
                >
                  <div className="pointer-events-none absolute -right-14 -top-16 h-40 w-40 rounded-full bg-[#6157A7]/[0.045]" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#6157A7] text-white shadow-[0_14px_35px_rgba(97,87,167,0.25)] transition-all duration-300 group-hover:bg-[#171327]">
                        <Icon
                          size={28}
                          strokeWidth={2.3}
                        />
                      </div>

                      <span className="text-[10px] font-black tracking-[0.2em] text-[#6157A7]/35">
                        {item.number}
                      </span>
                    </div>

                    <span className="mt-7 block text-[9px] font-black uppercase tracking-[0.22em] text-[#6157A7]">
                      Why Choose Us
                    </span>

                    <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-[#171327] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                      {item.text}
                    </p>

                    <div className="mt-7 h-px w-12 bg-[#6157A7]/35 transition-all duration-500 group-hover:w-24 group-hover:bg-[#6157A7]" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="sg-holborn-why-animate sg-holborn-why-delay-4 mt-8 overflow-hidden rounded-[28px] bg-[#6157A7] px-6 py-7 text-white sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-4 ${
                  index !== trustItems.length - 1
                    ? "lg:border-r lg:border-white/15"
                    : ""
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#6157A7]">
                  <CheckCircle2
                    size={20}
                    strokeWidth={2.7}
                  />
                </span>

                <span className="text-sm font-black leading-snug text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="sg-holborn-why-animate sg-holborn-why-delay-4 relative mt-8 overflow-hidden rounded-[30px] bg-[#171327] px-6 py-8 text-white sm:px-8 lg:px-10 lg:py-10">
          <div className="pointer-events-none absolute -right-14 -top-20 h-56 w-56 rounded-full border-[38px] border-white/[0.04]" />

          <div className="pointer-events-none absolute bottom-[-120px] left-[40%] h-64 w-64 rounded-full bg-[#6157A7]/25 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-4xl">
              <span className="text-[9px] font-black uppercase tracking-[0.24em] text-[#BDB6FF]">
                Local Pest Control Support
              </span>

              <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-4xl">
                A clear process for homes, landlords and businesses throughout
                Holborn.
              </h3>

              <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-white/65">
                Tell us what pest signs you have noticed and our team can help
                you arrange the appropriate next step.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/contact-us")}
              className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-[#6157A7] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6157A7] hover:text-white"
            >
              Contact Our Team

              <ArrowUpRight
                size={17}
                strokeWidth={2.6}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* BUSINESS LINE */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-[#6157A7]/15 pt-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <MapPin
              size={16}
              strokeWidth={2.4}
              className="shrink-0 text-[#6157A7]"
            />

            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#171327]">
              {LOCAL.fullAddress}
            </span>
          </div>

          <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
            Inspection • Treatment • Advice • Prevention
          </span>
        </div>
      </div>
    </section>
  );
}