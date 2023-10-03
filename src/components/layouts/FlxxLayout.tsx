import { HTMLAttributes } from "react";
import FlxxHeader from "./header/FlxxHeader";

interface FlxLayoutProps  {
  title?: string;
  children? : React.ReactNode;
}

const FlxLayout = ( props: FlxLayoutProps ) => {
  const { title, children } = props;

  return(
    <div id="flxx-layout">
      <FlxxHeader title={title} />
      <div id="content" className="content h-screen overflow-hidden">
        <main id="main" className="main">
          {children}
        </main>
      </div>
    </div>
  )
}

export default FlxLayout;