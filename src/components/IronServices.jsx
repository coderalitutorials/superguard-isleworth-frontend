



// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Bug,
//   Rat,
//   ShieldAlert,
//   PhoneCall,
//   MapPin,
//   CheckCircle,
// } from "lucide-react";

// export default function SuperGuardServicesSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     area: "Bloomsbury",
//     postcode: "WC1H",
//     businessName: "SuperGuard Bloomsbury",
//     baseAddress: "14 Tavistock Pl, London WC1H 9RD",
//     phone: "07405 110450",
//     phoneTel: "+447405110450",
//   };

//   const services = [
//     {
//       title: "Rats & Mice Control",
//       icon: Rat,
//       image: "/images/rodents.webp",
//       label: "Rodent Control",
//       desc: "Rodents can spread through basements, kitchens, storage rooms, roof spaces and wall gaps. SuperGuard Bloomsbury checks activity signs, access routes and risk areas before planning treatment.",
//       points: ["Entry point checks", "Rodent activity inspection", "Proofing guidance"],
//     },
//     {
//       title: "Bed Bug Treatment",
//       icon: Bug,
//       image: "/images/bedbugs.webp",
//       label: "Bed Bug Service",
//       desc: "Bed bugs can hide in mattress seams, bed frames, headboards and soft furnishings. Our Bloomsbury team inspects affected rooms and provides targeted treatment with clear aftercare advice.",
//       points: ["Room inspection", "Targeted treatment", "Aftercare advice"],
//     },
//     {
//       title: "Wasp Nest Control",
//       icon: ShieldAlert,
//       image: "/images/wasps.webp",
//       label: "Wasp Nest Help",
//       desc: "Wasps around roof edges, wall voids, gardens, sheds and business entrances can become a serious issue quickly. We help locate active nest areas and arrange a safe treatment approach.",
//       points: ["Nest activity check", "Safe treatment method", "Clear next steps"],
//     },
//   ];

//   useEffect(() => {
//     const items = document.querySelectorAll(".sg-service-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("sg-service-show");
//         });
//       },
//       { threshold: 0.16 }
//     );

//     items.forEach((item) => observer.observe(item));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#4B4095] py-24 lg:py-32">
//       <style>{`
//         .sg-service-animate {
//           opacity: 0;
//           transform: translateY(28px);
//           transition:
//             opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sg-service-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sg-delay-1 { transition-delay: 120ms; }
//         .sg-delay-2 { transition-delay: 220ms; }
//         .sg-delay-3 { transition-delay: 320ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-service-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(21,18,45,0.65),transparent_42%)]" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-14">
//           <div className="lg:col-span-7 sg-service-animate">
//             <span className="inline-flex items-center gap-2 rounded-full bg-white text-[#4B4095] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] shadow-xl">
//               <span className="w-2 h-2 rounded-full bg-[#4B4095]" />
//               SuperGuard Services In {LOCAL.area}
//             </span>

//             <h2 className="mt-7 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white">
//               Pest Control Services For Bloomsbury Properties
//             </h2>
//           </div>

//           <div className="lg:col-span-5 sg-service-animate sg-delay-1">
//             <p className="text-base sm:text-lg text-white/80 leading-relaxed font-medium">
//               Inspection-led pest control for homes, flats, landlords, offices,
//               shops and local businesses across {LOCAL.postcode}. We focus on
//               finding the cause, applying the right treatment and giving clear
//               prevention advice.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <article
//                 key={service.title}
//                 className={`sg-service-animate sg-delay-${index + 1} group`}
//               >
//                 <div className="h-full rounded-[2.6rem] bg-white p-4 shadow-2xl shadow-black/20 overflow-hidden hover:-translate-y-2 transition-all duration-300">
//                   <div className="relative h-[260px] rounded-[2rem] overflow-hidden">
//                     <img
//                       src={service.image}
//                       alt={`${service.title} in ${LOCAL.area}`}
//                       className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                       loading="lazy"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#15122D]/75 via-[#15122D]/10 to-transparent" />

//                     <div className="absolute top-4 left-4 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl">
//                       <span className="block text-[10px] font-black uppercase tracking-widest text-[#4B4095]">
//                         Service 0{index + 1}
//                       </span>
//                       <span className="block text-sm font-black text-[#15122D]">
//                         {service.label}
//                       </span>
//                     </div>

//                     <div className="absolute bottom-4 right-4 h-16 w-16 rounded-3xl bg-[#4B4095] flex items-center justify-center shadow-xl shadow-black/25">
//                       <Icon className="w-8 h-8 text-white" strokeWidth={2.3} />
//                     </div>
//                   </div>

//                   <div className="p-4 sm:p-5">
//                     <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#4B4095] mb-3">
//                       {LOCAL.businessName}
//                     </span>

//                     <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight text-[#15122D] mb-4">
//                       {service.title}
//                     </h3>

//                     <p className="text-sm text-slate-600 leading-relaxed font-medium mb-5">
//                       {service.desc}
//                     </p>

//                     <div className="space-y-3 mb-6">
//                       {service.points.map((point) => (
//                         <div
//                           key={point}
//                           className="flex items-center gap-3 rounded-2xl bg-[#F7F5FF] border border-[#4B4095]/10 px-4 py-3"
//                         >
//                           <CheckCircle className="w-4 h-4 text-[#4B4095] shrink-0" />
//                           <span className="text-sm font-black text-[#15122D]">
//                             {point}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
//                       <button
//                         onClick={() => navigate("/contact-us")}
//                         className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4B4095] hover:bg-[#2B2458] text-white px-5 py-4 text-xs font-black uppercase tracking-[0.14em] transition-all"
//                       >
//                         Request
//                         <ArrowRight className="w-4 h-4" />
//                       </button>

//                       <a
//                         href={`tel:${LOCAL.phoneTel}`}
//                         className="inline-flex items-center justify-center gap-2 rounded-full bg-[#15122D] text-white px-5 py-4 text-xs font-black uppercase tracking-[0.14em] hover:bg-[#272248] transition-all"
//                       >
//                         <PhoneCall className="w-4 h-4" />
//                         Call
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         <div className="mt-10 rounded-[2.6rem] bg-[#15122D] text-white p-6 md:p-8 shadow-2xl shadow-black/20 sg-service-animate sg-delay-3">
//           <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0">
//                 <MapPin className="w-5 h-5 text-[#4B4095]" />
//               </div>

//               <div>
//                 <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#D8D2FF] mb-1">
//                   Local Bloomsbury Service Base
//                 </span>
//                 <p className="text-sm text-white/75 font-medium leading-relaxed">
//                   Based near{" "}
//                   <strong className="text-white">{LOCAL.baseAddress}</strong>,
//                   supporting pest control enquiries across {LOCAL.area},{" "}
//                   Tavistock Place, Russell Square, King’s Cross and nearby WC1
//                   areas.
//                 </p>
//               </div>
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="inline-flex justify-center items-center gap-2 rounded-full bg-white text-[#4B4095] px-7 py-4 text-sm font-black hover:bg-[#F5F4FF] transition-all"
//             >
//               <PhoneCall className="w-4 h-4" />
//               {LOCAL.phone}
//             </a>
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
//   Bug,
//   Rat,
//   ShieldAlert,
//   PhoneCall,
//   MapPin,
//   CheckCircle,
// } from "lucide-react";

// export default function SuperGuardServicesSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     businessName: "SuperGuard Walworth",
//     baseAddress: "36 Sutherland Square, London SE17 3EE",
//     phone: "07466 565503",
//     phoneTel: "+447466565503",
//   };

//   const services = [
//     {
//       title: "Rats & Mice Control",
//       icon: Rat,
//       image: "/images/rodents.webp",
//       label: "Rodent Control",
//       desc: "Rodents can move through kitchens, basements, lofts, wall gaps and storage areas. We inspect activity signs, access routes and proofing risks before planning treatment.",
//       points: ["Entry point checks", "Activity inspection", "Proofing guidance"],
//     },
//     {
//       title: "Bed Bug Treatment",
//       icon: Bug,
//       image: "/images/bedbugs.webp",
//       label: "Bed Bug Service",
//       desc: "Bed bugs hide in mattress seams, bed frames, headboards and soft furnishings. Our Walworth team checks affected rooms and provides targeted treatment with clear aftercare.",
//       points: ["Room inspection", "Targeted treatment", "Aftercare advice"],
//     },
//     {
//       title: "Wasp Nest Control",
//       icon: ShieldAlert,
//       image: "/images/wasps.webp",
//       label: "Wasp Nest Help",
//       desc: "Wasps around roof edges, wall voids, gardens and entrances can become risky quickly. We help locate active nest areas and arrange suitable treatment.",
//       points: ["Nest activity check", "Safe method", "Clear next steps"],
//     },
//   ];

//   useEffect(() => {
//     const items = document.querySelectorAll(".sg-service-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("sg-service-show");
//         });
//       },
//       { threshold: 0.16 }
//     );

//     items.forEach((item) => observer.observe(item));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#17122F] py-24 lg:py-32">
//       <style>{`
//         .sg-service-animate {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 850ms cubic-bezier(0.16,1,0.3,1),
//           transform 850ms cubic-bezier(0.16,1,0.3,1);
//         }
//         .sg-service-show { opacity: 1; transform: translateY(0); }
//         .sg-delay-1 { transition-delay: 120ms; }
//         .sg-delay-2 { transition-delay: 220ms; }
//         .sg-delay-3 { transition-delay: 320ms; }
//         @media (prefers-reduced-motion: reduce) {
//           .sg-service-animate { opacity: 1; transform: none; transition: none; }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute right-0 top-0 h-full w-[48%] bg-[#5F52B5]" />
//         <div className="absolute left-[-160px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#5F52B5]/30 blur-3xl" />
//         <div className="absolute bottom-[-160px] right-[-160px] h-[560px] w-[560px] rounded-full bg-white/10 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         <div className="sg-service-animate mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
//           <div className="lg:col-span-8">
//             <span className="inline-flex bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
//               SuperGuard Services • {LOCAL.area} {LOCAL.postcode}
//             </span>

//             <h2 className="mt-7 max-w-5xl text-4xl font-black leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-7xl">
//               Specialist Pest Treatments For Homes, Flats & Businesses.
//             </h2>
//           </div>

//           <p className="lg:col-span-4 text-base font-medium leading-relaxed text-white/72">
//             Inspection-led pest control across Walworth with targeted treatments,
//             clear advice and practical prevention support.
//           </p>
//         </div>

//         <div className="grid gap-7 lg:grid-cols-3">
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <article
//                 key={service.title}
//                 className={`sg-service-animate sg-delay-${index + 1} group relative overflow-hidden bg-white shadow-2xl shadow-black/20 ${
//                   index === 1 ? "lg:mt-14" : ""
//                 }`}
//               >
//                 <div className="relative h-[360px] overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={`${service.title} in ${LOCAL.area}`}
//                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     loading="lazy"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#17122F]/95 via-[#17122F]/30 to-transparent" />

//                   <div className="absolute left-5 top-5 bg-white px-4 py-3">
//                     <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                       0{index + 1}
//                     </span>
//                     <span className="block text-sm font-black text-[#17122F]">
//                       {service.label}
//                     </span>
//                   </div>

//                   <div className="absolute bottom-5 left-5 right-5">
//                     <div className="flex items-end justify-between gap-4">
//                       <h3 className="max-w-[260px] text-3xl font-black leading-tight text-white">
//                         {service.title}
//                       </h3>

//                       <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-[#5F52B5] text-white">
//                         <Icon className="h-8 w-8" strokeWidth={2.4} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6 sm:p-7">
//                   <p className="text-sm font-semibold leading-relaxed text-slate-600">
//                     {service.desc}
//                   </p>

//                   <div className="mt-6 space-y-3">
//                     {service.points.map((point) => (
//                       <div key={point} className="flex items-center gap-3">
//                         <CheckCircle className="h-5 w-5 shrink-0 text-[#5F52B5]" />
//                         <span className="text-sm font-black text-[#17122F]">
//                           {point}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-7 grid grid-cols-2 gap-3">
//                     <button
//                       onClick={() => navigate("/contact-us")}
//                       className="inline-flex items-center justify-center gap-2 bg-[#5F52B5] px-5 py-4 text-xs font-black uppercase tracking-[0.14em] text-white transition-all hover:bg-[#17122F]"
//                     >
//                       Request
//                       <ArrowRight className="h-4 w-4" />
//                     </button>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="inline-flex items-center justify-center gap-2 bg-[#17122F] px-5 py-4 text-xs font-black uppercase tracking-[0.14em] text-white transition-all hover:bg-[#5F52B5]"
//                     >
//                       <PhoneCall className="h-4 w-4" />
//                       Call
//                     </a>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         <div className="sg-service-animate sg-delay-3 mt-12 overflow-hidden bg-white shadow-2xl shadow-black/20">
//           <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
//             <div className="p-7 md:p-9">
//               <div className="flex items-start gap-4">
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#5F52B5] text-white">
//                   <MapPin className="h-6 w-6" />
//                 </div>

//                 <div>
//                   <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
//                     Local Walworth Service Base
//                   </span>

//                   <h3 className="mt-2 text-2xl font-black text-[#17122F]">
//                     Based near {LOCAL.baseAddress}
//                   </h3>

//                   <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
//                     Covering Walworth, Elephant & Castle, Kennington, Camberwell
//                     and nearby SE17 areas.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-[#5F52B5] p-7 text-white md:p-9">
//               <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-white/65">
//                 Need a different pest service?
//               </span>

//               <h3 className="mt-2 text-3xl font-black leading-tight">
//                 Ants, fleas, moths, cockroaches and more.
//               </h3>

//               <button
//                 onClick={() => navigate("/services")}
//                 className="mt-6 bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-[#5F52B5] transition-all hover:bg-[#F4F2FF]"
//               >
//                 View All Services
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

































// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowUpRight,
//   BadgeCheck,
//   Bug,
//   Building2,
//   CheckCircle2,
//   MapPin,
//   Phone,
//   Rat,
//   Search,
//   ShieldCheck,
//   Smartphone,
// } from "lucide-react";

// export default function SuperGuardServicesSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     fullAddress: "49 Shroton St, London NW1 6UB, United Kingdom",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//   };

