

// import React, { useEffect } from "react";
// import {
//   CheckCircle,
//   ClipboardCheck,
//   MapPin,
//   PhoneCall,
//   ShieldCheck,
// } from "lucide-react";

// export default function MissionBannerSection() {
//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     businessName: "SuperGuard Walworth",
//     address: "36 Sutherland Square, London SE17 3EE",
//     phoneDisplay: "07466 565503",
//     phoneTel: "+447466565503",
//   };

//   const missionSteps = [
//     {
//       title: "Inspect The Cause",
//       text: "We check pest signs, access routes, hiding spaces and property conditions before choosing the treatment.",
//       icon: ClipboardCheck,
//     },
//     {
//       title: "Treat With Control",
//       text: "The plan is matched to the pest type, activity level and layout of your Walworth property.",
//       icon: ShieldCheck,
//     },
//     {
//       title: "Prevent Re-Activity",
//       text: "We explain practical steps to help reduce future pest activity after the visit.",
//       icon: CheckCircle,
//     },
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(".sg-mission-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("sg-mission-show");
//         });
//       },
//       { threshold: 0.18 }
//     );

//     elements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#F8F6FF] py-24 lg:py-32 font-sans">
//       <style>{`
//         .sg-mission-animate {
//           opacity: 0;
//           transform: translateY(28px);
//           transition:
//             opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sg-mission-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sg-delay-1 { transition-delay: 100ms; }
//         .sg-delay-2 { transition-delay: 180ms; }
//         .sg-delay-3 { transition-delay: 260ms; }
//         .sg-delay-4 { transition-delay: 340ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-mission-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute right-0 top-0 h-full w-full bg-[linear-gradient(110deg,transparent_0%,transparent_52%,#5F52B5_52%,#5F52B5_100%)]" />
//         <div className="absolute left-[-140px] top-20 h-96 w-96 rounded-full bg-[#5F52B5]/12 blur-3xl" />
//         <div className="absolute right-[-140px] bottom-[-100px] h-[460px] w-[460px] rounded-full bg-[#17122F]/20 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
//           {/* LEFT MISSION CONTENT */}
//           <div className="sg-mission-animate lg:col-span-5">
//             <span className="inline-flex bg-[#5F52B5] px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-xl">
//               Our Walworth Mission
//             </span>

//             <h2 className="mt-7 text-4xl font-black leading-[0.95] tracking-tight text-[#17122F] sm:text-5xl lg:text-7xl">
//               Pest Control That Makes The Next Step Clear.
//             </h2>

//             <p className="mt-6 text-lg font-semibold leading-relaxed text-slate-700">
//               At {LOCAL.businessName}, our mission is to make pest control feel
//               organised and understandable. We explain what we find, why the
//               issue may be happening and what treatment makes sense for your
//               property.
//             </p>

//             <div className="mt-8 grid gap-4">
//               {missionSteps.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className={`sg-mission-animate sg-delay-${
//                       index + 1
//                     } group flex gap-4 bg-white p-5 shadow-xl shadow-[#17122F]/6 transition-all hover:-translate-x-1`}
//                   >
//                     <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#5F52B5] text-white transition-all group-hover:bg-[#17122F]">
//                       <Icon className="h-6 w-6" strokeWidth={2.4} />
//                     </div>

//                     <div>
//                       <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
//                         Step 0{index + 1}
//                       </span>
//                       <h4 className="mt-1 text-xl font-black text-[#17122F]">
//                         {item.title}
//                       </h4>
//                       <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">
//                         {item.text}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT VISUAL PANEL */}
//           <div className="sg-mission-animate sg-delay-2 lg:col-span-7">
//             <div className="relative">
//               <div
//                 className="relative overflow-hidden bg-white p-3 shadow-2xl shadow-[#17122F]/20"
//                 style={{
//                   clipPath:
//                     "polygon(8% 0, 100% 0, 92% 100%, 0% 100%)",
//                 }}
//               >
//                 <img
//                   src="/images/mission-superguard.webp"
//                   alt={`${LOCAL.businessName} pest control mission in ${LOCAL.area}`}
//                   className="h-[420px] w-full object-cover md:h-[640px]"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-3 bg-gradient-to-t from-[#17122F]/90 via-[#17122F]/25 to-transparent" />
//               </div>

//               <div className="absolute bottom-8 left-4 right-4 bg-[#17122F] p-6 text-white shadow-2xl md:left-10 md:right-auto md:max-w-md">
//                 <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-[#AFA6FF]">
//                   Built For Local Properties
//                 </span>

//                 <h3 className="mt-2 text-3xl font-black leading-tight">
//                   Homes, Flats, Shops & Businesses In {LOCAL.postcode}
//                 </h3>

//                 <p className="mt-3 text-sm font-medium leading-relaxed text-white/72">
//                   From shared buildings and rental flats to offices and local
//                   businesses, the treatment plan is adapted around the property.
//                 </p>
//               </div>

//               <div className="absolute -right-2 top-8 hidden bg-white p-5 shadow-2xl lg:block">
//                 <MapPin className="mb-4 h-6 w-6 text-[#5F52B5]" />
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                   Local Base
//                 </span>
//                 <address className="mt-2 max-w-[220px] not-italic text-sm font-black leading-relaxed text-[#17122F]">
//                   {LOCAL.address}
//                 </address>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM CTA */}
//         <div className="sg-mission-animate sg-delay-4 mt-12 bg-[#5F52B5] p-6 text-white shadow-2xl shadow-[#5F52B5]/20 md:p-8">
//           <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex items-start gap-4">
//               <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-white text-[#5F52B5]">
//                 <PhoneCall className="h-6 w-6" strokeWidth={2.4} />
//               </div>

//               <div>
//                 <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-white/65">
//                   Need Local Pest Support?
//                 </span>

//                 <h3 className="mt-2 text-2xl font-black sm:text-3xl">
//                   Speak With The {LOCAL.area} Team Today
//                 </h3>

//                 <p className="mt-2 text-sm font-medium text-white/75">
//                   Arrange pest control support around Walworth, Elephant &
//                   Castle, Kennington, Camberwell and nearby SE17 areas.
//                 </p>
//               </div>
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-wider text-[#5F52B5] shadow-xl transition-all hover:bg-[#F4F2FF]"
//             >
//               Call {LOCAL.phoneDisplay}
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
















// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   CheckCircle2,
//   ClipboardCheck,
//   MapPin,
//   ShieldCheck,
// } from "lucide-react";

// export default function MissionBannerSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//     area: "Holborn",
//     city: "London",
//     postcode: "WC2R 3JF",
//     streetAddress: "50 Essex Street",
//     fullAddress: "50 Essex Street, London, WC2R 3JF",
//   };

//   const missionSteps = [
//     {
//       number: "01",
//       title: "Inspect The Cause",
//       text: "We check pest signs, possible access routes, hiding spaces and property conditions before selecting a treatment.",
//       icon: ClipboardCheck,
//     },
//     {
//       number: "02",
//       title: "Treat With Control",
//       text: "The treatment plan is matched to the pest type, activity level and layout of your Holborn property.",
//       icon: ShieldCheck,
//     },
//     {
//       number: "03",
//       title: "Help Prevent Return",
//       text: "We explain practical steps that may help reduce the risk of future pest activity after the service.",
//       icon: CheckCircle2,
//     },
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(".sg-holborn-mission-animate");

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((element) => {
//         element.classList.add("sg-holborn-mission-show");
//       });

//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("sg-holborn-mission-show");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.16,
//         rootMargin: "0px 0px -50px 0px",
//       }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       aria-labelledby="mission-heading"
//       className="relative overflow-hidden bg-[#6157A7] font-sans text-white"
//     >
//       <meta itemProp="name" content={LOCAL.company} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, Central London`}
//       />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta itemProp="streetAddress" content={LOCAL.streetAddress} />
//         <meta itemProp="addressLocality" content={LOCAL.city} />
//         <meta itemProp="postalCode" content={LOCAL.postcode} />
//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       <style>{`
//         .sg-holborn-mission-animate {
//           opacity: 0;
//           transform: translateY(30px);
//           transition:
//             opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sg-holborn-mission-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sg-holborn-delay-1 {
//           transition-delay: 100ms;
//         }

//         .sg-holborn-delay-2 {
//           transition-delay: 180ms;
//         }

//         .sg-holborn-delay-3 {
//           transition-delay: 260ms;
//         }

//         .sg-holborn-delay-4 {
//           transition-delay: 340ms;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-holborn-mission-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       {/* ===================================================== */}
//       {/* CINEMATIC IMAGE AREA */}
//       {/* ===================================================== */}

//       <div className="relative min-h-[820px] overflow-hidden lg:min-h-[860px]">
//         {/* BACKGROUND IMAGE */}
//         <img
//           src="/images/mission-superguard.webp"
//           alt={`${LOCAL.company} professional pest control service in ${LOCAL.area}`}
//           className="absolute inset-0 h-full w-full object-cover object-center"
//           loading="lazy"
//         />

//         {/* PURPLE BRAND TINT */}
//         <div className="absolute inset-0 bg-[#6157A7]/38 mix-blend-multiply" />

//         {/* READABILITY LAYER */}
//         <div className="absolute inset-0 bg-[#171327]/52" />

//         {/* CENTER DEPTH */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(97,87,167,0.05)_0%,rgba(23,19,39,0.24)_56%,rgba(23,19,39,0.58)_100%)]" />

//         {/* TOP / BOTTOM GRADIENT */}
//         <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,19,39,0.45)_0%,rgba(23,19,39,0.04)_34%,rgba(23,19,39,0.08)_62%,rgba(23,19,39,0.82)_100%)]" />

//         {/* PURPLE GLOW */}
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6157A7]/25 blur-[160px]" />

//         {/* GRID */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 opacity-[0.045]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
//             backgroundSize: "76px 76px",
//           }}
//         />

//         {/* LARGE BACKGROUND TEXT */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute left-1/2 top-24 hidden -translate-x-1/2 select-none whitespace-nowrap text-[190px] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.035] lg:block xl:text-[250px]"
//         >
//           Mission
//         </div>

//         {/* MAIN CONTAINER */}
//         <div className="relative z-10 mx-auto flex min-h-[820px] max-w-[1450px] flex-col px-5 py-8 sm:px-8 md:px-10 lg:min-h-[860px] lg:px-14">
//           {/* TOP BAR */}
//           <div className="sg-holborn-mission-animate flex flex-col items-center gap-4 border-b border-white/20 pb-5 text-center sm:flex-row sm:justify-between sm:text-left">
//             <div className="flex items-center gap-3">
//               <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />

//               <span className="text-[9px] font-black uppercase tracking-[0.24em] text-white/85 sm:text-[10px]">
//                 Our Holborn Mission
//               </span>
//             </div>

//             <div className="flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.14em] text-white/70 sm:text-[10px] sm:tracking-[0.17em]">
//               <MapPin
//                 size={15}
//                 strokeWidth={2.4}
//                 className="shrink-0 text-white"
//               />

//               {LOCAL.fullAddress}
//             </div>
//           </div>

//           {/* CENTER CONTENT */}
//           <div className="flex flex-1 items-center justify-center py-14 text-center lg:py-16">
//             <div className="mx-auto flex max-w-[1050px] flex-col items-center">
//               {/* LABEL */}
//               <div className="sg-holborn-mission-animate sg-holborn-delay-1 flex items-center justify-center gap-4">
//                 <span className="h-px w-9 bg-white/65 sm:w-16" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#DDD9FF] sm:text-[10px]">
//                   Clear inspection. Considered treatment.
//                 </span>

//                 <span className="h-px w-9 bg-white/65 sm:w-16" />
//               </div>

//               {/* HEADING */}
//               <h2
//                 id="mission-heading"
//                 className="sg-holborn-mission-animate sg-holborn-delay-2 mt-7 max-w-[1000px] text-[44px] font-black leading-[0.92] tracking-[-0.052em] text-white sm:text-[60px] md:text-[74px] lg:text-[86px]"
//               >
//                 Pest Control That Makes
//                 <span className="block text-[#DCD7FF]">
//                   The Next Step
//                 </span>
//                 Clear.
//               </h2>

//               {/* DESCRIPTION */}
//               <p className="sg-holborn-mission-animate sg-holborn-delay-3 mt-7 max-w-[760px] text-sm font-medium leading-7 text-white/90 sm:text-base sm:leading-8">
//                 At {LOCAL.shortName}, our mission is to make pest control feel
//                 organised and understandable. We explain what we find, why the
//                 problem may be happening and what treatment approach suits the
//                 property.
//               </p>

//               <p className="sg-holborn-mission-animate sg-holborn-delay-3 mt-3 max-w-[760px] text-sm font-medium leading-7 text-white/70 sm:text-base sm:leading-8">
//                 From homes and rental flats to offices and commercial premises,
//                 every service is considered around the pest, property layout
//                 and level of activity found.
//               </p>

//               {/* CTA */}
//               <div className="sg-holborn-mission-animate sg-holborn-delay-4 mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#6157A7] px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-white shadow-[0_18px_50px_rgba(23,19,39,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#776DC1] sm:w-auto"
//                 >
//                   Request Pest Support

//                   <ArrowUpRight
//                     size={17}
//                     strokeWidth={2.6}
//                     className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </Link>

//                 <Link
//                   to="/services"
//                   className="group inline-flex min-h-14 w-full items-center justify-center gap-3 border border-white/70 bg-white/[0.04] px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-white backdrop-blur-[3px] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6157A7] sm:w-auto"
//                 >
//                   Explore Services

//                   <ArrowUpRight
//                     size={17}
//                     strokeWidth={2.6}
//                     className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* BOTTOM INFORMATION */}
//           <div className="sg-holborn-mission-animate sg-holborn-delay-4 grid gap-6 border-t border-white/20 pt-6 text-center sm:grid-cols-3">
//             <div>
//               <span className="block text-[9px] font-black uppercase tracking-[0.22em] text-white/50">
//                 Local Coverage
//               </span>

//               <span className="mt-2 block text-sm font-black text-white">
//                 Holborn & Central London
//               </span>
//             </div>

//             <div>
//               <span className="block text-[9px] font-black uppercase tracking-[0.22em] text-white/50">
//                 Property Support
//               </span>

//               <span className="mt-2 block text-sm font-black text-white">
//                 Homes, Flats & Businesses
//               </span>
//             </div>

//             <div>
//               <span className="block text-[9px] font-black uppercase tracking-[0.22em] text-white/50">
//                 Local Base
//               </span>

//               <span className="mt-2 block text-sm font-black text-white">
//                 {LOCAL.streetAddress}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ===================================================== */}
//       {/* MISSION STEPS */}
//       {/* ===================================================== */}

//       <div className="relative overflow-hidden bg-[#6157A7] py-16 sm:py-20 lg:py-24">
//         {/* WHITE GLOW */}
//         <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-white/10 blur-[130px]" />

//         {/* BACKGROUND WORD */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none whitespace-nowrap text-[82px] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[135px] lg:text-[190px]"
//         >
//           Approach
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1250px] px-5 sm:px-8 md:px-10">
//           {/* HEADING */}
//           <div className="sg-holborn-mission-animate mx-auto max-w-[900px] text-center">
//             <span className="text-[9px] font-black uppercase tracking-[0.28em] text-white/70 sm:text-[10px]">
//               Our Three-Part Mission
//             </span>

//             <h3 className="mt-4 text-3xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
//               A considered approach for every property.
//             </h3>

//             <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-white/70">
//               From the first inspection to prevention guidance, each step is
//               planned around the property and the pest activity discovered.
//             </p>
//           </div>

//           {/* STEPS */}
//           <div className="relative mt-12 lg:mt-14">
//             {/* DESKTOP LINE */}
//             <div className="absolute left-[10%] right-[10%] top-[38px] hidden h-px bg-white/35 lg:block" />

//             <div className="grid gap-7 lg:grid-cols-3 lg:gap-10">
//               {missionSteps.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <article
//                     key={item.title}
//                     className={`sg-holborn-mission-animate sg-holborn-delay-${
//                       index + 1
//                     } group relative flex flex-col items-center text-center`}
//                   >
//                     {/* ICON */}
//                     <div className="relative z-10 flex h-[78px] w-[78px] items-center justify-center rounded-full border-[8px] border-[#6157A7] bg-white text-[#6157A7] shadow-[0_18px_45px_rgba(23,19,39,0.2)] transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-[#171327] group-hover:text-white">
//                       <Icon
//                         size={28}
//                         strokeWidth={2.3}
//                       />

//                       <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#171327] text-[9px] font-black text-white">
//                         {item.number}
//                       </span>
//                     </div>

//                     {/* TEXT */}
//                     <h4 className="mt-6 text-2xl font-black tracking-[-0.03em] text-white">
//                       {item.title}
//                     </h4>

//                     <p className="mt-3 max-w-[330px] text-sm font-medium leading-7 text-white/70">
//                       {item.text}
//                     </p>

//                     <div className="mt-6 h-px w-12 bg-white/45 transition-all duration-300 group-hover:w-24 group-hover:bg-white" />
//                   </article>
//                 );
//               })}
//             </div>
//           </div>

//           {/* BOTTOM CTA PANEL */}
//           <div className="sg-holborn-mission-animate sg-holborn-delay-4 relative mt-16 overflow-hidden border border-white/20 bg-white/[0.09] px-6 py-7 backdrop-blur-md sm:px-8 lg:px-10">
//             <div className="pointer-events-none absolute -right-14 -top-20 h-56 w-56 rounded-full border-[36px] border-white/[0.05]" />

//             <div className="relative flex flex-col items-center gap-7 text-center lg:flex-row lg:justify-between lg:text-left">
//               <div className="max-w-3xl">
//                 <span className="text-[9px] font-black uppercase tracking-[0.24em] text-white/65">
//                   Built For Local Properties
//                 </span>

//                 <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-white sm:text-3xl">
//                   Pest control support for homes, landlords and businesses
//                   throughout Holborn.
//                 </h3>

//                 <p className="mt-3 text-sm font-medium leading-7 text-white/65">
//                   Each treatment plan is adapted around the property, pest type
//                   and level of activity identified during inspection.
//                 </p>
//               </div>

//               <Link
//                 to="/contact-us"
//                 className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 bg-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-[#6157A7] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EEEAFE]"
//               >
//                 Contact Our Team

//                 <ArrowUpRight
//                   size={17}
//                   strokeWidth={2.6}
//                   className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* ADDRESS LINE */}
//           <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
//             <div className="flex items-center gap-2">
//               <MapPin
//                 size={15}
//                 strokeWidth={2.4}
//                 className="text-white/70"
//               />

//               <span className="text-[9px] font-black uppercase tracking-[0.17em] text-white/50">
//                 {LOCAL.fullAddress}
//               </span>
//             </div>

//             <span className="text-[9px] font-black uppercase tracking-[0.17em] text-white/50">
//               Inspection • Treatment • Prevention
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
















// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Building2,
//   CheckCircle2,
//   ClipboardCheck,
//   MapPin,
//   PhoneCall,
//   ShieldCheck,
// } from "lucide-react";

// export default function MissionBannerSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Westminster",
//     shortName: "SuperGuard Westminster",
//     area: "Westminster",
//     city: "London",
//     postcode: "SW1P 4BD",
//     streetAddress: "14 Regency St",
//     fullAddress: "14 Regency St, London SW1P 4BD",
//     phoneDisplay: "07466 936103",
//     phoneTel: "+447466936103",
//   };

//   const missionNotes = [
//     {
//       number: "01",
//       code: "OBSERVE",
//       title: "Understand what the property is showing.",
//       text: "We inspect visible pest signs, possible access routes, hiding spaces and the conditions that may be supporting activity.",
//       icon: ClipboardCheck,
//       rotation: "lg:-rotate-[1.8deg]",
//       position: "lg:translate-x-0",
//     },
//     {
//       number: "02",
//       code: "RESPOND",
//       title: "Match the response to the actual problem.",
//       text: "The treatment approach is selected around the pest involved, the affected space and the level of activity identified.",
//       icon: ShieldCheck,
//       rotation: "lg:rotate-[1.5deg]",
//       position: "lg:translate-x-8",
//     },
//     {
//       number: "03",
//       code: "REDUCE",
//       title: "Make future pest access more difficult.",
//       text: "We explain practical prevention steps that may help reduce access, shelter and repeated pest activity around the property.",
//       icon: CheckCircle2,
//       rotation: "lg:-rotate-[1deg]",
//       position: "lg:translate-x-3",
//     },
//   ];

//   const propertyTypes = [
//     "Homes",
//     "Flats",
//     "Landlords",
//     "Offices",
//     "Commercial premises",
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(
//       ".sg-westminster-mission-animate"
//     );

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((element) => {
//         element.classList.add("sg-westminster-mission-show");
//       });

//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(
//               "sg-westminster-mission-show"
//             );

//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.14,
//         rootMargin: "0px 0px -45px 0px",
//       }
//     );

//     elements.forEach((element) => {
//       observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       aria-labelledby="mission-heading"
//       className="relative overflow-hidden bg-[#EDE8F5] py-20 sm:py-24 lg:py-28"
//     >
//       {/* SCHEMA */}
//       <meta itemProp="name" content={LOCAL.company} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, Central London`}
//       />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta
//           itemProp="streetAddress"
//           content={LOCAL.streetAddress}
//         />

//         <meta
//           itemProp="addressLocality"
//           content={LOCAL.city}
//         />

//         <meta
//           itemProp="postalCode"
//           content={LOCAL.postcode}
//         />

//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       {/* ANIMATION */}
//       <style>{`
//         .sg-westminster-mission-animate {
//           opacity: 0;
//           transform: translateY(28px);
//           transition:
//             opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sg-westminster-mission-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sg-westminster-mission-delay-1 {
//           transition-delay: 100ms;
//         }

//         .sg-westminster-mission-delay-2 {
//           transition-delay: 190ms;
//         }

//         .sg-westminster-mission-delay-3 {
//           transition-delay: 280ms;
//         }

//         .sg-westminster-mission-delay-4 {
//           transition-delay: 370ms;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-westminster-mission-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       {/* PAPER TEXTURE */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.055]"
//         style={{
//           backgroundImage:
//             "radial-gradient(#6254B4 0.75px, transparent 0.75px)",
//           backgroundSize: "13px 13px",
//         }}
//       />

//       <div className="pointer-events-none absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-[#6254B4]/10 blur-[140px]" />

//       <div className="pointer-events-none absolute -right-48 bottom-[-150px] h-[480px] w-[480px] rounded-full border-[80px] border-[#6254B4]/[0.045]" />

//       <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10">
//         {/* DOCUMENT HEADER */}
//         <div className="sg-westminster-mission-animate flex flex-col gap-5 border-y border-[#C9C1D4] py-5 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-4">
//             <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6254B4] text-white">
//               <ShieldCheck size={20} strokeWidth={2.7} />
//             </span>

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.29em] text-[#6254B4]">
//                 Westminster Mission Manifesto
//               </span>

//               <span className="mt-1 block text-xs font-black text-[#181425]">
//                 SuperGuard Services Westminster
//               </span>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[8px] font-black uppercase tracking-[0.17em] text-slate-400">
//             {/* <span>Document: SGW-M01</span> */}

//             <span className="h-1 w-1 rounded-full bg-[#6254B4]" />

//             <span>Area: Westminster</span>

//             <span className="h-1 w-1 rounded-full bg-[#6254B4]" />

//             <span>Purpose: Property Protection</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <MapPin
//               size={15}
//               strokeWidth={2.6}
//               className="shrink-0 text-[#6254B4]"
//             />

//             <span className="text-[8px] font-black uppercase tracking-[0.15em] text-slate-500">
//               {LOCAL.fullAddress}
//             </span>
//           </div>
//         </div>

//         {/* OPEN MANIFESTO */}
//         <div className="relative mt-12 overflow-hidden border border-[#CFC7DA] bg-[#F8F5FC] shadow-[0_40px_100px_rgba(44,33,75,0.12)] lg:mt-16">
//           {/* CENTRAL BOOK FOLD */}
//           <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 hidden w-[34px] -translate-x-1/2 lg:block">
//             <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#BEB5CA]" />

//             <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent to-[#241B36]/[0.055]" />

//             <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-transparent to-white/90" />
//           </div>

//           <div className="grid lg:grid-cols-2">
//             {/* LEFT MANIFESTO PAGE */}
//             <div className="relative flex min-h-[690px] flex-col p-7 sm:p-10 lg:p-14 xl:p-16">
//               <span className="absolute right-7 top-7 text-[9px] font-black tracking-[0.2em] text-[#6254B4]/35">
//                 PAGE 01
//               </span>

//               <div className="pointer-events-none absolute bottom-0 left-14 top-0 hidden w-px bg-[#D5CDDF] sm:block" />

//               <div className="relative sm:pl-10">
//                 <span className="sg-westminster-mission-animate sg-westminster-mission-delay-1 inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//                   <span className="h-2 w-2 rounded-full bg-[#6254B4]" />
//                   Our Local Mission
//                 </span>

//                 <h2
//                   id="mission-heading"
//                   className="sg-westminster-mission-animate sg-westminster-mission-delay-2 mt-7 max-w-[680px] text-[44px] font-black leading-[0.91] tracking-[-0.06em] text-[#181425] sm:text-[60px] lg:text-[64px] xl:text-[74px]"
//                 >
//                   Remove the uncertainty
//                   <span className="block text-[#6254B4]">
//                     before treating the pest.
//                   </span>
//                 </h2>

//                 <div className="sg-westminster-mission-animate sg-westminster-mission-delay-3 mt-9 max-w-xl border-l-2 border-[#6254B4] pl-6">
//                   <p className="m-0 text-[15px] font-medium leading-8 text-slate-600">
//                     Our mission is to make pest control easier to
//                     understand. We begin by examining the property,
//                     identifying visible evidence and considering why the
//                     activity may be continuing.
//                   </p>

//                   <p className="mb-0 mt-4 text-[15px] font-medium leading-8 text-slate-600">
//                     From Westminster homes and rental flats to offices and
//                     commercial premises, the response is planned around
//                     the pest, the layout and the conditions found.
//                   </p>
//                 </div>
//               </div>

//               {/* MISSION NOTE */}
//               <div className="sg-westminster-mission-animate sg-westminster-mission-delay-3 relative mt-10 border-y border-[#D2CADC] py-6 sm:ml-10">
//                 <span className="absolute -top-3 left-0 bg-[#F8F5FC] pr-4 text-[8px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//                   Mission Note
//                 </span>

//                 <p className="m-0 max-w-xl text-xl font-black italic leading-8 tracking-[-0.02em] text-[#312943] sm:text-2xl">
//                   “A clearer inspection leads to a more considered
//                   response.”
//                 </p>
//               </div>

//               {/* PROPERTY INDEX */}
//               <div className="sg-westminster-mission-animate sg-westminster-mission-delay-4 mt-auto pt-10 sm:pl-10">
//                 <span className="text-[8px] font-black uppercase tracking-[0.22em] text-slate-400">
//                   Property Index
//                 </span>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {propertyTypes.map((item, index) => (
//                     <span
//                       key={item}
//                       className="inline-flex items-center gap-2 border border-[#D7D0E0] bg-white px-3 py-2 text-[8px] font-black uppercase tracking-[0.15em] text-[#312943]"
//                     >
//                       <span className="text-[#6254B4]">
//                         0{index + 1}
//                       </span>

//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT CLEAN PHOTO PAGE */}
//             <div className="relative min-h-[650px] overflow-hidden border-t border-[#CFC7DA] bg-[#181425] lg:min-h-[690px] lg:border-l lg:border-t-0">
//               <img
//                 src="/images/mission-superguard.webp"
//                 alt={`${LOCAL.company} professional pest control service in ${LOCAL.area}`}
//                 className="absolute inset-0 h-full w-full object-cover object-center"
//                 loading="lazy"
//               />

//               {/* LIGHT OVERLAY */}
//               <div className="absolute inset-0 bg-[#181425]/20" />

//               {/* BOTTOM READABILITY GRADIENT */}
//               <div className="absolute inset-0 bg-gradient-to-b from-[#181425]/20 via-transparent to-[#181425]/90" />

//               {/* PHOTO REFERENCE */}
//               <div className="absolute left-8 top-8 border border-white/25 bg-[#181425]/45 px-4 py-3 backdrop-blur-md">
//                 <span className="block text-[7px] font-black uppercase tracking-[0.22em] text-white/50">
//                   Field Image
//                 </span>

//                 <span className="mt-1 block text-[9px] font-black uppercase tracking-[0.16em] text-white">
//                   Westminster / SW1P
//                 </span>
//               </div>

//               {/* IMAGE CAPTION */}
//               <div className="absolute bottom-0 left-0 right-0 p-8 text-white sm:p-10">
//                 <span className="text-[8px] font-black uppercase tracking-[0.23em] text-[#C0B8FF]">
//                   Property-Led Pest Control
//                 </span>

//                 <h3 className="mt-4 max-w-xl text-3xl font-black leading-[1.02] tracking-[-0.04em] sm:text-4xl">
//                   We inspect the environment, not only the visible pest.
//                 </h3>

//                 <div className="mt-6 flex flex-wrap items-center gap-4 text-[8px] font-black uppercase tracking-[0.17em] text-white/50">
//                   <span>Evidence</span>

//                   <span className="h-1 w-1 rounded-full bg-[#AFA5F8]" />

//                   <span>Access</span>

//                   <span className="h-1 w-1 rounded-full bg-[#AFA5F8]" />

//                   <span>Conditions</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FOLDED FIELD NOTES */}
//         <div className="mt-20 grid gap-10 lg:mt-24 lg:grid-cols-[0.34fr_1fr] lg:items-start">
//           <div className="lg:sticky lg:top-28">
//             <span className="text-[9px] font-black uppercase tracking-[0.29em] text-[#6254B4]">
//               Three Mission Notes
//             </span>

//             <h3 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.05em] text-[#181425] sm:text-5xl">
//               What guides
//               <span className="block text-[#6254B4]">
//                 every response.
//               </span>
//             </h3>

//             <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-slate-600">
//               Each note represents one part of the service thinking used
//               from initial inspection through to practical prevention.
//             </p>

//             <div className="mt-8 flex items-center gap-3">
//               <span className="h-px w-16 bg-[#6254B4]" />

//               <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#6254B4]">
//                 Read Down
//               </span>

//               <ArrowRight
//                 size={15}
//                 strokeWidth={2.7}
//                 className="rotate-90 text-[#6254B4]"
//               />
//             </div>
//           </div>

//           {/* PAPER NOTES */}
//           <div className="space-y-7">
//             {missionNotes.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.title}
//                   className={`sg-westminster-mission-animate sg-westminster-mission-delay-${
//                     index + 1
//                   } ${item.rotation} ${item.position} group relative`}
//                 >
//                   <div className="absolute inset-0 translate-x-2 translate-y-3 bg-[#6254B4]/10" />

//                   <div className="relative overflow-hidden border border-[#CFC7DA] bg-[#FCFAFE] p-6 shadow-[0_25px_65px_rgba(45,34,73,0.09)] sm:p-8">
//                     {/* FOLDED CORNER */}
//                     <div className="absolute right-0 top-0 h-16 w-16">
//                       <div className="absolute right-0 top-0 h-0 w-0 border-b-[64px] border-l-[64px] border-b-[#DDD6E8] border-l-transparent" />

//                       <div className="absolute right-2 top-2 text-[8px] font-black text-[#6254B4]">
//                         {item.number}
//                       </div>
//                     </div>

//                     <div className="absolute bottom-0 left-[72px] top-0 hidden w-px bg-[#6254B4]/18 sm:block" />

//                     <div
//                       aria-hidden="true"
//                       className="pointer-events-none absolute inset-0 opacity-[0.05]"
//                       style={{
//                         backgroundImage:
//                           "linear-gradient(transparent 31px, #6254B4 32px)",
//                         backgroundSize: "100% 32px",
//                       }}
//                     />

//                     <div className="relative grid gap-6 sm:grid-cols-[72px_0.8fr_1fr] sm:items-center">
//                       <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6254B4] text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#181425]">
//                         <Icon size={23} strokeWidth={2.7} />
//                       </div>

//                       <div>
//                         <span className="text-[8px] font-black uppercase tracking-[0.23em] text-[#6254B4]">
//                           {item.code} / {item.number}
//                         </span>

//                         <h4 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-[#181425]">
//                           {item.title}
//                         </h4>
//                       </div>

//                       <p className="m-0 text-sm font-medium leading-7 text-slate-600">
//                         {item.text}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>

//         {/* CONTACT SLIP */}
//         <div className="sg-westminster-mission-animate sg-westminster-mission-delay-4 relative mt-20 overflow-hidden bg-[#181425] text-white lg:mt-24">
//           <div className="absolute left-[34%] top-0 hidden h-full border-l-2 border-dashed border-white/15 lg:block" />

//           <div className="grid lg:grid-cols-[0.52fr_1fr_auto] lg:items-center">
//             <div className="border-b border-dashed border-white/15 p-7 lg:border-b-0 lg:p-9">
//               <span className="text-[8px] font-black uppercase tracking-[0.23em] text-[#AFA5F8]">
//                 Service Request Slip
//               </span>

//               <span className="mt-4 block text-5xl font-black tracking-[-0.06em]">
//                 SW1P
//               </span>

//               <span className="mt-3 block text-[8px] font-black uppercase tracking-[0.18em] text-white/35">
//                 Ref: SGW-CONTACT-01
//               </span>
//             </div>

//             <div className="p-7 lg:p-9">
//               <div className="flex items-start gap-5">
//                 <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#6254B4]">
//                   <PhoneCall size={22} strokeWidth={2.7} />
//                 </span>

//                 <div>
//                   <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#AFA5F8]">
//                     Need Local Pest Support?
//                   </span>

//                   <h3 className="mt-2 max-w-2xl text-2xl font-black leading-tight tracking-[-0.03em] sm:text-3xl">
//                     Tell us what you have noticed at your Westminster
//                     property.
//                   </h3>

//                   <p className="mb-0 mt-3 max-w-2xl text-sm font-medium leading-7 text-white/50">
//                     Share the property type, pest signs and affected areas
//                     so our team can understand your enquiry more clearly.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid gap-3 border-t border-white/10 p-7 lg:min-w-[260px] lg:border-l lg:border-t-0 lg:p-9">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="group flex min-h-14 items-center justify-between bg-white px-5 text-[10px] font-black uppercase tracking-[0.15em] text-[#6254B4] transition-all duration-300 hover:bg-[#6254B4] hover:text-white"
//               >
//                 {LOCAL.phoneDisplay}

//                 <PhoneCall size={16} strokeWidth={2.7} />
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="group flex min-h-14 items-center justify-between border border-white/15 px-5 text-[10px] font-black uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#181425]"
//               >
//                 Send Enquiry

//                 <ArrowUpRight
//                   size={16}
//                   strokeWidth={2.7}
//                   className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </Link>

//               <Link
//                 to="/services"
//                 className="group flex min-h-12 items-center justify-between px-2 text-[9px] font-black uppercase tracking-[0.16em] text-white/45 transition-colors duration-300 hover:text-white"
//               >
//                 Explore Services

//                 <ArrowRight
//                   size={15}
//                   strokeWidth={2.7}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* DOCUMENT FOOTER */}
//         <div className="mt-8 grid gap-5 border-y border-[#C9C1D4] py-6 sm:grid-cols-3">
//           <div className="flex items-start gap-3">
//             <MapPin
//               size={17}
//               strokeWidth={2.6}
//               className="mt-0.5 shrink-0 text-[#6254B4]"
//             />

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">
//                 Local Base
//               </span>

//               <span className="mt-1 block text-[11px] font-black leading-5 text-[#181425]">
//                 {LOCAL.fullAddress}
//               </span>
//             </div>
//           </div>

//           <div className="flex items-start gap-3">
//             <ShieldCheck
//               size={17}
//               strokeWidth={2.6}
//               className="mt-0.5 shrink-0 text-[#6254B4]"
//             />

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">
//                 Service Direction
//               </span>

//               <span className="mt-1 block text-[11px] font-black leading-5 text-[#181425]">
//                 Inspection • Treatment • Prevention
//               </span>
//             </div>
//           </div>

//           <div className="flex items-start gap-3">
//             <Building2
//               size={17}
//               strokeWidth={2.6}
//               className="mt-0.5 shrink-0 text-[#6254B4]"
//             />

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">
//                 Property Support
//               </span>

//               <span className="mt-1 block text-[11px] font-black leading-5 text-[#181425]">
//                 Residential & Commercial Properties
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }















// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Building2,
//   Check,
//   CheckCircle2,
//   ClipboardCheck,
//   MapPin,
//   PhoneCall,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function MissionBannerSection() {
//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     shortName: "Superguard Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     streetAddress: "49 Shroton St",
//     fullAddress: "49 Shroton St, London NW1 6UB, United Kingdom",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//   };

//   const missionSteps = [
//     {
//       number: "01",
//       label: "INSPECT",
//       title: "Understand the property first.",
//       description:
//         "We begin by looking for visible pest evidence, likely access points, harbourage areas and the conditions that may be allowing activity to continue.",
//       icon: ClipboardCheck,
//     },
//     {
//       number: "02",
//       label: "RESPOND",
//       title: "Choose a considered treatment.",
//       description:
//         "The response is shaped around the pest involved, the affected areas, the property layout and the level of activity identified during the inspection.",
//       icon: ShieldCheck,
//     },
//     {
//       number: "03",
//       label: "PROTECT",
//       title: "Help reduce future activity.",
//       description:
//         "Where appropriate, we highlight practical measures around access, hygiene, shelter and property conditions that can help reduce the opportunity for pests to return.",
//       icon: CheckCircle2,
//     },
//   ];

//   const propertyTypes = [
//     "Residential Homes",
//     "Flats & Apartments",
//     "Landlord Properties",
//     "Offices",
//     "Commercial Premises",
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(".sgm-premium-reveal");

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((element) => {
//         element.classList.add("sgm-premium-visible");
//       });

//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) return;

//           entry.target.classList.add("sgm-premium-visible");
//           observer.unobserve(entry.target);
//         });
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "0px 0px -50px 0px",
//       }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       aria-labelledby="marylebone-mission-heading"
//       className="relative overflow-hidden bg-[#F4F1F8] py-20 sm:py-24 lg:py-32"
//     >
//       {/* =========================================================
//           SCHEMA
//       ========================================================== */}

//       <meta itemProp="name" content={LOCAL.company} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, ${LOCAL.city}`}
//       />

//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta
//           itemProp="streetAddress"
//           content={LOCAL.streetAddress}
//         />

//         <meta
//           itemProp="addressLocality"
//           content={LOCAL.city}
//         />

//         <meta
//           itemProp="postalCode"
//           content={LOCAL.postcode}
//         />

//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       {/* =========================================================
//           ANIMATION
//       ========================================================== */}

//       <style>{`
//         .sgm-premium-reveal {
//           opacity: 0;
//           transform: translateY(32px);
//           transition:
//             opacity 900ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgm-premium-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sgm-delay-1 {
//           transition-delay: 100ms;
//         }

//         .sgm-delay-2 {
//           transition-delay: 180ms;
//         }

//         .sgm-delay-3 {
//           transition-delay: 260ms;
//         }

//         .sgm-delay-4 {
//           transition-delay: 340ms;
//         }

//         .sgm-main-image {
//           transition:
//             transform 1400ms cubic-bezier(0.16, 1, 0.3, 1),
//             filter 700ms ease;
//         }

//         .sgm-image-frame:hover .sgm-main-image {
//           transform: scale(1.045);
//           filter: saturate(1.08) contrast(1.02);
//         }

//         .sgm-number {
//           transition:
//             transform 400ms cubic-bezier(0.16, 1, 0.3, 1),
//             color 400ms ease;
//         }

//         .sgm-step:hover .sgm-number {
//           transform: translateX(7px);
//           color: #6055A6;
//         }

//         .sgm-step-line {
//           transform: scaleX(0.4);
//           transform-origin: left center;
//           transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgm-step:hover .sgm-step-line {
//           transform: scaleX(1);
//         }

//         .sgm-icon {
//           transition:
//             transform 400ms cubic-bezier(0.16, 1, 0.3, 1),
//             background-color 350ms ease,
//             color 350ms ease,
//             border-color 350ms ease;
//         }

//         .sgm-step:hover .sgm-icon {
//           transform: translateY(-4px);
//           background-color: #6055A6;
//           color: white;
//           border-color: #6055A6;
//         }

//         .sgm-property-card {
//           transition:
//             transform 350ms cubic-bezier(0.16, 1, 0.3, 1),
//             background-color 350ms ease,
//             box-shadow 350ms ease;
//         }

//         .sgm-property-card:hover {
//           transform: translateY(-4px);
//           background-color: white;
//           box-shadow: 0 20px 45px rgba(96, 85, 166, 0.09);
//         }

//         .sgm-property-arrow {
//           transition:
//             transform 350ms cubic-bezier(0.16, 1, 0.3, 1),
//             background-color 350ms ease;
//         }

//         .sgm-property-card:hover .sgm-property-arrow {
//           transform: translate(3px, -3px);
//           background-color: #6055A6;
//           color: white;
//         }

//         .sgm-cta-button {
//           transition:
//             transform 350ms cubic-bezier(0.16, 1, 0.3, 1),
//             background-color 350ms ease;
//         }

//         .sgm-cta-button:hover {
//           transform: translateY(-3px);
//           background-color: #6055A6;
//         }

//         .sgm-cta-button:hover .sgm-cta-icon {
//           transform: translate(3px, -3px);
//         }

//         .sgm-cta-icon {
//           transition: transform 350ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sgm-premium-reveal {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }

//           .sgm-main-image,
//           .sgm-step-line,
//           .sgm-number,
//           .sgm-icon,
//           .sgm-property-card,
//           .sgm-property-arrow,
//           .sgm-cta-button,
//           .sgm-cta-icon {
//             transition: none;
//           }
//         }
//       `}</style>

//       {/* =========================================================
//           ARCHITECTURAL BACKGROUND
//       ========================================================== */}

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full border-[110px] border-[#6055A6]/[0.045]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -bottom-64 -left-56 h-[650px] w-[650px] rounded-full border-[100px] border-[#6055A6]/[0.035]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-[5%] top-[25%] h-2 w-2 rounded-full bg-[#6055A6]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-[8%] top-[44%] h-1.5 w-1.5 rounded-full bg-[#6055A6]/60"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-[15%] top-[67%] hidden h-px w-32 bg-[#6055A6]/10 lg:block"
//       />

//       {/* =========================================================
//           MAIN CONTAINER
//       ========================================================== */}

//       <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10">

//         {/* =======================================================
//             LOCAL BRAND BAR
//         ======================================================== */}

//         <div className="sgm-premium-reveal flex flex-col gap-5 border-y border-[#CBC5D5] py-5 lg:flex-row lg:items-center lg:justify-between">

//           <div className="flex items-center gap-4">

//             <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6055A6] text-white">
//               <ShieldCheck
//                 size={20}
//                 strokeWidth={2.5}
//               />
//             </span>

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 Superguard Services
//               </span>

//               <span className="mt-1 block text-xs font-black tracking-[-0.02em] text-[#17151C]">
//                 Marylebone • London
//               </span>
//             </div>

//           </div>

//           <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[8px] font-black uppercase tracking-[0.18em] text-black/40">

//             <span className="flex items-center gap-2">
//               <MapPin
//                 size={14}
//                 strokeWidth={2.4}
//                 className="text-[#6055A6]"
//               />

//               {LOCAL.area}
//             </span>

//             <span className="hidden h-1 w-1 rounded-full bg-[#6055A6] sm:block" />

//             <span>{LOCAL.postcode}</span>

//             <span className="hidden h-1 w-1 rounded-full bg-[#6055A6] sm:block" />

//             <span>Central London</span>

//           </div>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="flex w-fit items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em] text-[#17151C] transition-colors duration-300 hover:text-[#6055A6]"
//           >
//             <PhoneCall
//               size={15}
//               strokeWidth={2.5}
//               className="text-[#6055A6]"
//             />

//             {LOCAL.phoneDisplay}
//           </a>

//         </div>

//         {/* =======================================================
//             MAIN INTRO / IMAGE
//         ======================================================== */}

//         <div className="grid gap-12 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20 lg:pt-24">

//           {/* LEFT */}

//           <div className="sgm-premium-reveal">

//             <div className="flex items-center gap-3">

//               <span className="h-[2px] w-12 bg-[#6055A6]" />

//               <span className="text-[9px] font-black uppercase tracking-[0.32em] text-[#6055A6]">
//                 The Marylebone Approach
//               </span>

//             </div>

//             <h2
//               id="marylebone-mission-heading"
//               className="mt-7 max-w-[700px] text-[51px] font-black leading-[0.88] tracking-[-0.07em] text-[#17151C] sm:text-[68px] lg:text-[80px] xl:text-[94px]"
//             >
//               Better control
//               <span className="block text-[#6055A6]">
//                 starts with
//               </span>
//               better understanding.
//             </h2>

//             <p className="mt-8 max-w-[570px] text-[15px] font-medium leading-[1.9] text-black/50 sm:text-base">
//               At {LOCAL.company}, our approach starts with the
//               property. We look at the signs, the environment and
//               the conditions around pest activity before deciding
//               on the most appropriate response.
//             </p>

//             <div className="mt-8 flex flex-wrap items-center gap-4">

//               <Link
//                 to="/contact-us"
//                 className="group inline-flex min-h-[54px] items-center gap-4 bg-[#17151C] px-6 text-[9px] font-black uppercase tracking-[0.17em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6055A6]"
//               >
//                 Discuss Your Property

//                 <span className="flex h-7 w-7 items-center justify-center bg-[#6055A6] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#6055A6]">
//                   <ArrowUpRight
//                     size={15}
//                     strokeWidth={2.5}
//                   />
//                 </span>
//               </Link>

//               <Link
//                 to="/services"
//                 className="inline-flex min-h-[54px] items-center gap-3 border border-[#C8C2D2] px-6 text-[9px] font-black uppercase tracking-[0.17em] text-[#17151C] transition-all duration-300 hover:border-[#6055A6] hover:text-[#6055A6]"
//               >
//                 Explore Services

//                 <ArrowRight
//                   size={15}
//                   strokeWidth={2.4}
//                 />
//               </Link>

//             </div>

//           </div>

//           {/* RIGHT IMAGE */}

//           <div className="sgm-premium-reveal sgm-delay-1">

//             <div className="sgm-image-frame relative overflow-hidden bg-[#17151C]">

//               <div className="relative h-[430px] overflow-hidden sm:h-[540px] lg:h-[600px]">

//                 <img
//                   src="/images/mission-superguard.webp"
//                   alt={`${LOCAL.company} professional pest control service in ${LOCAL.area}`}
//                   className="sgm-main-image absolute inset-0 h-full w-full object-cover object-center"
//                   loading="lazy"
//                 />

//                 <div className="absolute inset-0 bg-[#17151C]/10" />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#17151C]/90 via-[#17151C]/10 to-transparent" />

//                 {/* IMAGE LABEL */}

//                 <div className="absolute left-6 top-6 flex items-center gap-2 sm:left-8 sm:top-8">

//                   <span className="flex h-9 w-9 items-center justify-center bg-[#6055A6] text-white">
//                     <Sparkles
//                       size={16}
//                       strokeWidth={2.2}
//                     />
//                   </span>

//                   <span className="bg-[#17151C]/70 px-3 py-2 text-[7px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
//                     Property-Led Pest Control
//                   </span>

//                 </div>

//                 {/* IMAGE NUMBER */}

//                 <span className="absolute right-6 top-5 text-[90px] font-black leading-none tracking-[-0.1em] text-white/10 sm:right-8 sm:top-7 sm:text-[125px]">
//                   01
//                 </span>

//                 {/* IMAGE BOTTOM */}

//                 <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">

//                   <div className="flex items-center gap-3">

//                     <span className="h-px w-10 bg-[#A9A0EA]" />

//                     <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#C8C2FF]">
//                       Marylebone / NW1
//                     </span>

//                   </div>

//                   <h3 className="mt-4 max-w-[650px] text-3xl font-black leading-[1] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
//                     We look at the environment,
//                     not just the pest.
//                   </h3>

//                 </div>

//               </div>

//               {/* IMAGE FOOTER */}

//               <div className="flex flex-wrap items-center justify-between gap-4 bg-[#17151C] px-6 py-5 sm:px-8">

//                 <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40">
//                   Local Pest Control
//                 </span>

//                 <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.18em] text-white/70">
//                   <span className="h-1.5 w-1.5 rounded-full bg-[#A9A0EA]" />
//                   Residential & Commercial
//                 </span>

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* =======================================================
//             STANDARD BAR
//         ======================================================== */}

//         <div className="sgm-premium-reveal sgm-delay-2 mt-16 grid border-y border-[#CBC5D5] lg:mt-24 lg:grid-cols-[0.8fr_1.2fr]">

//           <div className="border-b border-[#CBC5D5] py-7 lg:border-b-0 lg:border-r lg:pr-12">

//             <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#6055A6]">
//               The Superguard Standard
//             </span>

//             <div className="mt-4 flex items-center gap-3">

//               <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                 <Check
//                   size={15}
//                   strokeWidth={3}
//                 />
//               </span>

//               <span className="text-sm font-black tracking-[-0.02em] text-[#17151C]">
//                 Inspection before intervention.
//               </span>

//             </div>

//           </div>

//           <div className="py-7 lg:pl-12">

//             <p className="m-0 max-w-[850px] text-lg font-black leading-[1.45] tracking-[-0.025em] text-[#302A3C] sm:text-xl">
//               “Understand the property. Respond to the problem.
//               Help protect what comes next.”
//             </p>

//           </div>

//         </div>

//         {/* =======================================================
//             THREE STEP APPROACH
//         ======================================================== */}

//         <div className="mt-20 lg:mt-28">

//           <div className="sgm-premium-reveal mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

//             <div>

//               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 How We Work
//               </span>

//               <h3 className="mt-4 max-w-[720px] text-4xl font-black leading-[0.93] tracking-[-0.06em] text-[#17151C] sm:text-5xl lg:text-6xl">
//                 A simple process.
//                 <span className="text-[#6055A6]">
//                   {" "}A considered response.
//                 </span>
//               </h3>

//             </div>

//             <p className="max-w-[400px] text-sm font-medium leading-7 text-black/45">
//               Our service thinking follows a clear path: understand
//               the situation, respond appropriately and help reduce
//               the conditions that can encourage repeat activity.
//             </p>

//           </div>

//           <div className="border-t border-[#CBC5D5]">

//             {missionSteps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <article
//                   key={step.number}
//                   className={`sgm-premium-reveal sgm-step group border-b border-[#CBC5D5] py-8 sm:py-10 ${
//                     index === 0
//                       ? "sgm-delay-1"
//                       : index === 1
//                         ? "sgm-delay-2"
//                         : "sgm-delay-3"
//                   }`}
//                 >

//                   <div className="grid gap-6 lg:grid-cols-[120px_0.75fr_1fr_auto] lg:items-center lg:gap-10">

//                     {/* NUMBER */}

//                     <div className="flex items-center gap-4 lg:block">

//                       <span className="sgm-number text-[11px] font-black tracking-[0.18em] text-black/25">
//                         {step.number}
//                       </span>

//                       <span className="h-px w-10 bg-[#6055A6] lg:mt-5 lg:block" />

//                     </div>

//                     {/* TITLE */}

//                     <div>

//                       <div className="flex items-center gap-3">

//                         <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#6055A6]">
//                           {step.label}
//                         </span>

//                         <span className="h-1 w-1 rounded-full bg-[#6055A6]" />

//                         <span className="text-[8px] font-black uppercase tracking-[0.18em] text-black/25">
//                           Service Stage
//                         </span>

//                       </div>

//                       <h4 className="mt-3 max-w-[500px] text-2xl font-black leading-[1] tracking-[-0.04em] text-[#17151C] sm:text-3xl">
//                         {step.title}
//                       </h4>

//                     </div>

//                     {/* DESCRIPTION */}

//                     <div>

//                       <div className="sgm-step-line mb-5 h-[2px] w-20 bg-[#6055A6]" />

//                       <p className="m-0 max-w-[570px] text-sm font-medium leading-7 text-black/50">
//                         {step.description}
//                       </p>

//                     </div>

//                     {/* ICON */}

//                     <span className="sgm-icon flex h-14 w-14 shrink-0 items-center justify-center border border-[#CBC5D5] bg-white text-[#6055A6]">

//                       <Icon
//                         size={22}
//                         strokeWidth={2}
//                       />

//                     </span>

//                   </div>

//                 </article>
//               );
//             })}

//           </div>

//         </div>

//         {/* =======================================================
//             PROPERTY SUPPORT
//         ======================================================== */}

//         <div className="mt-20 grid gap-8 lg:mt-28 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">

//           <div className="sgm-premium-reveal">

//             <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//               Property Support
//             </span>

//             <h3 className="mt-4 max-w-[500px] text-4xl font-black leading-[0.94] tracking-[-0.055em] text-[#17151C] sm:text-5xl">

//               Pest control shaped around
//               <span className="block text-[#6055A6]">
//                 your property.
//               </span>

//             </h3>

//             <p className="mt-5 max-w-[450px] text-sm font-medium leading-7 text-black/45">
//               From homes and flats to offices, landlord properties
//               and commercial premises, our approach considers the
//               type of property and the pest-control situation involved.
//             </p>

//             <Link
//               to="/contact-us"
//               className="mt-7 inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-[#6055A6] transition-all duration-300 hover:gap-5"
//             >
//               Discuss Your Property

//               <ArrowRight
//                 size={16}
//                 strokeWidth={2.5}
//               />
//             </Link>

//           </div>

//           <div className="sgm-premium-reveal sgm-delay-1 grid gap-px overflow-hidden border border-[#CBC5D5] bg-[#CBC5D5] sm:grid-cols-2">

//             {propertyTypes.map((item, index) => (

//               <div
//                 key={item}
//                 className={`sgm-property-card group bg-[#FAF8FC] p-6 ${
//                   index === propertyTypes.length - 1
//                     ? "sm:col-span-2"
//                     : ""
//                 }`}
//               >

//                 <div className="flex items-center gap-4">

//                   <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#6055A6] text-[9px] font-black text-white">
//                     0{index + 1}
//                   </span>

//                   <div className="flex-1">

//                     <span className="block text-[8px] font-black uppercase tracking-[0.22em] text-black/30">
//                       Property Type
//                     </span>

//                     <span className="mt-1 block text-sm font-black tracking-[-0.02em] text-[#17151C]">
//                       {item}
//                     </span>

//                   </div>

//                   <span className="sgm-property-arrow flex h-8 w-8 items-center justify-center border border-[#D4CFDC] text-[#6055A6]">

//                     <ArrowUpRight
//                       size={15}
//                       strokeWidth={2.3}
//                     />

//                   </span>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//         {/* =======================================================
//             PREMIUM CTA
//         ======================================================== */}

//         <div className="sgm-premium-reveal sgm-delay-3 relative mt-20 overflow-hidden bg-[#17151C] lg:mt-28">

//           {/* BACKGROUND CIRCLE */}

//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -right-40 -top-52 h-[560px] w-[560px] rounded-full border-[90px] border-[#6055A6]/20"
//           />

//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute -bottom-40 left-[38%] h-[300px] w-[300px] rounded-full border border-white/[0.08]"
//           />

//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute left-0 top-0 h-full w-[35%] bg-gradient-to-r from-[#6055A6]/10 to-transparent"
//           />

//           <div className="relative grid lg:grid-cols-[1fr_auto] lg:items-center">

//             <div className="p-7 sm:p-10 lg:p-14">

//               <div className="flex items-center gap-3">

//                 <span className="h-2 w-2 rounded-full bg-[#A9A0EA]" />

//                 <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#A9A0EA]">
//                   Marylebone Pest Control
//                 </span>

//               </div>

//               <h3 className="mt-5 max-w-[850px] text-4xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">

//                 Have a pest problem?

//                 <span className="block text-[#A9A0EA]">
//                   Let's understand it properly.
//                 </span>

//               </h3>

//               <p className="mt-5 max-w-[670px] text-sm font-medium leading-7 text-white/45 sm:text-base">
//                 Tell us what you have noticed at your Marylebone
//                 property. Our team can discuss the situation and
//                 help you understand the next step.
//               </p>

//               <div className="mt-8 flex flex-wrap items-center gap-4">

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="sgm-cta-button inline-flex min-h-[54px] items-center gap-3 bg-white px-6 text-[9px] font-black uppercase tracking-[0.16em] text-[#6055A6]"
//                 >

//                   <PhoneCall
//                     size={16}
//                     strokeWidth={2.5}
//                   />

//                   {LOCAL.phoneDisplay}

//                 </a>

//                 <Link
//                   to="/contact-us"
//                   className="sgm-cta-button inline-flex min-h-[54px] items-center gap-4 border border-white/20 px-6 text-[9px] font-black uppercase tracking-[0.16em] text-white"
//                 >

//                   Send Enquiry

//                   <ArrowUpRight
//                     size={16}
//                     strokeWidth={2.4}
//                     className="sgm-cta-icon"
//                   />

//                 </Link>

//               </div>

//             </div>

//             {/* CTA LOCATION PANEL */}

//             <div className="border-t border-white/10 p-7 sm:p-10 lg:w-[285px] lg:border-l lg:border-t-0 lg:p-10">

//               <span className="text-[8px] font-black uppercase tracking-[0.23em] text-white/30">
//                 Local Coverage
//               </span>

//               <div className="mt-5 flex items-start gap-3">

//                 <MapPin
//                   size={18}
//                   strokeWidth={2.4}
//                   className="mt-0.5 shrink-0 text-[#A9A0EA]"
//                 />

//                 <div>

//                   <span className="block text-xl font-black tracking-[-0.03em] text-white">
//                     {LOCAL.area}
//                   </span>

//                   <span className="mt-1 block text-[9px] font-black uppercase tracking-[0.15em] text-white/35">
//                     {LOCAL.city}
//                   </span>

//                   <span className="mt-4 block text-[9px] font-medium leading-5 text-white/35">
//                     {LOCAL.fullAddress}
//                   </span>

//                 </div>

//               </div>

//               <div className="mt-7 border-t border-white/10 pt-6">

//                 <Link
//                   to="/services"
//                   className="flex items-center justify-between text-[9px] font-black uppercase tracking-[0.17em] text-white/55 transition-colors duration-300 hover:text-white"
//                 >

//                   Explore Services

//                   <ArrowRight
//                     size={15}
//                     strokeWidth={2.4}
//                   />

//                 </Link>

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* =======================================================
//             BOTTOM INFORMATION STRIP
//         ======================================================== */}

//         <div className="sgm-premium-reveal sgm-delay-4 mt-8 grid gap-5 border-y border-[#CBC5D5] py-6 sm:grid-cols-3">

//           {/* SERVICE */}

//           <div className="flex items-start gap-3">

//             <ShieldCheck
//               size={17}
//               strokeWidth={2.5}
//               className="mt-0.5 shrink-0 text-[#6055A6]"
//             />

//             <div>

//               <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-black/30">
//                 Service Direction
//               </span>

//               <span className="mt-1 block text-[11px] font-black leading-5 text-[#17151C]">
//                 Inspection • Treatment • Prevention
//               </span>

//             </div>

//           </div>

//           {/* PROPERTY */}

//           <div className="flex items-start gap-3">

//             <Building2
//               size={17}
//               strokeWidth={2.5}
//               className="mt-0.5 shrink-0 text-[#6055A6]"
//             />

//             <div>

//               <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-black/30">
//                 Property Support
//               </span>

//               <span className="mt-1 block text-[11px] font-black leading-5 text-[#17151C]">
//                 Residential & Commercial
//               </span>

//             </div>

//           </div>

//           {/* LOCATION */}

//           <div className="flex items-start gap-3">

//             <MapPin
//               size={17}
//               strokeWidth={2.5}
//               className="mt-0.5 shrink-0 text-[#6055A6]"
//             />

//             <div>

//               <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-black/30">
//                 Local Service Area
//               </span>

//               <span className="mt-1 block text-[11px] font-black leading-5 text-[#17151C]">
//                 {LOCAL.area}, {LOCAL.city} • {LOCAL.postcode}
//               </span>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }











import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  Bug,
} from "lucide-react";

export default function MissionBannerSection() {
  const LOCAL = {
    company: "Superguard Services West Wickham",
    shortName: "Superguard West Wickham",
    area: "West Wickham",
    city: "London",
    postcode: "BR4 0QL",
    streetAddress: "16 Ash Grove",
    fullAddress: "16 Ash Grove, West Wickham BR4 0QL",
    phoneDisplay: "07356 270867",
    phoneTel: "447356270867",
    email: "info@superguardwestwickham.uk",
  };

  const process = [
    {
      number: "01",
      label: "INSPECT",
      title: "Understand what is happening",
      text: "We assess signs of pest activity, possible entry points and areas where pests may be hiding.",
      icon: Target,
    },
    {
      number: "02",
      label: "TREAT",
      title: "Choose the right response",
      text: "Treatment is selected around the pest involved, the property and the level of activity.",
      icon: Bug,
    },
    {
      number: "03",
      label: "PROTECT",
      title: "Reduce future problems",
      text: "We identify practical steps that can help reduce the chance of pest activity returning.",
      icon: ShieldCheck,
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".sgww-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) =>
        el.classList.add("sgww-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("sgww-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      itemScope
      itemType="https://schema.org/PestControlService"
      aria-labelledby="westwickham-mission-heading"
      className="sgww-section relative w-full overflow-hidden bg-white text-[#17151C]"
    >
      {/* =========================================================
          SCHEMA
      ========================================================== */}

      <meta itemProp="name" content={LOCAL.company} />
      <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
      <meta itemProp="email" content={LOCAL.email} />

      <meta
        itemProp="areaServed"
        content={`${LOCAL.area}, ${LOCAL.city}`}
      />

      <div
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
        className="hidden"
      >
        <meta
          itemProp="streetAddress"
          content={LOCAL.streetAddress}
        />
        <meta
          itemProp="addressLocality"
          content={LOCAL.city}
        />
        <meta
          itemProp="postalCode"
          content={LOCAL.postcode}
        />
        <meta itemProp="addressCountry" content="GB" />
      </div>

      {/* =========================================================
          CUSTOM CSS
      ========================================================== */}

      <style>{`
        .sgww-section {
          --brand: #6055A6;
        }

        .sgww-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 750ms ease,
            transform 750ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sgww-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sgww-delay-1 {
          transition-delay: 120ms;
        }

        .sgww-delay-2 {
          transition-delay: 200ms;
        }

        .sgww-delay-3 {
          transition-delay: 280ms;
        }

        /* -----------------------------------------
           IMAGE
        ----------------------------------------- */

        .sgww-image {
          transition:
            transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sgww-image-box:hover .sgww-image {
          transform: scale(1.035);
        }

        /* -----------------------------------------
           MAIN CTA
        ----------------------------------------- */

        .sgww-main-button {
          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            background-color 300ms ease;
        }

        .sgww-main-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(96, 85, 166, 0.2);
        }

        .sgww-arrow {
          transition: transform 300ms ease;
        }

        .sgww-main-button:hover .sgww-arrow {
          transform: translate(3px, -3px);
        }

        /* -----------------------------------------
           PROCESS
        ----------------------------------------- */

        .sgww-process-row {
          transition:
            background-color 300ms ease,
            padding-left 300ms ease;
        }

        .sgww-process-row:hover {
          background: rgba(96, 85, 166, 0.045);
          padding-left: 18px;
        }

        .sgww-process-icon {
          transition:
            background-color 300ms ease,
            color 300ms ease,
            transform 300ms ease;
        }

        .sgww-process-row:hover .sgww-process-icon {
          background: #6055A6;
          color: white;
          transform: scale(1.05);
        }

        /* -----------------------------------------
           CONTACT ITEMS
        ----------------------------------------- */

        .sgww-contact-item {
          transition:
            transform 250ms ease,
            background-color 250ms ease;
        }

        .sgww-contact-item:hover {
          transform: translateX(4px);
          background: rgba(255,255,255,0.08);
        }

        /* -----------------------------------------
           DECORATIVE NUMBER
        ----------------------------------------- */

        .sgww-big-number {
          transition:
            color 300ms ease,
            transform 300ms ease;
        }

        .sgww-process-row:hover .sgww-big-number {
          color: rgba(96, 85, 166, 0.2);
          transform: translateX(4px);
        }

        @media (max-width: 767px) {
          .sgww-process-row:hover {
            padding-left: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sgww-reveal,
          .sgww-image,
          .sgww-main-button,
          .sgww-arrow,
          .sgww-process-row,
          .sgww-process-icon,
          .sgww-contact-item,
          .sgww-big-number {
            transition: none;
          }

          .sgww-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* =========================================================
          TOP IDENTITY BAR
      ========================================================== */}

      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">

        <div className="sgww-reveal flex flex-col gap-5 border-b border-black/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6055A6] text-white">
              <ShieldCheck
                size={18}
                strokeWidth={2.3}
              />
            </div>

            <div>
              <span className="block text-[8px] font-bold uppercase tracking-[0.27em] text-black/35">
                Pest Control Specialists
              </span>

              <span className="mt-1 block text-sm font-extrabold tracking-[-0.02em]">
                {LOCAL.company}
              </span>
            </div>

          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[8px] font-bold uppercase tracking-[0.18em] text-black/35">

            <span className="flex items-center gap-2">
              <MapPin
                size={13}
                className="text-[#6055A6]"
              />
              {LOCAL.area}
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-black/20 sm:block" />

            <span>{LOCAL.postcode}</span>

            <span className="hidden h-1 w-1 rounded-full bg-black/20 sm:block" />

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="text-[#6055A6] transition-opacity hover:opacity-60"
            >
              {LOCAL.phoneDisplay}
            </a>

          </div>

        </div>

        {/* =======================================================
            HERO — NEW ASYMMETRIC DESIGN
        ======================================================== */}

        <div className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16 lg:py-24">

          {/* LEFT CONTENT */}

          <div className="sgww-reveal">

            <div className="mb-6 flex items-center gap-3">

              <span className="h-[2px] w-8 bg-[#6055A6]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#6055A6]">
                West Wickham • London
              </span>

            </div>

            <h2
              id="westwickham-mission-heading"
              className="max-w-[590px] text-[46px] font-black leading-[0.91] tracking-[-0.06em] sm:text-[62px] lg:text-[74px]"
            >
              The right response
              <span className="block text-[#6055A6]">
                starts with
              </span>
              understanding.
            </h2>

            <p className="mt-7 max-w-[500px] text-[14px] leading-7 text-black/50 sm:text-[15px]">
              {LOCAL.company} provides professional pest control
              for homes, flats and businesses across West Wickham.
              We assess the situation first, then recommend a
              practical response based on what we find.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="sgww-main-button group inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#6055A6] px-6 text-[8px] font-bold uppercase tracking-[0.17em] text-white"
              >
                <Phone size={15} />

                Call {LOCAL.phoneDisplay}

                <ArrowUpRight
                  size={14}
                  className="sgww-arrow"
                />
              </a>

              <Link
                to="/services"
                className="inline-flex min-h-[52px] items-center gap-3 rounded-full border border-black/15 px-6 text-[8px] font-bold uppercase tracking-[0.17em] text-black/65 transition-all duration-300 hover:border-[#6055A6] hover:text-[#6055A6]"
              >
                View Services

                <ArrowRight size={14} />
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="sgww-reveal sgww-delay-1">

            <div className="sgww-image-box relative overflow-hidden rounded-[24px]">

              {/* 16:9 IMAGE */}

              <div className="relative aspect-video w-full">

                <img
                  src="/images/mission-superguard.webp"
                  alt={`${LOCAL.company} professional pest control in ${LOCAL.area}`}
                  className="sgww-image h-full w-full object-cover"
                  loading="lazy"
                />

                {/* Minimal overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                {/* TOP LABEL */}

                <div className="absolute left-5 top-5">

                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-xl">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#6055A6]" />

                    <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#6055A6]">
                      Local Pest Control
                    </span>

                  </div>

                </div>

                {/* IMAGE TEXT */}

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">

                  <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/65">
                    Superguard Services West Wickham
                  </span>

                  <h3 className="mt-2 max-w-[650px] text-2xl font-black leading-[1.05] tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
                    Professional help for
                    <span className="text-white/65">
                      {" "}everyday pest problems.
                    </span>
                  </h3>

                </div>

              </div>

            </div>

            {/* IMAGE META — SEPARATE FROM IMAGE */}

            <div className="mt-3 grid grid-cols-2 gap-3">

              <div className="border-l-2 border-[#6055A6] pl-4">

                <span className="block text-[7px] font-bold uppercase tracking-[0.2em] text-black/30">
                  Service
                </span>

                <span className="mt-1 block text-xs font-extrabold">
                  Residential & Commercial
                </span>

              </div>

              <div className="border-l-2 border-[#6055A6] pl-4">

                <span className="block text-[7px] font-bold uppercase tracking-[0.2em] text-black/30">
                  Serving
                </span>

                <span className="mt-1 block text-xs font-extrabold">
                  West Wickham & surrounding areas
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =======================================================
            STATEMENT BAND
        ======================================================== */}

        <div className="sgww-reveal sgww-delay-2 border-y border-black/10 py-8">

          <div className="grid gap-7 md:grid-cols-[0.8fr_1.2fr] md:items-center">

            <div>

              <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#6055A6]">
                Our Principle
              </span>

              <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                Diagnose before deciding.
              </h3>

            </div>

            <div className="flex gap-4 md:border-l md:border-black/10 md:pl-10">

              <span className="mt-1 h-8 w-[3px] shrink-0 rounded-full bg-[#6055A6]" />

              <p className="max-w-[680px] text-sm leading-7 text-black/50">
                Pest problems can have different causes. By looking
                at the property, the signs of activity and possible
                access points, we can make a more considered decision
                about the next step.
              </p>

            </div>

          </div>

        </div>

        {/* =======================================================
            PROCESS — TIMELINE STYLE
        ======================================================== */}

        <div className="py-16 sm:py-20 lg:py-24">

          <div className="sgww-reveal mb-12 max-w-[700px]">

            <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#6055A6]">
              How We Work
            </span>

            <h3 className="mt-3 text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl">
              Three stages.
              <span className="text-black/30">
                {" "}One clear approach.
              </span>
            </h3>

          </div>

          <div className="relative">

            {/* timeline line */}

            <div className="absolute left-[23px] top-0 hidden h-full w-px bg-black/10 md:block" />

            <div className="space-y-3">

              {process.map((item, index) => {

                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className={`sgww-reveal sgww-process-row relative grid gap-6 border-b border-black/10 py-7 md:grid-cols-[100px_1fr_70px] md:items-center ${
                      index === 0
                        ? "sgww-delay-1"
                        : index === 1
                          ? "sgww-delay-2"
                          : "sgww-delay-3"
                    }`}
                  >

                    {/* NUMBER */}

                    <div className="relative z-10">

                      <span className="sgww-big-number text-5xl font-black tracking-[-0.08em] text-[#6055A6]/10">
                        {item.number}
                      </span>

                    </div>

                    {/* CONTENT */}

                    <div>

                      <div className="flex items-center gap-3">

                        <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#6055A6]">
                          {item.label}
                        </span>

                        <span className="h-px w-6 bg-[#6055A6]/30" />

                      </div>

                      <h4 className="mt-2 text-xl font-black tracking-[-0.03em] sm:text-2xl">
                        {item.title}
                      </h4>

                      <p className="mt-2 max-w-[650px] text-sm leading-6 text-black/45">
                        {item.text}
                      </p>

                    </div>

                    {/* ICON */}

                    <div className="sgww-process-icon flex h-12 w-12 items-center justify-center rounded-full bg-[#6055A6]/10 text-[#6055A6]">

                      <Icon size={19} />

                    </div>

                  </article>
                );
              })}

            </div>

          </div>

        </div>

        {/* =======================================================
            LOCAL CONTACT — NEW DARK PURPLE/WHITE BALANCE
        ======================================================== */}

        <div className="sgww-reveal sgww-delay-2 overflow-hidden rounded-[26px] bg-[#6055A6] text-white">

          <div className="grid lg:grid-cols-[1fr_0.82fr]">

            {/* LEFT CTA */}

            <div className="relative p-8 sm:p-11 lg:p-14">

              <div className="absolute right-8 top-8 hidden h-24 w-24 rounded-full border border-white/10 sm:block" />

              <div className="relative">

                <div className="flex items-center gap-3">

                  <span className="h-2 w-2 rounded-full bg-white" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/60">
                    Local Contact
                  </span>

                </div>

                <h3 className="mt-5 max-w-[650px] text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                  Need help with
                  <span className="block text-white/55">
                    a pest problem?
                  </span>
                </h3>

                <p className="mt-5 max-w-[530px] text-sm leading-7 text-white/65">
                  Contact {LOCAL.company} to discuss what you
                  have noticed at your property and find out
                  what to do next.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="sgww-main-button group inline-flex min-h-[50px] items-center gap-3 rounded-full bg-white px-6 text-[8px] font-bold uppercase tracking-[0.17em] text-[#6055A6]"
                  >
                    <Phone size={15} />

                    Call {LOCAL.phoneDisplay}

                    <ArrowUpRight
                      size={14}
                      className="sgww-arrow"
                    />
                  </a>

                  <Link
                    to="/contact-us"
                    className="inline-flex min-h-[50px] items-center gap-3 rounded-full border border-white/25 px-6 text-[8px] font-bold uppercase tracking-[0.17em] text-white transition-all duration-300 hover:bg-white/10"
                  >
                    Send Enquiry

                    <ArrowRight size={14} />
                  </Link>

                </div>

              </div>

            </div>

            {/* RIGHT CONTACT DETAILS */}

            <div className="border-t border-white/15 bg-black/10 p-8 sm:p-11 lg:border-l lg:border-t-0 lg:p-12">

              <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/45">
                Contact Details
              </span>

              <div className="mt-7 space-y-2">

                {/* ADDRESS */}

                <div className="sgww-contact-item flex gap-4 rounded-xl p-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <MapPin size={17} />
                  </div>

                  <div>

                    <span className="block text-[7px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Address
                    </span>

                    <span className="mt-1 block text-sm font-bold leading-5 text-white/90">
                      {LOCAL.fullAddress}
                    </span>

                  </div>

                </div>

                {/* PHONE */}

                <div className="sgww-contact-item flex gap-4 rounded-xl p-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Phone size={17} />
                  </div>

                  <div>

                    <span className="block text-[7px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Phone
                    </span>

                    <a
                      href={`tel:${LOCAL.phoneTel}`}
                      className="mt-1 block text-sm font-bold text-white/90"
                    >
                      {LOCAL.phoneDisplay}
                    </a>

                  </div>

                </div>

                {/* EMAIL */}

                <div className="sgww-contact-item flex gap-4 rounded-xl p-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Mail size={17} />
                  </div>

                  <div className="min-w-0">

                    <span className="block text-[7px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Email
                    </span>

                    <a
                      href={`mailto:${LOCAL.email}`}
                      className="mt-1 block break-all text-sm font-bold text-white/90"
                    >
                      {LOCAL.email}
                    </a>

                  </div>

                </div>

              </div>

              <div className="mt-6 border-t border-white/10 pt-5">

                <span className="flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.2em] text-white/45">

                  <Check size={13} />

                  Residential & Commercial Pest Control

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =======================================================
            BOTTOM INFORMATION BAR
        ======================================================== */}

        <div className="sgww-reveal sgww-delay-3 flex flex-col gap-3 py-7 text-[8px] font-bold uppercase tracking-[0.18em] text-black/30 sm:flex-row sm:items-center sm:justify-between">

          <span>
            {LOCAL.company}
          </span>

          <span className="text-[#6055A6]">
            Serving {LOCAL.area} • {LOCAL.postcode}
          </span>

          <a
            href={`mailto:${LOCAL.email}`}
            className="transition-colors hover:text-[#6055A6]"
          >
            {LOCAL.email}
          </a>

        </div>

      </div>
    </section>
  );
}