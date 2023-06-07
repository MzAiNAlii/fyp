import "./Packages.css"

let Packages = () =>{
    return(
        <>
            <h1 className="header">What We Offer</h1>
            <div className="section_data">
                <div className="Section1">
                <i className='bx bxs-check-circle'></i>
                <h1 >Economy</h1>
                <p className="Section_content2">Budget-friendly Accommodation</p>
                <p>Discounts for group bookings</p>
                <p>Standard Transportation Services</p>
                <p>Affordable dining options & street food experiences</p>
                </div>

                 <div className="Section2">
                 <i className='bx bxs-check-circle'></i>
                <h1 >First Class</h1>
                <p className="Section_content2">Premium hotels offering a higher level of comfort</p>
                <p>Access to priority check-in & transportation hubs</p>
                <p>Availability of upgraded transportation options</p>
                <p>Fine dining experiences, showcasing local & international cuisine</p>
                </div>
                 
                 <div className="Section3">
                 <i className='bx bxs-check-circle'></i>
                <h1 >Premium</h1>
                <p className="Section_content2">High-end Accommodation</p>
                <p>Fine Dining opptions</p>
                <p>Luxury Transportation arrangements</p>
                <p>Exclusive Experiences with private guided tours</p>
                </div>
        </div>
        </>
    )
}

export default Packages