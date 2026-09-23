import {
  ClipboardCheck,
  FileText,
  GraduationCap,
  Plane,
  Users,
  type LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  label: string;
}

const services: Service[] = [
  { icon: ClipboardCheck, label: "Choix du programme" },
  { icon: FileText, label: "Admission" },
  { icon: GraduationCap, label: "Bourses" },
  { icon: Plane, label: "Préparation" },
  { icon: Users, label: "Suivi" },
];

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="">
        <div className="bg-primary text-primary-foreground rounded-3xl px-6 py-10 md:px-12 md:py-14">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 md:mb-12 text-primary-foreground uppercase tracking-wide">
            Nos services
          </h2>

          {/* Colonne unique sur mobile (comme le design 2), ligne sur desktop */}
          <div className="flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:justify-center md:gap-x-10 md:gap-y-6 lg:justify-between">
            {services.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 text-center"
              >
                <Icon
                  className="h-10 w-10 md:h-12 md:w-12"
                  strokeWidth={1.75}
                />
                <span className="text-sm md:text-base font-bold uppercase tracking-wide max-w-[10rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}