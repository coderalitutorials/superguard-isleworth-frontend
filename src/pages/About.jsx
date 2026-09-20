


// import React from 'react'
// import AboutStorySection from '../components/AboutStorySection'
// import AboutPassionSection from '../components/AboutPassionSection'
// import MissionVisionSection from '../components/MissionVisionSection'
// import AboutCommitmentSection from '../components/AboutCommitmentSection'

// const About = () => {
//   return (
//     <>
//     <AboutStorySection/>
//     <AboutPassionSection/>
//     <MissionVisionSection/>
//     <AboutCommitmentSection/>
//     </>
//   )
// }

// export default About





















// import React from "react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Check,
//   Mail,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const About = () => {
//   const LOCAL = {
//     company: "Superguard Services West Wickham",
//     shortName: "Superguard West Wickham",
//     area: "West Wickham",
//     city: "London",
//     postcode: "BR4 0QL",
//     address: "16 Ash Grove, West Wickham BR4 0QL",
//     phoneDisplay: "07356 270867",
//     phoneTel: "+447356270867",
//     email: "info@superguardwestwickham.uk",
//   };

//   const principles = [
//     {
//       number: "01",
//       title: "Understand",
//       text: "We begin by understanding the pest activity, the property and the circumstances surrounding the problem.",
//     },
//     {
//       number: "02",
//       title: "Assess",
//       text: "We look for visible signs, likely harbourage areas, access points and conditions that may be contributing to activity.",
//     },
//     {
//       number: "03",
//       title: "Control",
//       text: "We recommend a practical control approach based on the pest, property and level of activity identified.",
//     },
//     {
//       number: "04",
//       title: "Prevent",
//       text: "Where appropriate, we highlight practical steps that can help reduce the chance of future pest activity.",
//     },
//   ];

//   const serviceGroups = [
//     {
//       number: "01",
//       title: "Insect Control",
//       services: [
//         "Ant Control",
//         "Bed Bug Treatment",
//         "Carpet Moth Treatment",
//         "Carpet Beetle Control",
//         "Cockroach Control",
//         "Flea Treatment",
//         "Wasp Nest Control",
//         "Bee Activity Support",
//       ],
//     },
//     {
//       number: "02",
//       title: "Rodent & Wildlife",
//       services: [
//         "Rats & Mice Control",
//         "Squirrel Control",
//       ],
//     },
//     {
//       number: "03",
//       title: "Birds & Prevention",
//       services: [
//         "Bird Control",
//         "Property Proofing",
//       ],
//     },
//   ];

//   const coveragePoints = [
//     "Residential properties",
//     "Landlords & rental properties",
//     "Offices & workplaces",
//     "Commercial properties",
//     "Local businesses",
//     "Surrounding London areas",
//   ];

//   const values = [
//     {
//       number: "01",
//       title: "Clear communication",
//       text: "We explain the situation in straightforward language so you know what has been identified and what the next step involves.",
//     },
//     {
//       number: "02",
//       title: "Property-focused",
//       text: "The same pest can behave differently from one property to another, so the surrounding conditions and access points matter.",
//     },
//     {
//       number: "03",
//       title: "Practical solutions",
//       text: "We focus on suitable control measures based on the pest, property and activity rather than taking a one-size-fits-all approach.",
//     },
//   ];

//   return (
//     <main className="overflow-hidden bg-white mt-20 text-[#111111]">

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-white">

//         <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

//           <div className="grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:py-24">

//             {/* LEFT CONTENT */}

//             <div className="relative z-10">

//               <div className="mb-8 flex items-center gap-4">

//                 <span className="h-px w-12 bg-[#6055A6]" />

//                 <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                   <Sparkles size={13} />
//                   About Superguard
//                 </span>

//               </div>

//               <h1 className="max-w-4xl text-[58px] font-black leading-[.84] tracking-[-.075em] sm:text-[78px] md:text-[92px] lg:text-[100px] xl:text-[118px]">

//                 Local team.

//                 <span className="block text-[#6055A6]">
//                   Professional
//                 </span>

//                 <span className="block">
//                   pest control.
//                 </span>

//               </h1>

