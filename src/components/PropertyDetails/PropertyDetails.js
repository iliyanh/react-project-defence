import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

import { useService } from "../../hooks/useService";
import { propertyServiceFactory } from "../../services/propertiesService";
import { PropertyContext } from "../../contexts/PropertyContext";
import { Comments } from "../Comments/Comments";
import * as commentService from "../../services/commentService";


export const PropertyDetails = () => {
    const { userId, isAuthenticated, userEmail } = useContext(AuthContext)
    const { deleteProperty } = useContext(PropertyContext)
    const [property, setProperty] = useState([]);
    const navigate = useNavigate();
    const propertyService = useService(propertyServiceFactory);
    const { propertyId } = useParams();


    const isOwner = property._ownerId === userId;
    const isUserNotOwner = isAuthenticated && !isOwner;

    useEffect(() => {
        Promise.all([
            propertyService.getOne(propertyId),
            commentService.getAll(propertyId)
        ]).then(([propertData, commentsData]) => {
            setProperty({
                ...propertData,
                commentsData,
            })
        })
    }, [propertyId])

    const onDeleteClick = () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm("Are you sure you want to delete this property?");
        if (result) {
            propertyService.delete(property._id)

            deleteProperty(property._id)

            navigate("/catalog")
        }
    }
    const onCommentSubmit = async (values) => {

        const response = await commentService.create(propertyId, values.comment)

        setProperty(state => ({
            ...state,
            commentsData: [...state.commentsData,
            {
                ...response,
                author: {
                    email: userEmail
                }
            }
            ],
        }))
    }

    return (
        <>
            <div className="details-container">
                <div class="image-container">

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
                                {property.commentsData && property.commentsData.map(x =>(
                                    <li key={x._id} className="comment">
                                        <p>{x.author.email}: {x.comment}</p>
                                    </li>
                                ))}
                            </ul>
                            </div>
                            {!property.commentsData?.length && (
                                <p className="no-comment">No comments.</p>

                            )}
                    </div>
                </div>
            </div>
            {isUserNotOwner && (
                <div className="notOwner" id="notOwner">
                    <Comments onCommentSubmit={onCommentSubmit} />
                </div>
            )}

        </>
    )
}