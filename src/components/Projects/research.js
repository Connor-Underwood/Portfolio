import oCEANIC from '../../assets/oCEANIC.png'
import Purdue from '../../assets/purdue.png'
export const research = [
    {
        image: oCEANIC,
        href: "https://projectoceanic.substack.com/",
        linkPreview: "project-oceanic.com",
        title: "Project oCEANIC",
        description:
          "Developed a computational maritime model as part of a R&D internship in Hawai'i.",
        color: "group-hover:text-sky-500",
        bg: "bg-gradient-to-tr from-white to-sky-500 shadow-violet-500/20",
        tags: ["Python", "NextJS", "Flask"],
      },
      {
        image: Purdue,
        href: "https://jasonwarephd.com/engagement.html",
        linkPreview: "housing-research.app",
        title: "City of Lafayette: Affordable Housing",
        description:
          "Research project aimed to identify key drivers in resident transciency -- specifically in local Lafayette neighborhoods",
        color: "group-hover:text-violet-500",
        bg: "bg-gradient-to-tr from-violet-300 to-violet-500 shadow-violet-500/20",
        tags: ["Python", "Pandas", "Selenium"],
      }
]