//               <p className="mt-9 max-w-xl text-[15px] font-medium leading-8 text-[#666666] sm:text-base">
//                 {LOCAL.company} provides professional pest control
//                 support for homes, landlords, businesses and
//                 commercial properties throughout {LOCAL.area} and
//                 surrounding London areas.
//               </p>

//               <div className="mt-9 flex flex-col gap-3 sm:flex-row">

//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex min-h-[58px] items-center justify-between gap-10 bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[.18em] text-white transition duration-300 hover:-translate-y-1"
//                 >
//                   Get In Touch

//                   <ArrowRight
//                     size={16}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </Link>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="group inline-flex min-h-[58px] items-center justify-between gap-7 border border-[#6055A6]/30 px-7 text-[9px] font-black uppercase tracking-[.18em] text-[#151515] transition duration-300 hover:-translate-y-1 hover:border-[#6055A6] hover:bg-[#6055A6] hover:text-white"
//                 >
//                   <Phone size={15} />

//                   {LOCAL.phoneDisplay}

//                   <ArrowUpRight
//                     size={15}
//                     className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </a>

//               </div>

//               <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#6055A6]/15 pt-6">

//                 {[
//                   "Local Service",
//                   "Residential",
//                   "Commercial",
//                   "Professional Approach",
//                 ].map((item) => (

//                   <span
//                     key={item}
//                     className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.14em] text-[#777777]"
//                   >
//                     <Check
//                       size={13}
//                       className="text-[#6055A6]"
//                     />

//                     {item}
//                   </span>

//                 ))}

//               </div>

//             </div>

//             {/* HERO IMAGE */}

//             <div className="relative flex min-h-[520px] items-center justify-center lg:min-h-[650px]">

//               <div className="absolute right-[2%] top-[5%] h-[430px] w-[430px] rounded-full border border-[#6055A6]/20 sm:h-[550px] sm:w-[550px] lg:h-[680px] lg:w-[680px]" />

//               <div className="absolute right-[8%] top-[11%] h-[330px] w-[330px] rounded-full border border-[#6055A6]/10 sm:h-[430px] sm:w-[430px] lg:h-[550px] lg:w-[550px]" />

//               <div className="relative z-10 h-[430px] w-[430px] overflow-hidden rounded-full border-[10px] border-white shadow-[0_25px_80px_rgba(96,85,166,.18)] sm:h-[520px] sm:w-[520px] lg:h-[620px] lg:w-[620px]">

//                 <img
//                   src="/images/about-story.webp"
//                   alt={`${LOCAL.company} professional pest control team`}
//                   className="h-full w-full object-cover"
//                   loading="eager"
//                   fetchPriority="high"
//                 />

//               </div>

//               <div className="absolute bottom-4 left-2 z-20 max-w-[240px] bg-[#6055A6] p-6 text-white shadow-[0_20px_60px_rgba(96,85,166,.25)] sm:bottom-8 sm:left-4">

//                 <ShieldCheck size={21} />

//                 <span className="mt-5 block text-[8px] font-black uppercase tracking-[.25em] text-white/65">
//                   Serving locally
//                 </span>

//                 <span className="mt-2 block text-lg font-black leading-tight">
//                   {LOCAL.area}
//                   <br />
//                   {LOCAL.city}
//                 </span>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           INTRO STATEMENT
//       ===================================================== */}

//       <section className="border-y border-[#6055A6]/15 bg-[#6055A6] text-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">

//             <div>
//               <span className="text-[9px] font-black uppercase tracking-[.3em] text-white/65">
//                 01 — Our Approach
//               </span>

//               <div className="mt-7 flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-white" />
//                 <span className="h-px w-20 bg-white/35" />
//               </div>
//             </div>

//             <div>

//               <h2 className="max-w-5xl text-[43px] font-black leading-[.92] tracking-[-.055em] sm:text-[60px] lg:text-[76px]">
//                 Pest problems need
//                 <span className="text-white/55">
//                   {" "}a considered response.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-3xl text-base font-medium leading-8 text-white/75 sm:text-lg">
//                 At {LOCAL.company}, our approach starts with
//                 understanding what is happening at the property.
//                 We consider the pest involved, where activity has
//                 been noticed and the conditions that may be allowing
//                 the problem to continue.
//               </p>