//   const benefits = [
//     {
//       number: "01",
//       title: "Local Knowledge",
//       description:
//         "A Marylebone-focused service with practical knowledge of local residential and commercial properties.",
//       icon: MapPin,
//     },
//     {
//       number: "02",
//       title: "Detailed Inspection",
//       description:
//         "We look beyond visible activity to understand where pests are entering, hiding and spreading.",
//       icon: Search,
//     },
//     {
//       number: "03",
//       title: "Targeted Treatment",
//       description:
//         "Professional pest control methods selected around the property, pest type and level of activity.",
//       icon: ShieldCheck,
//     },
//   ];

//   const services = [
//     {
//       number: "01",
//       title: "Rats & Mice Control",
//       category: "RODENT CONTROL",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       description:
//         "Professional inspection and treatment for rats and mice in homes, flats, lofts, basements and commercial premises.",
//     },
//     {
//       number: "02",
//       title: "Bed Bug Treatment",
//       category: "BED BUG CONTROL",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       description:
//         "Targeted bed bug treatment for bedrooms and affected areas, supported by practical preparation and aftercare guidance.",
//     },
//     {
//       number: "03",
//       title: "Wasp Nest Control",
//       category: "WASP CONTROL",
//       image: "/images/wasps.webp",
//       icon: ShieldCheck,
//       description:
//         "Professional wasp nest treatment for nests around roofs, walls, gardens and other areas surrounding your property.",
//     },
//   ];

//   useEffect(() => {
//     const items = document.querySelectorAll(".sgm-reveal");

//     if (!("IntersectionObserver" in window)) {
//       items.forEach((item) => item.classList.add("sgm-visible"));
//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) return;

//           entry.target.classList.add("sgm-visible");
//           observer.unobserve(entry.target);
//         });
//       },
//       {
//         threshold: 0.12,
//         rootMargin: "0px 0px -50px 0px",
//       }
//     );

//     items.forEach((item) => observer.observe(item));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       aria-labelledby="marylebone-services-heading"
//       className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
//     >
//       <meta itemProp="name" content={LOCAL.company} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, ${LOCAL.city}`}
//       />

//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />

//       <style>{`
//         .sgm-reveal {
//           opacity: 0;
//           transform: translateY(32px);
//           transition:
//             opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgm-visible {
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

//         .sgm-service-image {
//           transition:
//             transform 800ms cubic-bezier(0.16, 1, 0.3, 1),
//             filter 500ms ease;
//         }

//         .sgm-service-card:hover .sgm-service-image {
//           transform: scale(1.055);
//           filter: saturate(1.08);
//         }

//         .sgm-arrow {
//           transition:
//             transform 350ms cubic-bezier(0.16, 1, 0.3, 1),
//             background-color 350ms ease;
//         }

//         .sgm-service-card:hover .sgm-arrow {
//           transform: translate(4px, -4px);
//         }

//         .sgm-line {
//           transform-origin: left center;
//           transform: scaleX(0.35);
//           transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgm-service-card:hover .sgm-line {
//           transform: scaleX(1);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sgm-reveal {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }

//           .sgm-service-image,
//           .sgm-arrow,
//           .sgm-line {
//             transition: none;
//           }
//         }
//       `}</style>

//       {/* =====================================================
//           BACKGROUND DETAILS
//       ====================================================== */}

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-[-100px] top-[-100px] h-[360px] w-[360px] rounded-full border-[70px] border-[#6055A6]/[0.045]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-[420px] w-[420px] rounded-full border-[80px] border-[#6055A6]/[0.04]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-[7%] top-[27%] h-2 w-2 rounded-full bg-[#6055A6]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-[4%] top-[53%] h-1.5 w-1.5 rounded-full bg-[#6055A6]"
//       />

//       <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10">

//         {/* =====================================================
//             TOP HEADER
//         ====================================================== */}

//         <div className="sgm-reveal grid gap-8 border-y border-black/10 py-6 lg:grid-cols-[1fr_auto] lg:items-center">

//           <div className="flex items-center gap-4">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
//               <ShieldCheck size={22} strokeWidth={2.2} />
//             </div>

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 Professional Pest Control
//               </span>

//               <span className="mt-1 block text-sm font-black tracking-[-0.02em] text-[#111111]">
//                 {LOCAL.company}
//               </span>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[9px] font-black uppercase tracking-[0.14em] text-black/55">
//             <span className="flex items-center gap-2">
//               <MapPin
//                 size={15}
//                 strokeWidth={2.4}
//                 className="text-[#6055A6]"
//               />
//               {LOCAL.area}, {LOCAL.city}
//             </span>

//             <span className="hidden h-1 w-1 rounded-full bg-[#6055A6] sm:block" />

//             <span>{LOCAL.postcode}</span>
//           </div>
//         </div>

//         {/* =====================================================
//             HERO / INTRO
//         ====================================================== */}

//         <div className="sgm-reveal mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">

//           <div>
//             <div className="flex items-center gap-3">
//               <span className="text-[9px] font-black uppercase tracking-[0.32em] text-[#6055A6]">
//                 Marylebone Pest Control
//               </span>

//               <span className="h-px w-16 bg-[#6055A6]" />
//             </div>

//             <h2
//               id="marylebone-services-heading"
//               className="mt-6 max-w-[900px] text-[48px] font-black leading-[0.9] tracking-[-0.065em] text-[#111111] sm:text-[66px] lg:text-[82px]"
//             >
//               Professional control.
//               <span className="block text-[#6055A6]">
//                 Local to Marylebone.
//               </span>
//             </h2>
//           </div>

//           <div className="lg:pb-2">
//             <p className="max-w-[520px] text-[15px] font-medium leading-[1.8] text-black/55 sm:text-base">
//               {LOCAL.company} provides professional pest control
//               services for homes, flats, landlords, offices and
//               commercial properties across {LOCAL.area} and nearby
//               areas of Central London.
//             </p>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="mt-6 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#6055A6] transition-all duration-300 hover:gap-5"
//             >
//               <Phone size={16} strokeWidth={2.5} />
//               Speak with our team
//               <ArrowUpRight size={16} strokeWidth={2.5} />
//             </a>
//           </div>
//         </div>

//         {/* =====================================================
//             MAIN SERVICES AREA
//         ====================================================== */}

//         <div className="mt-14 lg:mt-20">

//           {/* SECTION LABEL */}

//           <div className="sgm-reveal mb-7 flex items-end justify-between border-b border-black/10 pb-4">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 Our Core Services
//               </span>

//               <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#111111] sm:text-3xl">
//                 Pest problems. Clear solutions.
//               </h3>
//             </div>

//             <span className="hidden text-[8px] font-black uppercase tracking-[0.2em] text-black/35 sm:block">
//               03 Featured Services
//             </span>
//           </div>

//           {/* SERVICE CARDS */}

//           <div className="space-y-5">

//             {services.map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <article
//                   key={service.title}
//                   className={`sgm-reveal sgm-service-card group overflow-hidden border border-black/10 bg-white transition-all duration-500 hover:border-[#6055A6]/50 hover:shadow-[0_25px_70px_rgba(0,0,0,0.09)] ${
//                     index === 0
//                       ? "sgm-delay-1"
//                       : index === 1
//                         ? "sgm-delay-2"
//                         : "sgm-delay-3"
//                   }`}
//                 >
//                   <div className="grid lg:grid-cols-[390px_minmax(0,1fr)_210px]">

//                     {/* IMAGE */}

//                     <div className="relative h-[290px] overflow-hidden sm:h-[340px] lg:h-[300px]">
//                       <img
//                         src={service.image}
//                         alt={`${service.title} in ${LOCAL.area}`}
//                         className="sgm-service-image h-full w-full object-cover"
//                         loading="lazy"
//                       />

//                       <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

//                       <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-[#6055A6] text-white">
//                         <Icon size={20} strokeWidth={2} />
//                       </div>

//                       <span className="absolute bottom-5 left-5 text-[8px] font-black uppercase tracking-[0.25em] text-white">
//                         {service.category}
//                       </span>
//                     </div>

//                     {/* CONTENT */}

//                     <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">

//                       <div>
//                         <div className="flex items-start justify-between gap-5">
//                           <div>
//                             <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                               Service {service.number}
//                             </span>

//                             <h3 className="mt-3 text-[30px] font-black leading-[0.95] tracking-[-0.045em] text-[#111111] sm:text-[38px]">
//                               {service.title}
//                             </h3>
//                           </div>

//                           <div className="hidden h-12 w-12 shrink-0 items-center justify-center border border-black/10 text-[#6055A6] sm:flex">
//                             <Icon size={20} strokeWidth={2} />
//                           </div>
//                         </div>

//                         <div className="sgm-line mt-6 h-[2px] w-16 bg-[#6055A6]" />

//                         <p className="mt-6 max-w-[650px] text-sm font-medium leading-[1.8] text-black/55 sm:text-[15px]">
//                           {service.description}
//                         </p>
//                       </div>

//                       <button
//                         type="button"
//                         onClick={() => navigate("/contact-us")}
//                         className="mt-8 flex w-fit items-center gap-3 text-[9px] font-black uppercase tracking-[0.17em] text-[#111111] transition-colors duration-300 hover:text-[#6055A6]"
//                       >
//                         Discuss This Service

//                         <span className="sgm-arrow flex h-9 w-9 items-center justify-center bg-[#6055A6] text-white">
//                           <ArrowUpRight
//                             size={17}
//                             strokeWidth={2.3}
//                           />
//                         </span>
//                       </button>
//                     </div>

//                     {/* NUMBER / SIDE PANEL */}

//                     <div className="relative flex flex-col justify-between border-t border-black/10 bg-[#6055A6] p-7 text-white lg:border-l lg:border-t-0 lg:p-8">

//                       <div className="flex items-center justify-between">
//                         <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/65">
//                           Pest Control
//                         </span>

//                         <span className="text-[44px] font-black leading-none tracking-[-0.08em] text-white/25">
//                           {service.number}
//                         </span>
//                       </div>

//                       <div className="mt-8 lg:mt-0">
//                         <span className="block text-[8px] font-black uppercase tracking-[0.22em] text-white/55">
//                           Service Area
//                         </span>

//                         <span className="mt-2 block text-lg font-black">
//                           {LOCAL.area}
//                         </span>

//                         <span className="mt-1 block text-[10px] font-medium text-white/60">
//                           {LOCAL.city}
//                         </span>
//                       </div>

//                       <div className="mt-8 border-t border-white/20 pt-5">
//                         <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/55">
//                           Professional Support
//                         </span>
//                       </div>
//                     </div>

//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>

//         {/* =====================================================
//             WHY CHOOSE US
//         ====================================================== */}

//         <div className="sgm-reveal sgm-delay-2 mt-16 border-y border-black/10 py-10 lg:mt-20 lg:py-14">

//           <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16">

//             {/* TITLE */}

//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 Why Choose Us
//               </span>

//               <h3 className="mt-4 max-w-[430px] text-3xl font-black leading-[0.95] tracking-[-0.05em] text-[#111111] sm:text-4xl">
//                 A practical approach to pest control.
//               </h3>

//               <p className="mt-5 max-w-[400px] text-sm font-medium leading-7 text-black/50">
//                 From the first inspection to treatment and prevention
//                 advice, every stage is focused on dealing with the
//                 actual pest problem.
//               </p>
//             </div>

//             {/* BENEFITS */}

//             <div className="grid gap-0 border-l-2 border-[#6055A6]">

//               {benefits.map((benefit) => {
//                 const Icon = benefit.icon;

//                 return (
//                   <div
//                     key={benefit.title}
//                     className="group border-b border-black/10 p-6 transition-all duration-300 last:border-b-0 hover:bg-[#6055A6]/[0.035] sm:p-7"
//                   >
//                     <div className="flex gap-5">

//                       <span className="text-[10px] font-black tracking-[0.15em] text-[#6055A6]">
//                         {benefit.number}
//                       </span>

//                       <div className="flex-1">
//                         <div className="flex items-center justify-between gap-5">
//                           <h4 className="text-lg font-black tracking-[-0.025em] text-[#111111]">
//                             {benefit.title}
//                           </h4>

//                           <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white transition-transform duration-300 group-hover:rotate-6">
//                             <Icon size={17} strokeWidth={2} />
//                           </span>
//                         </div>

//                         <p className="mt-2 max-w-[600px] text-sm font-medium leading-6 text-black/50">
//                           {benefit.description}
//                         </p>
//                       </div>

//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             PROPERTY TYPES
//         ====================================================== */}

//         <div className="sgm-reveal sgm-delay-3 mt-14 grid gap-5 sm:grid-cols-3">

//           {[
//             {
//               icon: Building2,
//               title: "Homes & Flats",
//               text: "Residential pest control",
//             },
//             {
//               icon: BadgeCheck,
//               title: "Landlords",
//               text: "Rental property support",
//             },
//             {
//               icon: ShieldCheck,
//               title: "Businesses",
//               text: "Commercial pest control",
//             },
//           ].map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className="group border border-black/10 bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-[#6055A6]/45 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
//               >
//                 <div className="flex items-center gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6055A6] text-white">
//                     <Icon size={19} strokeWidth={2} />
//                   </span>

//                   <div>
//                     <h4 className="text-sm font-black uppercase tracking-[0.03em] text-[#111111]">
//                       {item.title}
//                     </h4>

//                     <p className="mt-1 text-[11px] font-medium text-black/45">
//                       {item.text}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* =====================================================
//             CONTACT CTA
//         ====================================================== */}

//         <div className="sgm-reveal sgm-delay-4 relative mt-14 overflow-hidden bg-[#6055A6] p-7 text-white sm:p-9 lg:mt-16 lg:p-12">

//           {/* Decorative geometry */}

//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute right-[-90px] top-[-150px] h-[400px] w-[400px] rounded-full border-[70px] border-white/[0.06]"
//           />

//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute bottom-[-100px] left-[35%] h-[250px] w-[250px] rounded-full border border-white/[0.07]"
//           />

//           <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/60">
//                 {LOCAL.company}
//               </span>

//               <h3 className="mt-3 max-w-[720px] text-3xl font-black leading-[0.98] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
//                 Need help with a pest problem?
//               </h3>

//               <p className="mt-4 max-w-[620px] text-sm font-medium leading-6 text-white/65">
//                 Contact our Marylebone team to discuss your property,
//                 pest activity and treatment requirements.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="group inline-flex min-h-[56px] items-center justify-center gap-4 bg-white px-7 text-[10px] font-black uppercase tracking-[0.15em] text-[#6055A6] transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
//               >
//                 <Phone
//                   size={17}
//                   strokeWidth={2.4}
//                 />

//                 {LOCAL.phoneDisplay}
//               </a>

//               <button
//                 type="button"
//                 onClick={() => navigate("/contact-us")}
//                 className="group inline-flex min-h-[56px] items-center justify-center gap-4 border border-white/35 px-7 text-[10px] font-black uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6055A6]"
//               >
//                 Send Enquiry

//                 <ArrowUpRight
//                   size={17}
//                   strokeWidth={2.4}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </button>

//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             BOTTOM LOCATION BAR
//         ====================================================== */}

//         <div className="sgm-reveal mt-7 flex flex-col gap-4 border-t border-black/10 pt-6 text-[8px] font-black uppercase tracking-[0.18em] text-black/40 sm:flex-row sm:items-center sm:justify-between">

//           <div className="flex items-center gap-2">
//             <CheckCircle2
//               size={14}
//               strokeWidth={2.5}
//               className="text-[#6055A6]"
//             />

//             Residential & Commercial Pest Control
//           </div>

//           <div className="flex items-center gap-2">
//             <MapPin
//               size={14}
//               strokeWidth={2.5}
//               className="text-[#6055A6]"
//             />

//             {LOCAL.fullAddress}
//           </div>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="flex items-center gap-2 text-[#6055A6] transition-colors duration-300 hover:text-black"
//           >
//             <Phone
//               size={14}
//               strokeWidth={2.5}
//             />

//             {LOCAL.phoneDisplay}
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }









// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   BadgeCheck,
//   Bug,
//   MapPin,
//   Phone,
//   Rat,
//   Search,
//   ShieldCheck,
//   Smartphone,
// } from "lucide-react";

// export default function SuperGuardServicesSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     company: "SuperGuard Services Westminster",
//     area: "Westminster",
//     postcode: "SW1P 4BD",
//     fullAddress: "14 Regency St, London SW1P 4BD",
//     phoneDisplay: "07466 936103",
//     phoneTel: "+447466936103",
//   };

//   const benefits = [
//     {
//       title: "Local Westminster Team",
//       description:
//         "Based in SW1P with fast local response across Westminster and nearby areas.",
//       icon: ShieldCheck,
//     },
//     {
//       title: "Thorough Inspection",
//       description:
//         "We inspect activity, entry points and conditions before planning the right treatment.",
//       icon: Search,
//     },
//     {
//       title: "Safe & Effective Methods",
//       description:
//         "Targeted, responsible treatments focused on long-term prevention and peace of mind.",
//       icon: BadgeCheck,
//     },
//   ];

//   const services = [
//     {
//       number: "01",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       description:
//         "Inspection and treatment for rodent activity in homes, flats, lofts, basements and commercial properties.",
//       route: "/contact-us",
//       theme: "purple",
//     },
//     {
//       number: "02",
//       title: "Bed Bug Treatment",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       description:
//         "Targeted bed bug treatments for bedrooms, living areas and entire properties with clear aftercare guidance.",
//       route: "/contact-us",
//       theme: "dark",
//     },
//     {
//       number: "03",
//       title: "Wasp Nest Control",
//       image: "/images/wasps.webp",
//       icon: ShieldCheck,
//       description:
//         "Safe wasp nest removal and treatment for gardens, roofs, walls and other problem areas around properties.",
//       route: "/contact-us",
//       theme: "purple",
//     },
//   ];

//   useEffect(() => {
//     const items = document.querySelectorAll(
//       ".sgw-service-reveal"
//     );

//     if (!("IntersectionObserver" in window)) {
//       items.forEach((item) => item.classList.add("sgw-service-show"));
//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) return;

//           entry.target.classList.add("sgw-service-show");
//           observer.unobserve(entry.target);
//         });
//       },
//       {
//         threshold: 0.12,
//         rootMargin: "0px 0px -45px 0px",
//       }
//     );

//     items.forEach((item) => observer.observe(item));

//     return () => observer.disconnect();
//   }, []);

//   const getTheme = (theme) => {
//     if (theme === "dark") {
//       return {
//         body: "bg-[linear-gradient(145deg,#2B2733_0%,#211E28_45%,#17141D_100%)]",
//         icon: "bg-[#2A2633]",
//         button: "bg-black/10 hover:bg-black/25",
//       };
//     }

//     return {
//       body: "bg-[linear-gradient(145deg,#6254B4_0%,#4D3A9B_52%,#2E225B_100%)]",
//       icon: "bg-[#5C49AB]",
//       button: "bg-black/10 hover:bg-black/20",
//     };
//   };

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       aria-labelledby="services-heading"
//       className="relative overflow-hidden bg-[#F8F7FC] py-14 sm:py-16 lg:py-20"
//     >
//       <meta itemProp="name" content={LOCAL.company} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, Central London`}
//       />

//       <style>{`
//         .sgw-service-reveal {
//           opacity: 0;
//           transform: translateY(26px);
//           transition:
//             opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgw-service-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sgw-delay-1 {
//           transition-delay: 90ms;
//         }

//         .sgw-delay-2 {
//           transition-delay: 170ms;
//         }

//         .sgw-delay-3 {
//           transition-delay: 250ms;
//         }

//         .sgw-delay-4 {
//           transition-delay: 330ms;
//         }

//         .sgw-card-shell {
//           clip-path: polygon(
//             0 0,
//             100% 0,
//             100% 100%,
//             18% 100%,
//             0 93%
//           );
//         }

//         .sgw-image-shape {
//           clip-path: polygon(
//             0 0,
//             100% 0,
//             100% 88%,
//             57% 94%,
//             43% 88%,
//             0 94%
//           );
//         }

//         .sgw-purple-dots {
//           background-image: radial-gradient(
//             circle,
//             rgba(98, 84, 180, 0.32) 1.3px,
//             transparent 1.3px
//           );
//           background-size: 10px 10px;
//         }

//         @media (max-width: 1279px) {
//           .sgw-card-shell {
//             clip-path: none;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sgw-service-reveal {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       {/* BACKGROUND DETAILS */}
//       <div
//         aria-hidden="true"
//         className="sgw-purple-dots pointer-events-none absolute right-2 top-7 h-36 w-36 opacity-40"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-60 bottom-[-280px] h-[520px] w-[520px] rounded-full border-[92px] border-[#6254B4]/[0.035]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-[25%] top-[-250px] h-[500px] w-[500px] rounded-full bg-[#6254B4]/[0.06] blur-[150px]"
//       />

//       <div className="relative z-10 mx-auto max-w-[1580px] px-5 sm:px-7 lg:px-8 xl:px-10">
//         {/* TOP INFORMATION ROW */}
//         <div className="sgw-service-reveal mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:mb-12">
//           <div className="flex items-center gap-3">
//             <img
//               src="/images/superguard-logo.webp"
//               alt="SuperGuard Services Westminster logo"
//               className="h-[50px] w-[68px] object-contain"
//               loading="lazy"
//             />

//             <div className="hidden sm:block">
//               <span className="block text-[14px] font-black uppercase leading-none tracking-[-0.02em] text-[#493794]">
//                 Super Guard
//               </span>

//               <span className="mt-2 block text-[7px] font-black uppercase tracking-[0.2em] text-[#181425]/70">
//                 Pest Control
//               </span>
//             </div>
//           </div>

//           <div className="flex flex-col gap-3 text-[13px] font-bold text-[#211D2B] sm:flex-row sm:items-center sm:gap-8 lg:gap-12">
//             <div className="flex items-center gap-3">
//               <MapPin
//                 size={18}
//                 strokeWidth={2.8}
//                 className="shrink-0 text-[#4E3B98]"
//               />

//               <span>{LOCAL.fullAddress}</span>
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="flex items-center gap-3 transition-colors duration-300 hover:text-[#6254B4]"
//             >
//               <Phone
//                 size={18}
//                 strokeWidth={2.8}
//                 className="shrink-0 text-[#4E3B98]"
//               />

//               <span>{LOCAL.phoneDisplay}</span>
//             </a>
//           </div>
//         </div>

//         {/* MAIN LAYOUT */}
//         <div className="grid gap-12 xl:grid-cols-[370px_minmax(0,1fr)] xl:gap-10 2xl:grid-cols-[400px_minmax(0,1fr)] 2xl:gap-12">
//           {/* LEFT CONTENT */}
//           <div className="sgw-service-reveal sgw-delay-1">
//             <span className="block text-[10px] font-black uppercase tracking-[0.28em] text-[#4E3B98]">
//               Our Services
//             </span>

//             <div className="mt-3 h-[2px] w-11 bg-[#6254B4]" />

//             <h2
//               id="services-heading"
//               className="mt-5 max-w-[390px] text-[45px] font-black leading-[0.94] tracking-[-0.055em] text-[#131019] sm:text-[56px] xl:text-[57px] 2xl:text-[62px]"
//             >
//               Expert Pest Control
//               <span className="mt-1 block text-[#57439F]">
//                 Services in Westminster
//               </span>
//             </h2>

//             <div className="mt-7 h-[2px] w-12 bg-[#6254B4]" />

//             <p className="mb-0 mt-7 max-w-[350px] text-[15px] font-medium leading-[1.75] text-[#5D5865]">
//               Every property is different. Our local team inspects,
//               identifies and creates the right treatment plan for
//               long-term protection.
//             </p>

//             {/* BENEFITS */}
//             <div className="mt-9 space-y-7">
//               {benefits.map((benefit) => {
//                 const Icon = benefit.icon;

//                 return (
//                   <div
//                     key={benefit.title}
//                     className="group flex items-start gap-4"
//                   >
//                     <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#57439F] text-white shadow-[0_12px_26px_rgba(87,67,159,0.2)] transition-transform duration-300 group-hover:-translate-y-1">
//                       <Icon size={24} strokeWidth={2.2} />
//                     </span>

//                     <div className="pt-0.5">
//                       <h3 className="text-[15px] font-black leading-5 text-[#17131D]">
//                         {benefit.title}
//                       </h3>

//                       <p className="mb-0 mt-1 max-w-[270px] text-[13px] font-medium leading-[1.45] text-[#615C68]">
//                         {benefit.description}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <button
//               type="button"
//               onClick={() => navigate("/services")}
//               className="group mt-8 flex min-h-[52px] w-full max-w-[255px] items-center justify-between bg-[#1A1621] px-5 text-[9px] font-black uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#57439F]"
//             >
//               View All Services

//               <ArrowRight
//                 size={22}
//                 strokeWidth={1.7}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>

//             {/* LIGHT WESTMINSTER SEAL */}
//             <div
//               aria-hidden="true"
//               className="relative mt-3 hidden h-32 xl:block"
//             >
//               <div className="absolute left-[64%] top-[-20px] flex h-[185px] w-[185px] -translate-x-1/2 items-center justify-center rounded-full border-[4px] border-[#6254B4]/[0.065]">
//                 <div className="flex h-[137px] w-[137px] items-center justify-center rounded-full border border-[#6254B4]/[0.08]">
//                   <span className="text-center text-[10px] font-black uppercase leading-5 tracking-[0.15em] text-[#6254B4]/[0.13]">
//                     Super Guard
//                     <br />
//                     Westminster
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* SERVICE CARDS */}
//           <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-4 2xl:gap-5">
//             {services.map((service, index) => {
//               const Icon = service.icon;
//               const colors = getTheme(service.theme);

//               return (
//                 <article
//                   key={service.title}
//                   className={`sgw-service-reveal sgw-card-shell group relative flex min-h-[760px] flex-col overflow-hidden bg-[#211D2B] shadow-[0_20px_55px_rgba(30,23,48,0.13)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_85px_rgba(30,23,48,0.22)] ${
//                     index === 0
//                       ? "sgw-delay-2"
//                       : index === 1
//                         ? "sgw-delay-3"
//                         : "sgw-delay-4"
//                   }`}
//                 >
//                   {/* SERVICE IMAGE */}
//                   <div className="sgw-image-shape relative h-[430px] shrink-0 overflow-hidden bg-[#211D2B]">
//                     <img
//                       src={service.image}
//                       alt={`${service.title} service in ${LOCAL.area}`}
//                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.065]"
//                       loading="lazy"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />

//                     {/* TOP ICON TAB */}
//                     <span
//                       className={`absolute right-4 top-4 flex h-[54px] w-[54px] items-center justify-center text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)] ${colors.icon}`}
//                     >
//                       <Icon size={25} strokeWidth={1.7} />
//                     </span>
//                   </div>

//                   {/* COLOURED CONTENT */}
//                   <div
//                     className={`relative -mt-[56px] flex flex-1 flex-col px-5 pt-[77px] text-white ${colors.body}`}
//                   >
//                     {/* ANGLED BRIDGE */}
//                     <div
//                       aria-hidden="true"
//                       className={`absolute inset-x-0 top-0 h-[68px] ${colors.body}`}
//                       style={{
//                         clipPath:
//                           "polygon(0 30%, 42% 30%, 48% 0, 100% 0, 100% 100%, 0 100%)",
//                       }}
//                     />

//                     <div className="relative z-10 grid grid-cols-[76px_minmax(0,1fr)] gap-5">
//                       {/* NUMBER COLUMN */}
//                       <div>
//                         <div className="flex h-[88px] items-center justify-center border border-white/35 bg-white/[0.025]">
//                           <span className="text-[48px] font-black leading-none tracking-[-0.07em]">
//                             {service.number}
//                           </span>
//                         </div>

//                         <div className="mt-5 grid w-[50px] grid-cols-4 gap-[7px]">
//                           {Array.from({ length: 16 }).map((_, dotIndex) => (
//                             <span
//                               key={`${service.number}-${dotIndex}`}
//                               className="h-[3px] w-[3px] rounded-full bg-white/75"
//                             />
//                           ))}
//                         </div>
//                       </div>

//                       {/* SERVICE INFORMATION */}
//                       <div>
//                         <h3 className="text-[29px] font-black leading-[0.98] tracking-[-0.04em] text-white">
//                           {service.title}
//                         </h3>

//                         <div className="mt-5 h-px w-12 bg-white/75" />

//                         <p className="mb-0 mt-5 text-[14px] font-medium leading-[1.7] text-white/90">
//                           {service.description}
//                         </p>
//                       </div>
//                     </div>

//                     {/* CARD BUTTON */}
//                     <button
//                       type="button"
//                       onClick={() => navigate(service.route)}
//                       className={`group/button relative z-10 -mx-5 mt-auto flex min-h-[68px] items-center justify-between border-t border-white/15 px-7 text-[10px] font-black uppercase tracking-[0.14em] text-white transition-colors duration-300 ${colors.button}`}
//                     >
//                       View Service

