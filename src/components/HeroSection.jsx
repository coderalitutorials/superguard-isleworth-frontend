

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     businessName: "SuperGuard Walworth",
//     address: "36 Sutherland Square, London SE17 3EE",
//     phoneDisplay: "07466 565503",
//     phoneTel: "+447466565503",
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("https://superguard-walworth-backend.vercel.app/api/callback", {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.businessName,
//         address: LOCAL.address,
//         phoneNumber: LOCAL.phoneDisplay,
//       }),
//       {
//         loading: "Sending callback request...",
//         success: () => {
//           setLoading(false);
//           setFormData({ name: "", postcode: "", phone: "" });
//           return "Your callback request has been sent.";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Something went wrong.";
//         },
//       }
//     );
//   };

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative overflow-hidden bg-[#F8F6FF] pt-34 md:pt-42"
//     >
//       <Toaster position="top-center" />

//       {/* TOP DARK HERO */}
//       <div className="relative min-h-screen overflow-hidden bg-[#120D27]">
//         <div className="absolute inset-0 bg-[linear-gradient(115deg,#120D27_0%,#120D27_48%,#5F52B5_48%,#5F52B5_100%)]" />
//         <div className="absolute left-[-160px] top-20 h-[520px] w-[520px] rounded-full bg-[#5F52B5]/25 blur-3xl" />
//         <div className="absolute right-[-120px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-white/12 blur-3xl" />

//         <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pt-44 lg:px-10">
//           <div className="grid min-h-[74vh] items-center gap-10 lg:grid-cols-12">
//             {/* CONTENT */}
//             <div className="lg:col-span-7">
//               <div className="inline-flex items-center gap-3 rounded-none border-l-4 border-[#AFA6FF] bg-white/10 px-5 py-3 backdrop-blur-xl">
//                 <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#DCD8FF]">
//                   {LOCAL.businessName} • {LOCAL.postcode}
//                 </span>
//               </div>

//               <h1 className="mt-8 max-w-5xl text-4xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
//                 Walworth Pest Control With A Cleaner, Smarter Plan.
//               </h1>

//               <p className="mt-7 max-w-3xl text-lg font-medium leading-relaxed text-white/78">
//                 From rodents and bed bugs to cockroaches, fleas, ants, moths and
//                 wasp nests, SuperGuard Walworth helps protect SE17 homes,
//                 rental properties and business premises with careful inspection,
//                 targeted treatment and clear prevention advice.
//               </p>

//               <div className="mt-9 flex flex-wrap gap-4">
//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="bg-white px-8 py-4 text-sm font-black uppercase tracking-wider text-[#5F52B5] shadow-2xl shadow-black/25 transition-all hover:-translate-y-1"
//                 >
//                   Call {LOCAL.phoneDisplay}
//                 </a>

//                 <Link
//                   to="/services"
//                   className="border border-white/20 bg-[#251D4B] px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition-all hover:-translate-y-1 hover:bg-[#5F52B5]"
//                 >
//                   View Services
//                 </Link>
//               </div>

//               <div className="mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
//                 {[
//                   ["01", "Property inspection before treatment"],
//                   ["02", "Clear plan for the active pest issue"],
//                   ["03", "Prevention support for long-term control"],
//                 ].map(([num, text]) => (
//                   <div
//                     key={num}
//                     className="border-t border-white/20 pt-5 text-white"
//                   >
//                     <span className="text-3xl font-black text-[#AFA6FF]">
//                       {num}
//                     </span>
//                     <p className="mt-3 text-sm font-bold leading-relaxed text-white/75">
//                       {text}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT VISUAL + FORM */}
//             <div className="lg:col-span-5">
//               <div className="relative">
//                 <div className="relative ml-auto max-w-[520px] overflow-hidden rounded-tl-[6rem] rounded-br-[6rem] border-[12px] border-white/15 bg-white/10 shadow-2xl shadow-black/30">
//                   <img
//                     src="/images/superguard-hero.webp"
//                     alt={`${LOCAL.businessName} pest control service in ${LOCAL.area}`}
//                     className="h-[520px] w-full object-cover md:h-[650px]"
//                     loading="eager"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#120D27]/95 via-[#120D27]/20 to-transparent" />

//                   <div className="absolute bottom-6 left-6 right-6">
//                     <div className="bg-white p-5 shadow-2xl">
//                       <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#5F52B5]">
//                         Local Base
//                       </span>
//                       <p className="mt-2 text-sm font-bold leading-relaxed text-slate-700">
//                         {LOCAL.address}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute -left-4 top-10 hidden bg-[#5F52B5] px-6 py-5 text-white shadow-2xl lg:block">
//                   <span className="block text-[10px] font-black uppercase tracking-widest text-white/65">
//                     Covering
//                   </span>
//                   <span className="block text-3xl font-black">{LOCAL.area}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FLOATING CALLBACK BAR */}
//         <div className="relative z-20 mx-auto -mt-10 max-w-6xl px-5 md:px-8 lg:px-10">
//           <div className="bg-white p-5 shadow-2xl shadow-[#120D27]/20">
//             <div className="grid gap-4 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
//               <div className="border-l-4 border-[#5F52B5] pl-5">
//                 <span className="block text-[10px] font-black uppercase tracking-[0.24em] text-[#5F52B5]">
//                   Quick Callback
//                 </span>
//                 <h2 className="mt-1 text-2xl font-black text-[#120D27]">
//                   Get Walworth Pest Help
//                 </h2>
//               </div>

//               <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-4">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   required
//                   className="border border-slate-200 bg-[#F8F6FF] px-4 py-4 text-sm font-semibold text-[#120D27] outline-none focus:border-[#5F52B5]"
//                 />

//                 <input
//                   type="text"
//                   name="postcode"
//                   value={formData.postcode}
//                   onChange={handleChange}
//                   placeholder="Postcode"
//                   required
//                   className="border border-slate-200 bg-[#F8F6FF] px-4 py-4 text-sm font-semibold text-[#120D27] outline-none focus:border-[#5F52B5]"
//                 />

//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone"
//                   required
//                   className={`border bg-[#F8F6FF] px-4 py-4 text-sm font-semibold text-[#120D27] outline-none focus:border-[#5F52B5] ${
//                     phoneError ? "border-red-500" : "border-slate-200"
//                   }`}
//                 />

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="bg-[#5F52B5] px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-[#120D27] disabled:opacity-70"
//                 >
//                   {loading ? "Sending..." : "Send Request"}
//                 </button>

//                 {phoneError && (
//                   <p className="sm:col-span-4 text-xs font-bold text-red-600">
//                     {phoneError}
//                   </p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* LIGHT BOTTOM AREA */}
//       <div className="relative z-10 bg-[#F8F6FF] px-5 pb-16 pt-20 md:px-8 lg:px-10">
//         <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
//           {[
//             ["Fast SE17 Response", "Local help around Walworth and nearby South London areas."],
//             ["Homes & Businesses", "Support for flats, houses, landlords, shops and offices."],
//             ["Treatment + Advice", "We focus on removal, entry points and better prevention."],
//           ].map(([title, text]) => (
//             <div key={title} className="bg-white p-8 shadow-xl shadow-[#120D27]/5">
//               <h3 className="text-2xl font-black text-[#120D27]">{title}</h3>
//               <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
//                 {text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ArrowRight,
//   CheckCircle2,
//   MapPin,
//   Send,
// } from "lucide-react";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//     area: "Holborn",
//     city: "London",
//     postcode: "WC2R 3JF",
//     streetAddress: "50 Essex Street",
//     fullAddress: "50 Essex Street, London, WC2R 3JF",
//   };

//   const API_URL =
//     "https://superguard-holborn-backend.vercel.app/api/callback";

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(API_URL, {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.fullAddress,
//       }),
//       {
//         loading: "Sending callback request...",

//         success: () => {
//           setLoading(false);

//           setFormData({
//             name: "",
//             postcode: "",
//             phone: "",
//           });

//           return "Your callback request has been sent.";
//         },

//         error: (error) => {
//           setLoading(false);

//           return (
//             error.response?.data?.message ||
//             "Something went wrong. Please try again."
//           );
//         },
//       }
//     );
//   };

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControl"
//       className="relative min-h-[900px] overflow-hidden bg-[#171327] pt-[82px] md:min-h-screen md:pt-[124px]"
//     >
//       <Toaster position="top-center" />

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

//       {/* FULL-SCREEN BACKGROUND IMAGE */}
//       <div className="absolute inset-x-0 bottom-0 top-[82px] md:top-[124px]">
//         <img
//           src="/images/superguard-hero.webp"
//           alt={`${LOCAL.company} professional pest control service in Holborn`}
//           className="h-full w-full object-cover object-[62%_center] md:object-center"
//           loading="eager"
//           fetchPriority="high"
//         />

//         {/* CINEMATIC OVERLAYS */}
//         <div className="absolute inset-0 bg-[#100B21]/45" />

//         <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,11,35,0.97)_0%,rgba(17,11,35,0.88)_35%,rgba(17,11,35,0.30)_72%,rgba(17,11,35,0.20)_100%)]" />

//         <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,11,35,0.12)_0%,rgba(17,11,35,0.08)_46%,rgba(17,11,35,0.92)_100%)]" />

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_38%,rgba(98,84,180,0.12),transparent_38%)]" />
//       </div>

//       {/* SUBTLE PURPLE LIGHT */}
//       <div className="pointer-events-none absolute -left-64 top-[25%] h-[520px] w-[520px] rounded-full bg-[#6254B4]/20 blur-[140px]" />

//       {/* HERO CONTENT */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(900px-82px)] max-w-[1450px] flex-col justify-between px-5 pb-7 pt-14 sm:px-8 md:min-h-[calc(100vh-124px)] md:px-10 md:pb-10 md:pt-20 lg:px-14 xl:px-20">
//         <div className="flex flex-1 items-center">
//           <div className="max-w-[1050px] pb-10 md:pb-20">
//             {/* SMALL TOP LINE */}
//             <div className="flex items-center gap-4">
//               <span className="h-[2px] w-12 bg-[#9689E8] sm:w-16" />

//               <p className="m-0 text-[10px] font-black uppercase tracking-[0.24em] text-[#C9C2FA] sm:text-xs">
//                 SuperGuard Services Limited • Holborn
//               </p>
//             </div>

//             {/* LARGE MAIN HEADING */}
//             <h1 className="mt-7 max-w-[1050px] text-[49px] font-black leading-[0.91] tracking-[-0.055em] text-white sm:text-[72px] md:text-[88px] lg:text-[104px] xl:text-[118px]">
//               Serious Pest
//               <span className="block text-[#9D91EE]">
//                 Control For
//               </span>
//               Holborn Properties.
//             </h1>

//             {/* DESCRIPTION */}
//             <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/75 sm:text-lg md:text-xl">
//               Professional pest control for homes, landlords and businesses
//               throughout Holborn and Central London, with careful inspection,
//               targeted treatment and practical prevention support.
//             </p>

//             {/* LOCATION */}
//             <div className="mt-6 flex max-w-2xl items-start gap-3">
//               <MapPin
//                 size={19}
//                 strokeWidth={2.5}
//                 className="mt-1 shrink-0 text-[#AFA5F4]"
//               />

//               <address className="not-italic text-sm font-bold leading-7 text-white/80">
//                 Local pest control services from{" "}
//                 <strong className="font-black text-white">
//                   {LOCAL.fullAddress}
//                 </strong>
//               </address>
//             </div>

//             {/* CTA BUTTONS */}
//             <div className="mt-9 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 to="/contact-us"
//                 className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#6254B4] px-8 py-4 text-xs font-black uppercase tracking-[0.15em] text-white shadow-2xl shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#171327]"
//               >
//                 Request a Free Quote

//                 <ArrowRight
//                   size={17}
//                   strokeWidth={2.7}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>

//               <Link
//                 to="/services"
//                 className="group inline-flex min-h-14 items-center justify-center gap-3 border border-white/35 bg-white/[0.07] px-8 py-4 text-xs font-black uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#171327]"
//               >
//                 View Pest Services

//                 <ArrowRight
//                   size={17}
//                   strokeWidth={2.7}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>

//             {/* SIMPLE TRUST POINTS */}
//             <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
//               {[
//                 "Homes and businesses",
//                 "Targeted pest treatments",
//                 "Prevention guidance",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-2 text-xs font-bold text-white/75"
//                 >
//                   <CheckCircle2
//                     size={16}
//                     strokeWidth={2.6}
//                     className="text-[#AFA5F4]"
//                   />

//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CALLBACK GLASS BAR */}
//         <div className="border-t border-white/20 bg-[#171327]/55 backdrop-blur-xl">
//           <div className="grid lg:grid-cols-[270px_1fr]">
//             {/* FORM INTRO */}
//             <div className="border-b border-white/15 px-5 py-5 lg:border-b-0 lg:border-r lg:px-6">
//               <span className="block text-[9px] font-black uppercase tracking-[0.23em] text-[#AFA5F4]">
//                 Quick Callback
//               </span>

//               <h2 className="mt-1 text-xl font-black text-white">
//                 Need help in Holborn?
//               </h2>

//               <p className="mt-2 text-xs font-semibold leading-5 text-white/55">
//                 Send your details to our team at {LOCAL.streetAddress}.
//               </p>
//             </div>

//             {/* CALLBACK FORM */}
//             <form
//               onSubmit={handleSubmit}
//               className="grid sm:grid-cols-2 xl:grid-cols-[1fr_0.8fr_1fr_auto]"
//             >
//               <div className="border-b border-white/15 px-5 py-4 sm:border-r xl:border-b-0">
//                 <label
//                   htmlFor="hero-name"
//                   className="block text-[9px] font-black uppercase tracking-[0.18em] text-white/45"
//                 >
//                   Your Name
//                 </label>

//                 <input
//                   id="hero-name"
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   autoComplete="name"
//                   required
//                   className="mt-2 w-full bg-transparent py-1 text-sm font-bold text-white outline-none placeholder:font-medium placeholder:text-white/35"
//                 />
//               </div>

//               <div className="border-b border-white/15 px-5 py-4 xl:border-b-0 xl:border-r">
//                 <label
//                   htmlFor="hero-postcode"
//                   className="block text-[9px] font-black uppercase tracking-[0.18em] text-white/45"
//                 >
//                   Postcode
//                 </label>

//                 <input
//                   id="hero-postcode"
//                   type="text"
//                   name="postcode"
//                   value={formData.postcode}
//                   onChange={handleChange}
//                   placeholder="Property postcode"
//                   autoComplete="postal-code"
//                   required
//                   className="mt-2 w-full bg-transparent py-1 text-sm font-bold uppercase text-white outline-none placeholder:normal-case placeholder:font-medium placeholder:text-white/35"
//                 />
//               </div>

//               <div
//                 className={`border-b px-5 py-4 sm:border-r xl:border-b-0 ${
//                   phoneError ? "border-red-400" : "border-white/15"
//                 }`}
//               >
//                 <label
//                   htmlFor="hero-phone"
//                   className="block text-[9px] font-black uppercase tracking-[0.18em] text-white/45"
//                 >
//                   Contact Number
//                 </label>

//                 <input
//                   id="hero-phone"
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Enter phone number"
//                   autoComplete="tel"
//                   required
//                   aria-invalid={Boolean(phoneError)}
//                   className="mt-2 w-full bg-transparent py-1 text-sm font-bold text-white outline-none placeholder:font-medium placeholder:text-white/35"
//                 />

//                 {phoneError && (
//                   <p className="mt-1 text-[10px] font-bold text-red-300">
//                     {phoneError}
//                   </p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="group flex min-h-[76px] items-center justify-center gap-3 bg-[#6254B4] px-7 text-[10px] font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-[#171327] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 xl:col-span-1"
//               >
//                 <span>{loading ? "Sending..." : "Send Request"}</span>

//                 <Send
//                   size={16}
//                   strokeWidth={2.5}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* ADDRESS LINE */}
//         <div className="flex flex-col gap-2 border-t border-white/10 py-4 text-[9px] font-black uppercase tracking-[0.16em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
//           <span>{LOCAL.company}</span>

//           <span>{LOCAL.fullAddress}</span>
//         </div>
//       </div>
//     </section>
//   );
// }














// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ArrowUpRight,
//   Check,
//   MapPin,
//   Send,
// } from "lucide-react";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//     area: "Holborn",
//     city: "London",
//     postcode: "WC2R 3JF",
//     streetAddress: "50 Essex Street",
//     fullAddress: "50 Essex Street, London, WC2R 3JF",
//   };

//   const API_URL =
//     "https://superguard-holborn-backend.vercel.app/api/callback";

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(API_URL, {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.fullAddress,
//       }),
//       {
//         loading: "Sending callback request...",

//         success: () => {
//           setLoading(false);

//           setFormData({
//             name: "",
//             postcode: "",
//             phone: "",
//           });

//           return "Your callback request has been sent.";
//         },

//         error: (error) => {
//           setLoading(false);

//           return (
//             error.response?.data?.message ||
//             "Something went wrong. Please try again."
//           );
//         },
//       }
//     );
//   };

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControl"
//       className="relative min-h-screen overflow-hidden bg-[#100D1C] pt-[82px] text-white md:pt-[124px]"
//     >
//       <Toaster position="top-center" />

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

//       {/* BACKGROUND GRID */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.08]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
//           backgroundSize: "70px 70px",
//         }}
//       />

//       {/* GIANT BACKGROUND TEXT */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-[24%] -translate-x-1/2 whitespace-nowrap text-[105px] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[180px] lg:text-[290px] xl:text-[350px]"
//       >
//         Holborn
//       </div>

//       {/* PURPLE GLOWS */}
//       <div className="pointer-events-none absolute left-1/2 top-[40%] h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6254B4]/20 blur-[150px]" />

//       <div className="pointer-events-none absolute -left-44 bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[#6254B4]/20 blur-[120px]" />

//       <div className="pointer-events-none absolute -right-48 top-32 h-[420px] w-[420px] rounded-full bg-[#8F82E8]/10 blur-[120px]" />

//       {/* CURVED SVG LINES */}
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 1600 900"
//         preserveAspectRatio="none"
//         className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
//       >
//         <path
//           d="M-100 650C280 300 500 230 800 450C1100 670 1320 520 1700 130"
//           fill="none"
//           stroke="rgba(156,144,239,0.35)"
//           strokeWidth="1.5"
//         />

//         <path
//           d="M-150 730C250 400 500 340 790 530C1080 720 1370 620 1720 260"
//           fill="none"
//           stroke="rgba(255,255,255,0.12)"
//           strokeWidth="1"
//         />
//       </svg>

//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-82px)] max-w-[1500px] flex-col px-5 pb-8 pt-8 sm:px-8 md:min-h-[calc(100vh-124px)] md:px-10 md:pb-10 lg:px-14">
//         {/* TOP LOCATION LINE */}
//         <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-3">
//             <span className="h-2 w-2 rounded-full bg-[#9C90EF] shadow-[0_0_20px_rgba(156,144,239,0.9)]" />

//             <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/65">
//               Pest Control · Holborn · Central London
//             </span>
//           </div>

//           <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-white/50">
//             <MapPin size={14} className="text-[#9C90EF]" />
//             {LOCAL.fullAddress}
//           </div>
//         </div>

//         {/* MAIN HERO */}
//         <div className="flex flex-1 flex-col items-center justify-center py-14 text-center md:py-20">
//           {/* ORBITAL LOGO */}
//           <div className="relative mb-10 flex h-[180px] w-[180px] items-center justify-center sm:h-[220px] sm:w-[220px]">
//             {/* OUTER ORBIT */}
//             <div className="absolute inset-0 animate-[spin_22s_linear_infinite] rounded-full border border-dashed border-[#9C90EF]/35">
//               <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#9C90EF] shadow-[0_0_20px_rgba(156,144,239,1)]" />
//             </div>

//             {/* SECOND ORBIT */}
//             <div className="absolute inset-[18px] animate-[spin_15s_linear_infinite_reverse] rounded-full border border-white/10">
//               <span className="absolute bottom-[12px] right-[4px] h-2 w-2 rounded-full bg-white/70" />
//             </div>

//             {/* INNER GLOW */}
//             <div className="absolute inset-[34px] rounded-full bg-[#6254B4]/25 blur-xl" />

//             {/* LOGO */}
//             <div className="relative flex h-[110px] w-[110px] items-center justify-center rounded-full bg-white p-4 shadow-[0_0_70px_rgba(98,84,180,0.45)] sm:h-[135px] sm:w-[135px]">
//               <img
//                 src="/images/superguard-logo.webp"
//                 alt={`${LOCAL.company} logo`}
//                 className="h-full w-full object-contain"
//                 loading="eager"
//               />
//             </div>
//           </div>

//           {/* SMALL LABEL */}
//           <div className="flex items-center justify-center gap-4">
//             <span className="h-px w-10 bg-[#8275DA]" />

//             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B7AFF3]">
//               SuperGuard Services Limited
//             </span>

//             <span className="h-px w-10 bg-[#8275DA]" />
//           </div>

//           {/* MAIN HEADING */}
//           <h1 className="mt-7 max-w-[1150px] text-[48px] font-black leading-[0.9] tracking-[-0.055em] text-white sm:text-[72px] md:text-[92px] lg:text-[112px]">
//             Holborn Pest Control,
//             <span className="block bg-gradient-to-r from-[#8074D7] via-[#C2BAFF] to-[#8074D7] bg-clip-text text-transparent">
//               Reimagined.
//             </span>
//           </h1>

//           {/* DESCRIPTION */}
//           <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-white/60 sm:text-lg">
//             Professional pest management for homes, landlords and businesses
//             across Holborn and Central London, delivered with careful
//             inspection, targeted treatment and long-term prevention in mind.
//           </p>

//           {/* LOCATION */}
//           <address className="mt-5 not-italic text-xs font-black uppercase tracking-[0.18em] text-white/75">
//             Based at{" "}
//             <span className="text-[#B7AFF3]">
//               {LOCAL.fullAddress}
//             </span>
//           </address>

//           {/* CTA */}
//           <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
//             <Link
//               to="/contact-us"
//               className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#171327] transition-all duration-300 hover:-translate-y-1 hover:bg-[#9C90EF] hover:text-white"
//             >
//               Request a Free Quote

//               <ArrowUpRight
//                 size={17}
//                 strokeWidth={2.6}
//                 className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//               />
//             </Link>

//             <Link
//               to="/services"
//               className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#9C90EF] hover:text-[#B7AFF3]"
//             >
//               Explore Services

//               <ArrowUpRight
//                 size={17}
//                 strokeWidth={2.6}
//                 className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//               />
//             </Link>
//           </div>

//           {/* SMALL TRUST LINE */}
//           <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">
//             {[
//               "Residential",
//               "Commercial",
//               "Inspection",
//               "Treatment",
//               "Prevention",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-white/45"
//               >
//                 <Check size={13} strokeWidth={3} className="text-[#9C90EF]" />
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CALLBACK FORM */}
//         <div className="border-t border-white/15 pt-6">
//           <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
//             <div>
//               <span className="text-[9px] font-black uppercase tracking-[0.24em] text-[#9C90EF]">
//                 Quick Callback
//               </span>

//               <h2 className="mt-1 text-xl font-black text-white">
//                 Tell us where you need help.
//               </h2>
//             </div>

//             <p className="m-0 text-xs font-semibold text-white/40">
//               Requests are handled by the Holborn team at{" "}
//               {LOCAL.streetAddress}.
//             </p>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="grid gap-x-7 gap-y-5 md:grid-cols-2 xl:grid-cols-[1fr_0.8fr_1fr_auto]"
//           >
//             {/* NAME */}
//             <div className="border-b border-white/25 pb-3 focus-within:border-[#9C90EF]">
//               <label
//                 htmlFor="hero-name"
//                 className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/35"
//               >
//                 Your Name
//               </label>

//               <input
//                 id="hero-name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//                 autoComplete="name"
//                 required
//                 className="mt-2 w-full bg-transparent text-sm font-bold text-white outline-none placeholder:font-medium placeholder:text-white/25"
//               />
//             </div>

//             {/* POSTCODE */}
//             <div className="border-b border-white/25 pb-3 focus-within:border-[#9C90EF]">
//               <label
//                 htmlFor="hero-postcode"
//                 className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/35"
//               >
//                 Property Postcode
//               </label>

//               <input
//                 id="hero-postcode"
//                 type="text"
//                 name="postcode"
//                 value={formData.postcode}
//                 onChange={handleChange}
//                 placeholder="Enter postcode"
//                 autoComplete="postal-code"
//                 required
//                 className="mt-2 w-full bg-transparent text-sm font-bold uppercase text-white outline-none placeholder:normal-case placeholder:font-medium placeholder:text-white/25"
//               />
//             </div>

//             {/* PHONE */}
//             <div
//               className={`border-b pb-3 ${
//                 phoneError
//                   ? "border-red-400"
//                   : "border-white/25 focus-within:border-[#9C90EF]"
//               }`}
//             >
//               <label
//                 htmlFor="hero-phone"
//                 className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/35"
//               >
//                 Contact Number
//               </label>

//               <input
//                 id="hero-phone"
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Enter phone number"
//                 autoComplete="tel"
//                 required
//                 aria-invalid={Boolean(phoneError)}
//                 className="mt-2 w-full bg-transparent text-sm font-bold text-white outline-none placeholder:font-medium placeholder:text-white/25"
//               />

//               {phoneError && (
//                 <p className="mt-1 text-[10px] font-bold text-red-300">
//                   {phoneError}
//                 </p>
//               )}
//             </div>

//             {/* SUBMIT */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#6254B4] px-8 text-[10px] font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-[#171327] disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2 xl:col-span-1"
//             >
//               <span>{loading ? "Sending..." : "Send Request"}</span>

//               <Send
//                 size={16}
//                 strokeWidth={2.5}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>
//           </form>
//         </div>

//         {/* BOTTOM LINE */}
//         <div className="mt-7 flex flex-col gap-2 border-t border-white/10 pt-5 text-[9px] font-black uppercase tracking-[0.17em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
//           <span>{LOCAL.company}</span>
//           <span>{LOCAL.fullAddress}</span>
//         </div>
//       </div>
//     </section>
//   );
// }















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ArrowUpRight,
//   Check,
//   MapPin,
//   Send,
// } from "lucide-react";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//     area: "Holborn",
//     city: "London",
//     postcode: "WC2R 3JF",
//     streetAddress: "50 Essex Street",
//     fullAddress: "50 Essex Street, London, WC2R 3JF",
//   };

//   const API_URL =
//     "http://localhost:5000/api/callback";

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(API_URL, {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.fullAddress,
//       }),
//       {
//         loading: "Sending callback request...",

//         success: () => {
//           setLoading(false);

//           setFormData({
//             name: "",
//             postcode: "",
//             phone: "",
//           });

//           return "Your callback request has been sent.";
//         },

//         error: (error) => {
//           setLoading(false);

//           return (
//             error.response?.data?.message ||
//             "Something went wrong. Please try again."
//           );
//         },
//       }
//     );
//   };

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControl"
//       className="relative min-h-screen overflow-hidden bg-[#6055A6] pt-[82px] text-white md:pt-[124px]"
//     >
//       <Toaster position="top-center" />

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

//         <meta
//           itemProp="addressCountry"
//           content="GB"
//         />
//       </div>

//       {/* BACKGROUND GRID */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.09]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
//           backgroundSize: "70px 70px",
//         }}
//       />

//       {/* GIANT BACKGROUND TEXT */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-[24%] -translate-x-1/2 whitespace-nowrap text-[105px] font-black uppercase leading-none tracking-[-0.08em] text-[#D8D1FF]/[0.06] sm:text-[180px] lg:text-[290px] xl:text-[350px]"
//       >
//         Holborn
//       </div>

//       {/* BACKGROUND GLOWS */}
//       <div className="pointer-events-none absolute left-1/2 top-[40%] h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[150px]" />

//       <div className="pointer-events-none absolute -left-44 bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[#8277C8]/35 blur-[120px]" />

//       <div className="pointer-events-none absolute -right-48 top-32 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]" />

//       {/* CURVED BACKGROUND LINES */}
//       <svg
//         aria-hidden="true"
//         viewBox="0 0 1600 900"
//         preserveAspectRatio="none"
//         className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
//       >
//         <path
//           d="M-100 650C280 300 500 230 800 450C1100 670 1320 520 1700 130"
//           fill="none"
//           stroke="rgba(255,255,255,0.25)"
//           strokeWidth="1.5"
//         />

//         <path
//           d="M-150 730C250 400 500 340 790 530C1080 720 1370 620 1720 260"
//           fill="none"
//           stroke="rgba(255,255,255,0.12)"
//           strokeWidth="1"
//         />
//       </svg>

//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-82px)] max-w-[1500px] flex-col px-5 pb-8 pt-8 sm:px-8 md:min-h-[calc(100vh-124px)] md:px-10 md:pb-10 lg:px-14">
//         {/* TOP LOCATION LINE */}
//         <div className="flex flex-col gap-3 border-b border-white/15 pb-5 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-3">
//             <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.95)]" />

//             <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/75">
//               Pest Control · Holborn · Central London
//             </span>
//           </div>

//           <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-white/65">
//             <MapPin
//               size={14}
//               className="text-white"
//             />

//             {LOCAL.fullAddress}
//           </div>
//         </div>

//         {/* MAIN HERO CONTENT */}
//         <div className="flex flex-1 flex-col items-center justify-center py-14 text-center md:py-20">
//           {/* ORBITAL LOGO */}
//           <div className="relative mb-10 flex h-[180px] w-[180px] items-center justify-center sm:h-[220px] sm:w-[220px]">
//             {/* OUTER ORBIT */}
//             <div className="absolute inset-0 animate-[spin_22s_linear_infinite] rounded-full border border-dashed border-white/35">
//               <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,1)]" />
//             </div>

//             {/* SECOND ORBIT */}
//             <div className="absolute inset-[18px] animate-[spin_15s_linear_infinite_reverse] rounded-full border border-white/20">
//               <span className="absolute bottom-[12px] right-[4px] h-2 w-2 rounded-full bg-white/80" />
//             </div>

//             {/* INNER GLOW */}
//             <div className="absolute inset-[34px] rounded-full bg-white/15 blur-xl" />

//             {/* LOGO */}
//             <div className="relative flex h-[110px] w-[110px] items-center justify-center rounded-full bg-white p-4 shadow-[0_0_70px_rgba(255,255,255,0.28)] sm:h-[135px] sm:w-[135px]">
//               <img
//                 src="/images/superguard-logo.webp"
//                 alt={`${LOCAL.company} logo`}
//                 className="h-full w-full object-contain"
//                 loading="eager"
//               />
//             </div>
//           </div>

//           {/* SMALL COMPANY LABEL */}
//           <div className="flex items-center justify-center gap-4">
//             <span className="h-px w-10 bg-white/60" />

//             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">
//               SuperGuard Services Limited
//             </span>

//             <span className="h-px w-10 bg-white/60" />
//           </div>

//           {/* MAIN HEADING */}
//           <h1 className="mt-7 max-w-[1150px] text-[48px] font-black leading-[0.9] tracking-[-0.055em] text-white sm:text-[72px] md:text-[92px] lg:text-[112px]">
//             SuperGuard

//             <span className="block bg-gradient-to-r from-white via-[#ECE9FF] to-white bg-clip-text text-transparent">
//               Pest Control
//             </span>

//             <span className="block text-white">
//               Holborn
//             </span>
//           </h1>

//           {/* DESCRIPTION */}
//           <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-white/75 sm:text-lg">
//             Professional pest management for homes, landlords and
//             businesses across Holborn and Central London, delivered with
//             careful inspection, targeted treatment and long-term
//             prevention in mind.
//           </p>

//           {/* LOCATION */}
//           <address className="mt-5 not-italic text-xs font-black uppercase tracking-[0.18em] text-white/80">
//             Based at{" "}

//             <span className="text-white">
//               {LOCAL.fullAddress}
//             </span>
//           </address>

//           {/* CTA BUTTONS */}
//           <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
//             <Link
//               to="/contact-us"
//               className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#6055A6] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ECE8FF]"
//             >
//               Request a Free Quote

//               <ArrowUpRight
//                 size={17}
//                 strokeWidth={2.6}
//                 className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//               />
//             </Link>

//             <Link
//               to="/services"
//               className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/35 bg-white/[0.04] px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6055A6]"
//             >
//               Explore Services

//               <ArrowUpRight
//                 size={17}
//                 strokeWidth={2.6}
//                 className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//               />
//             </Link>
//           </div>

//           {/* TRUST POINTS */}
//           <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">
//             {[
//               "Residential",
//               "Commercial",
//               "Inspection",
//               "Treatment",
//               "Prevention",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-white/65"
//               >
//                 <Check
//                   size={13}
//                   strokeWidth={3}
//                   className="text-white"
//                 />

//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CALLBACK FORM */}
//         <div className="border-t border-white/20 pt-6">
//           <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
//             <div>
//               <span className="text-[9px] font-black uppercase tracking-[0.24em] text-white/70">
//                 Quick Callback
//               </span>

//               <h2 className="mt-1 text-xl font-black text-white">
//                 Tell us where you need help.
//               </h2>
//             </div>

//             <p className="m-0 text-xs font-semibold text-white/55">
//               Requests are handled by the Holborn team at{" "}
//               {LOCAL.streetAddress}.
//             </p>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="grid gap-x-7 gap-y-5 md:grid-cols-2 xl:grid-cols-[1fr_0.8fr_1fr_auto]"
//           >
//             {/* NAME FIELD */}
//             <div className="border-b border-white/35 pb-3 transition-colors focus-within:border-white">
//               <label
//                 htmlFor="hero-name"
//                 className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/55"
//               >
//                 Your Name
//               </label>

//               <input
//                 id="hero-name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//                 autoComplete="name"
//                 required
//                 className="mt-2 w-full bg-transparent text-sm font-bold text-white outline-none placeholder:font-medium placeholder:text-white/40"
//               />
//             </div>

//             {/* POSTCODE FIELD */}
//             <div className="border-b border-white/35 pb-3 transition-colors focus-within:border-white">
//               <label
//                 htmlFor="hero-postcode"
//                 className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/55"
//               >
//                 Property Postcode
//               </label>

//               <input
//                 id="hero-postcode"
//                 type="text"
//                 name="postcode"
//                 value={formData.postcode}
//                 onChange={handleChange}
//                 placeholder="Enter postcode"
//                 autoComplete="postal-code"
//                 required
//                 className="mt-2 w-full bg-transparent text-sm font-bold uppercase text-white outline-none placeholder:normal-case placeholder:font-medium placeholder:text-white/40"
//               />
//             </div>

//             {/* PHONE FIELD */}
//             <div
//               className={`border-b pb-3 transition-colors ${
//                 phoneError
//                   ? "border-red-300"
//                   : "border-white/35 focus-within:border-white"
//               }`}
//             >
//               <label
//                 htmlFor="hero-phone"
//                 className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/55"
//               >
//                 Contact Number
//               </label>

//               <input
//                 id="hero-phone"
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Enter phone number"
//                 autoComplete="tel"
//                 required
//                 aria-invalid={Boolean(phoneError)}
//                 className="mt-2 w-full bg-transparent text-sm font-bold text-white outline-none placeholder:font-medium placeholder:text-white/40"
//               />

//               {phoneError && (
//                 <p className="mt-1 text-[10px] font-bold text-red-200">
//                   {phoneError}
//                 </p>
//               )}
//             </div>

//             {/* SUBMIT BUTTON */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-[10px] font-black uppercase tracking-[0.18em] text-[#6055A6] transition-all duration-300 hover:bg-[#ECE8FF] disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2 xl:col-span-1"
//             >
//               <span>
//                 {loading ? "Sending..." : "Send Request"}
//               </span>

//               <Send
//                 size={16}
//                 strokeWidth={2.5}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>
//           </form>
//         </div>

//         {/* BOTTOM BUSINESS LINE */}
//         <div className="mt-7 flex flex-col gap-2 border-t border-white/15 pt-5 text-[9px] font-black uppercase tracking-[0.17em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
//           <span>{LOCAL.company}</span>

//           <span>{LOCAL.fullAddress}</span>
//         </div>
//       </div>
//     </section>
//   );
// }

















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Building2,
//   Check,
//   Clock3,
//   MapPin,
//   PhoneCall,
//   Send,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

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

//   /*
//     API calling bilkul purane component jaisi hi rakhi gayi hai.
//   */
//   const API_URL = "http://localhost:5000/api/callback";

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(API_URL, {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.fullAddress,
//       }),
//       {
//         loading: "Sending callback request...",

//         success: () => {
//           setLoading(false);

//           setFormData({
//             name: "",
//             postcode: "",
//             phone: "",
//           });

//           return "Your callback request has been sent.";
//         },

//         error: (error) => {
//           setLoading(false);

//           return (
//             error.response?.data?.message ||
//             "Something went wrong. Please try again."
//           );
//         },
//       }
//     );
//   };

//   const trustPoints = [
//     "Residential Pest Control",
//     "Commercial Pest Control",
//     "Detailed Inspection",
//     "Targeted Treatment",
//   ];

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControl"
//       className="relative min-h-screen overflow-hidden bg-[#F6F4FB] pb-8 pt-[118px] text-[#181425] sm:pt-[125px] lg:pb-12 lg:pt-[165px]"
//     >
//       <Toaster position="top-center" />

//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />

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

//         <meta
//           itemProp="addressCountry"
//           content="GB"
//         />
//       </div>

//       {/* BACKGROUND DECORATION */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-44 top-40 h-[440px] w-[440px] rounded-full bg-[#6254B4]/10 blur-[130px]" />

//         <div className="absolute -right-52 bottom-0 h-[520px] w-[520px] rounded-full bg-[#6254B4]/10 blur-[150px]" />

//         <div
//           className="absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage:
//               "radial-gradient(#6254B4 1.2px, transparent 1.2px)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//       </div>

//       {/* LARGE BACKGROUND WORD */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-8 top-[23%] hidden origin-center rotate-90 text-[105px] font-black uppercase leading-none tracking-[-0.08em] text-[#6254B4]/[0.035] 2xl:block"
//       >
//         Westminster
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
//         {/* HERO FRAME */}
//         <div className="relative overflow-hidden rounded-[34px] border border-[#E4DFF0] bg-white shadow-[0_35px_100px_rgba(36,28,69,0.12)] lg:rounded-[46px]">
//           <div className="grid min-h-[720px] lg:grid-cols-[1.08fr_0.92fr]">
//             {/* LEFT CONTENT AREA */}
//             <div className="relative flex flex-col overflow-hidden px-6 pb-9 pt-8 sm:px-9 sm:pb-11 sm:pt-10 lg:px-12 lg:py-14 xl:px-16">
//               {/* PURPLE CORNER SHAPE */}
//               <div className="pointer-events-none absolute -left-24 -top-28 h-64 w-64 rounded-full bg-[#6254B4]/10" />

//               <div className="pointer-events-none absolute bottom-0 right-0 h-44 w-44 rounded-tl-[120px] border-l border-t border-[#6254B4]/10" />

//               <div className="relative z-10">
//                 {/* TOP INTRO LINE */}
//                 <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E1EE] pb-6">
//                   <div className="flex items-center gap-3">
//                     <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6254B4] text-white">
//                       <ShieldCheck size={17} strokeWidth={2.8} />
//                     </span>

//                     <div>
//                       <span className="block text-[9px] font-black uppercase tracking-[0.24em] text-[#6254B4]">
//                         Local Pest Control Team
//                       </span>

//                       <span className="mt-1 block text-[11px] font-bold text-slate-500">
//                         Serving Westminster and Central London
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-2 rounded-full bg-[#F2EFFF] px-4 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-[#6254B4]">
//                     <span className="h-2 w-2 animate-pulse rounded-full bg-[#6254B4]" />
//                     Callback Available
//                   </div>
//                 </div>

//                 {/* MAIN HEADING */}
//                 <div className="pt-10 lg:pt-12">
//                   <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//                     <Sparkles size={15} strokeWidth={2.5} />
//                     SuperGuard Services Westminster
//                   </span>

//                   <h1 className="mt-5 max-w-[760px] text-[46px] font-black leading-[0.95] tracking-[-0.055em] text-[#181425] sm:text-[64px] lg:text-[70px] xl:text-[82px]">
//                     Protecting your
//                     <span className="relative mt-1 block text-[#6254B4]">
//                       Westminster
//                       <svg
//                         aria-hidden="true"
//                         viewBox="0 0 500 24"
//                         className="absolute -bottom-3 left-0 h-5 w-[85%]"
//                         preserveAspectRatio="none"
//                       >
//                         <path
//                           d="M3 16C120 2 305 2 497 13"
//                           fill="none"
//                           stroke="#6254B4"
//                           strokeWidth="5"
//                           strokeLinecap="round"
//                           opacity="0.22"
//                         />
//                       </svg>
//                     </span>
//                     property.
//                   </h1>

//                   <p className="mt-8 max-w-2xl text-[15px] font-medium leading-8 text-slate-600 sm:text-base">
//                     Professional pest control for homes, landlords and
//                     businesses across Westminster. Our service combines
//                     careful inspection, focused treatment and practical
//                     prevention to help protect your property.
//                   </p>
//                 </div>

//                 {/* CTA BUTTONS */}
//                 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                   <Link
//                     to="/contact-us"
//                     className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#6254B4] px-7 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-xl shadow-[#6254B4]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#181425]"
//                   >
//                     Request a Free Quote

//                     <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:bg-white group-hover:text-[#6254B4]">
//                       <ArrowUpRight
//                         size={15}
//                         strokeWidth={2.8}
//                       />
//                     </span>
//                   </Link>

//                   <Link
//                     to="/services"
//                     className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#DCD6E9] bg-white px-7 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-[#181425] transition-all duration-300 hover:-translate-y-1 hover:border-[#6254B4] hover:text-[#6254B4]"
//                   >
//                     View Our Services

//                     <ArrowRight
//                       size={16}
//                       strokeWidth={2.7}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   </Link>
//                 </div>

//                 {/* TRUST POINTS */}
//                 <div className="mt-9 grid gap-3 border-t border-[#E6E1EE] pt-7 sm:grid-cols-2">
//                   {trustPoints.map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.12em] text-slate-600"
//                     >
//                       <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEEAFE] text-[#6254B4]">
//                         <Check size={13} strokeWidth={3} />
//                       </span>

//                       {item}
//                     </div>
//                   ))}
//                 </div>

//                 {/* ADDRESS AND PHONE */}
//                 <div className="mt-8 grid gap-3 sm:grid-cols-2">
//                   <div className="flex items-center gap-3 rounded-[20px] bg-[#F7F5FB] p-4">
//                     <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#6254B4] shadow-sm">
//                       <MapPin size={18} strokeWidth={2.7} />
//                     </span>

//                     <div>
//                       <span className="block text-[8px] font-black uppercase tracking-[0.19em] text-slate-400">
//                         Westminster Office
//                       </span>

//                       <address className="mt-1 not-italic text-[11px] font-black leading-5 text-[#181425]">
//                         {LOCAL.fullAddress}
//                       </address>
//                     </div>
//                   </div>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="group flex items-center gap-3 rounded-[20px] bg-[#181425] p-4 text-white transition-all duration-300 hover:bg-[#6254B4]"
//                   >
//                     <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
//                       <PhoneCall size={18} strokeWidth={2.7} />
//                     </span>

//                     <div>
//                       <span className="block text-[8px] font-black uppercase tracking-[0.19em] text-white/50">
//                         Call Our Team
//                       </span>

//                       <span className="mt-1 block text-[13px] font-black">
//                         {LOCAL.phoneDisplay}
//                       </span>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT CALLBACK AREA */}
//             <div className="relative overflow-hidden bg-[#6254B4] p-5 sm:p-8 lg:p-9 xl:p-11">
//               {/* RIGHT BACKGROUND DETAILS */}
//               <div className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full border-[70px] border-white/[0.055]" />

//               <div className="pointer-events-none absolute -bottom-32 -left-24 h-[340px] w-[340px] rounded-full border border-white/15" />

//               <div
//                 className="pointer-events-none absolute inset-0 opacity-[0.08]"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
//                   backgroundSize: "48px 48px",
//                 }}
//               />

//               <div className="relative z-10 flex h-full flex-col">
//                 {/* ORIGINAL LOGO PRESENTATION */}
//                 <div className="flex items-start justify-between gap-5">
//                   <div className="rounded-[24px] bg-white p-4 shadow-[0_20px_50px_rgba(31,24,62,0.18)]">
//                     <img
//                       src="/images/superguard-logo.webp"
//                       alt={`${LOCAL.company} logo`}
//                       className="h-[72px] w-[98px] object-contain sm:h-[82px] sm:w-[112px]"
//                       loading="eager"
//                     />
//                   </div>

//                   <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm">
//                     Westminster
//                   </div>
//                 </div>

//                 {/* CALLBACK FORM CARD */}
//                 <div className="mt-8 rounded-[30px] bg-white p-5 text-[#181425] shadow-[0_30px_80px_rgba(28,20,61,0.26)] sm:p-7 lg:mt-auto xl:p-8">
//                   <div className="flex items-start justify-between gap-4 border-b border-[#E9E5F0] pb-6">
//                     <div>
//                       <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//                         Quick Callback
//                       </span>

//                       <h2 className="mt-2 text-2xl font-black leading-tight sm:text-[28px]">
//                         Tell us where you need help.
//                       </h2>

//                       <p className="mb-0 mt-2 text-xs font-medium leading-6 text-slate-500">
//                         Submit your details and our Westminster team will
//                         contact you.
//                       </p>
//                     </div>

//                     <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1EEFF] text-[#6254B4] sm:flex">
//                       <Send size={19} strokeWidth={2.6} />
//                     </span>
//                   </div>

//                   <form
//                     onSubmit={handleSubmit}
//                     className="mt-6 space-y-4"
//                   >
//                     {/* NAME */}
//                     <div>
//                       <label
//                         htmlFor="hero-name"
//                         className="mb-2 block text-[9px] font-black uppercase tracking-[0.18em] text-slate-400"
//                       >
//                         Your Name
//                       </label>

//                       <input
//                         id="hero-name"
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your full name"
//                         autoComplete="name"
//                         required
//                         className="h-14 w-full rounded-[17px] border border-[#E2DDEB] bg-[#FAF9FC] px-5 text-sm font-bold text-[#181425] outline-none transition-all placeholder:font-medium placeholder:text-slate-400 focus:border-[#6254B4] focus:bg-white focus:ring-4 focus:ring-[#6254B4]/10"
//                       />
//                     </div>

//                     <div className="grid gap-4 sm:grid-cols-2">
//                       {/* POSTCODE */}
//                       <div>
//                         <label
//                           htmlFor="hero-postcode"
//                           className="mb-2 block text-[9px] font-black uppercase tracking-[0.18em] text-slate-400"
//                         >
//                           Property Postcode
//                         </label>

//                         <input
//                           id="hero-postcode"
//                           type="text"
//                           name="postcode"
//                           value={formData.postcode}
//                           onChange={handleChange}
//                           placeholder="Enter postcode"
//                           autoComplete="postal-code"
//                           required
//                           className="h-14 w-full rounded-[17px] border border-[#E2DDEB] bg-[#FAF9FC] px-5 text-sm font-bold uppercase text-[#181425] outline-none transition-all placeholder:normal-case placeholder:font-medium placeholder:text-slate-400 focus:border-[#6254B4] focus:bg-white focus:ring-4 focus:ring-[#6254B4]/10"
//                         />
//                       </div>

//                       {/* PHONE */}
//                       <div>
//                         <label
//                           htmlFor="hero-phone"
//                           className="mb-2 block text-[9px] font-black uppercase tracking-[0.18em] text-slate-400"
//                         >
//                           Contact Number
//                         </label>

//                         <input
//                           id="hero-phone"
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="Enter phone number"
//                           autoComplete="tel"
//                           required
//                           aria-invalid={Boolean(phoneError)}
//                           className={`h-14 w-full rounded-[17px] border bg-[#FAF9FC] px-5 text-sm font-bold text-[#181425] outline-none transition-all placeholder:font-medium placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
//                             phoneError
//                               ? "border-red-400 focus:border-red-400 focus:ring-red-100"
//                               : "border-[#E2DDEB] focus:border-[#6254B4] focus:ring-[#6254B4]/10"
//                           }`}
//                         />

//                         {phoneError && (
//                           <p className="mb-0 mt-1.5 text-[10px] font-bold text-red-500">
//                             {phoneError}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     {/* SUBMIT */}
//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="group flex min-h-14 w-full items-center justify-between rounded-[18px] bg-[#181425] px-5 text-[10px] font-black uppercase tracking-[0.17em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6254B4] hover:shadow-xl hover:shadow-[#6254B4]/20 disabled:cursor-not-allowed disabled:opacity-60"
//                     >
//                       <span>
//                         {loading
//                           ? "Sending Request..."
//                           : "Request My Callback"}
//                       </span>

//                       <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-[#6254B4]">
//                         <Send
//                           size={15}
//                           strokeWidth={2.7}
//                           className="transition-transform duration-300 group-hover:translate-x-0.5"
//                         />
//                       </span>
//                     </button>
//                   </form>

//                   {/* FORM FOOTER */}
//                   <div className="mt-5 flex items-start gap-3 rounded-[17px] bg-[#F3F0FF] p-4">
//                     <Clock3
//                       size={17}
//                       strokeWidth={2.6}
//                       className="mt-0.5 shrink-0 text-[#6254B4]"
//                     />

//                     <p className="m-0 text-[10px] font-bold leading-5 text-slate-500">
//                       Callback requests are handled by the SuperGuard
//                       Westminster team based at {LOCAL.streetAddress}.
//                     </p>
//                   </div>
//                 </div>

//                 {/* RIGHT BOTTOM DETAILS */}
//                 <div className="mt-6 grid grid-cols-2 gap-3 text-white">
//                   <div className="rounded-[18px] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
//                     <Building2
//                       size={18}
//                       strokeWidth={2.5}
//                       className="text-white/80"
//                     />

//                     <span className="mt-3 block text-[8px] font-black uppercase tracking-[0.18em] text-white/50">
//                       Property Support
//                     </span>

//                     <span className="mt-1 block text-xs font-black">
//                       Homes & Businesses
//                     </span>
//                   </div>

//                   <div className="rounded-[18px] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
//                     <MapPin
//                       size={18}
//                       strokeWidth={2.5}
//                       className="text-white/80"
//                     />

//                     <span className="mt-3 block text-[8px] font-black uppercase tracking-[0.18em] text-white/50">
//                       Local Coverage
//                     </span>

//                     <span className="mt-1 block text-xs font-black">
//                       Westminster, London
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* BOTTOM IDENTITY STRIP */}
//           <div className="grid border-t border-[#E7E2EE] bg-[#FBFAFD] sm:grid-cols-3">
//             <div className="flex items-center gap-3 border-b border-[#E7E2EE] px-6 py-5 sm:border-b-0 sm:border-r lg:px-9">
//               <span className="h-2.5 w-2.5 rounded-full bg-[#6254B4]" />

//               <span className="text-[9px] font-black uppercase tracking-[0.17em] text-slate-500">
//                 {LOCAL.company}
//               </span>
//             </div>

//             <div className="flex items-center gap-3 border-b border-[#E7E2EE] px-6 py-5 sm:border-b-0 sm:border-r lg:px-9">
//               <MapPin
//                 size={15}
//                 strokeWidth={2.6}
//                 className="shrink-0 text-[#6254B4]"
//               />

//               <span className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-500">
//                 {LOCAL.fullAddress}
//               </span>
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="group flex items-center justify-between px-6 py-5 transition-colors hover:bg-[#F2EFFF] lg:px-9"
//             >
//               <span className="flex items-center gap-3">
//                 <PhoneCall
//                   size={15}
//                   strokeWidth={2.6}
//                   className="text-[#6254B4]"
//                 />

//                 <span className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500">
//                   {LOCAL.phoneDisplay}
//                 </span>
//               </span>

//               <ArrowUpRight
//                 size={15}
//                 strokeWidth={2.6}
//                 className="text-[#6254B4] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ShieldCheck,
//   Zap,
//   ArrowRight,
//   PhoneCall,
//   CheckCircle2,
//   MapPin,
//   Clock,
//   Sparkles,
//   Flame
// } from "lucide-react";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     shortName: "Superguard Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     streetAddress: "49 Shroton St",
//     fullAddress: "49 Shroton St, London NW1 6UB",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//   };

//   const API_URL = "http://localhost:5000/api/callback";

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number.");
//       return;
//     }
//     setLoading(true);

//     toast.promise(
//       axios.post(API_URL, {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.fullAddress,
//       }),
//       {
//         loading: "Sending callback request...",
//         success: () => {
//           setLoading(false);
//           setFormData({ name: "", postcode: "", phone: "" });
//           return "Your callback request has been sent.";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Something went wrong. Please try again.";
//         },
//       }
//     );
//   };

//   const badgeList = [
//     "Certified Technicians",
//     "Rapid Dispatch Unit",
//     "100% Guaranteed Elimination",
//   ];

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControl"
//       className="relative bg-[#6055A6] text-white min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden"
//     >
//       <Toaster position="top-center" />

//       {/* SEO META TAGS */}
//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//       <meta itemProp="areaServed" content={`${LOCAL.area}, ${LOCAL.city}`} />
      
//       <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
//         <meta itemProp="streetAddress" content={LOCAL.streetAddress} />
//         <meta itemProp="addressLocality" content={LOCAL.city} />
//         <meta itemProp="postalCode" content={LOCAL.postcode} />
//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       {/* LUXURIOUS ABSTRACT LIGHTING EFFECTS */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[130px]" />
//         <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-indigo-950/40 rounded-full blur-[140px]" />
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
//         {/* CENTERED ULTRA-PREMIUM HERO HEADER & LAYOUT */}
//         <div className="grid lg:grid-cols-12 gap-12 items-center">
          
//           {/* LEFT COLUMN: BOLD EDITORIAL TYPOGRAPHY */}
//           <div className="lg:col-span-7 space-y-8">
            
//             {/* FLOATING CHIP */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
//               <Sparkles size={14} className="text-amber-300" />
//               <span className="text-[11px] font-black uppercase tracking-widest text-white">
//                 Exclusive {LOCAL.area} Coverage Team
//               </span>
//             </div>

//             {/* MAIN HEADINGS */}
//             <div className="space-y-4">
//               <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]">
//                 Ultimate Protection <br />
//                 Against All <span className="text-amber-300 underline decoration-wavy decoration-2">Pests</span> In {LOCAL.area}
//               </h1>
//               <p className="text-white/80 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
//                 Step away from temporary sprays. We provide advanced, institutional-grade eradication protocols tailored specifically for high-end properties across {LOCAL.city}.
//               </p>
//             </div>

//             {/* FEATURE BADGES LIST */}
//             <div className="space-y-3 pt-2">
//               {badgeList.map((badge, idx) => (
//                 <div key={idx} className="flex items-center gap-3">
//                   <div className="w-6 h-6 rounded-full bg-amber-300/20 border border-amber-300/40 flex items-center justify-center text-amber-300 shrink-0">
//                     <CheckCircle2 size={14} />
//                   </div>
//                   <span className="text-xs sm:text-sm font-bold tracking-wide text-white/90">{badge}</span>
//                 </div>
//               ))}
//             </div>

//             {/* CTAS */}
//             <div className="flex flex-wrap items-center gap-4 pt-4">
//               <Link
//                 to="/services"
//                 className="px-8 py-4 rounded-2xl bg-white text-[#6055A6] hover:bg-black hover:text-white text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-2xl flex items-center gap-3 group"
//               >
//                 <span>Explore Services</span>
//                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//               </Link>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="px-8 py-4 rounded-2xl bg-black/20 hover:bg-black/30 border border-white/20 text-white text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-3 backdrop-blur-md"
//               >
//                 <PhoneCall size={16} className="text-amber-300" />
//                 <span>{LOCAL.phoneDisplay}</span>
//               </a>
//             </div>

//             {/* LOCATION META */}
//             <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-white/70 text-xs font-semibold">
//               <div className="flex items-center gap-2">
//                 <MapPin size={15} className="text-amber-300" />
//                 <span>{LOCAL.fullAddress}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock size={15} className="text-amber-300" />
//                 <span>Immediate Dispatch Available</span>
//               </div>
//             </div>

//           </div>

//           {/* RIGHT COLUMN: MODERN SLEEK FLOATING CARD */}
//           <div className="lg:col-span-5">
//             <div className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-[32px] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.4)] relative overflow-hidden">
              
//               {/* TOP GLOW BORDER */}
//               <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-300 via-white to-amber-300" />

//               <div className="space-y-6">
                
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 block">Fast Response</span>
//                     <h2 className="text-2xl font-black text-white tracking-tight">Book Service</h2>
//                   </div>
//                   <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 shadow-inner">
//                     <Flame size={22} />
//                   </div>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
                  
//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-black uppercase tracking-widest text-white/70 block">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="e.g. John Smith"
//                       required
//                       className="w-full h-13 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm font-semibold focus:outline-none focus:border-white focus:bg-white/20 transition-all"
//                     />
//                   </div>

//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-black uppercase tracking-widest text-white/70 block">
//                       Postcode
//                     </label>
//                     <input
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="e.g. NW1 6UB"
//                       required
//                       className="w-full h-13 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm font-semibold uppercase focus:outline-none focus:border-white focus:bg-white/20 transition-all"
//                     />
//                   </div>

//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-black uppercase tracking-widest text-white/70 block">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="e.g. +44 7356 236459"
//                       required
//                       aria-invalid={Boolean(phoneError)}
//                       className={`w-full h-13 px-4 rounded-xl bg-white/10 border text-white placeholder:text-white/40 text-sm font-semibold focus:outline-none focus:bg-white/20 transition-all ${
//                         phoneError ? "border-red-400" : "border-white/20 focus:border-white"
//                       }`}
//                     />
//                     {phoneError && (
//                       <p className="text-[10px] font-bold text-red-300 mt-1">{phoneError}</p>
//                     )}
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full h-14 rounded-xl bg-white text-[#6055A6] hover:bg-black hover:text-white text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
//                   >
//                     <span>{loading ? "Sending..." : "BOOK SERVICE"}</span>
//                     <Zap size={16} />
//                   </button>

//                 </form>

//                 <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
//                   <ShieldCheck size={20} className="text-amber-300 shrink-0" />
//                   <p className="text-[11px] font-medium text-white/80 leading-snug">
//                     Direct dispatch from our regional station at {LOCAL.streetAddress}, {LOCAL.area}.
//                   </p>
//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }












// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ShieldCheck,
//   Zap,
//   ArrowRight,
//   PhoneCall,
//   MapPin,
//   Clock,
//   Shield,
//   Leaf,
//   Target,
//   Globe,
//   Building2
// } from "lucide-react";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     shortName: "Superguard Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     streetAddress: "49 Shroton St",
//     fullAddress: "49 Shroton St, London NW1 6UB",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//     domain: "superguardmarylebone.co.uk"
//   };

//   const API_URL = "http://localhost:5000/api/callback";

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number.");
//       return;
//     }
//     setLoading(true);

//     toast.promise(
//       axios.post(API_URL, {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.fullAddress,
//       }),
//       {
//         loading: "Sending callback request...",
//         success: () => {
//           setLoading(false);
//           setFormData({ name: "", postcode: "", phone: "" });
//           return "Your callback request has been sent.";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Something went wrong. Please try again.";
//         },
//       }
//     );
//   };

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControl"
//       className="relative bg-white text-slate-900 min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden selection:bg-[#6055A6] selection:text-white"
//     >
//       <Toaster position="top-center" />

//       {/* SEO META TAGS */}
//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//       <meta itemProp="areaServed" content={`${LOCAL.area}, ${LOCAL.city}`} />
      
//       <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
//         <meta itemProp="streetAddress" content={LOCAL.streetAddress} />
//         <meta itemProp="addressLocality" content={LOCAL.city} />
//         <meta itemProp="postalCode" content={LOCAL.postcode} />
//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       {/* BACKGROUND GRAPHIC ACCENTS */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-[#6055A6]/[0.03] pointer-events-none rounded-bl-[120px]" />

//       {/* MAIN CONTAINER */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        
//         <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
//           {/* LEFT COLUMN: TYPOGRAPHY & CALL TO ACTIONS */}
//           <div className="lg:col-span-6 space-y-8">
            
//             <div className="space-y-3">
//               <div className="inline-flex items-center gap-2 text-[#6055A6] text-xs font-black uppercase tracking-widest">
//                 <MapPin size={15} />
//                 <span>{LOCAL.area}, {LOCAL.city}</span>
//               </div>
              
//               <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 uppercase leading-[1.05]">
//                 Protecting <br />
//                 Homes & Businesses <br />
//                 <span className="text-[#6055A6]">Across {LOCAL.area}</span>
//               </h1>
              
//               <p className="text-slate-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed pt-2">
//                 Fast, discreet and effective pest control solutions tailored to your property. We remove pests, so you can enjoy peace of mind.
//               </p>
//             </div>

//             {/* ACTION BUTTONS ROW */}
//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="px-7 py-4 rounded-2xl bg-[#6055A6] hover:bg-[#4f448c] text-white transition-all shadow-xl shadow-[#6055A6]/25 flex items-center gap-3.5 group"
//               >
//                 <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
//                   <PhoneCall size={18} className="text-white" />
//                 </div>
//                 <div className="text-left">
//                   <span className="text-[10px] font-black uppercase tracking-wider block opacity-80">Call Us Now</span>
//                   <span className="text-sm font-black tracking-wide">{LOCAL.phoneDisplay}</span>
//                 </div>
//               </a>

//               <Link
//                 to="/services"
//                 className="px-8 py-5 rounded-2xl bg-white hover:bg-slate-50 border-2 border-[#6055A6]/30 text-[#6055A6] text-xs font-black uppercase tracking-wider transition-all flex items-center gap-3 group shadow-sm"
//               >
//                 <span>Our Services</span>
//                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>

//           </div>

//           {/* RIGHT COLUMN: BRANDED VISUAL SHOWCASE & CARDS */}
//           <div className="lg:col-span-6 space-y-6">
            
//             {/* MAIN ARCHED GRAPHIC BOX */}
//             <div className="relative bg-[#6055A6] rounded-t-[140px] rounded-b-3xl p-8 sm:p-10 text-white overflow-hidden shadow-2xl">
              
//               {/* SUBTLE DOT PATTERN */}
//               <div className="absolute top-6 left-6 grid grid-cols-4 gap-2 opacity-30 pointer-events-none">
//                 {[...Array(16)].map((_, i) => (
//                   <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
//                 ))}
//               </div>

//               <div className="relative z-10 grid sm:grid-cols-2 gap-8 items-center">
                
//                 <div className="space-y-4">
//                   <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1.5 rounded-md inline-block">
//                     Safeguarding What Matters Most
//                   </span>
//                   <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
//                     Our local experts use advanced treatment methods to deliver long-lasting results you can rely on.
//                   </p>
//                 </div>

//                 {/* SHIELD ICON ILLUSTRATION CONTAINER */}
//                 <div className="flex justify-center">
//                   <div className="w-40 h-48 sm:w-48 sm:h-56 rounded-t-full border-2 border-white/30 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center p-4 relative shadow-inner">
//                     <div className="w-20 h-24 rounded-t-full border-2 border-white/60 flex flex-col items-center justify-center relative">
//                       <Building2 size={36} className="text-white" />
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* FLOATING 3-FEATURE GRID CARDS */}
//             <div className="grid grid-cols-3 gap-4">
              
//               <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 text-center shadow-xl shadow-slate-200/50 flex flex-col items-center justify-between space-y-3 group hover:border-[#6055A6] transition-colors">
//                 <div className="w-12 h-12 rounded-2xl bg-[#6055A6]/10 text-[#6055A6] flex items-center justify-center group-hover:bg-[#6055A6] group-hover:text-white transition-all">
//                   <Shield size={22} />
//                 </div>
//                 <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-800 leading-tight">
//                   Certified Technicians
//                 </h3>
//                 <div className="w-6 h-0.5 bg-[#6055A6] rounded-full" />
//               </div>

//               <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 text-center shadow-xl shadow-slate-200/50 flex flex-col items-center justify-between space-y-3 group hover:border-[#6055A6] transition-colors">
//                 <div className="w-12 h-12 rounded-2xl bg-[#6055A6]/10 text-[#6055A6] flex items-center justify-center group-hover:bg-[#6055A6] group-hover:text-white transition-all">
//                   <Leaf size={22} />
//                 </div>
//                 <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-800 leading-tight">
//                   Safe & Eco Friendly
//                 </h3>
//                 <div className="w-6 h-0.5 bg-[#6055A6] rounded-full" />
//               </div>

//               <div className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 text-center shadow-xl shadow-slate-200/50 flex flex-col items-center justify-between space-y-3 group hover:border-[#6055A6] transition-colors">
//                 <div className="w-12 h-12 rounded-2xl bg-[#6055A6]/10 text-[#6055A6] flex items-center justify-center group-hover:bg-[#6055A6] group-hover:text-white transition-all">
//                   <Target size={22} />
//                 </div>
//                 <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-800 leading-tight">
//                   Fast & Effective
//                 </h3>
//                 <div className="w-6 h-0.5 bg-[#6055A6] rounded-full" />
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* BOTTOM INFO BAR */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
//         <div className="bg-white border border-slate-200 rounded-3xl py-6 px-6 sm:px-10 shadow-lg shadow-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
//           <div className="flex items-center gap-4 pt-4 md:pt-0">
//             <div className="w-12 h-12 rounded-2xl bg-[#6055A6]/10 text-[#6055A6] flex items-center justify-center shrink-0">
//               <MapPin size={22} />
//             </div>
//             <div>
//               <p className="text-xs font-bold text-slate-900">{LOCAL.streetAddress},</p>
//               <p className="text-xs text-slate-500 font-medium">{LOCAL.city} {LOCAL.postcode}, United Kingdom</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
//             <div className="w-12 h-12 rounded-2xl bg-[#6055A6]/10 text-[#6055A6] flex items-center justify-center shrink-0">
//               <PhoneCall size={22} />
//             </div>
//             <div>
//               <p className="text-xs font-bold text-slate-900">{LOCAL.phoneDisplay}</p>
//               <p className="text-xs text-slate-500 font-medium">Call us anytime</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
//             <div className="w-12 h-12 rounded-2xl bg-[#6055A6]/10 text-[#6055A6] flex items-center justify-center shrink-0">
//               <Clock size={22} />
//             </div>
//             <div>
//               <p className="text-xs font-bold text-slate-900">Mon - Sun</p>
//               <p className="text-xs text-slate-500 font-medium">8:00 AM - 8:00 PM</p>
//             </div>
//           </div>

//           {/* <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
//             <div className="w-12 h-12 rounded-2xl bg-[#6055A6]/10 text-[#6055A6] flex items-center justify-center shrink-0">
//               <Globe size={22} />
//             </div>
//             <div>

//               <p className="text-xs font-bold text-slate-900">{LOCAL.domain}</p>
//               <p className="text-xs text-slate-500 font-medium">Visit our website</p>
//             </div>
//           </div> */}

//         </div>
//       </div>
//     </section>
//   );
// }
















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ShieldCheck,
//   Zap,
//   ArrowRight,
//   PhoneCall,
//   MapPin,
//   Clock,
//   CheckCircle,
//   Shield,
//   Award,
//   ChevronRight,
//   Lock
// } from "lucide-react";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     shortName: "Superguard Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     streetAddress: "49 Shroton St",
//     fullAddress: "49 Shroton St, London NW1 6UB",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//     domain: "superguardmarylebone.co.uk"
//   };

//   const API_URL = "http://localhost:5000/api/callback";

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number.");
//       return;
//     }
//     setLoading(true);

//     toast.promise(
//       axios.post(API_URL, {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.fullAddress,
//       }),
//       {
//         loading: "Sending request...",
//         success: () => {
//           setLoading(false);
//           setFormData({ name: "", postcode: "", phone: "" });
//           return "Your callback request has been sent.";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Something went wrong. Please try again.";
//         },
//       }
//     );
//   };

//   const trustBadges = [
//     "Fully Licensed & Insured",
//     "Rapid Local Response",
//     "100% Satisfaction Guarantee"
//   ];

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControl"
//       className="relative bg-white text-slate-900 min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden"
//     >
//       <Toaster position="top-center" />

//       {/* SEO META TAGS */}
//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//       <meta itemProp="areaServed" content={`${LOCAL.area}, ${LOCAL.city}`} />
      
//       <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
//         <meta itemProp="streetAddress" content={LOCAL.streetAddress} />
//         <meta itemProp="addressLocality" content={LOCAL.city} />
//         <meta itemProp="postalCode" content={LOCAL.postcode} />
//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       {/* CLEAN BACKGROUND GEOMETRY */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

//       {/* MAIN CONTAINER */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
//         {/* ASYMMETRIC SPLIT LAYOUT WITH CENTered BANNER & SIDE-BY-SIDE INTEGRATION */}
//         <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
//           {/* LEFT COLUMN: HERO CONTENT & METRICS */}
//           <div className="lg:col-span-7 space-y-8">
            
//             {/* TOP PILL */}
//             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-100 shadow-sm">
//               <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
//               <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
//                 Official Response Hub • {LOCAL.area}
//               </span>
//             </div>
            
//             {/* MAIN HEADING */}
//             <div className="space-y-4">
//               <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 uppercase leading-[1.1]">
//                 Advanced Pest Elimination For <span className="text-indigo-600 underline decoration-indigo-200 decoration-wavy underline-offset-8">Modern Properties</span>
//               </h1>
              
//               <p className="text-slate-600 text-lg max-w-xl font-medium leading-relaxed">
//                 Reliable, discreet, and fast solutions protecting homes and businesses across {LOCAL.area} from unwanted infestations.
//               </p>
//             </div>

//             {/* CHECKLIST ROW */}
//             <div className="flex flex-wrap gap-4 pt-2">
//               {trustBadges.map((badge, idx) => (
//                 <div key={idx} className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl">
//                   <CheckCircle size={16} className="text-indigo-600 shrink-0" />
//                   <span className="text-xs font-bold text-slate-700">{badge}</span>
//                 </div>
//               ))}
//             </div>

//             {/* ACTION BUTTONS */}
//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-lg shadow-slate-900/10 flex items-center gap-3.5 group"
//               >
//                 <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
//                   <PhoneCall size={16} className="text-white" />
//                 </div>
//                 <div className="text-left">
//                   <span className="text-[10px] font-bold uppercase tracking-wider block text-slate-400">Call us now</span>
//                   <span className="text-sm font-black tracking-wide">{LOCAL.phoneDisplay}</span>
//                 </div>
//               </a>

//               <Link
//                 to="/services"
//                 className="px-7 py-4 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2.5 group"
//               >
//                 <span>Explore Services</span>
//                 <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>

//             {/* QUICK STATS STRIP */}
//             <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-6 max-w-lg">
//               <div>
//                 <p className="text-2xl font-black text-slate-900">24/7</p>
//                 <p className="text-xs font-medium text-slate-500">Availability</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-black text-indigo-600">100%</p>
//                 <p className="text-xs font-medium text-slate-500">Guaranteed</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-black text-slate-900">Fast</p>
//                 <p className="text-xs font-medium text-slate-500">Local Dispatch</p>
//               </div>
//             </div>

//           </div>

//           {/* RIGHT COLUMN: MODERN SLEEK FORM CONTAINER */}
//           <div className="lg:col-span-5">
//             <div className="bg-white border-2 border-slate-200/80 rounded-[28px] p-6 sm:p-8 shadow-2xl shadow-indigo-900/[0.06] relative">
              
//               {/* ACCENT BADGE CORNER */}
//               <div className="absolute -top-3.5 right-6 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
//                 Express Booking
//               </div>

//               <div className="space-y-6">
                
//                 <div>
//                   <h2 className="text-2xl font-black text-slate-900 tracking-tight">BOOK SERVICE</h2>
//                   <p className="text-xs text-slate-500 mt-0.5">Fill out your details for immediate response.</p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
                  
//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-black uppercase tracking-wider text-slate-600 block">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="e.g. John Smith"
//                       required
//                       className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
//                     />
//                   </div>

//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-black uppercase tracking-wider text-slate-600 block">
//                       Postcode
//                     </label>
//                     <input
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="e.g. NW1 6UB"
//                       required
//                       className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-medium uppercase focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
//                     />
//                   </div>

//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-black uppercase tracking-wider text-slate-600 block">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="e.g. +44 7356 236459"
//                       required
//                       aria-invalid={Boolean(phoneError)}
//                       className={`w-full h-12 px-4 rounded-xl bg-slate-50 border text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:bg-white transition-all ${
//                         phoneError ? "border-red-400" : "border-slate-200 focus:border-indigo-600"
//                       }`}
//                     />
//                     {phoneError && (
//                       <p className="text-[10px] font-bold text-red-500 mt-1">{phoneError}</p>
//                     )}
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full h-13 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
//                   >
//                     <span>{loading ? "Sending..." : "BOOK SERVICE"}</span>
//                     <Zap size={15} />
//                   </button>

//                 </form>

//                 <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
//                   <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
//                     <ShieldCheck size={18} />
//                   </div>
//                   <p className="text-[11px] font-medium text-slate-500 leading-snug">
//                     Stationed locally at <span className="text-slate-800 font-bold">{LOCAL.streetAddress}, {LOCAL.area}</span>.
//                   </p>
//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>

//       </div>

//       {/* DISTINCT CARD-BASED FOOTER STRIP */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
//           <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex items-center gap-4">
//             <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center shadow-sm shrink-0">
//               <MapPin size={20} />
//             </div>
//             <div>
//               <p className="text-xs font-bold text-slate-900">{LOCAL.streetAddress}</p>
//               <p className="text-xs text-slate-500">{LOCAL.city} {LOCAL.postcode}, UK</p>
//             </div>
//           </div>

//           <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex items-center gap-4">
//             <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center shadow-sm shrink-0">
//               <PhoneCall size={20} />
//             </div>
//             <div>
//               <p className="text-xs font-bold text-slate-900">{LOCAL.phoneDisplay}</p>
//               <p className="text-xs text-slate-500">Direct consultation line</p>
//             </div>
//           </div>

//           <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex items-center gap-4">
//             <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center shadow-sm shrink-0">
//               <Clock size={20} />
//             </div>
//             <div>
//               <p className="text-xs font-bold text-slate-900">Mon - Sun: 8:00 AM - 8:00 PM</p>
//               <p className="text-xs text-slate-500">Emergency support active</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
















// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// import axios from "axios";

// import toast, { Toaster } from "react-hot-toast";

// import {
//   ShieldCheck,
//   Zap,
//   PhoneCall,
//   MapPin,
//   Clock,
//   CheckCircle,
//   ChevronRight,
//   ArrowUpRight,
//   Bug,
//   Home,
//   Building2,
//   Search,
// } from "lucide-react";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     shortName: "Superguard Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     streetAddress: "49 Shroton St",
//     fullAddress: "49 Shroton St, London NW1 6UB",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//     domain: "superguardmarylebone.co.uk",
//   };

//   // KEEPING API EXACTLY THE SAME
//   const API_URL = "http://localhost:5000/api/callback";

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(API_URL, {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.fullAddress,
//       }),
//       {
//         loading: "Sending request...",
//         success: () => {
//           setLoading(false);

//           setFormData({
//             name: "",
//             postcode: "",
//             phone: "",
//           });

//           return "Your callback request has been sent.";
//         },
//         error: (error) => {
//           setLoading(false);

//           return (
//             error.response?.data?.message ||
//             "Something went wrong. Please try again."
//           );
//         },
//       }
//     );
//   };

//   const trustBadges = [
//     "Fully Licensed & Insured",
//     "Rapid Local Response",
//     "100% Satisfaction Guarantee",
//   ];

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControl"
//       className="relative min-h-screen overflow-hidden bg-[#F8F7FB] text-[#17151D]"
//     >
//       <Toaster position="top-center" />

//       {/* =========================================================
//           SEO META
//       ========================================================= */}

//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, ${LOCAL.city}`}
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

//       {/* =========================================================
//           BACKGROUND DECORATION
//       ========================================================= */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">

//         {/* Large Purple Architectural Shape */}
//         <div
//           className="
//             absolute
//             -right-[18%]
//             -top-[18%]
//             h-[760px]
//             w-[760px]
//             rounded-full
//             bg-[#6055A6]
//             opacity-[0.08]
//           "
//         />

//         <div
//           className="
//             absolute
//             right-[5%]
//             top-[7%]
//             h-[520px]
//             w-[520px]
//             rounded-full
//             border
//             border-[#6055A6]/10
//           "
//         />

//         {/* Small Dot Grid */}
//         <div
//           className="
//             absolute
//             right-[8%]
//             top-[18%]
//             grid
//             grid-cols-6
//             gap-3
//             opacity-30
//           "
//         >
//           {Array.from({ length: 36 }).map((_, index) => (
//             <span
//               key={index}
//               className="h-1 w-1 rounded-full bg-[#6055A6]"
//             />
//           ))}
//         </div>

//         {/* Vertical line */}
//         <div className="absolute left-[7%] top-0 h-full w-px bg-[#17151D]/[0.05]" />

//         {/* Horizontal line */}
//         <div className="absolute left-0 top-[86%] h-px w-full bg-[#17151D]/[0.05]" />

//         {/* Huge watermark */}
//         <div
//           className="
//             absolute
//             -bottom-20
//             left-[3%]
//             select-none
//             text-[220px]
//             font-black
//             leading-none
//             tracking-[-0.08em]
//             text-[#6055A6]/[0.035]
//           "
//         >
//           SG
//         </div>
//       </div>

//       {/* =========================================================
//           MAIN HERO
//       ========================================================= */}

//       <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

//         <div className="grid min-h-screen items-center gap-12 py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-28">

//           {/* =====================================================
//               LEFT SIDE
//           ===================================================== */}

//           <div className="relative">

//             {/* Brand Header */}
//             <div className="mb-12 flex items-center justify-between">

           

//               <div className="hidden items-center gap-2 sm:flex">

//                 <span className="h-2 w-2 rounded-full bg-[#6055A6]" />

//                 <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#17151D]/50">
//                   Marylebone • London
//                 </span>

//               </div>
//             </div>

//             {/* Location */}
//             <div className="mb-7 flex items-center gap-3">

//               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                 <MapPin size={17} />
//               </div>

//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#6055A6]">
//                   Local Pest Control
//                 </p>

//                 <p className="mt-0.5 text-sm font-semibold text-[#17151D]">
//                   Marylebone, London
//                 </p>
//               </div>

//             </div>

//             {/* Main Heading */}
//             <h1
//               className="
//                 max-w-[850px]
//                 text-[54px]
//                 font-black
//                 leading-[0.92]
//                 tracking-[-0.055em]
//                 sm:text-[68px]
//                 md:text-[78px]
//                 lg:text-[82px]
//                 xl:text-[96px]
//               "
//             >
//               A Cleaner
//               <span className="block text-[#6055A6]">
//                 Space Starts
//               </span>

//               <span className="relative inline-block">
//                 With Control.
//                 <span className="absolute -bottom-2 left-1 h-1.5 w-20 rounded-full bg-[#6055A6] sm:w-28" />
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="mt-9 max-w-[610px] text-base leading-7 text-[#17151D]/60 sm:text-lg">
//               Professional pest control for homes, landlords and
//               businesses across Marylebone. Superguard Services
//               provides discreet, targeted treatments for common
//               infestations — helping you protect your property
//               without unnecessary disruption.
//             </p>

//             {/* =================================================
//                 CTA ROW
//             ================================================= */}

//             <div className="mt-9 flex flex-wrap items-center gap-4">

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   gap-3
//                   rounded-full
//                   bg-[#6055A6]
//                   px-6
//                   py-4
//                   text-sm
//                   font-bold
//                   text-white
//                   shadow-xl
//                   shadow-[#6055A6]/20
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:bg-[#514795]
//                 "
//               >
//                 <PhoneCall size={18} />

//                 <span>Call {LOCAL.phoneDisplay}</span>

//                 <ArrowUpRight
//                   size={17}
//                   className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </a>

//               <Link
//                 to="/services"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-[#17151D]/15
//                   bg-white
//                   px-6
//                   py-4
//                   text-sm
//                   font-bold
//                   text-[#17151D]
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-[#6055A6]/40
//                 "
//               >
//                 View Pest Services

//                 <ChevronRight
//                   size={17}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </Link>

//             </div>

//             {/* =================================================
//                 SERVICE TYPES
//             ================================================= */}

//             <div className="mt-12 flex flex-wrap gap-3">

//               <div className="flex items-center gap-2 rounded-full border border-[#17151D]/10 bg-white px-4 py-2.5 shadow-sm">

//                 <Home
//                   size={15}
//                   className="text-[#6055A6]"
//                 />

//                 <span className="text-xs font-semibold">
//                   Homes
//                 </span>

//               </div>

//               <div className="flex items-center gap-2 rounded-full border border-[#17151D]/10 bg-white px-4 py-2.5 shadow-sm">

//                 <Building2
//                   size={15}
//                   className="text-[#6055A6]"
//                 />

//                 <span className="text-xs font-semibold">
//                   Businesses
//                 </span>

//               </div>

//               <div className="flex items-center gap-2 rounded-full border border-[#17151D]/10 bg-white px-4 py-2.5 shadow-sm">

//                 <Search
//                   size={15}
//                   className="text-[#6055A6]"
//                 />

//                 <span className="text-xs font-semibold">
//                   Targeted Treatments
//                 </span>

//               </div>

//             </div>

//             {/* =================================================
//                 TRUST BADGES
//             ================================================= */}

//             <div className="mt-10 border-t border-[#17151D]/10 pt-6">

//               <div className="flex flex-wrap gap-x-7 gap-y-3">

//                 {trustBadges.map((badge, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-2"
//                   >
//                     <CheckCircle
//                       size={15}
//                       className="text-[#6055A6]"
//                     />

//                     <span className="text-[11px] font-semibold text-[#17151D]/55">
//                       {badge}
//                     </span>
//                   </div>
//                 ))}

//               </div>

//             </div>
//           </div>

//           {/* =====================================================
//               RIGHT SIDE — UNIQUE BOOKING PANEL
//           ===================================================== */}

//           <div className="relative">

//             {/* Purple vertical architectural block */}
//             <div
//               className="
//                 absolute
//                 -right-8
//                 -top-8
//                 h-[560px]
//                 w-[110px]
//                 rounded-[60px]
//                 bg-[#6055A6]
//                 opacity-10
//                 lg:h-[650px]
//               "
//             />

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[38px]
//                 bg-[#17151D]
//                 p-5
//                 shadow-[0_30px_100px_rgba(23,21,29,0.18)]
//                 sm:p-7
//                 lg:p-8
//               "
//             >

//               {/* Inner purple glow */}
//               <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#6055A6]/40 blur-3xl" />

//               <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#6055A6]/20 blur-3xl" />

//               <div className="relative z-10">

//                 {/* Top number / label */}
//                 <div className="mb-8 flex items-start justify-between">

//                   <div>
//                     <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A9A2D2]">
//                       Superguard Services
//                     </p>

//                     <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
//                       Request a
//                       <span className="block text-[#8B82C7]">
//                         Callback
//                       </span>
//                     </h2>
//                   </div>

//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
//                     <Bug
//                       size={22}
//                       className="text-[#8B82C7]"
//                     />
//                   </div>

//                 </div>

//                 {/* Short intro */}
//                 <div className="mb-7 rounded-2xl border border-white/10 bg-white/[0.045] p-4">

//                   <div className="flex gap-3">

//                     <ShieldCheck
//                       size={19}
//                       className="mt-0.5 shrink-0 text-[#8B82C7]"
//                     />

//                     <p className="text-xs leading-5 text-white/55">
//                       Tell us where you need help and a member
//                       of our local team can get back to you.
//                     </p>

//                   </div>

//                 </div>

//                 {/* =================================================
//                     FORM
//                 ================================================= */}

//                 <form
//                   onSubmit={handleSubmit}
//                   className="space-y-4"
//                 >

//                   {/* Name */}
//                   <div>

//                     <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
//                       Full Name
//                     </label>

//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your name"
//                       required
//                       className="
//                         h-13
//                         w-full
//                         rounded-2xl
//                         border
//                         border-white/10
//                         bg-white/[0.06]
//                         px-4
//                         text-sm
//                         text-white
//                         outline-none
//                         placeholder:text-white/25
//                         transition-all
//                         focus:border-[#8B82C7]
//                         focus:bg-white/[0.09]
//                       "
//                     />

//                   </div>

//                   {/* Postcode */}
//                   <div>

//                     <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
//                       Property Postcode
//                     </label>

//                     <input
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="e.g. NW1 6UB"
//                       required
//                       className="
//                         h-13
//                         w-full
//                         rounded-2xl
//                         border
//                         border-white/10
//                         bg-white/[0.06]
//                         px-4
//                         text-sm
//                         uppercase
//                         text-white
//                         outline-none
//                         placeholder:text-white/25
//                         transition-all
//                         focus:border-[#8B82C7]
//                         focus:bg-white/[0.09]
//                       "
//                     />

//                   </div>

//                   {/* Phone */}
//                   <div>

//                     <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
//                       Phone Number
//                     </label>

//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="+44 7356 236459"
//                       required
//                       aria-invalid={Boolean(phoneError)}
//                       className={`
//                         h-13
//                         w-full
//                         rounded-2xl
//                         border
//                         bg-white/[0.06]
//                         px-4
//                         text-sm
//                         text-white
//                         outline-none
//                         placeholder:text-white/25
//                         transition-all
//                         ${
//                           phoneError
//                             ? "border-red-400 focus:border-red-400"
//                             : "border-white/10 focus:border-[#8B82C7]"
//                         }
//                       `}
//                     />

//                     {phoneError && (
//                       <p className="mt-2 text-[11px] font-medium text-red-400">
//                         {phoneError}
//                       </p>
//                     )}

//                   </div>

//                   {/* Submit */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="
//                       group
//                       mt-2
//                       flex
//                       h-14
//                       w-full
//                       items-center
//                       justify-between
//                       rounded-2xl
//                       bg-[#6055A6]
//                       px-5
//                       text-sm
//                       font-bold
//                       text-white
//                       shadow-lg
//                       shadow-[#6055A6]/20
//                       transition-all
//                       duration-300
//                       hover:bg-[#7065B7]
//                       disabled:cursor-not-allowed
//                       disabled:opacity-50
//                     "
//                   >

//                     <span>
//                       {loading
//                         ? "Sending..."
//                         : "Request a Callback"}
//                     </span>

//                     <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
//                       <ArrowUpRight
//                         size={17}
//                         className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                       />
//                     </span>

//                   </button>

//                 </form>

//                 {/* =================================================
//                     LOCAL INFORMATION
//                 ================================================= */}

//                 <div className="mt-7 border-t border-white/10 pt-6">

//                   <div className="flex items-start gap-3">

//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6055A6]/20">
//                       <MapPin
//                         size={17}
//                         className="text-[#8B82C7]"
//                       />
//                     </div>

//                     <div>

//                       <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
//                         Local Office
//                       </p>

//                       <p className="mt-1 text-sm font-semibold text-white">
//                         {LOCAL.streetAddress}
//                       </p>

//                       <p className="mt-0.5 text-xs text-white/40">
//                         {LOCAL.city} {LOCAL.postcode}, United Kingdom
//                       </p>

//                     </div>

//                   </div>

//                   <div className="mt-5 flex items-center justify-between gap-4">

//                     <div className="flex items-center gap-2">

//                       <Clock
//                         size={15}
//                         className="text-[#8B82C7]"
//                       />

//                       <span className="text-[11px] text-white/45">
//                         Mon – Sun
//                       </span>

//                     </div>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="text-xs font-bold text-[#B7B1D8] hover:text-white"
//                     >
//                       {LOCAL.phoneDisplay}
//                     </a>

//                   </div>

//                 </div>

//               </div>
//             </div>

//             {/* Floating purple tag */}
//             <div
//               className="
//                 absolute
//                 -bottom-5
//                 -left-3
//                 hidden
//                 rounded-2xl
//                 bg-[#6055A6]
//                 px-5
//                 py-3
//                 shadow-xl
//                 shadow-[#6055A6]/20
//                 sm:block
//               "
//             >
//               <div className="flex items-center gap-2">

//                 <Zap size={15} />

//                 <span className="text-xs font-bold">
//                   Fast Local Response
//                 </span>

//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* =========================================================
//           BOTTOM ADDRESS BAR
//       ========================================================= */}

//       <div className="relative z-20 border-t border-[#17151D]/10 bg-white">

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

//           <div className="grid grid-cols-1 divide-y divide-[#17151D]/10 py-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

//             {/* Address */}
//             <div className="flex items-center gap-3 py-4 sm:px-6 sm:first:pl-0 sm:py-2">

//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6055A6]/10">
//                 <MapPin
//                   size={18}
//                   className="text-[#6055A6]"
//                 />
//               </div>

//               <div>
//                 <p className="text-xs font-bold text-[#17151D]">
//                   {LOCAL.streetAddress}
//                 </p>

//                 <p className="mt-0.5 text-[11px] text-[#17151D]/45">
//                   {LOCAL.city} {LOCAL.postcode}
//                 </p>
//               </div>

//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-3 py-4 sm:px-6 sm:py-2">

//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6055A6]/10">
//                 <PhoneCall
//                   size={18}
//                   className="text-[#6055A6]"
//                 />
//               </div>

//               <div>
//                 <p className="text-xs font-bold text-[#17151D]">
//                   {LOCAL.phoneDisplay}
//                 </p>

//                 <p className="mt-0.5 text-[11px] text-[#17151D]/45">
//                   Direct consultation line
//                 </p>
//               </div>

//             </div>

//             {/* Service Area */}
//             <div className="flex items-center gap-3 py-4 sm:px-6 sm:py-2 sm:pr-0">

//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6055A6]/10">
//                 <ShieldCheck
//                   size={18}
//                   className="text-[#6055A6]"
//                 />
//               </div>

//               <div>
//                 <p className="text-xs font-bold text-[#17151D]">
//                   Serving {LOCAL.area}
//                 </p>

//                 <p className="mt-0.5 text-[11px] text-[#17151D]/45">
//                   Residential & Commercial Pest Control
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }










// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// import {
//   ShieldCheck,
//   PhoneCall,
//   MapPin,
//   Clock,
//   ArrowRight,
//   ArrowUpRight,
//   User,
//   Navigation,
//   Lock,
//   Bug,
//   Award,
//   Timer,
// } from "lucide-react";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     shortName: "Superguard Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     streetAddress: "49 Shroton St",
//     fullAddress: "49 Shroton St, London NW1 6UB",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//     domain: "superguardmarylebone.co.uk",
//   };

//   const API_URL = "http://localhost:5000/api/callback";

//   const PURPLE = "#6055A6";
//   const LIGHT_PURPLE = "#8D82D5";

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(API_URL, {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.fullAddress,
//       }),
//       {
//         loading: "Sending request...",
//         success: () => {
//           setLoading(false);

//           setFormData({
//             name: "",
//             postcode: "",
//             phone: "",
//           });

//           return "Your callback request has been sent.";
//         },
//         error: (error) => {
//           setLoading(false);

//           return (
//             error.response?.data?.message ||
//             "Something went wrong. Please try again."
//           );
//         },
//       }
//     );
//   };

//   const trustItems = [
//     {
//       icon: ShieldCheck,
//       title: "FULLY LICENSED",
//       subtitle: "& INSURED",
//     },
//     {
//       icon: Timer,
//       title: "RAPID LOCAL",
//       subtitle: "RESPONSE",
//     },
//     {
//       icon: Award,
//       title: "100%",
//       subtitle: "SATISFACTION",
//     },
//     {
//       icon: Lock,
//       title: "DISCREET &",
//       subtitle: "TRUSTED",
//     },
//   ];

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControl"
//       className="relative w-full overflow-x-hidden bg-[#6055A6] mt-28 text-white"
//     >
//       <Toaster position="top-center" />

//       {/* =========================================================
//           SEO
//       ========================================================= */}

//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, ${LOCAL.city}`}
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

//       {/* =========================================================
//           BACKGROUND DETAILS
//       ========================================================= */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Dark subtle grid */}
//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.055]
//             bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
//             bg-[size:55px_55px]
//           "
//         />

//         {/* Dark glow left */}
//         <div
//           className="
//             absolute
//             -left-[250px]
//             top-[120px]
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-[#241E46]/25
//             blur-[120px]
//           "
//         />

//         {/* Dark glow right */}
//         <div
//           className="
//             absolute
//             -right-[200px]
//             top-[100px]
//             h-[550px]
//             w-[550px]
//             rounded-full
//             bg-[#241E46]/30
//             blur-[130px]
//           "
//         />

//         {/* Small dots */}
//         <div className="absolute right-8 top-8 hidden grid-cols-3 gap-3 opacity-40 sm:grid">
//           {Array.from({ length: 9 }).map((_, index) => (
//             <span
//               key={index}
//               className="h-1 w-1 rounded-full bg-white"
//             />
//           ))}
//         </div>

//         {/* Architectural lines */}
//         <div className="absolute right-[8%] top-0 h-[100px] w-px bg-white/20" />
//         <div className="absolute left-0 top-[88%] h-px w-full bg-white/10" />
//       </div>

//       {/* =========================================================
//           MAIN CONTAINER
//       ========================================================= */}

//       <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12">

//         {/* =======================================================
//             HEADER
//         ======================================================= */}

//         <header className="flex items-center justify-between py-5 sm:py-6">

//           {/* Logo */}
//           {/* <Link
//             to="/"
//             className="flex shrink-0 items-center"
//           >
//             <img
//               src="/images/logo.webp"
//               alt="Superguard Services Marylebone"
//               className="
//                 h-auto
//                 w-[125px]
//                 object-contain
//                 sm:w-[145px]
//                 lg:w-[155px]
//               "
//             />
//           </Link> */}

//           {/* Serving area */}
//           <div className="flex items-center gap-3 sm:gap-5">

//             <div className="hidden sm:block">
//               <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/55">
//                 Serving
//               </p>

//               <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-white">
//                 {LOCAL.area}
//               </p>
//             </div>

//             <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 sm:h-10 sm:w-10">
//               <MapPin
//                 size={17}
//                 className="text-white"
//               />
//             </div>

//             <div className="hidden h-8 w-px bg-white/20 sm:block" />

//             <div className="hidden grid-cols-3 gap-2 opacity-50 sm:grid">
//               {Array.from({ length: 9 }).map((_, index) => (
//                 <span
//                   key={index}
//                   className="h-1 w-1 rounded-full bg-white"
//                 />
//               ))}
//             </div>
//           </div>
//         </header>

//         {/* =======================================================
//             HERO
//         ======================================================= */}

//         <div
//           className="
//             relative
//             grid
//             items-center
//             gap-6
//             py-6
//             lg:min-h-[600px]
//             lg:grid-cols-[0.95fr_1.05fr]
//             lg:gap-4
//             lg:py-4
//             xl:min-h-[625px]
//           "
//         >

//           {/* =====================================================
//               LEFT SIDE
//           ===================================================== */}

//           <div className="relative z-20 pb-8 pt-4 lg:pb-10 lg:pt-0">

//             {/* Eyebrow */}
//             <div className="mb-5 flex items-center gap-3">
//               <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/80 sm:text-[10px]">
//                 Protecting What Matters
//               </span>

//               <div className="h-px w-10 bg-white/60" />
//             </div>

//             {/* Main Heading */}
//             <h1
//               className="
//                 max-w-[620px]
//                 text-[52px]
//                 font-black
//                 uppercase
//                 leading-[0.88]
//                 tracking-[-0.055em]
//                 sm:text-[64px]
//                 md:text-[72px]
//                 lg:text-[67px]
//                 xl:text-[78px]
//               "
//             >
//               Expert Pest
//               <span className="block">
//                 Control.
//               </span>

//               <span className="block text-white/40">
//                 Peace
//               </span>

//               <span className="block text-white">
//                 Guaranteed.
//               </span>
//             </h1>

//             {/* Accent line */}
//             <div className="mt-5 flex items-center gap-2">
//               <div className="h-[3px] w-12 bg-white" />
//               <div className="h-[3px] w-8 bg-white/40" />
//               <div className="h-[3px] w-5 bg-white/20" />
//             </div>

//             {/* Description */}
//             <p className="mt-5 max-w-[520px] text-sm leading-6 text-white/75 sm:text-base">
//               Fast, discreet, and highly effective pest control
//               solutions for homes and businesses across{" "}
//               <span className="font-bold text-white">
//                 {LOCAL.area}
//               </span>
//               .
//             </p>

//             {/* =================================================
//                 TRUST ITEMS
//             ================================================= */}

//             <div className="mt-7 grid max-w-[600px] grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">

//               {trustItems.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="
//                       relative
//                       flex
//                       flex-col
//                       items-center
//                       text-center
//                       sm:border-r
//                       sm:border-white/20
//                       sm:last:border-r-0
//                     "
//                   >
//                     <Icon
//                       size={28}
//                       strokeWidth={1.5}
//                       className="mb-2 text-white"
//                     />

//                     <p className="text-[9px] font-black uppercase tracking-wide text-white">
//                       {item.title}
//                     </p>

//                     <p className="mt-0.5 text-[8px] font-medium uppercase tracking-wide text-white/55">
//                       {item.subtitle}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* =================================================
//                 CTA
//             ================================================= */}

//             <div className="mt-7 flex flex-wrap gap-3">

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="
//                   group
//                   flex
//                   items-center
//                   gap-2.5
//                   rounded-lg
//                   bg-white
//                   px-4
//                   py-3
//                   text-[#6055A6]
//                   shadow-[0_12px_30px_rgba(0,0,0,0.15)]
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                 "
//               >
//                 <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#6055A6] text-white">
//                   <PhoneCall size={15} />
//                 </div>

//                 <div>
//                   <p className="text-[7px] font-bold uppercase tracking-[0.2em] opacity-60">
//                     Call us now
//                   </p>

//                   <p className="mt-0.5 text-xs font-black sm:text-sm">
//                     {LOCAL.phoneDisplay}
//                   </p>
//                 </div>

//                 <ArrowUpRight
//                   size={16}
//                   className="ml-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </a>

//               <Link
//                 to="/services"
//                 className="
//                   group
//                   flex
//                   items-center
//                   gap-3
//                   rounded-lg
//                   border
//                   border-white/30
//                   bg-white/10
//                   px-5
//                   py-3
//                   backdrop-blur-sm
//                   transition-all
//                   duration-300
//                   hover:border-white
//                   hover:bg-white/15
//                 "
//               >
//                 <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
//                   Explore Services
//                 </span>

//                 <ArrowRight
//                   size={15}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* =====================================================
//               RIGHT SIDE
//           ===================================================== */}

//           <div
//             className="
//               relative
//               min-h-[530px]
//               sm:min-h-[560px]
//               lg:min-h-[560px]
//             "
//           >

//             {/* Outer orbit */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[-100px]
//                 top-[10px]
//                 h-[520px]
//                 w-[520px]
//                 rounded-full
//                 border
//                 border-white/15
//                 sm:right-[-70px]
//                 sm:h-[570px]
//                 sm:w-[570px]
//                 lg:right-[-90px]
//                 lg:h-[590px]
//                 lg:w-[590px]
//               "
//             />

//             {/* Second orbit */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[-55px]
//                 top-[55px]
//                 h-[430px]
//                 w-[430px]
//                 rounded-full
//                 border
//                 border-white/15
//                 sm:h-[480px]
//                 sm:w-[480px]
//                 lg:h-[500px]
//                 lg:w-[500px]
//               "
//             />

//             {/* Purple/dark light */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[120px]
//                 top-[130px]
//                 h-[260px]
//                 w-[260px]
//                 rounded-full
//                 bg-[#241E46]/30
//                 blur-[80px]
//               "
//             />

//             {/* =================================================
//                 WHITE CALLBACK CIRCLE
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 right-[-95px]
//                 top-[50px]
//                 h-[500px]
//                 w-[500px]
//                 rounded-full
//                 border-[10px]
//                 border-white/40
//                 bg-[#F5F4F8]
//                 shadow-[0_0_70px_rgba(0,0,0,0.20)]
//                 sm:right-[-70px]
//                 sm:h-[550px]
//                 sm:w-[550px]
//                 lg:right-[-80px]
//                 lg:top-[30px]
//                 lg:h-[560px]
//                 lg:w-[560px]
//                 xl:h-[580px]
//                 xl:w-[580px]
//               "
//             >

//               {/* Inner ring */}
//               <div
//                 className="
//                   absolute
//                   inset-[10px]
//                   rounded-full
//                   border-2
//                   border-[#6055A6]/15
//                 "
//               />

//               {/* =================================================
//                   FORM CONTENT
//               ================================================= */}

//               <div
//                 className="
//                   absolute
//                   left-[82px]
//                   top-[65px]
//                   w-[335px]
//                   sm:left-[95px]
//                   sm:top-[75px]
//                   sm:w-[360px]
//                   lg:left-[100px]
//                   lg:top-[72px]
//                   lg:w-[365px]
//                   xl:left-[105px]
//                   xl:w-[370px]
//                 "
//               >

//                 {/* Heading */}
//                 <div className="text-center">

//                   <p className="text-[8px] font-black uppercase tracking-[0.35em] text-[#272536]">
//                     Request A
//                   </p>

//                   <h2
//                     className="
//                       mt-1
//                       text-[42px]
//                       font-black
//                       uppercase
//                       leading-[0.9]
//                       tracking-[-0.05em]
//                       text-[#1A1921]
//                       sm:text-[46px]
//                     "
//                   >
//                     Callback
//                   </h2>

//                   <div className="mx-auto mt-4 h-[3px] w-12 bg-[#6055A6]" />

//                   <p className="mt-4 text-xs text-[#62606D]">
//                     Choose your preferred time and we'll call you back.
//                   </p>
//                 </div>

//                 {/* Form */}
//                 <form
//                   onSubmit={handleSubmit}
//                   className="mt-6 space-y-3"
//                 >

//                   {/* Name */}
//                   <div
//                     className="
//                       flex
//                       h-[54px]
//                       overflow-hidden
//                       rounded-lg
//                       border
//                       border-[#D5D3DC]
//                       bg-white
//                       transition-all
//                       focus-within:border-[#6055A6]
//                       focus-within:shadow-[0_0_0_3px_rgba(96,85,166,0.10)]
//                     "
//                   >
//                     <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#E1DFE7]">
//                       <User
//                         size={18}
//                         className="text-[#6055A6]"
//                       />
//                     </div>

//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Full Name"
//                       required
//                       className="
//                         min-w-0
//                         flex-1
//                         bg-transparent
//                         px-4
//                         text-xs
//                         font-medium
//                         text-[#25232D]
//                         outline-none
//                         placeholder:text-[#9996A4]
//                       "
//                     />
//                   </div>

//                   {/* Postcode */}
//                   <div
//                     className="
//                       flex
//                       h-[54px]
//                       overflow-hidden
//                       rounded-lg
//                       border
//                       border-[#D5D3DC]
//                       bg-white
//                       transition-all
//                       focus-within:border-[#6055A6]
//                       focus-within:shadow-[0_0_0_3px_rgba(96,85,166,0.10)]
//                     "
//                   >
//                     <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#E1DFE7]">
//                       <Navigation
//                         size={18}
//                         className="text-[#6055A6]"
//                       />
//                     </div>

//                     <input
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="Postcode (e.g. NW1 6UB)"
//                       required
//                       className="
//                         min-w-0
//                         flex-1
//                         bg-transparent
//                         px-4
//                         text-xs
//                         font-medium
//                         uppercase
//                         text-[#25232D]
//                         outline-none
//                         placeholder:normal-case
//                         placeholder:text-[#9996A4]
//                       "
//                     />
//                   </div>

//                   {/* Phone */}
//                   <div
//                     className={`
//                       flex
//                       min-h-[54px]
//                       overflow-hidden
//                       rounded-lg
//                       border
//                       bg-white
//                       transition-all
//                       ${
//                         phoneError
//                           ? "border-red-400"
//                           : "border-[#D5D3DC] focus-within:border-[#6055A6] focus-within:shadow-[0_0_0_3px_rgba(96,85,166,0.10)]"
//                       }
//                     `}
//                   >
//                     <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#E1DFE7]">
//                       <PhoneCall
//                         size={18}
//                         className={
//                           phoneError
//                             ? "text-red-500"
//                             : "text-[#6055A6]"
//                         }
//                       />
//                     </div>

//                     <div className="flex min-w-0 flex-1 flex-col justify-center">
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Phone Number"
//                         required
//                         aria-invalid={Boolean(phoneError)}
//                         className="
//                           w-full
//                           bg-transparent
//                           px-4
//                           text-xs
//                           font-medium
//                           text-[#25232D]
//                           outline-none
//                           placeholder:text-[#9996A4]
//                         "
//                       />

//                       {phoneError && (
//                         <p className="px-4 pb-1 text-[8px] font-bold text-red-500">
//                           {phoneError}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Submit */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="
//                       group
//                       flex
//                       h-[54px]
//                       w-full
//                       items-center
//                       justify-between
//                       overflow-hidden
//                       rounded-lg
//                       bg-[#6055A6]
//                       text-white
//                       shadow-[0_12px_30px_rgba(96,85,166,0.25)]
//                       transition-all
//                       duration-300
//                       hover:bg-[#7065B7]
//                       hover:shadow-[0_16px_35px_rgba(96,85,166,0.35)]
//                       disabled:cursor-not-allowed
//                       disabled:opacity-60
//                     "
//                   >
//                     <span className="flex-1 text-center text-[10px] font-black uppercase tracking-[0.15em]">
//                       {loading
//                         ? "Sending Request..."
//                         : "Request Callback"}
//                     </span>

//                     <span
//                       className="
//                         flex
//                         h-full
//                         w-16
//                         items-center
//                         justify-center
//                         bg-black/20
//                       "
//                     >
//                       {loading ? (
//                         <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
//                       ) : (
//                         <ArrowRight
//                           size={19}
//                           className="transition-transform group-hover:translate-x-1"
//                         />
//                       )}
//                     </span>
//                   </button>
//                 </form>

//                 {/* Security */}
//                 <div className="mt-5 flex items-center justify-between">

//                   <div className="flex items-center gap-2.5">
//                     <ShieldCheck
//                       size={23}
//                       className="text-[#6055A6]"
//                     />

//                     <p className="text-[9px] leading-3.5 text-[#5F5D68]">
//                       Your information is secure
//                       <br />
//                       and never shared.
//                     </p>
//                   </div>

//                   <Lock
//                     size={19}
//                     className="text-[#77738A]"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* =================================================
//                 FLOATING BADGE
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 left-[-5px]
//                 top-[205px]
//                 z-30
//                 hidden
//                 h-[145px]
//                 w-[145px]
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/20
//                 bg-[#17151F]
//                 shadow-[0_20px_50px_rgba(0,0,0,0.30)]
//                 lg:flex
//               "
//             >
//               <div
//                 className="
//                   absolute
//                   inset-2
//                   rounded-full
//                   border
//                   border-[#6055A6]/70
//                 "
//               />

//               <div className="relative z-10 flex flex-col items-center text-center">

//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6055A6]/25">
//                   <Bug
//                     size={23}
//                     strokeWidth={1.5}
//                     className="text-[#8D82D5]"
//                   />
//                 </div>

//                 <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.25em] text-white">
//                   Local Experts
//                 </p>

//                 <div className="my-1.5 h-px w-6 bg-[#6055A6]" />

//                 <p className="text-[7px] font-medium uppercase tracking-[0.18em] text-white/50">
//                   Protecting Spaces
//                 </p>
//               </div>
//             </div>

//             {/* Orbit dots */}
//             <div className="absolute left-[10%] top-[80px] hidden lg:block">
//               <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
//             </div>

//             <div className="absolute left-[17%] top-[190px] hidden lg:block">
//               <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
//             </div>

//             <div className="absolute left-[44%] top-[50px] hidden lg:block">
//               <div className="h-2 w-2 rounded-full bg-white/70" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================================
//           BOTTOM INFORMATION RAIL
//       ========================================================= */}

//       <div className="relative z-40 border-t border-white/15 bg-[#4F468D]">

//         <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12">

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

//             {/* Address */}
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-3
//                 border-b
//                 border-white/10
//                 py-4
//                 lg:border-b-0
//                 lg:border-r
//                 lg:px-5
//                 lg:first:pl-0
//               "
//             >
//               <div
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-white/20
//                   bg-white/10
//                 "
//               >
//                 <MapPin
//                   size={18}
//                   className="text-white"
//                 />
//               </div>

//               <div>
//                 <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">
//                   Our Office
//                 </p>

//                 <p className="mt-0.5 text-xs font-medium text-white">
//                   {LOCAL.streetAddress},
//                 </p>

//                 <p className="text-[11px] text-white/50">
//                   {LOCAL.city} {LOCAL.postcode}
//                 </p>
//               </div>
//             </div>

//             {/* Phone */}
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-3
//                 border-b
//                 border-white/10
//                 py-4
//                 lg:border-b-0
//                 lg:border-r
//                 lg:px-5
//               "
//             >
//               <div
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-white/20
//                   bg-white/10
//                 "
//               >
//                 <PhoneCall
//                   size={18}
//                   className="text-white"
//                 />
//               </div>

//               <div>
//                 <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">
//                   Call Us Anytime
//                 </p>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="mt-0.5 block text-xs font-black text-white"
//                 >
//                   {LOCAL.phoneDisplay}
//                 </a>

//                 <p className="text-[10px] text-white/45">
//                   Mon – Sun: 8AM – 8PM
//                 </p>
//               </div>
//             </div>

//             {/* Hours */}
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-3
//                 border-b
//                 border-white/10
//                 py-4
//                 lg:border-b-0
//                 lg:border-r
//                 lg:px-5
//               "
//             >
//               <div
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-white/20
//                   bg-white/10
//                 "
//               >
//                 <Clock
//                   size={18}
//                   className="text-white"
//                 />
//               </div>

//               <div>
//                 <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">
//                   Working Hours
//                 </p>

//                 <p className="mt-0.5 text-xs font-medium text-white">
//                   Mon – Sun
//                 </p>

//                 <p className="text-[10px] text-white/45">
//                   8:00 AM – 8:00 PM
//                 </p>
//               </div>
//             </div>

//             {/* Website */}
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-3
//                 py-4
//                 lg:px-5
//                 lg:pr-0
//               "
//             >
//               {/* <div
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-white/20
//                   bg-white/10
//                 "
//               >
//                 <ArrowUpRight
//                   size={18}
//                   className="text-white"
//                 />
//               </div> */}
// {/* 
//               <div>
//                 <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">
//                   Visit Our Website
//                 </p>

//                 <p className="mt-0.5 text-xs font-black text-white">
//                   {LOCAL.domain}
//                 </p>

//                 <p className="text-[10px] text-white/45">
//                   Learn more about our services
//                 </p>
//               </div> */}
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// import {
//   ShieldCheck,
//   PhoneCall,
//   MapPin,
//   Clock3,
//   ArrowRight,
//   ArrowUpRight,
//   User,
//   Navigation,
//   Lock,
//   Bug,
//   CheckCircle2,
// } from "lucide-react";

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     company: "Superguard Services West Wickham",
//     shortName: "Superguard West Wickham",
//     area: "West Wickham",
//     city: "London",
//     postcode: "BR4 0QL",
//     streetAddress: "16 Ash Grove",
//     fullAddress: "16 Ash Grove, West Wickham BR4 0QL",
//     phoneDisplay: "07356 270867",
//     phoneTel: "+447356270867",
//     domain: "superguardwestwickham.uk",
//   };

//   /*
//    * API CALLING KEPT THE SAME
//    */
//   const API_URL = "http://localhost:5000/api/callback";

//   const PURPLE = "#6055A6";
//   const DARK_PURPLE = "#40386F";

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(API_URL, {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.fullAddress,
//       }),
//       {
//         loading: "Sending request...",
//         success: () => {
//           setLoading(false);

//           setFormData({
//             name: "",
//             postcode: "",
//             phone: "",
//           });

//           return "Your callback request has been sent.";
//         },
//         error: (error) => {
//           setLoading(false);

//           return (
//             error.response?.data?.message ||
//             "Something went wrong. Please try again."
//           );
//         },
//       }
//     );
//   };

//   const servicePoints = [
//     "Domestic & commercial pest control",
//     "Local West Wickham response",
//     "Discreet professional treatments",
//   ];

//   return (
//     <section
//       itemScope
//       itemType="https://schema.org/PestControl"
//       className="relative mt-[72px] w-full overflow-hidden bg-[#6055A6] text-white lg:mt-[118px]"
//     >
//       <Toaster position="top-center" />

//       {/* =========================================================
//           SEO DATA
//       ========================================================= */}

//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, ${LOCAL.city}`}
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

//       {/* =========================================================
//           BACKGROUND DESIGN
//       ========================================================= */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">

//         {/* Large soft glow */}
//         <div className="absolute -left-[220px] top-[120px] h-[500px] w-[500px] rounded-full bg-[#40386F]/50 blur-[120px]" />

//         <div className="absolute -right-[220px] bottom-[-180px] h-[600px] w-[600px] rounded-full bg-[#40386F]/60 blur-[140px]" />

//         {/* Vertical architectural line */}
//         <div className="absolute left-[7%] top-0 hidden h-full w-px bg-white/[0.07] lg:block" />

//         <div className="absolute right-[7%] top-0 hidden h-full w-px bg-white/[0.07] lg:block" />

//         {/* Horizontal line */}
//         <div className="absolute left-0 right-0 top-[58%] h-px bg-white/[0.07]" />

//         {/* Large geometric square */}
//         <div className="absolute -right-[180px] -top-[180px] h-[520px] w-[520px] rotate-12 border border-white/[0.07]" />

//         <div className="absolute -right-[120px] -top-[120px] h-[380px] w-[380px] rotate-12 border border-white/[0.06]" />

//         {/* Small grid */}
//         <div className="absolute left-[5%] top-[24%] hidden grid-cols-5 gap-2 opacity-30 lg:grid">
//           {Array.from({ length: 25 }).map((_, index) => (
//             <span
//               key={index}
//               className="h-1 w-1 rounded-full bg-white"
//             />
//           ))}
//         </div>
//       </div>

//       {/* =========================================================
//           MAIN CONTAINER
//       ========================================================= */}

//       <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

//         {/* =======================================================
//             TOP LOCAL BAR
//         ======================================================= */}

//         <div className="flex flex-col justify-between gap-4 border-b border-white/15 py-5 sm:flex-row sm:items-center">

//           <div className="flex items-center gap-3">

//             <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10">
//               <MapPin size={15} />
//             </span>

//             <div>
//               <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/50">
//                 Local Pest Control
//               </p>

//               <p className="mt-0.5 text-[11px] font-black uppercase tracking-[0.14em]">
//                 West Wickham · London
//               </p>
//             </div>
//           </div>

//           <a
//             href={`tel:${LOCAL.phoneTel}`}
//             className="group flex w-fit items-center gap-3"
//           >
//             <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
//               Need help?
//             </span>

//             <span className="flex items-center gap-2 text-xs font-black">
//               <PhoneCall size={14} />
//               {LOCAL.phoneDisplay}
//             </span>

//             <ArrowUpRight
//               size={14}
//               className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//             />
//           </a>
//         </div>

//         {/* =======================================================
//             HERO GRID
//         ======================================================= */}

//         <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

//           {/* =====================================================
//               LEFT CONTENT
//           ===================================================== */}

//           <div className="border-b border-white/15 py-12 sm:py-16 lg:border-b-0 lg:border-r lg:py-24 lg:pr-16 xl:py-28 xl:pr-24">

//             {/* Eyebrow */}
//             <div className="flex items-center gap-3">

//               <span className="h-2 w-2 rounded-full bg-white" />

//               <span className="text-[9px] font-black uppercase tracking-[0.28em] text-white/65 sm:text-[10px]">
//                 Professional Pest Control Specialists
//               </span>

//             </div>

//             {/* Heading */}
//             <h1
//               className="
//                 mt-7
//                 max-w-[850px]
//                 text-[52px]
//                 font-black
//                 leading-[0.91]
//                 tracking-[-0.055em]
//                 sm:text-[68px]
//                 md:text-[76px]
//                 lg:text-[74px]
//                 xl:text-[92px]
//               "
//             >
//               West Wickham's
//               <span className="block text-white/45">
//                 pest problems
//               </span>
//               stop here.
//             </h1>

//             {/* Description */}
//             <p className="mt-7 max-w-[610px] text-sm leading-7 text-white/70 sm:text-base">
//               Reliable pest control for homes, landlords and
//               businesses across West Wickham. We provide discreet,
//               professional treatments designed to deal with the
//               problem at its source.
//             </p>

//             {/* =================================================
//                 CTA ROW
//             ================================================= */}

//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-3
//                   bg-white
//                   px-6
//                   py-4
//                   text-[#6055A6]
//                   shadow-xl
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:bg-[#F3F1F8]
//                 "
//               >
//                 <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                   <PhoneCall size={14} />
//                 </span>

//                 <span className="text-[10px] font-black uppercase tracking-[0.14em]">
//                   Call {LOCAL.phoneDisplay}
//                 </span>

//                 <ArrowUpRight
//                   size={15}
//                   className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </a>

//               <Link
//                 to="/services"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-3
//                   border
//                   border-white/25
//                   bg-white/[0.06]
//                   px-6
//                   py-4
//                   text-white
//                   backdrop-blur-sm
//                   transition-all
//                   duration-300
//                   hover:bg-white/10
//                 "
//               >
//                 <span className="text-[10px] font-black uppercase tracking-[0.14em]">
//                   View Our Services
//                 </span>

//                 <ArrowRight
//                   size={15}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>

//             {/* =================================================
//                 SERVICE POINTS
//             ================================================= */}

//             <div className="mt-12 grid max-w-[720px] gap-4 border-t border-white/15 pt-7 sm:grid-cols-3">

//               {servicePoints.map((point) => (
//                 <div
//                   key={point}
//                   className="flex items-start gap-2.5"
//                 >
//                   <CheckCircle2
//                     size={15}
//                     className="mt-0.5 shrink-0 text-white"
//                     strokeWidth={2}
//                   />

//                   <span className="text-[10px] font-semibold leading-4 text-white/65">
//                     {point}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* =====================================================
//               RIGHT CALLBACK PANEL
//           ===================================================== */}

//           <div className="relative flex items-center py-12 lg:py-20 lg:pl-12 xl:pl-16">

//             {/* Number decoration */}
//             <div className="absolute right-0 top-8 hidden select-none text-[120px] font-black leading-none text-white/[0.035] xl:block">
//               01
//             </div>

//             <div className="relative w-full">

//               {/* Form heading */}
//               <div className="mb-6">

//                 <div className="flex items-center gap-2">
//                   <span className="h-px w-8 bg-white/50" />

//                   <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/55">
//                     Request Assistance
//                   </span>
//                 </div>

//                 <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
//                   Tell us what you
//                   <span className="block text-white/45">
//                     need help with.
//                   </span>
//                 </h2>

//                 <p className="mt-3 max-w-md text-xs leading-5 text-white/55">
//                   Leave your details and our local team can
//                   arrange a callback about your pest control
//                   requirements.
//                 </p>
//               </div>

//               {/* =================================================
//                   CALLBACK FORM
//               ================================================= */}

//               <div className="bg-white p-5 shadow-2xl shadow-black/20 sm:p-7">

//                 <div className="mb-6 flex items-center justify-between border-b border-[#E8E6EC] pb-5">

//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                       Free Callback
//                     </p>

//                     <p className="mt-1 text-xs font-semibold text-[#77737F]">
//                       We'll contact you shortly.
//                     </p>
//                   </div>

//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6055A6]/10">
//                     <PhoneCall
//                       size={17}
//                       className="text-[#6055A6]"
//                     />
//                   </div>
//                 </div>

//                 <form
//                   onSubmit={handleSubmit}
//                   className="space-y-3"
//                 >

//                   {/* NAME */}
//                   <div className="group border border-[#DDD9E5] bg-[#FAF9FC] transition-all duration-300 focus-within:border-[#6055A6] focus-within:bg-white">

//                     <div className="flex items-center">

//                       <div className="flex h-[58px] w-12 shrink-0 items-center justify-center border-r border-[#E6E3EB]">
//                         <User
//                           size={17}
//                           className="text-[#6055A6]"
//                         />
//                       </div>

//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Full Name"
//                         required
//                         className="
//                           h-[58px]
//                           min-w-0
//                           flex-1
//                           bg-transparent
//                           px-4
//                           text-xs
//                           font-semibold
//                           text-[#292631]
//                           outline-none
//                           placeholder:text-[#9B98A4]
//                         "
//                       />
//                     </div>
//                   </div>

//                   {/* POSTCODE */}
//                   <div className="group border border-[#DDD9E5] bg-[#FAF9FC] transition-all duration-300 focus-within:border-[#6055A6] focus-within:bg-white">

//                     <div className="flex items-center">

//                       <div className="flex h-[58px] w-12 shrink-0 items-center justify-center border-r border-[#E6E3EB]">
//                         <Navigation
//                           size={17}
//                           className="text-[#6055A6]"
//                         />
//                       </div>

//                       <input
//                         type="text"
//                         name="postcode"
//                         value={formData.postcode}
//                         onChange={handleChange}
//                         placeholder="Your Postcode"
//                         required
//                         className="
//                           h-[58px]
//                           min-w-0
//                           flex-1
//                           bg-transparent
//                           px-4
//                           text-xs
//                           font-semibold
//                           uppercase
//                           text-[#292631]
//                           outline-none
//                           placeholder:normal-case
//                           placeholder:text-[#9B98A4]
//                         "
//                       />
//                     </div>
//                   </div>

//                   {/* PHONE */}
//                   <div
//                     className={`border bg-[#FAF9FC] transition-all duration-300 focus-within:bg-white ${
//                       phoneError
//                         ? "border-red-400"
//                         : "border-[#DDD9E5] focus-within:border-[#6055A6]"
//                     }`}
//                   >
//                     <div className="flex items-center">

//                       <div className="flex h-[58px] w-12 shrink-0 items-center justify-center border-r border-[#E6E3EB]">
//                         <PhoneCall
//                           size={17}
//                           className={
//                             phoneError
//                               ? "text-red-500"
//                               : "text-[#6055A6]"
//                           }
//                         />
//                       </div>

//                       <div className="min-w-0 flex-1">

//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="Phone Number"
//                           required
//                           aria-invalid={Boolean(phoneError)}
//                           className="
//                             h-[58px]
//                             w-full
//                             bg-transparent
//                             px-4
//                             text-xs
//                             font-semibold
//                             text-[#292631]
//                             outline-none
//                             placeholder:text-[#9B98A4]
//                           "
//                         />

//                         {phoneError && (
//                           <p className="px-4 pb-2 text-[8px] font-bold text-red-500">
//                             {phoneError}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* SUBMIT */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="
//                       group
//                       flex
//                       h-[60px]
//                       w-full
//                       items-center
//                       justify-between
//                       bg-[#6055A6]
//                       text-white
//                       transition-all
//                       duration-300
//                       hover:bg-[#4F468D]
//                       disabled:cursor-not-allowed
//                       disabled:opacity-60
//                     "
//                   >
//                     <span className="pl-5 text-[10px] font-black uppercase tracking-[0.16em]">
//                       {loading
//                         ? "Sending Request..."
//                         : "Request A Callback"}
//                     </span>

//                     <span className="flex h-full w-[62px] items-center justify-center bg-[#40386F]">
//                       {loading ? (
//                         <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
//                       ) : (
//                         <ArrowRight
//                           size={18}
//                           className="transition-transform duration-300 group-hover:translate-x-1"
//                         />
//                       )}
//                     </span>
//                   </button>
//                 </form>

//                 {/* Security */}
//                 <div className="mt-5 flex items-center justify-between">

//                   <div className="flex items-center gap-2.5">
//                     <ShieldCheck
//                       size={19}
//                       className="text-[#6055A6]"
//                     />

//                     <p className="text-[8px] font-semibold leading-3.5 text-[#77737F]">
//                       Your details are kept secure
//                       <br />
//                       and never shared.
//                     </p>
//                   </div>

//                   <Lock
//                     size={16}
//                     className="text-[#A19EAA]"
//                   />
//                 </div>
//               </div>

//               {/* =================================================
//                   LOCAL ADDRESS
//               ================================================= */}

//               <div className="mt-4 grid grid-cols-2 border border-white/15 bg-white/[0.05]">

//                 <div className="flex items-center gap-3 border-r border-white/10 p-4">
//                   <MapPin
//                     size={16}
//                     className="shrink-0 text-white"
//                   />

//                   <div>
//                     <p className="text-[7px] font-black uppercase tracking-[0.18em] text-white/40">
//                       Local Office
//                     </p>

//                     <p className="mt-1 text-[10px] font-bold text-white/80">
//                       {LOCAL.streetAddress}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 p-4">
//                   <Clock3
//                     size={16}
//                     className="shrink-0 text-white"
//                   />

//                   <div>
//                     <p className="text-[7px] font-black uppercase tracking-[0.18em] text-white/40">
//                       Service Area
//                     </p>

//                     <p className="mt-1 text-[10px] font-bold text-white/80">
//                       {LOCAL.area}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* =========================================================
//             BOTTOM TRUST BAR
//         ========================================================= */}

//         <div className="grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">

//           <div className="flex items-center gap-3 border-b border-white/10 py-5 sm:border-r lg:border-b-0 lg:px-6 lg:first:pl-0">
//             <ShieldCheck
//               size={21}
//               className="shrink-0"
//             />

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.15em]">
//                 Professional Service
//               </p>

//               <p className="mt-0.5 text-[8px] text-white/45">
//                 Reliable local pest control
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 border-b border-white/10 py-5 sm:border-r lg:border-b-0 lg:px-6">
//             <Bug
//               size={21}
//               className="shrink-0"
//             />

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.15em]">
//                 Pest Specialists
//               </p>

//               <p className="mt-0.5 text-[8px] text-white/45">
//                 Domestic & commercial
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 border-b border-white/10 py-5 lg:border-b-0 lg:border-r lg:px-6">
//             <MapPin
//               size={21}
//               className="shrink-0"
//             />

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.15em]">
//                 Local Response
//               </p>

//               <p className="mt-0.5 text-[8px] text-white/45">
//                 Serving West Wickham
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 py-5 lg:px-6 lg:pr-0">
//             <PhoneCall
//               size={21}
//               className="shrink-0"
//             />

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.15em]">
//                 Call Today
//               </p>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-0.5 block text-[10px] font-black"
//               >
//                 {LOCAL.phoneDisplay}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }













import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import {
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  Clock3,
  Lock,
  MapPin,
  Navigation,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const LOCAL = {
    company: "Superguard Services West Wickham",
    shortName: "Superguard West Wickham",
    area: "West Wickham",
    city: "London",
    postcode: "BR4 0QL",
    streetAddress: "16 Ash Grove",
    fullAddress: "16 Ash Grove, West Wickham BR4 0QL",
    phoneDisplay: "07356 270867",
    phoneTel: "+447356270867",
    domain: "superguardwestwickham.uk",
  };

  /* =========================================================
     API CALLING — KEPT THE SAME
  ========================================================= */

  const API_URL =
    "https://superguard-wickham-backend.vercel.app/api/callback";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (name === "phone") {
      setPhoneError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Please enter your phone number.");
      return;
    }

    setLoading(true);

    toast.promise(
      axios.post(API_URL, {
        ...formData,
        area: LOCAL.area,
        business: LOCAL.company,
        address: LOCAL.fullAddress,
      }),
      {
        loading: "Sending request...",
        success: () => {
          setLoading(false);

          setFormData({
            name: "",
            postcode: "",
            phone: "",
          });

          return "Your callback request has been sent.";
        },
        error: (error) => {
          setLoading(false);

          return (
            error.response?.data?.message ||
            "Something went wrong. Please try again."
          );
        },
      }
    );
  };

  const trustItems = [
    "Local specialists",
    "Domestic & commercial",
    "Discreet service",
    "Professional treatment",
  ];

  return (
    <section
      itemScope
      itemType="https://schema.org/PestControl"
      className="relative mt-[72px] w-full overflow-hidden bg-[#6055A6] text-white lg:mt-[118px]"
    >
      <Toaster position="top-center" />

      {/* =========================================================
          SEO
      ========================================================= */}

      <meta itemProp="name" content={LOCAL.company} />
      <meta itemProp="telephone" content={LOCAL.phoneDisplay} />

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
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Huge typography */}
        <div
          className="
            absolute
            -bottom-[45px]
            left-[-25px]
            select-none
            whitespace-nowrap
            text-[105px]
            font-black
            uppercase
            leading-none
            tracking-[-0.08em]
            text-white/[0.045]
            sm:text-[160px]
            md:text-[210px]
            lg:text-[260px]
            xl:text-[300px]
          "
        >
          WEST WICKHAM
        </div>

        {/* Thin vertical lines */}
        <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.08] lg:block" />

        <div className="absolute right-[8%] top-0 hidden h-full w-px bg-white/[0.08] lg:block" />

        {/* Fine horizontal line */}
        <div className="absolute left-0 right-0 top-[112px] h-px bg-white/[0.10]" />

        {/* Small cross */}
        <div className="absolute right-[12%] top-[18%] hidden lg:block">
          <div className="relative h-12 w-12">
            <div className="absolute left-1/2 top-0 h-full w-px bg-white/20" />
            <div className="absolute left-0 top-1/2 h-px w-full bg-white/20" />
          </div>
        </div>

        {/* Small dots */}
        <div className="absolute bottom-[28%] left-[5%] hidden grid-cols-4 gap-2 opacity-30 lg:grid">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="h-[3px] w-[3px] rounded-full bg-white"
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          MAIN
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* =======================================================
            TOP HEADER
        ======================================================= */}

        <header className="flex items-center justify-between border-b border-white/[0.14] py-5">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#6055A6]">
              <Bug size={17} strokeWidth={2.2} />
            </div>

            <div>
              <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/50">
                Superguard Services
              </p>

              <p className="mt-0.5 text-[10px] font-black uppercase tracking-[0.16em]">
                West Wickham
              </p>
            </div>
          </div>

          <a
            href={`tel:${LOCAL.phoneTel}`}
            className="group flex items-center gap-3"
          >
            <span className="hidden text-[8px] font-bold uppercase tracking-[0.22em] text-white/45 sm:block">
              Speak to a specialist
            </span>

            <span className="flex h-9 items-center gap-2 border border-white/20 bg-white/[0.08] px-3 text-[10px] font-black">
              <PhoneCall size={13} />
              {LOCAL.phoneDisplay}
            </span>

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </header>

        {/* =======================================================
            HERO
        ======================================================= */}

        <div className="relative grid lg:min-h-[720px] lg:grid-cols-[1fr_0.78fr]">

          {/* =====================================================
              LEFT
          ===================================================== */}

          <div className="relative flex flex-col justify-center py-14 sm:py-20 lg:py-24 lg:pr-20 xl:py-28 xl:pr-28">

            {/* Vertical label */}
            <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 -translate-x-full -rotate-90 origin-right lg:block">
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/35">
                Professional Pest Management
              </span>
            </div>

            {/* Eyebrow */}

            <div className="flex items-center gap-3">

              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30">
                <Sparkles size={11} />
              </span>

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/65">
                Your local pest specialists
              </span>

            </div>

            {/* Heading */}

            <h1
              className="
                mt-7
                max-w-[850px]
                text-[56px]
                font-black
                uppercase
                leading-[0.84]
                tracking-[-0.065em]
                sm:text-[72px]
                md:text-[86px]
                lg:text-[82px]
                xl:text-[105px]
              "
            >
              Pest
              <span className="block">
                problems
              </span>

              <span className="block text-white/35">
                end here.
              </span>
            </h1>

            {/* Accent */}

            <div className="mt-8 flex items-center gap-2">

              <div className="h-[4px] w-16 bg-white" />

              <div className="h-[4px] w-6 bg-white/45" />

              <div className="h-[4px] w-2 bg-white/25" />

            </div>

            {/* Description */}

            <p className="mt-7 max-w-[570px] text-sm leading-7 text-white/65 sm:text-base">
              Professional pest control for homes, landlords and
              businesses across{" "}
              <span className="font-bold text-white">
                West Wickham
              </span>
              . Fast local response, discreet treatment and practical
              solutions focused on eliminating the problem at its source.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  bg-white
                  px-5
                  py-4
                  text-[#6055A6]
                  shadow-[0_18px_45px_rgba(0,0,0,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6055A6] text-white">
                  <PhoneCall size={14} />
                </span>

                <span>
                  <span className="block text-[7px] font-bold uppercase tracking-[0.2em] opacity-50">
                    Call today
                  </span>

                  <span className="block text-xs font-black">
                    {LOCAL.phoneDisplay}
                  </span>
                </span>

                <ArrowUpRight
                  size={15}
                  className="ml-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </a>

              <Link
                to="/services"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  border
                  border-white/25
                  px-5
                  py-4
                  transition-all
                  duration-300
                  hover:bg-white/[0.08]
                "
              >

                <span className="text-[9px] font-black uppercase tracking-[0.18em]">
                  Explore services
                </span>

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>

            {/* Trust points */}

            <div className="mt-12 grid max-w-[720px] grid-cols-2 border-t border-white/[0.14] sm:grid-cols-4">

              {trustItems.map((item, index) => (
                <div
                  key={item}
                  className={`
                    flex
                    items-center
                    gap-2
                    border-b
                    border-white/[0.10]
                    py-4
                    sm:border-b-0
                    sm:border-r
                    sm:px-4
                    sm:first:pl-0
                    sm:last:border-r-0
                  `}
                >

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.10]">
                    <Check size={12} />
                  </div>

                  <span className="text-[8px] font-bold uppercase leading-3 tracking-[0.08em] text-white/55">
                    {item}
                  </span>

                </div>
              ))}

            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <div className="relative flex items-center justify-center py-12 lg:py-20">

            {/* Giant number */}

            <div
              className="
                absolute
                right-0
                top-10
                select-none
                text-[180px]
                font-black
                leading-none
                tracking-[-0.08em]
                text-white/[0.035]
                sm:text-[220px]
                lg:text-[260px]
              "
            >
              24
            </div>

            {/* Decorative vertical marker */}

            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:flex lg:flex-col lg:items-center lg:gap-3">

              <span className="h-16 w-px bg-white/20" />

              <span className="text-[7px] font-black uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl]">
                Local Response
              </span>

              <span className="h-16 w-px bg-white/20" />

            </div>

            {/* CALLBACK CARD */}

            <div
              className="
                relative
                w-full
                max-w-[460px]
                bg-white
                p-1
                shadow-[0_35px_90px_rgba(40,30,80,0.28)]
                lg:ml-4
                xl:ml-10
              "
            >

              {/* Purple border */}

              <div className="border border-[#6055A6]/15 p-6 sm:p-8">

                {/* Card top */}

                <div className="flex items-start justify-between border-b border-[#E7E4ED] pb-6">

                  <div>

                    <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
                      Free callback
                    </p>

                    <h2 className="mt-2 text-[34px] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#24212D] sm:text-[40px]">
                      Let's talk
                      <span className="block text-[#6055A6]">
                        pests.
                      </span>
                    </h2>

                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
                    <PhoneCall size={19} />
                  </div>

                </div>

                <p className="mt-5 max-w-[340px] text-xs leading-5 text-[#777481]">
                  Tell us where you need help and a local West Wickham
                  specialist will get back to you.
                </p>

                {/* FORM */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-3"
                >

                  {/* NAME */}

                  <div className="flex h-[58px] border border-[#DDD9E5] bg-[#FAF9FC] transition-all focus-within:border-[#6055A6] focus-within:bg-white">

                    <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#E7E4EC]">
                      <User
                        size={17}
                        className="text-[#6055A6]"
                      />
                    </div>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="
                        min-w-0
                        flex-1
                        bg-transparent
                        px-4
                        text-xs
                        font-semibold
                        text-[#292631]
                        outline-none
                        placeholder:text-[#A09CA9]
                      "
                    />

                  </div>

                  {/* POSTCODE */}

                  <div className="flex h-[58px] border border-[#DDD9E5] bg-[#FAF9FC] transition-all focus-within:border-[#6055A6] focus-within:bg-white">

                    <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#E7E4EC]">
                      <Navigation
                        size={17}
                        className="text-[#6055A6]"
                      />
                    </div>

                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="Your Postcode"
                      required
                      className="
                        min-w-0
                        flex-1
                        bg-transparent
                        px-4
                        text-xs
                        font-semibold
                        uppercase
                        text-[#292631]
                        outline-none
                        placeholder:normal-case
                        placeholder:text-[#A09CA9]
                      "
                    />

                  </div>

                  {/* PHONE */}

                  <div
                    className={`
                      flex
                      min-h-[58px]
                      border
                      bg-[#FAF9FC]
                      transition-all
                      focus-within:bg-white
                      ${
                        phoneError
                          ? "border-red-400"
                          : "border-[#DDD9E5] focus-within:border-[#6055A6]"
                      }
                    `}
                  >

                    <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#E7E4EC]">
                      <PhoneCall
                        size={17}
                        className={
                          phoneError
                            ? "text-red-500"
                            : "text-[#6055A6]"
                        }
                      />
                    </div>

                    <div className="min-w-0 flex-1">

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        aria-invalid={Boolean(phoneError)}
                        className="
                          h-[58px]
                          w-full
                          bg-transparent
                          px-4
                          text-xs
                          font-semibold
                          text-[#292631]
                          outline-none
                          placeholder:text-[#A09CA9]
                        "
                      />

                      {phoneError && (
                        <p className="px-4 pb-2 text-[8px] font-bold text-red-500">
                          {phoneError}
                        </p>
                      )}

                    </div>

                  </div>

                  {/* BUTTON */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      group
                      flex
                      h-[60px]
                      w-full
                      items-center
                      justify-between
                      bg-[#6055A6]
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#514791]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >

                    <span className="pl-5 text-[10px] font-black uppercase tracking-[0.17em]">
                      {loading
                        ? "Sending Request..."
                        : "Request A Callback"}
                    </span>

                    <span className="flex h-full w-16 items-center justify-center bg-black/15">

                      {loading ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      ) : (
                        <ArrowRight
                          size={19}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      )}

                    </span>

                  </button>

                </form>

                {/* Security */}

                <div className="mt-5 flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <ShieldCheck
                      size={18}
                      className="text-[#6055A6]"
                    />

                    <p className="text-[8px] font-semibold leading-3.5 text-[#777481]">
                      Your details are secure
                      <br />
                      and never shared.
                    </p>

                  </div>

                  <Lock
                    size={15}
                    className="text-[#A5A1AE]"
                  />

                </div>

              </div>

              {/* Floating card label */}

              <div className="absolute -left-4 -top-4 hidden items-center gap-2 bg-[#24212D] px-3 py-2 shadow-xl sm:flex">

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6055A6] text-white">
                  <Bug size={10} />
                </span>

                <span className="text-[7px] font-black uppercase tracking-[0.18em] text-white">
                  Local Experts
                </span>

              </div>

            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM SERVICE STRIP
        ======================================================= */}

        <div className="border-t border-white/[0.14]">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">

            <div className="flex items-center gap-3 border-b border-white/[0.10] py-5 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.08]">
                <ShieldCheck size={17} />
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.18em]">
                  Professional
                </p>

                <p className="mt-1 text-[8px] text-white/40">
                  Reliable pest control
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3 border-b border-white/[0.10] py-5 lg:border-b-0 lg:border-r lg:px-6">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.08]">
                <MapPin size={17} />
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.18em]">
                  Local
                </p>

                <p className="mt-1 text-[8px] text-white/40">
                  West Wickham response
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3 border-b border-white/[0.10] py-5 lg:border-b-0 lg:border-r lg:px-6">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.08]">
                <Clock3 size={17} />
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.18em]">
                  Available
                </p>

                <p className="mt-1 text-[8px] text-white/40">
                  Mon – Sun · 8AM – 8PM
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3 py-5 lg:px-6 lg:pr-0">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#6055A6]">
                <PhoneCall size={16} />
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.18em]">
                  Call Today
                </p>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="mt-1 block text-[10px] font-black"
                >
                  {LOCAL.phoneDisplay}
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}