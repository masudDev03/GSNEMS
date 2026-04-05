import {
  GraduationCap,
  Users,
  BookOpen,
  Heart,
  Shield,
  Award,
  Lightbulb,
  Target,
  Palette,
  Leaf,
} from "lucide-react";

export const SCHOOL_INFO = {
  name: "Gurukul Shikshaniketan English Medium School",
  shortName: "Gurukul Shikshaniketan",
  tagline: "Building Strong Foundations for a Bright Future",
  location: "GC3J+9HX, Palatana, Tripura 799105, India",
  phone: "+91 60097 80456",
  email: "gurukulshikshaniketan473@gmail.com",
  googleMapsUrl:
    "https://www.google.com/maps/place/%E0%A6%97%E0%A7%81%E0%A6%B0%E0%A7%81%E0%A6%95%E0%A7%81%E0%A6%B2+%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE+%E0%A6%A8%E0%A6%BF%E0%A6%95%E0%A7%87%E0%A6%A4%E0%A6%A8/@23.5043126,91.4280842,17z/data=!4m14!1m7!3m6!1s0x37539bc5abf862f7:0xc341bbcfb4c7f31a!2sPalatana+H.S.+School!8m2!3d23.5043126!4d91.4306591!16s%2Fg%2F11g70j5hmr!3m5!1s0x37539b007644a06d:0xeef88eb928869498!8m2!3d23.5034778!4d91.4314802!16s%2Fg%2F11vsff7p_n?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61556094661282",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/6009780456",
  },
};

export const STATS = [
  { value: "8+", label: "Years of Excellence" },
  { value: "80+", label: "Happy Students" },
  { value: "10+", label: "Qualified Teachers" },
];

export const FEATURES = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description:
      "Comprehensive curriculum focused on foundational learning and holistic development",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description:
      "Secure campus with caring staff ensuring your child's safety and wellbeing",
  },
  {
    icon: Palette,
    title: "Activity-Based Learning",
    description:
      "Hands-on activities and creative projects that make learning engaging and fun",
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    description:
      "Dedicated educators trained in modern child-centered teaching methodologies",
  },
];

export const TESTIMONIALS = [
  {
    name: "Deeptanu Datta",
    role: "Local Guide · Google Review",
    content: "This school is good for primary level education.",
    rating: 5,
  },
  {
    name: "Sudip Gh",
    role: "Local Guide · Google Review",
    content: "Children are so cute.",
    rating: 5,
  },
  {
    name: "Nandan Sarkar",
    role: "Local Guide · Google Review",
    content: "Very good school.",
    rating: 5,
  },
  {
    name: "Shubham Datta",
    role: "Google Review",
    content: "A wonderful place for young learners to grow and thrive.",
    rating: 5,
  },
];

export const MISSION_VISION = {
  mission: {
    title: "Our Mission",
    description:
      "We believe quality education isn't just for city kids – it's the birthright of every child, in every village. We're dedicated to providing affordable, Gurukul-inspired learning that ignites curiosity, forges character, and unleashes creativity. Our commitment is to build unshakeable foundations, empowering each child for a lifetime of growth and discovery.",
  },
  vision: {
    title: "Our Vision",
    description:
      "Imagine a school where hope takes root in rural soil, a beacon illuminating the path for village children to receive an education as rich and vibrant as any found in bustling cities. We dream of nurturing compassionate, self-assured young minds, deeply rooted in tradition yet reaching for the boundless possibilities of modern knowledge, poised to shape a future brimming with promise.",
  },
};

export const CORE_VALUES = [
  {
    icon: Target,
    title: "Discipline",
    description:
      "Cultivating self-control, respect, and responsibility in daily life",
  },
  {
    icon: Palette,
    title: "Creativity",
    description:
      "Encouraging imagination, artistic expression, and innovative thinking",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "Fostering a love for learning and exploration of the world",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Building character through honesty, truthfulness, and ethical behavior",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "Promoting empathy, kindness, and compassion toward all beings",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest standards in all endeavors",
  },
];

export const CLASSES = [
  {
    grade: "Pre-KG",
    ageRange: "2.5 - 3.5 years",
    description:
      "Introduction to school environment through play and sensory activities",
    focus: [
      "Social skills",
      "Basic motor skills",
      "Language introduction",
      "Creative play",
    ],
  },
  {
    grade: "KG-I",
    ageRange: "3.5 - 4.5 years",
    description:
      "Building foundational skills through stories, rhymes, and hands-on learning",
    focus: [
      "Phonics basics",
      "Number recognition",
      "Art & craft",
      "Group activities",
    ],
  },
  {
    grade: "KG-II",
    ageRange: "4.5 - 5.5 years",
    description:
      "Preparing for formal education with structured learning activities",
    focus: [
      "Reading readiness",
      "Writing preparation",
      "Basic math",
      "Science exploration",
    ],
  },
  {
    grade: "Class I",
    ageRange: "5.5 - 6.5 years",
    description:
      "Beginning formal education with emphasis on literacy and numeracy",
    focus: [
      "Reading & writing",
      "Basic arithmetic",
      "Environmental studies",
      "Physical education",
    ],
  },
  {
    grade: "Class II",
    ageRange: "6.5 - 7.5 years",
    description:
      "Building on foundational skills with more structured learning",
    focus: [
      "Language development",
      "Mathematical concepts",
      "General knowledge",
      "Value education",
    ],
  },
  {
    grade: "Class III",
    ageRange: "7.5 - 8.5 years",
    description: "Developing critical thinking and problem-solving abilities",
    focus: [
      "Advanced reading",
      "Multiplication & division",
      "Science experiments",
      "Computer basics",
    ],
  },
  {
    grade: "Class IV",
    ageRange: "8.5 - 9.5 years",
    description:
      "Strengthening academic foundation with comprehensive curriculum",
    focus: [
      "Grammar & composition",
      "Fractions & geometry",
      "Social studies",
      "Sports & games",
    ],
  },
];

