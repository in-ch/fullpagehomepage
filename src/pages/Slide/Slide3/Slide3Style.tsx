import styled from "styled-components";


interface ShowProps {
    show:boolean;
}
export const Container = styled.div`
    width:100%;
    height:100%;
    position:relative;
    overflow:hidden;
    margin:0px;
`;
export const Img = styled.img<ShowProps>`
    width:270px;
    height:550px;
    box-shadow:-50px 30px 30px 0px rgb(50,50,50,0.2);
    border-radius:50px;
    position:absolute;
    opacity:${(props)=>props.show ? 1 : 0};
    top:-100px;
    left:${(props)=>props.show ? -20 : -550}px;
    transition: All 1s;
    transform:rotate(90deg);
    @media (max-width: 520px) {
        width:190px;
        height:390px;
        border-radius:25px;
        top:-50px;
        left:${(props)=>props.show ? -20 : -550}px;
    }
    @media (max-width: 380px) {
        width:160px;
        height:360px;
    }
`;
export const Img2 = styled.img<ShowProps>`
    width:270px;
    height:550px;
    box-shadow:-50px 30px 30px 0px rgb(50,50,50,0.2);
    border-radius:50px;
    position:absolute;
    opacity:${(props)=>props.show ? 1 : 0};
    bottom:-100px;
    right:${(props)=>props.show ? -20 : -550}px;
    transform:rotate(270deg);
    transition: All 1s;
    @media (max-width: 520px) {
        width:190px;
        height:390px;
        border-radius:25px;
        bottom:80px;
        right:${(props)=>props.show ? -20 : -550}px;
    }
    @media (max-width: 380px) {
        width:160px;
        height:360px;
    }
`;
export const Wraper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    p{
        font-size:30px;
        position:relative;
        top:-0px;
        @media (max-width: 520px) {
            top:-55px;
        }
        span{
            color:#b2a3ff;
            font-weight:bold;
        }
    }
    p:nth-child(2){
        margin-top:10px;
    }
`;