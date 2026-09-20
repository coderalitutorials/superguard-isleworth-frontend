// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Check,
//   Home,
//   SearchCheck,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function AboutCommitmentSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     area: "Holborn",
//     postcode: "WC2R 3JF",
//     address: "50 Essex Street, London, WC2R 3JF",
//     businessName: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//   };

//   const commitments = [
//     {
//       number: "01",
//       icon: SearchCheck,
//       label: "Inspect",
//       title: "We Check Before We Recommend",
//       desc: "We review pest signs, affected areas, possible access routes and property conditions before deciding what should happen next.",
//     },
//     {
//       number: "02",
//       icon: Sparkles,
//       label: "Explain",
//       title: "We Keep The Process Clear",
//       desc: "We explain what has been found, what may be contributing to the issue and why a particular service route may be suitable.",
//     },
//     {
//       number: "03",
//       icon: ShieldCheck,
//       label: "Protect",
//       title: "We Support Better Prevention",
//       desc: `Our guidance focuses on practical proofing, aftercare and prevention steps for homes and businesses across ${LOCAL.area}.`,
//     },
//   ];

//   const standards = [
//     "Clear communication from the beginning",
//     "Property-focused service planning",
//     "Practical prevention and aftercare",
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(".commitment-reveal");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("commitment-visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.14,
//       }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       aria-labelledby="commitment-heading"
//       className="relative overflow-hidden bg-[#F6F3EF] py-20 sm:py-24 lg:py-28"
//     >
//       <style>{`
//         .commitment-reveal {
//           opacity: 0;
//           transform: translateY(28px);
//           transition:
//             opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .commitment-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .commitment-delay-1 {
//           transition-delay: 120ms;
//         }

//         .commitment-delay-2 {
//           transition-delay: 220ms;
//         }

//         .commitment-delay-3 {
//           transition-delay: 320ms;
//         }

//         @keyframes commitmentOrbit {
//           from {
//             transform: rotate(0deg);
//           }

//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .commitment-orbit {
//           animation: commitmentOrbit 22s linear infinite;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .commitment-reveal {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }

//           .commitment-orbit {
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* Background decoration */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#6055A6]/7 blur-3xl" />

//         <div className="absolute bottom-[-180px] right-[-160px] h-[480px] w-[480px] rounded-full border-[75px] border-[#6055A6]/[0.035]" />

//         <div
//           className="absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(96,85,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96,85,166,0.3) 1px, transparent 1px)",
//             backgroundSize: "84px 84px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
//         {/* Heading */}
//         <div className="commitment-reveal mx-auto max-w-5xl text-center">
//           <div className="flex items-center justify-center gap-4">
//             <span className="h-px w-12 bg-[#6055A6]/35 sm:w-20" />

//             <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#6055A6]">
//               Our Commitment
//             </span>

//             <span className="h-px w-12 bg-[#6055A6]/35 sm:w-20" />
//           </div>

//           <h2
//             id="commitment-heading"
//             className="mt-6 text-[42px] font-black leading-[0.95] tracking-[-0.05em] text-[#171327] sm:text-[58px] lg:text-[72px]"
//           >
//             Clear Thinking Before
//             <span className="block text-[#6055A6]">Every Treatment.</span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base sm:leading-8">
//             At {LOCAL.businessName}, our commitment is to make pest control
//             easier to understand, more relevant to the property and supported
//             by practical prevention advice.
//           </p>
//         </div>

//         {/* Main circular commitment visual */}
//         <div className="commitment-reveal commitment-delay-1 mt-14 lg:mt-18">
//           <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
//             <div className="flex justify-center">
//               <div className="relative flex h-[310px] w-[310px] items-center justify-center sm:h-[380px] sm:w-[380px] lg:h-[430px] lg:w-[430px]">
//                 {/* Outer rotating ring */}
//                 <div className="commitment-orbit absolute inset-0 rounded-full border border-dashed border-[#6055A6]/30">
//                   <span className="absolute left-1/2 top-[-8px] h-4 w-4 -translate-x-1/2 rounded-full bg-[#6055A6]" />
//                   <span className="absolute bottom-[15%] right-[1%] h-3 w-3 rounded-full bg-[#171327]" />
//                   <span className="absolute left-[4%] top-[29%] h-3 w-3 rounded-full bg-[#6055A6]/60" />
//                 </div>

//                 <div className="absolute inset-[24px] rounded-full border border-[#6055A6]/15 sm:inset-[30px]" />

//                 <div className="absolute inset-[48px] rounded-full bg-[#6055A6] shadow-[0_35px_90px_rgba(96,85,166,0.3)] sm:inset-[60px]">
//                   <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
//                     <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[32px] border-white/[0.06]" />
//                     <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#171327]/20 blur-2xl" />
//                   </div>

//                   <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center text-white">
//                     <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/12 ring-1 ring-white/15">
//                       <ShieldCheck
//                         size={25}
//                         strokeWidth={2.4}
//                       />
//                     </span>

//                     <span className="mt-5 text-[10px] font-black uppercase tracking-[0.25em] text-white/55">
//                       Our Standard
//                     </span>

//                     <strong className="mt-3 text-[54px] font-black leading-none tracking-[-0.06em] sm:text-[68px]">
//                       100%
//                     </strong>

//                     <span className="mt-2 text-sm font-black uppercase tracking-[0.15em] text-[#D9D5FF]">
//                       Property Focused
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#6055A6]">
//                 Around Every Property
//               </span>

//               <h3 className="mt-4 max-w-3xl text-[34px] font-black leading-[1] tracking-[-0.045em] text-[#171327] sm:text-[48px]">
//                 We Do More Than Simply Respond To Visible Pest Activity.
//               </h3>

//               <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base sm:leading-8">
//                 We look at the wider situation around the property, explain the
//                 issue in a straightforward way and help customers understand
//                 practical steps that may reduce repeat activity.
//               </p>

//               <div className="mt-8 grid gap-3">
//                 {standards.map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-4 border-b border-[#171327]/10 pb-4"
//                   >
//                     <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAE7F5] text-[#6055A6]">
//                       <Check
//                         size={16}
//                         strokeWidth={3}
//                       />
//                     </span>

//                     <span className="text-sm font-black leading-6 text-[#171327]">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Commitment stages */}
//         <div className="commitment-reveal commitment-delay-2 mt-16 lg:mt-20">
//           <div className="relative">
//             {/* Desktop connection line */}
//             <div className="absolute left-1/2 top-[76px] hidden h-px w-[70%] -translate-x-1/2 bg-[#6055A6]/20 lg:block" />

//             <div className="grid gap-6 lg:grid-cols-3">
//               {commitments.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <article
//                     key={item.number}
//                     className="group relative rounded-[28px] border border-[#6055A6]/10 bg-white p-6 shadow-[0_20px_60px_rgba(23,19,39,0.08)] transition-all duration-300 hover:-translate-y-1 sm:p-8"
//                   >
//                     <div className="relative z-10">
//                       <div className="flex items-center justify-between gap-5">
//                         <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6055A6] text-white shadow-lg transition-all duration-300 group-hover:bg-[#171327]">
//                           <Icon
//                             size={27}
//                             strokeWidth={2.3}
//                           />
//                         </span>

//                         <span className="text-[52px] font-black leading-none text-[#6055A6]/[0.08]">
//                           {item.number}
//                         </span>
//                       </div>

//                       <span className="mt-8 block text-[10px] font-black uppercase tracking-[0.22em] text-[#6055A6]">
//                         {item.label}
//                       </span>

//                       <h3 className="mt-3 text-[28px] font-black leading-[1.08] tracking-[-0.035em] text-[#171327]">
//                         {item.title}
//                       </h3>

//                       <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Quote / CTA */}
//         <div className="commitment-reveal commitment-delay-3 mt-8 overflow-hidden rounded-[30px] bg-[#171327] text-white lg:rounded-[38px]">
//           <div className="grid lg:grid-cols-[1fr_auto] lg:items-stretch">
//             <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
//               <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[45px] border-white/[0.035]" />

//               <div className="relative z-10">
//                 <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#B8B1EF]">
//                   The SuperGuard Commitment
//                 </span>

//                 <blockquote className="mt-5 max-w-5xl text-[28px] font-black leading-[1.12] tracking-[-0.04em] text-white sm:text-[38px] lg:text-[46px]">
//                   “We do not simply treat pest activity. We help customers
//                   understand why it may be happening and what can be done next.”
//                 </blockquote>

//                 <div className="mt-7 flex items-center gap-4">
//                   <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                     <Home
//                       size={19}
//                       strokeWidth={2.4}
//                     />
//                   </span>

//                   <div>
//                     <span className="block text-sm font-black text-white">
//                       {LOCAL.shortName}
//                     </span>

//                     <span className="mt-1 block text-xs font-bold text-white/45">
//                       {LOCAL.address}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <button
//               type="button"
//               onClick={() => navigate("/contact-us")}
//               className="group flex min-h-24 items-center justify-between gap-10 border-t border-white/10 bg-[#6055A6] px-7 text-left text-white transition-all duration-300 hover:bg-white hover:text-[#6055A6] sm:px-10 lg:min-h-full lg:min-w-[300px] lg:border-l lg:border-t-0"
//             >
//               <span>
//                 <span className="block text-[9px] font-black uppercase tracking-[0.2em] opacity-60">
//                   Need Assistance?
//                 </span>

//                 <span className="mt-2 block text-sm font-black uppercase tracking-[0.15em]">
//                   Contact Our Team
//                 </span>
//               </span>

//               <ArrowRight
//                 size={20}
//                 strokeWidth={2.5}
//                 className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }












// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Check,
//   Home,
//   MapPin,
//   SearchCheck,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function AboutCommitmentSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     area: "Westminster",
//     postcode: "SW1P 4BD",
//     address: "14 Regency St, London SW1P 4BD",
//     businessName: "SuperGuard Services Westminster",
//     shortName: "SuperGuard Westminster",
//   };

//   const commitments = [
//     {
//       number: "01",
//       icon: SearchCheck,
//       label: "Inspect",
//       title: "We Check Before We Recommend",
//       desc: "We review pest signs, affected areas, possible access routes and property conditions before deciding what should happen next.",
//     },
//     {
//       number: "02",
//       icon: Sparkles,
//       label: "Explain",
//       title: "We Keep The Process Clear",
//       desc: "We explain what has been found, what may be contributing to the issue and why a particular service route may be suitable.",
//     },
//     {
//       number: "03",
//       icon: ShieldCheck,
//       label: "Protect",
//       title: "We Support Better Prevention",
//       desc: `Our guidance focuses on practical proofing, aftercare and prevention steps for homes and businesses across ${LOCAL.area}.`,
//     },
//   ];

//   const standards = [
//     "Clear communication from the beginning",
//     "Property-focused service planning",
//     "Practical prevention and aftercare",
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(
//       ".sgw-commitment-reveal"
//     );

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((element) => {
//         element.classList.add(
//           "sgw-commitment-visible"
//         );
//       });

//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(
//               "sgw-commitment-visible"
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
//       aria-labelledby="commitment-heading"
//       className="relative overflow-hidden bg-[#18141F] py-20 text-white sm:py-24 lg:py-28"
//     >
//       <style>{`
//         .sgw-commitment-reveal {
//           opacity: 0;
//           transform: translateY(28px);
//           transition:
//             opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgw-commitment-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sgw-commitment-delay-1 {
//           transition-delay: 110ms;
//         }

//         .sgw-commitment-delay-2 {
//           transition-delay: 210ms;
//         }

//         .sgw-commitment-delay-3 {
//           transition-delay: 310ms;
//         }

//         .sgw-commitment-dots {
//           background-image: radial-gradient(
//             circle,
//             rgba(189, 182, 255, 0.26) 1.2px,
//             transparent 1.2px
//           );
//           background-size: 11px 11px;
//         }

//         .sgw-commitment-card::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           height: 4px;
//           width: 100%;
//           transform: scaleX(0);
//           transform-origin: left;
//           background: #6254b4;
//           transition: transform 420ms
//             cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgw-commitment-card:hover::after {
//           transform: scaleX(1);
//         }

//         .sgw-commitment-button::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           transform: scaleX(0);
//           transform-origin: left;
//           background: #ffffff;
//           transition: transform 380ms
//             cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgw-commitment-button:hover::before {
//           transform: scaleX(1);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sgw-commitment-reveal {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }

//           .sgw-commitment-card::after,
//           .sgw-commitment-button::before {
//             transition: none;
//           }
//         }
//       `}</style>

//       {/* BACKGROUND */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div
//           className="absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)",
//             backgroundSize: "76px 76px",
//           }}
//         />

//         <div className="absolute -left-64 top-[-170px] h-[650px] w-[650px] rounded-full bg-[#6254B4]/30 blur-[180px]" />

//         <div className="absolute -bottom-72 right-[-230px] h-[730px] w-[730px] rounded-full border-[130px] border-white/[0.025]" />

//         <div className="sgw-commitment-dots absolute right-8 top-24 h-48 w-48 opacity-35" />

//         <div className="absolute left-[30%] top-0 h-full w-px bg-white/[0.035]" />
//       </div>

//       {/* BACKGROUND WORD */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-16 hidden -translate-x-1/2 select-none whitespace-nowrap text-[170px] font-black uppercase leading-none tracking-[-0.09em] text-white/[0.018] xl:block"
//       >
//         Standard
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
//         {/* TOP REFERENCE BAR */}
//         <div className="sgw-commitment-reveal grid border-y border-white/10 lg:grid-cols-[1fr_auto_auto]">
//           <div className="flex items-center gap-4 py-5 lg:pr-8">
//             <span className="relative flex h-3 w-3 shrink-0">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BDB6FF] opacity-30" />

//               <span className="relative inline-flex h-3 w-3 rounded-full bg-[#BDB6FF]" />
//             </span>

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.25em] text-[#BDB6FF]">
//                 Service Commitment Record
//               </span>

//               <span className="mt-1 block text-xs font-black text-white">
//                 {LOCAL.shortName}
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 border-t border-white/10 py-5 lg:border-l lg:border-t-0 lg:px-8">
//             <MapPin
//               size={16}
//               strokeWidth={2.5}
//               className="shrink-0 text-[#BDB6FF]"
//             />

//             <address className="not-italic text-[9px] font-black uppercase tracking-[0.15em] text-white/50">
//               {LOCAL.address}
//             </address>
//           </div>

//           <div className="flex items-center gap-3 border-t border-white/10 py-5 lg:border-l lg:border-t-0 lg:pl-8">
//             <ShieldCheck
//               size={16}
//               strokeWidth={2.5}
//               className="shrink-0 text-[#BDB6FF]"
//             />

//             <span className="text-[9px] font-black uppercase tracking-[0.15em] text-white/50">
//               Property Focused · SW1P
//             </span>
//           </div>
//         </div>

//         {/* HEADING */}
//         <div className="sgw-commitment-reveal mt-14 grid gap-9 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
//           <div>
//             <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#BDB6FF]">
//               Our Commitment
//             </span>

//             <h2
//               id="commitment-heading"
//               className="mt-5 max-w-[950px] text-[48px] font-black leading-[0.91] tracking-[-0.06em] text-white sm:text-[65px] lg:text-[80px]"
//             >
//               Clear thinking before
//               <span className="block text-[#8F80E4]">
//                 every treatment.
//               </span>
//             </h2>
//           </div>

//           <div>
//             <p className="mb-0 max-w-xl text-sm font-medium leading-7 text-white/55 sm:text-base sm:leading-8">
//               At {LOCAL.businessName}, our commitment is to make pest
//               control easier to understand, relevant to the property
//               and supported by practical prevention guidance.
//             </p>

//             <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
//               <Check
//                 size={17}
//                 strokeWidth={3}
//                 className="shrink-0 text-[#BDB6FF]"
//               />

//               <span className="text-[9px] font-black uppercase tracking-[0.17em] text-white/75">
//                 Inspect · Explain · Protect
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* MAIN COMMITMENT MANIFESTO */}
//         <div className="sgw-commitment-reveal sgw-commitment-delay-1 mt-14 border border-white/10 bg-white text-[#18141F] shadow-[0_40px_120px_rgba(0,0,0,0.32)]">
//           {/* MANIFESTO HEADER */}
//           <div className="grid border-b border-[#D8D2DF] sm:grid-cols-[110px_1fr_auto]">
//             <div className="flex min-h-[64px] items-center justify-center border-b border-[#D8D2DF] bg-[#6254B4] text-white sm:border-b-0 sm:border-r">
//               <ShieldCheck
//                 size={23}
//                 strokeWidth={2.4}
//               />
//             </div>

//             <div className="flex min-h-[64px] items-center px-5">
//               <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//                 SuperGuard Commitment Manifesto
//               </span>
//             </div>

//             <div className="flex min-h-[64px] items-center border-t border-[#D8D2DF] px-5 sm:border-l sm:border-t-0">
//               {/* <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#8D8792]">
//                 Record · SGW 100
//               </span> */}
//             </div>
//           </div>

//           <div className="grid xl:grid-cols-[0.88fr_1.12fr]">
//             {/* LEFT STANDARD PANEL */}
//             <div className="relative overflow-hidden border-b border-[#D8D2DF] bg-[#6254B4] text-white xl:border-b-0 xl:border-r">
//               <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[54px] border-white/[0.06]" />

//               <div className="pointer-events-none absolute -bottom-44 -left-28 h-80 w-80 rounded-full bg-[#18141F]/30 blur-[120px]" />

//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute bottom-[-12px] right-4 text-[170px] font-black leading-none tracking-[-0.1em] text-white/[0.045]"
//               >
//                 100
//               </div>

//               <div className="relative z-10 flex min-h-[590px] flex-col p-7 sm:p-10 lg:p-12">
//                 <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-6">
//                   <span className="text-[9px] font-black uppercase tracking-[0.23em] text-white/60">
//                     Our Service Standard
//                   </span>

//                   <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.5)]" />
//                 </div>

//                 <div className="my-auto py-12">
//                   <span className="block text-[95px] font-black leading-[0.8] tracking-[-0.085em] text-white sm:text-[125px] lg:text-[145px]">
//                     100
//                     <span className="ml-1 text-[40px] tracking-[-0.04em] text-[#D7D2FF] sm:text-[53px]">
//                       %
//                     </span>
//                   </span>

//                   <span className="mt-7 block max-w-md text-[30px] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-[39px]">
//                     Property-focused thinking around every service.
//                   </span>

//                   <p className="mb-0 mt-6 max-w-md text-sm font-medium leading-7 text-white/65">
//                     We consider more than the visible pest. We also
//                     review affected areas, access routes and wider
//                     conditions around the property.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-[58px_1fr] border border-white/15 bg-white/[0.07]">
//                   <span className="flex min-h-[88px] items-center justify-center border-r border-white/15">
//                     <Home
//                       size={21}
//                       strokeWidth={2.4}
//                     />
//                   </span>

//                   <div className="flex flex-col justify-center px-5 py-4">
//                     <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40">
//                       Local Service Base
//                     </span>

//                     <address className="mt-2 not-italic text-sm font-black leading-6 text-white">
//                       {LOCAL.address}
//                     </address>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="relative overflow-hidden bg-[#FBFAFD]">
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute -right-10 top-3 text-[150px] font-black leading-none tracking-[-0.09em] text-[#6254B4]/[0.045]"
//               >
//                 SG
//               </div>

//               <div className="relative z-10 p-6 sm:p-9 lg:p-11 xl:p-12">
//                 <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//                   Around Every Property
//                 </span>

//                 <h3 className="mt-5 max-w-[760px] text-[39px] font-black leading-[0.96] tracking-[-0.05em] text-[#18141F] sm:text-[50px] lg:text-[58px]">
//                   We do more than simply respond to visible pest
//                   activity.
//                 </h3>

//                 <p className="mb-0 mt-6 max-w-2xl text-sm font-medium leading-7 text-[#6A6470] sm:text-base sm:leading-8">
//                   We look at the wider situation around the property,
//                   explain the issue in a straightforward way and help
//                   customers understand practical steps that may reduce
//                   repeat activity.
//                 </p>

//                 {/* STANDARDS LEDGER */}
//                 <div className="mt-9 border-y border-[#DDD7E5]">
//                   {standards.map((item, index) => (
//                     <div
//                       key={item}
//                       className="grid grid-cols-[62px_1fr] border-b border-[#DDD7E5] last:border-b-0"
//                     >
//                       <span className="flex min-h-[72px] items-center justify-center border-r border-[#DDD7E5] text-[9px] font-black tracking-[0.16em] text-[#6254B4]">
//                         {String(index + 1).padStart(
//                           2,
//                           "0"
//                         )}
//                       </span>

//                       <div className="flex min-h-[72px] items-center gap-4 px-5">
//                         <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#F0ECF6] text-[#6254B4]">
//                           <Check
//                             size={16}
//                             strokeWidth={3}
//                           />
//                         </span>

//                         <span className="text-sm font-black leading-6 text-[#18141F]">
//                           {item}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* COMMITMENT STATEMENT */}
//                 <div className="mt-8 border-l-4 border-[#6254B4] bg-white px-6 py-6 shadow-[0_18px_50px_rgba(35,26,57,0.06)] sm:px-8">
//                   <span className="text-[8px] font-black uppercase tracking-[0.21em] text-[#6254B4]">
//                     The SuperGuard Standard
//                   </span>

//                   <p className="mb-0 mt-3 text-[19px] font-black leading-8 tracking-[-0.025em] text-[#18141F] sm:text-[23px]">
//                     Understand the issue, explain the findings and
//                     recommend a practical next step.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* THREE COMMITMENT RECORDS */}
//         <div className="sgw-commitment-reveal sgw-commitment-delay-2 mt-10 grid gap-6 lg:grid-cols-3">
//           {commitments.map((item) => {
//             const Icon = item.icon;

//             return (
//               <article
//                 key={item.number}
//                 className="sgw-commitment-card group relative overflow-hidden border border-white/10 bg-white text-[#18141F]"
//               >
//                 {/* CARD HEADER */}
//                 <div className="grid grid-cols-[76px_1fr_64px] border-b border-[#D8D2DF]">
//                   <span className="flex min-h-[64px] items-center justify-center border-r border-[#D8D2DF] bg-[#18141F] text-[11px] font-black tracking-[0.15em] text-white">
//                     {item.number}
//                   </span>

//                   <span className="flex min-h-[64px] items-center px-5 text-[8px] font-black uppercase tracking-[0.2em] text-[#6254B4]">
//                     {item.label}
//                   </span>

//                   <span className="flex min-h-[64px] items-center justify-center border-l border-[#D8D2DF] bg-[#F0ECF6] text-[#6254B4] transition-colors duration-300 group-hover:bg-[#6254B4] group-hover:text-white">
//                     <Icon
//                       size={22}
//                       strokeWidth={2.4}
//                     />
//                   </span>
//                 </div>

//                 {/* CARD CONTENT */}
//                 <div className="flex min-h-[370px] flex-col p-6 sm:p-8">
//                   <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#928B97]">
//                     Commitment Record {item.number}
//                   </span>

//                   <h3 className="mt-6 max-w-[420px] text-[32px] font-black leading-[0.98] tracking-[-0.045em] text-[#18141F] sm:text-[37px]">
//                     {item.title}
//                   </h3>

//                   <p className="mb-0 mt-5 text-sm font-medium leading-7 text-[#6A6470]">
//                     {item.desc}
//                   </p>

//                   <div className="mt-auto flex items-center justify-between border-t border-[#DDD7E5] pt-6">
//                     <span className="text-[8px] font-black uppercase tracking-[0.19em] text-[#6254B4]">
//                       SuperGuard Standard
//                     </span>

//                     <span className="flex h-9 w-9 items-center justify-center bg-[#F0ECF6] text-[#6254B4]">
//                       <Check
//                         size={16}
//                         strokeWidth={3}
//                       />
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         {/* QUOTE AND CTA */}
//         <div className="sgw-commitment-reveal sgw-commitment-delay-3 mt-10 border border-white/10">
//           <div className="grid xl:grid-cols-[1fr_300px]">
//             <div className="relative overflow-hidden bg-[#24202C] p-7 sm:p-10 lg:p-12">
//               <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[48px] border-white/[0.035]" />

//               <div className="pointer-events-none absolute -bottom-40 left-[34%] h-72 w-72 rounded-full bg-[#6254B4]/25 blur-[110px]" />

//               <div className="relative z-10">
//                 <span className="text-[9px] font-black uppercase tracking-[0.23em] text-[#BDB6FF]">
//                   The SuperGuard Commitment
//                 </span>

//                 <blockquote className="mt-5 max-w-[1100px] text-[29px] font-black leading-[1.1] tracking-[-0.04em] text-white sm:text-[40px] lg:text-[49px]">
//                   “We do not simply treat pest activity. We help
//                   customers understand why it may be happening and what
//                   can be done next.”
//                 </blockquote>

//                 <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
//                   <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#6254B4] text-white">
//                     <Home
//                       size={20}
//                       strokeWidth={2.4}
//                     />
//                   </span>

//                   <div>
//                     <span className="block text-sm font-black text-white">
//                       {LOCAL.shortName}
//                     </span>

//                     <address className="mt-1 not-italic text-xs font-bold leading-5 text-white/45">
//                       {LOCAL.address}
//                     </address>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <button
//               type="button"
//               onClick={() => navigate("/contact-us")}
//               className="sgw-commitment-button group relative flex min-h-[150px] items-center justify-between gap-7 overflow-hidden border-t border-white/10 bg-[#6254B4] px-7 text-left text-white xl:min-h-full xl:border-l xl:border-t-0"
//             >
//               <span className="relative z-10 transition-colors duration-300 group-hover:text-[#18141F]">
//                 <span className="block text-[8px] font-black uppercase tracking-[0.2em] opacity-60">
//                   Need Assistance?
//                 </span>

//                 <span className="mt-3 block text-sm font-black uppercase tracking-[0.15em]">
//                   Contact Our Team
//                 </span>
//               </span>

//               <ArrowRight
//                 size={21}
//                 strokeWidth={2.5}
//                 className="relative z-10 shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#18141F]"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }













import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Eye,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

export default function AboutCommitmentSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const LOCAL = {
    area: "Marylebone, London",
    postcode: "NW1 6UB",
    address: "49 Shroton St, London NW1 6UB, United Kingdom",
    businessName: "Superguard Services Marylebone",
    shortName: "Superguard Marylebone",
    phone: "+44 7356 236459",
  };

  const commitments = [
    {
      number: "01",
      icon: Eye,
      title: "We Look Closely",
      text: "We don't rush past the signs. We take time to understand what is happening around your property.",
    },
    {
      number: "02",
      icon: Target,
      title: "We Stay Focused",
      text: "Our recommendations are based on the situation at hand, the property and the practical next step.",
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "We Think Beyond Today",
      text: "Good pest control isn't only about the immediate problem. Prevention and property care matter too.",
    },
  ];

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll(".sg-about-reveal");

    if (!elements) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("sg-about-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sg-about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="sg-about-title"
      className="relative overflow-hidden bg-[#F7F6F8] py-20 text-[#17151D] sm:py-28 lg:py-36"
    >
      <style>{`
        .sg-about-reveal {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity 900ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 900ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sg-about-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sg-about-delay-1 {
          transition-delay: 100ms;
        }

        .sg-about-delay-2 {
          transition-delay: 180ms;
        }

        .sg-about-delay-3 {
          transition-delay: 260ms;
        }

        .sg-about-delay-4 {
          transition-delay: 340ms;
        }

        .sg-commitment-card {
          transition:
            transform 450ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 450ms ease,
            border-color 350ms ease;
        }

        .sg-commitment-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 28px 70px rgba(23, 21, 29, 0.10);
          border-color: rgba(96, 85, 166, 0.35);
        }

        .sg-card-icon {
          transition:
            transform 400ms cubic-bezier(0.16, 1, 0.3, 1),
            background-color 300ms ease,
            color 300ms ease;
        }

        .sg-commitment-card:hover .sg-card-icon {
          transform: rotate(-6deg) scale(1.08);
          background: #6055A6;
          color: white;
        }

        .sg-arrow-box {
          transition:
            transform 300ms ease,
            background-color 300ms ease,
            color 300ms ease;
        }

        .sg-commitment-card:hover .sg-arrow-box {
          transform: translate(3px, -3px);
          background: #6055A6;
          color: white;
        }

        .sg-feature {
          transition:
            transform 350ms ease,
            background-color 350ms ease;
        }

        .sg-feature:hover {
          transform: translateX(5px);
          background: #F1EFF6;
        }

        .sg-main-button {
          transition:
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .sg-main-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(96, 85, 166, 0.28);
        }

        .sg-outline-button {
          transition:
            background-color 300ms ease,
            color 300ms ease,
            transform 300ms ease;
        }

        .sg-outline-button:hover {
          background: #17151D;
          color: white;
          transform: translateY(-3px);
        }

        .sg-glow {
          animation: sgGlow 5s ease-in-out infinite;
        }

        @keyframes sgGlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(15px, -15px) scale(1.05);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sg-about-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .sg-commitment-card,
          .sg-card-icon,
          .sg-arrow-box,
          .sg-feature,
          .sg-main-button,
          .sg-outline-button,
          .sg-glow {
            animation: none;
            transition: none;
            transform: none;
          }
        }
      `}</style>

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#6055A6]/[0.07] blur-[110px] sg-glow" />

        <div className="absolute -bottom-52 -left-40 h-[500px] w-[500px] rounded-full bg-[#6055A6]/[0.045] blur-[100px]" />

        <div className="absolute right-[7%] top-[18%] h-[280px] w-[280px] rounded-full border border-[#6055A6]/[0.08]" />

        <div className="absolute right-[10%] top-[22%] h-[220px] w-[220px] rounded-full border border-[#6055A6]/[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            SMALL TOP BAR
        ====================================================== */}

        <div className="sg-about-reveal flex flex-col gap-4 border-b border-[#DDD9E2] pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6055A6] text-white">
              <Sparkles size={14} strokeWidth={2.5} />
            </span>

            <span className="text-[9px] font-black uppercase tracking-[0.24em] text-[#6055A6]">
              About Our Commitment
            </span>
          </div>

          <div className="flex items-center gap-3 text-[#7C7682]">
            <MapPin size={14} strokeWidth={2.3} />

            <span className="text-[9px] font-black uppercase tracking-[0.14em]">
              {LOCAL.area}
            </span>
          </div>
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <div className="sg-about-reveal mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">

          <div>
            <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#6055A6]">
              The Superguard Approach
            </span>

            <h2
              id="sg-about-title"
              className="mt-6 max-w-[950px] text-[53px] font-black leading-[0.88] tracking-[-0.075em] sm:text-[76px] lg:text-[105px]"
            >
              We don't just
              <span className="block text-[#6055A6]">
                treat pests.
              </span>
              We protect
              <span className="block">properties.</span>
            </h2>
          </div>

          <div className="lg:pb-3">
            <p className="max-w-[480px] text-base font-medium leading-8 text-[#6D6673] sm:text-lg sm:leading-9">
              At {LOCAL.businessName}, our commitment is simple:
              provide a professional service that considers the pest,
              the property and what happens next.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-[#6055A6]" />

              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#8A8490]">
                People · Property · Prevention
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            FEATURED COMMITMENT PANEL
        ====================================================== */}

        <div className="sg-about-reveal sg-about-delay-1 relative mt-20 overflow-hidden rounded-[28px] bg-[#17151D] text-white shadow-[0_30px_90px_rgba(23,21,29,0.13)]">

          {/* Purple visual side */}

          <div className="absolute right-0 top-0 h-full w-[42%] overflow-hidden">
            <div className="absolute inset-0 bg-[#6055A6]" />

            <div className="absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full border-[55px] border-white/[0.07]" />

            <div className="absolute -bottom-40 right-[-70px] h-[430px] w-[430px] rounded-full border-[35px] border-white/[0.05]" />

            <div className="absolute right-[12%] top-[18%] text-[150px] font-black leading-none tracking-[-0.12em] text-white/[0.07]">
              SG
            </div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT */}

            <div className="px-7 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                  <ShieldCheck size={17} strokeWidth={2.2} />
                </span>

                <span className="text-[8px] font-black uppercase tracking-[0.23em] text-white/50">
                  Our Commitment
                </span>
              </div>

              <h3 className="mt-12 max-w-[720px] text-[38px] font-black leading-[0.94] tracking-[-0.06em] sm:text-[53px] lg:text-[67px]">
                Professional service should feel
                <span className="text-[#AFA8DE]">
                  {" "}clear, calm and considered.
                </span>
              </h3>

              <p className="mt-7 max-w-[650px] text-sm font-medium leading-7 text-white/55 sm:text-base sm:leading-8">
                From the first conversation to the next step, we aim
                to make pest control easier to understand. We focus
                on what matters rather than overwhelming customers
                with unnecessary complexity.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4">
                {[
                  "Clear communication",
                  "Property-aware thinking",
                  "Practical guidance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check
                      size={14}
                      strokeWidth={3}
                      className="text-[#AFA8DE]"
                    />

                    <span className="text-[9px] font-black uppercase tracking-[0.11em] text-white/65">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT VISUAL */}

            <div className="relative flex min-h-[310px] items-end p-7 sm:p-10 lg:min-h-[500px] lg:p-12">

              <div className="relative z-10 w-full">

                <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/45">
                  The Standard
                </span>

                <div className="mt-4 flex items-end gap-4">
                  <span className="text-[100px] font-black leading-[0.75] tracking-[-0.12em] text-white">
                    03
                  </span>

                  <span className="pb-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/50">
                    Commitments
                  </span>
                </div>

                <div className="mt-10 border-t border-white/15 pt-6">
                  <p className="mb-0 max-w-[360px] text-lg font-black leading-7 text-white">
                    Understand first.
                    <br />
                    Act responsibly.
                    <br />
                    Protect what matters.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            COMMITMENT CARDS
        ====================================================== */}

        <div className="sg-about-reveal sg-about-delay-2 mt-24">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#6055A6]">
                What We Stand For
              </span>

              <h3 className="mt-4 text-[39px] font-black leading-[0.92] tracking-[-0.06em] sm:text-[52px]">
                Three things
                <span className="text-[#6055A6]"> matter.</span>
              </h3>
            </div>

            <p className="max-w-[430px] text-sm font-medium leading-7 text-[#77717D]">
              Every part of our approach comes back to these three
              commitments.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">

            {commitments.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="sg-commitment-card relative overflow-hidden rounded-[22px] border border-[#DED9E4] bg-white p-7 sm:p-9"
                >
                  <div className="flex items-start justify-between">

                    <span className="text-[11px] font-black tracking-[0.12em] text-[#6055A6]">
                      {item.number}
                    </span>

                    <div className="sg-card-icon flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#F0EEF5] text-[#6055A6]">
                      <Icon size={21} strokeWidth={2.2} />
                    </div>

                  </div>

                  <div className="mt-16">

                    <span className="text-[8px] font-black uppercase tracking-[0.23em] text-[#AAA4AE]">
                      Commitment
                    </span>

                    <h4 className="mt-4 text-[30px] font-black leading-[0.95] tracking-[-0.05em]">
                      {item.title}
                    </h4>

                    <p className="mb-0 mt-5 text-sm font-medium leading-7 text-[#706A76]">
                      {item.text}
                    </p>

                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-[#E7E3EA] pt-5">

                    <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#9B95A0]">
                      Superguard Standard
                    </span>

                    <span className="sg-arrow-box flex h-8 w-8 items-center justify-center rounded-full bg-[#F1EFF5] text-[#6055A6]">
                      <ArrowUpRight size={15} strokeWidth={2.5} />
                    </span>

                  </div>
                </article>
              );
            })}

          </div>
        </div>

        {/* =====================================================
            WHY IT MATTERS
        ====================================================== */}

        <div className="sg-about-reveal sg-about-delay-3 mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* LEFT BIG WORD */}

          <div className="relative overflow-hidden rounded-[24px] bg-[#6055A6] p-8 text-white sm:p-12 lg:min-h-[460px] lg:p-14">

            <div className="absolute -bottom-24 -right-20 text-[230px] font-black leading-none tracking-[-0.14em] text-white/[0.055]">
              CARE
            </div>

            <div className="relative z-10 flex h-full flex-col">

              <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/55">
                Why It Matters
              </span>

              <div className="mt-auto pt-24">

                <div className="text-[76px] font-black leading-[0.78] tracking-[-0.1em] sm:text-[100px]">
                  CARE
                </div>

                <p className="mb-0 mt-7 max-w-[430px] text-sm font-medium leading-7 text-white/65">
                  Because pest control happens in real homes,
                  workplaces and properties — and every situation
                  deserves a thoughtful response.
                </p>

              </div>

            </div>
          </div>

          {/* RIGHT */}

          <div className="rounded-[24px] border border-[#DDD9E3] bg-white p-7 sm:p-10 lg:p-14">

            <span className="text-[8px] font-black uppercase tracking-[0.24em] text-[#6055A6]">
              Our Promise
            </span>

            <h3 className="mt-5 max-w-[700px] text-[37px] font-black leading-[0.95] tracking-[-0.055em] sm:text-[50px]">
              Good pest control starts with
              <span className="text-[#6055A6]">
                {" "}good understanding.
              </span>
            </h3>

            <p className="mt-7 max-w-[700px] text-sm font-medium leading-7 text-[#716A77] sm:text-base sm:leading-8">
              We believe customers should have a clear picture of
              the situation before deciding what comes next. That
              means listening carefully, considering the property
              and communicating in a straightforward way.
            </p>

            <div className="mt-9">

              {[
                "Listen before recommending",
                "Explain what we find",
                "Consider the property",
                "Keep prevention in mind",
              ].map((item, index) => (
                <div
                  key={item}
                  className="sg-feature flex items-center gap-4 border-t border-[#E4E0E7] px-3 py-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0EEF5] text-[8px] font-black text-[#6055A6]">
                    0{index + 1}
                  </span>

                  <span className="text-[10px] font-black uppercase tracking-[0.09em] text-[#36313C]">
                    {item}
                  </span>

                  <ChevronRight
                    size={15}
                    className="ml-auto text-[#ABA5B0]"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* =====================================================
            LOCAL IDENTITY
        ====================================================== */}

        <div className="sg-about-reveal sg-about-delay-3 mt-24 rounded-[24px] border border-[#DDD9E3] bg-white px-7 py-8 sm:px-10 lg:px-12">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F0EEF5] text-[#6055A6]">
                <MapPin size={19} strokeWidth={2.3} />
              </div>

              <div>
                <span className="block text-[8px] font-black uppercase tracking-[0.22em] text-[#AAA4AE]">
                  Proudly Local
                </span>

                <h3 className="mt-2 text-[24px] font-black leading-none tracking-[-0.045em] sm:text-[30px]">
                  Serving Marylebone & surrounding areas.
                </h3>
              </div>

            </div>

            <address className="not-italic text-[9px] font-black uppercase leading-6 tracking-[0.11em] text-[#77717F] lg:max-w-[350px] lg:text-right">
              {LOCAL.address}
            </address>

          </div>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div className="sg-about-reveal sg-about-delay-4 mt-16">

          <div className="relative overflow-hidden rounded-[25px] bg-[#17151D] px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14">

            <div className="absolute right-[-100px] top-[-140px] h-[390px] w-[390px] rounded-full border-[70px] border-[#6055A6]/20" />

            <div className="absolute bottom-[-130px] left-[40%] h-[300px] w-[300px] rounded-full bg-[#6055A6]/20 blur-[100px]" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#AFA8DE]">
                  Need Pest Control In Marylebone?
                </span>

                <h3 className="mt-5 max-w-[800px] text-[37px] font-black leading-[0.93] tracking-[-0.06em] sm:text-[52px] lg:text-[61px]">
                  A pest problem?
                  <span className="block text-[#AFA8DE]">
                    Let's deal with it properly.
                  </span>
                </h3>

                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">

                  <span className="text-[8px] font-black uppercase tracking-[0.15em] text-white/45">
                    {LOCAL.businessName}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#6055A6]" />

                  <span className="text-[8px] font-black uppercase tracking-[0.15em] text-white/45">
                    {LOCAL.area}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#6055A6]" />

                  <span className="text-[8px] font-black uppercase tracking-[0.15em] text-white/45">
                    {LOCAL.postcode}
                  </span>

                </div>

              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-[290px] lg:flex-col">

                <a
                  href={`tel:${LOCAL.phone.replace(/\s+/g, "")}`}
                  className="sg-main-button flex min-h-[61px] items-center justify-between gap-5 rounded-[12px] bg-[#6055A6] px-5 text-[9px] font-black uppercase tracking-[0.16em] text-white"
                >
                  <span className="flex items-center gap-3">
                    <Phone size={17} strokeWidth={2.5} />
                    Call {LOCAL.phone}
                  </span>

                  <ArrowUpRight size={18} strokeWidth={2.4} />
                </a>

                <button
                  type="button"
                  onClick={() => navigate("/contact-us")}
                  className="sg-outline-button flex min-h-[61px] items-center justify-between gap-5 rounded-[12px] border border-white/15 bg-white/[0.04] px-5 text-[9px] font-black uppercase tracking-[0.16em] text-white"
                >
                  Send An Enquiry

                  <ArrowUpRight size={18} strokeWidth={2.4} />
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            FOOTER LINE
        ====================================================== */}

        <div className="sg-about-reveal mt-10 flex flex-col gap-3 border-t border-[#DDD9E3] pt-6 sm:flex-row sm:items-center sm:justify-between">

          <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#99929E]">
            {LOCAL.businessName}
          </span>

          <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#6055A6]">
            Pest Control · Marylebone · NW1
          </span>

        </div>

      </div>
    </section>
  );
}