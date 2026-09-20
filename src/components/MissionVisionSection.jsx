


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Check,
//   Eye,
//   MapPin,
//   SearchCheck,
//   ShieldCheck,
//   Target,
// } from "lucide-react";

// export default function MissionVisionSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     area: "Holborn",
//     postcode: "WC2R 3JF",
//     address: "50 Essex Street, London, WC2R 3JF",
//     businessName: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//   };

//   const missionPoints = [
//     "Inspect before recommending treatment",
//     "Explain findings in clear language",
//     "Consider the property as a whole",
//     "Recommend practical next steps",
//   ];

//   const process = [
//     {
//       number: "01",
//       icon: SearchCheck,
//       title: "Understand",
//       text: "We begin by reviewing visible pest signs, affected areas, access routes and conditions around the property.",
//     },
//     {
//       number: "02",
//       icon: Target,
//       title: "Respond",
//       text: "A suitable service approach is considered according to the pest, activity level and property circumstances.",
//     },
//     {
//       number: "03",
//       icon: ShieldCheck,
//       title: "Protect",
//       text: "We provide practical guidance that may help reduce attractants, entry points and repeat pest activity.",
//     },
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(".mv-editorial-reveal");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("mv-editorial-visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.12,
//       }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       aria-labelledby="mission-vision-heading"
//       className="relative overflow-hidden bg-[#F4F1EC] py-20 sm:py-24 lg:py-28"
//     >
//       <style>{`
//         .mv-editorial-reveal {
//           opacity: 0;
//           transform: translateY(28px);
//           transition:
//             opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .mv-editorial-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .mv-editorial-delay-1 {
//           transition-delay: 120ms;
//         }

//         .mv-editorial-delay-2 {
//           transition-delay: 220ms;
//         }

//         .mv-editorial-delay-3 {
//           transition-delay: 320ms;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .mv-editorial-reveal {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       {/* Decorative background */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute right-[-140px] top-[-130px] h-[420px] w-[420px] rounded-full border-[70px] border-[#6055A6]/[0.035]" />

//         <div className="absolute bottom-[-180px] left-[-150px] h-[430px] w-[430px] rounded-full bg-[#6055A6]/5 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
//         {/* Main editorial frame */}
//         <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_35px_100px_rgba(23,19,39,0.12)] lg:rounded-[44px]">
//           <div className="grid lg:grid-cols-[0.37fr_1fr]">
//             {/* Left purple rail */}
//             <aside className="relative overflow-hidden bg-[#6055A6] p-7 text-white sm:p-10 lg:min-h-full lg:p-12">
//               <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full border-[48px] border-white/[0.06]" />

//               <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#171327]/20 blur-2xl" />

//               <div className="relative z-10 flex h-full flex-col">
//                 <div>
//                   <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/55">
//                     SuperGuard Holborn
//                   </span>

//                   <div className="mt-5 h-px w-20 bg-white/35" />

//                   <h2
//                     id="mission-vision-heading"
//                     className="mt-8 text-[44px] font-black leading-[0.92] tracking-[-0.055em] text-white sm:text-[58px] lg:text-[64px]"
//                   >
//                     Mission
//                     <span className="block text-[#D8D3FF]">&amp; Vision.</span>
//                   </h2>

//                   <p className="mt-7 max-w-md text-sm font-medium leading-7 text-white/70">
//                     A clearer, more thoughtful approach to pest control for
//                     homes, landlords and businesses across {LOCAL.area}.
//                   </p>
//                 </div>

//                 <div className="mt-12 lg:mt-auto lg:pt-20">
//                   <div className="border-t border-white/20 pt-6">
//                     <MapPin
//                       size={22}
//                       strokeWidth={2.3}
//                       className="text-[#D8D3FF]"
//                     />

//                     <span className="mt-4 block text-[9px] font-black uppercase tracking-[0.22em] text-white/45">
//                       Local Service Base
//                     </span>

//                     <address className="mt-2 max-w-xs not-italic text-sm font-bold leading-6 text-white">
//                       {LOCAL.address}
//                     </address>

//                     <span className="mt-2 block text-xs font-bold text-[#D8D3FF]">
//                       {LOCAL.postcode}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </aside>

//             {/* Right content */}
//             <div className="p-6 sm:p-9 lg:p-12 xl:p-16">
//               {/* Intro */}
//               <div className="mv-editorial-reveal grid gap-7 border-b border-[#171327]/10 pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
//                 <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#6055A6]">
//                   What Guides Our Work
//                 </span>

//                 <p className="text-lg font-bold leading-8 tracking-[-0.02em] text-[#171327] sm:text-xl">
//                   Pest control should not feel rushed or confusing. Customers
//                   should understand what has been found, what may be causing it
//                   and what the sensible next step is.
//                 </p>
//               </div>

//               {/* Mission row */}
//               <article className="mv-editorial-reveal mv-editorial-delay-1 grid gap-8 border-b border-[#171327]/10 py-10 lg:grid-cols-[150px_1fr] lg:py-14">
//                 <div>
//                   <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                     <Target
//                       size={27}
//                       strokeWidth={2.3}
//                     />
//                   </span>

//                   <span className="mt-5 block text-[10px] font-black uppercase tracking-[0.22em] text-[#6055A6]">
//                     01 / Mission
//                   </span>
//                 </div>

//                 <div>
//                   <h3 className="max-w-4xl text-[34px] font-black leading-[1.02] tracking-[-0.045em] text-[#171327] sm:text-[46px]">
//                     Make Every Visit Practical From The First Inspection.
//                   </h3>

//                   <p className="mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base sm:leading-8">
//                     Our mission is to help customers across {LOCAL.area}{" "}
//                     understand their pest issue properly before a service route
//                     is recommended. We inspect the signs, consider the property
//                     and explain what may need to happen next.
//                   </p>

//                   <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
//                     {missionPoints.map((item) => (
//                       <div
//                         key={item}
//                         className="flex items-start gap-3 border-t border-[#6055A6]/15 pt-4"
//                       >
//                         <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ECE9F8] text-[#6055A6]">
//                           <Check
//                             size={14}
//                             strokeWidth={3}
//                           />
//                         </span>

//                         <span className="text-sm font-black leading-6 text-[#171327]">
//                           {item}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </article>

//               {/* Vision row */}
//               <article className="mv-editorial-reveal mv-editorial-delay-2 grid gap-8 py-10 lg:grid-cols-[150px_1fr] lg:py-14">
//                 <div>
//                   <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#171327] text-white">
//                     <Eye
//                       size={27}
//                       strokeWidth={2.3}
//                     />
//                   </span>

//                   <span className="mt-5 block text-[10px] font-black uppercase tracking-[0.22em] text-[#6055A6]">
//                     02 / Vision
//                   </span>
//                 </div>

//                 <div>
//                   <h3 className="max-w-4xl text-[34px] font-black leading-[1.02] tracking-[-0.045em] text-[#171327] sm:text-[46px]">
//                     Become A Trusted Name For Clear And Responsible Pest
//                     Control.
//                   </h3>

//                   <p className="mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base sm:leading-8">
//                     Our vision is for {LOCAL.shortName} to be known for honest
//                     communication, careful property inspections and
//                     prevention-focused support rather than rushed,
//                     one-size-fits-all recommendations.
//                   </p>

//                   <div className="mt-8 border-l-4 border-[#6055A6] bg-[#F4F1F9] px-6 py-5 sm:px-8">
//                     <p className="text-lg font-black leading-8 tracking-[-0.025em] text-[#171327]">
//                       “Understand the property. Explain the issue. Recommend the
//                       right next step.”
//                     </p>
//                   </div>
//                 </div>
//               </article>
//             </div>
//           </div>
//         </div>

//         {/* Continuous process timeline */}
//         <div className="mv-editorial-reveal mv-editorial-delay-2 mt-8 rounded-[30px] bg-[#171327] p-6 text-white sm:p-9 lg:rounded-[38px] lg:p-12">
//           <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:items-start">
//             <div>
//               <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#AFA8E8]">
//                 Our Working Standard
//               </span>

//               <h3 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl">
//                 One Clear
//                 <span className="block text-[#AFA8E8]">Process.</span>
//               </h3>

//               <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-white/60">
//                 Three connected stages designed to keep the service focused,
//                 understandable and relevant to the property.
//               </p>
//             </div>

//             <div className="relative">
//               {/* Desktop connecting line */}
//               <div className="absolute left-[28px] top-8 hidden h-[calc(100%-64px)] w-px bg-white/15 md:block lg:left-0 lg:top-[31px] lg:h-px lg:w-full" />

//               <div className="grid gap-5 lg:grid-cols-3 lg:gap-8">
//                 {process.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <article
//                       key={item.number}
//                       className="group relative flex gap-5 rounded-[22px] border border-white/10 bg-white/[0.055] p-5 transition-all duration-300 hover:bg-white/[0.09] md:pl-0 lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:hover:bg-transparent"
//                     >
//                       <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-[#171327] bg-[#6055A6] text-white shadow-lg">
//                         <Icon
//                           size={22}
//                           strokeWidth={2.4}
//                         />
//                       </div>

//                       <div className="lg:mt-7">
//                         <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#AFA8E8]">
//                           Stage {item.number}
//                         </span>

//                         <h4 className="mt-2 text-2xl font-black tracking-[-0.03em] text-white">
//                           {item.title}
//                         </h4>

//                         <p className="mt-3 text-sm font-medium leading-7 text-white/60">
//                           {item.text}
//                         </p>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Minimal CTA strip */}
//         <div className="mv-editorial-reveal mv-editorial-delay-3 mt-8 grid overflow-hidden rounded-[28px] bg-[#6055A6] lg:grid-cols-[1fr_auto]">
//           <div className="p-6 text-white sm:p-8 lg:px-10">
//             <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/50">
//               SuperGuard Services Limited Holborn
//             </span>

//             <p className="mt-3 max-w-3xl text-lg font-black leading-8 tracking-[-0.02em] sm:text-xl">
//               Tell us what signs you have noticed and where the activity is
//               appearing around your property.
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={() => navigate("/contact-us")}
//             className="group flex min-h-20 items-center justify-between gap-8 border-t border-white/15 bg-white px-7 text-left text-[#6055A6] transition-all duration-300 hover:bg-[#171327] hover:text-white sm:px-9 lg:min-h-full lg:min-w-[270px] lg:border-l lg:border-t-0"
//           >
//             <span className="text-[10px] font-black uppercase tracking-[0.2em]">
//               Send An Enquiry
//             </span>

//             <ArrowRight
//               size={19}
//               strokeWidth={2.5}
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </button>
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
//   Eye,
//   MapPin,
//   SearchCheck,
//   ShieldCheck,
//   Target,
// } from "lucide-react";

// export default function MissionVisionSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     area: "Westminster",
//     postcode: "SW1P 4BD",
//     address: "14 Regency St, London SW1P 4BD",
//     businessName: "SuperGuard Services Westminster",
//     shortName: "SuperGuard Westminster",
//   };

//   const missionPoints = [
//     "Inspect before recommending treatment",
//     "Explain findings in clear language",
//     "Consider the property as a whole",
//     "Recommend practical next steps",
//   ];

//   const process = [
//     {
//       number: "01",
//       icon: SearchCheck,
//       eyebrow: "Property Review",
//       title: "Understand",
//       text: "We begin by reviewing visible pest signs, affected areas, access routes and conditions around the property.",
//     },
//     {
//       number: "02",
//       icon: Target,
//       eyebrow: "Suitable Response",
//       title: "Respond",
//       text: "A suitable service approach is considered according to the pest, activity level and property circumstances.",
//     },
//     {
//       number: "03",
//       icon: ShieldCheck,
//       eyebrow: "Practical Protection",
//       title: "Protect",
//       text: "We provide practical guidance that may help reduce attractants, entry points and repeat pest activity.",
//     },
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(
//       ".sgw-mv-reveal"
//     );

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((element) => {
//         element.classList.add("sgw-mv-visible");
//       });

//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(
//               "sgw-mv-visible"
//             );

//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.12,
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
//       aria-labelledby="mission-vision-heading"
//       className="relative overflow-hidden bg-[#F4F1F8] py-20 text-[#18141F] sm:py-24 lg:py-28"
//     >
//       <style>{`
//         .sgw-mv-reveal {
//           opacity: 0;
//           transform: translateY(28px);
//           transition:
//             opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgw-mv-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sgw-mv-delay-1 {
//           transition-delay: 110ms;
//         }

//         .sgw-mv-delay-2 {
//           transition-delay: 210ms;
//         }

//         .sgw-mv-delay-3 {
//           transition-delay: 310ms;
//         }

//         .sgw-mv-dots {
//           background-image: radial-gradient(
//             circle,
//             rgba(98, 84, 180, 0.3) 1.2px,
//             transparent 1.2px
//           );
//           background-size: 11px 11px;
//         }

//         .sgw-mv-process::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           height: 4px;
//           width: 100%;
//           transform: scaleX(0);
//           transform-origin: left;
//           background: #6254b4;
//           transition: transform 400ms
//             cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgw-mv-process:hover::after {
//           transform: scaleX(1);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sgw-mv-reveal {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }

//           .sgw-mv-process::after {
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
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#6254B4 1px, transparent 1px), linear-gradient(90deg, #6254B4 1px, transparent 1px)",
//             backgroundSize: "76px 76px",
//           }}
//         />

//         <div className="absolute -left-64 top-[-140px] h-[620px] w-[620px] rounded-full bg-[#6254B4]/11 blur-[170px]" />

//         <div className="absolute -right-72 bottom-[-300px] h-[700px] w-[700px] rounded-full border-[125px] border-[#6254B4]/[0.035]" />

//         <div className="sgw-mv-dots absolute right-8 top-24 h-48 w-48 opacity-35" />

//         <div className="absolute left-[34%] top-0 h-full w-px bg-[#6254B4]/[0.045]" />
//       </div>

//       {/* LARGE WORD */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-16 hidden -translate-x-1/2 select-none whitespace-nowrap text-[175px] font-black uppercase leading-none tracking-[-0.09em] text-[#6254B4]/[0.027] xl:block"
//       >
//         Purpose
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
//         {/* TOP CHARTER BAR */}
//         <div className="sgw-mv-reveal grid border-y border-[#CEC7D8] lg:grid-cols-[1fr_auto_auto]">
//           <div className="flex items-center gap-4 py-5 lg:pr-8">
//             <span className="relative flex h-3 w-3 shrink-0">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6254B4] opacity-30" />

//               <span className="relative inline-flex h-3 w-3 rounded-full bg-[#6254B4]" />
//             </span>

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.25em] text-[#6254B4]">
//                 Company Purpose Charter
//               </span>

//               <span className="mt-1 block text-xs font-black text-[#18141F]">
//                 {LOCAL.shortName}
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 border-t border-[#CEC7D8] py-5 lg:border-l lg:border-t-0 lg:px-8">
//             <MapPin
//               size={16}
//               strokeWidth={2.5}
//               className="shrink-0 text-[#6254B4]"
//             />

//             <address className="not-italic text-[9px] font-black uppercase tracking-[0.15em] text-[#625D69]">
//               {LOCAL.address}
//             </address>
//           </div>

//           <div className="flex items-center gap-3 border-t border-[#CEC7D8] py-5 lg:border-l lg:border-t-0 lg:pl-8">
//             <ShieldCheck
//               size={16}
//               strokeWidth={2.5}
//               className="shrink-0 text-[#6254B4]"
//             />

//             <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#625D69]">
//               Westminster · SW1P
//             </span>
//           </div>
//         </div>

//         {/* SECTION INTRO */}
//         <div className="sgw-mv-reveal mt-14 grid gap-9 lg:grid-cols-[0.72fr_1fr] lg:items-end">
//           <div>
//             <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//               What Guides Our Work
//             </span>

//             <p className="mb-0 mt-5 max-w-sm text-sm font-medium leading-7 text-[#6D6672]">
//               Our mission defines how we approach each property. Our
//               vision defines the service standard we aim to build.
//             </p>
//           </div>

//           <h2
//             id="mission-vision-heading"
//             className="max-w-[960px] text-[49px] font-black leading-[0.91] tracking-[-0.06em] text-[#18141F] sm:text-[66px] lg:text-[81px]"
//           >
//             A clear mission.
//             <span className="block text-[#6254B4]">
//               A responsible vision.
//             </span>
//           </h2>
//         </div>

//         {/* MISSION AND VISION CHARTER */}
//         <div className="sgw-mv-reveal sgw-mv-delay-1 mt-14 border border-[#CFC8D9] bg-white shadow-[0_38px_110px_rgba(37,27,61,0.12)]">
//           {/* CHARTER HEADER */}
//           <div className="grid border-b border-[#D8D2DF] sm:grid-cols-[110px_1fr_auto]">
//             <div className="flex min-h-[64px] items-center justify-center border-b border-[#D8D2DF] bg-[#18141F] text-white sm:border-b-0 sm:border-r">
//               {/* <span className="text-[17px] font-black tracking-[-0.04em]">
//                 SGW
//               </span> */}
//             </div>

//             <div className="flex min-h-[64px] items-center px-5">
//               <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//                 Mission &amp; Vision Charter
//               </span>
//             </div>

//             <div className="flex min-h-[64px] items-center border-t border-[#D8D2DF] px-5 sm:border-l sm:border-t-0">
//               <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#8D8792]">
//                 Westminster · Company Standard
//               </span>
//             </div>
//           </div>

//           {/* GUIDING STATEMENT */}
//           <div className="grid border-b border-[#D8D2DF] lg:grid-cols-[260px_1fr]">
//             <div className="flex items-center border-b border-[#D8D2DF] bg-[#F0ECF6] p-6 lg:border-b-0 lg:border-r lg:p-8">
//               <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//                 Guiding Statement
//               </span>
//             </div>

//             <div className="p-6 sm:p-8 lg:p-10">
//               <p className="mb-0 max-w-[1000px] text-[21px] font-black leading-9 tracking-[-0.025em] text-[#18141F] sm:text-[27px] sm:leading-10">
//                 Pest control should not feel rushed or confusing.
//                 Customers should understand what has been found, what
//                 may be causing it and what the sensible next step is.
//               </p>
//             </div>
//           </div>

//           <div className="grid xl:grid-cols-2">
//             {/* MISSION */}
//             <article className="relative overflow-hidden border-b border-[#D8D2DF] xl:border-b-0 xl:border-r">
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute -right-10 top-4 text-[150px] font-black leading-none tracking-[-0.09em] text-[#6254B4]/[0.045]"
//               >
//                 01
//               </div>

//               <div className="relative z-10 p-6 sm:p-9 lg:p-11 xl:p-12">
//                 <div className="flex items-center justify-between gap-5 border-b border-[#DDD7E5] pb-5">
//                   <div className="flex items-center gap-4">
//                     <span className="flex h-12 w-12 items-center justify-center bg-[#6254B4] text-white">
//                       <Target
//                         size={22}
//                         strokeWidth={2.4}
//                       />
//                     </span>

//                     <div>
//                       <span className="block text-[8px] font-black uppercase tracking-[0.21em] text-[#8D8792]">
//                         Charter 01
//                       </span>

//                       <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.19em] text-[#6254B4]">
//                         Our Mission
//                       </span>
//                     </div>
//                   </div>

//                   <span className="h-2.5 w-2.5 rounded-full bg-[#6254B4]" />
//                 </div>

//                 <h3 className="mt-8 max-w-[620px] text-[37px] font-black leading-[0.97] tracking-[-0.048em] text-[#18141F] sm:text-[48px]">
//                   Make every visit practical from the first inspection.
//                 </h3>

//                 <p className="mb-0 mt-6 max-w-2xl text-sm font-medium leading-7 text-[#6B6571] sm:text-base sm:leading-8">
//                   Our mission is to help customers across {LOCAL.area}{" "}
//                   understand their pest issue properly before a service
//                   route is recommended. We inspect the signs, consider
//                   the property and explain what may need to happen next.
//                 </p>

//                 <div className="mt-8 border-y border-[#DDD7E5]">
//                   {missionPoints.map((item, index) => (
//                     <div
//                       key={item}
//                       className="grid grid-cols-[58px_1fr] border-b border-[#DDD7E5] last:border-b-0"
//                     >
//                       <span className="flex min-h-[62px] items-center justify-center border-r border-[#DDD7E5] text-[9px] font-black tracking-[0.16em] text-[#6254B4]">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       <span className="flex min-h-[62px] items-center gap-3 px-5 text-[10px] font-black uppercase leading-5 tracking-[0.1em] text-[#3E3844]">
//                         <Check
//                           size={16}
//                           strokeWidth={3}
//                           className="shrink-0 text-[#6254B4]"
//                         />

//                         {item}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </article>

//             {/* VISION */}
//             <article className="relative overflow-hidden bg-[#18141F] text-white">
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute -right-12 top-3 text-[150px] font-black leading-none tracking-[-0.09em] text-white/[0.035]"
//               >
//                 02
//               </div>

//               <div className="pointer-events-none absolute -bottom-40 -left-28 h-80 w-80 rounded-full bg-[#6254B4]/35 blur-[120px]" />

//               <div className="relative z-10 flex h-full flex-col p-6 sm:p-9 lg:p-11 xl:p-12">
//                 <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-5">
//                   <div className="flex items-center gap-4">
//                     <span className="flex h-12 w-12 items-center justify-center bg-[#6254B4] text-white">
//                       <Eye
//                         size={22}
//                         strokeWidth={2.4}
//                       />
//                     </span>

//                     <div>
//                       <span className="block text-[8px] font-black uppercase tracking-[0.21em] text-white/35">
//                         Charter 02
//                       </span>

//                       <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.19em] text-[#BDB6FF]">
//                         Our Vision
//                       </span>
//                     </div>
//                   </div>

//                   <span className="h-2.5 w-2.5 rounded-full bg-[#BDB6FF]" />
//                 </div>

//                 <h3 className="mt-8 max-w-[620px] text-[37px] font-black leading-[0.97] tracking-[-0.048em] text-white sm:text-[48px]">
//                   Become a trusted name for clear and responsible pest
//                   control.
//                 </h3>

//                 <p className="mb-0 mt-6 max-w-2xl text-sm font-medium leading-7 text-white/58 sm:text-base sm:leading-8">
//                   Our vision is for {LOCAL.shortName} to be known for
//                   honest communication, careful property inspections
//                   and prevention-focused support rather than rushed,
//                   one-size-fits-all recommendations.
//                 </p>

//                 <div className="mt-auto pt-10">
//                   <div className="grid grid-cols-[58px_1fr] border border-white/10 bg-white/[0.055]">
//                     <span className="flex min-h-[145px] items-center justify-center border-r border-white/10 text-[#BDB6FF]">
//                       <Eye
//                         size={22}
//                         strokeWidth={2.4}
//                       />
//                     </span>

//                     <div className="flex items-center px-6 py-6">
//                       <p className="mb-0 text-[19px] font-black leading-8 tracking-[-0.025em] text-white sm:text-[23px]">
//                         “Understand the property. Explain the issue.
//                         Recommend the right next step.”
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           </div>
//         </div>

//         {/* WORKING STANDARD */}
//         <div className="sgw-mv-reveal sgw-mv-delay-2 mt-10 border border-[#CFC8D9]">
//           <div className="grid xl:grid-cols-[0.68fr_1.32fr]">
//             {/* PROCESS INTRO */}
//             <div className="relative overflow-hidden border-b border-white/10 bg-[#6254B4] p-7 text-white sm:p-10 xl:border-b-0 xl:border-r xl:p-12">
//               <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[48px] border-white/[0.06]" />

//               <div className="pointer-events-none absolute -bottom-36 -left-20 h-72 w-72 rounded-full bg-[#18141F]/30 blur-[110px]" />

//               <div className="relative z-10">
//                 <span className="text-[9px] font-black uppercase tracking-[0.23em] text-white/60">
//                   Our Working Standard
//                 </span>

//                 <h3 className="mt-5 max-w-[520px] text-[39px] font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-[51px]">
//                   One clear process from inspection to prevention.
//                 </h3>

//                 <p className="mb-0 mt-6 max-w-md text-sm font-medium leading-7 text-white/65">
//                   Three connected stages designed to keep the service
//                   understandable, relevant and focused on the property.
//                 </p>

//                 <div className="mt-10 border-t border-white/15 pt-6">
//                   <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/45">
//                     Service Base
//                   </span>

//                   <address className="mt-3 not-italic text-sm font-black leading-6 text-white">
//                     {LOCAL.address}
//                   </address>
//                 </div>
//               </div>
//             </div>

//             {/* PROCESS RECORDS */}
//             <div className="grid bg-white lg:grid-cols-3">
//               {process.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <article
//                     key={item.number}
//                     className={`sgw-mv-process group relative min-h-[390px] overflow-hidden border-[#D8D2DF] bg-white ${
//                       index !== process.length - 1
//                         ? "border-b lg:border-b-0 lg:border-r"
//                         : ""
//                     }`}
//                   >
//                     <div className="grid grid-cols-[70px_1fr] border-b border-[#D8D2DF]">
//                       <span className="flex min-h-[66px] items-center justify-center border-r border-[#D8D2DF] bg-[#18141F] text-[10px] font-black tracking-[0.15em] text-white">
//                         {item.number}
//                       </span>

//                       <span className="flex min-h-[66px] items-center px-5 text-[8px] font-black uppercase tracking-[0.19em] text-[#6254B4]">
//                         {item.eyebrow}
//                       </span>
//                     </div>

//                     <div className="flex min-h-[324px] flex-col p-6 sm:p-8">
//                       <span className="flex h-13 w-13 h-14 w-14 items-center justify-center bg-[#F0ECF6] text-[#6254B4] transition-colors duration-300 group-hover:bg-[#6254B4] group-hover:text-white">
//                         <Icon
//                           size={23}
//                           strokeWidth={2.4}
//                         />
//                       </span>

//                       <h4 className="mt-7 text-[31px] font-black tracking-[-0.04em] text-[#18141F]">
//                         {item.title}
//                       </h4>

//                       <p className="mb-0 mt-4 text-sm font-medium leading-7 text-[#6A6470]">
//                         {item.text}
//                       </p>

//                       <div className="mt-auto flex items-center justify-between border-t border-[#DDD7E5] pt-6">
//                         <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#6254B4]">
//                           Stage {item.number}
//                         </span>

//                         <Check
//                           size={17}
//                           strokeWidth={3}
//                           className="text-[#6254B4]"
//                         />
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="sgw-mv-reveal sgw-mv-delay-3 mt-8 grid border-y border-[#CEC7D8] lg:grid-cols-[90px_1fr_auto]">
//           <div className="flex min-h-[105px] items-center justify-center border-b border-[#CEC7D8] bg-[#18141F] text-white lg:border-b-0 lg:border-r">
//             <ShieldCheck
//               size={23}
//               strokeWidth={2.4}
//             />
//           </div>

//           <div className="flex flex-col justify-center px-6 py-7 lg:px-8">
//             <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//               {LOCAL.businessName}
//             </span>

//             <p className="mb-0 mt-2 max-w-3xl text-sm font-semibold leading-7 text-[#5F5965] sm:text-base">
//               Tell us what signs you have noticed and where pest
//               activity is appearing around your Westminster property.
//             </p>
//           </div>

//           <div className="flex items-center border-t border-[#CEC7D8] p-5 lg:border-l lg:border-t-0">
//             <button
//               type="button"
//               onClick={() => navigate("/contact-us")}
//               className="group flex min-h-[60px] w-full min-w-[235px] items-center justify-between bg-[#6254B4] px-6 text-[9px] font-black uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#18141F]"
//             >
//               Send An Enquiry

//               <ArrowRight
//                 size={18}
//                 strokeWidth={2.5}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


















import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  Eye,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Target,
  ChevronRight,
} from "lucide-react";

export default function MissionVisionSection() {
  const navigate = useNavigate();

  const LOCAL = {
    area: "Marylebone",
    city: "London",
    postcode: "NW1 6UB",
    address: "49 Shroton St, London NW1 6UB, United Kingdom",
    businessName: "Superguard Services Marylebone",
    shortName: "Superguard Marylebone",
    phone: "+44 7356 236459",
    phoneTel: "+447356236459",
  };

  const principles = [
    {
      number: "01",
      title: "Inspect",
      text: "Understand the signs, affected areas and possible access points before deciding on the next step.",
      icon: Search,
    },
    {
      number: "02",
      title: "Respond",
      text: "Choose a practical pest control approach based on the pest, property and level of activity.",
      icon: Target,
    },
    {
      number: "03",
      title: "Protect",
      text: "Where appropriate, identify practical measures that can help reduce further pest activity.",
      icon: ShieldCheck,
    },
  ];

  const values = [
    "Clear communication",
    "Property-focused thinking",
    "Practical recommendations",
    "Responsible pest control",
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".sgm-mv-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("sgm-mv-visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sgm-mv-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="marylebone-mission-heading"
      className="relative overflow-hidden bg-[#F7F7F8] py-20 text-[#17151C] sm:py-24 lg:py-32"
    >
      <style>{`
        .sgm-mv-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 900ms cubic-bezier(.16,1,.3,1),
            transform 900ms cubic-bezier(.16,1,.3,1);
        }

        .sgm-mv-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sgm-mv-delay-1 {
          transition-delay: 120ms;
        }

        .sgm-mv-delay-2 {
          transition-delay: 220ms;
        }

        .sgm-mv-delay-3 {
          transition-delay: 320ms;
        }

        .sgm-mv-delay-4 {
          transition-delay: 420ms;
        }

        .sgm-mv-card {
          transition:
            transform 450ms cubic-bezier(.16,1,.3,1),
            box-shadow 450ms ease;
        }

        .sgm-mv-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(23,21,28,.14);
        }

        .sgm-mv-value {
          transition:
            background-color 300ms ease,
            color 300ms ease,
            transform 300ms cubic-bezier(.16,1,.3,1);
        }

        .sgm-mv-value:hover {
          background: #6055A6;
          color: white;
          transform: translateX(7px);
        }

        .sgm-mv-process {
          transition:
            background-color 350ms ease,
            color 350ms ease,
            border-color 350ms ease;
        }

        .sgm-mv-process:hover {
          background: #6055A6;
          color: white;
          border-color: #6055A6;
        }

        .sgm-mv-process:hover .sgm-mv-process-icon {
          background: white;
          color: #6055A6;
        }

        .sgm-mv-process-icon {
          transition:
            background-color 300ms ease,
            color 300ms ease,
            transform 350ms cubic-bezier(.16,1,.3,1);
        }

        .sgm-mv-process:hover .sgm-mv-process-icon {
          transform: rotate(-8deg) scale(1.05);
        }

        .sgm-mv-ring {
          animation: sgmRingFloat 6s ease-in-out infinite;
        }

        .sgm-mv-dot {
          animation: sgmDotPulse 2.5s ease-in-out infinite;
        }

        @keyframes sgmRingFloat {
          0%,100% {
            transform: rotate(0deg) translateY(0);
          }
          50% {
            transform: rotate(8deg) translateY(-8px);
          }
        }

        @keyframes sgmDotPulse {
          0%,100% {
            opacity: .35;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sgm-mv-reveal,
          .sgm-mv-card,
          .sgm-mv-value,
          .sgm-mv-process,
          .sgm-mv-process-icon,
          .sgm-mv-ring,
          .sgm-mv-dot {
            animation: none;
            transition: none;
          }

          .sgm-mv-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#6055A6 1px, transparent 1px), linear-gradient(90deg, #6055A6 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        <div className="absolute -left-48 top-[-180px] h-[600px] w-[600px] rounded-full bg-[#6055A6]/10 blur-[150px]" />

        <div className="absolute -bottom-56 right-[-180px] h-[600px] w-[600px] rounded-full border-[110px] border-[#6055A6]/[0.035]" />

        <div className="absolute right-[8%] top-[20%] hidden h-40 w-40 rounded-full border border-[#6055A6]/10 lg:block" />

        <div className="absolute left-[7%] bottom-[15%] hidden h-3 w-3 rounded-full bg-[#6055A6]/30 lg:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            TOP LOCATION BAR
        ===================================================== */}

        <div className="sgm-mv-reveal flex flex-col border-y border-[#17151C]/10 lg:flex-row lg:items-stretch lg:justify-between">

          <div className="flex items-center gap-4 py-5 lg:pr-10">

            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#6055A6] text-white">
              <ShieldCheck size={18} />

              <span className="sgm-mv-dot absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-[#17151C]" />
            </div>

            <div>
              <span className="block text-[8px] font-black uppercase tracking-[0.28em] text-[#6055A6]">
                Our Mission & Vision
              </span>

              <span className="mt-1 block text-xs font-black uppercase tracking-[0.04em]">
                {LOCAL.businessName}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 border-t border-[#17151C]/10 py-5 lg:border-l lg:border-t-0 lg:px-8">

            <div className="flex items-center gap-2">
              <MapPin
                size={15}
                className="text-[#6055A6]"
              />

              <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#17151C]/50">
                {LOCAL.area} · {LOCAL.city}
              </span>
            </div>

            <div className="hidden h-5 w-px bg-[#17151C]/10 sm:block" />

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="flex items-center gap-2 text-[#6055A6] transition-colors hover:text-[#17151C]"
            >
              <Phone size={14} />

              <span className="text-[8px] font-black uppercase tracking-[0.15em]">
                {LOCAL.phone}
              </span>
            </a>
          </div>
        </div>

        {/* =====================================================
            HERO INTRO
        ===================================================== */}

        <div className="sgm-mv-reveal sgm-mv-delay-1 mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:mt-24">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-12 bg-[#6055A6]" />

              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
                What We Stand For
              </span>
            </div>

            <p className="mt-7 max-w-md text-sm font-medium leading-7 text-[#17151C]/50">
              At {LOCAL.shortName}, our aim is simple: provide
              professional pest control with a clear, property-focused
              approach.
            </p>
          </div>

          <h2
            id="marylebone-mission-heading"
            className="max-w-[950px] text-[52px] font-black leading-[0.86] tracking-[-0.075em] sm:text-[72px] lg:text-[92px]"
          >
            Control the problem.
            <span className="block text-[#6055A6]">
              Understand the property.
            </span>
          </h2>
        </div>

        {/* =====================================================
            MAIN MISSION / VISION COMPOSITION
        ===================================================== */}

        <div className="sgm-mv-reveal sgm-mv-delay-2 relative mt-16 lg:mt-20">

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">

            {/* =================================================
                MISSION CARD
            ================================================= */}

            <article className="sgm-mv-card relative overflow-hidden bg-[#6055A6] p-7 text-white sm:p-10 lg:p-14">

              {/* Decorative circle */}
              <div
                aria-hidden="true"
                className="sgm-mv-ring pointer-events-none absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full border-[55px] border-white/[0.07]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#17151C]/10 blur-3xl"
              />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#6055A6]">
                    <Target
                      size={24}
                      strokeWidth={2.3}
                    />
                  </div>

                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/45">
                    01 / Mission
                  </span>
                </div>

                <span className="mt-14 block text-[8px] font-black uppercase tracking-[0.28em] text-white/55">
                  Our Mission
                </span>

                <h3 className="mt-5 max-w-[650px] text-[43px] font-black leading-[0.9] tracking-[-0.06em] sm:text-[57px] lg:text-[67px]">
                  Make pest control feel
                  <span className="block text-white/45">
                    clear and practical.
                  </span>
                </h3>

                <p className="mt-7 max-w-[600px] text-sm font-medium leading-7 text-white/65 sm:text-base sm:leading-8">
                  Our mission is to help homes, landlords, offices,
                  shops and commercial properties across {LOCAL.area}
                  understand their pest problem and move forward with
                  a sensible service approach.
                </p>

                {/* Values */}
                <div className="mt-10 border-t border-white/15 pt-6">

                  <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/40">
                    What guides us
                  </span>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">

                    {values.map((value) => (
                      <div
                        key={value}
                        className="flex items-center gap-3 border border-white/10 bg-white/[0.06] px-4 py-4"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#6055A6]">
                          <Check
                            size={13}
                            strokeWidth={3}
                          />
                        </span>

                        <span className="text-[9px] font-black uppercase tracking-[0.12em] text-white/75">
                          {value}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </article>

            {/* =================================================
                VISION CARD
            ================================================= */}

            <article className="sgm-mv-card relative overflow-hidden bg-[#17151C] p-7 text-white sm:p-10 lg:p-14">

              {/* Giant eye circle */}
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 flex h-72 w-72 items-center justify-center rounded-full border border-white/[0.07]"
              >
                <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/[0.07]">
                  <div className="h-20 w-20 rounded-full bg-[#6055A6]/20" />
                </div>
              </div>

              <div className="relative z-10 flex h-full flex-col">

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6055A6] text-white">
                    <Eye
                      size={24}
                      strokeWidth={2.3}
                    />
                  </div>

                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                    02 / Vision
                  </span>
                </div>

                <span className="mt-14 block text-[8px] font-black uppercase tracking-[0.28em] text-[#BDB6FF]">
                  Our Vision
                </span>

                <h3 className="mt-5 max-w-[620px] text-[43px] font-black leading-[0.9] tracking-[-0.06em] sm:text-[57px] lg:text-[67px]">
                  Be known for
                  <span className="block text-white/35">
                    doing things properly.
                  </span>
                </h3>

                <p className="mt-7 max-w-[590px] text-sm font-medium leading-7 text-white/50 sm:text-base sm:leading-8">
                  We want {LOCAL.businessName} to be recognised in
                  Marylebone for thoughtful inspections, clear
                  communication and practical pest control support —
                  rather than rushed, one-size-fits-all solutions.
                </p>

                {/* Quote */}
                <div className="mt-auto pt-12">

                  <div className="relative overflow-hidden border border-white/10 bg-white/[0.045] p-6 sm:p-7">

                    <span className="absolute -right-3 -top-12 text-[130px] font-black leading-none text-[#6055A6]/15">
                      “
                    </span>

                    <div className="relative z-10">

                      <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#BDB6FF]">
                        The standard we aim for
                      </span>

                      <p className="mt-4 text-[20px] font-black leading-8 tracking-[-0.025em] text-white sm:text-[24px]">
                        Inspect carefully.
                        <br />
                        Explain clearly.
                        <br />
                        Act responsibly.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Floating middle badge */}
          <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">

            <div className="flex h-20 w-20 items-center justify-center rounded-full border-[6px] border-[#F7F7F8] bg-[#17151C] text-white shadow-2xl">
              <span className="text-[8px] font-black uppercase tracking-[0.2em]">
                SG
              </span>
            </div>

          </div>
        </div>

        {/* =====================================================
            MARYLEBONE IDENTITY STRIP
        ===================================================== */}

        <div className="sgm-mv-reveal sgm-mv-delay-2 mt-6 grid overflow-hidden bg-white shadow-[0_25px_80px_rgba(23,21,28,.08)] sm:grid-cols-3">

          <div className="border-b border-[#17151C]/10 p-6 sm:border-b-0 sm:border-r lg:p-8">

            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#17151C]/35">
              Service Location
            </span>

            <div className="mt-5 flex items-center gap-3">
              <MapPin
                size={19}
                className="text-[#6055A6]"
              />

              <span className="text-lg font-black tracking-[-0.035em]">
                {LOCAL.area}, {LOCAL.city}
              </span>
            </div>
          </div>

          <div className="border-b border-[#17151C]/10 p-6 sm:border-b-0 sm:border-r lg:p-8">

            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#17151C]/35">
              Property Approach
            </span>

            <p className="mt-5 text-sm font-bold leading-6 text-[#17151C]/65">
              Residential & commercial pest control support.
            </p>
          </div>

          <a
            href={`tel:${LOCAL.phoneTel}`}
            className="group flex items-center justify-between p-6 transition-colors duration-300 hover:bg-[#6055A6] hover:text-white lg:p-8"
          >

            <div>
              <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#17151C]/35 group-hover:text-white/45">
                Direct Contact
              </span>

              <span className="mt-4 block text-xl font-black tracking-[-0.04em] text-[#6055A6] group-hover:text-white">
                {LOCAL.phone}
              </span>
            </div>

            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#17151C] text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#6055A6]">
              <Phone size={17} />
            </span>

          </a>
        </div>

        {/* =====================================================
            HOW WE TURN THE VISION INTO ACTION
        ===================================================== */}

        <div className="sgm-mv-reveal sgm-mv-delay-3 mt-24 lg:mt-32">

          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">

            <div>

              <div className="flex items-center gap-3">

                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
                  Turning Purpose Into Action
                </span>

                <span className="h-px w-16 bg-[#6055A6]" />
              </div>

              <h3 className="mt-5 max-w-[500px] text-[45px] font-black leading-[0.88] tracking-[-0.07em] sm:text-[60px]">
                How we put
                <span className="block text-[#6055A6]">
                  it into practice.
                </span>
              </h3>
            </div>

            <p className="max-w-[600px] text-sm font-medium leading-7 text-[#17151C]/50 lg:pb-2">
              Our mission and vision are reflected in the way we approach
              pest control work — from understanding the issue to
              recommending practical next steps for the property.
            </p>
          </div>

          {/* Process */}
          <div className="relative mt-12">

            {/* Timeline line */}
            <div className="absolute bottom-0 left-[29px] top-0 hidden w-px bg-[#17151C]/10 md:block" />

            <div className="grid gap-4">

              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="sgm-mv-process group relative grid overflow-hidden border border-[#17151C]/10 bg-white md:grid-cols-[90px_90px_1fr_auto] md:items-center"
                  >

                    {/* Number */}
                    <div className="flex min-h-[72px] items-center border-b border-[#17151C]/10 bg-[#F1EFF4] px-6 md:min-h-[150px] md:justify-center md:border-b-0 md:border-r">

                      <span className="text-[11px] font-black tracking-[0.2em] text-[#6055A6] group-hover:text-white">
                        {item.number}
                      </span>

                    </div>

                    {/* Icon */}
                    <div className="flex items-center px-6 py-5 md:justify-center md:px-0">

                      <span className="sgm-mv-process-icon flex h-12 w-12 items-center justify-center rounded-full bg-[#6055A6]/10 text-[#6055A6]">
                        <Icon
                          size={21}
                          strokeWidth={2.3}
                        />
                      </span>

                    </div>

                    {/* Content */}
                    <div className="px-6 pb-7 md:px-7 md:py-7 md:pb-7">

                      <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#6055A6] group-hover:text-white/60">
                        Stage {item.number}
                      </span>

                      <h4 className="mt-3 text-[30px] font-black tracking-[-0.045em]">
                        {item.title}
                      </h4>

                      <p className="mt-3 max-w-[650px] text-sm font-medium leading-7 text-[#17151C]/50 group-hover:text-white/65">
                        {item.text}
                      </p>

                    </div>

                    {/* Arrow */}
                    <div className="hidden px-7 md:block">

                      <ArrowUpRight
                        size={22}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />

                    </div>

                  </article>
                );
              })}

            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <div className="sgm-mv-reveal sgm-mv-delay-4 relative mt-24 overflow-hidden bg-[#6055A6] px-7 py-12 text-white sm:px-12 sm:py-16 lg:mt-32 lg:px-16 lg:py-20">

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[45px] border-white/[0.07]" />

          <div className="pointer-events-none absolute -bottom-28 right-[15%] h-48 w-48 rounded-full border border-white/[0.08]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/50">
                {LOCAL.businessName}
              </span>

              <h3 className="mt-5 max-w-[850px] text-[43px] font-black leading-[0.88] tracking-[-0.07em] sm:text-[60px] lg:text-[75px]">
                Better pest control
                <span className="block text-white/40">
                  starts with understanding.
                </span>
              </h3>

              <p className="mt-6 max-w-[600px] text-sm font-medium leading-7 text-white/60">
                If you have noticed signs of pest activity around your
                property in {LOCAL.area}, our team can help you understand
                the issue and discuss the appropriate next step.
              </p>

            </div>

            <div className="flex flex-col gap-3">

              <button
                type="button"
                onClick={() => navigate("/contact-us")}
                className="group flex min-h-[60px] min-w-[235px] items-center justify-between gap-8 bg-white px-7 text-[9px] font-black uppercase tracking-[0.18em] text-[#17151C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#17151C] hover:text-white"
              >
                Contact Our Team

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="flex min-h-[60px] items-center justify-center gap-3 border border-white/25 px-7 text-[9px] font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <Phone size={15} />

                Call {LOCAL.phone}
              </a>

            </div>
          </div>
        </div>

        {/* =====================================================
            FOOTER LOCATION
        ===================================================== */}

        <div className="mt-7 flex flex-col gap-3 text-[8px] font-black uppercase tracking-[0.18em] text-[#17151C]/30 sm:flex-row sm:items-center sm:justify-between">

          <span>
            {LOCAL.businessName}
          </span>

          <span>
            {LOCAL.address}
          </span>

          <span className="text-[#6055A6]">
            {LOCAL.area} · {LOCAL.postcode}
          </span>

        </div>
      </div>
    </section>
  );
}