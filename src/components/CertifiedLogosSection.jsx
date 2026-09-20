



// import React from "react";
// import {
//   ShieldCheck,
//   Award,
//   ShieldAlert,
//   FileCheck,
//   CheckCircle2,
// } from "lucide-react";

// export default function CertifiedLogosSection() {
//   const certifications = [
//     { name: "BPCA", label: "British Pest Control Association", icon: ShieldCheck },
//     { name: "CEPA", label: "Certified European Standards", icon: Award },
//     { name: "NPTA", label: "National Pest Technicians", icon: ShieldAlert },
//     { name: "PROMPT", label: "Basis Professional Register", icon: FileCheck },
//     { name: "RSPH", label: "Royal Society for Public Health", icon: CheckCircle2 },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#5F52B5] py-20 md:py-24">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute left-[-120px] top-[-100px] h-96 w-96 rounded-full bg-white/15 blur-3xl" />
//         <div className="absolute right-[-140px] bottom-[-120px] h-[460px] w-[460px] rounded-full bg-[#17122F]/25 blur-3xl" />
//         <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#17122F]/20 to-transparent" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
//           <div className="max-w-3xl">
//             <span className="inline-block bg-white/15 px-5 py-3 text-[11px] font-black uppercase tracking-[0.24em] text-white backdrop-blur-xl">
//               SuperGuard Walworth Standards
//             </span>

//             <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
//               Trusted Pest Control Standards For SE17 Properties.
//             </h2>
//           </div>

//           <p className="max-w-md text-sm font-semibold leading-relaxed text-white/75">
//             Clear service standards, professional inspection methods and
//             responsible pest control support for Walworth homes and businesses.
//           </p>
//         </div>

//         <div className="grid gap-4 lg:grid-cols-5">
//           {certifications.map((cert, index) => {
//             const Icon = cert.icon;

//             return (
//               <div
//                 key={cert.name}
//                 className="group relative overflow-hidden bg-white/12 p-6 backdrop-blur-xl ring-1 ring-white/18 transition-all hover:-translate-y-1 hover:bg-white"
//               >
//                 <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-[20px] border-white/10 group-hover:border-[#5F52B5]/10" />

//                 <div className="flex h-14 w-14 items-center justify-center bg-white text-[#5F52B5] transition-all group-hover:bg-[#5F52B5] group-hover:text-white">
//                   <Icon className="h-6 w-6" strokeWidth={2.4} />
//                 </div>

//                 <span className="mt-8 block text-[10px] font-black uppercase tracking-[0.24em] text-white/55 group-hover:text-[#5F52B5]">
//                   0{index + 1}
//                 </span>

//                 <h3 className="mt-2 text-3xl font-black tracking-tight text-white group-hover:text-[#17122F]">
//                   {cert.name}
//                 </h3>

//                 <p className="mt-3 text-xs font-black uppercase leading-relaxed tracking-[0.16em] text-white/65 group-hover:text-slate-500">
//                   {cert.label}
//                 </p>

//                 <div className="mt-8 h-1 w-12 bg-white transition-all group-hover:w-24 group-hover:bg-[#5F52B5]" />
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-6 bg-white p-6 shadow-2xl shadow-[#17122F]/15">
//           <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//             <h3 className="text-2xl font-black text-[#17122F]">
//               Displayed standards supporting a professional pest control process.
//             </h3>

//             <div className="bg-[#F8F6FF] px-5 py-4">
//               <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#5F52B5]">
//                 Walworth • SE17
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }












// import React from "react";
// import {
//   Award,
//   CheckCircle2,
//   FileCheck,
//   MapPin,
//   ShieldAlert,
//   ShieldCheck,
// } from "lucide-react";

// export default function CertifiedLogosSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//     area: "Holborn",
//     postcode: "WC2R 3JF",
//     streetAddress: "50 Essex Street",
//     fullAddress: "50 Essex Street, London, WC2R 3JF",
//   };

