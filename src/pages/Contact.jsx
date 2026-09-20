// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ArrowRight,
//   Bug,
//   Building2,
//   CheckCircle2,
//   ChevronDown,
//   ClipboardCheck,
//   Clock3,
//   LoaderCircle,
//   MapPin,
//   MessageSquareText,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//     area: "Holborn",
//     city: "London",
//     postcode: "WC2R 3JF",
//     streetAddress: "50 Essex Street",
//     address: "50 Essex Street, London, WC2R 3JF",
//   };

//   const services = [
//     "Rats & Mice Control",
//     "Bed Bug Treatment",
//     "Ant Control",
//     "Cockroach Control",
//     "Flea Treatment",
//     "Carpet Moth Treatment",
//     "Carpet Beetle Control",
//     "Wasp Nest Control",
//     "Bee Activity Guidance",
//     "Squirrel Control",
//     "Bird Control & Deterrents",
//     "Property Proofing",
//     "General Pest Inspection",
//   ];

//   const contactSteps = [
//     {
//       number: "01",
//       icon: MessageSquareText,
//       title: "Describe The Activity",
//       text: "Tell us what signs you have noticed and where they are appearing.",
//     },
//     {
//       number: "02",
//       icon: ClipboardCheck,
//       title: "Property Review",
//       text: "We review the property type, postcode and service requirement.",
//     },
//     {
//       number: "03",
//       icon: ShieldCheck,
//       title: "Suitable Next Step",
//       text: "Our team responds with guidance for the most appropriate service.",
//     },
//   ];

