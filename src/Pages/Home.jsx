import Cards from "../Components/Cards/Cards";
import { Navigate, useLoaderData } from "react-router-dom";

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <Cards></Cards>
    );
};

export default Home;