import Navbar from "../Component/Navbar"
import Hero from "../assets/hero.png"
import Tagline from "../Component/Tagline"

function Homepage() {
  return (
    <>
      <div className="bg-cover bg-center bg-main container h-screen w-screen text-greey">
        <img
          src={Hero}
          alt=""
          className="hero w-[490px] h-[490px] absolute right-[2%] top-[18%]"
        />
        <Navbar />
        <Tagline />
      </div>
      <div className="rounded-t-[10%] absolute bottom-[-50%] bg-secondary w-screen h-[500px]"></div>
    </>
  )
}

export default Homepage
