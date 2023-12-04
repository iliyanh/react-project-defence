import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";

import { useService } from "../hooks/useService";
import { propertyServiceFactory } from "../services/propertiesService";


export const PropertyDetails = () => {
    const { userId } = useContext(AuthContext)
    const navigate = useNavigate();
    const [property, setProperty] = useState({});
    const propertyService = useService(propertyServiceFactory);
    const { propertyId } = useParams();

    useEffect(() => {
        propertyService.getOne(propertyId)
            .then(result => {
                setProperty(result)
            })
    }, [propertyId])


    const isOwner = property._ownerId === userId;

    const onDeleteClick = () => {
        propertyService.delete(property._id)
        
        //TODO delete property from state
        navigate("/catalog")
    }

    return (
        <div className="details-container">
            <div class="image-container">
                {/* <!-- Replace 'image.jpg' with the actual image source --> */}
                <img src={property.imageUrl} />
            </div>
            <div className="info-container">
                <div className="property-info">
                    <p><strong>Address:</strong> {property.address}</p>
                    <p><strong>Type:</strong> {property.type}</p>
                    <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                    <p><strong>Size:</strong> {property.size}</p>
                    <p><strong>Price:</strong> {property.price}</p>
                </div>
                <div className="description">
                    <p>{property.description}</p>
                </div>

                    {isOwner ?
                        <div id="owner">
                            <Link to={`/catalog/${property._id}/edit`} className="dtl-btn-edit">Edit</Link>
                            <button className="dtl-btn-delete" onClick={onDeleteClick}>Delete</button>
                        </div>
                        :
                        <div id="notOwner">
                        <Link to={""} className="dtl-btn-buy">Buy</Link>
                        </div>
                    }


            </div>
        </div>
    )
}