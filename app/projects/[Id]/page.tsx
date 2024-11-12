"use client";
import { useParams } from "next/navigation";
import projectList from "@/lib/sampleProjects.json";
import { FaGithub } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { HiLink } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";

const ProjectDetail = () => {

  const { Id } = useParams();

  const projectId = Id ? Id: undefined;
  
  // Find the project based on the ID, if projectId is a valid number
  const project = projectList.find((item) => item.Id === projectId);

  if (!project) {
    return (
      <p className="text-center relative top-48 bottom-52">
        Project not found.
      </p>
    );
  }

  return (
    <section className="text-white body-font">
      <Spotlight
        className="-top-40 left-0 md:left-[28rem] md:-top-[2rem]"
        fill="white"
      />
      <div className="container relative z-50 mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-2 object-cover object-center rounded-lg"
          alt="Project pic"
          src={project.image}
          width={700}
          height={800}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4  text-white">
            {project.projectName}
          </h1>
          <div
            style={{ borderBottom: "4px double yellow", marginTop: "5px" }}
          />
          <p className="mb-8 text-xl leading-relaxed">{project.description}</p>
          <div className="flex justify-center  gap-2">
            <Link href={project.weburl} target="_blank">
              <button className="relative z-50 inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-1 rounded-full bg-slate-950 py-1 px-7 text-sm font-medium text-white backdrop-blur-3xl">
                  <b> Visit Web </b> <HiLink className="sm:text-xl" />
                </span>
              </button>
            </Link>
            <Link href={project.github} target="_blank">
              <button className="relative z-50 inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-1 rounded-full bg-slate-950 py-1 px-7 text-sm font-medium text-white backdrop-blur-3xl">
                  <b> Source Code</b> <FaGithub className="sm:text-xl" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <Link
          className="py-3 flex items-center gap-1 text-xl text-yellow-500"
          href={"/"}
        >
          <p> Go to Home Page </p> <GrLinkNext className="mt-1" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetail;
