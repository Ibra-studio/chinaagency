'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/button';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/landing/Navbar';
import Link from 'next/link';

const navItems = [
  { name: 'Accueil', link: '/' },
  { name: 'Programmes', link: '/#programmes' },
  { name: 'Guide pratique', link: '/#guide' },
  { name: 'Vie en chine', link: '/#a-propos' },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className="w-full bg-background section pt-7.5">

      {/* Navbar : rendue en dehors du conteneur arrondi pour qu'elle
          se plaque sur toute la largeur du viewport, pas juste la carte */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" href="/#contact">
              Discutons de votre projet
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
              href="/#contact"
            >
              Discutons de votre projet
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <div
        ref={containerRef}
        className="relative w-full max-w-[1600px] mx-auto bg-[#EBEFF2] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col"
      >
        {/* Bloc Texte */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-24 md:pt-28 pb-6 md:pb-8 px-4">
          <div className='flex flex-col items-center gap-3 mb-8'>
            <h1 className="font-bold tracking-tight leading-tight text-neutral-900  max-w-5xl">
              <span className="text-primary">ÉTUDIEZ EN CHINE,</span> SANS <span className="text-primary">VOUS PERDRE</span> DANS LES DÉMARCHES
            </h1>
            <p className='w-[60%] text-center'>
              Admission, bourses, visa et installation | un accompagnement complet, de votre pays d'origine jusqu'au campus.
            </p>
          </div>

          <Button className="rounded-lg">Discutons de votre projet</Button>
        </div>

        {/* Bloc Image */}
        <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[50vh] overflow-hidden">
          <motion.div
            style={{ scale }}
            className="w-full h-full origin-bottom"
          >
            <Image
              src="/images/heroImage3.png"
              alt="Temple traditionnel chinois, illustration du programme d'études en Chine"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}