import { cn } from "@/app/(shared)/utils";
import { LuGlobe } from "react-icons/lu";

export default function BlogPage() {
  return(
    <div>
      <div className={cn(
        "container py-16 md:py-28 xl:min-h-[calc(100vh-5rem)]",
        "flex items-center justify-center flex-col gap-4 md:gap-6"
      )}>
        <p className="sub-desc-text">
          Not sure what to post here.
        </p>
      </div>
    </div>
  );
}