"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations, projects } from "@/lib/translations";
import { ScrollReveal } from "@/components/scroll-reveal";
import { VideoModal } from "@/components/video-modal";

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => t(p.category)));
    return ["all", ...Array.from(cats)];
  }, [t]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => t(p.category) === activeCategory);

  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t(translations.portfolio.heading)}
            </h1>
            <p className="mt-4 text-lg text-lava-black/60 max-w-xl">
              {t(translations.portfolio.subtitle)}
            </p>
          </ScrollReveal>

          {/* Category Filter */}
          <ScrollReveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm rounded-full border transition-colors duration-200 ${
                    activeCategory === cat
                      ? "bg-lava-black text-ice-white border-lava-black"
                      : "border-lava-black/20 text-lava-black/70 hover:border-lava-black/50"
                  }`}
                >
                  {cat === "all" ? t(translations.portfolio.allCategories) : cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.08}>
                <motion.button
                  onClick={() =>
                    setSelectedVideo({
                      url: project.videoUrl,
                      title: t(project.title),
                    })
                  }
                  className="group block w-full text-left"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative aspect-video bg-lava-black/5 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-glacial/20 to-lava-black/10 flex items-center justify-center">
                      <span className="text-lava-black/30 text-sm tracking-wider uppercase">
                        {t(project.category)}
                      </span>
                    </div>
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-lava-black/0 group-hover:bg-lava-black/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-ice-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                        <svg
                          className="w-6 h-6 text-lava-black ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium group-hover:text-glacial-dark transition-colors duration-200">
                        {t(project.title)}
                      </h3>
                      <p className="mt-1 text-sm text-lava-black/60">
                        {t(project.description)}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 text-xs px-3 py-1 bg-lava-black/5 rounded-full text-lava-black/50">
                      {t(project.category)}
                    </span>
                  </div>
                </motion.button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url ?? ""}
        title={selectedVideo?.title ?? ""}
      />
    </>
  );
}
