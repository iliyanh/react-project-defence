import { Link } from "react-router-dom"

export const Create = () => {
    return (
        <div className="wrapper-create">
            <div className="form-box register">
                <h2>Sell your property</h2>
                <form action="#">
                    <div className="input-box">
                        <span className="icon"><ion-icon name="map"></ion-icon></span>
                        <input type="text" required></input>
                        <label>Address</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="home"></ion-icon></span>
                        <input type="text" required></input>
                        <label>Type</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="bed"></ion-icon></span>
                        <input type="text" required></input>
                        <label>Bedrooms</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="expand"></ion-icon></span>
                        <input type="text" required></input>
                        <label>Size</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="pricetag"></ion-icon></span>
                        <input type="text" required></input>
                        <label>Price</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><ion-icon name="information-circle"></ion-icon></span>
                        <input type="text" required></input>
                        <label>Description</label>
                    </div>

                    <button type="submit" className="btn">Create</button>

                </form>
            </div>
        </div>
    )
}