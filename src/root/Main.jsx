import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import { Outlet} from "react-router-dom"

const Main = () => {
    return (
        <div className="font-montserrat">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;