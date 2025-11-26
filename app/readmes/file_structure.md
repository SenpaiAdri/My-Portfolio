.
├── app/                       # Route handlers and pages
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout (wraps everything)
│   └── page.tsx               # Main landing page
│
├── components/                # All React components (moved to root is cleaner)
│   ├── ui/                    # Small, reusable UI primitives (Buttons, Cards, Meteors)
│   ├── layout/                # Layout specific (Navbar, Footer, Sidebar)
│   ├── sections/              # Major page sections (Hero, About, Projects, Contact)
│   └── icons/                 # Custom SVG icon components (if not using a library)
│
├── data/                      # Static content (keeps your components clean)
│   ├── projects.ts            # Array of project objects
│   ├── experience.ts          # Work history data
│   └── social.ts              # Social media links
│
├── hooks/                     # Custom React hooks (e.g., useScroll, useWindowSize)
│
├── lib/                       # Utilities and helper functions
│   └── utils.ts               # (Already exists) Class name mergers, formatting helpers
│
├── public/                    # Static assets (images, fonts, files)
│   ├── images/                # Project screenshots, profile pictures
│   └── resume.pdf             # Downloadable resume
│
└── types/                     # TypeScript interfaces
    └── index.d.ts             # Global types like Project, Job, etc.