//                       <ArrowRight
//                         size={24}
//                         strokeWidth={1.7}
//                         className="transition-transform duration-300 group-hover/button:translate-x-1.5"
//                       />
//                     </button>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>

//         {/* BOTTOM HELP STRIP */}
//         <div className="sgw-service-reveal sgw-delay-4 mt-12 flex flex-col gap-5 border border-[#DDD8E7] bg-white/55 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-7">
//           <div className="flex items-center gap-4">
//             <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center border border-[#CFC9D8] bg-white text-[#18141F]">
//               <Smartphone size={22} strokeWidth={2} />
//             </span>

//             <div>
//               <h3 className="text-[14px] font-black leading-5 text-[#17131D]">
//                 Need Immediate Help?
//               </h3>

//               <p className="mb-0 mt-0.5 text-xs font-medium text-[#686270]">
//                 Speak with our Westminster team.
//               </p>
//             </div>
//           </div>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="group flex min-h-[48px] min-w-[230px] items-center justify-center gap-4 bg-[#57439F] px-6 text-[15px] font-black text-white transition-colors duration-300 hover:bg-[#1A1621]"
//           >
//             <Phone
//               size={18}
//               strokeWidth={2.3}
//               className="transition-transform duration-300 group-hover:rotate-6"
//             />

//             {LOCAL.phoneDisplay}
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }







// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Bug,
//   CheckCircle2,
//   MapPin,
//   Rat,
//   ShieldAlert,
// } from "lucide-react";

// export default function SuperGuardServicesSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//     area: "Holborn",
//     city: "London",
//     postcode: "WC2R 3JF",
//     streetAddress: "50 Essex Street",
//     fullAddress: "50 Essex Street, London, WC2R 3JF",
//   };

//   const services = [
//     {
//       number: "01",
//       title: "Rats & Mice Control",
//       icon: Rat,
//       image: "/images/rodents.webp",
//       label: "Rodent Control",
//       description:
//         "Rodents can move through kitchens, basements, lofts, wall gaps and storage areas. We inspect signs of activity, possible access points and property conditions before planning a suitable treatment.",
//       points: [
//         "Entry point inspection",
//         "Rodent activity assessment",
//         "Practical proofing guidance",
//       ],
//     },
//     {
//       number: "02",
//       title: "Bed Bug Treatment",
//       icon: Bug,
//       image: "/images/bedbugs.webp",
//       label: "Bed Bug Service",
//       description:
//         "Bed bugs commonly hide around mattress seams, bed frames, headboards and nearby furnishings. We inspect affected spaces and provide targeted treatment with clear preparation and aftercare guidance.",
//       points: [
//         "Affected room inspection",
//         "Targeted treatment planning",
//         "Preparation and aftercare advice",
//       ],
//     },
//     {
//       number: "03",
//       title: "Wasp Nest Control",
//       icon: ShieldAlert,
//       image: "/images/wasps.webp",
//       label: "Wasp Nest Support",
//       description:
//         "Wasp activity around roof edges, wall cavities, gardens and entrances can quickly become disruptive. We help identify the active nest area and select an appropriate treatment approach.",
//       points: [
//         "Nest activity assessment",
//         "Suitable treatment method",
//         "Clear safety guidance",
//       ],
//     },
//   ];

//   useEffect(() => {
//     const elements = document.querySelectorAll(
//       ".sg-holborn-service-animate"
//     );

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((element) => {
//         element.classList.add("sg-holborn-service-show");
//       });

//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("sg-holborn-service-show");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.14,
//         rootMargin: "0px 0px -60px 0px",
//       }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   const featuredService = services[0];
//   const secondaryServices = services.slice(1);
//   const FeaturedIcon = featuredService.icon;

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       aria-labelledby="services-heading"
//       className="relative overflow-hidden bg-[#F7F5FC] py-20 font-sans sm:py-24 lg:py-28"
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
//         .sg-holborn-service-animate {
//           opacity: 0;
//           transform: translateY(30px);
//           transition:
//             opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sg-holborn-service-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sg-holborn-service-delay-1 {
//           transition-delay: 100ms;
//         }

//         .sg-holborn-service-delay-2 {
//           transition-delay: 190ms;
//         }

//         .sg-holborn-service-delay-3 {
//           transition-delay: 280ms;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-holborn-service-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       {/* BACKGROUND DECORATION */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-[-220px] top-[-180px] h-[540px] w-[540px] rounded-full bg-[#6157A7]/12 blur-[120px]" />

//         <div className="absolute bottom-[-240px] right-[-180px] h-[620px] w-[620px] rounded-full bg-[#6157A7]/10 blur-[150px]" />

//         <div
//           className="absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(97,87,167,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(97,87,167,0.2) 1px, transparent 1px)",
//             backgroundSize: "78px 78px",
//           }}
//         />

//         <div className="absolute right-0 top-0 h-[440px] w-[32%] bg-[#6157A7]/[0.035]" />
//       </div>

//       {/* BACKGROUND WORD */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 select-none whitespace-nowrap text-[85px] font-black uppercase leading-none tracking-[-0.08em] text-[#6157A7]/[0.035] sm:text-[145px] lg:text-[220px]"
//       >
//         Services
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14">
//         {/* TOP INFORMATION LINE */}
//         <div className="sg-holborn-service-animate flex flex-col items-center gap-4 border-b border-[#6157A7]/15 pb-6 text-center sm:flex-row sm:justify-between sm:text-left">
//           <div className="flex items-center gap-3">
//             <span className="h-2 w-2 rounded-full bg-[#6157A7] shadow-[0_0_16px_rgba(97,87,167,0.55)]" />

//             <span className="text-[9px] font-black uppercase tracking-[0.24em] text-[#6157A7] sm:text-[10px]">
//               SuperGuard Holborn Services
//             </span>
//           </div>

//           <div className="flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.14em] text-slate-500 sm:text-[10px] sm:tracking-[0.17em]">
//             <MapPin
//               size={15}
//               strokeWidth={2.4}
//               className="shrink-0 text-[#6157A7]"
//             />

//             {LOCAL.fullAddress}
//           </div>
//         </div>

//         {/* SECTION HEADING */}
//         <div className="sg-holborn-service-animate sg-holborn-service-delay-1 mt-14 grid gap-7 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
//           <div>
//             <div className="flex items-center gap-4">
//               <span className="h-px w-12 bg-[#6157A7]/55 sm:w-16" />

//               <span className="text-[9px] font-black uppercase tracking-[0.27em] text-[#6157A7] sm:text-[10px]">
//                 Specialist Pest Treatments
//               </span>
//             </div>

//             <h2
//               id="services-heading"
//               className="mt-6 max-w-[950px] text-[43px] font-black leading-[0.94] tracking-[-0.052em] text-[#171327] sm:text-[58px] md:text-[70px] lg:text-[78px]"
//             >
//               Pest Control For
//               <span className="block text-[#6157A7]">
//                 Holborn Properties.
//               </span>
//             </h2>
//           </div>

//           <div className="lg:pb-2">
//             <p className="max-w-xl text-sm font-medium leading-7 text-slate-600 sm:text-base sm:leading-8">
//               Inspection-led pest control for homes, flats, landlords, offices
//               and commercial properties across Holborn and Central London.
//             </p>

//             <button
//               type="button"
//               onClick={() => navigate("/services")}
//               className="group mt-6 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#171327]"
//             >
//               Explore All Services

//               <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6157A7] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#171327]">
//                 <ArrowRight size={17} strokeWidth={2.6} />
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* FEATURED SERVICE */}
//         <article className="sg-holborn-service-animate sg-holborn-service-delay-2 relative mt-14 overflow-hidden rounded-[34px] bg-[#171327] shadow-[0_30px_90px_rgba(23,19,39,0.16)] lg:mt-16">
//           <div className="grid lg:min-h-[610px] lg:grid-cols-[1.08fr_0.92fr]">
//             <div className="relative min-h-[430px] overflow-hidden sm:min-h-[520px] lg:min-h-full">
//               <img
//                 src={featuredService.image}
//                 alt={`${featuredService.title} service in ${LOCAL.area}`}
//                 className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
//                 loading="lazy"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#171327]/80 via-transparent to-[#171327]/15 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#171327]/50" />

//               <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full bg-white px-4 py-3 sm:left-7 sm:top-7">
//                 <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#6157A7]">
//                   {featuredService.number}
//                 </span>

//                 <span className="h-4 w-px bg-[#6157A7]/25" />

//                 <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#171327]">
//                   {featuredService.label}
//                 </span>
//               </div>

//               <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#6157A7] text-white shadow-[0_18px_50px_rgba(23,19,39,0.25)] sm:bottom-8 sm:left-8 sm:h-20 sm:w-20">
//                 <FeaturedIcon size={32} strokeWidth={2.2} />
//               </div>
//             </div>

//             <div className="relative flex flex-col justify-center overflow-hidden px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-16">
//               <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border-[48px] border-white/[0.035]" />

//               <div className="pointer-events-none absolute bottom-[-100px] left-[-90px] h-64 w-64 rounded-full bg-[#6157A7]/25 blur-[100px]" />

//               <div className="relative z-10">
//                 <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#BDB6FF]">
//                   Featured Holborn Service
//                 </span>

//                 <h3 className="mt-4 max-w-lg text-4xl font-black leading-[0.96] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
//                   {featuredService.title}
//                 </h3>

//                 <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-white/70 sm:text-base sm:leading-8">
//                   {featuredService.description}
//                 </p>

//                 <div className="mt-8 grid gap-4">
//                   {featuredService.points.map((point) => (
//                     <div
//                       key={point}
//                       className="flex items-center gap-4 border-b border-white/10 pb-4"
//                     >
//                       <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6157A7] text-white">
//                         <CheckCircle2 size={17} strokeWidth={2.7} />
//                       </span>

//                       <span className="text-sm font-black text-white">
//                         {point}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => navigate("/contact-us")}
//                   className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#6157A7] px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6157A7]"
//                 >
//                   Request This Service

//                   <ArrowRight
//                     size={17}
//                     strokeWidth={2.5}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </article>

//         {/* SECONDARY SERVICES */}
//         <div className="mt-7 grid gap-7 lg:grid-cols-2">
//           {secondaryServices.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <article
//                 key={service.title}
//                 className={`sg-holborn-service-animate sg-holborn-service-delay-${
//                   index + 2
//                 } group relative min-h-[570px] overflow-hidden rounded-[30px] bg-[#171327] shadow-[0_28px_75px_rgba(23,19,39,0.14)]`}
//               >
//                 <img
//                   src={service.image}
//                   alt={`${service.title} service in ${LOCAL.area}`}
//                   className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-105"
//                   loading="lazy"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#171327] via-[#171327]/76 to-[#171327]/10" />

//                 <div className="absolute inset-0 bg-[#6157A7]/10 mix-blend-multiply" />

//                 <div className="relative z-10 flex min-h-[570px] flex-col justify-between p-6 sm:p-8 lg:p-10">
//                   <div className="flex items-start justify-between gap-5">
//                     <div className="rounded-2xl bg-white px-4 py-3">
//                       <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#6157A7]">
//                         {service.number}
//                       </span>

//                       <span className="mt-1 block text-xs font-black text-[#171327]">
//                         {service.label}
//                       </span>
//                     </div>

//                     <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#6157A7]">
//                       <Icon size={29} strokeWidth={2.2} />
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="max-w-lg text-4xl font-black leading-[0.96] tracking-[-0.045em] text-white sm:text-5xl">
//                       {service.title}
//                     </h3>

//                     <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-white/70">
//                       {service.description}
//                     </p>

//                     <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
//                       {service.points.map((point) => (
//                         <div key={point} className="flex items-center gap-2">
//                           <CheckCircle2
//                             size={17}
//                             strokeWidth={2.6}
//                             className="shrink-0 text-[#C6C0FF]"
//                           />

//                           <span className="text-xs font-black text-white">
//                             {point}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     <button
//                       type="button"
//                       onClick={() => navigate("/contact-us")}
//                       className="group/button mt-8 inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.18em] text-white"
//                     >
//                       Request Treatment

//                       <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6157A7] text-white transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:bg-white group-hover/button:text-[#6157A7]">
//                         <ArrowRight size={17} strokeWidth={2.6} />
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         {/* OTHER SERVICES PANEL */}
//         <div className="sg-holborn-service-animate sg-holborn-service-delay-3 relative mt-8 overflow-hidden rounded-[28px] bg-[#6157A7] px-6 py-8 text-white sm:px-8 lg:px-10 lg:py-10">
//           <div className="pointer-events-none absolute -right-14 -top-20 h-56 w-56 rounded-full border-[38px] border-white/[0.06]" />

//           <div className="pointer-events-none absolute bottom-[-160px] left-[35%] h-72 w-72 rounded-full bg-white/10 blur-[100px]" />

//           <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
//             <div>
//               <span className="text-[9px] font-black uppercase tracking-[0.24em] text-white/65">
//                 More Pest Control Services
//               </span>

//               <h3 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-4xl">
//                 Ants, fleas, cockroaches, moths, carpet beetles, squirrels,
//                 birds and more.
//               </h3>

//               <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-white/70">
//                 Explore our wider range of residential and commercial pest
//                 control services available throughout Holborn and Central
//                 London.
//               </p>
//             </div>

//             <button
//               type="button"
//               onClick={() => navigate("/services")}
//               className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-[#6157A7] transition-all duration-300 hover:-translate-y-1 hover:bg-[#171327] hover:text-white"
//             >
//               View All Services

//               <ArrowRight
//                 size={17}
//                 strokeWidth={2.6}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>
//           </div>
//         </div>

//         {/* BOTTOM LOCATION LINE */}
//         <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-[#6157A7]/15 pt-7 text-center sm:flex-row sm:justify-between sm:text-left">
//           <div className="flex items-center gap-3">
//             <MapPin
//               size={16}
//               strokeWidth={2.4}
//               className="text-[#6157A7]"
//             />

//             <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#171327]">
//               Based at {LOCAL.fullAddress}
//             </span>
//           </div>

//           <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
//             Residential • Commercial • Inspection • Treatment
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }








// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Bug,
//   Rat,
//   ShieldAlert,
//   PhoneCall,
//   MapPin,
//   CheckCircle,
// } from "lucide-react";

// export default function SuperGuardServicesSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     businessName: "SuperGuard Walworth",
//     baseAddress: "36 Sutherland Square, London SE17 3EE",
//     phone: "07466 565503",
//     phoneTel: "+447466565503",
//   };

