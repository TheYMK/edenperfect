import { BUSINESS_INFO } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Eden Perfect - Institut de Beauté",
    description:
      "Institut de beauté premium au cœur de Paris. Coiffure, soins visage, massage californien, extensions de cils, onglerie.",
    url: "https://www.edenperfect.fr",
    telephone: BUSINESS_INFO.phoneTel,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "14 Rue Favart",
      addressLocality: "Paris",
      postalCode: "75002",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8698,
      longitude: 2.3387,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "10:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "10:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:30", closes: "18:00" },
    ],
    priceRange: "€€",
    image: "https://www.edenperfect.fr/images/logo.png",
    logo: "https://www.edenperfect.fr/images/logo.png",
    sameAs: [
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.facebook,
    ],
  };
}
