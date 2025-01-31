import { Outlet } from "react-router-dom";
import Navber from "../sharedPage/Navber";
import Footer from "../sharedPage/Footer";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;