//   const services = [
//     {
//       title: "Rats & Mice Control",
//       icon: Rat,
//       image: "/images/rodents.webp",
//       label: "Rodent Control",
//       desc: "Rodents can move through kitchens, basements, lofts, wall gaps and storage areas. We inspect activity signs, access routes and proofing risks before planning treatment.",
//       points: ["Entry point checks", "Activity inspection", "Proofing guidance"],
//     },
//     {
//       title: "Bed Bug Treatment",
//       icon: Bug,
//       image: "/images/bedbugs.webp",
//       label: "Bed Bug Service",
//       desc: "Bed bugs hide in mattress seams, bed frames, headboards and soft furnishings. Our Walworth team checks affected rooms and provides targeted treatment with clear aftercare.",
//       points: ["Room inspection", "Targeted treatment", "Aftercare advice"],
//     },
//     {
//       title: "Wasp Nest Control",
//       icon: ShieldAlert,
//       image: "/images/wasps.webp",
//       label: "Wasp Nest Help",
//       desc: "Wasps around roof edges, wall voids, gardens and entrances can become risky quickly. We help locate active nest areas and arrange suitable treatment.",
//       points: ["Nest activity check", "Safe method", "Clear next steps"],
//     },
//   ];

//   useEffect(() => {
//     const items = document.querySelectorAll(".sg-service-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("sg-service-show");
//         });
//       },
//       { threshold: 0.16 }
//     );

//     items.forEach((item) => observer.observe(item));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#F8F6FF] py-24 lg:py-32">
//       <style>{`
//         .sg-service-animate {
//           opacity: 0;
//           transform: translateY(28px);
//           transition:
//             opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sg-service-show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sg-delay-1 { transition-delay: 120ms; }
//         .sg-delay-2 { transition-delay: 220ms; }
//         .sg-delay-3 { transition-delay: 320ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-service-animate {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute left-0 top-0 h-[54%] w-full bg-[#5F52B5]" />
//         <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-white/18 blur-3xl" />
//         <div className="absolute right-[-150px] top-28 h-[480px] w-[480px] rounded-full bg-[#17122F]/20 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         {/* HEADER */}
//         <div className="sg-service-animate grid gap-8 lg:grid-cols-12 lg:items-end">
//           <div className="lg:col-span-8">
//             <span className="inline-flex bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#5F52B5] shadow-xl">
//               SuperGuard Services • {LOCAL.area} {LOCAL.postcode}
//             </span>

//             <h2 className="mt-7 max-w-5xl text-4xl font-black leading-[0.94] tracking-tight text-white sm:text-5xl lg:text-7xl">
//               Pest Control Services For Walworth Homes & Businesses.
//             </h2>
//           </div>

//           <p className="lg:col-span-4 text-base font-medium leading-relaxed text-white/82">
//             Inspection-led treatments for rodents, bed bugs, wasps and other
//             pest issues across SE17 properties.
//           </p>
//         </div>

//         {/* SERVICE SPOTLIGHT DECK */}
//         <div className="mt-16 grid gap-6 lg:grid-cols-12">
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <article
//                 key={service.title}
//                 className={`sg-service-animate sg-delay-${
//                   index + 1
//                 } group lg:col-span-4`}
//               >
//                 <div className="relative h-full min-h-[560px] overflow-hidden bg-white shadow-2xl shadow-[#17122F]/12">
//                   {/* IMAGE TOP */}
//                   <div className="relative h-[300px] overflow-hidden">
//                     <img
//                       src={service.image}
//                       alt={`${service.title} in ${LOCAL.area}`}
//                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                       loading="lazy"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#17122F]/70 via-transparent to-transparent" />

//                     <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center bg-white text-[#5F52B5] shadow-xl">
//                       <Icon className="h-7 w-7" strokeWidth={2.4} />
//                     </div>

//                     <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
//                       <span className="bg-[#5F52B5] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white">
//                         0{index + 1} • {service.label}
//                       </span>
//                     </div>
//                   </div>

//                   {/* CONTENT */}
//                   <div className="relative p-7">
//                     <h3 className="text-3xl font-black leading-tight text-[#17122F]">
//                       {service.title}
//                     </h3>

//                     <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-600">
//                       {service.desc}
//                     </p>

//                     <div className="mt-6 grid gap-3">
//                       {service.points.map((point) => (
//                         <div
//                           key={point}
//                           className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-b-0"
//                         >
//                           <CheckCircle className="h-5 w-5 shrink-0 text-[#5F52B5]" />
//                           <span className="text-sm font-black text-[#17122F]">
//                             {point}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="mt-7 flex gap-3">
//                       <button
//                         onClick={() => navigate("/contact-us")}
//                         className="flex-1 bg-[#5F52B5] px-5 py-4 text-xs font-black uppercase tracking-[0.14em] text-white transition-all hover:bg-[#17122F]"
//                       >
//                         Request
//                       </button>

//                       <a
//                         href={`tel:${LOCAL.phoneTel}`}
//                         className="flex h-[48px] w-[54px] items-center justify-center bg-[#17122F] text-white transition-all hover:bg-[#5F52B5]"
//                       >
//                         <PhoneCall className="h-5 w-5" />
//                       </a>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-0 left-0 h-1 w-full bg-[#5F52B5] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         {/* BOTTOM PREMIUM CTA */}
//         <div className="sg-service-animate sg-delay-3 mt-10 overflow-hidden bg-[#17122F] shadow-2xl shadow-[#17122F]/20">
//           <div className="grid lg:grid-cols-[1fr_0.85fr]">
//             <div className="p-7 md:p-9">
//               <div className="flex items-start gap-4">
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#5F52B5] text-white">
//                   <MapPin className="h-6 w-6" />
//                 </div>

//                 <div>
//                   <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#AFA6FF]">
//                     Local Walworth Service Base
//                   </span>

//                   <h3 className="mt-2 text-2xl font-black text-white">
//                     Based near {LOCAL.baseAddress}
//                   </h3>

//                   <p className="mt-3 text-sm font-medium leading-relaxed text-white/65">
//                     Covering Walworth, Elephant & Castle, Kennington, Camberwell
//                     and nearby SE17 areas.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-7 md:p-9">
//               <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
//                 More Pest Services
//               </span>

//               <h3 className="mt-2 text-3xl font-black leading-tight text-[#17122F]">
//                 Ants, fleas, moths, cockroaches and more.
//               </h3>

//               <button
//                 onClick={() => navigate("/services")}
//                 className="mt-6 inline-flex items-center gap-2 bg-[#5F52B5] px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition-all hover:bg-[#17122F]"
//               >
//                 View All Services
//                 <ArrowRight className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

















// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowUpRight,
//   BadgeCheck,
//   Building2,
//   CheckCircle2,
//   MapPin,
//   Phone,
//   Rat,
//   Search,
//   ShieldCheck,
//   Bug,
// } from "lucide-react";

// export default function SuperGuardServicesSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     fullAddress: "49 Shroton St, London NW1 6UB, United Kingdom",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//   };

//   const benefits = [
//     {
//       number: "01",
//       title: "Local Knowledge",
//       description:
//         "A Marylebone-focused service with practical knowledge of local residential and commercial properties.",
//       icon: MapPin,
//     },
//     {
//       number: "02",
//       title: "Detailed Inspection",
//       description:
//         "We look beyond visible activity to understand where pests are entering, hiding and spreading.",
//       icon: Search,
//     },
//     {
//       number: "03",
//       title: "Targeted Treatment",
//       description:
//         "Professional pest control methods selected around the property, pest type and level of activity.",
//       icon: ShieldCheck,
//     },
//   ];

//   const services = [
//     {
//       number: "01",
//       title: "Rats & Mice Control",
//       category: "RODENT CONTROL",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       description:
//         "Professional inspection and treatment for rats and mice in homes, flats, lofts, basements and commercial premises.",
//     },
//     {
//       number: "02",
//       title: "Bed Bug Treatment",
//       category: "BED BUG CONTROL",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       description:
//         "Targeted bed bug treatment for bedrooms and affected areas, supported by practical preparation and aftercare guidance.",
//     },
//     {
//       number: "03",
//       title: "Wasp Nest Control",
//       category: "WASP CONTROL",
//       image: "/images/wasps.webp",
//       icon: ShieldCheck,
//       description:
//         "Professional wasp nest treatment for nests around roofs, walls, gardens and other areas surrounding your property.",
//     },
//   ];

//   useEffect(() => {
//     const items = document.querySelectorAll(".sgm-reveal");

//     if (!("IntersectionObserver" in window)) {
//       items.forEach((item) => {
//         item.classList.add("sgm-visible");
//       });

//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) return;

//           entry.target.classList.add("sgm-visible");
//           observer.unobserve(entry.target);
//         });
//       },
//       {
//         threshold: 0.12,
//         rootMargin: "0px 0px -50px 0px",
//       }
//     );

//     items.forEach((item) => observer.observe(item));

//     return () => observer.disconnect();
//   }, []);

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   const handleServiceKeyDown = (event) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();
//       navigate("/contact-us");
//     }
//   };

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       aria-labelledby="marylebone-services-heading"
//       className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
//     >
//       {/* =====================================================
//           SEO META
//       ====================================================== */}

//       <meta itemProp="name" content={LOCAL.company} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, ${LOCAL.city}`}
//       />

//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />

//       <meta itemProp="address" content={LOCAL.fullAddress} />

//       {/* =====================================================
//           CUSTOM ANIMATIONS
//       ====================================================== */}

//       <style>{`
//         .sgm-reveal {
//           opacity: 0;
//           transform: translateY(32px);
//           transition:
//             opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgm-visible {
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

//         .sgm-service-image {
//           transform: scale(1);
//           transition:
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             filter 500ms ease;
//         }

//         .sgm-service-card:hover .sgm-service-image {
//           transform: scale(1.065);
//           filter: saturate(1.08);
//         }

//         .sgm-service-card:focus-visible {
//           outline: 3px solid rgba(96, 85, 166, 0.35);
//           outline-offset: 5px;
//         }

//         .sgm-arrow {
//           transition:
//             transform 350ms cubic-bezier(0.16, 1, 0.3, 1),
//             background-color 350ms ease;
//         }

//         .sgm-service-card:hover .sgm-arrow {
//           transform: translate(4px, -4px);
//         }

//         .sgm-line {
//           transform-origin: left center;
//           transform: scaleX(0.35);
//           transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgm-service-card:hover .sgm-line {
//           transform: scaleX(1);
//         }

//         .sgm-service-number {
//           transition:
//             color 500ms ease,
//             transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgm-service-card:hover .sgm-service-number {
//           color: rgba(96, 85, 166, 0.14);
//           transform: translateY(-5px);
//         }

//         .sgm-purple-edge {
//           width: 0;
//           transition: width 500ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgm-service-card:hover .sgm-purple-edge {
//           width: 100%;
//         }

//         .sgm-icon-box {
//           transition:
//             background-color 350ms ease,
//             color 350ms ease,
//             border-color 350ms ease,
//             transform 350ms ease;
//         }

//         .sgm-service-card:hover .sgm-icon-box {
//           background-color: #6055A6;
//           color: white;
//           border-color: #6055A6;
//           transform: rotate(5deg);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sgm-reveal {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }

//           .sgm-service-image,
//           .sgm-arrow,
//           .sgm-line,
//           .sgm-service-number,
//           .sgm-purple-edge,
//           .sgm-icon-box {
//             transition: none;
//           }
//         }
//       `}</style>

