import { Approach } from "@/components/approach";
import { Clients } from "@/components/clients";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { Hero2 } from "@/components/hero2";
import { twMerge } from "tailwind-merge";
import { Spotlight } from "../components/ui/spotlight"
import { RecentProjects } from "@/components/recent-projects";
import { FloatingDock } from "@/components/ui/floating-dock";

import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandInstagram,
  IconCapProjecting,
  IconQuestionMark
} from "@tabler/icons-react";

const MainPage = () => {
  return (


    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <div className="
       fixed 
    top-5 
    right-5 
    left-auto 
    flex 
    items-center 
    justify-end 
    z-[999] 
    w-auto

    sm:bottom-5 
    sm:left-0 
    sm:right-0 
    sm:justify-center 
    sm:w-full 
    sm:top-auto
  
  "
      >
        <FloatingDock
          items={[
            { title: "WebDeck", icon: <IconHome />, href: "#about" },
            { title: "Projets", icon: <IconNewSection />, href: "#projects" },
            { title: "Témoignages", icon: <IconCapProjecting />, href: "#testimonials" },
            { title: "Contact", icon: < IconQuestionMark />, href: "#contact" },
            { title: "Instagram", icon: <IconBrandInstagram />, href: "https://www.instagram.com/webdeck67/" },
          ]}
        />
      </div>


      <Hero />

      <Approach />
      <div className="w-full max-w-7xl">

        <Grid />
        <Experience />
        <RecentProjects />
        <div>
          <Spotlight
            className="pointer-events-none left-full -top-43 h-screen md:-left-32 md:-top-20"
            fill="white"
          />
          <Spotlight
            className="pointer-events-none left-full top-105 h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight className=" pointer-events-none left-800 top-28 h-[80vh] w-[50vw]" fill="blue" />


          <Clients />
        </div>


        <Footer />

      </div>


    </main >

  );
};

export default MainPage;
