/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import ButtonLink from "./ButtonLink";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ALL_PROJECTS_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { RichContent } from "@/components/utils/RichContent";
import { PATHS, SEARCH_PARAMS } from "@/helpers/constants";
import { getSolutionThemeColor } from "@/helpers/functions";

const Projects = ({ projects }: { projects: ALL_PROJECTS_QUERYResult }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Permet de n'afficher le slider qu'après le montage côté client
    setMounted(true);
  }, []);

  const settings = {
    dots: false,
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
              <div
                key={project._id}
                className={`bg-white rounded-2xl border-1 border-accent shadow-[3px_3px] ${getSolutionThemeColor(project.expertises[0].slug).background} w-[95%]! ml-[10px]! px-4 py-8 max-md:px-8`}
              >
                <div className="relative">
                  <img
                    src="/icones/projets-1.png"
                    alt={`projet ${project.shortTitle}`}
                  />
                  {/* <img src={`/icones/projets-${n}.png`} alt={`projet ${n}`} /> */}
                  <p className="absolute top-2.5 left-2.5 text-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.25)] bg-white px-4 rounded-2xl py-1">
                    {project.expertises.map((expertise) => (
                      <img
                        key={expertise._id}
                        src={urlFor(expertise.logo).url()}
                        alt={`Logo vyo.${expertise.name}`}
                      />
                    ))}
                  </p>
                </div>
                <div className="flex items-center mt-6 mb-3">
                  <img
                    className="h-6 mr-[0.33rem]"
                    src="/icones/folder-open.png"
                    alt="folder open"
                  />
                  <h4 className="font-semibold">{project.shortTitle}</h4>
                </div>
                <p className="text-sm">
                  <RichContent value={project.shortDescription} />
                </p>
                <Link
                  href={`${PATHS.PROJECTS}?${SEARCH_PARAMS.PROJECT_ID}=${project._id}`}
                  className="flex items-center text-xs font-medium mt-4"
                >
                  Voir plus
                  <img
                    src="/icones/ArrowRight.png"
                    alt="ArrowRight"
                    className="w-[16px] ml-2"
                  />
                </Link>
              </div>
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