//       {/* =====================================================
//           BACKGROUND DETAILS
//       ====================================================== */}

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-[-100px] top-[-100px] h-[360px] w-[360px] rounded-full border-[70px] border-[#6055A6]/[0.045]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-[420px] w-[420px] rounded-full border-[80px] border-[#6055A6]/[0.04]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-[24%] top-[35%] h-[420px] w-[420px] rounded-full bg-[#6055A6]/[0.025] blur-[120px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-[7%] top-[27%] h-2 w-2 rounded-full bg-[#6055A6]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-[4%] top-[53%] h-1.5 w-1.5 rounded-full bg-[#6055A6]"
//       />

//       {/* =====================================================
//           MAIN CONTAINER
//       ====================================================== */}

//       <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10">

//         {/* =====================================================
//             TOP HEADER
//         ====================================================== */}

//         <div className="sgm-reveal grid gap-8 border-y border-black/10 py-6 lg:grid-cols-[1fr_auto] lg:items-center">

//           <div className="flex items-center gap-4">

//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white shadow-[0_12px_30px_rgba(96,85,166,0.18)]">
//               <ShieldCheck
//                 size={22}
//                 strokeWidth={2.2}
//               />
//             </div>

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 Professional Pest Control
//               </span>

//               <span className="mt-1 block text-sm font-black tracking-[-0.02em] text-[#111111]">
//                 {LOCAL.company}
//               </span>
//             </div>

//           </div>

//           <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[9px] font-black uppercase tracking-[0.14em] text-black/55">

//             <span className="flex items-center gap-2">
//               <MapPin
//                 size={15}
//                 strokeWidth={2.4}
//                 className="text-[#6055A6]"
//               />

//               {LOCAL.area}, {LOCAL.city}
//             </span>

//             <span className="hidden h-1 w-1 rounded-full bg-[#6055A6] sm:block" />

//             <span>
//               {LOCAL.postcode}
//             </span>

//           </div>

//         </div>

//         {/* =====================================================
//             HERO / INTRO
//         ====================================================== */}

//         <div className="sgm-reveal mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">

//           <div>

//             <div className="flex items-center gap-3">

//               <span className="text-[9px] font-black uppercase tracking-[0.32em] text-[#6055A6]">
//                 Marylebone Pest Control
//               </span>

//               <span className="h-px w-16 bg-[#6055A6]" />

//             </div>

//             <h2
//               id="marylebone-services-heading"
//               className="mt-6 max-w-[900px] text-[48px] font-black leading-[0.9] tracking-[-0.065em] text-[#111111] sm:text-[66px] lg:text-[82px]"
//             >
//               Professional control.

//               <span className="block text-[#6055A6]">
//                 Local to Marylebone.
//               </span>
//             </h2>

//           </div>

//           <div className="lg:pb-2">

//             <p className="max-w-[520px] text-[15px] font-medium leading-[1.8] text-black/55 sm:text-base">
//               {LOCAL.company} provides professional pest control
//               services for homes, flats, landlords, offices and
//               commercial properties across {LOCAL.area} and nearby
//               areas of Central London.
//             </p>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="mt-6 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#6055A6] transition-all duration-300 hover:gap-5"
//             >
//               <Phone
//                 size={16}
//                 strokeWidth={2.5}
//               />

//               Speak with our team

//               <ArrowUpRight
//                 size={16}
//                 strokeWidth={2.5}
//               />
//             </a>

//           </div>

//         </div>

//         {/* =====================================================
//             MAIN SERVICES AREA
//             PREMIUM EDITORIAL SERVICES
//         ====================================================== */}

//         <div className="mt-14 lg:mt-20">

//           {/* ===================================================
//               SECTION HEADER
//           ==================================================== */}

//           <div className="sgm-reveal mb-8 flex flex-col gap-5 border-b border-black/10 pb-5 sm:flex-row sm:items-end sm:justify-between">

//             <div>

//               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 Our Core Services
//               </span>

//               <h3 className="mt-2 text-3xl font-black tracking-[-0.045em] text-[#111111] sm:text-4xl">
//                 Pest problems.
//                 <span className="text-[#6055A6]">
//                   {" "}
//                   Clear action.
//                 </span>
//               </h3>

//             </div>

//             <div className="flex items-center gap-3">

//               <span className="h-px w-8 bg-[#6055A6]" />

//               <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/35">
//                 03 Featured Services
//               </span>

//             </div>

//           </div>

//           {/* ===================================================
//               SERVICE CARDS
//           ==================================================== */}

//           <div className="space-y-6">

//             {services.map((service, index) => {

//               const Icon = service.icon;
//               const isReversed = index % 2 === 1;

//               return (
//                 <article
//                   key={service.title}
//                   role="button"
//                   tabIndex={0}
//                   aria-label={`Contact us about ${service.title}`}
//                   onClick={goToContact}
//                   onKeyDown={handleServiceKeyDown}
//                   className={`sgm-reveal sgm-service-card group relative cursor-pointer overflow-hidden border border-black/10 bg-white transition-all duration-500 hover:border-[#6055A6]/50 hover:shadow-[0_30px_80px_rgba(96,85,166,0.13)] ${
//                     index === 0
//                       ? "sgm-delay-1"
//                       : index === 1
//                         ? "sgm-delay-2"
//                         : "sgm-delay-3"
//                   }`}
//                 >

//                   <div
//                     className={`grid lg:min-h-[390px] lg:grid-cols-2 ${
//                       isReversed
//                         ? "lg:[&>*:first-child]:order-2"
//                         : ""
//                     }`}
//                   >

//                     {/* =================================================
//                         IMAGE SIDE
//                     ================================================== */}

//                     <div className="relative min-h-[300px] overflow-hidden bg-[#6055A6] sm:min-h-[360px] lg:min-h-full">

//                       <img
//                         src={service.image}
//                         alt={`${service.title} in ${LOCAL.area}`}
//                         className="sgm-service-image h-full w-full object-cover"
//                         loading="lazy"
//                       />

//                       {/* IMAGE OVERLAY */}

//                       <div className="absolute inset-0 bg-[#6055A6]/0 transition-all duration-500 group-hover:bg-[#6055A6]/25" />

//                       {/* DARK BOTTOM GRADIENT */}

//                       <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent" />

//                       {/* TOP LABEL */}

//                       <div className="absolute left-5 top-5 flex items-center gap-2">

//                         <span className="flex h-10 w-10 items-center justify-center bg-[#6055A6] text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
//                           <Icon
//                             size={19}
//                             strokeWidth={2}
//                           />
//                         </span>

//                         <span className="bg-white px-3 py-2 text-[8px] font-black uppercase tracking-[0.2em] text-[#111111]">
//                           {service.category}
//                         </span>

//                       </div>

//                       {/* LARGE NUMBER */}

//                       <div className="absolute bottom-4 right-6">

//                         <span className="sgm-service-number text-[90px] font-black leading-none tracking-[-0.1em] text-white/25">
//                           {service.number}
//                         </span>

//                       </div>

//                       {/* IMAGE CORNER LABEL */}

//                       <div className="absolute bottom-5 left-5">

//                         <span className="flex items-center gap-2 bg-white px-4 py-2 text-[8px] font-black uppercase tracking-[0.18em] text-[#6055A6]">

//                           <span className="h-1.5 w-1.5 rounded-full bg-[#6055A6]" />

//                           Marylebone Service

//                         </span>

//                       </div>

//                     </div>

//                     {/* =================================================
//                         CONTENT SIDE
//                     ================================================== */}

//                     <div className="relative flex flex-col justify-between p-7 sm:p-9 lg:p-11">

//                       {/* SMALL TOP LINE */}

//                       <div className="flex items-center justify-between">

//                         <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#6055A6]">
//                           Service {service.number}
//                         </span>

//                         <span className="text-[8px] font-black uppercase tracking-[0.18em] text-black/25">
//                           Pest Control
//                         </span>

//                       </div>

//                       {/* MAIN CONTENT */}

//                       <div className="mt-10 lg:mt-0">

//                         <div className="flex items-start justify-between gap-6">

//                           <div>

//                             <h3 className="max-w-[520px] text-[34px] font-black leading-[0.92] tracking-[-0.055em] text-[#111111] sm:text-[44px] lg:text-[48px]">
//                               {service.title}
//                             </h3>

//                             <div className="mt-6 flex items-center gap-3">

//                               <span className="sgm-line h-[2px] w-12 bg-[#6055A6]" />

//                               <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/30">
//                                 Professional Treatment
//                               </span>

//                             </div>

//                           </div>

//                           {/* FLOATING ICON */}

//                           <span className="sgm-icon-box hidden h-14 w-14 shrink-0 items-center justify-center border border-[#6055A6]/20 text-[#6055A6] sm:flex">

//                             <Icon
//                               size={22}
//                               strokeWidth={1.8}
//                             />

//                           </span>

//                         </div>

//                         <p className="mt-7 max-w-[600px] text-sm font-medium leading-[1.85] text-black/55 sm:text-[15px]">
//                           {service.description}
//                         </p>

//                       </div>

//                       {/* =================================================
//                           BOTTOM ACTION
//                       ================================================== */}

//                       <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-5">

//                         <div>

//                           <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-black/30">
//                             Service Location
//                           </span>

//                           <span className="mt-1 block text-xs font-black uppercase tracking-[0.05em] text-[#111111]">
//                             {LOCAL.area}, {LOCAL.city}
//                           </span>

//                         </div>

//                         {/* CLICK ACTION */}

//                         <div className="flex items-center gap-3">

//                           <span className="hidden text-[8px] font-black uppercase tracking-[0.18em] text-[#6055A6] sm:block">
//                             Discuss Service
//                           </span>

//                           <span className="sgm-arrow flex h-12 w-12 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                             <ArrowUpRight
//                               size={20}
//                               strokeWidth={2.2}
//                             />
//                           </span>

//                         </div>

//                       </div>

//                       {/* SUBTLE PURPLE EDGE */}

//                       <div className="sgm-purple-edge absolute bottom-0 left-0 h-1 bg-[#6055A6]" />

//                     </div>

//                   </div>

//                 </article>
//               );
//             })}

//           </div>

//           {/* ===================================================
//               SMALL SERVICE NOTE
//           ==================================================== */}

//           <div className="mt-7 flex flex-col gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

//             <div className="flex items-center gap-3">

//               <CheckCircle2
//                 size={17}
//                 strokeWidth={2.4}
//                 className="shrink-0 text-[#6055A6]"
//               />

//               <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#111111]">
//                 Residential & Commercial Pest Control
//               </span>

//             </div>

//             <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-black/35">
//               Click any service to contact our Marylebone team
//             </span>

//           </div>

//         </div>

//         {/* =====================================================
//             WHY CHOOSE US
//         ====================================================== */}

//         <div className="sgm-reveal sgm-delay-2 mt-16 border-y border-black/10 py-10 lg:mt-20 lg:py-14">

//           <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16">

//             {/* TITLE */}

//             <div>

//               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 Why Choose Us
//               </span>

//               <h3 className="mt-4 max-w-[430px] text-3xl font-black leading-[0.95] tracking-[-0.05em] text-[#111111] sm:text-4xl">
//                 A practical approach to pest control.
//               </h3>

//               <p className="mt-5 max-w-[400px] text-sm font-medium leading-7 text-black/50">
//                 From the first inspection to treatment and prevention
//                 advice, every stage is focused on dealing with the
//                 actual pest problem.
//               </p>

//             </div>

//             {/* BENEFITS */}

//             <div className="grid gap-0 border-l-2 border-[#6055A6]">

//               {benefits.map((benefit) => {

//                 const Icon = benefit.icon;

//                 return (
//                   <div
//                     key={benefit.title}
//                     className="group border-b border-black/10 p-6 transition-all duration-300 last:border-b-0 hover:bg-[#6055A6]/[0.035] sm:p-7"
//                   >

//                     <div className="flex gap-5">

//                       <span className="text-[10px] font-black tracking-[0.15em] text-[#6055A6]">
//                         {benefit.number}
//                       </span>

//                       <div className="flex-1">

//                         <div className="flex items-center justify-between gap-5">

//                           <h4 className="text-lg font-black tracking-[-0.025em] text-[#111111]">
//                             {benefit.title}
//                           </h4>

//                           <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white transition-transform duration-300 group-hover:rotate-6">
//                             <Icon
//                               size={17}
//                               strokeWidth={2}
//                             />
//                           </span>

//                         </div>

//                         <p className="mt-2 max-w-[600px] text-sm font-medium leading-6 text-black/50">
//                           {benefit.description}
//                         </p>

//                       </div>

//                     </div>

//                   </div>
//                 );
//               })}

//             </div>

//           </div>

//         </div>

//         {/* =====================================================
//             PROPERTY TYPES
//         ====================================================== */}

//         <div className="sgm-reveal sgm-delay-3 mt-14 grid gap-5 sm:grid-cols-3">

//           {[
//             {
//               icon: Building2,
//               title: "Homes & Flats",
//               text: "Residential pest control",
//             },
//             {
//               icon: BadgeCheck,
//               title: "Landlords",
//               text: "Rental property support",
//             },
//             {
//               icon: ShieldCheck,
//               title: "Businesses",
//               text: "Commercial pest control",
//             },
//           ].map((item) => {

//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className="group border border-black/10 bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-[#6055A6]/45 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
//               >

//                 <div className="flex items-center gap-4">

//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6055A6] text-white">
//                     <Icon
//                       size={19}
//                       strokeWidth={2}
//                     />
//                   </span>

//                   <div>

//                     <h4 className="text-sm font-black uppercase tracking-[0.03em] text-[#111111]">
//                       {item.title}
//                     </h4>

//                     <p className="mt-1 text-[11px] font-medium text-black/45">
//                       {item.text}
//                     </p>

//                   </div>

//                 </div>

//               </div>
//             );
//           })}

//         </div>

//         {/* =====================================================
//             CONTACT CTA
//         ====================================================== */}

//         <div className="sgm-reveal sgm-delay-4 relative mt-14 overflow-hidden bg-[#6055A6] p-7 text-white sm:p-9 lg:mt-16 lg:p-12">

//           {/* DECORATIVE GEOMETRY */}

//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute right-[-90px] top-[-150px] h-[400px] w-[400px] rounded-full border-[70px] border-white/[0.06]"
//           />

//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute bottom-[-100px] left-[35%] h-[250px] w-[250px] rounded-full border border-white/[0.07]"
//           />

//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute left-[-50px] top-1/2 h-[120px] w-[120px] rounded-full border border-white/[0.06]"
//           />

//           <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

//             <div>

//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/60">
//                 {LOCAL.company}
//               </span>

//               <h3 className="mt-3 max-w-[720px] text-3xl font-black leading-[0.98] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
//                 Need help with a pest problem?
//               </h3>

//               <p className="mt-4 max-w-[620px] text-sm font-medium leading-6 text-white/65">
//                 Contact our Marylebone team to discuss your property,
//                 pest activity and treatment requirements.
//               </p>

//             </div>

//             <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="group inline-flex min-h-[56px] items-center justify-center gap-4 bg-white px-7 text-[10px] font-black uppercase tracking-[0.15em] text-[#6055A6] transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
//               >

//                 <Phone
//                   size={17}
//                   strokeWidth={2.4}
//                 />

//                 {LOCAL.phoneDisplay}

//               </a>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group inline-flex min-h-[56px] items-center justify-center gap-4 border border-white/35 px-7 text-[10px] font-black uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6055A6]"
//               >

//                 Send Enquiry

//                 <ArrowUpRight
//                   size={17}
//                   strokeWidth={2.4}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />

//               </button>

//             </div>

//           </div>

//         </div>

//         {/* =====================================================
//             BOTTOM LOCATION BAR
//         ====================================================== */}

//         <div className="sgm-reveal mt-7 flex flex-col gap-4 border-t border-black/10 pt-6 text-[8px] font-black uppercase tracking-[0.18em] text-black/40 sm:flex-row sm:items-center sm:justify-between">

//           <div className="flex items-center gap-2">

//             <CheckCircle2
//               size={14}
//               strokeWidth={2.5}
//               className="text-[#6055A6]"
//             />

//             Residential & Commercial Pest Control

//           </div>

//           <div className="flex items-center gap-2">

//             <MapPin
//               size={14}
//               strokeWidth={2.5}
//               className="text-[#6055A6]"
//             />

//             {LOCAL.fullAddress}

//           </div>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="flex items-center gap-2 text-[#6055A6] transition-colors duration-300 hover:text-black"
//           >

//             <Phone
//               size={14}
//               strokeWidth={2.5}
//             />

//             {LOCAL.phoneDisplay}

//           </a>

//         </div>

//       </div>
//     </section>
//   );
// }












// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Bug,
//   Check,
//   Mail,
//   MapPin,
//   Phone,
//   Rat,
//   Search,
//   ShieldCheck,
//   Target,
// } from "lucide-react";

// export default function SuperGuardServicesSection() {
//   const navigate = useNavigate();

//   const LOCAL = {
//     company: "Superguard Services West Wickham",
//     area: "West Wickham",
//     city: "London",
//     postcode: "BR4 0QL",
//     address: "16 Ash Grove, West Wickham BR4 0QL",
//     phoneDisplay: "07356 270867",
//     phoneTel: "447356270867",
//     email: "info@superguardwestwickham.uk",
//   };

//   const services = [
//     {
//       number: "01",
//       title: "Rats & Mice",
//       fullTitle: "Rats & Mice Control",
//       category: "RODENT CONTROL",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       description:
//         "Professional rodent control for homes, flats, gardens, lofts and commercial properties across West Wickham.",
//       points: [
//         "Rodent inspection",
//         "Entry point checks",
//         "Targeted treatment",
//       ],
//     },
//     {
//       number: "02",
//       title: "Bed Bugs",
//       fullTitle: "Bed Bug Treatment",
//       category: "BED BUG CONTROL",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       description:
//         "Focused bed bug treatment designed to identify harbourage areas and tackle active infestations.",
//       points: [
//         "Harbourage inspection",
//         "Infestation assessment",
//         "Professional treatment",
//       ],
//     },
//     {
//       number: "03",
//       title: "Wasp Nests",
//       fullTitle: "Wasp Nest Control",
//       category: "WASP CONTROL",
//       image: "/images/wasps.webp",
//       icon: ShieldCheck,
//       description:
//         "Professional wasp nest treatment for nests around roofs, walls, gardens and surrounding areas.",
//       points: [
//         "Nest identification",
//         "Targeted treatment",
//         "Property safety advice",
//       ],
//     },
//   ];

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   useEffect(() => {
//     const elements = document.querySelectorAll(".sgw-reveal");

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((el) => el.classList.add("sgw-visible"));
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) return;

//           entry.target.classList.add("sgw-visible");
//           observer.unobserve(entry.target);
//         });
//       },
//       {
//         threshold: 0.08,
//         rootMargin: "0px 0px -30px 0px",
//       }
//     );

//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       aria-labelledby="sgw-services-heading"
//       className="relative w-full overflow-hidden bg-[#6055A6] text-white"
//     >
//       {/* SEO */}

//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//       <meta itemProp="email" content={LOCAL.email} />
//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, ${LOCAL.city}`}
//       />
//       <meta itemProp="address" content={LOCAL.address} />

//       {/* STYLES */}

//       <style>{`
//         .sgw-reveal {
//           opacity: 0;
//           transform: translateY(18px);
//           transition:
//             opacity 650ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgw-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sgw-card {
//           transition:
//             transform 350ms cubic-bezier(0.16, 1, 0.3, 1),
//             box-shadow 350ms ease;
//         }

//         .sgw-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 22px 55px rgba(0, 0, 0, 0.22);
//         }

//         .sgw-image {
//           transition: transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgw-card:hover .sgw-image {
//           transform: scale(1.045);
//         }

//         .sgw-arrow {
//           transition:
//             transform 300ms cubic-bezier(0.16, 1, 0.3, 1),
//             background-color 300ms ease;
//         }

//         .sgw-card:hover .sgw-arrow {
//           transform: translate(2px, -2px);
//         }

//         .sgw-service {
//           transition:
//             transform 300ms ease,
//             border-color 300ms ease,
//             background-color 300ms ease;
//         }

//         .sgw-service:hover {
//           transform: translateY(-3px);
//           border-color: rgba(255, 255, 255, 0.3);
//           background-color: rgba(255, 255, 255, 0.06);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sgw-reveal,
//           .sgw-card,
//           .sgw-image,
//           .sgw-arrow,
//           .sgw-service {
//             transition: none;
//           }
//         }
//       `}</style>

//       {/* SUBTLE BACKGROUND */}

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0"
//       >
//         <div className="absolute right-[-180px] top-[-180px] h-[430px] w-[430px] rounded-full border border-white/[0.10]" />

//         <div className="absolute right-[-110px] top-[-110px] h-[290px] w-[290px] rounded-full border border-white/[0.07]" />

//         <div className="absolute left-[-180px] bottom-[18%] h-[420px] w-[420px] rounded-full bg-white/[0.035] blur-[90px]" />

//         <div className="absolute right-[-180px] bottom-[8%] h-[450px] w-[450px] rounded-full bg-black/[0.08] blur-[100px]" />
//       </div>

//       <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">

//         {/* HEADER */}

//         <div className="sgw-reveal flex flex-col gap-4 border-b border-white/15 py-5 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#6055A6]">
//               <ShieldCheck size={18} />
//             </div>

//             <div>
//               <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/55">
//                 Pest Control Specialists
//               </p>

//               <p className="mt-1 text-xs font-bold uppercase tracking-[0.02em]">
//                 {LOCAL.company}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-white/55">
//             <MapPin size={13} />
//             {LOCAL.area}
//             <span className="mx-1 h-1 w-1 rounded-full bg-white/50" />
//             {LOCAL.postcode}
//           </div>
//         </div>

//         {/* HERO */}

//         <div className="sgw-reveal grid gap-8 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16 lg:py-24">

//           <div>
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-px w-8 bg-white/70" />

//               <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/55">
//                 Services / West Wickham
//               </span>
//             </div>

//             <h2
//               id="sgw-services-heading"
//               className="max-w-[850px] text-[48px] font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-[64px] md:text-[76px] lg:text-[88px]"
//             >
//               Professional pest control
//               <span className="block text-white/45">
//                 without the hassle.
//               </span>
//             </h2>
//           </div>

//           <div className="lg:pb-1">
//             <p className="max-w-[470px] text-sm font-medium leading-6 text-white/65 sm:text-[15px]">
//               Superguard Services West Wickham provides professional
//               pest control for homes, landlords and businesses across
//               West Wickham and surrounding areas.
//             </p>

//             <div className="mt-6 flex flex-wrap gap-3">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="inline-flex min-h-[46px] items-center gap-3 rounded-full bg-white px-5 text-[8px] font-black uppercase tracking-[0.16em] text-[#6055A6] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#111111] hover:text-white"
//               >
//                 <Phone size={14} />
//                 Call {LOCAL.phoneDisplay}
//                 <ArrowUpRight size={14} />
//               </a>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="inline-flex min-h-[46px] items-center gap-3 rounded-full border border-white/20 px-5 text-[8px] font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
//               >
//                 Send Enquiry
//                 <ArrowUpRight size={14} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* SERVICE INTRO */}

//         <div className="sgw-reveal border-y border-white/15 py-12 sm:py-14">
//           <div className="grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
//             <div>
//               <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/45">
//                 Our Services
//               </p>

//               <h3 className="mt-3 max-w-[680px] text-3xl font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
//                 Targeted solutions for
//                 <span className="text-white/45"> common pest problems.</span>
//               </h3>
//             </div>

//             <p className="max-w-[430px] text-sm leading-6 text-white/55 lg:ml-auto">
//               We focus on identifying the source of the problem and
//               selecting an appropriate treatment for your property.
//             </p>
//           </div>
//         </div>

//         {/* SERVICE CARDS */}

//         <div className="sgw-reveal py-12 sm:py-14 lg:py-16">
//           <div className="grid gap-5 lg:grid-cols-3">

//             {services.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <button
//                   key={service.number}
//                   type="button"
//                   onClick={goToContact}
//                   className="sgw-card group relative overflow-hidden rounded-2xl bg-[#18161C] text-left"
//                 >
//                   <div className="relative h-[430px] sm:h-[460px]">

//                     <img
//                       src={service.image}
//                       alt={`${service.fullTitle} in West Wickham`}
//                       className="sgw-image h-full w-full object-cover"
//                       loading="lazy"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/5" />

//                     {/* Top */}

//                     <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6055A6] text-white">
//                         <Icon size={17} />
//                       </div>

//                       <span className="text-[10px] font-black tracking-[0.18em] text-white/50">
//                         {service.number}
//                       </span>
//                     </div>

//                     {/* Content */}

//                     <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
//                       <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/50">
//                         {service.category}
//                       </p>

//                       <h4 className="mt-2 text-[34px] font-black uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-[38px]">
//                         {service.title}
//                       </h4>

//                       <p className="mt-4 text-[13px] leading-5 text-white/60">
//                         {service.description}
//                       </p>

//                       <div className="mt-5 flex flex-wrap gap-2">
//                         {service.points.map((point) => (
//                           <span
//                             key={point}
//                             className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.1em] text-white/65"
//                           >
//                             {point}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Arrow */}

//                     <span className="sgw-arrow absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#6055A6]">
//                       <ArrowUpRight size={17} />
//                     </span>
//                   </div>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* APPROACH */}

//         <div className="sgw-reveal border-y border-white/15 py-14 sm:py-16 lg:py-20">
//           <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

//             <div>
//               <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/40">
//                 Our Approach
//               </p>

//               <h3 className="mt-3 text-3xl font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
//                 Inspect.
//                 <span className="block text-white/45">
//                   Treat.
//                 </span>
//                 Protect.
//               </h3>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-3">
//               {[
//                 {
//                   number: "01",
//                   title: "Inspect",
//                   text: "Identify signs of activity and possible harbourage.",
//                   icon: Search,
//                 },
//                 {
//                   number: "02",
//                   title: "Treat",
//                   text: "Use a targeted approach suited to the pest.",
//                   icon: Target,
//                 },
//                 {
//                   number: "03",
//                   title: "Protect",
//                   text: "Provide practical advice to reduce repeat activity.",
//                   icon: ShieldCheck,
//                 },
//               ].map((step) => {
//                 const Icon = step.icon;

//                 return (
//                   <div
//                     key={step.number}
//                     className="sgw-service rounded-xl border border-white/15 p-5"
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className="text-xl font-black text-white/25">
//                         {step.number}
//                       </span>

//                       <Icon size={17} className="text-white/60" />
//                     </div>

//                     <h4 className="mt-7 text-base font-black uppercase tracking-[-0.02em]">
//                       {step.title}
//                     </h4>

//                     <p className="mt-2 text-xs leading-5 text-white/40">
//                       {step.text}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* COVERAGE */}

//         <div className="sgw-reveal py-14 sm:py-16 lg:py-20">
//           <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">

//             <div>
//               <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/40">
//                 Local Coverage
//               </p>

//               <h3 className="mt-3 text-3xl font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
//                 Serving
//                 <span className="block text-white/45">
//                   West Wickham.
//                 </span>
//               </h3>

//               <p className="mt-4 max-w-[440px] text-sm leading-6 text-white/50">
//                 Residential and commercial pest control for properties
//                 across West Wickham and surrounding areas.
//               </p>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-2">

//               <div className="rounded-xl border border-white/15 p-5">
//                 <MapPin size={17} className="text-white/70" />

//                 <p className="mt-6 text-[8px] font-bold uppercase tracking-[0.22em] text-white/40">
//                   Address
//                 </p>

//                 <p className="mt-2 text-sm font-semibold leading-5">
//                   {LOCAL.address}
//                 </p>
//               </div>

//               <div className="rounded-xl border border-white/15 p-5">
//                 <Phone size={17} className="text-white/70" />

//                 <p className="mt-6 text-[8px] font-bold uppercase tracking-[0.22em] text-white/40">
//                   Phone
//                 </p>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="mt-2 block text-sm font-semibold hover:underline"
//                 >
//                   {LOCAL.phoneDisplay}
//                 </a>
//               </div>

//               <div className="rounded-xl border border-white/15 p-5 sm:col-span-2">
//                 <Mail size={17} className="text-white/70" />

//                 <p className="mt-6 text-[8px] font-bold uppercase tracking-[0.22em] text-white/40">
//                   Email
//                 </p>

//                 <a
//                   href={`mailto:${LOCAL.email}`}
//                   className="mt-2 block break-all text-sm font-semibold hover:underline"
//                 >
//                   {LOCAL.email}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA */}

//         <div className="sgw-reveal pb-10 sm:pb-12">
//           <div className="relative overflow-hidden rounded-2xl bg-white px-6 py-9 text-[#111111] sm:px-9 sm:py-11 lg:px-12">

//             <div className="absolute right-[-80px] top-[-100px] h-60 w-60 rounded-full border-[45px] border-[#6055A6]/10" />

//             <div className="relative z-10 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">

//               <div>
//                 <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#6055A6]">
//                   Superguard Services West Wickham
//                 </p>

//                 <h3 className="mt-3 max-w-[650px] text-3xl font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
//                   Need professional help with a pest problem?
//                 </h3>

//                 <p className="mt-4 max-w-[550px] text-sm leading-6 text-black/45">
//                   Contact our local team to discuss your property and
//                   pest control requirements.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-[#6055A6] px-5 text-[8px] font-black uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#111111]"
//                 >
//                   <Phone size={14} />
//                   {LOCAL.phoneDisplay}
//                   <ArrowUpRight size={14} />
//                 </a>

//                 <button
//                   type="button"
//                   onClick={goToContact}
//                   className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-black/15 px-5 text-[8px] font-black uppercase tracking-[0.15em] text-[#111111] transition-all duration-300 hover:border-[#6055A6] hover:bg-[#6055A6] hover:text-white"
//                 >
//                   Send Enquiry
//                   <ArrowUpRight size={14} />
//                 </button>

//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FOOTER STRIP */}

//         <div className="sgw-reveal flex flex-col gap-4 border-t border-white/15 py-6 text-[8px] font-bold uppercase tracking-[0.15em] text-white/40 sm:flex-row sm:items-center sm:justify-between">

//           <div className="flex items-center gap-2">
//             <MapPin size={12} />
//             {LOCAL.area}, London
//           </div>

//           <div className="flex items-center gap-2">
//             <Check size={12} />
//             Residential & Commercial Pest Control
//           </div>

//           <a
//             href={`mailto:${LOCAL.email}`}
//             className="flex items-center gap-2 text-white/60 transition-colors hover:text-white"
//           >
//             <Mail size={12} />
//             {LOCAL.email}
//           </a>

//         </div>

//       </div>
//     </section>
//   );
// }















import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Bug,
  Check,
  Mail,
  MapPin,
  Phone,
  Rat,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react";

export default function SuperGuardServicesSection() {
  const navigate = useNavigate();

  const LOCAL = {
    company: "Superguard Services West Wickham",
    area: "West Wickham",
    city: "London",
    postcode: "BR4 0QL",
    address: "16 Ash Grove, West Wickham BR4 0QL",
    phoneDisplay: "07356 270867",
    phoneTel: "447356270867",
    email: "info@superguardwestwickham.uk",
  };

  const services = [
    {
      number: "01",
      title: "Rats & Mice",
      fullTitle: "Rats & Mice Control",
      category: "RODENT CONTROL",
      image: "/images/rodents.webp",
      icon: Rat,
      description:
        "Professional rodent control for homes, flats, gardens, lofts and commercial properties across West Wickham.",
      points: [
        "Rodent inspection",
        "Entry point checks",
        "Targeted treatment",
      ],
    },
    {
      number: "02",
      title: "Bed Bugs",
      fullTitle: "Bed Bug Treatment",
      category: "BED BUG CONTROL",
      image: "/images/bedbugs.webp",
      icon: Bug,
      description:
        "Focused bed bug treatment designed to identify harbourage areas and tackle active infestations.",
      points: [
        "Harbourage inspection",
        "Infestation assessment",
        "Professional treatment",
      ],
    },
    {
      number: "03",
      title: "Wasp Nests",
      fullTitle: "Wasp Nest Control",
      category: "WASP CONTROL",
      image: "/images/wasps.webp",
      icon: ShieldCheck,
      description:
        "Professional wasp nest treatment for nests around roofs, walls, gardens and surrounding areas.",
      points: [
        "Nest identification",
        "Targeted treatment",
        "Property safety advice",
      ],
    },
  ];

  const goToContact = () => {
    navigate("/contact-us");
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".sgw-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("sgw-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("sgw-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-white text-[#15131A]"
      aria-labelledby="sgw-services-heading"
    >
      {/* =====================================================
          SEO / STRUCTURED DATA
      ====================================================== */}

      <meta itemProp="name" content={LOCAL.company} />
      <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
      <meta itemProp="email" content={LOCAL.email} />
      <meta
        itemProp="areaServed"
        content={`${LOCAL.area}, ${LOCAL.city}`}
      />
      <meta itemProp="address" content={LOCAL.address} />

      {/* =====================================================
          CUSTOM CSS
      ====================================================== */}

      <style>{`
        .sgw-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 650ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sgw-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sgw-card {
          transition:
            transform 350ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 350ms ease,
            border-color 350ms ease;
        }

        .sgw-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 55px rgba(20, 15, 30, 0.10);
          border-color: rgba(96, 85, 166, 0.28);
        }

        .sgw-image {
          transition:
            transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sgw-card:hover .sgw-image {
          transform: scale(1.045);
        }

        .sgw-arrow {
          transition:
            transform 300ms cubic-bezier(0.16, 1, 0.3, 1),
            background-color 300ms ease,
            color 300ms ease;
        }

        .sgw-card:hover .sgw-arrow {
          transform: translate(2px, -2px);
          background-color: #6055A6;
          color: white;
        }

        .sgw-service {
          transition:
            transform 300ms ease,
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        .sgw-service:hover {
          transform: translateY(-3px);
          border-color: rgba(96, 85, 166, 0.28);
          box-shadow: 0 12px 30px rgba(20, 15, 30, 0.06);
        }

        .sgw-icon {
          transition:
            background-color 300ms ease,
            color 300ms ease,
            transform 300ms ease;
        }

        .sgw-service:hover .sgw-icon {
          background-color: #6055A6;
          color: white;
          transform: translateY(-2px);
        }

        .sgw-button {
          transition:
            transform 300ms ease,
            background-color 300ms ease,
            border-color 300ms ease,
            color 300ms ease,
            box-shadow 300ms ease;
        }

        .sgw-button:hover {
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .sgw-reveal,
          .sgw-card,
          .sgw-image,
          .sgw-arrow,
          .sgw-service,
          .sgw-icon,
          .sgw-button {
            transition: none;
          }

          .sgw-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute right-[-150px] top-[-180px] h-[420px] w-[420px] rounded-full border border-[#6055A6]/[0.07]" />

        <div className="absolute right-[-90px] top-[-120px] h-[280px] w-[280px] rounded-full border border-[#6055A6]/[0.06]" />

        <div className="absolute left-[-180px] top-[38%] h-[400px] w-[400px] rounded-full bg-[#6055A6]/[0.025] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="sgw-reveal flex flex-col gap-4 border-b border-black/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6055A6] text-white shadow-sm">
              <ShieldCheck size={18} strokeWidth={2.2} />
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-black/40">
                Pest Control Specialists
              </p>

              <p className="mt-1 text-xs font-extrabold tracking-[-0.01em] text-[#15131A]">
                {LOCAL.company}
              </p>
            </div>

          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[8px] font-bold uppercase tracking-[0.18em] text-black/40">

            <MapPin
              size={13}
              className="text-[#6055A6]"
            />

            <span>{LOCAL.area}</span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span>{LOCAL.postcode}</span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="text-[#6055A6] transition-opacity hover:opacity-70"
            >
              {LOCAL.phoneDisplay}
            </a>

          </div>

        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <div className="sgw-reveal grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20 lg:py-24">

          {/* LEFT */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-9 bg-[#6055A6]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#6055A6]">
                Services / West Wickham
              </span>

            </div>

            <h2
              id="sgw-services-heading"
              className="max-w-[760px] text-[42px] font-black leading-[0.98] tracking-[-0.045em] sm:text-[52px] md:text-[60px] lg:text-[68px]"
            >
              Professional pest control
              <span className="block text-[#6055A6]">
                without the hassle.
              </span>
            </h2>

          </div>

          {/* RIGHT */}

          <div className="lg:pb-1">

            <p className="max-w-[500px] text-[14px] font-medium leading-7 text-black/55 sm:text-[15px]">
              Superguard Services West Wickham provides professional
              pest control for homes, landlords and businesses across
              West Wickham and surrounding areas.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="sgw-button inline-flex min-h-[48px] items-center gap-3 rounded-full bg-[#6055A6] px-5 text-[8px] font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-[#6055A6]/15 hover:bg-[#51478F]"
              >
                <Phone size={14} />

                Call {LOCAL.phoneDisplay}

                <ArrowUpRight size={14} />
              </a>

              <button
                type="button"
                onClick={goToContact}
                className="sgw-button inline-flex min-h-[48px] items-center gap-3 rounded-full border border-black/15 px-5 text-[8px] font-black uppercase tracking-[0.16em] text-black/70 hover:border-[#6055A6] hover:text-[#6055A6]"
              >
                Send Enquiry

                <ArrowUpRight size={14} />
              </button>

            </div>

          </div>

        </div>

        {/* =====================================================
            SERVICE INTRO
        ====================================================== */}

        <div className="sgw-reveal border-y border-black/10 py-12 sm:py-14">

          <div className="grid gap-7 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-14">

            <div>

              <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#6055A6]">
                Our Services
              </p>

              <h3 className="mt-3 max-w-[700px] text-[30px] font-black leading-[1.05] tracking-[-0.04em] sm:text-[38px] lg:text-[44px]">
                Targeted solutions for
                <span className="text-black/35">
                  {" "}
                  common pest problems.
                </span>
              </h3>

            </div>

            <p className="max-w-[450px] text-sm leading-6 text-black/50 lg:ml-auto">
              We focus on identifying the source of the problem and
              selecting an appropriate treatment for your property.
            </p>

          </div>

        </div>

        {/* =====================================================
            SERVICE CARDS
        ====================================================== */}

        <div className="sgw-reveal py-12 sm:py-14 lg:py-16">

          <div className="grid gap-5 lg:grid-cols-3">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <button
                  key={service.number}
                  type="button"
                  onClick={goToContact}
                  className="sgw-card group relative overflow-hidden rounded-2xl border border-black/10 bg-white text-left shadow-[0_8px_30px_rgba(20,15,30,0.04)]"
                >

                  <div className="relative h-[390px] sm:h-[420px]">

                    <img
                      src={service.image}
                      alt={`${service.fullTitle} in West Wickham`}
                      className="sgw-image h-full w-full object-cover"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5" />

                    {/* TOP */}

                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6055A6] text-white shadow-lg">
                        <Icon size={17} />
                      </div>

                      <span className="text-[10px] font-black tracking-[0.18em] text-white/65">
                        {service.number}
                      </span>

                    </div>

                    {/* CONTENT */}

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

                      <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/55">
                        {service.category}
                      </p>

                      <h4 className="mt-2 text-[30px] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-[34px]">
                        {service.title}
                      </h4>

                      <p className="mt-4 max-w-[430px] text-[12px] leading-5 text-white/65">
                        {service.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2 pr-10">

                        {service.points.map((point) => (
                          <span
                            key={point}
                            className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.08em] text-white/75 backdrop-blur-sm"
                          >
                            {point}
                          </span>
                        ))}

                      </div>

                    </div>

                    {/* ARROW */}

                    <span className="sgw-arrow absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6055A6] shadow-lg">
                      <ArrowUpRight size={16} />
                    </span>

                  </div>

                </button>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            APPROACH
        ====================================================== */}

        <div className="sgw-reveal border-y border-black/10 py-14 sm:py-16 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">

            {/* LEFT */}

            <div>

              <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#6055A6]">
                Our Approach
              </p>

              <h3 className="mt-3 text-[34px] font-black leading-[1] tracking-[-0.045em] sm:text-[42px] lg:text-[48px]">
                Inspect.
                <span className="block text-black/35">
                  Treat.
                </span>
                Protect.
              </h3>

              <p className="mt-5 max-w-[420px] text-sm leading-6 text-black/50">
                A straightforward process helps us understand the
                problem and choose a practical response for your property.
              </p>

            </div>

            {/* RIGHT */}

            <div className="grid gap-3 sm:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "Inspect",
                  text: "Identify signs of activity and possible harbourage.",
                  icon: Search,
                },
                {
                  number: "02",
                  title: "Treat",
                  text: "Use a targeted approach suited to the pest.",
                  icon: Target,
                },
                {
                  number: "03",
                  title: "Protect",
                  text: "Provide practical advice to reduce repeat activity.",
                  icon: ShieldCheck,
                },
              ].map((step) => {

                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="sgw-service rounded-xl border border-black/10 bg-white p-5"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-xl font-black tracking-[-0.05em] text-black/15">
                        {step.number}
                      </span>

                      <span className="sgw-icon flex h-9 w-9 items-center justify-center rounded-lg bg-[#6055A6]/10 text-[#6055A6]">
                        <Icon size={16} />
                      </span>

                    </div>

                    <h4 className="mt-7 text-base font-black tracking-[-0.02em]">
                      {step.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-black/45">
                      {step.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* =====================================================
            LOCAL COVERAGE
        ====================================================== */}

        <div className="sgw-reveal py-14 sm:py-16 lg:py-20">

          <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">

            {/* LEFT */}

            <div>

              <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#6055A6]">
                Local Coverage
              </p>

              <h3 className="mt-3 text-[34px] font-black leading-[1] tracking-[-0.045em] sm:text-[42px] lg:text-[48px]">
                Serving
                <span className="block text-black/35">
                  West Wickham.
                </span>
              </h3>

              <p className="mt-5 max-w-[440px] text-sm leading-6 text-black/50">
                Residential and commercial pest control for properties
                across West Wickham and surrounding areas.
              </p>

            </div>

            {/* RIGHT */}

            <div className="grid gap-3 sm:grid-cols-2">

              {/* ADDRESS */}

              <div className="sgw-service rounded-xl border border-black/10 bg-white p-5">

                <span className="sgw-icon flex h-9 w-9 items-center justify-center rounded-lg bg-[#6055A6]/10 text-[#6055A6]">
                  <MapPin size={16} />
                </span>

                <p className="mt-6 text-[8px] font-bold uppercase tracking-[0.22em] text-black/35">
                  Address
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-[#15131A]">
                  {LOCAL.address}
                </p>

              </div>

              {/* PHONE */}

              <div className="sgw-service rounded-xl border border-black/10 bg-white p-5">

                <span className="sgw-icon flex h-9 w-9 items-center justify-center rounded-lg bg-[#6055A6]/10 text-[#6055A6]">
                  <Phone size={16} />
                </span>

                <p className="mt-6 text-[8px] font-bold uppercase tracking-[0.22em] text-black/35">
                  Phone
                </p>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="mt-2 block text-sm font-semibold text-[#15131A] hover:text-[#6055A6]"
                >
                  {LOCAL.phoneDisplay}
                </a>

              </div>

              {/* EMAIL */}

              <div className="sgw-service rounded-xl border border-black/10 bg-white p-5 sm:col-span-2">

                <span className="sgw-icon flex h-9 w-9 items-center justify-center rounded-lg bg-[#6055A6]/10 text-[#6055A6]">
                  <Mail size={16} />
                </span>

                <p className="mt-6 text-[8px] font-bold uppercase tracking-[0.22em] text-black/35">
                  Email
                </p>

                <a
                  href={`mailto:${LOCAL.email}`}
                  className="mt-2 block break-all text-sm font-semibold text-[#15131A] hover:text-[#6055A6]"
                >
                  {LOCAL.email}
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div className="sgw-reveal pb-10 sm:pb-12">

          <div className="relative overflow-hidden rounded-2xl bg-[#6055A6] px-6 py-9 text-white sm:px-9 sm:py-11 lg:px-12">

            {/* Decorative circles */}

            <div
              aria-hidden="true"
              className="absolute right-[-70px] top-[-90px] h-64 w-64 rounded-full border-[40px] border-white/10"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-[-120px] left-[38%] h-64 w-64 rounded-full border border-white/10"
            />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/60">
                  Superguard Services West Wickham
                </p>

                <h3 className="mt-3 max-w-[650px] text-[30px] font-black leading-[1.02] tracking-[-0.04em] sm:text-[38px] lg:text-[44px]">
                  Need professional help with a pest problem?
                </h3>

                <p className="mt-4 max-w-[550px] text-sm leading-6 text-white/65">
                  Contact our local team to discuss your property and
                  pest control requirements.
                </p>

              </div>

              <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="sgw-button inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-white px-5 text-[8px] font-black uppercase tracking-[0.15em] text-[#6055A6] hover:bg-[#F7F6FA]"
                >
                  <Phone size={14} />

                  {LOCAL.phoneDisplay}

                  <ArrowUpRight size={14} />
                </a>

                <button
                  type="button"
                  onClick={goToContact}
                  className="sgw-button inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-white/30 px-5 text-[8px] font-black uppercase tracking-[0.15em] text-white hover:border-white hover:bg-white/10"
                >
                  Send Enquiry

                  <ArrowUpRight size={14} />
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            FOOTER STRIP
        ====================================================== */}

        <div className="sgw-reveal flex flex-col gap-4 border-t border-black/10 py-6 text-[8px] font-bold uppercase tracking-[0.15em] text-black/35 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-[#6055A6]" />
            {LOCAL.area}, London
          </div>

          <div className="flex items-center gap-2">
            <Check size={12} className="text-[#6055A6]" />
            Residential & Commercial Pest Control
          </div>

          <a
            href={`mailto:${LOCAL.email}`}
            className="flex items-center gap-2 text-black/45 transition-colors hover:text-[#6055A6]"
          >
            <Mail size={12} />
            {LOCAL.email}
          </a>

        </div>

      </div>
    </section>
  );
}