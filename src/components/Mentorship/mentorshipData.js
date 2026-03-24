// Mentorship program data

export const credentials = {
  title: "Learn from a Google Engineer",
  subtitle: "Get personalized mentorship from someone who's been there",
  achievements: [
    {
      icon: "fas fa-briefcase",
      stat: "3",
      description: "FAANG Internships"
    },
    {
      icon: "fas fa-users",
      stat: "50k",
      suffix: "+",
      description: "Social Media Followers"
    },
    {
      icon: "fas fa-code",
      stat: "Google",
      description: "Search Team"
    }
  ]
};

export const programDetails = {
  format: "1-on-1 video calls",
  topics: [
    "Career guidance & interview prep",
    "Resume review & LinkedIn optimization",
    "Coding skills & technical growth",
    "Navigating tech industry & FAANG companies",
    "Personal branding & social media"
  ],
  highlights: [
    "Flexible scheduling",
    "Personalized advice",
    "Real industry insights"
  ]
};

export const pricingTiers = [
  {
    id: "starter",
    name: "Starter Session",
    price: "$20",
    duration: "1 Hour",
    description: "Perfect for getting specific advice or a quick consultation",
    features: [
      "1 hour 1-on-1 video call",
      "Resume or LinkedIn review",
      "Career advice & guidance",
      "Follow-up email summary",
      "My resume template"
    ],
    popular: false,
    color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    hoverShadow: "hover:shadow-indigo-500/30"
  },
  {
    id: "professional",
    name: "Professional Package",
    price: "$125",
    duration: "3 Sessions",
    description: "Best for interview prep and comprehensive career development",
    features: [
      "3 hours of 1-on-1 mentorship",
      "Interview preparation & mock interviews",
      "Resume & LinkedIn optimization",
      "Ongoing support via email",
      "Priority scheduling"
    ],
    popular: true,
    color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    hoverShadow: "hover:shadow-purple-500/30"
  },
  {
    id: "elite",
    name: "Elite Mentorship",
    price: "$250",
    duration: "6 Sessions",
    description: "Complete transformation package for serious career growth",
    features: [
      "6 hours of personalized mentorship",
      "Comprehensive interview preparation",
      "Multiple resume & portfolio reviews",
      "Coding practice & technical guidance",
      "Direct access via messaging",
      "Personal branding strategy"
    ],
    popular: false,
    color: "bg-gradient-to-br from-purple-500 to-pink-600",
    hoverShadow: "hover:shadow-pink-500/30"
  }
];
