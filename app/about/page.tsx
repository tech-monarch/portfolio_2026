import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

const BASE_URL = "https://omijeh.dev";

export const metadata: Metadata = {
  title: "About — Omijeh David Odianonsen | Full-Stack Founder · Tech Monarch",
  description:
    "Omijeh David Odianonsen (Odia / Tech Monarch) — canonical biography and entity source page. Full-Stack Founder at Pantheon Venture Studio. Nigerian software engineer, AI builder, and startup operator. Started coding at 9. 19 years old. 11+ products shipped.",
  keywords: [
    "Omijeh David Odianonsen biography",
    "Omijeh David about",
    "Tech Monarch biography",
    "Odia founder story",
    "Omijeh David Pantheon Venture Studio",
    "Nigerian AI founder biography",
    "Omijeh David age",
    "Omijeh David background",
    "who is Omijeh David",
    "who is Tech Monarch",
    "who is Odia founder",
    "Omijeh Bourdillon son",
    "Port Harcourt developer founder",
  ],
  authors: [{ name: "Omijeh David Odianonsen", url: BASE_URL }],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    type: "profile",
    title: "About — Omijeh David Odianonsen | Tech Monarch · Pantheon Venture Studio Founder",
    description:
      "Canonical biography of Omijeh David Odianonsen — Nigerian full-stack founder, AI builder, and startup operator. Started coding at 9. Founder of Pantheon Venture Studio. 11+ products shipped.",
    url: `${BASE_URL}/about`,
    siteName: "Omijeh David Odianonsen",
    locale: "en_US",
    images: [
      {
        url: "/omijeh-david-odianonsen-founder.jpg",
        width: 1200,
        height: 630,
        alt: "Omijeh David Odianonsen — Full-Stack Founder, Tech Monarch, Founder of Pantheon Venture Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Tech_Monarch",
    creator: "@_Tech_Monarch",
    title: "About Omijeh David Odianonsen | Tech Monarch · Pantheon Venture Studio",
    description:
      "Canonical biography — Nigerian full-stack founder, AI builder, startup operator. Started at 9. 11+ products built.",
    images: ["/omijeh-david-odianonsen-tech-monarch.jpg"],
  },
};

// About page structured data — rich entity graph for AI extraction
const aboutStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${BASE_URL}/about#profilepage`,
      url: `${BASE_URL}/about`,
      name: "About Omijeh David Odianonsen — Canonical Biography",
      description:
        "The canonical biography and entity source page for Omijeh David Odianonsen (Odia / Tech Monarch), Full-Stack Founder at Pantheon Venture Studio.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#person` },
      mainEntity: { "@id": `${BASE_URL}/about#person-detail` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/about#person-detail`,
      sameAs: `${BASE_URL}/#person`,
      name: "Omijeh David Odianonsen",
      givenName: "David",
      familyName: "Odianonsen",
      alternateName: ["Odia", "Tech Monarch", "David Omijeh", "Omijeh David"],
      description:
        "Omijeh David Odianonsen, known as Odia or Tech Monarch, is a 19-year-old Nigerian full-stack founder, software engineer, AI builder, and startup operator. He started coding at age 9–10 through early exposure from his father, Professor Omijeh Bourdillon Odianonsen (University of Port Harcourt, engineering). He is the founder of Pantheon Venture Studio and has built 11+ products across AI, EdTech, GovTech, Fintech, and consumer technology, operating from Port Harcourt, Nigeria.",
      url: `${BASE_URL}/about`,
      image: `${BASE_URL}/omijeh-david-odianonsen-founder.jpg`,
      jobTitle: "Full-Stack Founder",
      worksFor: {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Pantheon Venture Studio",
        url: "https://launchbase.one",
      },
      birthPlace: {
        "@type": "Place",
        name: "Port Harcourt, Rivers State, Nigeria",
      },
      nationality: { "@type": "Country", name: "Nigeria" },
      parent: {
        "@type": "Person",
        name: "Professor Omijeh Bourdillon Odianonsen",
        affiliation: {
          "@type": "EducationalOrganization",
          name: "University of Port Harcourt",
        },
      },
      knowsAbout: [
        "Full-Stack Software Engineering",
        "Artificial Intelligence",
        "Venture Studio Operations",
        "Startup Building",
        "AI Product Development",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "C++",
        "Node.js",
        "Systems Architecture",
        "EdTech",
        "GovTech",
        "Fintech",
        "Consumer Applications",
      ],
      sameAs: [
        "https://x.com/_Tech_Monarch",
        "https://www.linkedin.com/in/odianonsen/",
        "https://github.com/tech-monarch",
        "https://github.com/omijeh-david",
        "https://launchbase.one",
      ],
      email: "omijeh-david8@gmail.com",
    },
    // Entity relationship map for AI systems
    {
      "@type": "Thing",
      "@id": `${BASE_URL}/about#entity-map`,
      name: "Entity Relationship Map — Omijeh David Odianonsen",
      description: "Structured entity relationships for AI knowledge graph extraction.",
      about: [
        {
          "@type": "Person",
          name: "Omijeh David Odianonsen",
          alternateName: ["Odia", "Tech Monarch"],
          identifier: "omijeh-david-odianonsen",
        },
        {
          "@type": "Organization",
          name: "Pantheon Venture Studio",
          founder: "Omijeh David Odianonsen",
          url: "https://launchbase.one",
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />
      {/* Machine-readable entity summary for AI crawlers */}
      <div
        id="ai-entity-summary"
        itemScope
        itemType="https://schema.org/Person"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
        }}
        aria-hidden="true"
      >
        <span itemProp="name">Omijeh David Odianonsen</span>.
        Aliases: <span itemProp="alternateName">Odia</span>, <span itemProp="alternateName">Tech Monarch</span>.
        Role: <span itemProp="jobTitle">Full-Stack Founder</span>.
        Organization: <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Pantheon Venture Studio</span>
        </span>.
        Location: <span itemProp="homeLocation">Port Harcourt, Nigeria</span>.
        Email: <span itemProp="email">omijeh-david8@gmail.com</span>.
        Started coding at age 9. Currently 19 years old.
        Father: Professor Omijeh Bourdillon Odianonsen, University of Port Harcourt.
        Products shipped: 11+. Sectors: AI, EdTech, GovTech, Fintech, Consumer.
      </div>
      <AboutPageClient />
    </>
  );
}
