import { useEffect, useState } from "react";
import FFullPage from "src/components/FullPage";
import Slide1 from "../Slide/Slide1/Slide1";
import Slide2 from "../Slide/Slide2/Slide2";
import { Container } from "./HomeStyle";


const Home = () => {

    const [scrollNum, setScrollNum] = useState<number>(-1);

    useEffect(()=>{
        setScrollNum(0);
    },[]);

    const listener = () => {
        let value = (window.pageYOffset+10) / window.innerHeight;
        console.log(Math.floor(value));
        setScrollNum(Math.floor(value));
      };
    
      useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
          window.removeEventListener("scroll", listener);
        };
      });


    return (
        <Container>
            <FFullPage  
                Slide1={<Slide1 
                            scrollNum={scrollNum}
                        />}
                Slide2={<Slide2 
                            scrollNum={scrollNum}
                        />}
                Slide3={<h1>33</h1>}
            />
        </Container>
    );
}

export default Home;