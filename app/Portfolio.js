"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Briefcase,
  Code,
  ChevronRight,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";

const skills = {
  frontend: [
    "React.js",
    "JavaScript",
    "TypeScript",
    "jQuery",
    "Redux",
    "Redux Toolkit",
    "Jest",
    "Bootstrap",
    "HTML5",
    "CSS",
  ],
  backend: ["C#", "ASP.NET Core", ".NET Core Web API", "RESTful Services"],
  tools: [
    "Visual Studio Code",
    "Visual Studio",
    "SQL Server Management Studio",
    "Git",
    "SOLID Principles",
    "Performance Optimization",
    "Agile Methodology",
  ],
};

const experience = [
  {
    company: "Innova Solutions",
    role: "Associate Software Engineer",
    period: "June 2022 - Present",
    location: "Hyderabad, India",
    achievements: [
      "Spearheaded development of Subitup, implementing complex reporting features",
      "Reduced application load times by 40% through React best practices",
      "Designed RESTful APIs using ASP.NET Web API",
      "Led frontend development for Delivery Management Dashboard",
      "Contributed to Lync OMS project",
      "Conducted knowledge sharing sessions",
    ],
  },
];

const projects = [
  {
    title: "Subitup Workforce Management Platform",
    period: "Dec 2023 - Present",
    role: "Frontend Developer",
    tech: ["React", "JavaScript", "Redux", "ASP.NET Web API"],
    details: [
      "Led frontend development of reporting module with import/export capabilities",
      "Implemented performance optimizations resulting in improved user experience",
      "Created new feature pages for various types of reports",
    ],
  },
  {
    title: "Delivery Management Dashboard",
    period: "Feb 2023 - Dec 2023",
    role: "Frontend Developer",
    tech: ["React", "JavaScript", "Redux", "Bootstrap"],
    details: [
      "Architected and implemented SSO authentication and core UI components",
      "Created reusable React components and integrated state management using Redux",
      "Improved development efficiency by 30% through component optimization",
    ],
  },
  {
    title: "Lync Order Management System",
    period: "Sep 2022 - Jan 2023",
    role: "Frontend Developer",
    tech: ["React", "JavaScript", "jQuery", "Bootstrap"],
    details: [
      "Developed customer-invoice module and implemented React Router",
      "Created responsive interfaces using Bootstrap and modern CSS practices",
      "Implemented compatibility updates for new functionalities",
    ],
  },
];

const about = {
  title: "Software Developer",
  description:
    "Experienced in React.js and .NET technologies with a proven track record of delivering responsive web applications, implementing efficient state management solutions, and optimizing application performance. Strong collaborator with cross-functional teams and dedicated to delivering high-quality solutions.",
};

const Portfolio = () => {
  const [showDetail, setShowDetail] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  const handleIconClick = (type) => {
    setShowDetail((prev) => (prev === type ? null : type)); // Toggle functionality
  };

  const handleRedirect = (type) => {
    if (type === "email") {
      window.location.href = "mailto:bakka.12.anudeep@gmail.com";
    } else if (type === "linkedin") {
      window.location.href = "https://linkedin.com/in/anudeep-bakka-1595b5169/";
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-8 relative">
      {/* Navbar */}
      <div
        className={`absolute top-4 right-4 flex flex-col space-y-4 text-cyan-200 md:flex ${navOpen ? "block" : "hidden"}`}
      >
        <button onClick={() => scrollToSection("about")} className="hover:text-cyan-400">About</button>
        <button onClick={() => scrollToSection("skills")} className="hover:text-cyan-400">Skills</button>
        <button onClick={() => scrollToSection("experience")} className="hover:text-cyan-400">Experience</button>
        <button onClick={() => scrollToSection("projects")} className="hover:text-cyan-400">Projects</button>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-16 animate-fade-in flex flex-col md:flex-row items-center">
        {/* Profile Image on the left */}
        <div className="flex-none w-48 h-48 rounded-sm overflow-hidden mr-8 border-4 border-cyan-300 mb-6 md:mb-0">
          <img src="profileimg.png" alt="Profile Picture" className="object-cover w-full h-full" />
        </div>

        {/* Text content on the right */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 mb-4">
            {about.title}
          </h1>
          <p className="text-lg text-cyan-100 mb-6">{about.description}</p>
          <div className="flex space-x-6 items-center text-cyan-200">
            {/* Email Icon */}
            <div onClick={() => handleIconClick("email")} className="cursor-pointer hover:text-cyan-400 flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              {showDetail === "email" && <p onClick={() => handleRedirect("email")} className="text-cyan-400 cursor-pointer">bakka.12.anudeep@gmail.com</p>}
            </div>

            {/* Phone Icon */}
            <div onClick={() => handleIconClick("phone")} className="cursor-pointer hover:text-cyan-400 flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              {showDetail === "phone" && <p onClick={() => handleRedirect("phone")} className="text-cyan-400 cursor-pointer">+91 9290083400</p>}
            </div>

            {/* LinkedIn Icon */}
            <div onClick={() => handleIconClick("linkedin")} className="cursor-pointer hover:text-cyan-400 flex items-center">
              <Linkedin className="w-6 h-6 mr-2" />
              {showDetail === "linkedin" && <p onClick={() => handleRedirect("linkedin")} className="text-cyan-400 cursor-pointer">linkedin.com/in/anudeep-bakka-1595b5169/</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto mb-16 animate-fade-in">
        <h2 className="text-3xl font-bold mb-8 flex items-center text-cyan-200">
          <Code className="mr-2" /> Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Card key={category} className="bg-slate-800/40 backdrop-blur border-slate-700/50 transform transition-all duration-300 hover:scale-105 hover:bg-slate-800/60" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <CardTitle className="capitalize text-xl text-cyan-100">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 transition-colors duration-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto mb-16 animate-fade-in">
        <h2 className="text-3xl font-bold mb-8 flex items-center text-cyan-200">
          <Briefcase className="mr-2" /> Experience
        </h2>
        {experience.map((exp, index) => (
          <Card key={index} className="mb-6 bg-slate-800/40 backdrop-blur border-slate-700/50 transform transition-all duration-300 hover:translate-x-2 hover:bg-slate-800/60" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-cyan-100">{exp.company}</CardTitle>
                  <p className="text-cyan-300">{exp.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-cyan-300">{exp.period}</p>
                  <p className="text-cyan-400/70">{exp.location}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start group">
                    <ChevronRight className="w-4 h-4 mt-1 mr-2 text-cyan-400 transition-transform duration-200 group-hover:translate-x-1" />
                    <span className="text-cyan-100">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto animate-fade-in">
        <h2 className="text-3xl font-bold mb-8 flex items-center text-cyan-200">
          <Calendar className="mr-2" /> Projects
        </h2>
        {projects.map((proj, index) => (
          <Card key={index} className="mb-6 bg-slate-800/40 backdrop-blur border-slate-700/50 transform transition-all duration-300 hover:scale-105 hover:bg-slate-800/60" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-cyan-100">{proj.title}</CardTitle>
                  <p className="text-cyan-300">{proj.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-cyan-300">{proj.period}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {proj.details.map((detail, i) => (
                  <li key={i} className="flex items-start group">
                    <ChevronRight className="w-4 h-4 mt-1 mr-2 text-cyan-400 transition-transform duration-200 group-hover:translate-x-1" />
                    <span className="text-cyan-100">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
