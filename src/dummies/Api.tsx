export interface Project {
  image: string;
  name: string;
  stack: string[];
  url: string;
}

const dummyProjects: Project[] = [
  {
    image: "https://loremflickr.com/760/400",
    name: "Website Marketplace Multi Vendor",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://example.com/marketplace",
  },
  {
    image: "https://loremflickr.com/760/400",
    name: "Mobile App for Food Delivery Service",
    stack: ["React Native", "TypeScript", "Firebase"],
    url: "https://example.com/food-delivery",
  },
  {
    image: "https://loremflickr.com/760/400",
    name: "E-commerce Platform with Payment Gateway Integration",
    stack: ["Java", "Spring Boot"],
    url: "https://example.com/ecommerce",
  },
  {
    image: "https://loremflickr.com/760/400",
    name: "Social Media Platform for Artists and Creatives",
    stack: ["Python", "Django"],
    url: "https://example.com/social-media",
  },
  {
    image: "https://loremflickr.com/760/400",
    name: "Analytics Dashboard for Data Visualization",
    stack: ["JavaScript", "React", "Node.js"],
    url: "https://example.com/analytics-dashboard",
  },
  {
    image: "https://loremflickr.com/760/400",
    name: "Booking System for Events and Conferences",
    stack: ["PHP", "Laravel", "MySQL"],
    url: "https://example.com/booking-system",
  },
];

export { dummyProjects };
