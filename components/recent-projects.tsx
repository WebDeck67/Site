'use client'; // Add this at the top if using a separate component

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export const RecentProjects = () => {
  return (
    <BackgroundLines className="-z-10">
      <section id="projects" className="py-20">
        <h1 className="heading">
          Une petite sélection de{" "}
          <span className="text-purple">projets récents</span>
        </h1>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
          {projects.map(
            ({ id, des, img, link, sourceCode, title }) => (
              <div
                key={id}
                className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
              >
                <PinContainer title="Visiter" href={link}>
                  <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                    <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                      <Image
                        height={330}
                        width={552}
                        src="/bg.png"
                        alt="image de fond"
                      />
                    </div>

                    <Image
                      height={300}
                      width={464}
                      src={img}
                      alt={title}
                      className="absolute bottom-0 z-10"
                    />
                  </div>

                  <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                    {title}
                  </h1>

                  <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                    {des}
                  </p>

                  <div className="mb-3 mt-7 flex items-center justify-between">


                    <div className="flex items-center justify-center">
                      <Link
                        href={sourceCode}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex text-sm text-purple md:text-xs lg:text-xl"
                      >
                        Lien de la boutique                      </Link>

                      <FaLocationArrow className="ms-3" color="#cbacf9" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            )
          )}
        </div>
      </section>
    </BackgroundLines>
  );
};
