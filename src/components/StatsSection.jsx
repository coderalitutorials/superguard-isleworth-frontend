



// import React, { useEffect, useRef, useState } from "react";
// import { Bug, Clock, Home, ShieldCheck, MapPin, PhoneCall } from "lucide-react";
// import { Link } from "react-router-dom";

// function AnimatedCounter({ value, duration = 1400 }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const done = useRef(false);

//   const isStatic = value === "24/7";
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     if (isStatic) return;
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting && !done.current) {
//         done.current = true;
//         let start = null;

//         const run = (time) => {
//           if (!start) start = time;
//           const progress = Math.min((time - start) / duration, 1);
//           setCount(Math.round(progress * numericValue));
//           if (progress < 1) requestAnimationFrame(run);
//         };

//         requestAnimationFrame(run);
//       }
//     });

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [duration, isStatic, numericValue]);

//   if (isStatic) return <span ref={ref}>{value}</span>;

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// }

// export default function SuperGuardStatsSection() {
//   const LOCAL = {
//     area: "Bloomsbury",
//     postcode: "WC1H",
//     businessName: "SuperGuard Bloomsbury",
//     address: "14 Tavistock Pl, London WC1H 9RD",
//     phoneDisplay: "07405 110450",
//     phoneTel: "+447405110450",
//   };

//   const stats = [
//     {
//       number: "24/7",
//       label: "Callback Access",
//       desc: "Send pest enquiries anytime and our local team can respond quickly.",
//       icon: Clock,
//     },
//     {
//       number: "12+",
//       label: "Pest Services",
//       desc: "Rodents, bed bugs, cockroaches, ants, fleas, moths, wasps and more.",
//       icon: Bug,
//     },
//     {
//       number: "100%",
//       label: "WC1H Focus",
//       desc: "Built around Bloomsbury homes, flats, shops and commercial premises.",
//       icon: Home,
//     },
//     {
//       number: "4",
//       label: "Service Stages",
//       desc: "Inspection, identification, treatment and prevention guidance.",
//       icon: ShieldCheck,
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#4B4095] py-24 md:py-32">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(27,23,56,0.55),transparent_38%)]" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
//           <div className="lg:col-span-5">
//             <span className="inline-flex items-center gap-2 rounded-full bg-white text-[#4B4095] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] shadow-xl">
//               <span className="w-2 h-2 rounded-full bg-[#4B4095]" />
//               SuperGuard Bloomsbury Standard
//             </span>

//             <h2 className="mt-7 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white">
//               Local Pest Control Built Around Bloomsbury
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed font-medium">
//               These points show how {LOCAL.businessName} handles enquiries,
//               inspections and treatments across {LOCAL.postcode}. Clean process,
//               local coverage and clear pest control support for homes and
//               businesses.
//             </p>

//             <div className="mt-8 rounded-[2.2rem] bg-white/10 border border-white/20 backdrop-blur-xl p-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0">
//                   <MapPin className="w-6 h-6 text-[#4B4095]" strokeWidth={2.5} />
//                 </div>

//                 <div>
//                   <span className="block text-[10px] font-black uppercase tracking-widest text-white/60">
//                     Local Base
//                   </span>
//                   <address className="not-italic mt-2 text-xl font-black text-white leading-snug">
//                     {LOCAL.address}
//                   </address>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 flex flex-col sm:flex-row gap-3">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="rounded-full bg-white text-[#4B4095] px-7 py-4 text-center text-sm font-black uppercase tracking-wider hover:bg-[#F5F4FF] transition-all shadow-xl"
//               >
//                 {LOCAL.phoneDisplay}
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="rounded-full bg-[#15122D] text-white px-7 py-4 text-center text-sm font-black uppercase tracking-wider hover:bg-[#2B2458] transition-all shadow-xl"
//               >
//                 Get Help
//               </Link>
//             </div>
//           </div>

//           <div className="lg:col-span-7">
//             <div className="relative rounded-[3rem] bg-white p-5 sm:p-7 lg:p-8 shadow-2xl shadow-black/25 overflow-hidden">
//               <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#4B4095]/10 blur-3xl" />
//               <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#15122D]/10 blur-3xl" />

//               <div className="relative z-10">
//                 <div className="grid sm:grid-cols-2 gap-5 mb-5">
//                   <div className="sm:col-span-2 rounded-[2.4rem] bg-[#15122D] text-white p-7 sm:p-8 overflow-hidden relative">
//                     <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full border-[28px] border-white/10" />

