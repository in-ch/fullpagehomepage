import FFullPage from "src/components/FullPage";
import Slide1 from "../Slide/Slide1/Slide1";
import { Container } from "./HomeStyle";


const Home = () => {

    return (
        <Container>
            <FFullPage  
                Slide1={<Slide1 />}
                Slide2={<h1>22</h1>}
                Slide3={<h1>33</h1>}
            />
        </Container>
    );
}

export default Home;