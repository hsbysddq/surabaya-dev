import Logo from "../assets/logo.png"

function Navbar() {
  return (
    <nav className="flex justify-between text-white pt-[1.8%]">
      <div className="logo">
        <a href="/" className="flex">
          <img src={Logo} alt="" className="logo" />
        </a>
      </div>

      <div className="list">
        <ul className="flex list-none gap-4 text-lightGrey text-xl font-inter font-extrabold">
          <li className="p-5">
            <a href="/">About</a>
          </li>
          <li className="p-5">
            <a href="/">Event</a>
          </li>
          <li className="p-5">
            <a href="/">Career</a>
          </li>
          <li className="p-4">
            <button className="text-xs outline rounded-sm px-4 py-2">
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
