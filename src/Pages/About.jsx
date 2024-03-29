import Visi from "../Component/Visi"
import { FaExclamationCircle } from "react-icons/fa"
import AboutImg from "../assets/about.png"

function About() {
  return (
    <div
      id="about"
      className="absolute top-[88%] rounded-[5%] bg-secondary w-screen pb-10"
    >
      <div className="justify-center">
        <h1 className="flex justify-center text-tes font-inter text-3xl font-bold pt-8 pb-8">
          About Us
        </h1>

        <div className="container about col-span-3 mb-16 mt-8 text-lightGrey font-inter text-2xl">
          <h1>
            Surabaya Dev lahir karena tidak adanya wadah belajar untuk para
            programer yang ingin terus berkembang untuk meningkatkan kemampuan
            teknikal skill.
          </h1>
        </div>

        <div className="container grid grid-cols-2 pt-24 text-lightGrey font-inter">
          <div className="relative col-span-1 w-[90%]">
            <h1 className="text-5xl font-semibold text-tes">
              Kenapa Harus Gabung Bersama Surabaya Dev?
            </h1>
            <p className="text-2xl pt-8">
              Komunitas adalah tempat yang tepat untuk kamu yang suka dengan
              berbagai ilmu dan waktu.
            </p>
            <img
              src={AboutImg}
              alt=""
              className="absolute top-[44%] w-80 ml-28"
            />
          </div>

          <div className="col-span-1 ml-12">
            <div className="flex text-tes">
              <div className="icon text-4xl">
                <FaExclamationCircle />
              </div>
              <h1 className="ml-8 pb-2 text-3xl">Suka Belajar Hal Baru</h1>
            </div>

            <div className="ml-[12%] w-[55%] mb-8">
              <p className="text-xl">
                Komunitas menyediakan wadah untuk berekplorasi tanpa batas
              </p>
            </div>

            <div className="flex text-tes">
              <div className="icon text-4xl">
                <FaExclamationCircle />
              </div>
              <h1 className="ml-8 pb-2 text-3xl w-[55%]">
                Berinteraksi Dengan Banyak Orang
              </h1>
            </div>

            <div className="ml-[12%] w-[55%] mb-8">
              <p className="text-xl">
                Komunitas menyediakan wadah untuk berekplorasi tanpa batas
              </p>
            </div>

            <div className="flex text-tes">
              <div className="icon text-4xl">
                <FaExclamationCircle />
              </div>
              <h1 className="ml-8 pb-2 text-3xl">Suka Belajar Hal Baru</h1>
            </div>

            <div className="ml-[12%] w-[55%] mb-8">
              <p className="text-xl pb-2">
                Komunitas menyediakan wadah untuk berekplorasi tanpa batas
              </p>
            </div>
          </div>
          <Visi />
        </div>
      </div>
    </div>
  )
}

export default About
