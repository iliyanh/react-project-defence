import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";

import { useService } from "../hooks/useService";
import { propertyServiceFactory } from "../services/propertiesService";
import { PropertyContext } from "../contexts/PropertyContext";
import { Comments } from "./Comments/Comments";


export const PropertyDetails = () => {
    const { userId, isAuthenticated } = useContext(AuthContext)
    const { deleteProperty } = useContext(PropertyContext)
    const navigate = useNavigate();
    const [property, setProperty] = useState([]);
    const propertyService = useService(propertyServiceFactory);
    const { propertyId } = useParams();
    const isOwner = property._ownerId === userId;
    const guest = isAuthenticated && !isOwner;

    useEffect(() => {
        propertyService.getOne(propertyId)
            .then(result => {
                setProperty(result)
            })
    }, [propertyId])

    const onDeleteClick = () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you want to delete this property?");
        if (result) {
            propertyService.delete(property._id)
            deleteProperty(property._id)

            //TODO delete property from state
            navigate("/catalog")
        }
    }

    return (
        <>
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

                    {isOwner && (
                        <div id="owner">
                            <Link to={`/catalog/${property._id}/edit`} className="dtl-btn-edit">Edit</Link>
                            <button className="dtl-btn-delete" onClick={onDeleteClick}>Delete</button>
                        </div>
                    )}
                    <div className="info-section">
                        <div className="details-comments">
                            <h2>Comments:</h2>
                            <ul>
                                <li className="comment">
                                    <p>Author: comment</p>
                                </li>
                                <li className="comment">
                                    <p>Author: comment</p>
                                </li>
                                <li className="comment">
                                    <p>Author: comment</p>
                                </li>
                            </ul>

                            <p className="no-comment">No comments.</p>
                        </div>
                    </div>
                </div>
            </div>
            {guest && (
                <div className="notOwner" id="notOwner">
                    <Comments />
                </div>
            )}

        </>
    )
}