// Credentials data
export const credentials = {
  title: "Learn from me!",
  subtitle: "Accelerate your tech career with personalized guidance",
  achievements: [
    {
      icon: "fas fa-dollar-sign",
      stat: "225k",
      suffix: "/yr",
      description: "at Google at age 21",
      color: "text-indigo-500"
    },
    {
      icon: "fas fa-briefcase",
      stat: "3",
      description: "FAANG Internships (Google, Microsoft, Amazon)",
      color: "text-indigo-500"
    },
    {
      icon: "fas fa-users",
      stat: "50k",
      suffix: "+",
      description: "Social Media Followers",
      color: "text-indigo-500"
    },
    {
      icon: "fas fa-search",
      stat: "",
      suffix: "Google Search",
      description: "Software Engineer on flagship product",
      color: "text-indigo-500"
    }
  ]
};

// Program details
export const programDetails = {
  format: "1-on-1 Video Sessions",
  duration: "Flexible scheduling to fit your needs",
  topics: [
    "Interview Preparation & Mock Interviews",
    "Resume & LinkedIn Optimization",
    "Career Strategy & Growth Planning",
    "Technical Skills Development",
    "Networking & Personal Branding"
  ],
  highlights: [
    "Personalized guidance from Google SWE on Google Search",
    "Real FAANG interview questions & strategies",
    "Career roadmap tailored to your goals",
    "Direct messaging access between sessions"
  ]
};

// Pricing tiers
export const pricingTiers = [
  {
    id: "starter",
    name: "Starter Session",
    price: "$25",
    duration: "1 Hour",
    description: "Buy me lunch! Perfect for getting started or addressing specific questions",
    features: [
      "1-hour video call",
      "Resume/LinkedIn review",
      "Career advice & strategy",
      "Q&A session",
      "Follow-up email summary",
      "Resume template"
    ],
    popular: false,
    color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    bg: "bg-gradient-to-br from-indigo-400/10 to-indigo-600/10",
    hoverShadow: "group-hover:shadow-indigo-500/30"
  },
  {
    id: "professional",
    name: "Professional Package",
    price: "$125",
    duration: "4 Sessions",
    description: "Comprehensive mentorship for interview prep and career growth",
    features: [
      "Four 1-hour sessions",
      "Complete resume overhaul",
      "Mock technical interviews",
      "LinkedIn optimization",
      "Messaging support between sessions",
      "Personalized learning resources"
    ],
    popular: true,
    color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    bg: "bg-gradient-to-br from-indigo-500/10 to-purple-600/10",
    hoverShadow: "group-hover:shadow-purple-500/30"
  },
  {
    id: "elite",
    name: "Elite Mentorship",
    price: "$250",
    duration: "12 Sessions",
    description: "Complete career transformation with ongoing support",
    features: [
      "Twelve 1-hour sessions over 3 months",
      "End-to-end interview preparation",
      "Portfolio/project review & guidance",
      "Priority messaging access",
      "Referral assistance for Google",
      "Career roadmap development"
    ],
    popular: false,
    color: "bg-gradient-to-br from-purple-500 to-pink-600",
    bg: "bg-gradient-to-br from-purple-500/10 to-pink-600/10",
    hoverShadow: "group-hover:shadow-pink-500/30"
  }
];
