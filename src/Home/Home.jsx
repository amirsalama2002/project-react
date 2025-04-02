import "./Home.css";
import Heder from "./Heder";
import Contact from "./Contact";
import Folder from "./Folder";
function Home(){
    return(
        <div className="Home">
            <Heder/>
            <Contact/>
            <Folder/>
        </div>
    )
}

export default Home;