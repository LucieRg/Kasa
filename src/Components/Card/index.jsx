import "../../styles/card.scss"
import { Link } from "react-router-dom"

function Card ({title, cover, id}) {
    return (
        <div className="card">
           <Link to={`/Detail/${id}`}>
            <img className="card-img" src={cover} alt={title} />
            <h3>{title}</h3>
            </Link>
        </div>
    )
}

export default Card