// 1. Define Project Data Interface and Array
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageColor: string; // Temporary placeholder until you have real images
  logo?: string; // Path to the project logo
  color: string; // Added explicit hex color for animations
  align: "left" | "right";
  link: string;
  images?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Pasada Driver Side",
    category: "Mobile App",
    description:
      "A Location-tracking, Booking Manager and Quota Monitoring App for the Drivers and Conductors of Modernized Jeepneys",
    imageColor: "bg-red-500",
    logo: "/project_logo/pasada_driver_logo.svg",
    color: "#ef4444", // red-500
    align: "right",
    link: "",
    images: [
      "/pasada_driver_screenshots/pasada_driver_activity_page_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_activity_page_view2.jpg",
      "/pasada_driver_screenshots/pasada_driver_dropoff_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_dropoff_view2.jpg",
      "/pasada_driver_screenshots/pasada_driver_export_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_export_view2.jpg",
      "/pasada_driver_screenshots/pasada_driver_home_driving_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_home_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_main_screen.jpg",
      "/pasada_driver_screenshots/pasada_driver_manual_booking_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_profile_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_select_route_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_start_driving_view.jpg",
      "/pasada_driver_screenshots/pasada_driver_undo_view.jpg",
    ],
  },
  {
    id: 2,
    title: "AI Blog Post",
    category: "Web App",
    description:
      "An AI-Powered Blogging Channel for Latest Tech News and Updates",
    imageColor: "bg-blue-500",
    color: "#3b82f6", // blue-500
    align: "left",
    link: "",
  },
  {
    id: 3,
    title: "To Be Announced",
    category: "Coming Soon",
    description:
      "Next project is still on the back of my mind and will be announced soon",
    imageColor: "bg-purple-500",
    color: "#a855f7", // purple-500
    align: "right",
    link: "",
  },
];
