import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}

const SectionWrapper = ({ children, className = "", isActive = false }: SectionWrapperProps) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 md:px-6 my-6 ${className}`}>
      <div
        className={`rounded-2xl border bg-card/20 backdrop-blur-sm p-6 md:p-10 lg:p-14 transition-[border-color,box-shadow] duration-300 ${
          isActive
            ? "border-primary shadow-[0_0_0_1px_hsl(var(--primary)/0.45),0_0_42px_hsl(var(--primary)/0.38),inset_0_0_20px_hsl(var(--primary)/0.1)]"
            : "border-border/60"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
