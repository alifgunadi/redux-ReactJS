import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('../home');
    }
    
    return(
        <div>
            <h1>Ini halaman About</h1>
            <button onClick={handleClick}>Click menuju home</button>
        </div>
    )
};

export default About;