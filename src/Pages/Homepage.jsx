import Nav from "../Component/Nav"
import Hero from "../assets/hero.png"

function Homepage() {
  return (
    <div className="bg-cover bg-center bg-main h-screen w-screen text-greey">
      <div className="container">
        <Nav />
        <div className="grid grid-cols-9">
          <div className="w-[80%] text-lightGrey font-inter col-span-5">
            <h1 className="pt-[100px] text-4xl font-extrabold">
              Hello Developer
            </h1>
            <p className="pt-[20px] pb-6 text-xl">
              Surabaya Dev merupakan wadah talenta teknologi dengan memanfaatkan
              potensinya untuk meningkatkan skill tech di bidang programming
              maupun digital teknologi agar dapat saling bersinergi
              berkolaborasi. Jadi Mari bergabung bersama kami
            </p>

            <button className="text-lightGrey outline rounded-md px-6 py-3">
              Gabung Sekarang
            </button>
          </div>

          <img src={Hero} alt="" className="hero col-span-4 mt-[7%] ml-[8%]" />
        </div>
      </div>
    </div>
  )
}

export default Homepage