//               <p className="mt-5 max-w-3xl text-sm leading-8 text-white/60">
//                 From insects and rodents to wildlife, birds and
//                 property proofing, our focus is on giving customers
//                 clear information and a practical way forward.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           IMAGE + STORY
//       ===================================================== */}

//       <section className="bg-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">

//             {/* IMAGE */}

//             <div className="relative">

//               <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-[#6055A6]/35 sm:-left-8 sm:-top-8 sm:h-36 sm:w-36" />

//               <div className="absolute -bottom-5 -right-5 h-28 w-28 border-b border-r border-[#6055A6]/35 sm:-bottom-8 sm:-right-8 sm:h-36 sm:w-36" />

//               <div className="relative overflow-hidden">

//                 <img
//                   src="/images/about-superguard-banner.webp"
//                   alt={`${LOCAL.company} pest control services in ${LOCAL.area}`}
//                   className="h-[430px] w-full object-cover sm:h-[560px] lg:h-[640px]"
//                   loading="lazy"
//                 />

//               </div>

//               <div className="absolute bottom-0 left-0 bg-[#6055A6] px-6 py-5 text-white sm:px-8 sm:py-6">

//                 <span className="block text-[8px] font-black uppercase tracking-[.25em] text-white/60">
//                   Local Coverage
//                 </span>

//                 <span className="mt-2 block text-lg font-black">
//                   {LOCAL.area}, {LOCAL.city}
//                 </span>

//               </div>

//             </div>


//             {/* CONTENT */}

//             <div>

//               <span className="text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                 02 — What We Believe
//               </span>

//               <h2 className="mt-6 max-w-xl text-[50px] font-black leading-[.87] tracking-[-.065em] sm:text-[68px]">
//                 Good pest control
//                 <span className="block text-[#6055A6]">
//                   starts with clarity.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-xl text-sm font-medium leading-8 text-[#666666] sm:text-base">
//                 When you discover pest activity, you want to know
//                 what is happening and what can be done about it.
//                 We aim to make that process straightforward.
//               </p>

//               <div className="mt-10 border-t border-[#6055A6]/15">

//                 {values.map((item) => (

//                   <div
//                     key={item.number}
//                     className="grid gap-5 border-b border-[#6055A6]/15 py-7 sm:grid-cols-[55px_1fr]"
//                   >

//                     <span className="text-[9px] font-black text-[#6055A6]">
//                       {item.number}
//                     </span>

//                     <div>

//                       <h3 className="text-xl font-black tracking-[-.035em]">
//                         {item.title}
//                       </h3>

//                       <p className="mt-3 max-w-xl text-sm leading-7 text-[#777777]">
//                         {item.text}
//                       </p>

//                     </div>

//                   </div>

//                 ))}

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           PROCESS
//       ===================================================== */}

//       <section className="bg-[#6055A6] text-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-16 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">

//             <div>

//               <span className="text-[9px] font-black uppercase tracking-[.3em] text-white/65">
//                 03 — How We Work
//               </span>

//               <h2 className="mt-7 text-[52px] font-black leading-[.86] tracking-[-.065em] sm:text-[72px]">
//                 Inspect.
//                 <br />
//                 Control.
//                 <br />
//                 <span className="text-white/55">
//                   Prevent.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-md text-sm leading-8 text-white/65 sm:text-base">
//                 Every pest problem is different. We focus on
//                 understanding the activity, the property and
//                 the likely cause before recommending the next
//                 practical step.
//               </p>

//             </div>


//             <div className="border-t border-white/20">

//               {principles.map((item) => (

//                 <div
//                   key={item.number}
//                   className="group grid gap-5 border-b border-white/20 py-9 sm:grid-cols-[70px_190px_1fr] sm:items-start"
//                 >

//                   <span className="text-[10px] font-black text-white/50">
//                     {item.number}
//                   </span>

//                   <h3 className="text-2xl font-black tracking-[-.04em]">
//                     {item.title}
//                   </h3>

//                   <p className="max-w-lg text-sm leading-7 text-white/65">
//                     {item.text}
//                   </p>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           SERVICES
//       ===================================================== */}

//       <section className="bg-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="flex flex-col gap-8 border-b border-[#6055A6]/15 pb-10 lg:flex-row lg:items-end lg:justify-between">

//             <div>

//               <span className="text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                 04 — What We Cover
//               </span>

