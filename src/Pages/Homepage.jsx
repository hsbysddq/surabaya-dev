import Navbar from "../Component/Navbar"
import Hero from "../assets/hero.png"
// import Tagline from "../Component/Tagline"

function Homepage() {
  return (
    <div className="bg-cover bg-center bg-main h-screen w-screen text-greey">
      <div className="container">
        <Navbar />
        <div className="grid grid-cols-9">
          <div className="w-[78%] text-lightGrey font-inter col-span-5">
            <h1 className="pt-[100px] text-4xl font-extrabold">
              Hello Developer
            </h1>
            <p className="pt-[20px] pb-6 text-xl">
              Surabaya Dev lahir karena tidak adanya wadah belajar untuk para
              programer yang ingin terus berkembang untuk meningkatkan kemampuan
              teknikal skill. Jadi Mari bergabung bersama kami
            </p>

            <button className="text-lightGrey outline rounded-md px-6 py-3">
              Gabung Sekarang!
            </button>
          </div>

          <img src={Hero} alt="" className="hero col-span-4 mt-[7%] ml-[8%]" />
        </div>
      </div>
      <div className="rounded-t-[10%] bg-secondary w-screen h-[500px]">
        <p>hello</p>
      </div>
    </div>
  )
}

export default Homepage
