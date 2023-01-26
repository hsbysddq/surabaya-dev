import Logo from "../assets/logo.png"

const Nav = () => {
  const Links = [{ name: "About" }, { name: "Event" }, { name: "Career" }]
  return (
    <nav className="flex items-center justify-between pt-5">
      <img src={Logo} alt="" className="w-10 ml-7" />
      <ul>
        {Links.map((link, index) => (
          <li
            key={index}
            className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300"
          >
            <a
              href="/"
              className="text-lightGrey text-sm md:py-5 py-3 inline-block"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
