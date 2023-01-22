import { FaCheckCircle } from "react-icons/fa"
function Visi() {
  return (
    <div className="col-span-3 justify-center about grid grid-cols-3 text-lightGrey font-inter text-2xl">
      <div className="about col-span-3 w-[90%] ml-[7%] mb-16 mt-8">
        <h1>
          Surabaya Dev bertujuan menjadi wadah talenta teknologi dengan
          memanfaatkan potensinya untuk meningkatkan skill tech di bidang
          programming maupun digital teknologi agar dapat saling bersinergi
          berkolaborasi.
        </h1>
      </div>

      <div className="content">
        <div className="tittle w-[80%] ml-[20%] flex items-center">
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
        <div className="tittle w-[80%] ml-[28%] flex items-center">
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
        <div className="tittle w-[80%] ml-[20%] flex items-center">
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
