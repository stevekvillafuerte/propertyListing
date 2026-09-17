import "./Card.css"

function Card({ property }) {
    if (!property) return null;
    return (
        <div className="card">
            {property.superhost? <span className="superhost">Superhost </span> : null}
            <img src={property.image} alt={property.title} />
            <div className="card-content">
                <h2>{property.title}</h2>
                <p>{property.description}</p>
                <div className="capacity">
                    <p className="bedroom"># bedroom</p>
                    <p className="People"># People</p>
                </div>
                <hr/>
                <div className="price-rate">
                    <p className="price">${property.price}<span>/Night</span></p>
                    <span>
                        <img src="../public/images/starfill.svg" alt="star" />
                        <p>{property.rating}</p>
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default Card