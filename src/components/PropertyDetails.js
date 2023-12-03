export const PropertyDetails = () => {
    return (
        <div class="details-container">
            <div class="image-container">
                {/* <!-- Replace 'image.jpg' with the actual image source --> */}
                <img src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais" alt="example1" alt="Property Image"/>
            </div>
            <div class="info-container">
                <div class="property-info">
                    <p><strong>Address:</strong> 123 Main Street</p>
                    <p><strong>Type:</strong> House</p>
                    <p><strong>Bedrooms:</strong> 3</p>
                    <p><strong>Size:</strong> 150 sqm</p>
                    <p><strong>Price:</strong> $500,000</p>
                </div>
                <div class="description">
                    <p>This is a beautiful property with amazing features. Lorem ipsum dolor sit amet, consectetur adipiscing elit....This is a beautiful property with amazing features. Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
                </div>
                <div>
                    <button type="submit" className="dtl-btn-edit">Edit</button>
                    <button type="submit" className="dtl-btn-delete">Delete</button>
                    <button type="submit" className="dtl-btn-buy">Buy</button>
                </div>
            </div>
        </div>
    )
    //     return (
    //         <div className="wrapper-details">
    //             <div id="img-wrapper" className="img-wrapper">
    //                 <img src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais" alt="example1" />
    //             </div>
    //             <div id="info-wrapper">
    //                 <p><strong>Band:</strong><span id="details-singer">$</span></p>
    //                 <p>
    //                     <strong>Album name:</strong><span id="details-album">$</span>
    //                 </p>
    //                 <p><strong>Release date:</strong><span id="details-release">$</span></p>
    //                 <p><strong>Label:</strong><span id="details-label">$</span></p>
    //                 <p><strong>Sales:</strong><span id="details-sales">$</span></p>
    //             </div>
    //             {/* ${user._id !== album._ownerId && !isAlreadyLiked
    //           ? html`<a href="" id="like-btn" @click=${onLike}>Like</a>`
    //           : nothing
    //         }
    //             ${user._id == album._ownerId
    //       ? html`<!--Edit and Delete are only for creator-->
    //             <a href="/albums/${album._id}/edit" id="edit-btn">Edit</a>
    //             <a href="/albums/${album._id}/delete" id="delete-btn" @click=${deleteHandler}>Delete</a>`
    //       : nothing
    //     }

    //  */}
    //         </div>

    //     )
}