//                     <span className="block text-[11px] font-black uppercase tracking-[0.22em] text-[#D8D2FF]">
//                       Coverage Area
//                     </span>

//                     <div className="mt-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
//                       <div>
//                         <h3 className="text-7xl sm:text-8xl font-black leading-none">
//                           {LOCAL.postcode}
//                         </h3>
//                         <p className="mt-3 text-white/70 font-medium max-w-md">
//                           Focused pest control support for Bloomsbury, Tavistock
//                           Place, Russell Square, King’s Cross and nearby WC1
//                           locations.
//                         </p>
//                       </div>

//                       <div className="rounded-2xl bg-white text-[#4B4095] px-5 py-4 text-center shrink-0">
//                         <span className="block text-[10px] font-black uppercase tracking-widest">
//                           Area
//                         </span>
//                         <span className="block text-xl font-black">
//                           {LOCAL.area}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {stats.map((item, index) => {
//                     const Icon = item.icon;

//                     return (
//                       <div
//                         key={item.label}
//                         className="group rounded-[2rem] bg-[#F7F5FF] border border-[#4B4095]/10 p-6 hover:bg-[#4B4095] hover:text-white transition-all duration-300"
//                       >
//                         <div className="flex items-start justify-between gap-4 mb-6">
//                           <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
//                             <Icon
//                               className="w-6 h-6 text-[#4B4095]"
//                               strokeWidth={2.5}
//                             />
//                           </div>

//                           <span className="rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#4B4095]">
//                             0{index + 1}
//                           </span>
//                         </div>

//                         <div className="text-5xl font-black tracking-tight text-[#15122D] group-hover:text-white">
//                           <AnimatedCounter value={item.number} />
//                         </div>

//                         <h3 className="mt-3 text-lg font-black text-[#15122D] group-hover:text-white">
//                           {item.label}
//                         </h3>

//                         <p className="mt-2 text-sm leading-relaxed font-medium text-slate-600 group-hover:text-white/75">
//                           {item.desc}
//                         </p>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 <div className="rounded-[2rem] bg-[#4B4095] text-white p-6 sm:p-7">
//                   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
//                     <div className="flex items-start gap-4">
//                       <div className="w-13 h-13 rounded-2xl bg-white flex items-center justify-center shrink-0 p-3">
//                         <PhoneCall
//                           className="w-6 h-6 text-[#4B4095]"
//                           strokeWidth={2.5}
//                         />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-black">
//                           Need pest control in {LOCAL.area}?
//                         </h3>
//                         <p className="text-sm text-white/75 font-medium mt-1">
//                           Speak directly with the {LOCAL.businessName} local
//                           response team.
//                         </p>
//                       </div>
//                     </div>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="rounded-full bg-white text-[#4B4095] px-7 py-4 text-center text-sm font-black uppercase tracking-wider hover:bg-[#F5F4FF] transition-all"
//                     >
//                       Call Now
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import React, { useEffect, useRef, useState } from "react";
// import {
//   ArrowUpRight,
//   Bug,
//   Building2,
//   Check,
//   Clock3,
//   Home,
//   MapPin,
//   PhoneCall,
//   ScanSearch,
//   ShieldCheck,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// function AnimatedCounter({ value, duration = 1400 }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const completed = useRef(false);

//   const isStatic = value === "24/7";

//   const numericValue =
//     parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;

//   const suffix = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     if (isStatic) return;

//     const element = ref.current;

//     if (!element) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !completed.current) {
//           completed.current = true;

//           let startTime = null;

//           const animate = (currentTime) => {
//             if (!startTime) startTime = currentTime;

//             const progress = Math.min(
//               (currentTime - startTime) / duration,
//               1
//             );

//             setCount(Math.round(progress * numericValue));

//             if (progress < 1) {
//               requestAnimationFrame(animate);
//             }
//           };

//           requestAnimationFrame(animate);
//         }
//       },
//       {
//         threshold: 0.3,
//       }
//     );

//     observer.observe(element);

//     return () => observer.disconnect();
//   }, [duration, isStatic, numericValue]);

//   if (isStatic) {
//     return <span ref={ref}>{value}</span>;
//   }

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// }

// export default function SuperGuardStatsSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Westminster",
//     shortName: "SuperGuard Westminster",
//     area: "Westminster",
//     city: "London",
//     postcode: "SW1P 4BD",
//     postcodeShort: "SW1P",
//     streetAddress: "14 Regency St",
//     fullAddress: "14 Regency St, London SW1P 4BD",
//     phoneDisplay: "07466 936103",
//     phoneTel: "+447466936103",
//   };

