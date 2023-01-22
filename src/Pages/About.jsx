import { FaCheckCircle } from "react-icons/fa"

function About() {
  return (
    <div className="justify-center about grid grid-cols-3 text-lightGrey font-inter text-2xl">
      <h1 className="col-span-3 mb-8">
        Surabaya Dev bertuuan menjadi wadah talenta teknologi dengan
        memanfaatkan potensinya dengan meningkatkan skill tech di bidang
        programming maupun digital teknologi agar dapat saling bersinergi
        berkolaborasi.
      </h1>

      <h1 className="flex col-span-3 justify-center text-lightGrey font-inter text-3xl font-bold pb-16">
        Visi & Misi
      </h1>

      <ul className="col-span-3">
        <li className="">
          <FaCheckCircle /> Wadah Belajar
        </li>
        <li className="">
          <FaCheckCircle />
          Koneksi
        </li>
        <li className="">
          <FaCheckCircle />
          Berbagi Ilmu
        </li>
      </ul>

      <p className="mt-8 w-[80%]">
        Menjadi wadah belajar pengiat IT untuk bisa terus update mengenai
        techindustry saat ini.
      </p>

      <p className="mt-8 w-[80%]">
        Komunitas adalah wadah yang tepat untuk saling berbagi ilmu, pengalaman
        maupun wawasan tentang update teknologi.
      </p>
    </div>
  )
}

export default About
