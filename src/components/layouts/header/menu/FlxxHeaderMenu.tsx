import { HTMLAttributes, useEffect, useState } from "react";

interface FlxxHeaderMenu extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

interface FlxxHeaderMenuItemProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
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
  const { children, disabled = false,  className = '', onClick, ...attributes } = props;

  return(
    <button onClick={ onClick } disabled={disabled} className={`min-w-[90px] bg-transparent text-orange-400 hover:bg-orange-400 hover:bg-opacity-10 ${className}`} {...attributes}>
      {children}
    </button>
  )
}