//   const stats = [
//     {
//       number: "24/7",
//       code: "ACCESS",
//       label: "Enquiry Access",
//       description:
//         "Send your pest control enquiry at any time for callback support from our Westminster team.",
//       icon: Clock3,
//     },
//     {
//       number: "12+",
//       code: "COVERAGE",
//       label: "Pest Services",
//       description:
//         "Support for rodents, bed bugs, cockroaches, ants, fleas, moths, wasps and other common pests.",
//       icon: Bug,
//     },
//     {
//       number: "100%",
//       code: "LOCAL",
//       label: "Westminster Focus",
//       description:
//         "A locally presented service for homes, flats, landlords and commercial premises across Westminster.",
//       icon: MapPin,
//     },
//     {
//       number: "4",
//       code: "METHOD",
//       label: "Control Stages",
//       description:
//         "Assessment, pest identification, treatment planning and practical prevention guidance.",
//       icon: ShieldCheck,
//     },
//   ];

//   const propertyTypes = [
//     "Homes",
//     "Flats",
//     "Landlords",
//     "Offices",
//     "Commercial premises",
//   ];

//   return (
//     <section
//       aria-labelledby="stats-heading"
//       className="relative overflow-hidden bg-[#F1EDF8] py-20 sm:py-24 lg:py-28"
//     >
//       {/* TECHNICAL PAPER GRID */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.045]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#6254B4 1px, transparent 1px), linear-gradient(90deg, #6254B4 1px, transparent 1px)",
//           backgroundSize: "38px 38px",
//         }}
//       />

//       {/* BACKGROUND SHAPES */}
//       <div className="pointer-events-none absolute -left-52 top-20 h-[480px] w-[480px] rounded-full border-[85px] border-[#6254B4]/[0.045]" />

//       <div className="pointer-events-none absolute -right-44 bottom-[-140px] h-[500px] w-[500px] rounded-full bg-[#6254B4]/10 blur-[140px]" />

//       <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10">
//         {/* DATA HEADER */}
//         <div className="grid gap-7 border-y border-[#CFC8DD] py-6 lg:grid-cols-[0.7fr_1fr_auto] lg:items-center">
//           <div className="flex items-center gap-4">
//             <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#6254B4] text-white">
//               <ScanSearch size={20} strokeWidth={2.6} />

//               <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#F1EDF8] bg-[#181425]" />
//             </span>

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//                 Local Service Data
//               </span>

//               <span className="mt-1 block text-xs font-black text-[#181425]">
//                 SuperGuard Services Westminster
//               </span>
//             </div>
//           </div>

//           {/* <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[8px] font-black uppercase tracking-[0.18em] text-slate-400 lg:justify-center">
//             <span>Reference: SGW-ST01</span>

//             <span className="h-1 w-1 rounded-full bg-[#6254B4]" />

//             <span>Territory: Westminster</span>

//             <span className="h-1 w-1 rounded-full bg-[#6254B4]" />

//             <span>Status: Available</span>
//           </div> */}

//           <div className="flex items-center gap-3 lg:justify-end">
//             <MapPin
//               size={15}
//               strokeWidth={2.6}
//               className="shrink-0 text-[#6254B4]"
//             />

//             <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-500">
//               {LOCAL.fullAddress}
//             </span>
//           </div>
//         </div>

//         {/* SECTION HEADING */}
//         <div className="mt-14 grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:items-end">
//           <div>
//             <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//               Westminster In Numbers
//             </span>

//             <p className="mb-0 mt-5 max-w-sm text-sm font-medium leading-7 text-slate-600">
//               A quick overview of the access, service coverage and working
//               structure behind our local pest control support.
//             </p>
//           </div>

//           <h2
//             id="stats-heading"
//             className="max-w-[950px] text-[42px] font-black leading-[0.94] tracking-[-0.055em] text-[#181425] sm:text-[60px] lg:text-[76px]"
//           >
//             Local pest control
//             <span className="block text-[#6254B4]">
//               measured through service.
//             </span>
//           </h2>
//         </div>

//         {/* MAIN DATA LEDGER */}
//         <div className="mt-14 grid gap-6 lg:grid-cols-[0.38fr_1fr] lg:gap-8">
//           {/* POSTCODE IDENTITY TOWER */}
//           <div className="relative overflow-hidden bg-[#181425] text-white lg:min-h-[760px]">
//             {/* TOWER GRID */}
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute inset-0 opacity-[0.065]"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
//                 backgroundSize: "100% 32px",
//               }}
//             />

