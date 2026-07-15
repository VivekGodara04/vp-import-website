export const SITE = {
  name: "V&P Import",
  legalName: "V&P Sattava Pvt. Ltd.",
  tagline: "Your Trusted Import Partner Between China & India",
  phoneDisplay: "+91 98120 05254",
  phoneWhatsapp: "919812005254",
  url: "https://www.vpimport.in",
  facebook: "https://www.facebook.com/share/1HKBdYpTgT/",
  instagram: "https://www.instagram.com/navsheoran_official",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${SITE.phoneWhatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Import Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    title: "Supplier Sourcing",
    description:
      "We identify and shortlist manufacturers in Shenzhen, Guangzhou, and beyond who match your product spec, order volume, and budget.",
  },
  {
    title: "Supplier Verification",
    description:
      "Factory audits, business licence checks, and production capability reviews so you deal only with legitimate, capable manufacturers.",
  },
  {
    title: "Quotation Support",
    description:
      "We negotiate on your behalf, compare multiple supplier quotes, and translate pricing terms so you can compare apples to apples.",
  },
  {
    title: "Sample Coordination",
    description:
      "We arrange, inspect, and courier product samples before you commit to a bulk order, catching issues early.",
  },
  {
    title: "Quality Inspection",
    description:
      "Pre-shipment and in-line inspections at the factory floor, with photo and video reports before goods ever leave China.",
  },
  {
    title: "Payment Assistance",
    description:
      "Guidance on secure payment terms and channels between Indian buyers and Chinese suppliers, reducing settlement risk.",
  },
  {
    title: "Production Monitoring",
    description:
      "Regular check-ins during manufacturing to track timelines and flag delays before they become missed deadlines.",
  },
  {
    title: "Warehousing Support",
    description:
      "Consolidation and short-term storage across our Shenzhen, Hong Kong, and Delhi hubs before final dispatch.",
  },
  {
    title: "Shipping Coordination",
    description:
      "Sea and air freight coordination with vetted forwarders, matched to your timeline and budget.",
  },
  {
    title: "Customs Documentation Guidance",
    description:
      "Support in preparing packing lists, invoices, and the paperwork Indian customs requires for smooth clearance.",
  },
  {
    title: "Door-to-Door Delivery Support",
    description:
      "Coordination from the factory gate in China to your warehouse door in India, with visibility at every stage.",
  },
  {
    title: "OEM & Private Label Support",
    description:
      "Custom branding, packaging, and private-label coordination with manufacturers who support OEM orders.",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Requirement Discussion",
    description:
      "Tell us what you need to import — product, quantity, target price, and timeline. We scope the sourcing brief with you.",
  },
  {
    title: "Supplier Search",
    description:
      "Our Shenzhen and Hong Kong teams identify and shortlist manufacturers who can genuinely meet your spec.",
  },
  {
    title: "Quotation",
    description:
      "We collect and compare quotes, negotiate pricing and MOQs, and present clear, comparable options.",
  },
  {
    title: "Sample",
    description:
      "Approved suppliers produce samples, which we inspect and ship to you for sign-off before bulk production.",
  },
  {
    title: "Production",
    description:
      "Once you approve, production begins. We monitor progress and keep you updated on timelines.",
  },
  {
    title: "Quality Inspection",
    description:
      "Before goods leave the factory, our team conducts a pre-shipment inspection against your agreed specifications.",
  },
  {
    title: "Shipping",
    description:
      "We coordinate sea or air freight with trusted forwarders, choosing the route that fits your budget and deadline.",
  },
  {
    title: "Customs",
    description:
      "We guide documentation and coordination for customs clearance on both the China and India side.",
  },
  {
    title: "Delivery",
    description:
      "Goods are delivered to your warehouse or facility in India, closing the loop from factory to your door.",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Verified Suppliers",
    description: "Every recommended factory passes a verification check before we bring it to you.",
  },
  {
    title: "Transparent Communication",
    description: "Regular updates at every stage — no black box between order and delivery.",
  },
  {
    title: "Competitive Pricing",
    description: "Our on-ground presence in China means we negotiate rates you couldn't reach alone.",
  },
  {
    title: "Quality Assurance",
    description: "Inspection checkpoints built into the process, not bolted on after a problem appears.",
  },
  {
    title: "Global Logistics Support",
    description: "Warehousing and freight coordination across Shenzhen, Hong Kong, and Delhi.",
  },
  {
    title: "Professional Team",
    description: "A team fluent in both markets — the language, the paperwork, and the expectations.",
  },
  {
    title: "Responsive Support",
    description: "Real answers on WhatsApp, not ticket queues. We reply when you need us to.",
  },
];

export const WAREHOUSING_HUBS = [
  {
    city: "Shenzhen",
    description:
      "Our primary sourcing and consolidation hub, close to China's largest electronics and manufacturing clusters.",
  },
  {
    city: "Hong Kong",
    description:
      "A trade and logistics gateway used for consolidation, documentation, and onward freight booking.",
  },
  {
    city: "Delhi",
    description:
      "Our India-side base for customs coordination, final-mile delivery, and direct client support.",
  },
];

export const INDUSTRIES = [
  "Electronics",
  "Industrial Equipment",
  "Electrical Products",
  "Lighting",
  "Machinery",
  "Furniture",
  "Packaging",
  "Construction Materials",
  "Agriculture Equipment",
  "Consumer Products",
];

export const FAQS = [
  {
    question: "Do I need to place a minimum order value to work with V&P Import?",
    answer:
      "Requirements vary by supplier and product category. Share your target quantity and we'll tell you honestly whether it's workable and what the minimum order quantities look like.",
  },
  {
    question: "Can I get a product sample before placing a bulk order?",
    answer:
      "Yes. We coordinate sample production and courier it to you so you can inspect quality before committing to a full order.",
  },
  {
    question: "How do you verify Chinese suppliers?",
    answer:
      "We check business licences, review production capability, and where needed, arrange factory visits or audits before recommending a supplier.",
  },
  {
    question: "Who handles customs clearance in India?",
    answer:
      "We guide you through the documentation required — packing lists, invoices, and supporting paperwork — so your customs broker can clear the shipment smoothly.",
  },
  {
    question: "What if I want my own branding on the product?",
    answer:
      "We work with suppliers who support OEM and private-label orders, coordinating custom branding and packaging on your behalf.",
  },
  {
    question: "How do I get started?",
    answer:
      "Message us on WhatsApp with your product requirement. We'll ask a few scoping questions and get supplier options moving within days.",
  },
  {
    question: "Is this an online store where I can buy directly?",
    answer:
      "No. V&P Import is a sourcing and logistics partner, not a marketplace. Every order is scoped and quoted individually through direct conversation.",
  },
];
