"use client"

import { motion } from "motion/react"
import { buttonVariants } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CTAProps {
  badge?: {
    text: string
  }
  title: string
  description?: string
  action: {
    text: string
    href: string
    variant?: VariantProps<typeof buttonVariants>["variant"]
  }
  withGlow?: boolean
  className?: string
}

// Variante de fondu générique : off-écran par défaut, animée seulement
// quand l'élément entre dans le viewport (voir whileInView plus bas)
const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export default function CTASection({
  badge,
  title,
  description,
  action,
  withGlow = true,
  className,
}: CTAProps) {
  return (
    <section className={cn("overflow-hidden pt-0 md:pt-0 section", className)}>
      <div className="relative mx-auto flex max-w-container flex-col items-center gap-6 px-8 py-12 text-center sm:gap-8 md:py-24">
        {/* Badge */}
        {badge && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <Badge variant="outline">
              <span className="text-muted-foreground">{badge.text}</span>
            </Badge>
          </motion.div>
        )}

        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="uppercase"
        >
          {title}
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p
            className="text-muted-foreground max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            {description}
          </motion.p>
        )}

       
        <motion.a
          href={action.href}
          className={cn(
            buttonVariants({ variant: action.variant || "default", size: "lg"}), "rounded-lg"
          )}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          {action.text}
        </motion.a>

        {/* Glow Effect */}
        {withGlow && (
          <motion.div
            className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl shadow-glow"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          />
        )}
      </div>
    </section>
  )
}