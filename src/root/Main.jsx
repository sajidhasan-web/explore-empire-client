import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import { Outlet} from "react-router-dom"
import { ToastContainer} from 'react-toastify';

const Main = () => {
    return (
        <div className="font-montserrat">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;