import { useState } from "react"
import { Navbar } from "./Navbar"
import { Cart } from "./Cart"

export const Header = () => {
  const [open, setOpen] = useState(false)
  const navItems = ["Collections", "Men", "Women", "About", "Contact"]

  return (
    <header className="px-4 min-h-[80px] relative max-w-7xl mx-auto flex items-center justify-start gap-6 border-b border-hsl-gray-blue">
      <button className="z-[1]" onClick={() => setOpen(!open)}>
        <svg data-icon="menu" className="block md:hidden" height="15" width="16">
          <use xlinkHref={open ? '/svg/icon-close.svg#icon-close' : '/svg/icon-menu.svg#icon-menu'}></use>
        </svg>
      </button>
      
      <a href="" className="text-3xl font-bold lowercase tracking-tight">Sneakers</a>
      
      <Navbar navItems={navItems} open={open} />

      <div className="flex relative items-center justify-between gap-8 ml-auto">
        <Cart />
        <img className="w-12 h-auto cursor-pointer hover:border-hsl-primary hover:border-2 hover:rounded-full" src="/image-avatar.png" alt="perfil image" />
      </div>
    </header>
  )
}