//               <h2 className="mt-6 max-w-4xl text-[50px] font-black leading-[.87] tracking-[-.065em] sm:text-[70px]">
//                 One local team.
//                 <span className="block text-[#6055A6]">
//                   Multiple pest problems.
//                 </span>
//               </h2>

//             </div>

//             <Link
//               to="/services"
//               className="group inline-flex items-center gap-4 self-start bg-[#6055A6] px-6 py-5 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:-translate-y-1"
//             >
//               Explore Services

//               <ArrowRight
//                 size={15}
//                 className="transition-transform group-hover:translate-x-2"
//               />
//             </Link>

//           </div>


//           <div className="mt-14 grid border-l border-t border-[#6055A6]/15 sm:grid-cols-2 lg:grid-cols-3">

//             {serviceGroups.map((group) => (

//               <div
//                 key={group.number}
//                 className="group border-b border-r border-[#6055A6]/15 p-7 transition duration-300 hover:bg-[#6055A6] hover:text-white sm:p-9 lg:p-10"
//               >

//                 <div className="flex items-center justify-between">

//                   <span className="text-[9px] font-black text-[#6055A6] transition group-hover:text-white/55">
//                     {group.number}
//                   </span>

//                   <ArrowUpRight
//                     size={17}
//                     className="text-[#6055A6] transition group-hover:text-white"
//                   />

//                 </div>

//                 <h3 className="mt-8 text-2xl font-black tracking-[-.04em]">
//                   {group.title}
//                 </h3>

//                 <div className="mt-8">

//                   {group.services.map((service) => (

//                     <div
//                       key={service}
//                       className="flex items-center gap-3 border-t border-[#6055A6]/15 py-3 transition group-hover:border-white/15"
//                     >

//                       <Check
//                         size={13}
//                         className="shrink-0 text-[#6055A6] transition group-hover:text-white"
//                       />

//                       <span className="text-[10px] font-bold text-[#666666] transition group-hover:text-white/75">
//                         {service}
//                       </span>

//                     </div>

//                   ))}

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           LOCAL COVERAGE
//       ===================================================== */}

//       <section className="border-t border-[#6055A6]/15 bg-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">

//             <div>

//               <span className="text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                 05 — Local Coverage
//               </span>

//               <h2 className="mt-6 text-[52px] font-black leading-[.86] tracking-[-.065em] sm:text-[72px]">
//                 West Wickham.
//                 <span className="block text-[#6055A6]">
//                   And beyond.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-lg text-sm font-medium leading-8 text-[#666666] sm:text-base">
//                 Based at {LOCAL.address}, {LOCAL.company}
//                 provides professional pest control support
//                 throughout {LOCAL.area}, {LOCAL.city} and
//                 surrounding London areas.
//               </p>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-8 inline-flex items-center gap-4 bg-[#6055A6] px-7 py-5 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:-translate-y-1"
//               >
//                 <Phone size={15} />
//                 Call {LOCAL.phoneDisplay}
//               </a>

//             </div>


//             <div className="border-t border-[#6055A6]/15">

//               {coveragePoints.map((item, index) => (

//                 <div
//                   key={item}
//                   className="group flex items-center justify-between gap-5 border-b border-[#6055A6]/15 py-7"
//                 >

//                   <div className="flex items-center gap-5">

//                     <span className="text-[9px] font-black text-[#6055A6]">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <span className="text-lg font-black tracking-[-.025em]">
//                       {item}
//                     </span>

//                   </div>

//                   <ArrowUpRight
//                     size={17}
//                     className="shrink-0 text-[#6055A6] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           CONTACT INFORMATION
//       ===================================================== */}

//       <section className="bg-white">

//         <div className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">

//           <div className="grid border border-[#6055A6]/20 md:grid-cols-3">

//             {/* ADDRESS */}

//             <div className="p-7 sm:p-9 lg:p-10">

//               <div className="flex h-11 w-11 items-center justify-center bg-[#6055A6] text-white">
//                 <MapPin size={17} />
//               </div>

//               <span className="mt-7 block text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 Local Address
//               </span>

//               <p className="mt-4 text-base font-black leading-7">
//                 {LOCAL.address}
//               </p>

//             </div>


//             {/* PHONE */}

