import { useLocation } from "react-router-dom";

function Projects() {    

    const location = useLocation();
    const { message } = location.state || {};

    return (
        
        <div>
            {message && <p>{message}</p>}
            {<p>Projects</p>}
        </div>
    );
}

export default Projects