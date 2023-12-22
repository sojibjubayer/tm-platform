import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="navbar bg-teal-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>What is TMP</a></li>
                            <li><a>Beneficial for</a></li>
                            <li><a>How to use</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost bg-teal-500 text-xl">TMP</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>What is TMP</a></li>
                        <li><a>Beneficial for</a></li>
                        <li><a>How to use</a></li>
                    </ul>
                </div>
                {
                    !user ? <div className="navbar-end ">
                        <Link to='register'>
                            <button className="btn mr-3">Register</button>
                        </Link>
                        {/* <a className="btn">Login</a> */}
                    </div>:''
               }
                {
                    user ? <>
                        <p className="p-2 mr-3">{user?.displayName}</p>
                        <img src={user?.photoURL} className="w-8 rounded-full mr-3" alt="" />
                        <button onClick={handleLogOut} className="">Logout</button>
                    </> : <>
                        <li><NavLink to="/login" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " bg-teal-400 rounded-lg p-2 text-black " : ""
                        }>Login</NavLink></li>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;