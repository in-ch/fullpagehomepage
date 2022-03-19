import { useEffect, useState } from "react";
import FFullPage from "src/components/FullPage";
import Slide1 from "../Slide/Slide1/Slide1";
import Slide2 from "../Slide/Slide2/Slide2";
import Slide3 from "../Slide/Slide3/Slide3";
import Slide4 from "../Slide/Slide4/Slide4";
import Slide5 from "../Slide/Slide5/Slide5";
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
                Slide3={<Slide3 
                            scrollNum={scrollNum}
                        />}
                Slide4={<Slide4 
                            scrollNum={scrollNum}
                        />}
                Slide5={<Slide5
                    scrollNum={scrollNum}
                />}
            />
        </Container>
    );
}

export default Home;