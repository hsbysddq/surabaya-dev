import { FaCheckCircle } from "react-icons/fa"
function Visi() {
  return (
    <div className="col-span-3 justify-center about grid grid-cols-3 text-lightGrey font-inter text-2xl">
      <div>
        <FaCheckCircle />
        <h1>Wadah Belajar</h1>
        <p className="mt-8 w-[80%]">
          Menjadi wadah belajar pengiat IT untuk bisa terus update mengenai
          techindustry saat ini.
        </p>
      </div>

      <div>
        <FaCheckCircle />
        <h1>Koneksi</h1>
        <p className="mt-8 w-[80%]">
          Menjadi wadah belajar pengiat IT untuk bisa terus update mengenai
          techindustry saat ini.
        </p>
      </div>

      <div>
        <FaCheckCircle />
        <h1>Berbagi Ilmu</h1>
        <p className="mt-8 w-[80%]">
          Komunitas adalah wadah yang tepat untuk saling berbagi ilmu,
          pengalaman maupun wawasan tentang update teknologi.
        </p>
      </div>
    </div>
  )
}

export default Visi