//             <div className="border-t border-[#6055A6]/20 p-7 sm:p-9 md:border-l md:border-t-0 lg:p-10">

//               <div className="flex h-11 w-11 items-center justify-center bg-[#6055A6] text-white">
//                 <Phone size={17} />
//               </div>

//               <span className="mt-7 block text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 Phone
//               </span>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-4 block text-base font-black transition hover:text-[#6055A6]"
//               >
//                 {LOCAL.phoneDisplay}
//               </a>

//             </div>


//             {/* EMAIL */}

//             <div className="border-t border-[#6055A6]/20 p-7 sm:p-9 md:border-l md:border-t-0 lg:p-10">

//               <div className="flex h-11 w-11 items-center justify-center bg-[#6055A6] text-white">
//                 <Mail size={17} />
//               </div>

//               <span className="mt-7 block text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 Email
//               </span>

//               <a
//                 href={`mailto:${LOCAL.email}`}
//                 className="mt-4 block break-all text-base font-black transition hover:text-[#6055A6]"
//               >
//                 {LOCAL.email}
//               </a>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="bg-[#6055A6] text-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid items-end gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">

//             <div>

//               <span className="text-[9px] font-black uppercase tracking-[.3em] text-white/60">
//                 06 — Get Started
//               </span>

//               <h2 className="mt-6 max-w-4xl text-[54px] font-black leading-[.86] tracking-[-.065em] sm:text-[78px]">
//                 Got a pest
//                 <br />
//                 problem?

//                 <span className="block text-white/55">
//                   Let's talk.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-xl text-sm leading-8 text-white/70 sm:text-base">
//                 Tell us what you've noticed around your property
//                 and our local team can help you understand the
//                 next practical step.
//               </p>

//             </div>


//             <div className="flex flex-col gap-3">

//               <Link
//                 to="/contact-us"
//                 className="group flex min-h-[60px] min-w-[250px] items-center justify-between gap-10 bg-white px-7 text-[9px] font-black uppercase tracking-[.18em] text-[#111111] transition hover:-translate-y-1"
//               >
//                 Contact Our Team

//                 <ArrowRight
//                   size={16}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </Link>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="group flex min-h-[60px] items-center justify-between gap-7 border border-white/35 px-7 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:bg-white hover:text-[#111111]"
//               >

//                 <span className="flex items-center gap-3">
//                   <Phone size={15} />
//                   {LOCAL.phoneDisplay}
//                 </span>

//                 <ArrowUpRight
//                   size={15}
//                   className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />

//               </a>

//             </div>

//           </div>


      

//         </div>

//       </section>

//     </main>
//   );
// };

// export default About;






















