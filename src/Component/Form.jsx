const Form = () => {
  return (
    <div className="container">
      <div className="justify-center">
        <h1 className="flex justify-center text-lightGrey font-inter text-4xl font-bold pb-16">
          CAREER
        </h1>
        <div className="grid grid-cols-1">
          <div className="card bg-white shadow-xl justify-center items-center mb-16">
            <h1 className="flex justify-center text-tes font-inter text-4xl font-bold pb-12 mt-16">
              DAFTAR
            </h1>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Firs Name</span>
              </label>
              <input
                type="text"
                placeholder="Nama Depan"
                className="input input-bordered w-full max-w-xs mb-6"
              />

              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Nama Belakang"
                className="input input-bordered w-full max-w-xs mb-6"
              />

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs mb-12"
              />

              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-20">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
