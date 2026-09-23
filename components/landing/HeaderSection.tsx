import React from 'react'
import Image from 'next/image'
import heroimageDesktop from "@/public/images/heroimagedesktop.png"
import heroimage2 from "@/public/images/heroimage2.png"
import { Button } from '../ui/button'
export default function HeaderSection() {
  return (
    <div className='grid grid-rows justify-center items-start h-full relative section'>
      <div className='flex flex-col gap-6 items-center justify-center max-w-[1000px]'>
        <h1><span className="text-primary">ÉTUDIEZ EN CHINE,</span> SANS <span className="text-primary">VOUS PERDRE</span> DANS LES DÉMARCHES</h1>
        <p className="w-[60%] text-center">Admission, bourses, visa et installation | un accompagnement complet, de votre pays d'origine jusqu'au campus.</p>
        <Button className="rounded-lg">Discutons de votre projet</Button>
      </div>
      {/* <div className="relative h-screen">
        <Image src={heroimageDesktop} alt="heroimage" quality={100} placeholder='blur' fill sizes="(min-width: 1280px) 50vw, 100vw" className='object-cover object-right '/>
      </div> */}
    </div>
  )
}
