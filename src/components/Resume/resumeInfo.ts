type SectionItem = {
    title: string,
    position?: string,
    location?: string,
    startDate?: string,
    endDate?: string,
    bullets: string[]
}

type ResumeSection = {
    title: string,
    items: SectionItem[]
}
export const resumeInfo: ResumeSection[] = [
    {
        title: "Experience",
        items: [
            {
                title: "National Transportation Consultants",
                position: "Intern",
                location: "Fishers, IN",
                startDate: "June 2023",
                endDate: "August 2023",
                bullets: [
                    "Worked with CEO to develop AI model to expedite processing of client data.",
                    "Coordinated with software development team to integrate model into the company's operations."
                ]
            },
            {
                title: "Primary Record",
                position: "Intern",
                location: "Fishers, IN",
                startDate: "June 2022",
                endDate: "August 2022",
                bullets: [
                    "Worked with company founders to develop an AI web app to detect and categorize text on prescription labels.",
                    "Used as a feature in the company's main app."
                ]
            }
        ]
    },
    {
        title: "Projects",
        items: [
            {
                title: "Computing Environmental Adaptation and Navigation in Island Communities",
                startDate: "January 2024",
                endDate: "May 2024",
                bullets: [
                    "Research project under Dr. Katie Jarriel at Purdue University",
                    "Developing quantitative computer models of archaeological and paleoclimate data",
                    "Results to be presented at a research conference in Hawaii during May 2024"
                ]
            },
            {
                title: "Analysis of Online HPV Vaccine Hesitancy",
                startDate: "September 2023",
                endDate: "Present",
                bullets: [
                    "Research project under Dr. Soo Jung Jo at Purdue University and Dr. Min Sook Park at UWM",
                    "Using Python to collect data via Reddit's API from HPV-related subreddits"
                ]
            },
            {
                title: "Boilerexams",
                startDate: "September 2023",
                endDate: "Present",
                bullets: [
                    "Student-ran website that provides a platform which over 4000 Purdue students use to study for their exams",
                    "Part of the frontend website development team",
                    "Implemented the “Resources” page, which provides a list of helpful resources for a given course"
                ]
            },
            {
                title: "Lightning and Wildfires",
                startDate: "August 2022",
                endDate: "May 2023",
                bullets: [
                    "Machine learning project that analyzes satellite imagery to predict whether a lightning strike will cause a fire.",
                    "Group project for the ML@Purdue club",
                    "Leader of the machine learning team, using PyTorch to create a machine learning model."
                ]
            },
            {
                title: "Incentiva",
                startDate: "March 2021",
                endDate: "September 2021",
                bullets: [
                    "Task manager website with built-in AI that assesses what type of task makes you the happiest.",
                    "Integrated features such as a Pomodoro timer and a rich text editor for note-taking with OCR capabilities.",
                    "Won the Congressional App Challenge and was a finalist in the Community AI Fair Hackathon."
                ]
            }
        ]
    },
    {
        title: "Technologies",
        items: [
            {
                title: "Languages",
                bullets: [
                    "Python, Java, C, C++, JavaScript, TypeScript"
                ]
            },
            {
                title: "Machine Learning",
                bullets: [
                    "Tensorflow, PyTorch, Scikit-Learn, NumPy, Pandas"
                ]
            },
            {
                title: "Website Development",
                bullets: [
                    "React JS, Next JS, Tailwind CSS, Prisma, Postgres, MongoDB"
                ]
            },
            {
                title: "Platforms",
                bullets: [
                    "Google Cloud Platform, Microsoft Azure"
                ]
            }
        ]
    },
    {
        title: "Education",
        items: [
            {
                title: "Purdue University",
                startDate: "August 2022",
                endDate: "Present",
                bullets: [
                    "Degree Candidate: Computer Science (expected Spring 2026), GPA: 3.93",
                    "Relevant Coursework: Java Programming, Linear Algebra, C Programming, Statistics, Data Structures & Algorithms, Computer Architecture"
                ]
            }
        ]
    }
]