// components/ui/stacking-card.tsx
'use client';

import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface CardData {
  badge?: string;
  title: string;
  description: string;
  image: string;
  color: string;
  badgeBg?: string;
  textColor?: string;
}

interface CardProps {
  i: number;
  badge?: string;
  title: string;
  description: string;
  image: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  textColor?: string;
}

export const Card = ({
  i,
  badge,
  title,
  description,
  image,
  color,
  textColor="#000",
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.8, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0 px-4 sm:px-8'
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={cn(
          'flex flex-col lg:flex-row relative -top-[15%] h-[500px] sm:h-[480px] w-full max-w-5xl rounded-[2.5rem] p-8 sm:p-12 origin-top shadow-2xl justify-between gap-8 border border-white/10'
        )}
      >
        {/* Partie Texte & Contenu StoryBrand */}
        <div className='flex flex-col justify-center items-center   lg:w-[55%] h-full' style={{ color: textColor }}>
          
           
            <h3 className='text-xl sm:text-2xl md:text-2xl uppercase font-semibold  leading-tight mb-4'>
              {title}
            </h3>
            <p className='text-sm sm:text-base  font-normal  leading-relaxed' style={{ color: textColor }}>
              {description}
            </p>
    

         
        </div>

        {/* Partie Image Visuelle */}
        <div className='relative lg:w-[45%] h-48 lg:h-full rounded-2xl overflow-hidden'>
          <motion.div className=' relative w-full h-full' style={{ scale: imageScale }}>
            <Image
              src={image}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              alt={title}
              className='absolute inset-0 w-full h-full object-cover'
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

interface StackingCardsProps {
  cards: CardData[];
  headerTitle?: string;
  headerSubtitle?: string;
}

export const StackingCards = forwardRef<HTMLElement, StackingCardsProps>(
  ({ cards, headerTitle, headerSubtitle }, ref) => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end'],
    });

    return (
      <ReactLenis root>
        <div className='bg-background text-white' ref={container}>
          {/* Header de la section */}
          {(headerTitle || headerSubtitle) && (
            <section className='h-[40vh] sm:h-[10vh] w-full flex flex-col justify-start items-center px-6 text-center max-w-6xl mx-auto'>
              {headerSubtitle && (
             <div className="inline-flex items-center justify-center my-4">
                {/* Ligne gauche avec largeur fixe */}
                <div className="w-20 h-[2px] bg-primary" />
                
                {/* Texte central */}
                <span className="px-4 text-sm md:text-lg font-bold tracking-wider text-primary uppercase whitespace-nowrap font-serif">
                    {headerSubtitle}
                </span>
                
                {/* Ligne droite avec largeur fixe */}
                <div className="w-20 h-[2px] bg-primary" />
                </div>
                
              )}
              {headerTitle && (
                <h2 className='font-semibold tracking-tight leading-tight text-neutral-900'>
                  {headerTitle}
                </h2>
              )}
            </section>
          )}

          {/* Cartes empilables */}
          <section className='w-full'>
            {cards.map((card, i) => {
              const targetScale = 1 - (cards.length - i) * 0.04;
              return (
                <Card
                  key={`card_${i}`}
                  i={i}
                  badge={card.badge}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  color={card.color}
                  textColor={card.textColor}
                  progress={scrollYProgress}
                  range={[i * (1 / cards.length), 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </section>
        </div>
      </ReactLenis>
    );
  }
);

StackingCards.displayName = 'StackingCards';
export default StackingCards;