//   const standards = [
//     {
//       number: "01",
//       name: "BPCA",
//       label: "British Pest Control Association",
//       icon: ShieldCheck,
//     },
//     {
//       number: "02",
//       name: "CEPA",
//       label: "Certified European Pest Standards",
//       icon: Award,
//     },
//     {
//       number: "03",
//       name: "NPTA",
//       label: "National Pest Technicians Association",
//       icon: ShieldAlert,
//     },
//     {
//       number: "04",
//       name: "PROMPT",
//       label: "Professional Pest Management Register",
//       icon: FileCheck,
//     },
//     {
//       number: "05",
//       name: "RSPH",
//       label: "Royal Society for Public Health",
//       icon: CheckCircle2,
//     },
//   ];

//   return (
//     <section
//       aria-labelledby="standards-heading"
//       className="relative overflow-hidden bg-[#6157A7] py-20 font-sans text-white sm:py-24 lg:py-28"
//     >
//       {/* SOFT WHITE GLOWS */}
//       <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-white/10 blur-[150px]" />

//       <div className="pointer-events-none absolute -bottom-48 -right-36 h-[480px] w-[480px] rounded-full bg-white/10 blur-[130px]" />

//       <div className="pointer-events-none absolute -left-48 bottom-[-220px] h-[500px] w-[500px] rounded-full bg-[#302A63]/20 blur-[140px]" />

//       {/* SUBTLE GRID */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.05]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
//           backgroundSize: "74px 74px",
//         }}
//       />

//       {/* GIANT BACKGROUND WORD */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none whitespace-nowrap text-[80px] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[135px] lg:text-[205px] xl:text-[245px]"
//       >
//         Standards
//       </div>

//       {/* DECORATIVE CURVES */}
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 1600 800"
//         preserveAspectRatio="none"
//         className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
//       >
//         <path
//           d="M-120 610C230 350 490 340 780 500C1060 655 1320 570 1710 210"
//           fill="none"
//           stroke="rgba(255,255,255,0.18)"
//           strokeWidth="1.3"
//         />

//         <path
//           d="M-150 700C250 430 520 430 810 575C1100 720 1390 645 1740 340"
//           fill="none"
//           stroke="rgba(255,255,255,0.09)"
//           strokeWidth="1"
//         />
//       </svg>

//       <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14">
//         {/* TOP LOCATION LINE */}
//         <div className="flex flex-col items-center gap-4 border-b border-white/20 pb-6 text-center sm:flex-row sm:justify-between sm:text-left">
//           <div className="flex items-center gap-3">
//             <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />

//             <span className="text-[9px] font-black uppercase tracking-[0.24em] text-white/85 sm:text-[10px]">
//               SuperGuard Holborn Standards
//             </span>
//           </div>

//           <div className="flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.14em] text-white/65 sm:text-[10px] sm:tracking-[0.17em]">
//             <MapPin
//               size={15}
//               strokeWidth={2.4}
//               className="shrink-0 text-white"
//             />

//             {LOCAL.fullAddress}
//           </div>
//         </div>

//         {/* CENTERED HEADING */}
//         <div className="mx-auto mt-14 max-w-[950px] text-center lg:mt-16">
//           <div className="flex items-center justify-center gap-4">
//             <span className="h-px w-10 bg-white/60 sm:w-16" />

//             <span className="text-[9px] font-black uppercase tracking-[0.28em] text-white/75 sm:text-[10px]">
//               Professional Service Principles
//             </span>

//             <span className="h-px w-10 bg-white/60 sm:w-16" />
//           </div>

//           <h2
//             id="standards-heading"
//             className="mt-6 text-[42px] font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-[56px] md:text-[68px] lg:text-[78px]"
//           >
//             Standards Supporting
//             <span className="block text-[#E7E3FF]">
//               A Careful Pest Control
//             </span>
//             Process.
//           </h2>

//           <p className="mx-auto mt-7 max-w-3xl text-sm font-medium leading-7 text-white/75 sm:text-base sm:leading-8">
//             Our approach focuses on responsible inspection, considered
//             treatment planning and practical prevention support for homes,
//             landlords and businesses throughout Holborn and Central London.
//           </p>
//         </div>

//         {/* STANDARDS RAIL */}
//         <div className="relative mt-14 lg:mt-20">
//           {/* DESKTOP CONNECTING LINE */}
//           <div className="absolute left-[7%] right-[7%] top-[62px] hidden h-px bg-gradient-to-r from-transparent via-white/40 to-transparent lg:block" />

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
//             {standards.map((standard, index) => {
//               const Icon = standard.icon;

