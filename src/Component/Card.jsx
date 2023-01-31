import Logo from "../assets/3.jpeg"

const Card = () => {
  return (
    <div className="card bg-white shadow-xl mb-16">
      <figure>
        <img src={Logo} alt="Shoes" className="w-48 pt-8 rounded-[5%]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">React Js</h2>
        <p>
          SAVE DATE! 🗓 <br /> Sabtu, 17 Desember 2022 <br /> ⏰ 15.00 - 16.30
          WIB 💻 <br />
        </p>
        <div className="card-actions justify-end pt-2">
          <button className="btn btn-primary">Daftar</button>
        </div>
      </div>
    </div>
  )
}

export default Card
