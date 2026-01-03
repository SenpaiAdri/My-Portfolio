export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack?: string[];
  timeline: string;
  imageColor: string;
  logo?: string;
  color: string;
  align: "left" | "right";
  link?: string;
  github?: string;
  images?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "pasada-driver",
    title: "Pasada Driver Side",
    description:
      "A Location-tracking, Booking Manager and Quota Monitoring App for the Drivers and Conductors of Modernized Jeepneys",
    longDescription:
      "The Pasada Driver App is a critical component of the Pasada ecosystem, designed to empower drivers and conductors of modernized jeepneys. It features real-time GPS tracking for fleet management, an intelligent booking system that connects drivers with passengers, and a quota monitoring tool to help drivers track their daily earnings and performance. Built with Flutter, it ensures a smooth, cross-platform experience on various Android devices commonly used in the field.",
    techStack: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Google Maps API", "Google Cloud Platform"],
    timeline: "2024 - 2025",
    imageColor: "bg-red-500",
    logo: "/project_logo/pasada_driver_logo.svg",
    color: "#ef4444", // red-500
    align: "right",
    images: [
      "/pasada_driver_screenshots/pasada_driver_activity_page_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_dropoff_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_export_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_activity_page_view2.jpg",
      "/pasada_driver_screenshots/pasada_driver_dropoff_view2.jpg",
      "/pasada_driver_screenshots/pasada_driver_home_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_main_screen.jpg",
      "/pasada_driver_screenshots/pasada_driver_manual_booking_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_export_view2.jpg",
      "/pasada_driver_screenshots/pasada_driver_profile_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_home_driving_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_select_route_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_start_driving_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_undo_view.jpg",
    ],
  },
  {
    id: 2,
    slug: "ai-blog-post",
    title: "AI Blog Post",
    description:
      "An AI-Powered Blogging Channel for Latest Tech News and Updates",
    longDescription:
      "AI Blog Post is an automated content generation platform that curates and summarizes the latest technology news. Leveraging generative AI, it scrapes reputable tech sources, processes the information, and produces engaging blog posts. This project showcases the integration of AI models with modern web frameworks to automate content creation pipelines.",
    techStack: ["Next.js", "TypeScript", "Google Gemini API", "Tailwind CSS"],
    timeline: "2025- Present",
    imageColor: "bg-blue-500",
    logo: "/project_logo/ai_blogpost_logo.svg",
    color: "#3b82f6", // blue-500
    align: "left",
    link: "",
  },
  // {
  //   id: 3,
  //   title: "To Be Announced",
  //   description:
  //     "Next project is still on the back of my mind and will be announced soon",
  //   imageColor: "bg-purple-500",
  //   color: "#a855f7", // purple-500
  //   align: "right",
  // },
];
