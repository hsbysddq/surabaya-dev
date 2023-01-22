import { FaCheckCircle } from "react-icons/fa"
function Visi() {
  return (
    <div className="col-span-3 justify-center about grid grid-cols-3 text-lightGrey font-inter text-2xl">
      <div className="content">
        <div className="tittle flex">
          <FaCheckCircle />
          <h1 className="ml-6">Wadah Belajar</h1>
        </div>

        <div className="deskripsi flex justify-center">
          <p className="mt-8 w-[80%]">
            Menjadi wadah belajar pengiat IT untuk bisa terus update mengenai
            techindustry saat ini.
          </p>
        </div>
      </div>

      <div className="content">
        <div className="tittle flex">
          <FaCheckCircle />
          <h1 className="ml-6">Koneksi</h1>
        </div>

        <div className="deskripsi flex justify-center">
          <p className="mt-8 w-[80%]">
            Memperluas relasi melalui komunitas untuk menjalin kebermanfaatan.
          </p>
        </div>
      </div>

      <div className="content">
        <div className="tittle flex">
          <FaCheckCircle />
          <h1 className="ml-6">Berbagi Ilmu</h1>
        </div>

        <div className="deskripsi flex justify-center">
          <p className="mt-8 w-[80%]">
            Komunitas adalah wadah yang tepat untuk saling berbagi ilmu,
            pengalaman maupun wawasan tentang update teknologi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Visi
