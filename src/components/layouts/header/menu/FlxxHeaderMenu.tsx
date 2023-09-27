import { HTMLAttributes, useEffect, useState } from "react";

interface FlxxHeaderMenu extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

interface FlxxHeaderMenuItemProps extends HTMLAttributes<HTMLButtonElement> {
  scrollToTarget?: string;
}

export const FlxxHeaderMenu = ( props: FlxxHeaderMenu ) => {
  const { children, id, className = "", ...attributes} = props;

  return(
    <div className={`header-menu flex items-center gap-2 ${className}`} {...attributes}>
      {children}
    </div>
  )
}

export const FlxxHeaderMenuItem = ( props: FlxxHeaderMenuItemProps ) => {
  const { children, className = '', scrollToTarget, onClick, ...attributes } = props;

  const [currentSection, setCurrentSection] = useState<string>("section-1");
  const [settingSection, setSettingSection] = useState<boolean>(false);
  
  const sections : string[] = [
    "section-1",
    "section-2",
    "section-3",
  ];

  const handleScroll = (delta: number, delay?: number) => {
    if (delta > 0) {
      // Scrolling down, go to the next section or stop at the last
      const nextSection = getNextSection();
      if (nextSection) {
        handleSetCurrentSection(nextSection, delay);
      }
    } else if (delta < 0) {
      // Scrolling up, go to the previous section or stop at the first
      const previousSection = getPreviousSection();
      if (previousSection) {
        handleSetCurrentSection(previousSection, delay);
      }
    }
  };

  const handleMouseScroll = (e: WheelEvent) => {
    const delta = e.deltaY;
    handleScroll(delta);
  };

  const [touchStartY, setTouchStartY] = useState<number>(0);

  const handleTouchStart = (e: TouchEvent) => {
    const touchStartY = e.touches[0].clientY;
    console.log(touchStartY);
    setTouchStartY(touchStartY);
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    const touchEndY = e.touches[0].clientY;
    const delta = touchStartY - touchEndY;

    handleScroll(delta, 100);
  }

  const handleSetCurrentSection = ( currentSection: string, delay: number = 500 ) => {
    if ( !settingSection ) {
      setSettingSection(true);
      setTimeout(() => {
        setCurrentSection(currentSection);
        setSettingSection(false);
      }, delay)
    }
  }

  const getNextSection = () => {
    const currentSectionIndex = sections.indexOf(currentSection);
    const nextSectionIndex = currentSectionIndex + 1;

    return sections[nextSectionIndex] || null;
  };

  const getPreviousSection = () => {
    const currentSectionIndex = sections.indexOf(currentSection);
    const previousSectionIndex = currentSectionIndex - 1;

    return sections[previousSectionIndex] || null;
  };

  const scrollToSection = (scrollToTarget : string) => {
    const element = document.getElementById(scrollToTarget);
    const container = document.getElementById('content');

    if (container && element) {
      container.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      // Remove any previous sectionId class from container
      container.setAttribute('data-current', scrollToTarget); // Assuming 'content' is the default class
      // Add the sectionId as a class to container
      container.classList.add(scrollToTarget);
    }
  };

  const handleClick = () => {
    if ( scrollToTarget ) {
      scrollToSection(scrollToTarget)
    }
  }

  useEffect(() => {
    document.addEventListener('wheel', handleMouseScroll);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    return () => {
      document.removeEventListener('wheel', handleMouseScroll);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentSection]);

  useEffect(() => {
    scrollToSection(currentSection);
  }, [currentSection]);

  return(
    <button onClick={ scrollToTarget ? handleClick : onClick } className={`header-menu-item animated h-12 px-6 rounded hover:brightness-50 ${className}`} {...attributes}>
      {children}
    </button>
  )
}