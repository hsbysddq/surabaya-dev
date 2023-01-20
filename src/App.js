import "./App.css"
import Navbar from "./Component/Navbar"
import Hero from "./assets/hero.png"
import Tagline from "./Component/Tagline"

function App() {
  return (
    <div className="bg-cover bg-center bg-main h-screen w-screen">
      <img
        src={Hero}
        alt=""
        className="hero w-[490px] h-[490px] absolute right-[2%] top-[18%]"
      />
      <div className="container text-greey">
        <Navbar />
        <Tagline />
      </div>
    </div>
  )
}

export default App
