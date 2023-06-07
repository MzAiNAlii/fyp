import About from "./About/About"
import Footer from "../Footer/Footer"
import Packages from "./Packages/Packages"
import Searchbar from "./Searchbar/Searchbar"
import "./home.css"

let Home = () => {
return( 
      <>
      <div className="home__data">
            <h1 className="home__title">Trek Buddy </h1>
            <span className="home__subtitle">Your gateway to better Travel Experience</span>
            <Searchbar/>
            <About/>
            <Packages/>
        </div>
        <Footer/>
        </>
)
}

export default Home