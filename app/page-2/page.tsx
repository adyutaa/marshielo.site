"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import manWIthRobot from "@/public/images/man-with-robot.png";

export default function Home() {
  return (
    <section className="flex w-full h-screen flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-screen-md flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              Tech Stack
            </span>
            <p className="pb-8  font-medium">
              tech stack that i mainly used or experienced with.
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
