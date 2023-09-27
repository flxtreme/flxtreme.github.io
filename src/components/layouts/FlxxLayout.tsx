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
      <div id="content" className="content overflow-hidden h-screen" data-current="section-1">
        <main id="main">
          {children}
        </main>
      </div>
    </>
  )
}

export default FlxLayout;