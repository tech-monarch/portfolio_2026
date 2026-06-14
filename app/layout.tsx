import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://omijeh-david.cv";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  verification: {
    google: "ZxxDs4Mfs5o5ZnWspsmnY-s3sJBiPlFN-0LxTk6hsMw",
  },
  title: {
    default:
      "Omijeh David Odianonsen | Full-Stack Founder · Tech Monarch · Pantheon Venture Studio",
    template: "%s | Omijeh David Odianonsen",
  },
  description:
    "Omijeh David Odianonsen (Odia / Tech Monarch) is a Nigerian full-stack founder, software engineer, AI builder, and startup operator. Founder of Pantheon Venture Studio. Building AI-native startups across Africa and globally from Port Harcourt, Nigeria.",
  keywords: [
    "Omijeh David Odianonsen",
    "Omijeh David",
    "David Omijeh",
    "Odianonsen",
    "Odia",
    "Tech Monarch",
    "Pantheon Venture Studio",
    "Nigerian founder",
    "Nigerian developer",
    "AI founder Africa",
    "Full stack founder",
    "African tech founder",
    "Port Harcourt developer",
    "venture studio Nigeria",
    "software engineer Nigeria",
    "startup founder Nigeria",
    "Omijeh David founder",
    "Omijeh David developer",
    "Omijeh David Nigeria",
    "Omijeh David AI founder",
    "Omijeh David Pantheon",
    "Pantheon Venture Studio founder",
    "Tech Monarch founder",
    "Odianonsen founder",
  ],
  authors: [{ name: "Omijeh David Odianonsen", url: BASE_URL }],
  creator: "Omijeh David Odianonsen",
  publisher: "Omijeh David Odianonsen",
  category: "Technology",
  classification:
    "Software Engineering, Venture Building, Artificial Intelligence",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    title:
      "Omijeh David Odianonsen | Full-Stack Founder · Tech Monarch · Pantheon Venture Studio",
    description:
      "Nigerian full-stack founder, AI builder, and startup operator. Founder of Pantheon Venture Studio. 11+ products shipped across AI, EdTech, GovTech, Fintech, and consumer tech.",
    url: BASE_URL,
    siteName: "Omijeh David Odianonsen",
    locale: "en_US",
    images: [
      {
        url: "/omijeh-david-odianonsen1.jpg",
        width: 1200,
        height: 630,
        alt: "Omijeh David Odianonsen — Full-Stack Founder, Tech Monarch, Founder of Pantheon Venture Studio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Tech_Monarch",
    creator: "@_Tech_Monarch",
    title:
      "Omijeh David Odianonsen | Tech Monarch · Pantheon Venture Studio Founder",
    description:
      "Nigerian full-stack founder and AI builder. Founder of Pantheon Venture Studio. 11+ products built across Africa and globally.",
    images: ["/omijeh-david-odianonsen1.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  other: {
    "profile:first_name": "Omijeh David",
    "profile:last_name": "Odianonsen",
    "profile:username": "tech_monarch",
    "profile:gender": "male",
  },
};

// Comprehensive JSON-LD structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // Person entity — primary
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Omijeh David Odianonsen",
      alternateName: [
        "David Omijeh",
        "Omijeh David",
        "Odia",
        "Tech Monarch",
        "Odianonsen",
      ],
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#personimage`,
        url: `${BASE_URL}/omijeh-david-odianonsen1.jpg`,
        width: 800,
        height: 800,
        caption:
          "Omijeh David Odianonsen — Full-Stack Founder and Tech Monarch",
      },
      description:
        "Omijeh David Odianonsen, known as Odia and Tech Monarch, is a Nigerian full-stack founder, software engineer, AI builder, startup operator, and founder of Pantheon Venture Studio. He has built 11+ products across AI, EdTech, GovTech, Fintech, and consumer technology, operating from Port Harcourt, Nigeria.",
      jobTitle: "Full-Stack Founder",
      worksFor: {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Pantheon Venture Studio",
      },
      foundingLocation: {
        "@type": "Place",
        name: "Port Harcourt, Nigeria",
      },
      birthPlace: {
        "@type": "Place",
        name: "Port Harcourt, Rivers State, Nigeria",
      },
      nationality: {
        "@type": "Country",
        name: "Nigeria",
      },
      knowsAbout: [
        "Artificial Intelligence",
        "Full-Stack Development",
        "Venture Building",
        "Startup Operations",
        "AI Product Development",
        "Software Engineering",
        "EdTech",
        "GovTech",
        "Fintech",
        "Consumer Applications",
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "Systems Architecture",
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
    // Organization entity — Pantheon Venture Studio
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Pantheon Venture Studio",
      alternateName: ["Pantheon", "Launchbase", "Launchbase.one"],
      url: "https://launchbase.one",
      founder: {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Omijeh David Odianonsen",
      },
      foundingDate: "2024",
      description:
        "Pantheon Venture Studio is a venture studio building, validating, and scaling AI-native startups across Africa and globally. Founded by Omijeh David Odianonsen (Tech Monarch), Pantheon operates across AI, SaaS, EdTech, GovTech, Fintech, and consumer applications.",
      location: {
        "@type": "Place",
        name: "Port Harcourt, Nigeria",
        addressCountry: "NG",
      },
      sameAs: ["https://launchbase.one"],
    },
    // Website entity
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Omijeh David Odianonsen — Tech Monarch",
      description:
        "Personal portfolio and founder profile of Omijeh David Odianonsen, Full-Stack Founder at Pantheon Venture Studio.",
      publisher: { "@id": `${BASE_URL}/#person` },
      inLanguage: "en-US",
      copyrightYear: 2026,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    // ProfilePage entity
    {
      "@type": "ProfilePage",
      "@id": `${BASE_URL}/#profilepage`,
      url: BASE_URL,
      name: "Omijeh David Odianonsen — Full-Stack Founder & Tech Monarch",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#person` },
      mainEntity: { "@id": `${BASE_URL}/#person` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
        ],
      },
    },
    // Pantheon Venture Studio project
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#project-launchbase`,
      name: "Launchbase / Pantheon Venture Studio",
      url: "https://launchbase.one",
      applicationCategory: "BusinessApplication",
      author: { "@id": `${BASE_URL}/#person` },
      creator: { "@id": `${BASE_URL}/#person` },
      description:
        "Venture studio hub and startup launchpad. Investor hub, co-builder portal, and startup ecosystem showcase for Pantheon Venture Studio.",
    },
    // UniHub
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#project-unihub`,
      name: "UniHub",
      url: "https://uni-hub-roan.vercel.app/",
      applicationCategory: "EducationalApplication",
      author: { "@id": `${BASE_URL}/#person` },
      description:
        "Centralised university hub for Nigerian students — courses, resources, collaboration, and campus tools.",
    },
    // MyRight
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#project-myright`,
      name: "MyRight",
      url: "https://my-right-one.vercel.app/",
      applicationCategory: "UtilitiesApplication",
      author: { "@id": `${BASE_URL}/#person` },
      description:
        "Civic rights platform empowering Nigerian citizens with knowledge of their legal rights and civic entitlements.",
    },
    // ScanRush
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#project-scanrush`,
      name: "ScanRush",
      url: "https://scanrush.vercel.app/",
      applicationCategory: "BusinessApplication",
      author: { "@id": `${BASE_URL}/#person` },
      description:
        "QR-powered commerce and menu platform for restaurants and businesses.",
    },
    // FAQ structured data for AI + voice search
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Omijeh David Odianonsen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Omijeh David Odianonsen, also known as Odia or Tech Monarch, is a 19-year-old Nigerian full-stack founder, software engineer, AI builder, and startup operator from Port Harcourt, Nigeria. He is the founder of Pantheon Venture Studio and has built 11+ products across AI, EdTech, GovTech, Fintech, and consumer technology.",
          },
        },
        {
          "@type": "Question",
          name: "What is Pantheon Venture Studio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pantheon Venture Studio is a venture studio founded by Omijeh David Odianonsen (Tech Monarch) that builds, validates, and scales AI-native startups across Africa and globally. It operates at launchbase.one and focuses on AI, SaaS, EdTech, GovTech, Fintech, and consumer applications.",
          },
        },
        {
          "@type": "Question",
          name: "What has Omijeh David built?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Omijeh David Odianonsen has built 11+ products including: Launchbase/Pantheon Venture Studio, UniHub (university platform), Shift (productivity SaaS), MyRight (civic rights platform), ScanRush (QR commerce), Rivers State Teachers Recruitment Platform, Skylite Pro (fintech landing), Discover Niger (tourism), Foodix (restaurant ordering), Bourdillon Omijeh Foundation website, and Pxxl Space (creative studio).",
          },
        },
        {
          "@type": "Question",
          name: "What is Tech Monarch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tech Monarch (@_Tech_Monarch) is the alias and personal brand of Omijeh David Odianonsen — Nigerian founder, software engineer, AI builder, and founder of Pantheon Venture Studio.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Omijeh David Odianonsen from?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Omijeh David Odianonsen is from Port Harcourt, Rivers State, Nigeria. He started coding at age 9-10 and founded Pantheon Venture Studio at 19.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#111111" />
        <meta name="color-scheme" content="dark light" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="format-detection" content="telephone=no" />
        {/* Entity / Knowledge Graph hints */}
        <meta name="author" content="Omijeh David Odianonsen" />
        <meta name="geo.region" content="NG-RIV" />
        <meta name="geo.placename" content="Port Harcourt, Nigeria" />
        {/* Canonical */}
        <link rel="canonical" href="https://omijeh-david.cv" />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Prevent FOUC for dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(){
            try {
              var s = localStorage.getItem('theme');
              if (s === 'light') {
                document.documentElement.classList.remove('dark');
              } else {
                document.documentElement.classList.add('dark');
              }
            } catch(e){ document.documentElement.classList.add('dark'); }
          })();
        `,
          }}
        />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {/* Hidden machine-readable entity summary for AI crawlers */}
        <div
          id="entity-summary"
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
          <span itemScope itemType="https://schema.org/Person">
            <span itemProp="name">Omijeh David Odianonsen</span>, also known as{" "}
            <span itemProp="alternateName">Tech Monarch</span> and{" "}
            <span itemProp="alternateName">Odia</span>, is a{" "}
            <span itemProp="jobTitle">Full-Stack Founder</span> from{" "}
            <span itemProp="nationality">Nigeria</span>. Founder of{" "}
            <span
              itemProp="affiliation"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <span itemProp="name">Pantheon Venture Studio</span>
            </span>
            . Contact: <span itemProp="email">omijeh-david8@gmail.com</span>.
          </span>
        </div>
        {children}
      </body>
    </html>
  );
}
