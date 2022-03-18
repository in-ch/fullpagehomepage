import { useEffect, useState } from "react";
import TText from "src/components/TText";
import { Container, ContentWrapper, IInputButton, Img, PP, PP2, SubText } from "./Slide1Style";

const Slide1 = () => {

    const [show, setShow] = useState(false);

    useEffect(()=>{
        setShow(true);
    },[0]);

    return (
        <Container>
            <ContentWrapper>
                <PP>
                    <TText
                        duration={30000}
                        delay={50}
                        text="최신 의료 학술지를"
                    />
                </PP>
                <PP2>
                    <TText
                        duration={30000}
                        delay={50}
                        text="한 번에, 그리고 간편하게"
                    />
                </PP2>

                <SubText
                    show={show}
                >자신에 진료과에 맞는 최신 학술논문을 확인해 보세요.</SubText>
                <IInputButton 
                    value="IOS"
                    type="button"
                    show={show}
                />
                <IInputButton 
                    value="Android"
                    type="button"
                    show={show}
                />
            </ContentWrapper>
            <Img 
                src={require("../../../assets/imgs/mainPage.png")} 
                show={show}
            />
        </Container>
    );
};

export default Slide1;