import { FocusProps } from "../Slide1/Slide1";
import { Container, Img, Img2,Wraper } from "./Slide2Style";

const Slide2 = ({scrollNum}:FocusProps) => {

    return (
        <Container>
            <Img 
                src={require("../../../assets/imgs/HotIssue.png")} 
                show={scrollNum===1}
            />
            <Img2
                src={require("../../../assets/imgs/HotIssue.png")} 
                show={scrollNum===1}
            />
            <Wraper>
                <p><span>실시간 핫이슈</span>에서 같이</p>
                <p>인기 트렌드를 찾아보아요.</p>
            </Wraper>
        </Container>
    );
};

export default Slide2;