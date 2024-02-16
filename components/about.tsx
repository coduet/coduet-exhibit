"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About");

    return(
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                I got my {" "}
                <span className="font-medium">Computer Science</span> degree in 2019, and ever since, 
                I've been riding the development wave with full gusto.  
                <span className="italic">What really lights my coding fire? </span> 
                The buzz of problem-solving.There's this awesome high when you crack the code to a challenging problem 
                — it's like finding the perfect piece to complete a puzzle.
            </p>

            <p>
                My core stack revolves around{" "}
                <span className="font-medium">
                Java, Spring Boot, and SQL
                </span>
                . I've also used TypeScript, C#, React, MongoDB, Elasticsearch, and Redis. 
                The dynamic nature of technology keeps me eager to explore and learn new tools and frameworks.
            </p>

            <p>
                Outside the coding realm, I find joy in watching and playing football. Additionally,
                I have a keen interest in broadening my knowledge horizons and currently indulge in reading finance and self-help books.
            </p>
        </motion.section>
    )
}