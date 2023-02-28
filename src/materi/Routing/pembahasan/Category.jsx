import { useParams } from "react-router-dom";

const Category = () => {
    const params = useParams();


    return <h1>Ini halaman Category {params.name}</h1>;
};

export default Category