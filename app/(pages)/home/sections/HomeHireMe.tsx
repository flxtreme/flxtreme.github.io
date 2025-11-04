import { Button } from '@/app/(shared)/components/ui/Button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsGithub, BsWhatsapp, BsDownload } from 'react-icons/bs';
import { IoArrowForward } from 'react-icons/io5';

export default function HomeHireMe() {
  const router = useRouter();

  const socialLinks = [
    {
      icon: <BsGithub size={24} />,
      title: "GitHub",
      description: "Check out my code and projects",
      onClick: () => {
        window.open("https://github.com/flxtreme", "_blank");
      },
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: <BsWhatsapp size={24} />,
      title: "WhatsApp me",
      description: "Let's discuss your next project",
      onClick: () => {
        window.open("https://wa.me/639503459931", "_blank");
      },
      gradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="hire-me" className="relative">
      <div className="container container-height flex flex-col items-center justify-center">
        <div className="text-center mb-10 md:mb-14 px-4">
          <h2 className="font-poppins text-3xl md:text-4xl xl:text-5xl font-medium mb-3 text-purple-400">
            Ready to Work Together?
          </h2>
          <p className="text-sm md:text-lg xl:text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
            I'm available for part-time opportunities. Whether you need a feature built, a bug squashed, or a full project—let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl w-full px-4">
          {socialLinks.map((link, index) => (
            <button
              key={index}
              onClick={link.onClick}
              className="group relative text-left bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-linear-to-br ${link.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>

                <div className="flex-1">
                  <h3 className="font-poppins text-lg md:text-xl font-semibold mb-1 text-gray-900 dark:text-white group-hover:text-purple-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    {link.description}
                  </p>
                </div>

                <div className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300 hidden sm:flex">
                  <IoArrowForward />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Download Resume */}
        <div className="mt-8 md:mt-12">
          <Button
            href="/dlc/cv.pdf"
            variant="outline"
            size="large"
            className="flex items-center gap-2"
          >
            <BsDownload size={18} />
            <span>Download CV</span>
          </Button>
        </div>

        <div className="text-center mt-8 md:mt-12 px-4">
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            Or just shoot me an email at{' '}
            <a 
              href="mailto:flxrzjr@gmail.com" 
              className="text-purple-400 hover:underline font-medium"
            >
              flxrzjr@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
