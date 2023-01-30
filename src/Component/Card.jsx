import Logo from "../assets/hero.png"

const Card = () => {
  return (
    <div className="card bg-white shadow-xl mb-16">
      <figure>
        <img src={Logo} alt="Shoes" className="w-48" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