export const TEACHING_APPROACHES = [
  {
    icon: Palette,
    title: "Activity-Based Learning",
    description:
      "Learning through doing - hands-on projects, experiments, and creative activities that make concepts come alive",
  },
  {
    icon: BookOpen,
    title: "Foundational Literacy & Numeracy",
    description:
      "Strong emphasis on reading, writing, and mathematical skills using proven phonics and conceptual learning methods",
  },
  {
    icon: Heart,
    title: "Social-Emotional Learning",
    description:
      "Nurturing emotional intelligence, empathy, and interpersonal skills through guided interactions and reflection",
  },
  {
    icon: Leaf,
    title: "Creative Arts",
    description:
      "Integrated arts program including music, dance, drama, and visual arts to foster self-expression and confidence",
  },
];

export const DAILY_SCHEDULE = [
  {
    time: "10:40 AM - 10:55 AM",
    activity: "Assembly & Morning Prayer",
    description:
      "Students gather for morning assembly, prayer, and motivational talks",
  },
  {
    time: "11:00 AM - 11:45 AM",
    activity: "Period-1",
    description: "Core subjects: English",
  },
  {
    time: "11:45 AM - 12:20 PM",
    activity: "Period-2",
    description: "Bengali",
  },
  {
    time: "12:25 PM - 12:45 PM",
    activity: "Leisure",
    description: "Snack time and outdoor play",
  },
  {
    time: "12:45 PM - 1:25 PM",
    activity: "Period-3",
    description: "Mathematics",
  },
  {
    time: "1:25 PM - 2:05 PM",
    activity: "Period-4",
    description: "Activity (art, music, or physical education)",
  },
  {
    time: "2:05 PM - 2:15 PM",
    activity: "Dismissal",
    description:
      "Students prepare to go home, with announcements and reminders for the next day",
  },
];

export const ADMISSION_STEPS = [
  {
    step: 1,
    title: "Enquire",
    description: "Fill out the enquiry form or visit the school campus",
  },
  {
    step: 2,
    title: "Apply",
    description: "Submit the admission application form with required details",
  },
  {
    step: 3,
    title: "Documents",
    description: "Provide necessary documents for verification",
  },
  {
    step: 4,
    title: "Confirm",
    description: "Complete the admission process and confirm enrollment",
  },
];

export const REQUIRED_DOCUMENTS = [
  "Birth certificate (original for verification)",
  "Vaccination record and health card",
  "Recent passport-size photographs (2 copies)",
  "Transfer certificate from previous school (if applicable)",
  "Address proof (Aadhaar card, ration card, or utility bill)",
  "Parent/Guardian ID proof",
];

export const GALLERY_CATEGORIES = [
  "All",
  "Classrooms",
  "Activities",
  "Events",
  "Sports",
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Classrooms",
    title: "Bright Classroom Environment",
    alt: "Students in a colorful classroom",
  },
  {
    id: 2,
    category: "Activities",
    title: "Art & Craft Session",
    alt: "Children doing art and craft activities",
  },
  {
    id: 3,
    category: "Events",
    title: "Annual Day Celebration",
    alt: "Annual day event with students performing",
  },
  {
    id: 4,
    category: "Sports",
    title: "Sports Day Activities",
    alt: "Children participating in sports",
  },
  {
    id: 5,
    category: "Classrooms",
    title: "Library Corner",
    alt: "School library with books",
  },
  {
    id: 6,
    category: "Activities",
    title: "Science Learning",
    alt: "Students engaged in science experiments",
  },
  {
    id: 7,
    category: "Events",
    title: "Cultural Program",
    alt: "Students performing cultural dance",
  },
  {
    id: 8,
    category: "Sports",
    title: "Playground Fun",
    alt: "Children playing in the playground",
  },
  {
    id: 9,
    category: "Classrooms",
    title: "Smart Board Learning",
    alt: "Teacher using smart board in class",
  },
  {
    id: 10,
    category: "Activities",
    title: "Music Class",
    alt: "Children learning music",
  },
  {
    id: 11,
    category: "Events",
    title: "Independence Day",
    alt: "Independence day celebration",
  },
  {
    id: 12,
    category: "Sports",
    title: "Physical Education",
    alt: "PT class with students exercising",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
