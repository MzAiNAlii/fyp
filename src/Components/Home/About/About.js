import "./about.css"

let About = () => {
    return(
      <section className="about__section" id="about">
     <h2 className="section__title">Plan your trip with Trek Buddy</h2>

      <div className="about__content">
         <p>Welcome to our travel website, your ultimate destination for unforgettable journeys and seamless travel experiences. We are dedicated to providing you with a seamless platform to discover, plan, and book your dream vacations.</p>
         </div>

         <div className="about__data">
            <div>  <i className='bx bxs-check-circle'></i> </div>
            <p>Explore a wide range of destinations across Pakistan</p>
            
            <div>  <i className='bx bxs-check-circle'></i> </div>
            <p>Efforlessly choose hotels, resorts, and vacation rentals that suits your preferences and budget.</p>

            <div>  <i className='bx bxs-check-circle'></i> </div>
            <p>Immerse yourself in a world of exciting activities and attractions.</p>
             
            <div>  <i className='bx bxs-check-circle'></i> </div>
            <p>Embark on an extraordinary travel adventure with our travel website</p>              
          </div>          
      </section> 
    )
}

export default About