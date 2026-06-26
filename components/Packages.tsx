const packages = [
 {
   name: "Starter",
   price: "150 OMR",
   desc: "Perfect for small businesses starting with dashboards or a simple website.",
   features: ["Basic dashboard or landing page", "3–5 KPIs", "Clean design", "Fast delivery"],
 },
 {
   name: "Business",
   price: "350 OMR",
   desc: "For companies that need stronger reporting, analytics, or business tools.",
   features: ["Power BI dashboard", "Data cleaning", "Insights report", "1 revision cycle"],
 },
 {
   name: "Enterprise",
   price: "750+ OMR",
   desc: "Custom systems for businesses that need applications, AI, and automation.",
   features: ["Web application", "Database integration", "AI feature", "Custom dashboard"],
 },
];
export default function Packages() {
 return (
<section id="packages" className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-bold mb-4">Packages</h2>
<p className="text-gray-400 mb-12 max-w-2xl">
         Clear packages for businesses that want to start fast and scale later.
</p>
<div className="grid md:grid-cols-3 gap-6">
         {packages.map((pkg) => (
<div
             key={pkg.name}
             className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition"
>
<h3 className="text-2xl font-bold">{pkg.name}</h3>
<p className="text-3xl font-bold text-blue-400 my-5">
               {pkg.price}
</p>
<p className="text-gray-400 mb-6">{pkg.desc}</p>
<ul className="space-y-3 text-gray-300">
               {pkg.features.map((f) => (
<li key={f}>✓ {f}</li>
               ))}
</ul>
</div>
         ))}
</div>
</div>
</section>
 );
}