import { FlxxHeaderMenu, FlxxHeaderMenuItem } from "./menu/FlxxHeaderMenu";


interface FlxxHeaderProps {
  title?: string;
}

const FlxxHeader = ( props: FlxxHeaderProps ) => {
  const { title } = props;

  return(
    <header id="header" className="header">
      <div className="container h-16 flex items-center">
        <div>
          <h3 className="font-bold tracking-widest text-orange-400">{title}</h3>
        </div>
        <div className="flex-1 flex items-center justify-end">
          {/* <FlxxHeaderMenu id="header-menu">
            <FlxxHeaderMenuItem>
              Me
            </FlxxHeaderMenuItem>
            <FlxxHeaderMenuItem disabled={true}>
              Experience
            </FlxxHeaderMenuItem>
            <FlxxHeaderMenuItem disabled={true}>
              Contact
            </FlxxHeaderMenuItem>
          </FlxxHeaderMenu> */}
        </div>
      </div>
    </header>
  )
}

export default FlxxHeader;