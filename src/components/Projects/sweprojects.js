
import Globe from '../../assets/globe.png'
import Bash from '../../assets/bash.png'
import Assembly from '../../assets/assembly.jpg'
import Compiler from '../../assets/compiler.png'
import Football from '../../assets/football.png'
import Logo from '../../assets/logo.png'

export const swe_projects = [
  // Want to add github link for oCEANIC
  {
    image: Football,
    href: "http://localhost:3000/",
    linkPreview: "source.app",
    title: "WalkOff Fantasy",
    description:
      "A startup dedicated to improving the fantasy sports ecosystem through AI. Github goes live on 12/17/2024!",
    color: "group-hover:text-sky-500",
    bg: "bg-gradient-to-tr from-white to-sky-500 shadow-violet-500/20",
    tags: ["Golang", "NextJS", "Typescript", "Tensorflow", "MongoDB"],
  },
  {
    image: Logo,
    href: "https://github.com/Connor-Underwood/Portfolio",
    linkPreview: "portfolio.app",
    title: "Portfolio Website",
    description:
      "My own portfolio website built in ReactJS! One-stop shop to learn all about me.",
    color: "group-hover:text-sky-500",
    bg: "bg-gradient-to-tr from-white to-sky-500 shadow-violet-500/20",
    tags: ["ReactJS", "Javascript"],
  },
  {
    image: Compiler,
    href: "https://github.com/Connor-Underwood/NaiveC_Compiler",
    linkPreview: "c-compiler.app",
    title: "C Language Compiler",
    description:
      "A simple C compiler built to compile a subset of the entire C language.",
    color: "group-hover:text-yellow-500",
    bg: "bg-gradient-to-tr from-yellow-200 to-rose-300 shadow-rose-300/20",
    tags: ["C/C++", "Lex", "Yacc"],
  },
  {
    image: Globe,
    href: "https://tailor-talent.vercel.app/",
    linkPreview: "tailor-talent.app",
    title: "Tailor Talent",
    description:
      "A website designed to tailor your resume given a set of job requirements. Powered by the GPT-4 LLM.",
    color: "group-hover:text-blue-500",
    bg: "bg-gradient-to-tr from-blue-300 to-blue-500 shadow-blue-500/20",
    tags: ["ReactJS", "ExpressJS", "OpenAI"],
  },
  {
    image: Bash,
    href: "https://github.com/Connor-Underwood/CustomShell",
    linkPreview: "custom-shell.app",
    title: "Custom Shell",
    description:
      "Bash-like emulator for the UNIX environment built in C/C++. Input parsed through Lex & Yacc.",
    color: "group-hover:text-sky-500",
    bg: "bg-gradient-to-tr from-sky-300 to-sky-500 shadow-sky-500/40",
    tags: ["C/C++", "Lex", "Yacc", "Unix"],
  },
  {
    image: Assembly,
    href: "https://github.com/Connor-Underwood/AssemblyHashTable",
    linkPreview: "assembly-hash.app",
    title: "x86-64 AT&T Assembly Hash Table",
    description:
      "A separate-chaining hash table built & optimized in x86-64 AT&T Assembly language",
    color: "group-hover:text-emerald-500",
    bg: "bg-gradient-to-tr from-emerald-500 to-indigo-500 shadow-emerald-500/20",
    tags: ["C/C++", "x86-64 AT&T Assembly"],
  },
];
