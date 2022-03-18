import { FullPage, Slide } from 'react-full-page';

const FFullPage = ({Slide1,Slide2,Slide3,Slide4}) => {

    return (
        <>
            <FullPage>
                <Slide>
                    {Slide1}
                </Slide>
                <Slide>
                    {Slide2}
                </Slide>
                <Slide>
                    {Slide3}
                </Slide>
                <Slide>
                    {Slide4}
                </Slide>
            </FullPage>
        </>
    );
};

export default FFullPage;