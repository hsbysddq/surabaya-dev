import "./App.css"
import Navbar from "./Component/Navbar"

function App() {
  return (
    <div className="bg-main h-screen w-screen">
      <img src="./assets/bg-shape.jpg" alt=""></img>
      <div className="container text-greey">
        <Navbar />
      </div>
    </div>
  )
}

export default App
