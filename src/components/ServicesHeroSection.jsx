



// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Phone,
//   MapPin,
//   CheckCircle2,
//   Bug,
//   ShieldCheck,
//   SearchCheck,
//   Home,
//   Mouse,
//   Bird,
//   ClipboardCheck,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     address: "36 Sutherland Square, London SE17 3EE",
//     phoneNo: "07466 565503",
//     phoneTel: "+447466565503",
//     companyName: "SuperGuard Walworth",
//   };

//   const serviceTypes = [
//     { title: "Rodents", text: "Rats, mice & squirrels", icon: Mouse },
//     { title: "Insects", text: "Bed bugs, ants & fleas", icon: Bug },
//     { title: "Birds", text: "Proofing & deterrents", icon: Bird },
//     { title: "Inspection", text: "Find the root cause", icon: ClipboardCheck },
//   ];

//   return (
//     <section className="relative mt-10 overflow-hidden bg-[#F8F6FF] pt-32 pb-20 lg:pt-40 lg:pb-28">
//       <style>{`
//         @keyframes sgHeroFadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .sg-hero-up {
//           animation: sgHeroFadeUp .75s cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sg-delay-1 { animation-delay: 120ms; }
//         .sg-delay-2 { animation-delay: 220ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-hero-up { animation: none; }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute right-0 top-0 h-full w-full bg-[#5F52B5]"
//           style={{
//             clipPath: "polygon(55% 0, 100% 0, 100% 100%, 70% 100%)",
//           }}
//         />
//         <div className="absolute -left-32 top-24 h-[460px] w-[460px] rounded-full bg-[#5F52B5]/12 blur-3xl" />
//         <div className="absolute -right-32 bottom-[-120px] h-[520px] w-[520px] rounded-full bg-[#17122F]/22 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
//           {/* LEFT CONTENT */}
//           <div className="sg-hero-up lg:col-span-5">
//             <span className="inline-flex bg-[#5F52B5] px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-xl">
//               <ShieldCheck className="mr-2 h-4 w-4" />
//               Services Directory • {LOCAL.area} {LOCAL.postcode}
//             </span>

//             <h1 className="mt-7 text-4xl font-black leading-[0.92] tracking-tight text-[#17122F] sm:text-5xl lg:text-7xl">
//               Pest Control Services For SE17 Properties.
//             </h1>

//             <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-slate-700 sm:text-lg">
//               Browse {LOCAL.companyName} services for rodents, bed bugs, ants,
//               cockroaches, fleas, wasps, birds and property proofing across{" "}
//               {LOCAL.postcode}. Choose the issue and request local support.
//             </p>

//             <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center justify-center gap-2 bg-[#5F52B5] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition-all hover:bg-[#17122F]"
//               >
//                 Book Inspection
//                 <ArrowRight className="h-4 w-4" />
//               </Link>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="inline-flex items-center justify-center gap-2 bg-[#17122F] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition-all hover:bg-[#5F52B5]"
//               >
//                 <Phone className="h-4 w-4" />
//                 {LOCAL.phoneNo}
//               </a>
//             </div>

//             <div className="sg-hero-up sg-delay-2 mt-9 grid gap-3 sm:grid-cols-3">
//               {[
//                 { icon: SearchCheck, title: "Inspection First" },
//                 { icon: ShieldCheck, title: "Targeted Plan" },
//                 { icon: Home, title: "SE17 Support" },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div key={item.title} className="bg-white p-4 shadow-xl shadow-[#17122F]/6">
//                     <Icon className="mb-3 h-5 w-5 text-[#5F52B5]" />
//                     <span className="text-sm font-black text-[#17122F]">
//                       {item.title}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* CENTER IMAGE */}
//           <div className="sg-hero-up sg-delay-1 lg:col-span-4">
//             <div className="relative min-h-[560px] overflow-hidden bg-[#17122F] shadow-2xl shadow-[#17122F]/25">
//               <img
//                 src="/images/servicehero.webp"
//                 alt={`${LOCAL.companyName} pest control services in ${LOCAL.area}`}
//                 className="absolute inset-0 h-full w-full object-cover opacity-85"
//                 loading="eager"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#17122F] via-[#17122F]/25 to-transparent" />

//               <div className="absolute left-5 top-5 bg-white px-5 py-4 shadow-xl">
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                   Local Base
//                 </span>
//                 <span className="block text-xl font-black text-[#17122F]">
//                   {LOCAL.area}
//                 </span>
//               </div>

//               <div className="absolute bottom-5 left-5 right-5 bg-white p-6 shadow-2xl">
//                 <MapPin className="mb-4 h-6 w-6 text-[#5F52B5]" />
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                   Address
//                 </span>
//                 <address className="mt-2 not-italic text-sm font-black leading-relaxed text-[#17122F]">
//                   {LOCAL.address}
//                 </address>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SERVICE COMMAND */}
//           <div className="sg-hero-up sg-delay-2 lg:col-span-3">
//             <div className="grid gap-4">
//               {serviceTypes.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="group bg-white p-5 shadow-2xl shadow-[#17122F]/10 transition-all hover:-translate-y-1 hover:bg-[#17122F]"
//                   >
//                     <div className="flex items-start justify-between gap-4">
//                       <div className="flex h-13 w-13 items-center justify-center bg-[#5F52B5] text-white group-hover:bg-white group-hover:text-[#5F52B5]">
//                         <Icon className="h-6 w-6" />
//                       </div>

//                       <CheckCircle2 className="h-5 w-5 text-[#5F52B5] group-hover:text-white" />
//                     </div>

//                     <h3 className="mt-5 text-2xl font-black text-[#17122F] group-hover:text-white">
//                       {item.title}
//                     </h3>

//                     <p className="mt-2 text-sm font-semibold text-slate-600 group-hover:text-white/70">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="bg-[#17122F] p-6 text-white shadow-2xl shadow-[#17122F]/20 transition-all hover:bg-white hover:text-[#5F52B5]"
//               >
//                 <Phone className="mb-4 h-6 w-6" />
//                 <span className="block text-[10px] font-black uppercase tracking-widest opacity-60">
//                   Call Direct
//                 </span>
//                 <span className="mt-2 block text-2xl font-black">
//                   {LOCAL.phoneNo}
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowDown,
//   ArrowRight,
//   CheckCircle2,
//   MapPin,
//   SearchCheck,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     area: "Holborn",
//     postcode: "WC2R 3JF",
//     address: "50 Essex Street, London, WC2R 3JF",
//   };

