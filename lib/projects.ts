export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  gallery?: string[];
  start: string;
  end?: string;
  client: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "martial-arts-website",
    title: "Martial Arts Website",
    description:
      "Responsive and fast informational website to improve SEO and search-ability of Martial arts centre\n- Content managed by owner\n- Custom web-based content administration\n- Image or video cover image",
    image: "/portfolio/cards/martial-arts-website.png",
    gallery: [
      "/portfolio/gallery/martial-arts-website-0.png",
      "/portfolio/gallery/martial-arts-website-1.png",
      "/portfolio/gallery/martial-arts-website-2.png",
      "/portfolio/gallery/martial-arts-website-3.png",
    ],
    start: "2024-06-01",
    end: "2024-08-01",
    client: "Hidden",
    tags: ["Next.js", "Website"],
  },
  {
    id: "online-learning-system",
    title: "Online Learning System",
    description:
      "Custom learning management system synced with Notion and payloadCMS with the following features:\n- Assignments\n- Journal\n- Rich media content\n- Quizzes",
    image: "/portfolio/cards/online-learning-system.png",
    gallery: [
      "/portfolio/gallery/online-learning-system-0.png",
      "/portfolio/gallery/online-learning-system-1.png",
      "/portfolio/gallery/online-learning-system-2.png",
      "/portfolio/gallery/online-learning-system-3.png",
    ],
    start: "2024-01-01",
    end: "2025-08-01",
    client: "Islamic Family",
    tags: [
      "Custom LMS",
      "Next.js",
      "Website",
      "MongoDB",
      "Kinde Authentication",
    ],
  },
  {
    id: "student-information-system",
    title: "Student Information System",
    description:
      "Web application for students, teachers and administrators to manage key student information such as:\n- Schedule\n- Transportation\n- Application",
    image: "/portfolio/cards/student-information-system.png",
    gallery: [
      "/portfolio/gallery/student-information-system-0.png",
      "/portfolio/gallery/student-information-system-1.png",
      "/portfolio/gallery/student-information-system-2.png",
      "/portfolio/gallery/student-information-system-3.png",
      "/portfolio/gallery/student-information-system-4.png",
      "/portfolio/gallery/student-information-system-5.png",
    ],
    start: "2021-01-01",
    end: "2022-03-01",
    client: "Qasid Institute",
    tags: ["Next.js", "Website", "MongoDB", "Airtable"],
  },
  {
    id: "mobile-learning-apps",
    title: "Mobile Learning Apps",
    description:
      "Mobile learning apps for students of the Arabic language\n- Multimedia\n- Animations",
    image: "/portfolio/cards/mobile-learning-apps.png",
    gallery: [
      "/portfolio/gallery/mobile-learning-apps-0.png",
      "/portfolio/gallery/mobile-learning-apps-1.png",
      "/portfolio/gallery/mobile-learning-apps-2.png",
      "/portfolio/gallery/mobile-learning-apps-3.png",
    ],
    start: "2015-01-01",
    end: "2016-03-01",
    client: "Qasid Institute",
    tags: ["React Native"],
  },
  {
    id: "lms-implementation",
    title: "LMS Implementation",
    description:
      "Customize open source Canvas LMS at the following levels:\n- Fit the brand and style of the client\n- Build custom LTI plug-ins",
    image: "/portfolio/cards/lms-implementation.png",
    gallery: [
      "/portfolio/gallery/lms-implementation-0.png",
      "/portfolio/gallery/lms-implementation-1.png",
      "/portfolio/gallery/lms-implementation-2.png",
      "/portfolio/gallery/lms-implementation-3.png",
      "/portfolio/gallery/lms-implementation-4.png",
    ],
    start: "2012-01-01",
    end: "2015-03-01",
    client: "Qasid Institute",
    tags: ["Canvas LMS", "Custom LMS"],
  },
  {
    id: "3d-house-interactive-experience",
    title: "3D House Interactive Experience",
    description:
      "Interactive Web based experience designed as an assignment for Masters students of Occupational Therapy\n- Winner of Alberta New Media Award\n- Based on 3D renderings of a house",
    image: "/portfolio/cards/3d-house-interactive-experience.png",
    start: "2005-03-01",
    end: "2006-06-01",
    client: "University of Alberta",
    tags: ["Adobe Flash", "Interactive"],
  },
  {
    id: "learning-objects",
    title: "Learning Objects",
    description:
      "Learning object animations and interactions for university courses\n- Interactive multimedia\n- Case-based learning",
    image: "/portfolio/cards/learning-objects.png",
    gallery: [
      "/portfolio/gallery/learning-objects-0.png",
      "/portfolio/gallery/learning-objects-1.png",
      "/portfolio/gallery/learning-objects-2.png",
    ],
    start: "2002-08-01",
    end: "2004-08-01",
    client: "University of Alberta",
    tags: ["Adobe Flash", "Interactive"],
  },
  {
    id: "virtual-tour",
    title: "Virtual Tour",
    description:
      "Virtual tour of University of Alberta TELUS Center\n- Winner of Alberta New Media Award\n- Interactive experience using virtual panoramas",
    image: "/portfolio/cards/virtual-tour.png",
    start: "2001-03-01",
    end: "2002-03-01",
    client: "University of Alberta",
    tags: ["Adobe Flash", "Interactive"],
  },
];
