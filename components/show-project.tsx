import React from "react";
import { PinContainer } from "./ui/3d-pin";
import projectList from "@/lib/sampleProjects.json";
import Image from "next/image";

const MyProjects = () => {
  return (
    <section id="projects" className="text-white bg-gray-900 body-font">
      <div className="container px-5 py-5 mt-5 mx-auto">
        <div className="flex flex-col w-full">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              These are my projects
            </h1>
            <div
              style={{ borderBottom: "6px double yellow" }}
              className="h-1 w-[19rem] rounded"
            />
          </div>
          <p className="lg:w-1/2 my-4 w-full leading-relaxed text-white">
            I have developed various projects in which I have used frameworks
            like Next.js, React.js, Node, HTML, CSS, JavaScript, TypeScript,
            TailwindCSS, and more. Here are some projects to showcase.
          </p>
        </div>
      </div>

      <div className="container mx-auto md:flex justify-center flex-wrap">
        {projectList.map((items, index) => (
          <div
            key={index}
            className="h-[40rem] flex items-center justify-center"
          >
            <PinContainer
              title={`${items.title}`}
              href={`/projects/${items.Id}`}
              className="mt-5"
            >
              <div className="rounded-xlg">
                <Image
                  className="h-[12rem]"
                  src={items.image}
                  alt="Project Images"
                  width={500}
                  height={600}
                />
              </div>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {items.projectName}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-200">{items.description}</span>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};
export default MyProjects;
