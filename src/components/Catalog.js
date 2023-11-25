export const Catalog = () => {
    return (
        <div className="wrapper-catalog">
            <section className="house-market">
                <h1>Properties for sale</h1>
                <div className="offer-list">
                    {/* {{#each games}} */}
                    <div className="house">
                        <div className="house-img">
                            <img src="/house1.jpeg" />
                        </div>
                        <div className="house-info">
                            <h1>London</h1>
                            <p><span>Type: </span></p>
                            <p><span>Bedrooms: </span></p>
                            <p><span>Price: </span>$</p>
                        </div>

                        <a href="" className="btn-details">Details</a>
                    </div>
                    <div className="house">
                        <div className="house-img">
                            <img src="/house2.jpeg" />
                        </div>
                        <div className="house-info">
                            <h1>Name</h1>
                            <p><span>Type: </span></p>
                            <p><span>Bedrooms: </span></p>
                            <p><span>Price: </span>$</p>
                        </div>

                        <a href="" className="btn-details">Details</a>
                    </div>
                    <div className="house">
                        <div className="house-img">
                            <img src="/house3.jpeg" />
                        </div>

                        <div className="house-info">
                            <h1>Name</h1>
                            <p><span>Type: </span></p>
                            <p><span>Bedrooms: </span></p>
                            <p><span>Price: </span>$</p>
                        </div>

                        <a href="" className="btn-details">Details</a>
                    </div>



                </div>
                 <div className="no-offer">
                        <p>There are no game offers found!</p>
                    </div> 
            </section>
        </div>

    )
}