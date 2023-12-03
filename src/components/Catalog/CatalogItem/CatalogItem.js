import { Link } from "react-router-dom"

export const CatalogItem = ({
    _id,
    address,
    type,
    imageUrl,
    bedrooms,
    price
}) => {

    return (
        <div className="house">
            <div className="house-img">
                <img src={imageUrl} />
            </div>
            <div className="house-info">
                <h1>{address}</h1>
                <p><span>Type: {type}</span></p>
                <p><span>Bedrooms: {bedrooms}</span></p>
                <p><span>Price: {price}</span>$</p>
            </div>
            <Link to={`/catalog/${_id}`} className="btn-details">Details</Link>

        </div>
    )

}