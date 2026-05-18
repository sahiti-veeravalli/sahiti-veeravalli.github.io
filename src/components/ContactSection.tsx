import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check } from "lucide-react";

type Social = {
  label: string;
  href: string;
  username: string;
  copyValue: string;
  glow: string;
  icon: React.ReactNode;
};

const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/sahiti-veeravalli",
    username: "sahiti-veeravalli",
    copyValue: "https://github.com/sahiti-veeravalli",
    glow: "255, 255, 255",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#ffffff">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sahiti-veeravalli/",
    username: "in/sahiti-veeravalli",
    copyValue: "https://www.linkedin.com/in/sahiti-veeravalli/",
    glow: "96, 165, 250",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sahithi.veeravalli19@gmail.com",
    username: "sahithi.veeravalli19@gmail.com",
    copyValue: "sahithi.veeravalli19@gmail.com",
    glow: "248, 113, 113",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-1.819V7.73L12 14.91l-8.545-7.18v13.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        <path fill="#34A853" d="M3.455 21.003h-1.82A1.636 1.636 0 010 19.367V7.73l3.455 2.59z" />
        <path fill="#FBBC04" d="M24 5.457v2.273l-3.455 2.59V4.64l1.528-1.146C23.69 2.28 24 3.434 24 5.457z" />
        <path fill="#EA4335" d="M20.545 4.64v5.68L12 14.91 3.455 7.73v-3.09L12 11.82z" />
      </svg>
    ),
  },
];

const SocialIcon = ({ social }: { social: Social }) => {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);

  const showTooltip = () => {
    if (hideTimeoutRef.current !== null) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    setHovered(true);
  };

  const hideTooltip = () => {
    if (hideTimeoutRef.current !== null) {
      window.clearTimeout(hideTimeoutRef.current);
    }

    hideTimeoutRef.current = window.setTimeout(() => {
      setHovered(false);
      hideTimeoutRef.current = null;
    }, 250);
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(social.copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      void error;
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}>
      <a
        href={social.href}
        target={social.label === "Gmail" || social.label === "LinkedIn" ? "_blank" : undefined}
        rel={social.label === "Gmail" || social.label === "LinkedIn" ? "noopener noreferrer" : undefined}
        aria-label={social.label}
        style={
          hovered
            ? {
                boxShadow: `0 0 28px -2px rgba(${social.glow}, 0.7), 0 0 12px -2px rgba(${social.glow}, 0.5)`,
                borderColor: `rgba(${social.glow}, 0.6)`,
              }
            : undefined
        }
        className="w-28 h-28 rounded-full border border-border flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
        {social.icon}
      </a>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 flex items-center gap-1.5 px-1 py-0.5 pointer-events-auto z-20 whitespace-nowrap">
            <span
              className="text-[11px] font-mono"
              style={{
                color: `rgb(${social.glow})`,
                textShadow: `0 0 10px rgba(${social.glow}, 0.85), 0 0 18px rgba(${social.glow}, 0.45)`,
              }}>
              {social.username}
            </span>
            <button
              onClick={handleCopy}
              aria-label={`Copy ${social.label}`}
              className="p-0.5 rounded text-primary/70 hover:text-primary transition-colors">
              {copied ? <Check className="w-3 h-3 text-primary" /> : <Copy className="w-3 h-3" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div ref={ref} className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.p
          className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}>
          Get in Touch
        </motion.p>

        <motion.h2
          className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}>
          Let's create <span className="text-gradient-primary">something amazing</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}>
          Have a project in mind or just want to chat? Reach out on any of these.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-8 pb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}>
          {socials.map((s) => (
            <SocialIcon key={s.label} social={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
