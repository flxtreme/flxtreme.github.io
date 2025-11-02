import { NavType } from "@/app/(shared)/types";
import { IoBookOutline, IoChatbubbleEllipsesOutline, IoCodeOutline, IoLogoWebComponent } from "react-icons/io5";



export const NAV_ITEMS: NavType[] = [
  { label: "Skills", href: "/#skills", icon: IoCodeOutline },
  { label: "Projects", href: "/#projects", icon: IoLogoWebComponent },
  { label: "Hire Me", href: "/#hire-me", icon: IoChatbubbleEllipsesOutline },
  { label: "My Blogs", href: "/blog", icon: IoBookOutline }
]