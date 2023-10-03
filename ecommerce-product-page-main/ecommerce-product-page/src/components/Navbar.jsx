export const Navbar = ({navItems, open}) => {
  return (
    <nav className={`absolute md:relative z-[3] bg-white md:bg-transparent h-screen md:h-auto top-0 left-0 pt-12 md:pt-0 w-9/12 pl-8 transition duration-500 md:duration-0 ease-in-out ${!open ? '-translate-x-full md:translate-x-0' : 'md:translate-x-0'} `}>
      <ul className="list-none flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-6">
        {navItems.map((item, id) => <li key={id} className="py-4 md:py-8 border-b-[5px] border-transparent md:hover:border-hsl-primary font-bold md:font-normal"><a href="#">{item}</a></li>)}
      </ul>
    </nav>
  )
}