import { Link, useLocation } from "react-router-dom";

const Choice = ({ icon, name, path }) => {
    const location = useLocation();

    const isActive = location.pathname === path;

    return (
        <Link to={path}>
            <div
                className={`flex items-center gap-1 lg:ml-4 sm:ml-1 mb-3 cursor-pointer
                ${isActive ? "font-bold underline" : ""}`}
            >
                <p className="text-lg">{icon}</p>
                <p className={`text-l hidden sm:block`}>
                    {name}
                </p>
            </div>
        </Link>
    );
};

export default Choice;
