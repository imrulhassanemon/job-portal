import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MinLayout = () => {
    return (
        <div className="max-w-7xl mx-auto border border-red-600">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MinLayout;