import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  Phone,
  ShieldCheck,
  Search,
  Target,
  Wrench,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const LOCAL = {
    company: "Superguard Services Isleworth",
    shortName: "Superguard Isleworth",
    area: "Isleworth",
    city: "London",
    postcode: "TW7 7HG",
    address: "71 Talbot Rd, Isleworth TW7 7HG, United Kingdom",
    phoneDisplay: "7405 940152",
    phoneTel: "+447405940152",
  };

  const principles = [
    {
      icon: Search,
      title: "We look at the whole situation",
      text: "Where activity is appearing, what signs are present and what is happening around the property can all help shape the right response.",
    },
    {
      icon: Target,
      title: "We focus on the cause",
      text: "Access points, harbourage and property conditions can influence pest activity, so the surrounding environment matters.",
    },
    {
      icon: Wrench,
      title: "We plan practical control",
      text: "Treatment should reflect the pest, the property and the circumstances rather than relying on the same response for every situation.",
    },
    {
      icon: Leaf,
      title: "We think beyond treatment",
      text: "Where appropriate, practical prevention advice can help reduce conditions that may contribute to future pest activity.",
    },
  ];

  const serviceGroups = [
    {
      title: "Insect Control",
      description:
        "Solutions for common indoor and outdoor insect activity.",
      services: [
        "Ant Control",
        "Bed Bug Treatment",
        "Carpet Moth Treatment",
        "Carpet Beetle Control",
        "Cockroach Control",
        "Flea Treatment",
        "Wasp Nest Control",
        "Bee Activity Support",
      ],
    },
    {
      title: "Rodent & Wildlife",
      description:
        "Support for rodents and selected wildlife-related problems.",
      services: [
        "Rats & Mice Control",
        "Squirrel Control",
      ],
    },
    {
      title: "Birds & Prevention",
      description:
        "Property-focused measures for birds and pest access.",
      services: [
        "Bird Control",
        "Property Proofing",
      ],
    },
  ];

  const propertyTypes = [
    "Homes & flats",
    "Rental properties",
    "Landlord properties",
    "Offices & workplaces",
    "Retail premises",
    "Commercial buildings",
  ];

  return (
    <main className="mt-20 overflow-hidden bg-[#F7F6FA] text-[#15131A]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="bg-[#F7F6FA]">
        <div className="mx-auto max-w-[1540px] px-5 pb-20 pt-8 sm:px-8 lg:px-12 lg:pb-28 lg:pt-12">

          <div className="grid gap-8 lg:grid-cols-[1.08fr_.92fr]">

            {/* MAIN IMAGE PANEL */}
            <div className="relative min-h-[580px] overflow-hidden bg-[#24212D] sm:min-h-[680px] lg:min-h-[760px]">

              <img
                src="/images/about-story.webp"
                alt={`${LOCAL.company} pest control`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/95 via-[#15131A]/20 to-transparent" />

              {/* floating location */}
              <div className="absolute left-5 top-5 flex items-center gap-3 bg-white px-4 py-3 shadow-lg sm:left-7 sm:top-7">
                <MapPin
                  size={15}
                  className="text-[#6055A6]"
                />

                <span className="text-[9px] font-black uppercase tracking-[.18em] text-[#24212D]">
                  {LOCAL.area} · {LOCAL.postcode}
                </span>
              </div>

              {/* image copy */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14">

                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[8px] font-black uppercase tracking-[.25em] text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A59ED8]" />
                  Local pest control
                </span>

                <h1 className="mt-5 max-w-3xl text-[48px] font-black leading-[.94] tracking-[-.055em] text-white sm:text-[65px] lg:text-[76px]">
                  A cleaner approach
                  <span className="block text-[#A59ED8]">
                    to pest problems.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  Professional pest control support for homes,
                  landlords, businesses and commercial properties
                  throughout {LOCAL.area} and surrounding London areas.
                </p>

              </div>
            </div>


            {/* HERO INFORMATION */}
            <div className="flex flex-col gap-8">

              {/* Intro card */}
              <div className="flex-1 bg-white p-7 shadow-[0_18px_55px_rgba(36,33,45,.06)] sm:p-10 lg:p-12">

                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                    About the company
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F6FA] text-[#6055A6]">
                    <ShieldCheck size={18} />
                  </div>
                </div>

                <h2 className="mt-10 max-w-xl text-[39px] font-black leading-[.95] tracking-[-.055em] sm:text-[51px]">
                  Pest control that starts with
                  <span className="text-[#6055A6]">
                    {" "}understanding.
                  </span>
                </h2>

                <p className="mt-7 max-w-lg text-sm leading-8 text-[#6C6972]">
                  At {LOCAL.company}, we believe a pest problem
                  deserves more than a quick reaction. The property,
                  the activity and the conditions around it all form
                  part of the picture.
                </p>

                <p className="mt-5 max-w-lg text-sm leading-8 text-[#85818A]">
                  Our role is to help make that picture clearer and
                  identify a practical route forward.
                </p>

                <Link
                  to="/contact-us"
                  className="group mt-9 inline-flex items-center gap-5 rounded-full bg-[#6055A6] px-7 py-4 text-[9px] font-black uppercase tracking-[.18em] text-white transition duration-300 hover:bg-[#51478F] hover:shadow-lg"
                >
                  Talk to Superguard
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>


              {/* Phone card */}
              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="group flex items-center justify-between gap-5 bg-[#24212D] p-6 text-white transition duration-300 hover:bg-[#6055A6] sm:p-8"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Phone size={18} />
                  </div>

                  <div>
                    <span className="block text-[8px] font-black uppercase tracking-[.25em] text-white/40">
                      Speak with the local team
                    </span>

                    <span className="mt-1 block text-xl font-black tracking-[-.025em]">
                      {LOCAL.phoneDisplay}
                    </span>
                  </div>

                </div>

                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </a>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          TRUST / INTRO BAND
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="grid items-start gap-10 lg:grid-cols-[.55fr_1.45fr]">

            <div>
              <span className="inline-flex rounded-full bg-[#F7F6FA] px-4 py-2 text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
                Our approach
              </span>

              <p className="mt-5 max-w-xs text-sm leading-7 text-[#77747D]">
                A pest problem can look simple from the outside.
                The conditions behind it often tell a bigger story.
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-[38px] font-black leading-[1.02] tracking-[-.055em] sm:text-[53px] lg:text-[67px]">
                We don't just ask
                <span className="text-[#6055A6]">
                  {" "}“what pest is this?”
                </span>
                <br className="hidden sm:block" />
                We ask what is allowing it to happen.
              </h2>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          FOUR APPROACH CARDS
      ========================================================= */}

      <section className="bg-[#F7F6FA]">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                How we think
              </span>

              <h2 className="mt-4 text-[39px] font-black leading-none tracking-[-.05em] sm:text-[52px]">
                A considered process.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#77747D]">
              From identifying the activity to considering what
              may help prevent it from continuing, each stage has
              a practical purpose.
            </p>

          </div>


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group min-h-[340px] bg-white p-7 shadow-[0_12px_45px_rgba(36,33,45,.045)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(36,33,45,.10)] sm:p-8"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F6FA] text-[#6055A6] transition group-hover:bg-[#6055A6] group-hover:text-white">
                      <Icon size={19} />
                    </div>

                    <span className="text-[9px] font-black text-[#C8C5CF]">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-12 text-xl font-black leading-tight tracking-[-.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#77747D]">
                    {item.text}
                  </p>

                  <div className="mt-8 h-1 w-8 rounded-full bg-[#6055A6] transition-all duration-500 group-hover:w-16" />

                </article>
              );
            })}

          </div>
        </div>
      </section>


      {/* =========================================================
          IMAGE STORY
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">

            {/* image */}
            <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#24212D] sm:min-h-[650px]">

              <img
                src="/images/about-superguard-banner.webp"
                alt={`${LOCAL.company} pest control services`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-[#24212D]/80 p-6 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-8">

                <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
                  Local knowledge
                </span>

                <p className="mt-3 text-lg font-black leading-tight text-white sm:text-xl">
                  Understanding the property is part of understanding
                  the pest problem.
                </p>

              </div>

            </div>


            {/* text */}
            <div className="flex flex-col justify-center lg:pl-10">

              <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                What we value
              </span>

              <h2 className="mt-5 max-w-2xl text-[42px] font-black leading-[.94] tracking-[-.055em] sm:text-[58px]">
                Clear answers are
                <span className="text-[#6055A6]">
                  {" "}part of good service.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#6F6C75] sm:text-base">
                When someone discovers pest activity, they usually
                want two things: to understand what is happening
                and to know what they can do next.
              </p>

              <div className="mt-10 space-y-4">

                {[
                  "Straightforward explanations",
                  "Property-aware thinking",
                  "Practical control options",
                  "Relevant prevention guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-xl bg-[#F7F6FA] px-5 py-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
                      <Check size={13} />
                    </span>

                    <span className="text-sm font-bold text-[#3E3B44]">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="bg-[#24212D] text-white">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <span className="inline-flex rounded-full border border-white/10 px-4 py-2 text-[8px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
                Pest services
              </span>

              <h2 className="mt-6 max-w-lg text-[42px] font-black leading-[.93] tracking-[-.055em] sm:text-[58px]">
                Different problems
                <span className="block text-[#A59ED8]">
                  need different responses.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-white/50">
                Superguard supports a range of common pest
                control requirements for residential, rental and
                commercial properties.
              </p>

              <Link
                to="/services"
                className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#6055A6] px-7 py-4 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#51478F]"
              >
                Explore services
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>


            <div className="space-y-4">

              {serviceGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[22px] border border-white/10 bg-white/[.045] p-6 transition duration-300 hover:border-[#A59ED8]/40 hover:bg-white/[.07] sm:p-8"
                >

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                    <div>
                      <h3 className="text-2xl font-black tracking-[-.035em]">
                        {group.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                        {group.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 text-[#A59ED8]"
                    />

                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">

                    {group.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2.5 text-[10px] font-bold text-white/65"
                      >
                        {service}
                      </span>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          PROPERTY TYPES
      ========================================================= */}

      <section className="bg-[#F7F6FA]">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

            <div>

              <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                Who we work with
              </span>

              <h2 className="mt-5 max-w-lg text-[42px] font-black leading-[.94] tracking-[-.055em] sm:text-[58px]">
                Built around
                <span className="block text-[#6055A6]">
                  the property.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-[#77747D]">
                Whether the issue is at home, in a rental property
                or within a workplace, the surrounding conditions
                can influence how pest activity develops.
              </p>

            </div>


            <div className="grid gap-3 sm:grid-cols-2">

              {propertyTypes.map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-[120px] items-end justify-between rounded-2xl bg-white p-6 shadow-[0_10px_35px_rgba(36,33,45,.04)]"
                >

                  <div>
                    <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#A59ED8]">
                      Property
                    </span>

                    <h3 className="mt-3 text-base font-black tracking-[-.025em]">
                      {item}
                    </h3>
                  </div>

                  <span className="text-[9px] font-black text-[#D2CFD8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          LOCAL IDENTITY
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="relative overflow-hidden rounded-[32px] bg-[#6055A6] p-7 text-white sm:p-10 lg:p-14">

            {/* decorative shapes */}
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/15" />
            <div className="absolute -right-4 -top-4 h-52 w-52 rounded-full border border-white/10" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_.75fr] lg:items-end">

              <div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <MapPin size={17} />
                  </div>

                  <span className="text-[8px] font-black uppercase tracking-[.27em] text-white/60">
                    Local base
                  </span>
                </div>

                <h2 className="mt-7 max-w-3xl text-[43px] font-black leading-[.94] tracking-[-.06em] sm:text-[62px]">
                  Proudly based in
                  <span className="block text-white/55">
                    {LOCAL.area}.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-sm leading-8 text-white/70">
                  {LOCAL.company} is based at {LOCAL.address}
                  and provides pest control support throughout
                  {` ${LOCAL.area}`} and surrounding London areas.
                </p>

              </div>


              <div className="rounded-[22px] bg-[#24212D] p-7 sm:p-8">

                <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
                  Contact details
                </span>

                <div className="mt-6 space-y-5">

                  <div>
                    <span className="block text-[8px] font-black uppercase tracking-[.2em] text-white/30">
                      Address
                    </span>

                    <span className="mt-2 block text-sm font-bold leading-6 text-white/80">
                      {LOCAL.address}
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <span className="block text-[8px] font-black uppercase tracking-[.2em] text-white/30">
                      Phone
                    </span>

                    <a
                      href={`tel:${LOCAL.phoneTel}`}
                      className="mt-2 block text-xl font-black text-white transition hover:text-[#A59ED8]"
                    >
                      {LOCAL.phoneDisplay}
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-[#F7F6FA]">
        <div className="mx-auto max-w-[1540px] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">

          <div className="rounded-[30px] bg-white p-7 shadow-[0_20px_70px_rgba(36,33,45,.07)] sm:p-10 lg:p-14">

            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                  Need some help?
                </span>

                <h2 className="mt-5 max-w-3xl text-[42px] font-black leading-[.94] tracking-[-.055em] sm:text-[59px]">
                  Tell us what you've
                  <span className="text-[#6055A6]">
                    {" "}noticed.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-[#77747D]">
                  Share the pest problem, the property and what
                  you've seen so far. We can then discuss the
                  appropriate next step.
                </p>

              </div>


              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

                <Link
                  to="/contact-us"
                  className="group flex min-h-[56px] min-w-[235px] items-center justify-between gap-8 rounded-full bg-[#6055A6] px-6 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#51478F]"
                >
                  Contact Superguard
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="group flex min-h-[56px] min-w-[235px] items-center justify-between gap-6 rounded-full border border-[#6055A6]/20 px-6 text-[9px] font-black uppercase tracking-[.18em] text-[#24212D] transition hover:border-[#6055A6] hover:text-[#6055A6]"
                >
                  <span className="flex items-center gap-3">
                    <Phone size={14} />
                    {LOCAL.phoneDisplay}
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default About;



