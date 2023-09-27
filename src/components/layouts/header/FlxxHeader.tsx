import { FlxxHeaderMenu, FlxxHeaderMenuItem } from "./menu/FlxxHeaderMenu";


interface FlxxHeaderProps {
  title?: string;
}

const FlxxHeader = ( props: FlxxHeaderProps ) => {
  const { title } = props;

  return(
    <header id="header" className="header z-10 fixed top-0 left-0 right-0">
      <div className="container h-16 flex items-center">
        <div className="text-lg font-semibold">
          {title}
        </div>
        <div className="flex-1 flex items-center justify-end">
          <FlxxHeaderMenu id="header-menu">
            <FlxxHeaderMenuItem scrollToTarget="section-1">
              Me
            </FlxxHeaderMenuItem>
            <FlxxHeaderMenuItem scrollToTarget="section-2">
              Experience
            </FlxxHeaderMenuItem>
            <FlxxHeaderMenuItem scrollToTarget="section-3">
              Skills
            </FlxxHeaderMenuItem>
          </FlxxHeaderMenu>
        </div>
      </div>
    </header>
  )
}

export default FlxxHeader;