import { NavLink } from "react-router-dom";
import { FaGlobeAsia } from "react-icons/fa";

export default function Navbar() {

    const linkClass = ({ isActive }) =>
        isActive
            ? "text-blue-700 font-semibold"
            : "text-slate-700 hover:text-blue-700 transition";

    return (

        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

            <div className="max-w-7xl mx-auto px-8">

                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}

                    <div className="flex items-center gap-3">

                        <FaGlobeAsia
                            size={34}
                            className="text-blue-700"
                        />

                        <div>

                            <h1 className="text-xl font-bold">

                                AI Climate Digital Twin

                            </h1>

                            <p className="text-xs text-gray-500">

                                Machine Learning & Digital Twin

                            </p>

                        </div>

                    </div>

                    {/* Navigation */}

                    <div className="hidden md:flex gap-8 text-[17px]">

                        <NavLink to="/" className={linkClass}>
                            Home
                        </NavLink>

                        <NavLink to="/prediction" className={linkClass}>
                            Prediction
                        </NavLink>

                        <NavLink to="/simulator" className={linkClass}>
                            Simulator
                        </NavLink>

                        <NavLink to="/analytics" className={linkClass}>
                            Analytics
                        </NavLink>

                        <NavLink to="/history" className={linkClass}>
                            History
                        </NavLink>

                        <NavLink to="/about" className={linkClass}>
                            About
                        </NavLink>

                    </div>

                </div>

            </div>

        </nav>

    );

}