//             <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border-[60px] border-white/[0.035]" />

//             <div className="relative flex h-full flex-col p-7 sm:p-9 lg:p-10">
//               <div className="flex items-center justify-between">
//                 <span className="flex h-13 w-13 items-center justify-center border border-white/15 bg-[#6254B4]">
//                   <MapPin size={23} strokeWidth={2.7} />
//                 </span>

//                 <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/30">
//                   Area Code
//                 </span>
//               </div>

//               <div className="mt-14">
//                 <span className="block text-[9px] font-black uppercase tracking-[0.28em] text-[#AFA5F8]">
//                   Primary Service Zone
//                 </span>

//                 <div className="mt-5 border-y border-white/10 py-7">
//                   <span className="block text-[78px] font-black leading-[0.8] tracking-[-0.085em] text-white sm:text-[105px] lg:text-[92px] xl:text-[112px]">
//                     {LOCAL.postcodeShort}
//                   </span>

//                   <span className="mt-5 block text-sm font-black uppercase tracking-[0.23em] text-[#AFA5F8]">
//                     Westminster
//                   </span>
//                 </div>

//                 <p className="mt-7 text-sm font-medium leading-7 text-white/55">
//                   Pest control support for Westminster properties and nearby
//                   parts of Central London.
//                 </p>
//               </div>

//               <div className="mt-9 lg:mt-auto">
//                 <span className="block text-[8px] font-black uppercase tracking-[0.21em] text-white/30">
//                   Property Coverage
//                 </span>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {propertyTypes.map((item) => (
//                     <span
//                       key={item}
//                       className="border border-white/10 bg-white/[0.045] px-3 py-2 text-[8px] font-black uppercase tracking-[0.14em] text-white/65"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-8 border-t border-white/10 pt-6">
//                   <span className="block text-[8px] font-black uppercase tracking-[0.21em] text-white/30">
//                     Local Base
//                   </span>

//                   <address className="mt-2 not-italic text-base font-black leading-7 text-white">
//                     {LOCAL.fullAddress}
//                   </address>
//                 </div>

//                 <div className="mt-7 grid gap-3">
//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="group flex min-h-14 items-center justify-between bg-white px-5 text-[10px] font-black uppercase tracking-[0.15em] text-[#6254B4] transition-all duration-300 hover:bg-[#6254B4] hover:text-white"
//                   >
//                     {LOCAL.phoneDisplay}

//                     <PhoneCall
//                       size={16}
//                       strokeWidth={2.7}
//                     />
//                   </a>

//                   <Link
//                     to="/contact-us"
//                     className="group flex min-h-14 items-center justify-between border border-white/15 bg-white/[0.04] px-5 text-[10px] font-black uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#181425]"
//                   >
//                     Request Pest Control

//                     <ArrowUpRight
//                       size={16}
//                       strokeWidth={2.7}
//                       className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                     />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* STAT RECORDS */}
//           <div className="relative">
//             {/* DESKTOP LEDGER AXIS */}
//             <div className="absolute bottom-12 left-[118px] top-12 hidden w-px bg-[#C9C1D5] sm:block" />

//             <div className="space-y-4">
//               {stats.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <article
//                     key={item.label}
//                     className={`group relative overflow-hidden border border-[#D7D0E1] bg-white transition-all duration-500 hover:border-[#6254B4]/40 hover:shadow-[0_25px_70px_rgba(38,29,68,0.12)] ${
//                       index % 2 === 1
//                         ? "sm:ml-10"
//                         : "sm:mr-10"
//                     }`}
//                   >
//                     {/* LARGE GHOST NUMBER */}
//                     <span className="pointer-events-none absolute -right-3 -top-7 text-[130px] font-black leading-none tracking-[-0.08em] text-[#6254B4]/[0.045] sm:text-[170px]">
//                       {item.number}
//                     </span>

//                     <div className="relative grid sm:grid-cols-[118px_1fr_auto]">
//                       {/* COUNTER COLUMN */}
//                       <div className="flex min-h-[150px] flex-col justify-between border-b border-[#E3DEE9] bg-[#F7F4FC] p-5 sm:border-b-0 sm:border-r">
//                         <span className="text-[8px] font-black uppercase tracking-[0.21em] text-[#6254B4]">
//                           {item.code}
//                         </span>

//                         <span className="text-[42px] font-black leading-none tracking-[-0.06em] text-[#181425] sm:text-[48px]">
//                           <AnimatedCounter value={item.number} />
//                         </span>
//                       </div>

