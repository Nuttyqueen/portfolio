"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
/* import { motion, useInView } from "framer-motion"; */

const projectsData = [
  {
    id: 1,
    title: "React InFo3D LCPY",
    description: "Project 1 Chao Phraya Basin water situation",
    image: "/images/w1.png",
    tag: ["All", "REACT"],
    gitUrl: "/",
    previewUrl: "https://wapt-dev.onwr.go.th/info/basin/lcpy",
  },
  {
    id: 2,
    title: "React InFo3D EEC",
    description: "Project 2 Situation of water resources in the eastern region",
    image: "/images/w2.png",
    tag: ["All", "REACT"],
    gitUrl: "/",
    previewUrl: "https://wapt-dev.onwr.go.th/info/water-resource/eec",
  },
  {
    id: 3,
    title: "Support Service",
    description: "Project 3 Support Service",
    image: "/images/w15.png",
    tag: ["All", "REACT"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Car Booking",
    description: "Project 4 Reserve a vehicle",
    image: "/images/w3.png",
    tag: ["All", "LARAVEL"],
    gitUrl: "/",
    previewUrl: "https://car-booking.onwr.go.th/admin/login",
  },
  {
    id: 5,
    title: "Meeting",
    description: "Project 5 Reserve a meeting room",
    image: "/images/w4.png",
    tag: ["All", "LARAVEL"],
    gitUrl: "/",
    previewUrl: "https://meeting.onwr.go.th/login",
  },
  {
    id: 6,
    title: "E-meeting",
    description:
      "Project 6 Meeting room booking support system for administrators",
    image: "/images/w5.png",
    tag: ["All", "LARAVEL"],
    gitUrl: "/",
    previewUrl: "https://e-meeting.onwr.go.th/",
  },
  {
    id: 7,
    title: "ICT Asset",
    description: "Project 7 Manage computer equipment",
    image: "/images/w6.png",
    tag: ["All", "LARAVEL"],
    gitUrl: "/",
    previewUrl: "https://ict-asset.onwr.go.th/login",
  },
  {
    id: 8,
    title: "Water Card",
    description: "Project 8 Water management card",
    image: "/images/w7.png",
    tag: ["All", "LARAVEL"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "LAD ONWR",
    description: "Project 9 LAD wordpress",
    image: "/images/w9.jpg",
    tag: ["All", "WORDPRESS"],
    gitUrl: "/",
    previewUrl: "https://lad.onwr.go.th/",
  },
  {
    id: 10,
    title: "ICT ONWR",
    description: "Project 10 ICT wordpress",
    image: "/images/w8.jpg",
    tag: ["All", "WORDPRESS"],
    gitUrl: "/",
    previewUrl: "https://e-meeting.onwr.go.th/",
  },
  {
    id: 11,
    title: "FAD ONWR",
    description: "Project 11 FAD wordpress",
    image: "/images/w10.jpg",
    tag: ["All", "WORDPRESS"],
    gitUrl: "/",
    previewUrl: "https://fad.onwr.go.th/",
  },
  {
    id: 12,
    title: "SNWRC ONWR",
    description: "Project 12 SNWRC wordpress",
    image: "/images/w11.jpg",
    tag: ["All", "WORDPRESS"],
    gitUrl: "/",
    previewUrl: "https://snwrc.onwr.go.th/",
  },
  {
    id: 13,
    title: "Superset computer equipment 1",
    description: "Project 13 computer equipment 1",
    image: "/images/w12.png",
    tag: ["All", "OTHER"],
    gitUrl: "/",
    previewUrl:
      "http://superset.onwr.go.th/superset/dashboard/20/?native_filters_key=wPZ70S7DACsk9fjttioXu9194FBsxzcC0a2ebAXFW1tRBAPvHFx9tZ_2SEPgf8pt",
  },
  {
    id: 14,
    title: "Superset computer equipment 2",
    description: "Project 14 computer equipment 2",
    image: "/images/w13.png",
    tag: ["All", "OTHER"],
    gitUrl: "/",
    previewUrl:
      "http://superset.onwr.go.th/superset/dashboard/19/?native_filters_key=nRl9rYqR-xttANxg8krucMO4LQPWgUzePlS3g1aLGBIdtScIxHQEjrFvBWfqPgVR",
  },
  {
    id: 15,
    title: "Superset Meet",
    description: "Project 15 Meet",
    image: "/images/w14.png",
    tag: ["All", "OTHER"],
    gitUrl: "/",
    previewUrl:
      "http://superset.onwr.go.th/superset/dashboard/18/?native_filters_key=RG8HuutYjGcTKoSELqY_HO03QaCtdSWkcVhemVDyByKDBEkJQTtUnGGPHFeP7iDh",
  },
  {
    id: 16,
    title: "Sequence diagram",
    description: "Project 16 Sequence diagram ",
    image: "/images/w15.jpg",
    tag: ["All", "OTHER"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 ">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="REACT"
          isSelected={tag === "REACT"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="LARAVEL"
          isSelected={tag === "LARAVEL"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="WORDPRESS"
          isSelected={tag === "WORDPRESS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="OTHER"
          isSelected={tag === "OTHER"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
