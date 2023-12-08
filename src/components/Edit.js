import { useForm } from "../hooks/useForm"
import { useParams } from "react-router"
import { useContext, useEffect } from "react";

import { useService } from "../hooks/useService";
import { propertyServiceFactory } from "../services/propertiesService";
import { PropertyContext } from "../contexts/PropertyContext";

export const Edit = () => {
    const { propertyId } = useParams();
    const propertyService = useService(propertyServiceFactory)
    const { onEditProperty} = useContext(PropertyContext);

    const {values, changeHandler, onSubmit, changeValues} = useForm({
        _id: "",
        address: "",
        type: "",
        imageUrl: "",
        bedrooms: "",
        size: "",
        price: "",
        description: "",
    }, onEditProperty)

    useEffect(() => {
        propertyService.getOne(propertyId)
            .then(result => {
                changeValues(result)
            })
    }, [propertyId])


    return (
        <div className="wrapper-create">
            <div className="form-box register">
                <h2>Edit your Property</h2>
                <form method="POST" onSubmit={onSubmit}>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="map"></ion-icon></span>
                        <input 
                        type="text" 
                        name="address"
                        value={values.address}
                        onChange={changeHandler}
                        required></input>
                        <label>Address</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="home"></ion-icon></span>
                        <input 
                        type="text" 
                        name="type"
                        value={values.type}
                        onChange={changeHandler}
                        required></input>
                        <label>Type</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="image"></ion-icon></span>
                        <input 
                        type="text" 
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        required></input>
                        <label>Image</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="bed"></ion-icon></span>
                        <input 
                        type="text" 
                        name="bedrooms"
                        value={values.bedrooms}
                        onChange={changeHandler}
                        required></input>
                        <label>Bedrooms</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="expand"></ion-icon></span>
                        <input 
                        type="text" 
                        name="size"
                        value={values.size}
                        onChange={changeHandler}
                        required></input>
                        <label>Size</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="pricetag"></ion-icon></span>
                        <input 
                        type="text" 
                        name="price"
                        value={values.price}
                        onChange={changeHandler}
                        required></input>
                        <label>Price</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="information-circle"></ion-icon></span>
                        <input 
                        type="text" 
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                        required></input>
                        <label>Description</label>
                    </div>

                    <button type="submit" className="btn">Edit</button>

                </form>
            </div>
        </div>
    )
}