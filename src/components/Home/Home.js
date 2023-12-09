import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <div className="wrapper-home">
                <section className="home">
                    <div className="home-content">
                        <h1>Your Number One Place for Real Estate Excellence</h1>
                        
                        <h3>Join the countless individuals who have made us their top choice for buying and selling properties.Your dream home awaits—begin your search today.</h3>
                        
                        <Link to={"/catalog"}><button type="submit" className="btn-explore">Explore</button></Link>
                        
                    </div>
                </section>
            </div>
        </>
    )
}