//                       {/* STAT CONTENT */}
//                       <div className="flex flex-col justify-center p-6 sm:p-7">
//                         <div className="flex items-center gap-3">
//                           <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEEAFE] text-[#6254B4] transition-all duration-300 group-hover:bg-[#6254B4] group-hover:text-white">
//                             <Icon size={18} strokeWidth={2.7} />
//                           </span>

//                           <h3 className="m-0 text-xl font-black tracking-[-0.03em] text-[#181425] sm:text-2xl">
//                             {item.label}
//                           </h3>
//                         </div>

//                         <p className="mb-0 mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-600">
//                           {item.description}
//                         </p>
//                       </div>

//                       {/* STATUS COLUMN */}
//                       <div className="flex items-center justify-between border-t border-[#E3DEE9] px-6 py-4 sm:w-[112px] sm:flex-col sm:justify-center sm:border-l sm:border-t-0 sm:px-4">
//                         <span className="h-2.5 w-2.5 rounded-full bg-[#6254B4] shadow-[0_0_15px_rgba(98,84,180,0.65)]" />

//                         <span className="text-[8px] font-black uppercase tracking-[0.18em] text-slate-400 sm:mt-4 sm:[writing-mode:vertical-rl]">
//                           Verified Data
//                         </span>

//                         <span className="hidden h-10 w-px bg-[#D7D0E1] sm:mt-4 sm:block" />
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* SERVICE EQUATION */}
//         <div className="mt-16 border-y border-[#CFC8DD] lg:mt-20">
//           <div className="grid lg:grid-cols-[0.5fr_1fr]">
//             <div className="flex items-center gap-5 border-b border-[#CFC8DD] py-8 lg:border-b-0 lg:border-r lg:pr-10">
//               <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#6254B4] text-white">
//                 <ShieldCheck size={23} strokeWidth={2.7} />
//               </span>

//               <div>
//                 <span className="block text-[8px] font-black uppercase tracking-[0.23em] text-[#6254B4]">
//                   SuperGuard Method
//                 </span>

