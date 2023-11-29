import { CatalogItem } from "./CatalogItem/CatalogItem"

export const Catalog = ({
    properties
}) => {
    return (
        <div className="wrapper-catalog">
            <section className="house-market">
                <h1>Properties for sale</h1>
                <div className="offer-list">
                    {/* {{#each games}} */}
                    
                    {properties.map(property => 
                        <CatalogItem key={property._id} {...property}/>)}
                </div>
                {properties.length === 0 && (
                 <div className="no-offer">
                        <p>There are no game offers found!</p>
                    </div> 
                )}
            </section>
        </div>

    )
}