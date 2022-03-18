import TypeAnimation from 'react-type-animation';

const TText = ({text,delay,duration}) => {

    return (
        <>
            <TypeAnimation
                cursor={false}
                sequence={[delay,text,duration]}
                wrapper="h1"
            />
        </>
    );
};

export default TText;