//                 <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#181425]">
//                   Four stages. One clear service route.
//                 </h3>
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-4">
//               {[
//                 "Inspect",
//                 "Identify",
//                 "Treat",
//                 "Guide",
//               ].map((item, index) => (
//                 <div
//                   key={item}
//                   className={`group flex items-center gap-3 py-5 sm:flex-col sm:justify-center sm:px-4 sm:py-8 sm:text-center ${
//                     index !== 3
//                       ? "border-b border-[#CFC8DD] sm:border-b-0 sm:border-r"
//                       : ""
//                   }`}
//                 >
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEEAFE] text-[9px] font-black text-[#6254B4] transition-all duration-300 group-hover:bg-[#6254B4] group-hover:text-white">
//                     0{index + 1}
//                   </span>

//                   <span className="text-[10px] font-black uppercase tracking-[0.17em] text-[#181425]">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CALLBACK BAND */}
//         <div className="relative mt-12 overflow-hidden bg-[#6254B4] px-6 py-7 text-white sm:px-8 lg:px-10">
//           <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[45px] border-white/[0.055]" />

//           <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex items-start gap-5">
//               <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-white text-[#6254B4]">
//                 <PhoneCall size={23} strokeWidth={2.7} />
//               </span>

//               <div>
//                 <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/55">
//                   Local Westminster Support
//                 </span>

//                 <h3 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
//                   Need help with pest activity at your property?
//                 </h3>

//                 <p className="mb-0 mt-2 text-sm font-medium text-white/65">
//                   Contact the {LOCAL.shortName} team with your property
//                   details.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="group inline-flex min-h-14 items-center justify-between gap-6 bg-white px-6 text-[10px] font-black uppercase tracking-[0.15em] text-[#6254B4] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#181425] hover:text-white"
//               >
//                 Call {LOCAL.phoneDisplay}

//                 <PhoneCall size={16} strokeWidth={2.7} />
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="group inline-flex min-h-14 items-center justify-between gap-6 border border-white/25 px-6 text-[10px] font-black uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#6254B4]"
//               >
//                 Send Enquiry

//                 <ArrowUpRight
//                   size={16}
//                   strokeWidth={2.7}
//                   className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM DATA LINE */}
//         <div className="mt-7 grid gap-4 text-[8px] font-black uppercase tracking-[0.18em] text-slate-400 sm:grid-cols-3">
//           <div className="flex items-center gap-3">
//             <Home
//               size={15}
//               strokeWidth={2.6}
//               className="text-[#6254B4]"
//             />

//             Residential pest support
//           </div>

//           <div className="flex items-center gap-3">
//             <Building2
//               size={15}
//               strokeWidth={2.6}
//               className="text-[#6254B4]"
//             />

//             Commercial pest support
//           </div>

//           <div className="flex items-center gap-3">
//             <Check
//               size={15}
//               strokeWidth={3}
//               className="text-[#6254B4]"
//             />

//             Westminster & Central London
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
















import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Bug,
  Building2,
  CheckCircle2,
  Clock3,
  Home,
  MapPin,
  PhoneCall,
  ScanLine,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

function AnimatedCounter({ value, duration = 1200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const completed = useRef(false);

  const isStatic = value === "24/7";

  const numericValue =
    parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;

  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isStatic) return;

    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !completed.current) {
          completed.current = true;

          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;

            const progress = Math.min(
              (currentTime - startTime) / duration,
              1
            );

            setCount(Math.round(progress * numericValue));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [duration, isStatic, numericValue]);

  if (isStatic) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function SuperGuardStatsSection() {
  const LOCAL = {
    company: "Superguard Services Marylebone",
    shortName: "Superguard Marylebone",
    area: "Marylebone",
    city: "London",
    postcode: "NW1 6UB",
    postcodeShort: "NW1",
    streetAddress: "49 Shroton St",
    fullAddress:
      "49 Shroton St, London NW1 6UB, United Kingdom",
    phoneDisplay: "+44 7356 236459",
    phoneTel: "+447356236459",
  };

  const stats = [
    {
      number: "24/7",
      label: "Enquiry Access",
      text: "Get in touch whenever pest activity needs attention.",
      icon: Clock3,
    },
    {
      number: "12+",
      label: "Pest Services",
      text: "Coverage for common residential and commercial pest problems.",
      icon: Bug,
    },
    {
      number: "100%",
      label: "Local Focus",
      text: "Dedicated service presentation for Marylebone and nearby London areas.",
      icon: MapPin,
    },
    {
      number: "4",
      label: "Service Steps",
      text: "Inspect, identify, treat and help prevent recurring pest activity.",
      icon: ShieldCheck,
    },
  ];

  const serviceTypes = [
    {
      icon: Home,
      title: "Residential",
      text: "Homes & flats",
    },
    {
      icon: Building2,
      title: "Commercial",
      text: "Businesses & offices",
    },
    {
      icon: Users,
      title: "Landlords",
      text: "Rental properties",
    },
  ];

  const process = [
    "Inspect",
    "Identify",
    "Treat",
    "Prevent",
  ];

  return (
    <section
      aria-labelledby="marylebone-stats-heading"
      className="relative w-full overflow-hidden bg-white py-16 text-[#6055A6] sm:py-20 lg:py-24"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Purple glow */}
        <div className="absolute -left-52 top-10 h-[500px] w-[500px] rounded-full bg-[#6055A6]/[0.07] blur-[120px]" />

        <div className="absolute -right-52 bottom-0 h-[600px] w-[600px] rounded-full bg-[#6055A6]/[0.06] blur-[140px]" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#6055A6 1px, transparent 1px), linear-gradient(90deg, #6055A6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative circles */}
        <div className="absolute right-[8%] top-20 h-40 w-40 rounded-full border border-[#6055A6]/10" />

        <div className="absolute right-[10%] top-28 h-24 w-24 rounded-full border border-[#6055A6]/15" />

        <div className="absolute bottom-24 left-[5%] h-24 w-24 rounded-full border border-[#6055A6]/10" />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 sm:px-7 lg:px-10">

        {/* =================================================
            TOP BRAND BAR
        ================================================== */}

        <div className="mb-12 flex flex-col gap-5 border-b border-[#6055A6]/15 pb-7 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6055A6] text-white shadow-[0_10px_30px_rgba(96,85,166,0.25)]">
              <ScanLine
                size={21}
                strokeWidth={2.2}
              />
            </div>

            <div>
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]/60">
                Local Pest Control
              </p>

              <p className="mt-1 text-sm font-black tracking-[-0.01em] text-[#6055A6]">
                {LOCAL.company}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#6055A6]">

            <MapPin
              size={16}
              className="shrink-0"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.14em]">
              {LOCAL.area}, {LOCAL.city}
            </span>

          </div>
        </div>

        {/* =================================================
            HERO INTRO
        ================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">

          {/* LEFT */}

          <div>

            <div className="mb-6 flex items-center gap-3">

              <span className="h-[3px] w-12 rounded-full bg-[#6055A6]" />

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]/65">
                Marylebone Service Overview
              </span>

            </div>

            <h2
              id="marylebone-stats-heading"
              className="max-w-[620px] text-[43px] font-black leading-[0.92] tracking-[-0.055em] text-[#6055A6] sm:text-[58px] lg:text-[67px]"
            >
              Pest control
              <span className="block text-[#6055A6]">
                built around your property.
              </span>
            </h2>

          </div>

          {/* RIGHT */}

          <div className="lg:pb-2">

            <p className="max-w-[620px] text-sm font-medium leading-7 text-[#6055A6]/65 sm:text-base">
              {LOCAL.company} provides professional pest control
              support for homes, flats, landlords, offices and
              commercial properties across {LOCAL.area} and
              surrounding Central London areas.
            </p>

          </div>
        </div>

        {/* =================================================
            MAIN PURPLE PANEL
        ================================================== */}

        <div className="relative mt-12 overflow-hidden rounded-[24px] bg-[#6055A6] text-white shadow-[0_30px_100px_rgba(96,85,166,0.20)]">

          {/* Decorative background */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full border-[70px] border-white/[0.07]" />

            <div className="absolute -bottom-40 -left-20 h-[350px] w-[350px] rounded-full border border-white/[0.08]" />

            <div className="absolute right-[30%] top-0 h-full w-px bg-white/[0.08]" />
          </div>

          <div className="relative grid lg:grid-cols-[0.38fr_1fr]">

            {/* =================================================
                LOCATION BLOCK
            ================================================== */}

            <div className="border-b border-white/15 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">

              <div className="flex items-center justify-between">

                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/65">
                  Local Base
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                  <MapPin size={17} />
                </span>

              </div>

              <div className="mt-12">

                <span className="block text-[8px] font-black uppercase tracking-[0.25em] text-white/60">
                  Service Area
                </span>

                <p className="mt-3 text-[58px] font-black leading-none tracking-[-0.07em] sm:text-[72px]">
                  {LOCAL.postcodeShort}
                </p>

                <p className="mt-3 text-sm font-black uppercase tracking-[0.22em] text-white/85">
                  {LOCAL.area}
                </p>

              </div>

              <div className="mt-10 border-t border-white/15 pt-7">

                <p className="text-[8px] font-black uppercase tracking-[0.23em] text-white/55">
                  Office Address
                </p>

                <address className="mt-3 not-italic text-sm font-bold leading-6 text-white">
                  {LOCAL.fullAddress}
                </address>

              </div>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="group mt-7 flex min-h-14 items-center justify-between rounded-xl bg-white px-5 text-[10px] font-black uppercase tracking-[0.14em] text-[#6055A6] transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
              >
                <span>
                  Call {LOCAL.phoneDisplay}
                </span>

                <PhoneCall
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:rotate-6"
                />
              </a>

            </div>

            {/* =================================================
                STATS AREA
            ================================================== */}

            <div className="grid sm:grid-cols-2">

              {stats.map((item, index) => {

                const Icon = item.icon;

                return (
                  <article
                    key={item.label}
                    className={`group relative min-h-[205px] p-7 transition-all duration-300 hover:bg-white/[0.08] sm:p-8 ${
                      index < 2
                        ? "border-b border-white/15"
                        : ""
                    } ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-white/15"
                        : ""
                    }`}
                  >

                    <div className="flex items-start justify-between">

                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 transition-all duration-300 group-hover:bg-white group-hover:text-[#6055A6]">

                        <Icon
                          size={18}
                          strokeWidth={2}
                        />

                      </span>

                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/45">
                        0{index + 1}
                      </span>

                    </div>

                    <div className="mt-8">

                      <div className="text-[47px] font-black leading-none tracking-[-0.065em] sm:text-[54px]">
                        <AnimatedCounter value={item.number} />
                      </div>

                      <h3 className="mt-3 text-sm font-black uppercase tracking-[0.04em] text-white">
                        {item.label}
                      </h3>

                      <p className="mt-2 max-w-[310px] text-xs font-medium leading-5 text-white/60">
                        {item.text}
                      </p>

                    </div>

                  </article>
                );
              })}

            </div>
          </div>
        </div>

        {/* =================================================
            SERVICE TYPES
        ================================================== */}

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

          {/* INTRO */}

          <div>

            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]/65">
              Who We Help
            </span>

            <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#6055A6] sm:text-3xl">
              One local team.
              <span className="block text-[#6055A6]/50">
                Different property needs.
              </span>
            </h3>

          </div>

          {/* TYPES */}

          <div className="grid gap-3 sm:grid-cols-3">

            {serviceTypes.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#6055A6]/15 bg-white p-5 shadow-[0_10px_35px_rgba(96,85,166,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6055A6]/40 hover:shadow-[0_18px_45px_rgba(96,85,166,0.12)]"
                >

                  <div className="flex items-center gap-4">

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6055A6] text-white transition-all duration-300 group-hover:scale-105">

                      <Icon size={18} />

                    </span>

                    <div>

                      <p className="text-xs font-black uppercase tracking-[0.08em] text-[#6055A6]">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[10px] font-medium text-[#6055A6]/50">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* =================================================
            PROCESS STRIP
        ================================================== */}

        <div className="mt-12 overflow-hidden rounded-2xl border border-[#6055A6]/15 bg-white shadow-[0_10px_35px_rgba(96,85,166,0.05)]">

          <div className="flex flex-col lg:flex-row">

            {/* PROCESS TITLE */}

            <div className="flex items-center gap-4 border-b border-[#6055A6]/15 p-6 lg:w-[34%] lg:border-b-0 lg:border-r">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">

                <Target
                  size={19}
                  strokeWidth={2.2}
                />

              </div>

              <div>

                <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#6055A6]/60">
                  Our Approach
                </span>

                <h3 className="mt-1 text-sm font-black text-[#6055A6]">
                  Simple service process
                </h3>

              </div>

            </div>

            {/* PROCESS STEPS */}

            <div className="grid flex-1 sm:grid-cols-4">

              {process.map((item, index) => (

                <div
                  key={item}
                  className={`flex items-center gap-4 p-5 sm:flex-col sm:justify-center sm:gap-3 sm:text-center ${
                    index !== process.length - 1
                      ? "border-b border-[#6055A6]/15 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-[9px] font-black text-white">
                    0{index + 1}
                  </span>

                  <span className="text-[10px] font-black uppercase tracking-[0.17em] text-[#6055A6]">
                    {item}
                  </span>

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* =================================================
            FINAL CTA
        ================================================== */}

        <div className="relative mt-12 overflow-hidden rounded-[22px] bg-[#6055A6] p-6 text-white shadow-[0_25px_70px_rgba(96,85,166,0.18)] sm:p-8 lg:p-10">

          {/* Decorative circles */}

          <div className="pointer-events-none absolute right-[-80px] top-[-110px] h-64 w-64 rounded-full border-[45px] border-white/[0.07]" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#6055A6]">

                <PhoneCall
                  size={22}
                  strokeWidth={2.2}
                />

              </div>

              <div>

                <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/65">
                  {LOCAL.area} Pest Control
                </span>

                <h3 className="mt-2 max-w-[650px] text-2xl font-black leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                  Need help with pest activity?
                </h3>

                <p className="mt-2 max-w-[600px] text-sm font-medium leading-6 text-white/65">
                  Speak with {LOCAL.shortName} about your property
                  and pest control requirements.
                </p>

              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="group inline-flex min-h-14 items-center justify-center gap-5 rounded-xl bg-white px-6 text-[10px] font-black uppercase tracking-[0.14em] text-[#6055A6] transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
              >

                <span>
                  Call {LOCAL.phoneDisplay}
                </span>

                <PhoneCall
                  size={16}
                  strokeWidth={2.5}
                />

              </a>

              <Link
                to="/contact-us"
                className="group inline-flex min-h-14 items-center justify-center gap-5 rounded-xl border border-white/30 bg-white/[0.05] px-6 text-[10px] font-black uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6055A6]"
              >

                <span>
                  Send Enquiry
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

              </Link>

            </div>
          </div>
        </div>

        {/* =================================================
            FOOTER SERVICE LINE
        ================================================== */}

        <div className="mt-7 flex flex-col gap-4 border-t border-[#6055A6]/15 pt-6 text-[8px] font-black uppercase tracking-[0.18em] text-[#6055A6]/50 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2">

            <CheckCircle2
              size={14}
              className="text-[#6055A6]"
            />

            Residential & Commercial Pest Control

          </div>

          <div className="hidden h-1 w-1 rounded-full bg-[#6055A6] sm:block" />

          <div>
            {LOCAL.area} · {LOCAL.city}
          </div>

          <div className="hidden h-1 w-1 rounded-full bg-[#6055A6] sm:block" />

          <div>
            {LOCAL.postcode}
          </div>

        </div>

      </div>
    </section>
  );
}