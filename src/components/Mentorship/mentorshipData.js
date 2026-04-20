// Mentorship program data

export const credentials = {
  title: "Learn from a Google Engineer",
  subtitle: "Get personalized tutoring from someone who's been there",
  achievements: [
    {
      icon: "fas fa-briefcase",
      stat: "3",
      description: "FAANG Internships"
    },
    {
      icon: "fas fa-users",
      stat: "80k",
      suffix: "+",
      description: "Social Media Followers"
    },
    {
      icon: "fab fa-google",
      stat: "Google",
      description: "Software Engineer @ Google Search",
      isText: true
    }
  ]
};

export const programDetails = {
  format: "1-on-1 video calls",
  topics: [
    "Coding skills & technical growth",
    "Navigating tech industry & FAANG companies",
    "Personal branding & social media"
  ],
  highlights: [
    "Resume overhaul & LinkedIn optimization",
    "Mock technicals with real FAANG engineer",
    "System design interviews"
  ]
};

export const pricingTiers = [
  {
    id: "starter",
    name: "Starter Session",
    price: "$20",
    duration: "1 Hour",
    description: "Buy me lunch! Perfect for getting specific advice or a quick consultation",
    features: [
      "1 hour 1-on-1 video call",
      "Resume & LinkedIn review",
      "Career advice & guidance",
      "Follow-up email summary",
      "My FAANG resume template"
    ],
    popular: true,
    color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    hoverShadow: "hover:shadow-indigo-500/30"
  },
  {
    id: "professional",
    name: "Professional Package",
    price: "$125",
    duration: "4 sessions",
    description: "Best for interview prep and comprehensive career development",
    features: [
      "4 weekly 1-on-1 video calls",
      "Interview preparation & mock interviews",
      "Resume & LinkedIn optimization",
      "Ongoing support via email",
      "Priority scheduling"
    ],
    popular: false,
    color: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    hoverShadow: "hover:shadow-indigo-500/30"
  },
  {
    id: "elite",
    name: "Elite Tutoring",
    price: "$250",
    duration: "6 Sessions",
    description: "Complete transformation package for serious career growth",
    features: [
      "6 bi-weekly 1-on-1 video calls (12 weeks)",
      "Comprehensive interview preparation",
      "Multiple resume & portfolio reviews",
      "Coding practice & technical guidance",
      "Direct access via messaging",
      "Personal branding strategy"
    ],
    popular: false,
    color: "bg-gradient-to-br from-indigo-600 to-slate-700",
    hoverShadow: "hover:shadow-indigo-500/30"
  }
];