//   const scrollToServices = () => {
//     const section =
//       document.getElementById("services-list") ||
//       document.getElementById("all-services") ||
//       document.getElementById("service-directory");

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   const trustPoints = [
//     "Inspection Before Treatment",
//     "Residential & Commercial Support",
//     "Clear Practical Advice",
//   ];

//   return (
//     <section
//       aria-labelledby="services-hero-heading"
//       className="relative mt-10 overflow-hidden bg-[#6055A6] pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40"
//     >
//       <style>{`
//         @keyframes serviceHeroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes serviceHeroImageReveal {
//           from {
//             opacity: 0;
//             transform: scale(0.96) translateY(30px);
//           }

//           to {
//             opacity: 1;
//             transform: scale(1) translateY(0);
//           }
//         }

//         @keyframes serviceHeroFloat {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         .service-hero-reveal {
//           animation: serviceHeroReveal 850ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .service-hero-image-reveal {
//           animation: serviceHeroImageReveal 1000ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .service-hero-delay-1 {
//           animation-delay: 120ms;
//         }

//         .service-hero-delay-2 {
//           animation-delay: 220ms;
//         }

//         .service-hero-delay-3 {
//           animation-delay: 320ms;
//         }

//         .service-hero-float {
//           animation: serviceHeroFloat 5s ease-in-out infinite;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .service-hero-reveal,
//           .service-hero-image-reveal,
//           .service-hero-float {
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* BACKGROUND DECORATION */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-52 -top-52 h-[620px] w-[620px] rounded-full bg-white/10 blur-[150px]" />

//         <div className="absolute -bottom-72 right-[-180px] h-[720px] w-[720px] rounded-full bg-[#171327]/35 blur-[170px]" />

//         <div className="absolute left-[42%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#867BC8]/30 blur-[130px]" />

//         <div
//           className="absolute inset-0 opacity-[0.05]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
//             backgroundSize: "88px 88px",
//           }}
//         />

//         <div
//           aria-hidden="true"
//           className="absolute left-[-40px] top-[120px] hidden rotate-[-90deg] text-[10px] font-black uppercase tracking-[0.5em] text-white/20 lg:block"
//         >
//           SuperGuard Holborn
//         </div>

//         <div
//           aria-hidden="true"
//           className="absolute right-[-70px] top-[120px] hidden select-none text-[220px] font-black leading-none tracking-[-0.08em] text-white/[0.035] lg:block"
//         >
//           01
//         </div>
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14">
//         {/* TOP LINE */}
//         <div className="service-hero-reveal flex flex-col gap-4 border-b border-white/15 pb-6 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-3">
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
//               <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
//             </span>

//             <span className="text-[9px] font-black uppercase tracking-[0.26em] text-white/75 sm:text-[10px]">
//               Residential & Commercial Pest Control
//             </span>
//           </div>

//           <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em] text-white/55 sm:text-[10px]">
//             <MapPin
//               size={15}
//               strokeWidth={2.4}
//               className="shrink-0 text-white"
//             />

//             {LOCAL.address}
//           </div>
//         </div>

//         {/* MAIN HEADING */}
//         <div className="service-hero-reveal service-hero-delay-1 mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
//           <div>
//             <div className="flex items-center gap-4">
//               <span className="h-px w-14 bg-white/45 sm:w-20" />

//               <span className="text-[9px] font-black uppercase tracking-[0.28em] text-white/65 sm:text-[10px]">
//                 Pest Control Services
//               </span>
//             </div>

//             <h1
//               id="services-hero-heading"
//               className="mt-6 max-w-[1050px] text-[48px] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[66px] md:text-[82px] lg:text-[98px] xl:text-[112px]"
//             >
//               Pest Control
//               <span className="block text-[#D9D4FF]">
//                 For Holborn Properties.
//               </span>
//             </h1>
//           </div>

//           <div className="lg:pb-2">
//             <p className="max-w-xl text-sm font-medium leading-7 text-white/70 sm:text-base sm:leading-8">
//               Explore professional pest control support for rodents, insects,
//               birds and property-related pest concerns across Holborn and
//               Central London.
//             </p>

//             <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-white/50">
//               We focus on inspection, treatment planning and clear practical
//               guidance for homes, landlords and businesses.
//             </p>
//           </div>
//         </div>

//         {/* CTA ROW */}
//         <div className="service-hero-reveal service-hero-delay-2 mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
//           <Link
//             to="/contact-us"
//             className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-[#6055A6] shadow-[0_18px_45px_rgba(23,19,39,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#171327] hover:text-white"
//           >
//             Request An Inspection

//             <ArrowRight
//               size={17}
//               strokeWidth={2.6}
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </Link>

//           {/* <button
//             type="button"
//             onClick={scrollToServices}
//             className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.08] px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6055A6]"
//           >
//             Browse Services

//             <ArrowDown
//               size={17}
//               strokeWidth={2.6}
//               className="transition-transform duration-300 group-hover:translate-y-1"
//             />
//           </button> */}
//         </div>

//         {/* IMAGE STAGE */}
//         <div className="service-hero-image-reveal service-hero-delay-2 relative mt-14 lg:mt-16">
//           <div className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/15 bg-[#171327] shadow-[0_40px_110px_rgba(23,19,39,0.28)] sm:min-h-[650px] lg:min-h-[760px]">
//             <img
//               src="/images/servicehero.webp"
//               alt={`${LOCAL.company} pest control services in ${LOCAL.area}`}
//               className="absolute inset-0 h-full w-full object-cover object-center"
//               loading="eager"
//               fetchPriority="high"
//             />

//             <div className="absolute inset-0 bg-[#171327]/18" />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#171327]/90 via-[#171327]/15 to-transparent" />

//             <div className="absolute inset-0 bg-gradient-to-r from-[#171327]/25 via-transparent to-[#6055A6]/25" />

//             <div className="absolute inset-0 bg-[#6055A6]/10 mix-blend-multiply" />

//             {/* TOP GLASS BADGE */}
//             <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
//               <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white shadow-2xl backdrop-blur-xl">
//                 <ShieldCheck
//                   size={17}
//                   strokeWidth={2.5}
//                 />

//                 <span className="text-[9px] font-black uppercase tracking-[0.19em]">
//                   SuperGuard Holborn
//                 </span>
//               </div>
//             </div>

//             {/* FLOATING PROCESS PANEL */}
//             <div className="service-hero-float absolute right-5 top-5 hidden w-[270px] rounded-[26px] border border-white/15 bg-[#171327]/35 p-6 text-white shadow-2xl backdrop-blur-xl sm:right-8 sm:top-8 lg:block">
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#6055A6]">
//                 <SearchCheck
//                   size={21}
//                   strokeWidth={2.5}
//                 />
//               </div>

//               <span className="mt-5 block text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                 Our Approach
//               </span>

//               <h2 className="mt-2 text-xl font-black leading-tight text-white">
//                 Inspect first. Understand the issue. Plan the next step.
//               </h2>
//             </div>

//             {/* IMAGE BOTTOM COPY */}
//             <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-11">
//               <div className="max-w-[850px]">
//                 <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#D9D4FF]">
//                   Professional Property Support
//                 </span>

//                 <h2 className="mt-4 text-3xl font-black leading-[0.96] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
//                   The Right Service Starts With Understanding The Property.
//                 </h2>

//                 <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/65 sm:text-base sm:leading-8">
//                   Tell us what signs you have noticed, where activity is
//                   appearing and the type of property requiring attention.
//                 </p>
//               </div>
//             </div>

//             {/* SIDE NUMBER */}
//             <div className="absolute bottom-8 right-8 hidden lg:block">
//               <span className="text-[110px] font-black leading-none tracking-[-0.08em] text-white/[0.08]">
//                 SG
//               </span>
//             </div>
//           </div>

//           {/* ADDRESS OVERLAP */}
//           <div className="relative z-20 mx-4 -mt-8 rounded-[28px] bg-[#171327] px-6 py-6 text-white shadow-[0_25px_70px_rgba(23,19,39,0.28)] sm:mx-8 sm:px-8 lg:mx-12 lg:-mt-10 lg:px-10">
//             <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-start gap-4">
//                 <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                   <MapPin
//                     size={21}
//                     strokeWidth={2.5}
//                   />
//                 </span>

//                 <div>
//                   <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#BDB6FF]">
//                     Holborn Base
//                   </span>

//                   <address className="mt-2 not-italic text-base font-black leading-relaxed text-white sm:text-lg">
//                     {LOCAL.address}
//                   </address>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-x-6 gap-y-3">
//                 {trustPoints.map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-2"
//                   >
//                     <CheckCircle2
//                       size={17}
//                       strokeWidth={2.7}
//                       className="shrink-0 text-[#BDB6FF]"
//                     />

//                     <span className="text-xs font-black text-white/70">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM CONTINUATION */}
//         <div className="service-hero-reveal service-hero-delay-3 mt-12 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-4">
//             <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white">
//               <Sparkles
//                 size={18}
//                 strokeWidth={2.4}
//               />
//             </span>

//             <div>
//               <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                 Next Section
//               </span>

//               <span className="mt-1 block text-sm font-black text-white">
//                 Explore the complete pest control service directory
//               </span>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={scrollToServices}
//             aria-label="Scroll to pest control services"
//             className="group flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#6055A6] transition-all duration-300 hover:-translate-y-1 hover:bg-[#171327] hover:text-white"
//           >
//             <ArrowDown
//               size={20}
//               strokeWidth={2.7}
//               className="transition-transform duration-300 group-hover:translate-y-1"
//             />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }














// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowDown,
//   ArrowRight,
//   Building2,
//   Check,
//   MapPin,
//   SearchCheck,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Westminster",
//     area: "Westminster",
//     postcode: "SW1P 4BD",
//     address: "14 Regency St, London SW1P 4BD",
//   };

//   /*
//    * Scroll behaviour intentionally preserved
//    * from the original ServicesHeroSection.
//    */
//   const scrollToServices = () => {
//     const section =
//       document.getElementById("services-list") ||
//       document.getElementById("all-services") ||
//       document.getElementById("service-directory");

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   const trustPoints = [
//     "Inspection Before Treatment",
//     "Residential & Commercial Support",
//     "Clear Practical Advice",
//   ];

//   const serviceIndex = [
//     {
//       number: "01",
//       title: "Rodents",
//       text: "Rats, mice and wildlife-related activity.",
//     },
//     {
//       number: "02",
//       title: "Insects",
//       text: "Bed bugs, cockroaches, ants, fleas and moths.",
//     },
//     {
//       number: "03",
//       title: "Nests",
//       text: "Wasps, bees and nesting pest concerns.",
//     },
//     {
//       number: "04",
//       title: "Proofing",
//       text: "Entry-point and property protection support.",
//     },
//   ];

//   return (
//     <section
//       aria-labelledby="services-hero-heading"
//       className="relative mt-10 overflow-hidden bg-[#F4F1F8] pb-16 pt-28 text-[#18141F] sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40"
//     >
//       <style>{`
//         @keyframes sgwServicesHeroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(28px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes sgwServicesHeroImageReveal {
//           from {
//             opacity: 0;
//             transform: scale(0.97);
//           }

//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes sgwServicesHeroLine {
//           from {
//             transform: scaleX(0);
//           }

//           to {
//             transform: scaleX(1);
//           }
//         }

//         .sgw-services-hero-reveal {
//           animation: sgwServicesHeroReveal 850ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sgw-services-hero-image {
//           animation: sgwServicesHeroImageReveal 1000ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sgw-services-hero-line {
//           transform-origin: left;
//           animation: sgwServicesHeroLine 900ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sgw-services-delay-1 {
//           animation-delay: 100ms;
//         }

//         .sgw-services-delay-2 {
//           animation-delay: 200ms;
//         }

//         .sgw-services-delay-3 {
//           animation-delay: 300ms;
//         }

//         .sgw-services-delay-4 {
//           animation-delay: 400ms;
//         }

//         .sgw-services-dot-pattern {
//           background-image: radial-gradient(
//             circle,
//             rgba(98, 84, 180, 0.34) 1.2px,
//             transparent 1.2px
//           );
//           background-size: 11px 11px;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sgw-services-hero-reveal,
//           .sgw-services-hero-image,
//           .sgw-services-hero-line {
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* BACKGROUND */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div
//           className="absolute inset-0 opacity-[0.045]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#6254B4 1px, transparent 1px), linear-gradient(90deg, #6254B4 1px, transparent 1px)",
//             backgroundSize: "72px 72px",
//           }}
//         />

//         <div className="absolute -left-64 top-[-120px] h-[620px] w-[620px] rounded-full bg-[#6254B4]/13 blur-[165px]" />

//         <div className="absolute -right-72 bottom-[-270px] h-[680px] w-[680px] rounded-full border-[120px] border-[#6254B4]/[0.04]" />

//         <div className="sgw-services-dot-pattern absolute right-6 top-24 h-48 w-48 opacity-40" />

//         <div className="absolute right-0 top-0 h-full w-[31%] border-l border-[#6254B4]/[0.055] bg-white/25" />
//       </div>

//       {/* BACKGROUND WORD */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-24 hidden -translate-x-1/2 select-none whitespace-nowrap text-[190px] font-black uppercase leading-none tracking-[-0.09em] text-[#6254B4]/[0.03] xl:block"
//       >
//         Services
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
//         {/* TOP DATA BAR */}
//         <div className="sgw-services-hero-reveal grid border-y border-[#CEC7D8] lg:grid-cols-[1fr_auto_auto]">
//           <div className="flex items-center gap-4 py-5 lg:pr-8">
//             <span className="relative flex h-3 w-3 shrink-0">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6254B4] opacity-30" />

//               <span className="relative inline-flex h-3 w-3 rounded-full bg-[#6254B4]" />
//             </span>

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.25em] text-[#6254B4]">
//                 Westminster Service Atlas
//               </span>

//               <span className="mt-1 block text-xs font-black text-[#18141F]">
//                 Residential & Commercial Pest Control
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 border-t border-[#CEC7D8] py-5 lg:border-l lg:border-t-0 lg:px-8">
//             <MapPin
//               size={16}
//               strokeWidth={2.5}
//               className="shrink-0 text-[#6254B4]"
//             />

//             <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#625D69]">
//               {LOCAL.address}
//             </span>
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

//         {/* MAIN HERO */}
//         <div className="mt-14 grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:gap-14">
//           {/* LEFT EDITORIAL COLUMN */}
//           <div className="sgw-services-hero-reveal sgw-services-delay-1 flex flex-col">
//             <div>
//               <div className="flex items-center gap-4">
//                 <span className="h-px w-14 bg-[#6254B4]/55 sm:w-20" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//                   Pest Control Services
//                 </span>
//               </div>

//               <h1
//                 id="services-hero-heading"
//                 className="mt-7 max-w-[690px] text-[54px] font-black leading-[0.88] tracking-[-0.065em] text-[#18141F] sm:text-[72px] lg:text-[86px] xl:text-[91px]"
//               >
//                 Professional pest control
//                 <span className="block text-[#6254B4]">
//                   for Westminster properties.
//                 </span>
//               </h1>

//               <p className="mb-0 mt-8 max-w-[590px] text-[15px] font-medium leading-7 text-[#625D69] sm:text-base sm:leading-8">
//                 Explore pest control support for rodents, insects,
//                 wildlife, nests, birds and property proofing across
//                 Westminster and Central London.
//               </p>

//               <p className="mb-0 mt-4 max-w-[570px] text-sm font-medium leading-7 text-[#827C88]">
//                 Our service focuses on understanding the property,
//                 identifying the activity and planning a suitable next
//                 step.
//               </p>
//             </div>

//             {/* ACTIONS */}
//             <div className="mt-9 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 to="/contact-us"
//                 className="group inline-flex min-h-[56px] items-center justify-center gap-4 bg-[#6254B4] px-7 text-[10px] font-black uppercase tracking-[0.17em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#18141F]"
//               >
//                 Request Pest Support

//                 <ArrowRight
//                   size={18}
//                   strokeWidth={2.5}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>

//               <button
//                 type="button"
//                 onClick={scrollToServices}
//                 className="group inline-flex min-h-[56px] items-center justify-center gap-4 border border-[#CFC8D9] bg-white/40 px-7 text-[10px] font-black uppercase tracking-[0.17em] text-[#18141F] transition-all duration-300 hover:-translate-y-1 hover:border-[#6254B4] hover:text-[#6254B4]"
//               >
//                 Browse Services

//                 <ArrowDown
//                   size={18}
//                   strokeWidth={2.5}
//                   className="transition-transform duration-300 group-hover:translate-y-1"
//                 />
//               </button>
//             </div>

//             {/* TRUST LEDGER */}
//             <div className="mt-11 border-y border-[#CFC8D9]">
//               {trustPoints.map((item, index) => (
//                 <div
//                   key={item}
//                   className="grid grid-cols-[52px_1fr] border-b border-[#CFC8D9] last:border-b-0"
//                 >
//                   <span className="flex min-h-[58px] items-center justify-center border-r border-[#CFC8D9] text-[9px] font-black tracking-[0.17em] text-[#6254B4]">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <span className="flex min-h-[58px] items-center gap-3 px-4 text-[10px] font-black uppercase tracking-[0.13em] text-[#3B3541]">
//                     <Check
//                       size={15}
//                       strokeWidth={3}
//                       className="shrink-0 text-[#6254B4]"
//                     />

//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT VISUAL ATLAS */}
//           <div className="sgw-services-hero-image sgw-services-delay-2">
//             <div className="grid border border-[#CFC8D9] bg-white shadow-[0_35px_100px_rgba(38,28,63,0.12)] lg:grid-cols-[88px_minmax(0,1fr)]">
//               {/* VERTICAL INDEX */}
//               <div className="hidden border-r border-[#D8D2DF] bg-[#18141F] text-white lg:flex lg:flex-col">
//                 <div className="flex min-h-[96px] items-center justify-center border-b border-white/10">
//                   <span className="-rotate-90 whitespace-nowrap text-[8px] font-black uppercase tracking-[0.28em] text-[#BDB6FF]">
//                     Service Directory
//                   </span>
//                 </div>

//                 <div className="flex flex-1 flex-col">
//                   {serviceIndex.map((service) => (
//                     <div
//                       key={service.number}
//                       className="group flex flex-1 items-center justify-center border-b border-white/10 last:border-b-0"
//                     >
//                       <span className="text-[17px] font-black tracking-[-0.03em] text-white/25 transition-colors duration-300 group-hover:text-[#BDB6FF]">
//                         {service.number}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* IMAGE AND CONTENT */}
//               <div className="relative min-h-[650px] overflow-hidden bg-[#18141F] sm:min-h-[760px]">
//                 <img
//                   src="/images/servicehero.webp"
//                   alt={`${LOCAL.company} pest control services in ${LOCAL.area}`}
//                   className="absolute inset-0 h-full w-full object-cover object-center"
//                   loading="eager"
//                   fetchPriority="high"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#18141F]/95 via-[#18141F]/25 to-[#18141F]/10" />

//                 <div className="absolute inset-0 bg-gradient-to-r from-[#18141F]/30 via-transparent to-[#6254B4]/20" />

//                 {/* TOP REFERENCE */}
//                 <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 border border-white/15 bg-[#18141F]/45 px-5 py-4 text-white backdrop-blur-lg sm:left-7 sm:right-7 sm:top-7">
//                   <div className="flex items-center gap-3">
//                     <ShieldCheck
//                       size={18}
//                       strokeWidth={2.5}
//                       className="text-[#D3CDFF]"
//                     />

//                     <span className="text-[8px] font-black uppercase tracking-[0.21em]">
//                       SuperGuard Westminster
//                     </span>
//                   </div>

//                   {/* <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/45">
//                     Service Ref · SGW-01
//                   </span> */}
//                 </div>

//                 {/* SERVICE INDEX PANEL */}
//                 {/* <div className="absolute right-5 top-24 hidden w-[280px] border border-white/15 bg-[#18141F]/55 text-white backdrop-blur-xl sm:right-7 sm:top-28 lg:block">
//                   <div className="flex items-center gap-3 border-b border-white/10 p-5">
//                     <SearchCheck
//                       size={20}
//                       strokeWidth={2.4}
//                       className="text-[#BDB6FF]"
//                     />

//                     <span className="text-[8px] font-black uppercase tracking-[0.21em] text-[#BDB6FF]">
//                       Service Categories
//                     </span>
//                   </div>

//                   {serviceIndex.map((service) => (
//                     <div
//                       key={service.number}
//                       className="grid grid-cols-[45px_1fr] border-b border-white/10 p-4 last:border-b-0"
//                     >
//                       <span className="text-[9px] font-black tracking-[0.16em] text-[#BDB6FF]">
//                         {service.number}
//                       </span>

//                       <div>
//                         <span className="block text-sm font-black text-white">
//                           {service.title}
//                         </span>

//                         <span className="mt-1 block text-[10px] font-medium leading-5 text-white/45">
//                           {service.text}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div> */}

//                 {/* BOTTOM IMAGE COPY */}
//                 <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
//                   <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#D3CDFF]">
//                     Property-Based Pest Support
//                   </span>

//                   <h2 className="mt-4 max-w-[760px] text-[34px] font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[58px]">
//                     The right service begins with understanding the
//                     property.
//                   </h2>

//                   <p className="mb-0 mt-5 max-w-[650px] text-sm font-medium leading-7 text-white/65 sm:text-base">
//                     Tell us where the activity is appearing, what signs
//                     you have noticed and the type of property requiring
//                     support.
//                   </p>
//                 </div>

//                 {/* LARGE MARK */}
//                 <span
//                   aria-hidden="true"
//                   className="pointer-events-none absolute bottom-5 right-7 hidden text-[95px] font-black leading-none tracking-[-0.08em] text-white/[0.055] xl:block"
//                 >
//                   SG
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* SERVICE NAVIGATION RAIL */}
//         <div className="sgw-services-hero-reveal sgw-services-delay-3 mt-12 border-y border-[#CFC8D9]">
//           <div className="grid lg:grid-cols-[250px_minmax(0,1fr)_90px]">
//             <div className="flex items-center gap-4 border-b border-[#CFC8D9] py-6 lg:border-b-0 lg:border-r lg:pr-7">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6254B4] text-white">
//                 <Sparkles size={19} strokeWidth={2.5} />
//               </span>

//               <div>
//                 <span className="block text-[8px] font-black uppercase tracking-[0.22em] text-[#8B8491]">
//                   Continue below
//                 </span>

//                 <span className="mt-1 block text-sm font-black text-[#18141F]">
//                   Full service directory
//                 </span>
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-2 xl:grid-cols-4">
//               {serviceIndex.map((service, index) => (
//                 <div
//                   key={service.number}
//                   className={`flex items-center gap-4 py-5 lg:px-6 ${
//                     index !== serviceIndex.length - 1
//                       ? "xl:border-r xl:border-[#CFC8D9]"
//                       : ""
//                   }`}
//                 >
//                   <span className="text-[9px] font-black tracking-[0.17em] text-[#6254B4]">
//                     {service.number}
//                   </span>

//                   <span className="text-[11px] font-black uppercase tracking-[0.11em] text-[#3A3440]">
//                     {service.title}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <button
//               type="button"
//               onClick={scrollToServices}
//               aria-label="Scroll to pest control services"
//               className="group flex min-h-[74px] items-center justify-center border-t border-[#CFC8D9] bg-[#18141F] text-white transition-colors duration-300 hover:bg-[#6254B4] lg:border-l lg:border-t-0"
//             >
//               <ArrowDown
//                 size={21}
//                 strokeWidth={2.6}
//                 className="transition-transform duration-300 group-hover:translate-y-1"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowDown,
//   Phone,
//   MapPin,
//   ShieldCheck,
//   Check,
//   Sparkles,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     company: "Superguard Services West Wickham",
//     area: "West Wickham",
//     city: "London",
//     postcode: "BR4 0QL",
//     address: "16 Ash Grove, West Wickham BR4 0QL",
//     phoneDisplay: "07356 270867",
//     phoneTel: "+447356270867",
//     email: "info@superguardwestwickham.uk",
//   };

//   const services = [
//     "Ant Control",
//     "Bed Bug Treatment",
//     "Carpet Moth Treatment",
//     "Carpet Beetle Control",
//     "Cockroach Control",
//     "Rats & Mice Control",
//   ];

//   const scrollToServices = () => {
//     const section =
//       document.getElementById("services-list") ||
//       document.getElementById("all-services") ||
//       document.getElementById("service-directory");

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <>
//       <style>{`
//         @keyframes sgFadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes sgImageReveal {
//           from {
//             opacity: 0;
//             transform: scale(1.08);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes sgFloat {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-8px);
//           }
//         }

//         @keyframes sgArrow {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(5px);
//           }
//         }

//         @keyframes sgPulse {
//           0%,
//           100% {
//             transform: scale(1);
//           }

//           50% {
//             transform: scale(1.06);
//           }
//         }

//         .sg-fade-up {
//           animation: sgFadeUp 850ms cubic-bezier(.16,1,.3,1) both;
//         }

//         .sg-fade-up-2 {
//           animation: sgFadeUp 850ms 120ms cubic-bezier(.16,1,.3,1) both;
//         }

//         .sg-fade-up-3 {
//           animation: sgFadeUp 850ms 240ms cubic-bezier(.16,1,.3,1) both;
//         }

//         .sg-fade-up-4 {
//           animation: sgFadeUp 850ms 360ms cubic-bezier(.16,1,.3,1) both;
//         }

//         .sg-image-reveal {
//           animation: sgImageReveal 1200ms cubic-bezier(.16,1,.3,1) both;
//         }

//         .sg-float {
//           animation: sgFloat 4s ease-in-out infinite;
//         }

//         .sg-arrow {
//           animation: sgArrow 2s ease-in-out infinite;
//         }

//         .sg-pulse {
//           animation: sgPulse 2.8s ease-in-out infinite;
//         }

//         .sg-image-circle {
//           transition:
//             transform 700ms cubic-bezier(.16,1,.3,1),
//             box-shadow 700ms ease;
//         }

//         .sg-image-circle:hover {
//           transform: scale(1.025);
//           box-shadow: 0 35px 90px rgba(96,85,166,.18);
//         }

//         .sg-service-card {
//           transition:
//             transform 300ms cubic-bezier(.16,1,.3,1),
//             background-color 300ms ease,
//             border-color 300ms ease;
//         }

//         .sg-service-card:hover {
//           transform: translateY(-4px);
//           background-color: #6055A6;
//           border-color: #6055A6;
//         }

//         .sg-service-card:hover .service-number,
//         .sg-service-card:hover .service-name,
//         .sg-service-card:hover .service-arrow {
//           color: white;
//         }

//         .sg-contact-item {
//           transition:
//             background-color 300ms ease,
//             transform 300ms ease;
//         }

//         .sg-contact-item:hover {
//           background-color: #6055A6;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-fade-up,
//           .sg-fade-up-2,
//           .sg-fade-up-3,
//           .sg-fade-up-4,
//           .sg-image-reveal,
//           .sg-float,
//           .sg-arrow,
//           .sg-pulse {
//             animation: none;
//           }

//           .sg-image-circle,
//           .sg-service-card,
//           .sg-contact-item {
//             transition: none;
//           }
//         }
//       `}</style>

//       <section className="relative overflow-hidden mt-32 bg-white text-[#6055A6]">

//         {/* =====================================================
//             HERO
//         ===================================================== */}

//         <div className="relative min-h-[760px] overflow-hidden">

//           {/* Decorative background circles */}

//           <div className="pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full border-[1px] border-[#6055A6]/10" />

//           <div className="pointer-events-none absolute -right-48 -bottom-48 h-[650px] w-[650px] rounded-full border-[1px] border-[#6055A6]/10" />

//           <div className="pointer-events-none absolute left-[7%] top-[25%] hidden h-2 w-2 rounded-full bg-[#6055A6] lg:block" />

//           <div className="pointer-events-none absolute right-[7%] top-[18%] hidden h-3 w-3 rotate-45 bg-[#6055A6]/40 lg:block" />

//           {/* =================================================
//               TOP BAR
//           ================================================= */}

//           <div className="relative z-30 border-b border-[#6055A6]/10 bg-white">

//             <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">

//               {/* Brand */}

//               <div className="flex items-center gap-3">

//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                   <ShieldCheck size={16} strokeWidth={2.5} />
//                 </div>

//                 <div>

//                   <span className="block text-[7px] font-black uppercase tracking-[.28em] text-[#6055A6]/50">
//                     Superguard Services
//                   </span>

//                   <span className="mt-0.5 block text-[9px] font-black uppercase tracking-[.18em] text-[#6055A6]">
//                     West Wickham
//                   </span>

//                 </div>

//               </div>

//               {/* Utility */}

//               <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[8px] font-black uppercase tracking-[.16em] text-[#6055A6]/55">

//                 <span className="flex items-center gap-2">
//                   <MapPin size={12} />
//                   {LOCAL.area}, {LOCAL.city}
//                 </span>

//                 <span className="hidden h-3 w-px bg-[#6055A6]/15 sm:block" />

//                 <span>{LOCAL.postcode}</span>

//                 <span className="hidden h-3 w-px bg-[#6055A6]/15 sm:block" />

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="flex items-center gap-2 text-[#6055A6] transition hover:text-[#6055A6]/70"
//                 >
//                   <Phone size={12} />
//                   {LOCAL.phoneDisplay}
//                 </a>

//               </div>

//             </div>

//           </div>

//           {/* =================================================
//               MAIN HERO CONTENT
//           ================================================= */}

//           <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

//             <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">

//               {/* =================================================
//                   LEFT — CENTERED TEXT
//               ================================================= */}

//               <div className="sg-fade-up flex flex-col items-center text-center">

//                 {/* Label */}

//                 <div className="mb-7 flex items-center justify-center gap-4">

//                   <span className="h-px w-10 bg-[#6055A6]" />

//                   <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.32em] text-[#6055A6]">
//                     <Sparkles size={13} />
//                     Our Services
//                   </span>

//                   <span className="h-px w-10 bg-[#6055A6]" />

//                 </div>

//                 {/* Heading */}

//                 <h1 className="max-w-[760px] text-[55px] font-black leading-[.84] tracking-[-.075em] text-[#6055A6] sm:text-[76px] md:text-[90px] lg:text-[88px] xl:text-[108px]">

//                   Pest control

//                   <span className="block text-[#111111]">
//                     that makes
//                   </span>

//                   <span className="block">
//                     sense.
//                   </span>

//                 </h1>

//                 {/* Location */}

//                 <div className="sg-fade-up-2 mt-8 flex items-center justify-center gap-4">

//                   <span className="h-[2px] w-14 bg-[#6055A6]" />

//                   <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]/50">
//                     {LOCAL.area} · {LOCAL.city} · {LOCAL.postcode}
//                   </span>

//                   <span className="h-[2px] w-14 bg-[#6055A6]" />

//                 </div>

//                 {/* Description */}

//                 <p className="sg-fade-up-3 mx-auto mt-8 max-w-[650px] text-[15px] font-medium leading-8 text-[#6055A6]/65 sm:text-base">

//                   Professional pest control for homes, landlords,
//                   businesses and commercial properties throughout{" "}

//                   <strong className="font-black text-[#111111]">
//                     {LOCAL.area}
//                   </strong>{" "}

//                   and surrounding London areas.

//                 </p>

//                 <p className="sg-fade-up-3 mx-auto mt-4 max-w-[600px] text-sm font-medium leading-7 text-[#6055A6]/45">

//                   From insects and rodents to birds, wildlife and
//                   prevention, we help identify the problem and
//                   choose a practical way forward.

//                 </p>

//                 {/* Buttons */}

//                 <div className="sg-fade-up-4 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

//                   <Link
//                     to="/contact-us"
//                     className="group flex min-h-[60px] min-w-[235px] items-center justify-between gap-10 bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[.18em] text-white shadow-[0_18px_50px_rgba(96,85,166,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#6055A6]/90"
//                   >
//                     Book Pest Control

//                     <ArrowRight
//                       size={17}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />

//                   </Link>

//                   <button
//                     type="button"
//                     onClick={scrollToServices}
//                     className="group flex min-h-[60px] min-w-[205px] items-center justify-between gap-8 border border-[#6055A6]/20 bg-white px-7 text-[9px] font-black uppercase tracking-[.18em] text-[#6055A6] transition duration-300 hover:-translate-y-1 hover:border-[#6055A6] hover:bg-[#6055A6] hover:text-white"
//                   >
//                     Explore Services

//                     <ArrowDown
//                       size={17}
//                       className="sg-arrow transition-transform"
//                     />

//                   </button>

//                 </div>

//                 {/* Trust */}

//                 <div className="sg-fade-up-4 mt-10 flex max-w-[680px] flex-wrap items-center justify-center gap-x-7 gap-y-4 border-t border-[#6055A6]/10 pt-6">

//                   {[
//                     "Residential",
//                     "Commercial",
//                     "Local Team",
//                     "Professional Service",
//                   ].map((item) => (

//                     <span
//                       key={item}
//                       className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.14em] text-[#6055A6]/50"
//                     >
//                       <Check
//                         size={13}
//                         className="text-[#6055A6]"
//                       />
//                       {item}
//                     </span>

//                   ))}

//                 </div>

//               </div>

//               {/* =================================================
//                   RIGHT — CIRCULAR IMAGE
//               ================================================= */}

//               <div className="sg-fade-up-2 relative flex items-center justify-center">

//                 {/* Outer purple ring */}

//                 <div className="absolute h-[min(88vw,690px)] w-[min(88vw,690px)] max-h-[690px] max-w-[690px] rounded-full border border-[#6055A6]/15" />

//                 {/* Second ring */}

//                 <div className="absolute h-[min(78vw,610px)] w-[min(78vw,610px)] max-h-[610px] max-w-[610px] rounded-full border border-[#6055A6]/10" />

//                 {/* Main image circle */}

//                 <div className="sg-image-circle relative z-10 h-[min(78vw,570px)] w-[min(78vw,570px)] max-h-[570px] max-w-[570px] overflow-hidden rounded-full border-[10px] border-white shadow-[0_25px_80px_rgba(96,85,166,.14)] sm:border-[14px]">

//                   <img
//                     src="/images/servicehero.webp"
//                     alt={`${LOCAL.company} pest control services in ${LOCAL.area}, London`}
//                     className="sg-image-reveal h-full w-full object-cover object-center"
//                     loading="eager"
//                     fetchPriority="high"
//                   />

//                 </div>

//                 {/* Floating location badge */}

//                 <div className="sg-float absolute bottom-[5%] left-[4%] z-20 hidden items-center gap-3 border border-[#6055A6]/10 bg-white px-5 py-4 shadow-[0_20px_55px_rgba(96,85,166,.15)] sm:flex">

//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                     <MapPin size={16} />
//                   </div>

//                   <div>

//                     <span className="block text-[7px] font-black uppercase tracking-[.22em] text-[#6055A6]/45">
//                       Local Coverage
//                     </span>

//                     <span className="mt-1 block text-[10px] font-black uppercase tracking-[.12em] text-[#6055A6]">
//                       {LOCAL.area} · London
//                     </span>

//                   </div>

//                 </div>

//                 {/* Floating shield */}

//                 <div className="sg-pulse absolute right-[4%] top-[8%] z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#6055A6] text-white shadow-[0_15px_40px_rgba(96,85,166,.22)] sm:h-16 sm:w-16">

//                   <ShieldCheck size={23} />

//                 </div>

//                 {/* Small number */}

//                 <span className="absolute bottom-[12%] right-[8%] z-20 hidden text-[90px] font-black leading-none tracking-[-.12em] text-[#6055A6]/10 lg:block">
//                   01
//                 </span>

//               </div>

//             </div>

//           </div>



//         </div>

//       </section>
//     </>
//   );
// }













import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  ShieldCheck,
  SearchCheck,
  Home,
  Building2,
  Bug,
  CheckCircle2,
} from "lucide-react";

export default function ServicesHeroSection() {
  const LOCAL = {
    company: "Superguard Services Isleworth",
    area: "Isleworth",
    city: "London",
    postcode: "TW7 7HG",
    address: "71 Talbot Rd, Isleworth TW7 7HG, United Kingdom",
    phoneDisplay: "7405 940152",
    phoneTel: "+447405940152",
  };

  const services = [
    {
      title: "Rats & Mice Control",
      text: "Support for signs of rodent activity in homes and commercial properties.",
      icon: Bug,
      tag: "RODENTS",
    },
    {
      title: "Bed Bug Treatment",
      text: "Targeted treatment support for properties affected by bed bug activity.",
      icon: Home,
      tag: "INSECTS",
    },
    {
      title: "Wasp Control",
      text: "Professional support when wasp nests are discovered around a property.",
      icon: Bug,
      tag: "WASPS",
    },
    {
      title: "Cockroach Control",
      text: "Practical pest control support for cockroach activity and infestations.",
      icon: Building2,
      tag: "INSECTS",
    },
    {
      title: "Ant Control",
      text: "Treatment support for recurring ant activity inside or around your property.",
      icon: Bug,
      tag: "INSECTS",
    },
    {
      title: "Carpet Beetle Control",
      text: "Help dealing with carpet beetle activity affecting fabrics and interiors.",
      icon: SearchCheck,
      tag: "INSECTS",
    },
  ];

  const scrollToServices = () => {
    const section =
      document.getElementById("services-list") ||
      document.getElementById("all-services") ||
      document.getElementById("service-directory") ||
      document.getElementById("services-directory");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <style>{`
        @keyframes sgFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sgFadeRight {
          from {
            opacity: 0;
            transform: translateX(28px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes sgScale {
          from {
            opacity: 0;
            transform: scale(.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes sgLine {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .sg-fade-up {
          animation: sgFadeUp .8s cubic-bezier(.16,1,.3,1) both;
        }

        .sg-fade-up-2 {
          animation: sgFadeUp .8s .12s cubic-bezier(.16,1,.3,1) both;
        }

        .sg-fade-up-3 {
          animation: sgFadeUp .8s .24s cubic-bezier(.16,1,.3,1) both;
        }

        .sg-fade-up-4 {
          animation: sgFadeUp .8s .36s cubic-bezier(.16,1,.3,1) both;
        }

        .sg-fade-right {
          animation: sgFadeRight .9s .18s cubic-bezier(.16,1,.3,1) both;
        }

        .sg-scale {
          animation: sgScale .9s .28s cubic-bezier(.16,1,.3,1) both;
        }

        .sg-service {
          transition:
            transform .35s cubic-bezier(.16,1,.3,1),
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .sg-service:hover {
          transform: translateY(-5px);
          border-color: rgba(96,85,166,.35);
          box-shadow: 0 22px 55px rgba(36,33,45,.09);
        }

        .sg-service:hover .sg-service-arrow {
          transform: translate(3px,-3px);
        }

        .sg-service-arrow {
          transition: transform .3s ease;
        }

        .sg-image {
          transition: transform .8s cubic-bezier(.16,1,.3,1);
        }

        .sg-image-wrap:hover .sg-image {
          transform: scale(1.035);
        }

        .sg-location {
          transition:
            background-color .3s ease,
            border-color .3s ease,
            transform .3s ease;
        }

        .sg-location:hover {
          transform: translateY(-3px);
          border-color: rgba(96,85,166,.35);
          background-color: #fff;
        }

        .sg-purple-button {
          transition:
            background-color .3s ease,
            transform .3s ease,
            box-shadow .3s ease;
        }

        .sg-purple-button:hover {
          background-color: #51478F;
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(96,85,166,.22);
        }

        @media (prefers-reduced-motion: reduce) {
          .sg-fade-up,
          .sg-fade-up-2,
          .sg-fade-up-3,
          .sg-fade-up-4,
          .sg-fade-right,
          .sg-scale {
            animation: none;
          }

          .sg-service,
          .sg-image,
          .sg-location,
          .sg-purple-button {
            transition: none;
          }
        }
      `}</style>

      <main className="mt-32 bg-[#F7F6FA] text-[#15131A]">


        {/* =====================================================
            HERO — PROPERTY PROTECTION INTERFACE
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#F7F6FA]">

          {/* subtle architectural background */}

          <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[42%] bg-[#A59ED8]/10" />

          <div className="pointer-events-none absolute right-[12%] top-[160px] hidden h-[280px] w-[1px] bg-[#6055A6]/10 lg:block" />

          <div className="pointer-events-none absolute right-[18%] top-[230px] hidden h-[1px] w-[260px] bg-[#6055A6]/10 lg:block" />


          <div className="relative mx-auto max-w-[1550px] px-5 pb-20 pt-8 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28 lg:pt-12">


            {/* =================================================
                TOP INFORMATION STRIP
            ================================================= */}

            <div className="sg-fade-up mb-12 flex flex-col gap-4 border-b border-[#24212D]/10 pb-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6055A6] text-white">
                  <ShieldCheck size={15} />
                </div>

                <div>
                  <span className="block text-[7px] font-black uppercase tracking-[.25em] text-[#6055A6]">
                    Superguard Services
                  </span>

                  <span className="mt-1 block text-[9px] font-black uppercase tracking-[.12em] text-[#24212D]">
                    {LOCAL.area}
                  </span>
                </div>

              </div>


              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">

                <div className="flex items-center gap-2 text-[#24212D]/45">

                  <MapPin size={13} className="text-[#6055A6]" />

                  <span className="text-[8px] font-black uppercase tracking-[.16em]">
                    {LOCAL.area}, {LOCAL.city}
                  </span>

                </div>

                <span className="hidden h-3 w-px bg-[#24212D]/10 sm:block" />

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="flex items-center gap-2 text-[#24212D] transition hover:text-[#6055A6]"
                >

                  <Phone size={13} className="text-[#6055A6]" />

                  <span className="text-[8px] font-black uppercase tracking-[.16em]">
                    {LOCAL.phoneDisplay}
                  </span>

                </a>

              </div>

            </div>


            {/* =================================================
                MAIN HERO GRID
            ================================================= */}

            <div className="grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-16 xl:gap-24">


              {/* LEFT */}

              <div className="max-w-[690px]">

                <div className="sg-fade-up-2 flex items-center gap-3">

                  <span className="h-[2px] w-8 bg-[#6055A6]" />

                  <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]">
                    Pest control services
                  </span>

                </div>


                <h1 className="sg-fade-up-3 mt-6 text-[48px] font-black leading-[.94] tracking-[-.065em] text-[#24212D] sm:text-[61px] lg:text-[67px] xl:text-[76px]">

                  Protection starts
                  <span className="block text-[#6055A6]">
                    with knowing.
                  </span>

                </h1>


                <p className="sg-fade-up-4 mt-7 max-w-[590px] text-sm leading-7 text-[#6D6973] sm:text-[15px] sm:leading-8">

                  From early signs of activity to established pest
                  problems, Superguard Services Isleworth provides
                  practical pest control support for homes, landlords,
                  businesses and commercial properties.

                </p>


                {/* action row */}

                <div className="sg-fade-up-4 mt-8 flex flex-col gap-3 sm:flex-row">

                  <Link
                    to="/contact-us"
                    className="sg-purple-button group flex min-h-[55px] items-center justify-between gap-10 rounded-xl bg-[#6055A6] px-6 text-[9px] font-black uppercase tracking-[.18em] text-white"
                  >

                    Discuss your pest problem

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </Link>


                  <button
                    type="button"
                    onClick={scrollToServices}
                    className="group flex min-h-[55px] items-center justify-between gap-8 rounded-xl border border-[#24212D]/12 bg-white px-6 text-[9px] font-black uppercase tracking-[.18em] text-[#24212D] transition hover:border-[#6055A6] hover:text-[#6055A6]"
                  >

                    View treatments

                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate(2px,-2px)"
                    />

                  </button>

                </div>


                {/* trust / context line */}

                <div className="sg-fade-up-4 mt-8 flex flex-wrap gap-x-6 gap-y-3">

                  <div className="flex items-center gap-2">

                    <CheckCircle2
                      size={14}
                      className="text-[#6055A6]"
                    />

                    <span className="text-[8px] font-black uppercase tracking-[.13em] text-[#24212D]/55">
                      Residential
                    </span>

                  </div>

                  <div className="flex items-center gap-2">

                    <CheckCircle2
                      size={14}
                      className="text-[#6055A6]"
                    />

                    <span className="text-[8px] font-black uppercase tracking-[.13em] text-[#24212D]/55">
                      Commercial
                    </span>

                  </div>

                  <div className="flex items-center gap-2">

                    <CheckCircle2
                      size={14}
                      className="text-[#6055A6]"
                    />

                    <span className="text-[8px] font-black uppercase tracking-[.13em] text-[#24212D]/55">
                      Isleworth
                    </span>

                  </div>

                </div>

              </div>


              {/* RIGHT — MODULAR IMAGE COMPOSITION */}

              <div className="sg-fade-right relative min-h-[570px] lg:min-h-[630px]">


                {/* main image */}

                <div className="sg-image-wrap absolute right-0 top-0 h-[430px] w-[88%] overflow-hidden rounded-[26px] bg-[#24212D] sm:h-[500px] lg:h-[560px]">

                  <img
                    src="/images/servicehero.webp"
                    alt={`${LOCAL.company} pest control services in ${LOCAL.area}`}
                    className="sg-image h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/55 via-transparent to-transparent" />


                  {/* image label */}

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">

                    <div>

                      <span className="block text-[7px] font-black uppercase tracking-[.25em] text-white/55">
                        Property protection
                      </span>

                      <span className="mt-1 block text-xs font-black text-white">
                        {LOCAL.area}, London
                      </span>

                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#6055A6]">
                      <ArrowUpRight size={15} />
                    </div>

                  </div>

                </div>


                {/* floating inspection module */}

                <div className="sg-scale absolute bottom-4 left-0 z-10 w-[72%] max-w-[330px] sm:bottom-0 sm:w-[300px]">

                  <div className="rounded-[22px] border border-[#24212D]/8 bg-white p-5 shadow-[0_25px_65px_rgba(36,33,45,.14)]">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F7F6FA] text-[#6055A6]">
                          <SearchCheck size={17} />
                        </div>

                        <div>

                          <span className="block text-[7px] font-black uppercase tracking-[.2em] text-[#6055A6]">
                            First step
                          </span>

                          <span className="mt-1 block text-[11px] font-black text-[#24212D]">
                            Understand the issue
                          </span>

                        </div>

                      </div>

                      <span className="h-2 w-2 rounded-full bg-[#6055A6]" />

                    </div>


                    <div className="mt-5 h-px w-full bg-[#24212D]/8" />


                    <div className="mt-4 grid grid-cols-3 gap-2">

                      <div className="rounded-lg bg-[#F7F6FA] p-2.5">

                        <span className="block text-[6px] font-black uppercase tracking-[.12em] text-[#24212D]/35">
                          Identify
                        </span>

                        <Bug
                          size={13}
                          className="mt-2 text-[#6055A6]"
                        />

                      </div>


                      <div className="rounded-lg bg-[#F7F6FA] p-2.5">

                        <span className="block text-[6px] font-black uppercase tracking-[.12em] text-[#24212D]/35">
                          Assess
                        </span>

                        <SearchCheck
                          size={13}
                          className="mt-2 text-[#6055A6]"
                        />

                      </div>


                      <div className="rounded-lg bg-[#F7F6FA] p-2.5">

                        <span className="block text-[6px] font-black uppercase tracking-[.12em] text-[#24212D]/35">
                          Treat
                        </span>

                        <ShieldCheck
                          size={13}
                          className="mt-2 text-[#6055A6]"
                        />

                      </div>

                    </div>

                  </div>

                </div>


                {/* small location marker */}

                <div className="absolute right-0 top-[440px] hidden w-[180px] lg:block">

                  <div className="flex items-center gap-3">

                    <div className="h-px flex-1 bg-[#6055A6]/30" />

                    <span className="text-[7px] font-black uppercase tracking-[.2em] text-[#6055A6]">
                      TW7 7HG
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>





        {/* =====================================================
            PROPERTY TYPES
        ===================================================== */}

        <section className="bg-white">

          <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

            <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start">

              <div>

                <span className="text-[8px] font-black uppercase tracking-[.27em] text-[#6055A6]">
                  Different properties, different concerns
                </span>

                <h2 className="mt-5 max-w-[480px] text-[39px] font-black leading-[.97] tracking-[-.055em] text-[#24212D] sm:text-[51px]">

                  Pest control for
                  <span className="text-[#6055A6]">
                    {" "}real properties.
                  </span>

                </h2>

              </div>


              <div className="grid gap-3 sm:grid-cols-2">

                <div className="sg-location rounded-2xl border border-[#24212D]/8 bg-[#F7F6FA] p-6">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#6055A6]">
                    <Home size={17} />
                  </div>

                  <h3 className="mt-6 text-lg font-black tracking-[-.03em] text-[#24212D]">
                    Homes & flats
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-[#77737C]">
                    Support for homeowners, tenants and residential
                    properties experiencing pest activity.
                  </p>

                </div>


                <div className="sg-location rounded-2xl border border-[#24212D]/8 bg-[#F7F6FA] p-6">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#6055A6]">
                    <Building2 size={17} />
                  </div>

                  <h3 className="mt-6 text-lg font-black tracking-[-.03em] text-[#24212D]">
                    Businesses
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-[#77737C]">
                    Pest control support for workplaces, commercial
                    premises and managed properties.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            LOCAL CONTACT / ADDRESS
        ===================================================== */}

        <section className="bg-[#24212D]">

          <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

            <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end">

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-[2px] w-8 bg-[#A59ED8]" />

                  <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#A59ED8]">
                    Isleworth service area
                  </span>

                </div>

                <h2 className="mt-6 max-w-[720px] text-[41px] font-black leading-[.96] tracking-[-.055em] text-white sm:text-[57px]">

                  Local support when
                  <span className="block text-[#A59ED8]">
                    your property needs it.
                  </span>

                </h2>

                <p className="mt-6 max-w-[590px] text-sm leading-7 text-white/45">
                  Superguard Services Isleworth is based at{" "}
                  {LOCAL.address}.
                </p>

              </div>


              <div className="lg:pl-10">

                <div className="border-t border-white/10 pt-6">

                  <span className="block text-[7px] font-black uppercase tracking-[.23em] text-white/25">
                    Contact
                  </span>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="mt-3 flex items-center gap-3 text-[21px] font-black tracking-[-.03em] text-white transition hover:text-[#A59ED8]"
                  >

                    <Phone size={18} className="text-[#A59ED8]" />

                    {LOCAL.phoneDisplay}

                  </a>

                </div>


                <div className="mt-6 border-t border-white/10 pt-6">

                  <span className="block text-[7px] font-black uppercase tracking-[.23em] text-white/25">
                    Address
                  </span>

                  <div className="mt-3 flex gap-3">

                    <MapPin
                      size={17}
                      className="mt-1 shrink-0 text-[#A59ED8]"
                    />

                    <p className="max-w-[390px] text-sm font-bold leading-6 text-white/65">
                      {LOCAL.address}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="bg-[#F7F6FA]">

          <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

            <div className="relative overflow-hidden rounded-[28px] bg-white p-7 shadow-[0_18px_60px_rgba(36,33,45,.06)] sm:p-10 lg:p-14">

              {/* accent architecture */}

              <div className="pointer-events-none absolute right-0 top-0 h-full w-[32%] bg-[#A59ED8]/8" />

              <div className="pointer-events-none absolute right-[12%] top-0 h-full w-px bg-[#6055A6]/10" />

              <div className="relative flex flex-col gap-9 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                    Superguard Services Isleworth
                  </span>

                  <h2 className="mt-4 max-w-[760px] text-[39px] font-black leading-[.97] tracking-[-.055em] text-[#24212D] sm:text-[53px]">

                    Not sure what you're
                    <span className="text-[#6055A6]">
                      {" "}dealing with?
                    </span>

                  </h2>

                  <p className="mt-5 max-w-[560px] text-sm leading-7 text-[#77737C]">
                    Tell us what you've noticed and get the
                    conversation started with the local team.
                  </p>

                </div>


                <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">

                  <Link
                    to="/contact-us"
                    className="sg-purple-button group flex min-h-[56px] min-w-[235px] items-center justify-between gap-7 rounded-xl bg-[#6055A6] px-6 text-[9px] font-black uppercase tracking-[.18em] text-white"
                  >

                    Contact Superguard

                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </Link>


                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="flex min-h-[56px] min-w-[235px] items-center justify-between rounded-xl border border-[#24212D]/10 px-6 text-[9px] font-black uppercase tracking-[.16em] text-[#24212D] transition hover:border-[#6055A6] hover:text-[#6055A6]"
                  >

                    <span className="flex items-center gap-3">

                      <Phone size={14} />

                      {LOCAL.phoneDisplay}

                    </span>

                    <ArrowUpRight size={14} />

                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}


