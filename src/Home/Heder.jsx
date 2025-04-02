import { Link } from "react-router-dom";
import "./Heder.css";
function Heder(){
   
    return(
        <div className="Heder">
        <div className="home-hero__text">
        {/* <h1> <strong>Amir Salama</strong><br/>Front-End Developer</h1> */}
        <h1> <strong>Road to</strong><br/>2025</h1>
        
        <div className="home-hero__text--small">
            {/* <p>
            I am Amir Salama, a programming  <br/> engineer, and I work as a web developer</p> */}
            <p>
            Insights on marketing in 2025 with exclusive videos from  <br/>technology partners, clients and our own experts</p>
        </div>
       <Link href="/en/wpp-iq/2024/12/road-to-2025" className="home-hero__button button"  role="button">Watch the series</Link>
    </div>
    </div>
    )
}

export default Heder;