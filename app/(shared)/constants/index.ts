import { NavType } from "@/app/(shared)/types";
import { IoMdContact } from "react-icons/io";
import { IoBookOutline, IoCallOutline, IoChatbubbleEllipsesOutline, IoChatbubbleOutline, IoCodeOutline, IoLogoWebComponent, IoMailOpenOutline } from "react-icons/io5";



export const NAV_ITEMS: NavType[] = [
  { label: "Skills", href: "#skills", icon: IoCodeOutline },
  { label: "Projects", href: "#projects", icon: IoLogoWebComponent },
  { label: "Hire Me", href: "#hire-me", icon: IoChatbubbleEllipsesOutline },
  { label: "My Blogs", href: "/blog", icon: IoBookOutline }
]