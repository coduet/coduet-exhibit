import React from "react";
import { TfiThought } from "react-icons/tfi";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { PiChats } from "react-icons/pi";
import defaultProjectImage from "@/public/codeicon.png";

export const defaultProjectSrc  = defaultProjectImage;
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    company:"Thoughtworks",
    location: "Bengaluru, India",
    description:
      "Developing and maintaining LVS, a legal verification system for loan allocation. My stack includes Java, Spring boot, MongoDb and Redis.",
    icon: React.createElement(TfiThought),
    date: "September, 2023 - present",
  },
  {
    title: "Senior Software Engineer",
    company:"LeadSquared",
    location: "Bengaluru, India",
    description:
      "Developed and maintained Converse, an multi-channel (whatsApp, sms,chatbot) messaging application for boosting sales agent productivity.",
    icon: React.createElement(PiChats),
    date: "April, 2021 - August, 2023",
  },
  {
    title: "Software Engineer",
    company:"Nagarro",
    location: "Gurgaon, India",
    description:
      "Developed multiple projects for a client, which was one of the largest aviation company in the world.",
    icon: React.createElement(PiAirplaneTakeoff),
    date: "July 2019 - March 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Expense Manager",
    description:
      "A backend application featuring APIs designed to empower seamless financial organization and planning. ",
    tags: ["Java", "Spring Boot", "DynamoDb"],
    imageUrl: "",
  },
  {
    title: "Reimbursement Portal ",
    description:
      "Web application to help employees settle reimbursement claims. The application enables employees and admins to receive notifications, add comments etc.",
    tags: ["Java", "Spring Boot", "SQL","React"],
    imageUrl: "",
  },
] as const;

export const skillsData = [
  "Java",
  "C#",
  "Spring boot", 
  "ElasticSearch",
  "SQL",
  "Redis",
  "DynamoDb",
  "MongoDb",
  "AWS",
  "TypeScript", 
  "React",  
  "Git",
] as const;