//               return (
//                 <article
//                   key={standard.name}
//                   className={`group relative flex flex-col items-center px-5 py-7 text-center sm:py-8 lg:px-6 ${
//                     index !== standards.length - 1
//                       ? "lg:border-r lg:border-white/15"
//                       : ""
//                   }`}
//                 >
//                   {/* NUMBER */}
//                   <span className="absolute right-5 top-4 text-[10px] font-black tracking-[0.2em] text-white/25 lg:right-6">
//                     {standard.number}
//                   </span>

//                   {/* CIRCULAR EMBLEM */}
//                   <div className="relative z-10 flex h-[124px] w-[124px] items-center justify-center rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/70 group-hover:bg-white group-hover:shadow-[0_25px_65px_rgba(32,26,74,0.28)]">
//                     {/* ROTATING BORDER */}
//                     <div className="absolute inset-[8px] rounded-full border border-dashed border-white/25 transition-transform duration-700 group-hover:rotate-45 group-hover:border-[#6157A7]/25" />

//                     <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white text-[#6157A7] shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#6157A7] group-hover:text-white">
//                       <Icon
//                         size={30}
//                         strokeWidth={2.2}
//                       />
//                     </div>

//                     <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)]" />
//                   </div>

//                   {/* ACRONYM */}
//                   <h3 className="mt-7 text-3xl font-black tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#E7E3FF]">
//                     {standard.name}
//                   </h3>

//                   {/* FULL NAME */}
//                   <p className="mt-3 max-w-[190px] text-[10px] font-black uppercase leading-5 tracking-[0.14em] text-white/55 transition-colors duration-300 group-hover:text-white">
//                     {standard.label}
//                   </p>

//                   {/* BOTTOM LINE */}
//                   <div className="mt-6 h-px w-10 bg-white/40 transition-all duration-500 group-hover:w-20 group-hover:bg-white" />
//                 </article>
//               );
//             })}
//           </div>
//         </div>

//         {/* BOTTOM SUMMARY PANEL */}
//         <div className="relative mt-12 overflow-hidden border border-white/20 bg-white/[0.09] px-6 py-7 backdrop-blur-md sm:px-8 lg:mt-16 lg:px-10">
//           <div className="pointer-events-none absolute -right-12 -top-20 h-52 w-52 rounded-full border-[34px] border-white/[0.05]" />

//           <div className="relative flex flex-col items-center gap-7 text-center lg:flex-row lg:justify-between lg:text-left">
//             <div className="max-w-3xl">
//               <span className="text-[9px] font-black uppercase tracking-[0.24em] text-white/65">
//                 Our Service Commitment
//               </span>

//               <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-white sm:text-3xl">
//                 Professional standards supporting inspection, treatment and
//                 long-term prevention.
//               </h3>
//             </div>

//             <div className="shrink-0 border border-white/25 bg-white/10 px-6 py-4">
//               <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/55">
//                 Local Coverage
//               </span>

//               <span className="mt-1 block text-sm font-black uppercase tracking-[0.13em] text-white">
//                 Holborn • WC2R 3JF
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM BUSINESS LINE */}
//         <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
//           <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white/45">
//             {LOCAL.company}
//           </span>

//           <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white/45">
//             Residential • Commercial • Inspection • Prevention
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }














