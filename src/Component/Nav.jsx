import Logo from "../assets/logo.png"

const Nav = () => {
  const Links = [{ name: "About" }, { name: "Event" }, { name: "Career" }]
  return (
    <nav className="flex items-center justify-between pt-8">
      <img src={Logo} alt="" className="w-44" />
      <ul className="flex">
        {Links.map((link, index) => (
          <li
            key={index}
            className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-lightGrey duration-300"
          >
            <a
              href="/"
              className="text-lightGrey text-xl font-inter font-extrabold md:py-5 p-3 inline-block"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li className="p-5 ml-4">
          <button className="text-lightGrey text-xs outline rounded-sm px-4 py-2">
            Join Us
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
