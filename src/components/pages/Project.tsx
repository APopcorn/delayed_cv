import { Link, Outlet } from "react-router-dom";

const Project = () => {
    return (
        <div>
            <h1>Project Page</h1>
            <Link to="/project-gallery">Go to Project Gallery</Link>
            <Outlet />
        </div>
    );
};

export default Project;
