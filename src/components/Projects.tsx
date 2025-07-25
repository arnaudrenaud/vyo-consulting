/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ButtonLink from "./ButtonLink";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ALL_PROJECTS_QUERYResult } from "@/sanity/types";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { NextArrow, PrevArrow } from "./CustomArrow";

const Projects = ({ projects }: { projects: ALL_PROJECTS_QUERYResult }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Permet de n'afficher le slider qu'après le montage côté client
    setMounted(true);
  }, []);

  const settings = {
    dots: false,
    // dotsClass: isChrome ? "before:scale-[0.8]" : undefined,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (!mounted) return null;

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center pb-6">
          <div className="inline-block relative">
            <h2 className="font-light text-5xl max-md:text-3xl">Nos projets</h2>
            <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
              <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
              <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
            </div>
          </div>
          <p className="text-center mt-8">
            VYO Consulting transforme vos enjeux métiers en
            <br />
            <span className="font-bold">solutions sur mesure et durables.</span>
          </p>
        </div>
        <div className="w-full max-w-screen-lg px-4">
          <Slider {...settings}>
            {projects.slice(0, 6).map((project) => (
              <ProjectCard project={project} key={project._id} />
            ))}
          </Slider>
        </div>

        <div className="mt-12 flex justify-center text-sm">
          <ButtonLink href="/projects" text="Voir tous nos projets" />
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>
    </>
  );
};

export default Projects;