import React from "react";
import {
  Activity,
  Award,
  Building2,
  CheckCircle2,
  FileCheck,
  MapPin,
  Radar,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

export default function CertifiedLogosSection() {
  const LOCAL = {
    company: "SuperGuard Services Westminster",
    shortName: "SuperGuard Westminster",
    area: "Westminster",
    city: "London",
    postcode: "SW1P 4BD",
    streetAddress: "14 Regency St",
    fullAddress: "14 Regency St, London SW1P 4BD",
    phoneDisplay: "07466 936103",
    phoneTel: "+447466936103",
  };

  const standards = [
    {
      number: "01",
      name: "BPCA",
      label: "British Pest Control Association",
      icon: ShieldCheck,
      position:
        "left-[2%] top-[7%] xl:left-[4%] xl:top-[10%]",
      connector:
        "left-[22%] top-[25%] w-[27%] rotate-[18deg]",
    },
    {
      number: "02",
      name: "CEPA",
      label: "European Pest Management Standard",
      icon: Award,
      position:
        "right-[2%] top-[7%] xl:right-[4%] xl:top-[10%]",
      connector:
        "right-[22%] top-[25%] w-[27%] -rotate-[18deg]",
    },
    {
      number: "03",
      name: "NPTA",
      label: "National Pest Technicians Association",
      icon: ShieldAlert,
      position:
        "left-[1%] bottom-[7%] xl:left-[5%] xl:bottom-[10%]",
      connector:
        "bottom-[27%] left-[22%] w-[28%] -rotate-[18deg]",
    },
    {
      number: "04",
      name: "PROMPT",
      label: "Professional Pest Management Register",
      icon: FileCheck,
      position:
        "right-[1%] bottom-[7%] xl:right-[5%] xl:bottom-[10%]",
      connector:
        "bottom-[27%] right-[22%] w-[28%] rotate-[18deg]",
    },
    {
      number: "05",
      name: "RSPH",
      label: "Royal Society for Public Health",
      icon: CheckCircle2,
      position:
        "left-1/2 bottom-[-2%] -translate-x-1/2",
      connector:
        "bottom-[21%] left-1/2 h-[15%] w-px -translate-x-1/2",
    },
  ];

  const principles = [
    {
      code: "SCAN",
      title: "Careful assessment",
      text: "Property conditions and visible pest activity are considered before the service response is planned.",
    },
    {
      code: "PLAN",
      title: "Targeted response",
      text: "Treatment decisions are based on the pest involved, the affected space and the evidence identified.",
    },
    {
      code: "GUIDE",
      title: "Practical prevention",
      text: "Customers receive clear recommendations intended to support better protection around the property.",
    },
  ];

  return (
    <section
      aria-labelledby="standards-heading"
      className="relative overflow-hidden bg-[#100D19] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* BACKGROUND TECHNICAL GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute left-1/2 top-[25%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#6254B4]/20 blur-[150px]" />

      <div className="pointer-events-none absolute -left-52 bottom-[-200px] h-[500px] w-[500px] rounded-full border-[90px] border-white/[0.025]" />

      <div className="pointer-events-none absolute -right-44 top-0 h-[420px] w-[420px] rounded-full bg-[#6254B4]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10">
        {/* COMMAND HEADER */}
        <div className="grid gap-7 border-y border-white/10 py-6 lg:grid-cols-[0.65fr_1fr_auto] lg:items-center">
          <div className="flex items-center gap-4">
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#8D80DF]/50 bg-[#6254B4]/20 text-[#BEB5FF]">
              <Radar
                size={22}
                strokeWidth={2.4}
                className="animate-[spin_9s_linear_infinite]"
              />

              <span className="absolute h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]" />
            </span>

            <div>
              <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-[#AFA5F8]">
                Standards Command Centre
              </span>

              <span className="mt-1 block text-xs font-black text-white">
                SuperGuard Services Westminster
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[8px] font-black uppercase tracking-[0.18em] text-white/40 lg:justify-center">
            <span>System: Active</span>
            <span className="h-1 w-1 rounded-full bg-[#8F82E1]" />
            <span>Sector: Pest Management</span>
            <span className="h-1 w-1 rounded-full bg-[#8F82E1]" />
            <span>Zone: Westminster</span>
          </div>

          <div className="flex items-center gap-3 lg:justify-end">
            <MapPin
              size={15}
              strokeWidth={2.6}
              className="shrink-0 text-[#AFA5F8]"
            />

            <span className="text-[9px] font-black uppercase tracking-[0.15em] text-white/65">
              {LOCAL.fullAddress}
            </span>
          </div>
        </div>

        {/* HEADING */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.28em] text-[#AFA5F8]">
              <Activity size={16} strokeWidth={2.5} />
              Service Framework
            </span>

            <p className="mb-0 mt-5 max-w-sm text-sm font-medium leading-7 text-white/50">
              A structured pest control approach built around assessment,
              considered action and practical property guidance.
            </p>
          </div>

          <h2
            id="standards-heading"
            className="max-w-[950px] text-[42px] font-black leading-[0.94] tracking-[-0.055em] text-white sm:text-[60px] lg:text-[76px]"
          >
            Professional reference points
            <span className="block text-[#8F82E1]">
              behind a controlled process.
            </span>
          </h2>
        </div>

        {/* DESKTOP COMMAND MAP */}
        <div className="relative mt-16 hidden min-h-[750px] lg:block">
          {/* OUTER RADAR RINGS */}
          <div className="absolute left-1/2 top-[46%] h-[610px] w-[610px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />

          <div className="absolute left-1/2 top-[46%] h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8F82E1]/20" />

          <div className="absolute left-1/2 top-[46%] h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

          {/* RADAR AXES */}
          <div className="absolute left-1/2 top-[5%] h-[82%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />

          <div className="absolute left-[16%] right-[16%] top-[46%] h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          {/* ROTATING SCANNER */}
          <div className="pointer-events-none absolute left-1/2 top-[46%] h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite] rounded-full">
            <div className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left bg-gradient-to-r from-[#8F82E1]/50 to-transparent" />

            <div className="absolute left-[74%] top-[49.2%] h-2.5 w-2.5 rounded-full bg-[#B7AEFF] shadow-[0_0_22px_rgba(183,174,255,0.95)]" />
          </div>

          {/* CONNECTOR LINES */}
          {standards.map((standard) => (
            <div
              key={`line-${standard.name}`}
              className={`absolute bg-gradient-to-r from-transparent via-[#8F82E1]/35 to-transparent ${
                standard.name === "RSPH"
                  ? standard.connector
                  : `h-px ${standard.connector}`
              }`}
            />
          ))}

          {/* CENTRAL PROTECTION CORE */}
          <div className="absolute left-1/2 top-[46%] flex h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="absolute inset-0 animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-[#8F82E1]/35" />

            <div className="absolute inset-[22px] animate-[spin_22s_linear_infinite_reverse] rounded-full border border-white/10" />

            <div className="absolute inset-[45px] rounded-full bg-[#6254B4]/20 blur-2xl" />

            <div className="relative flex h-[190px] w-[190px] flex-col items-center justify-center rounded-full border border-[#AFA5F8]/40 bg-[#181329]/90 text-center shadow-[0_0_90px_rgba(98,84,180,0.35)] backdrop-blur-xl">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6254B4] text-white shadow-[0_16px_40px_rgba(98,84,180,0.35)]">
                <ShieldCheck size={30} strokeWidth={2.4} />
              </span>

              <span className="mt-5 text-[8px] font-black uppercase tracking-[0.25em] text-[#AFA5F8]">
                Protection Core
              </span>

              <span className="mt-2 text-sm font-black leading-5 text-white">
                SuperGuard
                <br />
                Westminster
              </span>
            </div>
          </div>

          {/* STANDARD NODES */}
          {standards.map((standard) => {
            const Icon = standard.icon;

            return (
              <article
                key={standard.name}
                className={`group absolute w-[235px] ${standard.position}`}
              >
                <div className="relative overflow-hidden border border-white/10 bg-[#171321]/90 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#8F82E1]/55 hover:bg-[#211A35] hover:shadow-[0_25px_70px_rgba(0,0,0,0.28)]">
                  {/* NODE CORNER */}
                  <span className="absolute right-4 top-4 text-[9px] font-black tracking-[0.2em] text-white/20">
                    {standard.number}
                  </span>

                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#8F82E1]/30 bg-[#6254B4]/15 text-[#B6ADFF] transition-all duration-500 group-hover:bg-[#6254B4] group-hover:text-white">
                      <Icon size={21} strokeWidth={2.5} />
                    </span>

                    <div>
                      <span className="block text-2xl font-black tracking-[-0.04em] text-white">
                        {standard.name}
                      </span>

                      <span className="mt-1 block text-[7px] font-black uppercase tracking-[0.18em] text-[#8F82E1]">
                        Reference Node
                      </span>
                    </div>
                  </div>

                  <p className="mb-0 mt-5 border-t border-white/10 pt-4 text-[9px] font-bold uppercase leading-5 tracking-[0.11em] text-white/45 transition-colors duration-300 group-hover:text-white/70">
                    {standard.label}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[7px] font-black uppercase tracking-[0.17em] text-white/25">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8F82E1] shadow-[0_0_10px_rgba(143,130,225,0.9)]" />
                      Signal detected
                    </span>

                    <span className="h-px w-8 bg-[#8F82E1]/40 transition-all duration-500 group-hover:w-14" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* MOBILE / TABLET SCAN LIST */}
        <div className="relative mt-12 lg:hidden">
          <div className="absolute bottom-8 left-[25px] top-8 w-px bg-gradient-to-b from-[#8F82E1] via-[#8F82E1]/30 to-transparent" />

          <div className="space-y-4">
            {standards.map((standard) => {
              const Icon = standard.icon;

              return (
                <article
                  key={standard.name}
                  className="group relative grid grid-cols-[52px_1fr] gap-4"
                >
                  <span className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border-[5px] border-[#100D19] bg-[#6254B4] text-white">
                    <Icon size={20} strokeWidth={2.5} />
                  </span>

                  <div className="border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8F82E1]">
                          Reference {standard.number}
                        </span>

                        <h3 className="mt-2 text-2xl font-black text-white">
                          {standard.name}
                        </h3>
                      </div>

                      <span className="h-2 w-2 rounded-full bg-[#8F82E1] shadow-[0_0_12px_rgba(143,130,225,0.95)]" />
                    </div>

                    <p className="mb-0 mt-3 text-[10px] font-bold uppercase leading-5 tracking-[0.12em] text-white/45">
                      {standard.label}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* SERVICE PRINCIPLES CONSOLE */}
        <div className="mt-20 border-t border-white/10 pt-10 lg:mt-10">
          <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr]">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#AFA5F8]">
                Operational Principles
              </span>

              <h3 className="mt-4 text-3xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-4xl">
                The service method behind every response.
              </h3>
            </div>

            <div className="border-y border-white/10">
              {principles.map((principle, index) => (
                <div
                  key={principle.code}
                  className={`group grid gap-4 py-6 sm:grid-cols-[80px_0.55fr_1fr] sm:items-center ${
                    index !== principles.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <span className="text-[9px] font-black tracking-[0.22em] text-[#8F82E1]">
                    {principle.code}
                  </span>

                  <h4 className="m-0 text-lg font-black text-white">
                    {principle.title}
                  </h4>

                  <p className="m-0 text-xs font-medium leading-6 text-white/45 transition-colors group-hover:text-white/65">
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OPERATING BASE STRIP */}
        <div className="mt-16 overflow-hidden border border-[#8F82E1]/25 bg-[#6254B4]/10 backdrop-blur-sm">
          <div className="grid md:grid-cols-[1fr_0.75fr_0.75fr]">
            <div className="flex items-start gap-4 border-b border-[#8F82E1]/20 p-6 md:border-b-0 md:border-r lg:p-8">
              <MapPin
                size={20}
                strokeWidth={2.6}
                className="mt-0.5 shrink-0 text-[#AFA5F8]"
              />

              <div>
                <span className="block text-[8px] font-black uppercase tracking-[0.21em] text-white/35">
                  Operating Base
                </span>

                <address className="mt-2 not-italic text-sm font-black leading-6 text-white">
                  {LOCAL.fullAddress}
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b border-[#8F82E1]/20 p-6 md:border-b-0 md:border-r lg:p-8">
              <ShieldCheck
                size={20}
                strokeWidth={2.6}
                className="mt-0.5 shrink-0 text-[#AFA5F8]"
              />

              <div>
                <span className="block text-[8px] font-black uppercase tracking-[0.21em] text-white/35">
                  Service Zone
                </span>

                <span className="mt-2 block text-sm font-black leading-6 text-white">
                  Westminster & Central London
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 lg:p-8">
              <Building2
                size={20}
                strokeWidth={2.6}
                className="mt-0.5 shrink-0 text-[#AFA5F8]"
              />

              <div>
                <span className="block text-[8px] font-black uppercase tracking-[0.21em] text-white/35">
                  Property Support
                </span>

                <span className="mt-2 block text-sm font-black leading-6 text-white">
                  Residential & Commercial
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER STATUS */}
        <div className="mt-7 flex flex-col gap-3 text-[8px] font-black uppercase tracking-[0.19em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>{LOCAL.company}</span>

          <span>
            Assessment • Treatment Planning • Property Guidance
          </span>
        </div>
      </div>
    </section>
  );
}