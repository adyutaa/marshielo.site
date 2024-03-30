"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import robot from "@/public/images/robot.png";

export default function Home() {
  return (
    <section className="flex w-full h-screen flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-screen-lg flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[62px] font-bold text-black dark:text-white`}
            >
              Hi, I'm Marshielo, a Software Engineer.
            </span>
            <p className="pb-2 font-medium">
              Dedicated software developer from Yogyakarta, Indonesia.
              Passionate about learning and problem-solving, with a focus on Machine Learning, AI, and iOS Development.
              currently studying Machine Learning in the 2024 cohort of Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka.
            </p>

            <div className="">
              <Button size="xl" className="w-full font-bold" variant="brand">
                <a
                  href="https://github.com/lucky-chap/kaminari"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 dark:text-zinc-800 text-zinc-100"
                >
                  Repo
                </a>{" "}
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>
    </section>
  );
}