//   const propertyTypes = [
//     "Homes & Flats",
//     "Landlord Properties",
//     "Offices",
//     "Retail Premises",
//     "Commercial Buildings",
//   ];

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((currentData) => ({
//       ...currentData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (loading) {
//       return;
//     }

//     setLoading(true);

//     const loadingToast = toast.loading(
//       "Sending your enquiry..."
//     );

//     try {
//       await axios.post(
//         "http://localhost:5000/api/contact",
//         {
//           ...formData,
//           area: LOCAL.area,
//           business: LOCAL.company,
//           address: LOCAL.address,
//         }
//       );

//       toast.success(
//         "Request received. SuperGuard Holborn will contact you shortly.",
//         {
//           id: loadingToast,
//           duration: 5000,
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Contact form error:", error);

//       toast.error(
//         error?.response?.data?.message ||
//           "Something went wrong. Please try again.",
//         {
//           id: loadingToast,
//           duration: 5000,
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#F7F5FC] font-sans text-[#171327] selection:bg-[#6055A6] selection:text-white">
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           style: {
//             borderRadius: "0px",
//             background: "#171327",
//             color: "#ffffff",
//             fontWeight: "700",
//           },
//         }}
//       />

//       {/* CONTACT HERO */}
//       <section
//         itemScope
//         itemType="https://schema.org/PestControlService"
//         aria-labelledby="contact-page-heading"
//         className="relative mt-10 overflow-hidden bg-[#171327] pb-20 pt-28 text-white sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-40"
//       >
//         <meta
//           itemProp="name"
//           content={LOCAL.company}
//         />

//         <meta
//           itemProp="areaServed"
//           content={`${LOCAL.area}, Central London`}
//         />

//         <div
//           itemProp="address"
//           itemScope
//           itemType="https://schema.org/PostalAddress"
//           className="hidden"
//         >
//           <meta
//             itemProp="streetAddress"
//             content={LOCAL.streetAddress}
//           />

//           <meta
//             itemProp="addressLocality"
//             content={LOCAL.city}
//           />

//           <meta
//             itemProp="postalCode"
//             content={LOCAL.postcode}
//           />

//           <meta
//             itemProp="addressCountry"
//             content="GB"
//           />
//         </div>

//         {/* BACKGROUND */}
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_80%_18%,rgba(96,85,166,0.6),transparent_34%)]" />

//           <div className="absolute -left-56 top-24 h-[620px] w-[620px] rounded-full bg-[#6055A6]/25 blur-[150px]" />

//           <div className="absolute -bottom-64 right-[-120px] h-[620px] w-[620px] rounded-full bg-white/[0.05] blur-[150px]" />

//           <div
//             className="absolute inset-0 opacity-[0.045]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
//               backgroundSize: "78px 78px",
//             }}
//           />

//           <div
//             aria-hidden="true"
//             className="absolute left-[-45px] top-20 hidden select-none whitespace-nowrap text-[210px] font-black uppercase leading-none tracking-[-0.09em] text-white/[0.025] xl:block"
//           >
//             Contact
//           </div>
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14">
//           {/* TOP LINE */}
//           <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
//             <div className="flex items-center gap-3">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BDB6FF] opacity-50" />

//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#BDB6FF]" />
//               </span>

//               <span className="text-[9px] font-black uppercase tracking-[0.24em] text-[#C8C2FF] sm:text-[10px]">
//                 Contact SuperGuard Holborn
//               </span>
//             </div>

//             <div className="flex items-center gap-2">
//               <MapPin
//                 size={15}
//                 strokeWidth={2.5}
//                 className="shrink-0 text-[#BDB6FF]"
//               />

//               <address className="not-italic text-[9px] font-black uppercase tracking-[0.16em] text-white/55 sm:text-[10px]">
//                 {LOCAL.address}
//               </address>
//             </div>
//           </div>

//           <div className="mt-14 grid gap-12 lg:grid-cols-[0.83fr_1.17fr] lg:items-start xl:gap-16">
//             {/* LEFT CONTENT */}
//             <div className="lg:sticky lg:top-32">
//               <div className="flex items-center gap-4">
//                 <span className="h-px w-14 bg-[#BDB6FF]/60 sm:w-20" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.27em] text-[#BDB6FF] sm:text-[10px]">
//                   Property Pest Support
//                 </span>
//               </div>

//               <h1
//                 id="contact-page-heading"
//                 className="mt-7 max-w-4xl text-[48px] font-black leading-[0.91] tracking-[-0.055em] text-white sm:text-[64px] md:text-[76px] lg:text-[82px]"
//               >
//                 Tell Us What

//                 <span className="block text-[#AFA7F2]">
//                   You Have Noticed.
//                 </span>
//               </h1>

//               <p className="mt-7 max-w-xl text-sm font-medium leading-7 text-white/65 sm:text-base sm:leading-8">
//                 Share the pest signs, affected areas and property
//                 details. Our Holborn team will review your enquiry
//                 and help identify a suitable next step.
//               </p>

//               {/* PROPERTY TYPES */}
//               <div className="mt-9 border-t border-white/10 pt-7">
//                 <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/35">
//                   Property Support For
//                 </span>

//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {propertyTypes.map((type) => (
//                     <span
//                       key={type}
//                       className="border border-white/10 bg-white/[0.055] px-4 py-3 text-[9px] font-black uppercase tracking-[0.13em] text-white/75 backdrop-blur-md"
//                     >
//                       {type}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* ADDRESS PANEL */}
//               <div className="relative mt-8 overflow-hidden bg-[#6055A6] p-6 sm:p-7">
//                 <div className="pointer-events-none absolute -right-14 -top-16 h-48 w-48 rounded-full border-[34px] border-white/[0.07]" />

//                 <div className="relative z-10 flex items-start gap-4">
//                   <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#6055A6]">
//                     <MapPin
//                       size={20}
//                       strokeWidth={2.5}
//                     />
//                   </span>

//                   <div>
//                     <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/55">
//                       Holborn Base
//                     </span>

//                     <address className="mt-2 max-w-sm not-italic text-lg font-black leading-7 text-white">
//                       {LOCAL.address}
//                     </address>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* FORM PANEL */}
//             <div className="relative">
//               <div className="pointer-events-none absolute -inset-4 border border-white/[0.06]" />

//               <div className="relative overflow-hidden bg-white text-[#171327] shadow-[0_40px_120px_rgba(0,0,0,0.32)]">
//                 {/* FORM HEADER */}
//                 <div className="relative overflow-hidden border-b border-[#6055A6]/10 px-6 py-7 sm:px-8 sm:py-9 lg:px-10">
//                   <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-[#6055A6]/10 blur-[80px]" />

//                   <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
//                     <div>
//                       <span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.23em] text-[#6055A6]">
//                         <MessageSquareText
//                           size={15}
//                           strokeWidth={2.5}
//                         />

//                         Send An Enquiry
//                       </span>

//                       <h2 className="mt-4 max-w-xl text-3xl font-black leading-[0.98] tracking-[-0.04em] text-[#171327] sm:text-4xl lg:text-5xl">
//                         Request Pest Control Support.
//                       </h2>
//                     </div>

//                     <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F0EEFA] text-[#6055A6]">
//                       <Bug
//                         size={21}
//                         strokeWidth={2.4}
//                       />
//                     </span>
//                   </div>

//                   <p className="relative z-10 mt-5 max-w-2xl text-sm font-medium leading-7 text-slate-500">
//                     Complete the form with as much property and pest
//                     information as possible.
//                   </p>
//                 </div>

//                 {/* FORM */}
//                 <form
//                   onSubmit={handleSubmit}
//                   className="px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
//                 >
//                   <div className="grid gap-6 sm:grid-cols-2">
//                     <FormField
//                       label="Full Name"
//                       required
//                     >
//                       <input
//                         type="text"
//                         name="name"
//                         autoComplete="name"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your full name"
//                         className="w-full border-0 border-b border-[#6055A6]/20 bg-transparent px-0 py-4 text-sm font-bold text-[#171327] outline-none transition-colors placeholder:font-medium placeholder:text-slate-400 focus:border-[#6055A6]"
//                       />
//                     </FormField>

//                     <FormField
//                       label="Email Address"
//                       required
//                     >
//                       <input
//                         type="email"
//                         name="email"
//                         autoComplete="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email address"
//                         className="w-full border-0 border-b border-[#6055A6]/20 bg-transparent px-0 py-4 text-sm font-bold text-[#171327] outline-none transition-colors placeholder:font-medium placeholder:text-slate-400 focus:border-[#6055A6]"
//                       />
//                     </FormField>
//                   </div>

//                   <div className="mt-6 grid gap-6 sm:grid-cols-2">
//                     <FormField
//                       label="Contact Number"
//                       required
//                     >
//                       <input
//                         type="tel"
//                         name="phone"
//                         autoComplete="tel"
//                         inputMode="tel"
//                         required
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Enter your contact number"
//                         className="w-full border-0 border-b border-[#6055A6]/20 bg-transparent px-0 py-4 text-sm font-bold text-[#171327] outline-none transition-colors placeholder:font-medium placeholder:text-slate-400 focus:border-[#6055A6]"
//                       />
//                     </FormField>

//                     <FormField
//                       label="Property Postcode"
//                       required
//                     >
//                       <input
//                         type="text"
//                         name="postcode"
//                         autoComplete="postal-code"
//                         required
//                         value={formData.postcode}
//                         onChange={handleChange}
//                         placeholder={`For example, ${LOCAL.postcode}`}
//                         className="w-full border-0 border-b border-[#6055A6]/20 bg-transparent px-0 py-4 text-sm font-bold uppercase text-[#171327] outline-none transition-colors placeholder:normal-case placeholder:font-medium placeholder:text-slate-400 focus:border-[#6055A6]"
//                       />
//                     </FormField>
//                   </div>

//                   <div className="mt-6">
//                     <FormField
//                       label="Service Required"
//                       required
//                     >
//                       <div className="relative">
//                         <select
//                           name="service"
//                           required
//                           value={formData.service}
//                           onChange={handleChange}
//                           className="w-full appearance-none border-0 border-b border-[#6055A6]/20 bg-transparent px-0 py-4 pr-10 text-sm font-bold text-[#171327] outline-none transition-colors focus:border-[#6055A6]"
//                         >
//                           <option value="">
//                             Select the required service
//                           </option>

//                           {services.map((service) => (
//                             <option
//                               key={service}
//                               value={service}
//                             >
//                               {service}
//                             </option>
//                           ))}
//                         </select>

//                         <ChevronDown
//                           size={18}
//                           strokeWidth={2.4}
//                           className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#6055A6]"
//                         />
//                       </div>
//                     </FormField>
//                   </div>

//                   <div className="mt-6">
//                     <FormField
//                       label="Pest Issue Details"
//                       required
//                     >
//                       <textarea
//                         name="message"
//                         required
//                         rows={5}
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Describe the pest signs, affected rooms and when the activity started..."
//                         className="mt-3 w-full resize-none border border-[#6055A6]/15 bg-[#F7F5FC] px-5 py-4 text-sm font-semibold leading-7 text-[#171327] outline-none transition-all placeholder:font-medium placeholder:text-slate-400 focus:border-[#6055A6] focus:bg-white"
//                       />
//                     </FormField>
//                   </div>

//                   <div className="mt-7 flex items-start gap-3 bg-[#F7F5FC] px-5 py-4">
//                     <ShieldCheck
//                       size={18}
//                       strokeWidth={2.5}
//                       className="mt-0.5 shrink-0 text-[#6055A6]"
//                     />

//                     <p className="text-xs font-semibold leading-5 text-slate-500">
//                       Your information will only be used to review
//                       and respond to your pest control enquiry.
//                     </p>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="group mt-7 inline-flex min-h-16 w-full items-center justify-center gap-3 bg-[#6055A6] px-7 py-4 text-[10px] font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#171327] disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     {loading ? (
//                       <>
//                         <LoaderCircle
//                           size={18}
//                           strokeWidth={2.6}
//                           className="animate-spin"
//                         />

//                         Sending Enquiry
//                       </>
//                     ) : (
//                       <>
//                         Submit Enquiry

//                         <ArrowRight
//                           size={17}
//                           strokeWidth={2.6}
//                           className="transition-transform duration-300 group-hover:translate-x-1"
//                         />
//                       </>
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT PROCESS */}
//       <section className="relative overflow-hidden bg-[#F7F5FC] py-20 sm:py-24 lg:py-28">
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute -left-44 top-0 h-[480px] w-[480px] rounded-full bg-[#6055A6]/10 blur-[130px]" />

//           <div
//             className="absolute inset-0 opacity-[0.03]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(96,85,166,0.25) 1px, transparent 1px)",
//               backgroundSize: "100% 72px",
//             }}
//           />
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14">
//           <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
//             <div>
//               <div className="flex items-center gap-4">
//                 <span className="h-px w-14 bg-[#6055A6]/55 sm:w-20" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.27em] text-[#6055A6] sm:text-[10px]">
//                   What Happens Next
//                 </span>
//               </div>

//               <h2 className="mt-6 max-w-4xl text-[42px] font-black leading-[0.95] tracking-[-0.05em] text-[#171327] sm:text-[56px] lg:text-[68px]">
//                 A Clear Route From

//                 <span className="block text-[#6055A6]">
//                   Enquiry To Support.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-xl text-sm font-medium leading-7 text-slate-600 sm:text-base sm:leading-8">
//               The details you provide help our team understand the
//               property, pest activity and service requirement before
//               responding.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-px overflow-hidden bg-[#6055A6]/10 lg:grid-cols-3">
//             {contactSteps.map((step) => {
//               const Icon = step.icon;

//               return (
//                 <article
//                   key={step.number}
//                   className="group relative overflow-hidden bg-white p-7 transition-colors duration-300 hover:bg-[#171327] sm:p-9 lg:min-h-[360px]"
//                 >
//                   <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[32px] border-[#6055A6]/[0.035] transition-colors group-hover:border-white/[0.035]" />

//                   <div className="relative z-10 flex h-full flex-col">
//                     <div className="flex items-start justify-between gap-4">
//                       <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#6055A6] group-hover:text-[#BDB6FF]">
//                         {step.number}
//                       </span>

//                       <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F0EEFA] text-[#6055A6] transition-all duration-300 group-hover:bg-[#6055A6] group-hover:text-white">
//                         <Icon
//                           size={23}
//                           strokeWidth={2.3}
//                         />
//                       </span>
//                     </div>

//                     <div className="mt-auto pt-20">
//                       <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-[#171327] transition-colors group-hover:text-white sm:text-3xl">
//                         {step.title}
//                       </h3>

//                       <p className="mt-4 text-sm font-medium leading-7 text-slate-500 transition-colors group-hover:text-white/60">
//                         {step.text}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* LOCATION AND MAP */}
//       <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14">
//           <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
//             {/* LOCATION CONTENT */}
//             <div className="relative overflow-hidden bg-[#6055A6] p-7 text-white sm:p-9 lg:p-11">
//               <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border-[50px] border-white/[0.06]" />

//               <div className="pointer-events-none absolute -bottom-40 -left-24 h-72 w-72 rounded-full bg-[#171327]/25 blur-[100px]" />

//               <div className="relative z-10 flex h-full flex-col">
//                 <span className="inline-flex w-fit items-center gap-2 text-[9px] font-black uppercase tracking-[0.23em] text-white/60">
//                   <MapPin
//                     size={15}
//                     strokeWidth={2.5}
//                   />

//                   Holborn Location
//                 </span>

//                 <h2 className="mt-6 text-4xl font-black leading-[0.97] tracking-[-0.045em] text-white sm:text-5xl">
//                   Supporting Properties Across Holborn.
//                 </h2>

//                 <p className="mt-5 text-sm font-medium leading-7 text-white/70">
//                   Our listed Holborn address places the business in
//                   Central London, supporting residential and
//                   commercial pest control enquiries throughout the
//                   surrounding area.
//                 </p>

//                 <div className="mt-8 border-t border-white/15 pt-7">
//                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                     Business Address
//                   </span>

//                   <address className="mt-3 not-italic text-xl font-black leading-8 text-white">
//                     50 Essex Street
//                     <br />
//                     London
//                     <br />
//                     WC2R 3JF
//                   </address>
//                 </div>

//                 <div className="mt-auto pt-10">
//                   <div className="flex items-center gap-3">
//                     <Building2
//                       size={18}
//                       strokeWidth={2.4}
//                       className="text-[#D2CDFF]"
//                     />

//                     <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white/70">
//                       Residential & Commercial Support
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* MAP */}
//             <div className="relative min-h-[520px] overflow-hidden bg-[#F0EEFA]">
//               <iframe
//                 title={`${LOCAL.company} location map`}
//                 src="https://maps.google.com/maps?q=50%20Essex%20Street%2C%20London%2C%20WC2R%203JF&t=&z=16&ie=UTF8&iwloc=&output=embed"
//                 className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 allowFullScreen
//               />

//               <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#6055A6]/10" />

//               <div className="absolute bottom-5 left-5 right-5 bg-white/95 p-5 shadow-[0_20px_60px_rgba(23,19,39,0.18)] backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-md sm:p-6">
//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                     <MapPin
//                       size={19}
//                       strokeWidth={2.5}
//                     />
//                   </span>

//                   <div>
//                     <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                       SuperGuard Holborn
//                     </span>

//                     <address className="mt-2 not-italic text-sm font-black leading-6 text-[#171327]">
//                       {LOCAL.address}
//                     </address>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* BOTTOM INFORMATION */}
//           <div className="mt-8 grid gap-px overflow-hidden bg-[#6055A6]/10 md:grid-cols-3">
//             {[
//               {
//                 icon: MapPin,
//                 title: "Local Area",
//                 text: "Holborn and surrounding Central London locations.",
//               },
//               {
//                 icon: Clock3,
//                 title: "Enquiry Review",
//                 text: "Property and pest details are reviewed before response.",
//               },
//               {
//                 icon: Sparkles,
//                 title: "Service Range",
//                 text: "Support for insects, rodents, wildlife, birds and proofing.",
//               },
//             ].map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className="bg-[#F7F5FC] p-6 sm:p-7"
//                 >
//                   <Icon
//                     size={21}
//                     strokeWidth={2.4}
//                     className="text-[#6055A6]"
//                   />

//                   <span className="mt-5 block text-[9px] font-black uppercase tracking-[0.21em] text-[#6055A6]">
//                     {item.title}
//                   </span>

//                   <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
//                     {item.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function FormField({
//   label,
//   required = false,
//   children,
// }) {
//   return (
//     <label className="block">
//       <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//         {label}

//         {required && (
//           <span
//             aria-hidden="true"
//             className="ml-1 text-[#6055A6]"
//           >
//             *
//           </span>
//         )}
//       </span>

//       {children}
//     </label>
//   );
// }













// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ArrowRight,
//   Building2,
//   Check,
//   ChevronDown,
//   Clock3,
//   FileText,
//   Headphones,
//   LoaderCircle,
//   MapPin,
//   MessageSquareText,
//   Phone,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const LOCAL = {
//     company: "SuperGuard Services Westminster",
//     shortName: "SuperGuard Westminster",
//     area: "Westminster",
//     city: "London",
//     postcode: "SW1P 4BD",
//     streetAddress: "14 Regency St",
//     address: "14 Regency St, London SW1P 4BD",
//     phoneDisplay: "07466 936103",
//     phoneTel: "+447466936103",
//   };

//   const services = [
//     "Rats & Mice Control",
//     "Bed Bug Treatment",
//     "Ant Control",
//     "Cockroach Control",
//     "Flea Treatment",
//     "Carpet Moth Treatment",
//     "Carpet Beetle Control",
//     "Wasp Nest Control",
//     "Bee Activity Guidance",
//     "Squirrel Control",
//     "Bird Control & Deterrents",
//     "Property Proofing",
//     "General Pest Inspection",
//   ];

//   const enquiryStages = [
//     {
//       number: "01",
//       title: "Submit Property Details",
//       text: "Tell us about the pest signs, affected areas and property postcode.",
//       icon: FileText,
//     },
//     {
//       number: "02",
//       title: "Enquiry Review",
//       text: "Our team reviews your service requirement and the details provided.",
//       icon: MessageSquareText,
//     },
//     {
//       number: "03",
//       title: "Recommended Next Step",
//       text: "We respond with practical guidance for an appropriate pest service.",
//       icon: ShieldCheck,
//     },
//   ];

//   const propertyTypes = [
//     "Homes & Flats",
//     "Landlord Properties",
//     "Offices",
//     "Retail Premises",
//     "Commercial Buildings",
//   ];

//   const supportDetails = [
//     {
//       icon: MapPin,
//       label: "Westminster Base",
//       value: LOCAL.address,
//     },
//     {
//       icon: Phone,
//       label: "Contact Number",
//       value: LOCAL.phoneDisplay,
//       href: `tel:${LOCAL.phoneTel}`,
//     },
//     {
//       icon: Building2,
//       label: "Property Coverage",
//       value: "Residential and commercial properties",
//     },
//   ];

//   /*
//    * API AND FORM LOGIC
//    * Kept in the same structure as the original component.
//    */

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((currentData) => ({
//       ...currentData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (loading) {
//       return;
//     }

//     setLoading(true);

//     const loadingToast = toast.loading(
//       "Sending your enquiry..."
//     );

//     try {
//       await axios.post(
//         "http://localhost:5000/api/contact",
//         {
//           ...formData,
//           area: LOCAL.area,
//           business: LOCAL.company,
//           address: LOCAL.address,
//         }
//       );

//       toast.success(
//         "Request received. SuperGuard Westminster will contact you shortly.",
//         {
//           id: loadingToast,
//           duration: 5000,
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Contact form error:", error);

//       toast.error(
//         error?.response?.data?.message ||
//           "Something went wrong. Please try again.",
//         {
//           id: loadingToast,
//           duration: 5000,
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#F4F1F8] font-sans text-[#18141F] selection:bg-[#6254B4] selection:text-white">
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           style: {
//             borderRadius: "0px",
//             background: "#18141F",
//             color: "#ffffff",
//             fontWeight: "700",
//           },
//         }}
//       />

//       <style>{`
//         .sgw-contact-grid {
//           background-image:
//             linear-gradient(
//               rgba(98, 84, 180, 0.07) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(98, 84, 180, 0.07) 1px,
//               transparent 1px
//             );
//           background-size: 70px 70px;
//         }

//         .sgw-contact-dots {
//           background-image: radial-gradient(
//             circle,
//             rgba(98, 84, 180, 0.34) 1.25px,
//             transparent 1.25px
//           );
//           background-size: 11px 11px;
//         }

//         .sgw-contact-field:focus-within {
//           border-color: #6254b4;
//           background: #ffffff;
//           box-shadow: 0 16px 45px rgba(42, 32, 68, 0.07);
//         }

//         .sgw-contact-field:focus-within .sgw-contact-label {
//           color: #6254b4;
//         }

//         .sgw-contact-field:focus-within .sgw-contact-index {
//           background: #6254b4;
//           color: #ffffff;
//         }
//       `}</style>

//       {/* ====================================================== */}
//       {/* ENQUIRY CONSOLE HERO */}
//       {/* ====================================================== */}

//       <section
//         itemScope
//         itemType="https://schema.org/PestControlService"
//         aria-labelledby="contact-page-heading"
//         className="relative mt-10 overflow-hidden border-b border-[#D9D3E2] bg-[#F4F1F8] pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-40"
//       >
//         <meta itemProp="name" content={LOCAL.company} />

//         <meta
//           itemProp="areaServed"
//           content={`${LOCAL.area}, Central London`}
//         />

//         <div
//           itemProp="address"
//           itemScope
//           itemType="https://schema.org/PostalAddress"
//           className="hidden"
//         >
//           <meta
//             itemProp="streetAddress"
//             content={LOCAL.streetAddress}
//           />

//           <meta
//             itemProp="addressLocality"
//             content={LOCAL.city}
//           />

//           <meta
//             itemProp="postalCode"
//             content={LOCAL.postcode}
//           />

//           <meta itemProp="addressCountry" content="GB" />
//         </div>

//         {/* BACKGROUND */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 overflow-hidden"
//         >
//           <div className="sgw-contact-grid absolute inset-0 opacity-55" />

//           <div className="absolute -left-64 top-[-100px] h-[620px] w-[620px] rounded-full bg-[#6254B4]/13 blur-[160px]" />

//           <div className="absolute -right-72 bottom-[-280px] h-[680px] w-[680px] rounded-full border-[120px] border-[#6254B4]/[0.045]" />

//           <div className="sgw-contact-dots absolute right-6 top-28 h-48 w-48 opacity-45" />

//           <div className="absolute right-0 top-0 h-full w-[30%] border-l border-[#6254B4]/[0.05] bg-white/20" />
//         </div>

//         {/* BACKGROUND WORD */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute left-1/2 top-24 hidden -translate-x-1/2 select-none whitespace-nowrap text-[190px] font-black uppercase leading-none tracking-[-0.09em] text-[#6254B4]/[0.035] xl:block"
//         >
//           Enquiry
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
//           {/* TOP STATUS BAR */}
//           <div className="grid border-y border-[#CDC6D8] lg:grid-cols-[1fr_auto_auto]">
//             <div className="flex items-center gap-4 py-5 lg:pr-8">
//               <span className="relative flex h-3 w-3 shrink-0">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6254B4] opacity-35" />

//                 <span className="relative inline-flex h-3 w-3 rounded-full bg-[#6254B4]" />
//               </span>

//               <div>
//                 <span className="block text-[8px] font-black uppercase tracking-[0.25em] text-[#6254B4]">
//                   Westminster Enquiry Console
//                 </span>

//                 <span className="mt-1 block text-xs font-black text-[#18141F]">
//                   SuperGuard Services Westminster
//                 </span>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 border-t border-[#CDC6D8] py-5 lg:border-l lg:border-t-0 lg:px-8">
//               <MapPin
//                 size={16}
//                 strokeWidth={2.5}
//                 className="shrink-0 text-[#6254B4]"
//               />

//               <address className="not-italic text-[9px] font-black uppercase tracking-[0.15em] text-[#655F6C]">
//                 {LOCAL.address}
//               </address>
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="group flex items-center gap-3 border-t border-[#CDC6D8] py-5 transition-colors duration-300 hover:text-[#6254B4] lg:border-l lg:border-t-0 lg:pl-8"
//             >
//               <Phone
//                 size={16}
//                 strokeWidth={2.5}
//                 className="shrink-0 text-[#6254B4] transition-transform duration-300 group-hover:rotate-6"
//               />

//               <span className="text-[10px] font-black tracking-[0.04em]">
//                 {LOCAL.phoneDisplay}
//               </span>
//             </a>
//           </div>

//           {/* PAGE HEADING */}
//           <div className="mt-14 grid gap-9 lg:grid-cols-[0.62fr_1fr] lg:items-end">
//             <div>
//               <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//                 Property Pest Support
//               </span>

//               <p className="mb-0 mt-5 max-w-sm text-sm font-medium leading-7 text-[#66606D]">
//                 Complete one clear enquiry and provide the details our
//                 Westminster team needs to review the issue.
//               </p>
//             </div>

//             <h1
//               id="contact-page-heading"
//               className="max-w-[950px] text-[50px] font-black leading-[0.91] tracking-[-0.06em] text-[#18141F] sm:text-[68px] lg:text-[82px]"
//             >
//               Start your pest control
//               <span className="block text-[#6254B4]">
//                 enquiry in one place.
//               </span>
//             </h1>
//           </div>

//           {/* MAIN ENQUIRY DESK */}
//           <div className="mt-14 grid overflow-hidden border border-[#CFC8D9] bg-white shadow-[0_40px_120px_rgba(39,29,64,0.13)] xl:grid-cols-[330px_minmax(0,1fr)]">
//             {/* LEFT CONSOLE */}
//             <aside className="relative overflow-hidden bg-[#18141F] p-6 text-white sm:p-8 xl:p-9">
//               <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[48px] border-white/[0.035]" />

//               <div className="pointer-events-none absolute -bottom-44 -left-24 h-80 w-80 rounded-full bg-[#6254B4]/35 blur-[120px]" />

//               <div className="relative z-10 flex h-full flex-col">
//                 <div>
//                   <span className="text-[8px] font-black uppercase tracking-[0.24em] text-[#BDB6FF]">
//                     Enquiry Reference
//                   </span>

//                   <div className="mt-4 flex items-end justify-between border-b border-white/10 pb-6">
//                     <span className="text-[42px] font-black leading-none tracking-[-0.06em]">
//                       SGW
//                     </span>

//                     <span className="text-[9px] font-black uppercase tracking-[0.16em] text-white/35">
//                       SW1P / London
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-8">
//                   <h2 className="text-[30px] font-black leading-[0.98] tracking-[-0.045em]">
//                     Details that help us understand the issue.
//                   </h2>

//                   <p className="mb-0 mt-5 text-sm font-medium leading-7 text-white/55">
//                     Include the pest signs, affected rooms, property
//                     type and when you first noticed the activity.
//                   </p>
//                 </div>

//                 <div className="mt-8 space-y-3">
//                   {[
//                     "Your contact information",
//                     "Property postcode",
//                     "Required pest service",
//                     "Description of the activity",
//                   ].map((item, index) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-3 border-t border-white/10 pt-3"
//                     >
//                       <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6254B4] text-[8px] font-black">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       <span className="text-[9px] font-black uppercase leading-5 tracking-[0.12em] text-white/65">
//                         {item}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-9 border border-white/10 bg-white/[0.045] p-5">
//                   <div className="flex items-start gap-4">
//                     <ShieldCheck
//                       size={21}
//                       strokeWidth={2.4}
//                       className="mt-0.5 shrink-0 text-[#BDB6FF]"
//                     />

//                     <div>
//                       <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#BDB6FF]">
//                         Information use
//                       </span>

//                       <p className="mb-0 mt-2 text-xs font-medium leading-5 text-white/50">
//                         Your information is used only to review and
//                         respond to this pest control enquiry.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-auto pt-10">
//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="group flex min-h-[56px] w-full items-center justify-between bg-[#6254B4] px-5 transition-colors duration-300 hover:bg-white hover:text-[#18141F]"
//                   >
//                     <span>
//                       <span className="block text-[8px] font-black uppercase tracking-[0.18em] text-current opacity-55">
//                         Prefer to speak?
//                       </span>

//                       <span className="mt-1 block text-sm font-black">
//                         {LOCAL.phoneDisplay}
//                       </span>
//                     </span>

//                     <Phone
//                       size={19}
//                       strokeWidth={2.3}
//                       className="transition-transform duration-300 group-hover:rotate-6"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </aside>

//             {/* FORM AREA */}
//             <div className="bg-[#FBFAFD]">
//               {/* FORM HEADER */}
//               <div className="border-b border-[#DDD7E5] px-6 py-7 sm:px-8 lg:px-10 lg:py-9">
//                 <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
//                   <div>
//                     <span className="inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.23em] text-[#6254B4]">
//                       <MessageSquareText
//                         size={16}
//                         strokeWidth={2.5}
//                       />

//                       Contact Form
//                     </span>

//                     <h2 className="mt-4 text-[33px] font-black leading-[0.98] tracking-[-0.045em] text-[#18141F] sm:text-[42px]">
//                       Tell us about the property issue.
//                     </h2>
//                   </div>

//                   <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#97919D]">
//                     Required fields marked *
//                   </span>
//                 </div>
//               </div>

//               {/* FORM */}
//               <form
//                 onSubmit={handleSubmit}
//                 className="px-6 py-7 sm:px-8 lg:px-10 lg:py-10"
//               >
//                 <div className="grid gap-4 md:grid-cols-2">
//                   <ConsoleField
//                     index="01"
//                     label="Full Name"
//                     required
//                   >
//                     <input
//                       type="text"
//                       name="name"
//                       autoComplete="name"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Enter your full name"
//                       className="w-full bg-transparent text-sm font-bold text-[#18141F] outline-none placeholder:font-medium placeholder:text-[#A29CA8]"
//                     />
//                   </ConsoleField>

//                   <ConsoleField
//                     index="02"
//                     label="Email Address"
//                     required
//                   >
//                     <input
//                       type="email"
//                       name="email"
//                       autoComplete="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Enter your email address"
//                       className="w-full bg-transparent text-sm font-bold text-[#18141F] outline-none placeholder:font-medium placeholder:text-[#A29CA8]"
//                     />
//                   </ConsoleField>

//                   <ConsoleField
//                     index="03"
//                     label="Contact Number"
//                     required
//                   >
//                     <input
//                       type="tel"
//                       name="phone"
//                       autoComplete="tel"
//                       inputMode="tel"
//                       required
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Enter your contact number"
//                       className="w-full bg-transparent text-sm font-bold text-[#18141F] outline-none placeholder:font-medium placeholder:text-[#A29CA8]"
//                     />
//                   </ConsoleField>

//                   <ConsoleField
//                     index="04"
//                     label="Property Postcode"
//                     required
//                   >
//                     <input
//                       type="text"
//                       name="postcode"
//                       autoComplete="postal-code"
//                       required
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder={`For example, ${LOCAL.postcode}`}
//                       className="w-full bg-transparent text-sm font-bold uppercase text-[#18141F] outline-none placeholder:normal-case placeholder:font-medium placeholder:text-[#A29CA8]"
//                     />
//                   </ConsoleField>
//                 </div>

//                 <div className="mt-4">
//                   <ConsoleField
//                     index="05"
//                     label="Service Required"
//                     required
//                   >
//                     <div className="relative">
//                       <select
//                         name="service"
//                         required
//                         value={formData.service}
//                         onChange={handleChange}
//                         className="w-full appearance-none bg-transparent pr-10 text-sm font-bold text-[#18141F] outline-none"
//                       >
//                         <option value="">
//                           Select the required service
//                         </option>

//                         {services.map((service) => (
//                           <option
//                             key={service}
//                             value={service}
//                           >
//                             {service}
//                           </option>
//                         ))}
//                       </select>

//                       <ChevronDown
//                         size={18}
//                         strokeWidth={2.4}
//                         className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#6254B4]"
//                       />
//                     </div>
//                   </ConsoleField>
//                 </div>

//                 <div className="mt-4">
//                   <ConsoleField
//                     index="06"
//                     label="Pest Issue Details"
//                     required
//                     textarea
//                   >
//                     <textarea
//                       name="message"
//                       required
//                       rows={6}
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Describe the pest signs, affected rooms and when the activity started..."
//                       className="w-full resize-none bg-transparent text-sm font-semibold leading-7 text-[#18141F] outline-none placeholder:font-medium placeholder:text-[#A29CA8]"
//                     />
//                   </ConsoleField>
//                 </div>

//                 <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-stretch">
//                   <div className="flex items-start gap-4 border border-[#DDD7E5] bg-white p-5">
//                     <ShieldCheck
//                       size={20}
//                       strokeWidth={2.5}
//                       className="mt-0.5 shrink-0 text-[#6254B4]"
//                     />

//                     <p className="mb-0 text-xs font-semibold leading-5 text-[#77717E]">
//                       Your details will only be used to assess and
//                       respond to your pest control request.
//                     </p>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="group flex min-h-[68px] min-w-[235px] items-center justify-center gap-4 bg-[#6254B4] px-7 text-[10px] font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#18141F] disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     {loading ? (
//                       <>
//                         <LoaderCircle
//                           size={19}
//                           strokeWidth={2.6}
//                           className="animate-spin"
//                         />

//                         Sending Enquiry
//                       </>
//                     ) : (
//                       <>
//                         Submit Enquiry

//                         <ArrowRight
//                           size={18}
//                           strokeWidth={2.5}
//                           className="transition-transform duration-300 group-hover:translate-x-1"
//                         />
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ====================================================== */}
//       {/* ENQUIRY PROCESS LEDGER */}
//       {/* ====================================================== */}

//       <section className="relative overflow-hidden bg-[#18141F] py-20 text-white sm:py-24 lg:py-28">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0"
//         >
//           <div className="absolute -left-64 top-[-180px] h-[580px] w-[580px] rounded-full bg-[#6254B4]/30 blur-[170px]" />

//           <div className="absolute -right-64 bottom-[-240px] h-[620px] w-[620px] rounded-full border-[110px] border-white/[0.025]" />

//           <div
//             className="absolute inset-0 opacity-[0.03]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(white 1px, transparent 1px)",
//               backgroundSize: "100% 74px",
//             }}
//           />
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
//           <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
//             <div>
//               <span className="text-[9px] font-black uppercase tracking-[0.27em] text-[#BDB6FF]">
//                 Enquiry Processing Route
//               </span>

//               <h2 className="mt-5 max-w-[700px] text-[43px] font-black leading-[0.94] tracking-[-0.055em] sm:text-[58px] lg:text-[68px]">
//                 What happens after
//                 <span className="block text-[#8F80E4]">
//                   your form is submitted.
//                 </span>
//               </h2>
//             </div>

//             <p className="mb-0 max-w-xl text-sm font-medium leading-7 text-white/55 sm:text-base sm:leading-8">
//               Your submitted details create a clear starting point for
//               reviewing the property, pest signs and requested service.
//             </p>
//           </div>

//           <div className="mt-14 border-y border-white/10">
//             {enquiryStages.map((stage, index) => {
//               const Icon = stage.icon;

//               return (
//                 <article
//                   key={stage.number}
//                   className="group grid border-b border-white/10 last:border-b-0 lg:grid-cols-[130px_1fr_130px]"
//                 >
//                   <div className="flex items-center border-b border-white/10 py-6 lg:border-b-0 lg:border-r lg:py-8">
//                     <span className="text-[45px] font-black leading-none tracking-[-0.07em] text-white/[0.09] transition-colors duration-300 group-hover:text-[#8F80E4]">
//                       {stage.number}
//                     </span>
//                   </div>

//                   <div className="grid gap-5 py-7 lg:grid-cols-[0.55fr_1fr] lg:items-center lg:px-8 lg:py-9">
//                     <h3 className="text-[25px] font-black leading-tight tracking-[-0.035em] text-white sm:text-[30px]">
//                       {stage.title}
//                     </h3>

//                     <p className="mb-0 max-w-xl text-sm font-medium leading-7 text-white/50">
//                       {stage.text}
//                     </p>
//                   </div>

//                   <div className="flex items-center py-6 lg:justify-end lg:border-l lg:border-white/10 lg:py-8">
//                     <span className="flex h-14 w-14 items-center justify-center border border-white/10 bg-white/[0.045] text-[#BDB6FF] transition-all duration-300 group-hover:border-[#6254B4] group-hover:bg-[#6254B4] group-hover:text-white">
//                       <Icon size={23} strokeWidth={2.3} />
//                     </span>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ====================================================== */}
//       {/* WESTMINSTER LOCATION */}
//       {/* ====================================================== */}

//       <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
//           <div className="grid gap-10 xl:grid-cols-[390px_minmax(0,1fr)]">
//             {/* LOCATION DIRECTORY */}
//             <div>
//               <span className="text-[9px] font-black uppercase tracking-[0.27em] text-[#6254B4]">
//                 Westminster Location
//               </span>

//               <h2 className="mt-5 text-[42px] font-black leading-[0.95] tracking-[-0.05em] text-[#18141F] sm:text-[54px]">
//                 Local property support from SW1P.
//               </h2>

//               <p className="mb-0 mt-6 text-sm font-medium leading-7 text-[#69636F]">
//                 Our listed Westminster address supports residential and
//                 commercial pest control enquiries throughout Westminster
//                 and surrounding Central London areas.
//               </p>

//               <div className="mt-9 border-t border-[#DCD6E4]">
//                 {supportDetails.map((detail) => {
//                   const Icon = detail.icon;

//                   const content = (
//                     <>
//                       <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EEEAF6] text-[#6254B4]">
//                         <Icon size={19} strokeWidth={2.4} />
//                       </span>

//                       <div>
//                         <span className="block text-[8px] font-black uppercase tracking-[0.21em] text-[#96909B]">
//                           {detail.label}
//                         </span>

//                         <span className="mt-2 block text-sm font-black leading-6 text-[#18141F]">
//                           {detail.value}
//                         </span>
//                       </div>
//                     </>
//                   );

//                   return detail.href ? (
//                     <a
//                       key={detail.label}
//                       href={detail.href}
//                       className="group flex items-start gap-4 border-b border-[#DCD6E4] py-5 transition-colors duration-300 hover:text-[#6254B4]"
//                     >
//                       {content}
//                     </a>
//                   ) : (
//                     <div
//                       key={detail.label}
//                       className="flex items-start gap-4 border-b border-[#DCD6E4] py-5"
//                     >
//                       {content}
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="mt-8">
//                 <span className="text-[8px] font-black uppercase tracking-[0.21em] text-[#96909B]">
//                   Property support for
//                 </span>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {propertyTypes.map((type) => (
//                     <span
//                       key={type}
//                       className="border border-[#DED8E6] bg-[#F7F5FA] px-3 py-2 text-[8px] font-black uppercase tracking-[0.12em] text-[#4A4450]"
//                     >
//                       {type}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* MAP FRAME */}
//             <div className="relative min-h-[560px] overflow-hidden border border-[#D8D2DF] bg-[#EEEAF6]">
//               <iframe
//                 title={`${LOCAL.company} location map`}
//                 src="https://maps.google.com/maps?q=14%20Regency%20Street%2C%20London%20SW1P%204BD&t=&z=16&ie=UTF8&iwloc=&output=embed"
//                 className="absolute inset-0 h-full w-full border-0 grayscale-[18%]"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 allowFullScreen
//               />

//               <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#6254B4]/10" />

//               {/* MAP HEADER */}
//               <div className="absolute left-5 right-5 top-5 flex flex-col gap-4 bg-[#18141F]/95 p-5 text-white shadow-[0_22px_65px_rgba(24,20,31,0.2)] backdrop-blur-md sm:left-7 sm:right-7 sm:flex-row sm:items-center sm:justify-between">
//                 <div className="flex items-center gap-4">
//                   <span className="flex h-11 w-11 items-center justify-center bg-[#6254B4]">
//                     <MapPin size={20} strokeWidth={2.5} />
//                   </span>

//                   <div>
//                     <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#BDB6FF]">
//                       Local map reference
//                     </span>

//                     <span className="mt-1 block text-sm font-black">
//                       SuperGuard Westminster
//                     </span>
//                   </div>
//                 </div>

//                 <span className="text-[9px] font-black uppercase tracking-[0.15em] text-white/45">
//                   SW1P · Central London
//                 </span>
//               </div>

//               {/* MAP FOOTER */}
//               <div className="absolute bottom-5 left-5 right-5 bg-white/95 p-5 shadow-[0_22px_65px_rgba(24,20,31,0.18)] backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[390px]">
//                 <div className="flex items-start gap-4">
//                   <MapPin
//                     size={20}
//                     strokeWidth={2.5}
//                     className="mt-1 shrink-0 text-[#6254B4]"
//                   />

//                   <div>
//                     <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#6254B4]">
//                       Business address
//                     </span>

//                     <address className="mt-2 not-italic text-sm font-black leading-6 text-[#18141F]">
//                       {LOCAL.address}
//                     </address>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* BOTTOM DATA STRIP */}
//           <div className="mt-10 grid border-y border-[#D8D2DF] md:grid-cols-3">
//             {[
//               {
//                 icon: MapPin,
//                 title: "Local Coverage",
//                 text: "Westminster and surrounding Central London areas.",
//               },
//               {
//                 icon: Clock3,
//                 title: "Enquiry Review",
//                 text: "Property and pest details reviewed before response.",
//               },
//               {
//                 icon: Sparkles,
//                 title: "Service Range",
//                 text: "Rodents, insects, wildlife, birds and proofing.",
//               },
//             ].map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className={`p-6 sm:p-7 ${
//                     index !== 2
//                       ? "border-b border-[#D8D2DF] md:border-b-0 md:border-r"
//                       : ""
//                   }`}
//                 >
//                   <Icon
//                     size={21}
//                     strokeWidth={2.4}
//                     className="text-[#6254B4]"
//                   />

//                   <span className="mt-5 block text-[9px] font-black uppercase tracking-[0.21em] text-[#6254B4]">
//                     {item.title}
//                   </span>

//                   <p className="mb-0 mt-3 text-sm font-semibold leading-6 text-[#68626E]">
//                     {item.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function ConsoleField({
//   index,
//   label,
//   required = false,
//   textarea = false,
//   children,
// }) {
//   return (
//     <label
//       className={`sgw-contact-field block border border-[#DED8E6] bg-white transition-all duration-300 ${
//         textarea ? "p-5" : "grid sm:grid-cols-[66px_1fr]"
//       }`}
//     >
//       {textarea ? (
//         <>
//           <div className="mb-4 flex items-center justify-between gap-4">
//             <span className="sgw-contact-label text-[9px] font-black uppercase tracking-[0.2em] text-[#77717D] transition-colors">
//               {label}

//               {required && (
//                 <span
//                   aria-hidden="true"
//                   className="ml-1 text-[#6254B4]"
//                 >
//                   *
//                 </span>
//               )}
//             </span>

//             <span className="sgw-contact-index flex h-8 w-8 items-center justify-center bg-[#EEEAF6] text-[8px] font-black text-[#6254B4] transition-colors">
//               {index}
//             </span>
//           </div>

//           {children}
//         </>
//       ) : (
//         <>
//           <span className="sgw-contact-index flex min-h-[86px] items-center justify-center border-b border-[#DED8E6] bg-[#EEEAF6] text-[9px] font-black tracking-[0.15em] text-[#6254B4] transition-colors sm:border-b-0 sm:border-r">
//             {index}
//           </span>

//           <span className="flex min-h-[86px] flex-col justify-center px-5 py-4">
//             <span className="sgw-contact-label mb-3 block text-[8px] font-black uppercase tracking-[0.2em] text-[#77717D] transition-colors">
//               {label}

//               {required && (
//                 <span
//                   aria-hidden="true"
//                   className="ml-1 text-[#6254B4]"
//                 >
//                   *
//                 </span>
//               )}
//             </span>

//             {children}
//           </span>
//         </>
//       )}
//     </label>
//   );
// }














// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ArrowUpRight,
//   CheckCircle2,
//   ChevronDown,
//   Clock3,
//   Mail,
//   MapPin,
//   Menu,
//   MessageCircle,
//   Phone,
//   ShieldCheck,
//   Sparkles,
//   Bug,
//   Building2,
// } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     shortName: "Superguard Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     streetAddress: "49 Shroton St",
//     address: "49 Shroton St, London NW1 6UB, United Kingdom",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//   };

//   const services = [
//     "Rats & Mice Control",
//     "Bed Bug Treatment",
//     "Ant Control",
//     "Cockroach Control",
//     "Flea Treatment",
//     "Carpet Moth Treatment",
//     "Carpet Beetle Control",
//     "Wasp Nest Control",
//     "Bee Activity Guidance",
//     "Squirrel Control",
//     "Bird Control & Deterrents",
//     "Property Proofing",
//     "General Pest Inspection",
//   ];

//   const propertyTypes = [
//     "Homes & Flats",
//     "Landlord Properties",
//     "Offices",
//     "Retail Premises",
//     "Commercial Buildings",
//   ];

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((currentData) => ({
//       ...currentData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (loading) {
//       return;
//     }

//     setLoading(true);

//     const loadingToast = toast.loading("Sending your enquiry...");

//     try {
//       await axios.post(
//         "http://localhost:5000/api/contact",
//         {
//           ...formData,
//           area: LOCAL.area,
//           business: LOCAL.company,
//           address: LOCAL.address,
//         }
//       );

//       toast.success(
//         "Request received. Superguard Marylebone will contact you shortly.",
//         {
//           id: loadingToast,
//           duration: 5000,
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Contact form error:", error);

//       toast.error(
//         error?.response?.data?.message ||
//           "Something went wrong. Please try again.",
//         {
//           id: loadingToast,
//           duration: 5000,
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen overflow-hidden bg-white font-sans text-[#17151C]">
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           style: {
//             borderRadius: "12px",
//             background: "#17151C",
//             color: "#ffffff",
//             fontWeight: "700",
//           },
//         }}
//       />

//       <style>{`
//         .mary-contact-noise {
//           background-image:
//             radial-gradient(
//               rgba(96, 85, 166, 0.12) 1px,
//               transparent 1px
//             );
//           background-size: 18px 18px;
//         }

//         .mary-contact-glow {
//           background:
//             radial-gradient(
//               circle at 20% 20%,
//               rgba(96, 85, 166, 0.17),
//               transparent 32%
//             ),
//             radial-gradient(
//               circle at 85% 70%,
//               rgba(96, 85, 166, 0.10),
//               transparent 28%
//             );
//         }

//         .mary-field:focus-within {
//           border-color: #6055A6;
//           box-shadow: 0 0 0 4px rgba(96, 85, 166, 0.08);
//         }

//         .mary-field:focus-within .mary-field-label {
//           color: #6055A6;
//         }

//         .mary-select option {
//           color: #17151C;
//         }
//       `}</style>

//       {/* =========================================================
//           HERO / CONTACT INTRO
//       ========================================================= */}

//       <section
//         itemScope
//         itemType="https://schema.org/PestControlService"
//         aria-labelledby="mary-contact-heading"
//         className="relative overflow-hidden bg-[#F7F6FB] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24"
//       >
//         <meta itemProp="name" content={LOCAL.company} />
//         <meta
//           itemProp="areaServed"
//           content={`${LOCAL.area}, ${LOCAL.city}`}
//         />

//         <div
//           itemProp="address"
//           itemScope
//           itemType="https://schema.org/PostalAddress"
//           className="hidden"
//         >
//           <meta
//             itemProp="streetAddress"
//             content={LOCAL.streetAddress}
//           />
//           <meta
//             itemProp="addressLocality"
//             content={LOCAL.city}
//           />
//           <meta
//             itemProp="postalCode"
//             content={LOCAL.postcode}
//           />
//           <meta itemProp="addressCountry" content="GB" />
//         </div>

//         {/* Background */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0"
//         >
//           <div className="mary-contact-glow absolute inset-0" />

//           <div className="mary-contact-noise absolute right-[-100px] top-[-100px] h-[420px] w-[420px] rounded-full opacity-40" />

//           <div className="absolute -bottom-48 -left-32 h-[500px] w-[500px] rounded-full border-[80px] border-[#6055A6]/[0.045]" />

//           <div className="absolute right-[8%] top-[18%] h-3 w-3 rounded-full bg-[#6055A6]" />
//           <div className="absolute right-[15%] top-[24%] h-2 w-2 rounded-full bg-[#6055A6]/40" />
//           <div className="absolute right-[11%] top-[29%] h-1.5 w-1.5 rounded-full bg-[#6055A6]/60" />
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
//           <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">

//             {/* LEFT */}
//             <div>
//               <div className="inline-flex items-center gap-3 rounded-full border border-[#6055A6]/20 bg-white px-4 py-2 shadow-sm">
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6055A6]/40" />
//                   <span className="relative h-2.5 w-2.5 rounded-full bg-[#6055A6]" />
//                 </span>

//                 <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#6055A6]">
//                   Marylebone Pest Control
//                 </span>
//               </div>

//               <h1
//                 id="mary-contact-heading"
//                 className="mt-8 max-w-[850px] text-[52px] font-black leading-[0.92] tracking-[-0.065em] text-[#17151C] sm:text-[70px] lg:text-[88px]"
//               >
//                 Tell us what&apos;s
//                 <span className="block text-[#6055A6]">
//                   happening.
//                 </span>
//               </h1>

//               <p className="mt-7 max-w-[620px] text-base font-medium leading-8 text-[#696571] sm:text-lg">
//                 Whether you have noticed rodents, insects, bed bugs or
//                 another pest issue, send our Marylebone team the details
//                 and we&apos;ll review your enquiry.
//               </p>

//               <div className="mt-9 flex flex-wrap gap-3">
//                 {[
//                   "Residential",
//                   "Commercial",
//                   "Local Support",
//                 ].map((item) => (
//                   <span
//                     key={item}
//                     className="rounded-full border border-[#DDD9E9] bg-white px-4 py-2 text-[9px] font-black uppercase tracking-[0.14em] text-[#57515F]"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT CONTACT CARD */}
//             <div className="relative">
//               <div className="absolute -inset-5 rounded-[35px] bg-[#6055A6]/[0.055] blur-2xl" />

//               <div className="relative overflow-hidden rounded-[28px] border border-[#DDD9E9] bg-white shadow-[0_30px_90px_rgba(38,32,59,0.12)]">
//                 <div className="bg-[#6055A6] px-7 py-8 text-white sm:px-9">
//                   <div className="flex items-start justify-between gap-5">
//                     <div>
//                       <span className="text-[8px] font-black uppercase tracking-[0.24em] text-white/60">
//                         Contact Superguard
//                       </span>

//                       <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] sm:text-3xl">
//                         Need pest help?
//                       </h2>
//                     </div>

//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
//                       <Bug size={23} strokeWidth={2.2} />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="divide-y divide-[#E8E4EF]">
//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="group flex items-center gap-4 px-7 py-6 transition-colors hover:bg-[#F7F6FB] sm:px-9"
//                   >
//                     <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0EEF8] text-[#6055A6]">
//                       <Phone size={20} strokeWidth={2.4} />
//                     </span>

//                     <span className="min-w-0">
//                       <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#9993A1]">
//                         Call our team
//                       </span>

//                       <span className="mt-1 block text-base font-black text-[#17151C]">
//                         {LOCAL.phoneDisplay}
//                       </span>
//                     </span>

//                     <ArrowUpRight
//                       size={18}
//                       className="ml-auto text-[#6055A6] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                     />
//                   </a>

//                   <div className="flex items-start gap-4 px-7 py-6 sm:px-9">
//                     <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0EEF8] text-[#6055A6]">
//                       <MapPin size={20} strokeWidth={2.4} />
//                     </span>

//                     <span>
//                       <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#9993A1]">
//                         Marylebone address
//                       </span>

//                       <span className="mt-1 block text-sm font-bold leading-6 text-[#29252F]">
//                         {LOCAL.address}
//                       </span>
//                     </span>
//                   </div>

//                   <div className="flex items-start gap-4 px-7 py-6 sm:px-9">
//                     <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0EEF8] text-[#6055A6]">
//                       <Clock3 size={20} strokeWidth={2.4} />
//                     </span>

//                     <span>
//                       <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#9993A1]">
//                         Enquiry support
//                       </span>

//                       <span className="mt-1 block text-sm font-bold leading-6 text-[#29252F]">
//                         Residential & commercial pest enquiries
//                       </span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FORM SECTION
//       ========================================================= */}

//       <section className="relative bg-white py-20 sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">

//           <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

//             {/* FORM INTRO */}
//             <div className="lg:sticky lg:top-28 lg:self-start">
//               <span className="text-[9px] font-black uppercase tracking-[0.26em] text-[#6055A6]">
//                 Online Enquiry
//               </span>

//               <h2 className="mt-5 max-w-[520px] text-[42px] font-black leading-[0.96] tracking-[-0.055em] text-[#17151C] sm:text-[55px]">
//                 Give us the
//                 <span className="block text-[#6055A6]">
//                   details.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-[480px] text-sm font-medium leading-7 text-[#716B78]">
//                 A few details about the property and pest activity help
//                 us understand your enquiry before getting back to you.
//               </p>

//               <div className="mt-9 space-y-4">
//                 {[
//                   "Tell us where the activity has been noticed.",
//                   "Select the pest control service you need.",
//                   "Include useful information about the infestation.",
//                 ].map((item, index) => (
//                   <div
//                     key={item}
//                     className="flex items-start gap-4"
//                   >
//                     <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                       <CheckCircle2 size={15} strokeWidth={2.7} />
//                     </span>

//                     <p className="mb-0 pt-0.5 text-sm font-semibold leading-6 text-[#57515D]">
//                       {item}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-10 rounded-3xl bg-[#F5F3FA] p-6">
//                 <div className="flex items-start gap-4">
//                   <ShieldCheck
//                     size={22}
//                     className="mt-0.5 shrink-0 text-[#6055A6]"
//                     strokeWidth={2.4}
//                   />

//                   <div>
//                     <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                       Your information
//                     </span>

//                     <p className="mb-0 mt-2 text-xs font-medium leading-6 text-[#77717D]">
//                       Your details are submitted only to help review
//                       and respond to your pest control enquiry.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* FORM */}
//             <div className="rounded-[30px] border border-[#E1DDE9] bg-[#FAF9FC] p-5 shadow-[0_25px_80px_rgba(40,34,59,0.07)] sm:p-8 lg:p-10">

//               <div className="mb-9 flex flex-col gap-4 border-b border-[#E4E0EA] pb-8 sm:flex-row sm:items-end sm:justify-between">
//                 <div>
//                   <div className="flex items-center gap-2 text-[#6055A6]">
//                     <MessageCircle size={17} strokeWidth={2.5} />

//                     <span className="text-[9px] font-black uppercase tracking-[0.2em]">
//                       Pest Control Enquiry
//                     </span>
//                   </div>

//                   <h3 className="mt-3 text-2xl font-black tracking-[-0.035em] text-[#17151C] sm:text-3xl">
//                     Contact our Marylebone team
//                   </h3>
//                 </div>

//                 <span className="text-[8px] font-black uppercase tracking-[0.16em] text-[#9A94A2]">
//                   * Required
//                 </span>
//               </div>

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-5"
//               >
//                 {/* NAME + EMAIL */}
//                 <div className="grid gap-5 md:grid-cols-2">
//                   <ContactField label="Full Name" required>
//                     <input
//                       type="text"
//                       name="name"
//                       autoComplete="name"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your full name"
//                       className="w-full bg-transparent text-sm font-bold text-[#17151C] outline-none placeholder:font-medium placeholder:text-[#AAA4B0]"
//                     />
//                   </ContactField>

//                   <ContactField label="Email Address" required>
//                     <input
//                       type="email"
//                       name="email"
//                       autoComplete="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Your email address"
//                       className="w-full bg-transparent text-sm font-bold text-[#17151C] outline-none placeholder:font-medium placeholder:text-[#AAA4B0]"
//                     />
//                   </ContactField>
//                 </div>

//                 {/* PHONE + POSTCODE */}
//                 <div className="grid gap-5 md:grid-cols-2">
//                   <ContactField label="Contact Number" required>
//                     <input
//                       type="tel"
//                       name="phone"
//                       autoComplete="tel"
//                       inputMode="tel"
//                       required
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Your contact number"
//                       className="w-full bg-transparent text-sm font-bold text-[#17151C] outline-none placeholder:font-medium placeholder:text-[#AAA4B0]"
//                     />
//                   </ContactField>

//                   <ContactField label="Property Postcode" required>
//                     <input
//                       type="text"
//                       name="postcode"
//                       autoComplete="postal-code"
//                       required
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="e.g. NW1 6UB"
//                       className="w-full bg-transparent text-sm font-bold uppercase text-[#17151C] outline-none placeholder:normal-case placeholder:font-medium placeholder:text-[#AAA4B0]"
//                     />
//                   </ContactField>
//                 </div>

//                 {/* SERVICE */}
//                 <ContactField label="Service Required" required>
//                   <div className="relative">
//                     <select
//                       name="service"
//                       required
//                       value={formData.service}
//                       onChange={handleChange}
//                       className="mary-select w-full appearance-none bg-transparent pr-10 text-sm font-bold text-[#17151C] outline-none"
//                     >
//                       <option value="">
//                         Choose a pest control service
//                       </option>

//                       {services.map((service) => (
//                         <option
//                           key={service}
//                           value={service}
//                         >
//                           {service}
//                         </option>
//                       ))}
//                     </select>

//                     <ChevronDown
//                       size={19}
//                       strokeWidth={2.5}
//                       className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#6055A6]"
//                     />
//                   </div>
//                 </ContactField>

//                 {/* MESSAGE */}
//                 <ContactField label="Tell Us About The Pest Issue" required>
//                   <textarea
//                     name="message"
//                     required
//                     rows={7}
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Describe what you have noticed, where the activity is happening and when you first noticed it..."
//                     className="w-full resize-none bg-transparent text-sm font-semibold leading-7 text-[#17151C] outline-none placeholder:font-medium placeholder:text-[#AAA4B0]"
//                   />
//                 </ContactField>

//                 {/* SUBMIT AREA */}
//                 <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
//                   <div className="flex items-center gap-3">
//                     <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEEAF7] text-[#6055A6]">
//                       <ShieldCheck size={19} strokeWidth={2.4} />
//                     </span>

//                     <p className="mb-0 max-w-[280px] text-[11px] font-semibold leading-5 text-[#817B87]">
//                       Please provide accurate property and contact
//                       details so our team can respond.
//                     </p>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="group flex min-h-[62px] items-center justify-center gap-4 rounded-2xl bg-[#6055A6] px-8 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-[0_15px_35px_rgba(96,85,166,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4F458F] disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     {loading ? (
//                       <>
//                         <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
//                         Sending
//                       </>
//                     ) : (
//                       <>
//                         Send Enquiry
//                         <ArrowUpRight
//                           size={18}
//                           strokeWidth={2.5}
//                           className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                         />
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICE / PROPERTY STRIP
//       ========================================================= */}

//       <section className="bg-[#6055A6] py-16 text-white sm:py-20">
//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

//             <div>
//               <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/60">
//                 Pest Control Support
//               </span>

//               <h2 className="mt-4 max-w-[520px] text-[38px] font-black leading-[0.96] tracking-[-0.05em] sm:text-[50px]">
//                 One local team.
//                 <span className="block text-white/65">
//                   Multiple pest solutions.
//                 </span>
//               </h2>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//               {propertyTypes.map((type) => (
//                 <div
//                   key={type}
//                   className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-5 py-5"
//                 >
//                   <Building2
//                     size={18}
//                     className="shrink-0 text-white/70"
//                     strokeWidth={2.2}
//                   />

//                   <span className="text-[9px] font-black uppercase tracking-[0.12em] text-white/85">
//                     {type}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           LOCATION SECTION
//       ========================================================= */}

//       <section className="bg-[#F7F6FB] py-20 sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">

//           <div className="grid overflow-hidden rounded-[30px] border border-[#DDD9E8] bg-white shadow-[0_25px_80px_rgba(40,34,59,0.08)] lg:grid-cols-[0.75fr_1.25fr]">

//             {/* LOCATION INFO */}
//             <div className="p-7 sm:p-10 lg:p-12">
//               <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#6055A6]">
//                 Find Superguard
//               </span>

//               <h2 className="mt-5 text-[39px] font-black leading-[0.96] tracking-[-0.055em] text-[#17151C] sm:text-[52px]">
//                 Local support in
//                 <span className="block text-[#6055A6]">
//                   Marylebone.
//                 </span>
//               </h2>

//               <p className="mt-6 text-sm font-medium leading-7 text-[#706A77]">
//                 Superguard Services Marylebone provides pest control
//                 support for residential and commercial properties in
//                 Marylebone and surrounding London areas.
//               </p>

//               <div className="mt-9 rounded-2xl bg-[#F5F3FA] p-5">
//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6055A6] text-white">
//                     <MapPin size={19} strokeWidth={2.4} />
//                   </span>

//                   <div>
//                     <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#98919F]">
//                       Business Address
//                     </span>

//                     <address className="mt-2 not-italic text-sm font-black leading-6 text-[#24202A]">
//                       {LOCAL.address}
//                     </address>
//                   </div>
//                 </div>
//               </div>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-4 flex items-center justify-between rounded-2xl border border-[#DDD9E8] px-5 py-4 transition-colors hover:border-[#6055A6] hover:bg-[#F7F6FB]"
//               >
//                 <div className="flex items-center gap-3">
//                   <Phone
//                     size={18}
//                     className="text-[#6055A6]"
//                     strokeWidth={2.4}
//                   />

//                   <span className="text-sm font-black text-[#24202A]">
//                     {LOCAL.phoneDisplay}
//                   </span>
//                 </div>

//                 <ArrowUpRight
//                   size={17}
//                   className="text-[#6055A6]"
//                 />
//               </a>
//             </div>

//             {/* MAP */}
//             <div className="relative min-h-[480px] overflow-hidden bg-[#EEEAF7]">
//               <iframe
//                 title={`${LOCAL.company} location map`}
//                 src="https://maps.google.com/maps?q=49%20Shroton%20Street%2C%20London%20NW1%206UB&t=&z=16&ie=UTF8&iwloc=&output=embed"
//                 className="absolute inset-0 h-full w-full border-0"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 allowFullScreen
//               />

//               <div className="pointer-events-none absolute inset-0 bg-[#6055A6]/[0.04]" />

//               <div className="absolute left-5 top-5 rounded-2xl bg-[#17151C]/95 px-5 py-4 text-white shadow-xl sm:left-7 sm:top-7">
//                 <div className="flex items-center gap-3">
//                   <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6055A6]">
//                     <MapPin size={17} />
//                   </span>

//                   <div>
//                     <span className="block text-[8px] font-black uppercase tracking-[0.18em] text-white/50">
//                       Local location
//                     </span>

//                     <span className="mt-1 block text-xs font-black">
//                       Marylebone · NW1 6UB
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[340px]">
//                 <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                   Superguard Services Marylebone
//                 </span>

//                 <p className="mb-0 mt-2 text-sm font-black leading-6 text-[#17151C]">
//                   {LOCAL.address}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* BOTTOM FEATURES */}
//           <div className="mt-8 grid gap-4 md:grid-cols-3">
//             <div className="rounded-2xl border border-[#DDD9E8] bg-white p-6">
//               <Sparkles
//                 size={21}
//                 className="text-[#6055A6]"
//                 strokeWidth={2.3}
//               />

//               <span className="mt-5 block text-[8px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                 Local Service
//               </span>

//               <p className="mb-0 mt-2 text-sm font-semibold leading-6 text-[#706A77]">
//                 Pest control support across Marylebone and surrounding
//                 London areas.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-[#DDD9E8] bg-white p-6">
//               <ShieldCheck
//                 size={21}
//                 className="text-[#6055A6]"
//                 strokeWidth={2.3}
//               />

//               <span className="mt-5 block text-[8px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                 Clear Enquiries
//               </span>

//               <p className="mb-0 mt-2 text-sm font-semibold leading-6 text-[#706A77]">
//                 Tell us what you have noticed so the right service can
//                 be considered.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-[#DDD9E8] bg-white p-6">
//               <Phone
//                 size={21}
//                 className="text-[#6055A6]"
//                 strokeWidth={2.3}
//               />

//               <span className="mt-5 block text-[8px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                 Speak To Us
//               </span>

//               <p className="mb-0 mt-2 text-sm font-semibold leading-6 text-[#706A77]">
//                 Prefer to speak directly? Call Superguard Marylebone on{" "}
//                 {LOCAL.phoneDisplay}.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================= */}

//       <section className="bg-[#17151C] py-16 text-white sm:py-20">
//         <div className="mx-auto flex max-w-[1100px] flex-col items-center px-5 text-center sm:px-8">
//           <span className="text-[9px] font-black uppercase tracking-[0.27em] text-[#A9A2D4]">
//             Superguard Services Marylebone
//           </span>

//           <h2 className="mt-5 max-w-[850px] text-[40px] font-black leading-[0.96] tracking-[-0.055em] sm:text-[58px]">
//             Pest problem?
//             <span className="block text-[#8D84C1]">
//               Start with an enquiry.
//             </span>
//           </h2>

//           <p className="mt-5 max-w-[620px] text-sm font-medium leading-7 text-white/50 sm:text-base">
//             Contact our Marylebone team with the details of your pest
//             issue and property.
//           </p>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="mt-8 flex items-center gap-3 rounded-2xl bg-[#6055A6] px-7 py-4 text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white hover:text-[#17151C]"
//           >
//             <Phone size={17} />
//             Call {LOCAL.phoneDisplay}
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }

// /* =============================================================
//    REUSABLE FORM FIELD
// ============================================================= */

// function ContactField({
//   label,
//   required = false,
//   children,
// }) {
//   return (
//     <label className="mary-field block rounded-2xl border border-[#DED9E8] bg-white px-5 py-4 transition-all duration-300">
//       <span className="mary-field-label mb-3 block text-[8px] font-black uppercase tracking-[0.2em] text-[#88818F] transition-colors">
//         {label}

//         {required && (
//           <span
//             aria-hidden="true"
//             className="ml-1 text-[#6055A6]"
//           >
//             *
//           </span>
//         )}
//       </span>

//       {children}
//     </label>
//   );
// }














// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// import {
//   ArrowUpRight,
//   Building2,
//   ChevronDown,
//   Clock3,
//   Mail,
//   MapPin,
//   MessageCircle,
//   Phone,
//   Search,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   /* =========================================================
//      LOCAL BUSINESS DETAILS
//   ========================================================= */

//   const LOCAL = {
//     company: "Superguard Services West Wickham",
//     shortName: "Superguard West Wickham",
//     area: "West Wickham",
//     city: "London",
//     postcode: "BR4 0QL",
//     streetAddress: "16 Ash Grove",
//     address: "16 Ash Grove, West Wickham BR4 0QL",
//     phoneDisplay: "07356 270867",
//     phoneTel: "+447356270867",
//     email: "info@superguardwestwickham.uk",
//   };

//   /* =========================================================
//      SERVICES
//   ========================================================= */

//   const services = [
//     "Rats & Mice Control",
//     "Bed Bug Treatment",
//     "Ant Control",
//     "Cockroach Control",
//     "Flea Treatment",
//     "Carpet Moth Treatment",
//     "Carpet Beetle Control",
//     "Wasp Nest Control",
//     "Bee Activity Guidance",
//     "Squirrel Control",
//     "Bird Control & Deterrents",
//     "Property Proofing",
//     "General Pest Inspection",
//   ];

//   const propertyTypes = [
//     "Homes & Flats",
//     "Landlord Properties",
//     "Offices",
//     "Retail Premises",
//     "Commercial Buildings",
//     "Rental Properties",
//   ];

//   /* =========================================================
//      FORM HANDLERS
//   ========================================================= */

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((currentData) => ({
//       ...currentData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (loading) return;

//     setLoading(true);

//     const loadingToast = toast.loading("Sending your enquiry...");

//     try {
//       await axios.post("https://superguard-wickham-backend.vercel.app/api/contact", {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.address,
//       });

//       toast.success(`${LOCAL.shortName} will contact you shortly.`, {
//         id: loadingToast,
//         duration: 5000,
//       });

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Contact form error:", error);

//       toast.error(
//         error?.response?.data?.message ||
//           "Something went wrong. Please try again.",
//         {
//           id: loadingToast,
//           duration: 5000,
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           style: {
//             borderRadius: "14px",
//             background: "#17151C",
//             color: "#ffffff",
//             fontWeight: "700",
//           },
//         }}
//       />

//       <main className="overflow-hidden bg-white text-[#17151C]">

//         {/* =========================================================
//             HERO — FULL WIDTH PURPLE
//         ========================================================= */}

//         <section
//           itemScope
//           itemType="https://schema.org/PestControlService"
//           aria-labelledby="contact-heading"
//           className="relative overflow-hidden bg-[#6055A6] text-white"
//         >
//           <meta itemProp="name" content={LOCAL.company} />

//           <meta
//             itemProp="areaServed"
//             content={`${LOCAL.area}, ${LOCAL.city}`}
//           />

//           <div
//             itemProp="address"
//             itemScope
//             itemType="https://schema.org/PostalAddress"
//             className="hidden"
//           >
//             <meta
//               itemProp="streetAddress"
//               content={LOCAL.streetAddress}
//             />

//             <meta
//               itemProp="addressLocality"
//               content={LOCAL.area}
//             />

//             <meta
//               itemProp="postalCode"
//               content={LOCAL.postcode}
//             />

//             <meta
//               itemProp="addressCountry"
//               content="GB"
//             />
//           </div>

//           {/* Decorative circles */}

//           <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-white/10" />

//           <div className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full border border-white/10" />

//           <div className="pointer-events-none absolute -left-48 bottom-[-250px] h-[550px] w-[550px] rounded-full border border-white/5" />

//           <div className="relative mx-auto max-w-[1500px] px-5 pb-20 pt-32 text-center sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-44">

//             {/* LABEL */}

//             <div className="mb-8 flex items-center justify-center gap-4">

//               <span className="h-px w-10 bg-white/40" />

//               <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.3em] text-white/75">
//                 <Sparkles size={13} />
//                 Contact Superguard
//               </span>

//               <span className="h-px w-10 bg-white/40" />

//             </div>

//             {/* HEADING */}

//             <h1
//               id="contact-heading"
//               className="mx-auto max-w-[1050px] text-[58px] font-black leading-[.86] tracking-[-.075em] sm:text-[82px] md:text-[100px] lg:text-[118px]"
//             >
//               Pest problem?
//               <span className="block text-white/55">
//                 Let's talk.
//               </span>
//             </h1>

//             {/* DESCRIPTION */}

//             <p className="mx-auto mt-9 max-w-[700px] text-sm font-medium leading-8 text-white/75 sm:text-lg">
//               Tell {LOCAL.company} what you have noticed and
//               provide a few details about your property. Our local
//               team can review your enquiry and help you understand
//               the next practical step.
//             </p>

//             {/* CTA BUTTONS */}

//             <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="group inline-flex min-h-[60px] items-center justify-center gap-8 bg-white px-8 text-[9px] font-black uppercase tracking-[.18em] text-[#6055A6] transition duration-300 hover:-translate-y-1"
//               >
//                 <span className="flex items-center gap-3">
//                   <Phone size={16} />
//                   Call Our Team
//                 </span>

//                 <ArrowUpRight
//                   size={17}
//                   className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </a>

//               <a
//                 href={`mailto:${LOCAL.email}`}
//                 className="group inline-flex min-h-[60px] items-center justify-center gap-8 border border-white/30 px-8 text-[9px] font-black uppercase tracking-[.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6055A6]"
//               >
//                 <span className="flex items-center gap-3">
//                   <Mail size={16} />
//                   Email Us
//                 </span>

//                 <ArrowUpRight
//                   size={17}
//                   className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </a>

//             </div>

//             {/* HERO INFO STRIP */}

//             <div className="mx-auto mt-16 grid max-w-[1050px] border-y border-white/15 sm:grid-cols-3">

//               <div className="flex items-center justify-center gap-3 px-5 py-6">
//                 <ShieldCheck size={19} className="text-white/70" />

//                 <span className="text-[9px] font-black uppercase tracking-[.16em] text-white/80">
//                   Professional Support
//                 </span>
//               </div>

//               <div className="flex items-center justify-center gap-3 border-t border-white/15 px-5 py-6 sm:border-l sm:border-t-0">
//                 <MapPin size={19} className="text-white/70" />

//                 <span className="text-[9px] font-black uppercase tracking-[.16em] text-white/80">
//                   West Wickham Team
//                 </span>
//               </div>

//               <div className="flex items-center justify-center gap-3 border-t border-white/15 px-5 py-6 sm:border-l sm:border-t-0">
//                 <MessageCircle size={19} className="text-white/70" />

//                 <span className="text-[9px] font-black uppercase tracking-[.16em] text-white/80">
//                   Clear Communication
//                 </span>
//               </div>

//             </div>

//           </div>
//         </section>


//         {/* =========================================================
//             CONTACT + FORM
//         ========================================================= */}

//         <section className="bg-white py-20 sm:py-24 lg:py-32">

//           <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

//             <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">

//               {/* =================================================
//                   LEFT — LOCAL CONTACT
//               ================================================= */}

//               <div className="lg:sticky lg:top-28 lg:self-start">

//                 <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                   01 — Local Contact
//                 </span>

//                 <h2 className="mt-6 max-w-[500px] text-[50px] font-black leading-[.88] tracking-[-.065em] sm:text-[67px]">
//                   Speak directly
//                   <span className="block text-[#6055A6]">
//                     with our team.
//                   </span>
//                 </h2>

//                 <p className="mt-7 max-w-[470px] text-sm font-medium leading-8 text-[#77717B] sm:text-base">
//                   Have a pest problem or need some advice?
//                   Contact {LOCAL.shortName} and tell us what is
//                   happening at your property.
//                 </p>

//                 {/* CONTACT DETAILS */}

//                 <div className="mt-10 border-t border-[#6055A6]/15">

//                   {/* PHONE */}

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="group flex items-center gap-5 border-b border-[#6055A6]/15 py-7"
//                   >
//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#6055A6] text-white">
//                       <Phone size={19} />
//                     </div>

//                     <div>
//                       <span className="block text-[8px] font-black uppercase tracking-[.2em] text-[#9B96A0]">
//                         Phone
//                       </span>

//                       <span className="mt-2 block text-lg font-black">
//                         {LOCAL.phoneDisplay}
//                       </span>
//                     </div>

//                     <ArrowUpRight
//                       size={17}
//                       className="ml-auto text-[#6055A6] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                     />
//                   </a>


//                   {/* ADDRESS */}

//                   <div className="flex items-start gap-5 border-b border-[#6055A6]/15 py-7">

//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#6055A6] text-white">
//                       <MapPin size={19} />
//                     </div>

//                     <div>
//                       <span className="block text-[8px] font-black uppercase tracking-[.2em] text-[#9B96A0]">
//                         Address
//                       </span>

//                       <address className="mt-2 not-italic text-sm font-bold leading-6 text-[#17151C]">
//                         {LOCAL.address}
//                       </address>
//                     </div>

//                   </div>


//                   {/* ENQUIRIES */}

//                   <div className="flex items-start gap-5 py-7">

//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#6055A6] text-white">
//                       <Clock3 size={19} />
//                     </div>

//                     <div>
//                       <span className="block text-[8px] font-black uppercase tracking-[.2em] text-[#9B96A0]">
//                         Enquiries
//                       </span>

//                       <span className="mt-2 block max-w-[320px] text-sm font-bold leading-6">
//                         Residential & commercial pest enquiries
//                       </span>
//                     </div>

//                   </div>

//                 </div>


//                 {/* EMAIL BOX */}

//                 <a
//                   href={`mailto:${LOCAL.email}`}
//                   className="group mt-6 flex items-center gap-4 border border-[#6055A6]/15 p-5 transition hover:border-[#6055A6] hover:bg-[#6055A6] hover:text-white"
//                 >

//                   <Mail
//                     size={19}
//                     className="shrink-0 text-[#6055A6] group-hover:text-white"
//                   />

//                   <span className="min-w-0">

//                     <span className="block text-[8px] font-black uppercase tracking-[.2em] opacity-50">
//                       Email
//                     </span>

//                     <span className="mt-1 block break-all text-sm font-black">
//                       {LOCAL.email}
//                     </span>

//                   </span>

//                   <ArrowUpRight
//                     size={17}
//                     className="ml-auto shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />

//                 </a>

//               </div>


//               {/* =================================================
//                   RIGHT — FORM
//               ================================================= */}

//               <div className="border border-[#6055A6]/15 bg-white shadow-[0_25px_80px_rgba(96,85,166,.08)]">

//                 {/* FORM HEADER */}

//                 <div className="bg-[#6055A6] px-6 py-8 text-white sm:px-9 sm:py-10">

//                   <div className="flex items-start justify-between gap-5">

//                     <div>

//                       <span className="text-[8px] font-black uppercase tracking-[.25em] text-white/55">
//                         Pest Control Enquiry
//                       </span>

//                       <h3 className="mt-3 text-2xl font-black tracking-[-.04em] sm:text-3xl">
//                         Tell us about the problem.
//                       </h3>

//                     </div>

//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 bg-white/10">
//                       <MessageCircle size={21} />
//                     </div>

//                   </div>

//                 </div>


//                 {/* FORM */}

//                 <form
//                   onSubmit={handleSubmit}
//                   className="p-6 sm:p-9 lg:p-11"
//                 >

//                   <div className="mb-8 flex items-center justify-between border-b border-[#6055A6]/15 pb-6">

//                     <p className="text-sm font-semibold text-[#77717B]">
//                       Complete the form and send your enquiry.
//                     </p>

//                     <span className="hidden text-[8px] font-black uppercase tracking-[.15em] text-[#6055A6] sm:block">
//                       * Required
//                     </span>

//                   </div>


//                   {/* NAME + EMAIL */}

//                   <div className="grid gap-5 md:grid-cols-2">

//                     <ContactField label="Full Name" required>
//                       <input
//                         type="text"
//                         name="name"
//                         autoComplete="name"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your full name"
//                         className="w-full bg-transparent text-sm font-bold text-[#17151C] outline-none placeholder:font-medium placeholder:text-[#AAA5AE]"
//                       />
//                     </ContactField>

//                     <ContactField label="Email Address" required>
//                       <input
//                         type="email"
//                         name="email"
//                         autoComplete="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Your email address"
//                         className="w-full bg-transparent text-sm font-bold text-[#17151C] outline-none placeholder:font-medium placeholder:text-[#AAA5AE]"
//                       />
//                     </ContactField>

//                   </div>


//                   {/* PHONE + POSTCODE */}

//                   <div className="mt-5 grid gap-5 md:grid-cols-2">

//                     <ContactField label="Contact Number" required>
//                       <input
//                         type="tel"
//                         name="phone"
//                         autoComplete="tel"
//                         inputMode="tel"
//                         required
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Your contact number"
//                         className="w-full bg-transparent text-sm font-bold text-[#17151C] outline-none placeholder:font-medium placeholder:text-[#AAA5AE]"
//                       />
//                     </ContactField>

//                     <ContactField label="Property Postcode" required>
//                       <input
//                         type="text"
//                         name="postcode"
//                         autoComplete="postal-code"
//                         required
//                         value={formData.postcode}
//                         onChange={handleChange}
//                         placeholder="e.g. BR4 0QL"
//                         className="w-full bg-transparent text-sm font-bold uppercase text-[#17151C] outline-none placeholder:normal-case placeholder:font-medium placeholder:text-[#AAA5AE]"
//                       />
//                     </ContactField>

//                   </div>


//                   {/* SERVICE */}

//                   <div className="mt-5">

//                     <ContactField label="Service Required" required>

//                       <div className="relative">

//                         <select
//                           name="service"
//                           required
//                           value={formData.service}
//                           onChange={handleChange}
//                           className="w-full appearance-none bg-transparent pr-10 text-sm font-bold text-[#17151C] outline-none"
//                         >

//                           <option value="">
//                             Choose a pest control service
//                           </option>

//                           {services.map((service) => (
//                             <option key={service} value={service}>
//                               {service}
//                             </option>
//                           ))}

//                         </select>

//                         <ChevronDown
//                           size={19}
//                           className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#6055A6]"
//                         />

//                       </div>

//                     </ContactField>

//                   </div>


//                   {/* MESSAGE */}

//                   <div className="mt-5">

//                     <ContactField
//                       label="Tell Us About The Pest Issue"
//                       required
//                     >

//                       <textarea
//                         name="message"
//                         required
//                         rows={7}
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Describe what you have noticed, where the activity is happening and when you first noticed it..."
//                         className="w-full resize-none bg-transparent text-sm font-semibold leading-7 text-[#17151C] outline-none placeholder:font-medium placeholder:text-[#AAA5AE]"
//                       />

//                     </ContactField>

//                   </div>


//                   {/* SUBMIT */}

//                   <div className="mt-7 flex flex-col gap-5 border-t border-[#6055A6]/15 pt-7 sm:flex-row sm:items-center sm:justify-between">

//                     <div className="flex items-center gap-3">

//                       <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#6055A6] text-white">
//                         <ShieldCheck size={18} />
//                       </div>

//                       <p className="max-w-[280px] text-[10px] font-semibold leading-5 text-[#817B85]">
//                         Your enquiry details are used to help
//                         review and respond to your request.
//                       </p>

//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="group flex min-h-[60px] items-center justify-center gap-5 bg-[#6055A6] px-8 text-[9px] font-black uppercase tracking-[.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#51478F] disabled:cursor-not-allowed disabled:opacity-60"
//                     >

//                       {loading ? (
//                         <>
//                           <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
//                           Sending
//                         </>
//                       ) : (
//                         <>
//                           Send Enquiry

//                           <ArrowUpRight
//                             size={17}
//                             className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                           />
//                         </>
//                       )}

//                     </button>

//                   </div>

//                 </form>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =========================================================
//             WHY CONTACT US
//         ========================================================= */}

//         <section className="bg-[#6055A6] text-white">

//           <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//             <div className="text-center">

//               <span className="text-[9px] font-black uppercase tracking-[.28em] text-white/55">
//                 02 — Before You Contact Us
//               </span>

//               <h2 className="mx-auto mt-6 max-w-[800px] text-[50px] font-black leading-[.88] tracking-[-.065em] sm:text-[70px]">
//                 Tell us what
//                 <span className="block text-white/55">
//                   you know.
//                 </span>
//               </h2>

//               <p className="mx-auto mt-7 max-w-[680px] text-sm font-medium leading-8 text-white/75 sm:text-lg">
//                 You do not need to know exactly what pest you
//                 have before contacting us. Simply explain what
//                 you have noticed, where you have noticed it and
//                 when the activity started.
//               </p>

//             </div>


//             <div className="mx-auto mt-14 grid max-w-[1100px] border-y border-white/15 sm:grid-cols-3">

//               {[
//                 {
//                   number: "01",
//                   title: "What you noticed",
//                   icon: Search,
//                 },
//                 {
//                   number: "02",
//                   title: "Where it is happening",
//                   icon: MapPin,
//                 },
//                 {
//                   number: "03",
//                   title: "When it started",
//                   icon: Clock3,
//                 },
//               ].map((item, index) => {

//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.number}
//                     className={`p-7 text-center sm:p-9 ${
//                       index !== 0
//                         ? "border-t border-white/15 sm:border-l sm:border-t-0"
//                         : ""
//                     }`}
//                   >

//                     <div className="mx-auto flex h-12 w-12 items-center justify-center border border-white/15 bg-white/10">
//                       <Icon size={19} />
//                     </div>

//                     <span className="mt-5 block text-[8px] font-black text-white/40">
//                       {item.number}
//                     </span>

//                     <h3 className="mt-2 text-lg font-black">
//                       {item.title}
//                     </h3>

//                   </div>
//                 );
//               })}

//             </div>

//           </div>

//         </section>


//         {/* =========================================================
//             SERVICES
//         ========================================================= */}

//         <section className="bg-white py-20 sm:py-24 lg:py-28">

//           <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

//             <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">

//               <div>

//                 <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                   03 — Pest Control Services
//                 </span>

//                 <h2 className="mt-6 text-[50px] font-black leading-[.87] tracking-[-.065em] sm:text-[68px]">
//                   What can we
//                   <span className="block text-[#6055A6]">
//                     help with?
//                   </span>
//                 </h2>

//                 <p className="mt-7 max-w-[460px] text-sm font-medium leading-8 text-[#77717B]">
//                   From common household pests to commercial
//                   property issues, tell us which service best
//                   matches what you have noticed.
//                 </p>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="mt-8 inline-flex items-center gap-4 bg-[#6055A6] px-6 py-4 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:-translate-y-1"
//                 >
//                   <Phone size={15} />
//                   {LOCAL.phoneDisplay}
//                 </a>

//               </div>


//               <div className="grid sm:grid-cols-2">

//                 {services.map((service, index) => (

//                   <div
//                     key={service}
//                     className="group border-b border-[#6055A6]/15 py-5 sm:px-6"
//                   >

//                     <div className="flex items-start justify-between gap-4">

//                       <div className="flex gap-3">

//                         <span className="mt-0.5 text-[8px] font-black text-[#6055A6]/50">
//                           {String(index + 1).padStart(2, "0")}
//                         </span>

//                         <span className="text-[11px] font-bold leading-5 transition group-hover:text-[#6055A6]">
//                           {service}
//                         </span>

//                       </div>

//                       <ArrowUpRight
//                         size={14}
//                         className="shrink-0 text-[#6055A6]/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6055A6]"
//                       />

//                     </div>

//                   </div>

//                 ))}

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =========================================================
//             PROPERTY TYPES
//         ========================================================= */}

//         <section className="bg-[#F7F6FA] py-20 sm:py-24 lg:py-28">

//           <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

//             <div className="text-center">

//               <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                 04 — Who We Support
//               </span>

//               <h2 className="mx-auto mt-6 max-w-[850px] text-[50px] font-black leading-[.88] tracking-[-.065em] sm:text-[68px]">
//                 For homes,
//                 <span className="text-[#6055A6]">
//                   {" "}landlords & businesses.
//                 </span>
//               </h2>

//               <p className="mx-auto mt-7 max-w-[650px] text-sm font-medium leading-8 text-[#77717B]">
//                 Our enquiry process is designed for different
//                 property types, from homes and rental properties
//                 to offices and commercial premises.
//               </p>

//             </div>


//             <div className="mt-14 grid border-t border-[#6055A6]/15 sm:grid-cols-2 lg:grid-cols-3">

//               {propertyTypes.map((type, index) => (

//                 <div
//                   key={type}
//                   className="group flex min-h-[160px] flex-col justify-between border-b border-[#6055A6]/15 p-7 sm:p-9"
//                 >

//                   <div className="flex items-center justify-between">

//                     <span className="text-[9px] font-black text-[#6055A6]">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <Building2
//                       size={20}
//                       className="text-[#6055A6]"
//                     />

//                   </div>

//                   <h3 className="mt-10 text-xl font-black tracking-[-.035em] transition group-hover:text-[#6055A6]">
//                     {type}
//                   </h3>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </section>


//         {/* =========================================================
//             HOW IT WORKS
//         ========================================================= */}

//         <section className="bg-white py-20 sm:py-24 lg:py-28">

//           <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

//             <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">

//               <div>

//                 <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                   05 — Simple Process
//                 </span>

//                 <h2 className="mt-6 text-[50px] font-black leading-[.87] tracking-[-.065em] sm:text-[65px]">
//                   From enquiry
//                   <span className="block text-[#6055A6]">
//                     to next step.
//                   </span>
//                 </h2>

//               </div>


//               <div className="border-t border-[#6055A6]/15">

//                 {[
//                   {
//                     number: "01",
//                     title: "Send your details",
//                     text: "Complete the enquiry form with your contact details, postcode and information about the pest activity.",
//                   },
//                   {
//                     number: "02",
//                     title: "We review the enquiry",
//                     text: "The information you provide helps us understand the type of property and the issue you are experiencing.",
//                   },
//                   {
//                     number: "03",
//                     title: "Discuss the situation",
//                     text: "Our team can discuss the enquiry with you and help identify the appropriate next step.",
//                   },
//                 ].map((item) => (

//                   <div
//                     key={item.number}
//                     className="grid gap-5 border-b border-[#6055A6]/15 py-8 sm:grid-cols-[70px_230px_1fr]"
//                   >

//                     <span className="text-[9px] font-black text-[#6055A6]">
//                       {item.number}
//                     </span>

//                     <h3 className="text-2xl font-black tracking-[-.04em]">
//                       {item.title}
//                     </h3>

//                     <p className="text-sm leading-7 text-[#77717B]">
//                       {item.text}
//                     </p>

//                   </div>

//                 ))}

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =========================================================
//             LOCATION + FULL WIDTH MAP
//         ========================================================= */}

//         <section className="bg-[#6055A6] text-white">

//           <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//             {/* LOCATION HEADING */}

//             <div className="mx-auto max-w-[900px] text-center">

//               <span className="text-[9px] font-black uppercase tracking-[.28em] text-white/55">
//                 06 — Find Us
//               </span>

//               <h2 className="mt-6 text-[50px] font-black leading-[.88] tracking-[-.065em] sm:text-[65px]">
//                 Local support in
//                 <span className="block text-white/55">
//                   West Wickham.
//                 </span>
//               </h2>

//               <p className="mx-auto mt-7 max-w-[650px] text-sm font-medium leading-8 text-white/70 sm:text-base">
//                 {LOCAL.company} provides pest control support
//                 for residential and commercial properties in
//                 {` ${LOCAL.area}`} and surrounding London areas.
//               </p>

//             </div>


//             {/* FULL WIDTH MAP */}

//             <div className="relative mt-14 min-h-[500px] overflow-hidden border border-white/15 bg-white shadow-2xl sm:min-h-[600px] lg:min-h-[650px]">

//               <iframe
//                 title={`${LOCAL.company} location map`}
//                 src="https://maps.google.com/maps?q=16%20Ash%20Grove%2C%20West%20Wickham%20BR4%200QL&t=&z=15&ie=UTF8&iwloc=&output=embed"
//                 className="absolute inset-0 h-full w-full border-0"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 allowFullScreen
//               />

//               {/* MAP LABEL */}

//               <div className="pointer-events-none absolute left-5 top-5 bg-[#6055A6] px-5 py-4 text-white shadow-xl sm:left-7 sm:top-7">

//                 <span className="block text-[8px] font-black uppercase tracking-[.2em] text-white/55">
//                   Local Location
//                 </span>

//                 <span className="mt-1 block text-sm font-black">
//                   West Wickham · BR4 0QL
//                 </span>

//               </div>

//             </div>


//             {/* LOCATION INFO STRIP */}

//             <div className="mt-8 grid border-y border-white/15 sm:grid-cols-3">

//               <div className="flex items-center justify-center gap-4 px-5 py-6 text-center">

//                 <MapPin
//                   size={19}
//                   className="shrink-0 text-white/65"
//                 />

//                 <div>
//                   <span className="block text-[8px] font-black uppercase tracking-[.2em] text-white/40">
//                     Address
//                   </span>

//                   <span className="mt-1 block text-sm font-bold">
//                     {LOCAL.address}
//                   </span>
//                 </div>

//               </div>


//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="group flex items-center justify-center gap-4 border-t border-white/15 px-5 py-6 text-center transition hover:bg-white/10 sm:border-l sm:border-t-0"
//               >

//                 <Phone
//                   size={19}
//                   className="shrink-0 text-white/65"
//                 />

//                 <div>
//                   <span className="block text-[8px] font-black uppercase tracking-[.2em] text-white/40">
//                     Phone
//                   </span>

//                   <span className="mt-1 block text-sm font-black">
//                     {LOCAL.phoneDisplay}
//                   </span>
//                 </div>

//                 <ArrowUpRight
//                   size={16}
//                   className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />

//               </a>


//               <a
//                 href={`mailto:${LOCAL.email}`}
//                 className="group flex items-center justify-center gap-4 border-t border-white/15 px-5 py-6 text-center transition hover:bg-white/10 sm:border-l sm:border-t-0"
//               >

//                 <Mail
//                   size={19}
//                   className="shrink-0 text-white/65"
//                 />

//                 <div className="min-w-0">

//                   <span className="block text-[8px] font-black uppercase tracking-[.2em] text-white/40">
//                     Email
//                   </span>

//                   <span className="mt-1 block break-all text-sm font-black">
//                     {LOCAL.email}
//                   </span>

//                 </div>

//                 <ArrowUpRight
//                   size={16}
//                   className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />

//               </a>

//             </div>

//           </div>

//         </section>


//         {/* =========================================================
//             FINAL CTA
//         ========================================================= */}

//         <section className="bg-white">

//           <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//             <div className="relative overflow-hidden bg-[#6055A6] px-7 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">

//               <div className="pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full border border-white/10" />

//               <div className="pointer-events-none absolute -right-5 -top-5 h-[220px] w-[220px] rounded-full border border-white/10" />

//               <div className="relative z-10 grid items-end gap-12 lg:grid-cols-[1fr_auto]">

//                 <div>

//                   <span className="text-[9px] font-black uppercase tracking-[.28em] text-white/55">
//                     07 — Get In Touch
//                   </span>

//                   <h2 className="mt-6 max-w-[850px] text-[52px] font-black leading-[.86] tracking-[-.065em] sm:text-[72px] lg:text-[88px]">
//                     Ready to talk
//                     <span className="block text-white/55">
//                       about the problem?
//                     </span>
//                   </h2>

//                   <p className="mt-7 max-w-[620px] text-sm font-medium leading-8 text-white/70 sm:text-base">
//                     Contact {LOCAL.company} today with the details
//                     of your pest issue and property.
//                   </p>

//                 </div>


//                 <div className="flex flex-col gap-3">

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="group flex min-h-[62px] min-w-[250px] items-center justify-between gap-8 bg-white px-7 text-[9px] font-black uppercase tracking-[.18em] text-[#17151C] transition duration-300 hover:-translate-y-1"
//                   >

//                     <span className="flex items-center gap-3">
//                       <Phone size={16} />
//                       Call Our Team
//                     </span>

//                     <ArrowUpRight
//                       size={17}
//                       className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                     />

//                   </a>


//                   <a
//                     href="#contact-heading"
//                     className="group flex min-h-[62px] min-w-[250px] items-center justify-between gap-8 border border-white/30 px-7 text-[9px] font-black uppercase tracking-[.18em] text-white transition duration-300 hover:bg-white hover:text-[#17151C]"
//                   >

//                     Send An Enquiry

//                     <ArrowUpRight
//                       size={17}
//                       className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                     />

//                   </a>

//                 </div>

//               </div>


//               {/* BOTTOM DETAILS */}

//               <div className="relative z-10 mt-14 grid gap-6 border-t border-white/15 pt-7 sm:grid-cols-3">

//                 <div>

//                   <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/40">
//                     Company
//                   </span>

//                   <p className="mt-2 text-sm font-bold">
//                     {LOCAL.company}
//                   </p>

//                 </div>


//                 <div>

//                   <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/40">
//                     Location
//                   </span>

//                   <p className="mt-2 text-sm font-bold">
//                     {LOCAL.area}, {LOCAL.city} · {LOCAL.postcode}
//                   </p>

//                 </div>


//                 <div>

//                   <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/40">
//                     Phone
//                   </span>

//                   <p className="mt-2 text-sm font-bold">
//                     {LOCAL.phoneDisplay}
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>

//       </main>
//     </>
//   );
// }


// /* =============================================================
//    REUSABLE FORM FIELD
// ============================================================= */

// function ContactField({
//   label,
//   required = false,
//   children,
// }) {
//   return (
//     <label className="group block">

//       <span className="mb-2.5 block text-[8px] font-black uppercase tracking-[.2em] text-[#77717B] transition-colors group-focus-within:text-[#6055A6]">

//         {label}

//         {required && (
//           <span className="ml-1 text-[#6055A6]">
//             *
//           </span>
//         )}

//       </span>

//       <div className="border border-[#6055A6]/15 bg-white px-5 py-4 transition-all duration-300 focus-within:border-[#6055A6] focus-within:shadow-[0_0_0_4px_rgba(96,85,166,.06)]">

//         {children}

//       </div>

//     </label>
//   );
// }












import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  Clock3,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  /* =========================================================
     LOCAL BUSINESS DETAILS
  ========================================================= */

  const LOCAL = {
    company: "SuperGuard Services Isleworth",
    shortName: "SuperGuard Isleworth",
    area: "Isleworth",
    city: "London",
    postcode: "TW7 7HG",
    streetAddress: "71 Talbot Rd",
    address: "71 Talbot Rd, Isleworth TW7 7HG, United Kingdom",
    phoneDisplay: "7405 940152",
    phoneTel: "+447405940152",
  };

  /* =========================================================
     SERVICES
  ========================================================= */

  const services = [
    "Rats & Mice Control",
    "Bed Bug Treatment",
    "Ant Control",
    "Cockroach Control",
    "Flea Treatment",
    "Carpet Moth Treatment",
    "Carpet Beetle Control",
    "Wasp Nest Control",
    "Bee Activity Guidance",
    "Squirrel Control",
    "Bird Control & Deterrents",
    "Property Proofing",
    "General Pest Inspection",
  ];

  const propertyTypes = [
    {
      title: "Homes & Flats",
      text: "For pest issues affecting everyday residential spaces.",
      icon: Home,
    },
    {
      title: "Landlord Properties",
      text: "Support for rental properties and tenant-reported issues.",
      icon: Building2,
    },
    {
      title: "Offices",
      text: "Practical pest enquiries for working environments.",
      icon: Building2,
    },
    {
      title: "Retail Premises",
      text: "Enquiries for customer-facing commercial spaces.",
      icon: Building2,
    },
    {
      title: "Commercial Buildings",
      text: "Pest concerns across larger business premises.",
      icon: Building2,
    },
    {
      title: "Rental Properties",
      text: "Help discussing pest activity within rented accommodation.",
      icon: Home,
    },
  ];

  /* =========================================================
     FORM HANDLERS
  ========================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    const loadingToast = toast.loading("Sending your enquiry...");

    try {
      await axios.post(
        "http://localhost:5000/api/contact",
        {
          ...formData,
          area: LOCAL.area,
          business: LOCAL.company,
          address: LOCAL.address,
        }
      );

      toast.success(`${LOCAL.shortName} will contact you shortly.`, {
        id: loadingToast,
        duration: 5000,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again.",
        {
          id: loadingToast,
          duration: 5000,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "14px",
            background: "#17151C",
            color: "#ffffff",
            fontWeight: "700",
          },
        }}
      />

      <main className="overflow-hidden bg-[#F7F6FA] text-[#15131A]">
        {/* =========================================================
            HERO — NEW SPLIT EDITORIAL DESIGN
        ========================================================= */}

        <section
          itemScope
          itemType="https://schema.org/PestControlService"
          aria-labelledby="contact-heading"
          className="relative overflow-hidden bg-[#F7F6FA]"
        >
          <meta itemProp="name" content={LOCAL.company} />

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
              content={LOCAL.area}
            />

            <meta
              itemProp="postalCode"
              content={LOCAL.postcode}
            />

            <meta itemProp="addressCountry" content="GB" />
          </div>

          {/* Decorative vertical line */}

          <div className="pointer-events-none absolute left-[6%] top-0 hidden h-full w-px bg-[#6055A6]/10 lg:block" />

          <div className="pointer-events-none absolute right-[6%] top-0 hidden h-full w-px bg-[#6055A6]/10 lg:block" />

          <div className="mx-auto max-w-[1550px] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36">
            <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
              {/* LEFT */}

              <div className="relative">
                <div className="mb-8 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center bg-[#6055A6] text-white">
                    <MessageCircle size={15} />
                  </span>

                  <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                    Contact · {LOCAL.area}
                  </span>
                </div>

                <h1
                  id="contact-heading"
                  className="max-w-[850px] text-[64px] font-black leading-[.82] tracking-[-.075em] sm:text-[88px] md:text-[105px] lg:text-[120px]"
                >
                  Let's solve
                  <span className="block text-[#6055A6]">
                    the pest problem.
                  </span>
                </h1>

                <div className="mt-10 max-w-[680px] border-l-2 border-[#6055A6] pl-6">
                  <p className="text-sm font-semibold leading-7 text-[#6F6A74] sm:text-base sm:leading-8">
                    Something unusual around your property?
                    Describe what you have seen, where it is
                    happening and what you need help with.
                    {` ${LOCAL.shortName}`} can review the
                    details and discuss the next practical step.
                  </p>
                </div>

                {/* Quick contact */}

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="group inline-flex min-h-[58px] items-center justify-between gap-8 bg-[#6055A6] px-6 text-[9px] font-black uppercase tracking-[.18em] text-white transition duration-300 hover:bg-[#51478F]"
                  >
                    <span className="flex items-center gap-3">
                      <Phone size={16} />
                      Call {LOCAL.area}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>

                  <div className="flex min-h-[58px] items-center gap-4 border border-[#6055A6]/15 bg-white px-6">
                    <MapPin size={16} className="text-[#6055A6]" />

                    <span className="text-[9px] font-black uppercase tracking-[.15em] text-[#625D67]">
                      {LOCAL.area} · {LOCAL.postcode}
                    </span>
                  </div>
                </div>

                {/* Small hero marker */}

                <div className="mt-14 flex items-center gap-5 border-t border-[#6055A6]/15 pt-6">
                  <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#6055A6]">
                    Local enquiry
                  </span>

                  <span className="h-px w-12 bg-[#6055A6]/25" />

                  <span className="text-[9px] font-bold text-[#8C8790]">
                    Residential · Commercial · Rental
                  </span>
                </div>
              </div>

              {/* RIGHT — FORM CARD */}

              <div className="relative">
                <div className="absolute -right-5 -top-5 hidden h-28 w-28 border-r border-t border-[#6055A6]/20 sm:block" />

                <div className="relative bg-[#24212D] text-white shadow-[0_30px_90px_rgba(36,33,45,.18)]">
                  {/* Form top */}

                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-6 sm:px-8">
                    <div>
                      <span className="text-[8px] font-black uppercase tracking-[.25em] text-white/40">
                        Enquiry form
                      </span>

                      <h2 className="mt-2 text-xl font-black tracking-[-.035em] sm:text-2xl">
                        Start with the details.
                      </h2>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center bg-[#6055A6]">
                      <ArrowUpRight size={19} />
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="px-6 py-7 sm:px-8 sm:py-9"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <DarkContactField label="Full Name" required>
                        <input
                          type="text"
                          name="name"
                          autoComplete="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full bg-transparent text-sm font-bold text-white outline-none placeholder:font-medium placeholder:text-white/30"
                        />
                      </DarkContactField>

                      <DarkContactField label="Email Address" required>
                        <input
                          type="email"
                          name="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          className="w-full bg-transparent text-sm font-bold text-white outline-none placeholder:font-medium placeholder:text-white/30"
                        />
                      </DarkContactField>
                    </div>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <DarkContactField label="Phone Number" required>
                        <input
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          inputMode="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your number"
                          className="w-full bg-transparent text-sm font-bold text-white outline-none placeholder:font-medium placeholder:text-white/30"
                        />
                      </DarkContactField>

                      <DarkContactField label="Postcode" required>
                        <input
                          type="text"
                          name="postcode"
                          autoComplete="postal-code"
                          required
                          value={formData.postcode}
                          onChange={handleChange}
                          placeholder="TW7 7HG"
                          className="w-full bg-transparent text-sm font-bold uppercase text-white outline-none placeholder:normal-case placeholder:font-medium placeholder:text-white/30"
                        />
                      </DarkContactField>
                    </div>

                    <div className="mt-5">
                      <DarkContactField
                        label="What do you need help with?"
                        required
                      >
                        <div className="relative">
                          <select
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full appearance-none bg-transparent pr-9 text-sm font-bold text-white outline-none"
                          >
                            <option
                              value=""
                              className="bg-[#24212D]"
                            >
                              Select a service
                            </option>

                            {services.map((service) => (
                              <option
                                key={service}
                                value={service}
                                className="bg-[#24212D]"
                              >
                                {service}
                              </option>
                            ))}
                          </select>

                          <ChevronDown
                            size={18}
                            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#A59ED8]"
                          />
                        </div>
                      </DarkContactField>
                    </div>

                    <div className="mt-5">
                      <DarkContactField
                        label="Briefly describe the issue"
                        required
                      >
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="What have you noticed, where is it happening and when did it start?"
                          className="w-full resize-none bg-transparent text-sm font-semibold leading-7 text-white outline-none placeholder:font-medium placeholder:text-white/30"
                        />
                      </DarkContactField>
                    </div>

                    <div className="mt-7 flex flex-col gap-5 border-t border-white/10 pt-6">
                      <div className="flex items-start gap-3">
                        <ShieldCheck
                          size={17}
                          className="mt-0.5 shrink-0 text-[#A59ED8]"
                        />

                        <p className="text-[10px] font-medium leading-5 text-white/45">
                          Please provide enough detail for our
                          team to understand the enquiry and
                          respond appropriately.
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="group flex min-h-[62px] w-full items-center justify-between bg-[#6055A6] px-6 text-[9px] font-black uppercase tracking-[.18em] text-white transition duration-300 hover:bg-[#51478F] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {loading ? (
                          <>
                            <span>Sending enquiry</span>

                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          </>
                        ) : (
                          <>
                            <span>Send enquiry</span>

                            <ArrowRight
                              size={18}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT DETAILS — NEW HORIZONTAL SYSTEM
        ========================================================= */}

        <section className="bg-white">
          <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12">
            <div className="grid border-x border-[#6055A6]/10 lg:grid-cols-3">
              {/* Phone */}

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="group border-b border-[#6055A6]/10 p-7 transition hover:bg-[#F7F6FA] sm:p-9 lg:border-b-0 lg:border-r"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center bg-[#6055A6] text-white">
                    <Phone size={18} />
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-[#6055A6] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <span className="mt-10 block text-[8px] font-black uppercase tracking-[.22em] text-[#99939D]">
                  Call directly
                </span>

                <span className="mt-2 block text-2xl font-black tracking-[-.04em]">
                  {LOCAL.phoneDisplay}
                </span>

                <span className="mt-3 block text-xs font-semibold text-[#7C7780]">
                  Speak with the local team.
                </span>
              </a>

              {/* Location */}

              <div className="border-b border-[#6055A6]/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center bg-[#F7F6FA] text-[#6055A6]">
                    <MapPin size={18} />
                  </span>

                  <span className="text-[8px] font-black uppercase tracking-[.18em] text-[#6055A6]">
                    Isleworth
                  </span>
                </div>

                <span className="mt-10 block text-[8px] font-black uppercase tracking-[.22em] text-[#99939D]">
                  Local address
                </span>

                <address className="mt-2 max-w-[310px] not-italic text-xl font-black leading-7 tracking-[-.035em]">
                  {LOCAL.address}
                </address>

                <span className="mt-3 block text-xs font-semibold text-[#7C7780]">
                  {LOCAL.area}, {LOCAL.city}
                </span>
              </div>

              {/* Enquiry */}

              <div className="p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center bg-[#F7F6FA] text-[#6055A6]">
                    <Clock3 size={18} />
                  </span>

                  <span className="text-[8px] font-black uppercase tracking-[.18em] text-[#99939D]">
                    Enquiries
                  </span>
                </div>

                <span className="mt-10 block text-[8px] font-black uppercase tracking-[.22em] text-[#99939D]">
                  What to include
                </span>

                <p className="mt-2 max-w-[320px] text-xl font-black leading-7 tracking-[-.035em]">
                  Pest type, location and what you have noticed.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#6055A6]">
                  <Check size={15} />
                  A few details are enough to begin.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHAT TO TELL US — NEW NUMBERED BLOCK
        ========================================================= */}

        <section className="bg-[#24212D] text-white">
          <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
              <div>
                <div className="flex items-center gap-3">
                  <Sparkles size={15} className="text-[#A59ED8]" />

                  <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#A59ED8]">
                    Make the enquiry useful
                  </span>
                </div>

                <h2 className="mt-7 max-w-[620px] text-[52px] font-black leading-[.86] tracking-[-.065em] sm:text-[70px]">
                  Start with
                  <span className="block text-[#A59ED8]">
                    what you know.
                  </span>
                </h2>

                <p className="mt-7 max-w-[490px] text-sm font-medium leading-8 text-white/55 sm:text-base">
                  You do not need to identify the pest yourself.
                  The useful part is explaining what you have
                  noticed and where the activity is taking place.
                </p>
              </div>

              <div className="grid border-t border-white/10 sm:grid-cols-3 sm:border-t-0">
                {[
                  {
                    number: "01",
                    title: "What happened?",
                    text: "Tell us what you have seen, heard or noticed.",
                    icon: Search,
                  },
                  {
                    number: "02",
                    title: "Where is it?",
                    text: "Mention the room, area or part of the property.",
                    icon: MapPin,
                  },
                  {
                    number: "03",
                    title: "When did it start?",
                    text: "A rough timeframe can help explain the situation.",
                    icon: Clock3,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className={`group border-b border-white/10 p-7 sm:border-b-0 sm:p-8 ${
                        index !== 0
                          ? "sm:border-l sm:border-white/10"
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-[#A59ED8]">
                          {item.number}
                        </span>

                        <Icon
                          size={18}
                          className="text-white/30 transition group-hover:text-[#A59ED8]"
                        />
                      </div>

                      <h3 className="mt-14 text-xl font-black tracking-[-.035em]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-xs font-medium leading-6 text-white/45">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES — NEW GRID
        ========================================================= */}

        <section className="bg-[#F7F6FA]">
          <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                  Services available
                </span>

                <h2 className="mt-7 max-w-[560px] text-[52px] font-black leading-[.85] tracking-[-.07em] sm:text-[70px]">
                  One enquiry.
                  <span className="block text-[#6055A6]">
                    Many pest problems.
                  </span>
                </h2>

                <p className="mt-7 max-w-[470px] text-sm font-medium leading-8 text-[#77717B] sm:text-base">
                  Select the service that sounds closest to
                  your situation. If you are unsure, choose
                  general pest inspection and explain what you
                  have noticed.
                </p>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="group mt-9 inline-flex items-center gap-4 border-b-2 border-[#6055A6] pb-3 text-[9px] font-black uppercase tracking-[.18em] text-[#6055A6]"
                >
                  <Phone size={15} />

                  <span>{LOCAL.phoneDisplay}</span>

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div className="grid gap-px border border-[#6055A6]/10 bg-[#6055A6]/10 sm:grid-cols-2">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className="group flex min-h-[108px] items-center justify-between bg-white px-5 py-5 transition duration-300 hover:bg-[#6055A6] hover:text-white sm:px-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="pt-0.5 text-[8px] font-black text-[#6055A6]/60 transition group-hover:text-white/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="max-w-[210px] text-xs font-black leading-5">
                        {service}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-[#6055A6]/50 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PROPERTY TYPES — NEW EDITORIAL GRID
        ========================================================= */}

        <section className="bg-white">
          <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="flex flex-col justify-between gap-7 border-b border-[#6055A6]/15 pb-10 lg:flex-row lg:items-end">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                  Property types
                </span>

                <h2 className="mt-6 max-w-[800px] text-[50px] font-black leading-[.86] tracking-[-.065em] sm:text-[68px]">
                  Different properties.
                  <span className="block text-[#6055A6]">
                    Same starting point.
                  </span>
                </h2>
              </div>

              <p className="max-w-[390px] text-sm font-medium leading-7 text-[#77717B]">
                Whether the enquiry concerns a home, rental
                property or business premises, the first step
                is understanding what is happening on site.
              </p>
            </div>

            <div className="mt-10 grid gap-px border border-[#6055A6]/10 bg-[#6055A6]/10 sm:grid-cols-2 lg:grid-cols-3">
              {propertyTypes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group min-h-[205px] bg-[#F7F6FA] p-7 transition duration-300 hover:bg-[#6055A6] hover:text-white sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black text-[#6055A6] transition group-hover:text-white/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <Icon
                        size={19}
                        className="text-[#6055A6] transition group-hover:text-white"
                      />
                    </div>

                    <h3 className="mt-12 text-xl font-black tracking-[-.04em]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[270px] text-xs font-medium leading-6 text-[#77717B] transition group-hover:text-white/60">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            PROCESS — NEW TIMELINE
        ========================================================= */}

        <section className="bg-[#6055A6] text-white">
          <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[.28em] text-white/50">
                  What happens next
                </span>

                <h2 className="mt-7 max-w-[500px] text-[52px] font-black leading-[.84] tracking-[-.07em] sm:text-[70px]">
                  A clear route
                  <span className="block text-white/50">
                    from message to action.
                  </span>
                </h2>

                <p className="mt-7 max-w-[420px] text-sm font-medium leading-8 text-white/65">
                  The enquiry gives the team a starting point
                  for understanding your property and the pest
                  issue you are dealing with.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[20px] top-7 hidden h-[calc(100%-55px)] w-px bg-white/15 sm:block" />

                {[
                  {
                    number: "01",
                    title: "You send the details",
                    text: "Complete the form with your contact information, postcode and description of the issue.",
                  },
                  {
                    number: "02",
                    title: "The enquiry is reviewed",
                    text: "The information provides context around the property and the pest activity you have noticed.",
                  },
                  {
                    number: "03",
                    title: "The situation is discussed",
                    text: "The team can discuss your enquiry and the practical next step with you.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="relative grid gap-6 border-t border-white/15 py-8 sm:grid-cols-[42px_220px_1fr] sm:gap-8"
                  >
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center bg-[#24212D] text-[9px] font-black">
                      {item.number}
                    </div>

                    <h3 className="text-2xl font-black tracking-[-.04em]">
                      {item.title}
                    </h3>

                    <p className="text-sm font-medium leading-7 text-white/55">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            LOCATION — NEW MAP COMPOSITION
        ========================================================= */}

        <section className="bg-[#F7F6FA]">
          <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">
              {/* Location copy */}

              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                    Local base
                  </span>

                  <h2 className="mt-7 text-[52px] font-black leading-[.84] tracking-[-.07em] sm:text-[68px]">
                    Based in
                    <span className="block text-[#6055A6]">
                      Isleworth.
                    </span>
                  </h2>

                  <p className="mt-7 max-w-[410px] text-sm font-medium leading-8 text-[#77717B]">
                    {LOCAL.company} is based at{" "}
                    {LOCAL.address}. The contact page is
                    designed to make it simple to send the team
                    the information needed about your enquiry.
                  </p>
                </div>

                <div className="mt-10 border-t border-[#6055A6]/15 pt-7">
                  <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#99939D]">
                    Address
                  </span>

                  <address className="mt-3 not-italic text-base font-black leading-7">
                    {LOCAL.address}
                  </address>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="mt-6 inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[.18em] text-[#6055A6]"
                  >
                    <Phone size={15} />

                    {LOCAL.phoneDisplay}

                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              {/* Map */}

              <div className="relative min-h-[460px] overflow-hidden border border-[#6055A6]/15 bg-white shadow-[0_25px_70px_rgba(96,85,166,.10)] sm:min-h-[560px] lg:min-h-[650px]">
                <iframe
                  title={`${LOCAL.company} location map`}
                  src="https://maps.google.com/maps?q=71%20Talbot%20Rd%2C%20Isleworth%20TW7%207HG&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                {/* Map overlay */}

                <div className="pointer-events-none absolute left-5 top-5 bg-[#24212D] px-5 py-4 text-white shadow-xl sm:left-7 sm:top-7">
                  <span className="block text-[8px] font-black uppercase tracking-[.2em] text-[#A59ED8]">
                    SuperGuard
                  </span>

                  <span className="mt-1 block text-sm font-black">
                    Isleworth · {LOCAL.postcode}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA — COMPLETELY NEW
        ========================================================= */}

        <section className="bg-[#24212D] text-white">
          <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="relative overflow-hidden border border-white/10">
              {/* Decorative grid */}

              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />

                <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />

                <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-[#A59ED8]/20" />

                <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#A59ED8]/10" />
              </div>

              <div className="relative z-10 grid lg:grid-cols-[1fr_390px]">
                <div className="px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
                  <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#A59ED8]">
                    Ready when you are
                  </span>

                  <h2 className="mt-7 max-w-[850px] text-[54px] font-black leading-[.84] tracking-[-.07em] sm:text-[76px] lg:text-[88px]">
                    Tell us what is
                    <span className="block text-[#A59ED8]">
                      happening.
                    </span>
                  </h2>

                  <p className="mt-7 max-w-[590px] text-sm font-medium leading-8 text-white/50 sm:text-base">
                    Send an enquiry or call {LOCAL.shortName}
                    directly. Start with the details you have
                    and the team can take it from there.
                  </p>
                </div>

                <div className="flex flex-col justify-end border-t border-white/10 bg-[#6055A6] p-7 sm:p-10 lg:border-l lg:border-t-0">
                  <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/50">
                    Direct contact
                  </span>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="group mt-4 block border-b border-white/20 pb-6"
                  >
                    <span className="block text-[8px] font-black uppercase tracking-[.18em] text-white/50">
                      Phone
                    </span>

                    <span className="mt-2 block text-3xl font-black tracking-[-.04em]">
                      {LOCAL.phoneDisplay}
                    </span>
                  </a>

                  <a
                    href="#contact-heading"
                    className="group mt-6 flex min-h-[62px] items-center justify-between bg-white px-6 text-[9px] font-black uppercase tracking-[.18em] text-[#24212D] transition hover:-translate-y-1"
                  >
                    <span>Send an enquiry</span>

                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>

                  <div className="mt-7 flex items-start gap-3">
                    <MapPin size={15} className="mt-0.5 shrink-0" />

                    <span className="text-xs font-semibold leading-5 text-white/65">
                      {LOCAL.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* =============================================================
   DARK FORM FIELD
============================================================= */

function DarkContactField({
  label,
  required = false,
  children,
}) {
  return (
    <label className="group block">
      <span className="mb-2.5 block text-[8px] font-black uppercase tracking-[.2em] text-white/45 transition-colors group-focus-within:text-[#A59ED8]">
        {label}

        {required && (
          <span className="ml-1 text-[#A59ED8]">*</span>
        )}
      </span>

      <div className="border border-white/10 bg-white/[.035] px-4 py-4 transition-all duration-300 focus-within:border-[#A59ED8]/70 focus-within:bg-white/[.06]">
        {children}
      </div>
    </label>
  );
}