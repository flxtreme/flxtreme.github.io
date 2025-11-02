"use client";

import { useProjects } from "@/app/(shared)/hooks/useProjects";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import Slider, { Settings } from "react-slick";

export default function HomeXP() {
  const { projects, showPrivate, setShowPrivate } = useProjects();
  const sliderRef = useRef<Slider>(null);
  const [ready, setReady] = useState(false); // trigger re-render on mount

  const settings: Settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  // Force recalculation on mount (fixes mobile issue)
  useEffect(() => {
    setReady(true);
  }, []);

  // Optional: reset slider on resize
  useEffect(() => {
    const resizeHandler = () => sliderRef.current?.slickGoTo(0);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <section id="projects" className="relative">
      <div className={cn("container-height px-0! flex flex-col justify-center items-stretch")}>
        <div className="container mb-8 px-6">
          <h1 className="title-text mb-4 lg:mb-6">Projects</h1>
          <p className="sub-desc-text max-w-2xl opacity-50">
            Some of my featured works — internal tools, client apps, and experiments.
          </p>

          <div className="mt-6 text-base dark:text-slate-300 flex items-start justify-between gap-2">
            <div className="inline-flex items-center gap-2 flex-wrap"></div>
            <div className="flex items-center gap-4 min-w-72 justify-end">
              <span className="text-sm font-medium">Internal projects:</span>
              <button
                onClick={() => setShowPrivate(!showPrivate)}
                className="flex items-center gap-2 h-8 px-4 text-xs font-medium bg-linear-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 dark:from-purple-500 dark:to-purple-600 dark:hover:from-purple-600 dark:hover:to-purple-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {showPrivate ? (
                  <>
                    <FiEyeOff className="text-base" />
                    Hide
                  </>
                ) : (
                  <>
                    <FiEye className="text-base" />
                    Show
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {ready && (
          <Slider {...settings} ref={sliderRef} className="m-0!">
            {projects.map((project, index) => (
              <div key={index} className="p-2 xl:p-4">
                <div
                  className={cn(
                    "relative w-full h-56 lg:h-60 xl:h-80 bg-slate-100 dark:bg-slate-800 overflow-hidden group transition-all duration-500 rounded-2xl",
                    !project.private && "cursor-pointer"
                  )}
                >
                  {project.private ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300">
                      <div className="relative">
                        <FiLock className="text-6xl mb-4 opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                        <div className="absolute inset-0 blur-xl bg-orange-400/20 dark:bg-purple-400/20 animate-pulse" />
                      </div>
                      <p className="text-sm font-medium opacity-50 px-4 text-center">
                        Restricted Preview
                      </p>
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    </>
                  )}

                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-all duration-500 flex flex-col justify-end p-5 text-white">
                    {project.private && (
                      <div className="absolute right-4 top-4 px-3 py-1.5 bg-orange-500/90 dark:bg-purple-500/90 backdrop-blur-sm rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                        <FiLock className="text-sm" />
                        Internal
                      </div>
                    )}

                    <h3 className="text-xl font-bold mb-2 tracking-tight drop-shadow-lg">{project.title}</h3>

                    <p className="text-sm mb-4 opacity-90 line-clamp-2 leading-relaxed">{project.description}</p>

                    {project.stacks && (
                      <div className="flex flex-wrap gap-1">
                        {project.stacks.map((stack, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-white/15 backdrop-blur-sm border border-white/30 text-[10px] font-semibold tracking-wider rounded-full hover:bg-white/25 transition-colors duration-300"
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {!project.private && (
                    <div className="absolute inset-0 bg-black/30 group-hover:backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <button
                        onClick={() => project.url && window.open(project.url, "_blank")}
                        className="text-white hover:bg-white/20 text-center transform h-10 px-4 translate-y-4 group-hover:translate-y-0 cursor-pointer transition-[transform_colors] duration-500 rounded-full border-2 border-white/20"
                      >
                        <p className="text-sm font-semibold">View Project</p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}
