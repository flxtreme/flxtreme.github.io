import { HTMLAttributes } from "react";
import FlxxHeader from "./header/FlxxHeader";

interface FlxLayoutProps  {
  title?: string;
  children? : React.ReactNode;
}

const FlxLayout = ( props: FlxLayoutProps ) => {
  const { title, children } = props;

  return(
    <>
      <FlxxHeader title={title} />
      <div id="content" className="particle-js content h-screen overflow-hidden" data-current="section-1">
        <main id="main" className="relative z-[2]">
          {children}
        </main>
      </div>
    </>
  )
}

export default FlxLayout;