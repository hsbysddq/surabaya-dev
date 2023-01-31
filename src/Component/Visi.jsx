import { FaCheckCircle } from "react-icons/fa"

function Visi() {
  return (
    <div className="container col-span-3 justify-center about grid grid-cols-3 text-lightGrey font-inter text-2xl pt-16">
      <h1 className="col-span-3 flex justify-center text-tes font-inter text-4xl font-bold  pb-12">
        Visi & Misi
      </h1>

      <div className="content">
        <div className="tittle flex items-center text-tes text-3xl">
          <FaCheckCircle />
          <h1 className="ml-6">Wadah Belajar</h1>
        </div>

        <div className="deskripsi flex">
          <p className="mt-8 w-[85%]">
            Menjadi wadah belajar pengiat IT untuk bisa terus update mengenai
            techindustry saat ini.
          </p>
        </div>
      </div>

      <div className="content">
        <div className="tittle flex items-center text-tes text-3xl">
          <FaCheckCircle />
          <h1 className="ml-6">Koneksi</h1>
        </div>

        <div className="deskripsi flex">
          <p className="mt-8 w-[85%]">
            Memperluas relasi melalui komunitas untuk menjalin kebermanfaatan.
          </p>
        </div>
      </div>

      <div className="content">
        <div className="tittle flex items-center text-tes text-3xl">
          <FaCheckCircle />
          <h1 className="ml-6">Berbagi Ilmu</h1>
        </div>

        <div className="deskripsi flex">
          <p className="mt-8 w-[85%]">
            Komunitas adalah wadah yang tepat untuk saling berbagi ilmu,
            pengalaman maupun wawasan tentang update teknologi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Visi
