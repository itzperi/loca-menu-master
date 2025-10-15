import { ReactNode } from "react";

interface MenuSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export const MenuSection = ({ id, title, children }: MenuSectionProps) => {
  return (
    <section id={id} className="scroll-mt-24 mb-16">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-primary border-b-2 border-accent pb-3 inline-block">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
};
