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
      <div className="rounded-t-[10%] absolute bottom-[-54%] bg-secondary w-screen h-[500px]">
        <h1 className="absolute left-[50%] mt-10 text-2xl text-lightGrey font-inter font-bold">
          About Us
        </h1>
      </div>
    </>
  )
}

export default Homepage
