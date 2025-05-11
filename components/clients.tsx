import Image from "next/image";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

export const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Des mots de nos <span className="text-purple">clients satisfaits</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[50vh] flex-col items-center justify-center  overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>


      </div>
    </section>
  );
};
