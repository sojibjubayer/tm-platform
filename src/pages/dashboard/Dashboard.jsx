import { FaAd, FaAsterisk, FaCircle, FaCompass, FaHome, FaList, FaShoppingCart, FaTasks, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";




import { IoMdMenu } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Dashboard = () => {
   
    const{user} = useContext(AuthContext)

    return (


        <div className="flex flex-col md:flex-row">
            <div className="md:w-64 md:min-h-screen bg-teal-400  md:mt-0">
                <ul className="menu p-4  ">

                    <li>
                        <img src={user?.photoURL} className="w-24 mx-auto rounded-full " alt="" />
                    </li>
                    <li className="my-2">
                        <NavLink to="/dashboard/newTask">
                            <FaUser></FaUser>
                            Create New Task</NavLink>
                    </li>
                    <li className="my-3">
                        <NavLink to="/dashboard/allDonationRequest">
                            <FaAsterisk></FaAsterisk>
                            Previous Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/contentManagement">
                            <FaList></FaList>
                            ToDo List</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/userHome">
                        <FaList></FaList>
                            OnGoing</NavLink>
                    </li>

                    <li className="my-3">
                        <NavLink to="/dashboard/myDonationrequest">
                            <FaTasks></FaTasks>
                            Completed</NavLink>
                    </li>
                    <li >
                        <NavLink to="/">
                        <FaHome></FaHome>
                            Home</NavLink>
                    </li>




                </ul>
            </div>

            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;