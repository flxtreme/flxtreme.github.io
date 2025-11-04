import LiquidEther from "@/app/(shared)/components/reactbits/LiquidEther";
import { Button } from "@/app/(shared)/components/ui/Button";
import { IoChatbubbleEllipsesOutline, IoCodeOutline, IoDownloadOutline, IoMailOutline } from "react-icons/io5";

export default function HomeHeroBanner() {

  return(
    <section
      id="home"
      className="relative"
    >
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-start container-height">
        <h3 className="font-poppins text-xl xl:text-3xl mb-2 opacity-60">Hey there, I'm</h3>
        <h1 className="font-poppins text-5xl xl:text-7xl font-medium mb-1 text-purple-400">
          <span>Felix </span>
          <span className="hidden md:inline">Conde </span>
          <span className="md:hidden inline">C. </span>
          <span>Ruz</span>
        </h1>
        <p className="lg:max-w-xl xl:max-w-3xl sub-desc-text mt-4 xl:mt-8 leading-relaxed">
          I turn caffeine ☕ and code into clean, responsive apps. Available for part-time work—let's build something awesome together. 💻
        </p>
        <div className="mt-6 md:mt-12 flex items-center gap-2 md:gap-4 flex-wrap justify-center">
          <Button
            href="/#skills"
            variant="solid"
            size="large"
            className="flex items-center gap-2"
          >
            <IoCodeOutline size={16} />
            <span>My Tech Stack</span>
          </Button>

          <Button
            href="/#hire-me"
            variant="outline"
            size="large"
            className="flex items-center gap-2"
          >
            <IoChatbubbleEllipsesOutline size={16} />
            <span>Let's Talk</span>
          </Button>
        </div>

      </div>
      
    </section>
  )
}