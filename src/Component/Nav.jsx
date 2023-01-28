import Logo from "../assets/logo.png"

const Nav = () => {
  const Links = [{ name: "About" }, { name: "Event" }, { name: "Career" }]
  return (
    <nav className="flex items-center justify-between pt-5 xl:pt-5 lg:pt-6 md:pt-4">
      <img src={Logo} alt="" className="w-20 xl:w-42 lg:w-36 md:w-32" />
      <ul className="flex">
        {Links.map((link, index) => (
          <li
            key={index}
            className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-lightGrey duration-300"
          >
            <a
              href="#about"
              className="text-lightGrey text-sm lg:text-xl md:text-lg font-inter lg:font-extrabold md:font-bold md:py-5 lg:p-3 inline-block"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li className="lg:p-3 md:p-5 md:ml-4">
          <button className="text-lightGrey font-inter text-sm md:text-xs outline rounded-sm px-2 lg:px-4 md:px-3 py-1 md:py-2">
            Join Us
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
