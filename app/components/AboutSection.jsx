"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>TypeScript</li>
        <li>PHP: Laravel</li>
        <li>JavaScript: React, Next.js</li>
        <li>HTML/CSS: Bootstrap, Tailwind</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>Superset</li>
        <li>Git</li>
        <li>postman</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-item pl-2">
        <li>Bachelor Degree (2012-2015)</li>
        <p>
          Bachelor of Science Programmer in Computer Science (Computer Science)
        </p>
        <p>
          King Mongkut&apos;s Institute of Technology Ladkrabang(KMITL) Bangkok
          Thailand.
        </p>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Begining Ubuntu Server Administrator</li>
        <li>Artificial Intelligence: AI</li>
        <li>Hands-on with python programming labs</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-18">
        <Image src="/images/work5.jpg" alt="work" width={600} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Aspiring to secure a challenging senior programming role, where I
            can leverage my extensive expertise and experience to efficiently
            lead the development of complex projects with a commitment to
            excellence. Eager to contribute my knowledge and skills to enhance
            organizational productivity and deliver high-quality results.
          </p>
          <div className="flex flex-row mt-8 justify-start lg:text-xl">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 lg:text-base">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
