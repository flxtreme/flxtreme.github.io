import React from 'react';
import { cn } from "@/app/(shared)/utils/";
import { Mail, Github, Linkedin, Twitter, Heart, Code } from 'lucide-react';
import { BsGithub, BsMailbox, BsWhatsapp } from 'react-icons/bs';
import { LuMail } from 'react-icons/lu';

/**
 * Footer
 * -------------------------
 * Responsive footer that adapts to Tailwind v4 light/dark themes.
 */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  const socialLinks = [
    { icon: <BsGithub size={20} />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <BsWhatsapp size={20} />, href: "https://wa.me/639503459931", label: "WhatsApp" },
    { icon: <LuMail size={20} />, href: "mailto:flxrzjr@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { label: "Home", href: "/#home" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Hire Me", href: "/#hire-me" }
  ];

  return (
    <footer
      {...props}
      className={cn(
        'w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800',
        className
      )}
    >
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className='text-slate-900 dark:text-purple-400 flex items-center text-3xl font-poppins'>
              <span className="-scale-x-100">F</span>
              <span>R</span>
            </h3>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              I turn caffeine ☕ and code into clean, responsive apps. Available for part-time work—let's build something awesome together. 💻
            </p>
            <div className="flex items-center gap-2 text-sm opacity-70">
              <Code size={16} className="text-orange-400 dark:text-purple-400" />
              <span>Built with Next.js & React</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm opacity-70 hover:opacity-100 hover:text-orange-500 dark:hover:text-purple-400 transition-all duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="font-poppins text-lg font-semibold">Let's Connect</h4>
            <p className="text-sm opacity-70">
              Open to new opportunities and collaborations
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-purple-400 hover:border-orange-400 dark:hover:border-purple-400 hover:scale-110 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:flxrzjr@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 dark:text-purple-400 hover:underline"
            >
              <Mail size={16} />
              flxrzjr@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-70 text-center md:text-left">
              © {new Date().getFullYear()} flxtreme.github.io All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm opacity-70">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};