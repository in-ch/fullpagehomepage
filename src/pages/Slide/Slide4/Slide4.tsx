import { FocusProps } from "../Slide1/Slide1";
import { Container, Img, Wraper,Top, Bottom, Img2 } from "./Slide4Style";

const Slide4 = ({scrollNum}:FocusProps) => {

    return (
        <Container>
            <Top>
                <Img 
                    src={require("../../../assets/imgs/HotIssue.png")} 
                    show={scrollNum===3}
                    top={-300}
                />
                <Img 
                    src={require("../../../assets/imgs/HotIssue.png")} 
                    show={scrollNum===3}
                    top={-400}
                />
                <Img 
                    src={require("../../../assets/imgs/HotIssue.png")} 
                    show={scrollNum===3}
                    top={-200}
                />
            </Top>
            <Wraper>
                <p><span>실시간 핫이슈</span>에서 같이</p>
                <p>인기 트렌드를 찾아보아요.</p>
            </Wraper>
            <Bottom>
                <Img2 
                    src={require("../../../assets/imgs/HotIssue.png")} 
                    show={scrollNum===3}
                    top={-180}
                />
                <Img2 
                    src={require("../../../assets/imgs/HotIssue.png")} 
                    show={scrollNum===3}
                    top={-80}
                />
                <Img2 
                    src={require("../../../assets/imgs/HotIssue.png")} 
                    show={scrollNum===3}
                    top={-270}
                />
            </Bottom>
        </Container>
    );
};

export default Slide4;