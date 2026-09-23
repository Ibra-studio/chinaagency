"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LabelSection } from "@/components/ui/section-label";

interface Program {
  title: string;
  description: string;
  image: string | StaticImageData;
}

const programs: Program[] = [
  {
    title: "Ingénierie & Technologies",
    description:
      "Ce programme est parfait si vous recherchez une formation technique reconnue : informatique, génie civil, IA, cybersécurité...",
    image: "/images/programs/ingenierie.jpg",
  },
  {
    title: "Médecine & Science de la santé",
    description:
      "Médecine générale, pharmacie, soins infirmiers , une formation exigeante avec de nombreuses bourses disponibles.",
    image: "/images/programs/medecine.jpg",
  },
  {
    title: "Économie & Management",
    description:
      "Commerce international, marketing, administration des affaires , pour les profils tournés vers le monde des affaires.",
    image: "/images/programs/economie.jpg",
  },
  // ... complète avec le reste de tes filières
];

export default function ProgramSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  };

  const nextIndex = (currentIndex + 1) % programs.length;

  return (
    <section className="section" id="programmes">
      <div className="">
        {/* En-tête : label + titre à gauche, paragraphe à droite sur desktop,
            empilés sur mobile (comme les deux maquettes) */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-12">
          <div>
            <LabelSection>OMA Scholars</LabelSection>
            <h2 className="uppercase text-center ">Choisissez votre<br/>programme</h2>
          </div>
          <p className="text-muted-foreground max-w-sm md:pt-14 md:text-left">
            Nous avons des partenariats avec les meilleures universités en
            Chine, adaptées à chaque profil et chaque budget.
          </p>
        </div>

        {/* Corps : compteur + description à gauche, cartes à droite sur desktop ;
            tout empilé sur mobile */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl md:text-6xl font-bold text-foreground">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-lg md:text-xl text-muted-foreground">
                /{programs.length > 9 ? programs.length : `0${programs.length}`}
              </span>
            </div>

            <p className="text-sm text-muted-foreground">
              {programs[currentIndex].description}
            </p>

            {/* Flèches : visibles uniquement sur desktop ici, dupliquées
                en bas pour mobile (voir plus bas) */}
            <div className="hidden md:flex gap-3">
              <NavButton direction="prev" onClick={goToPrevious} />
              <NavButton direction="next" onClick={goToNext} variant="primary" />
            </div>
          </div>

          {/* Cartes programme : 2 visibles sur desktop (courant + suivant),
              1 seule visible sur mobile — exactement comme les 2 maquettes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProgramCard program={programs[currentIndex]} active />
            <ProgramCard
              program={programs[nextIndex]}
              className="hidden sm:block"
            />
          </div>
        </div>

        {/* Flèches mobile, en bas de section */}
        <div className="mt-6 flex justify-center gap-3 md:hidden">
          <NavButton direction="prev" onClick={goToPrevious} />
          <NavButton direction="next" onClick={goToNext} variant="primary" />
        </div>
      </div>
    </section>
  );
}

function NavButton({
  direction,
  onClick,
  variant = "outline",
}: {
  direction: "prev" | "next";
  onClick: () => void;
  variant?: "outline" | "primary";
}) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Programme précédent" : "Programme suivant"}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
        variant === "primary"
          ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
          : "bg-transparent text-foreground border-border hover:bg-secondary"
      )}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

function ProgramCard({
  program,
  active,
  className,
}: {
  program: Program;
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full rounded-2xl overflow-hidden",
        active
          ? "h-64 sm:h-80 md:h-96"
          : "h-56 sm:h-64 md:h-85",
        className
      )}
    >
      <Image
        src={program.image}
        alt={program.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 40vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start gap-2">
        <span className="text-white font-bold uppercase text-sm md:text-base tracking-wide">
          {program.title}
        </span>
        {active && (
          <span className="bg-primary text-primary-foreground text-xs font-bold uppercase px-3 py-1 rounded-full">
            En savoir plus
          </span>
        )}
      </div>
    </div>
  );
}