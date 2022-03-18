import styled from "styled-components";


interface ShowProps {
    show:boolean;
}
export const Container = styled.div`
    width:100%;
    height:100%;
    background-image:url(${require("../../../assets/imgs/mainImg2.png")});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    overflow:hidden;
`;

export const PP = styled.p`
    font-size:60px;
    color:white;
    font-weight:bold;
    @media (max-width: 520px) {
        font-size:30px;
    }
`;
export const PP2 = styled.p`
    font-size:60px;
    color:white;
    font-weight:bold;
    margin-top:20px;
    @media (max-width: 520px) {
        font-size:30px;
        margin-top:8px;
    }
`;
export const ContentWrapper = styled.div`
    width:60%;
    height:100vh;
    padding-left:100px;
    padding-top:100px;
    padding-right:10px;
    @media (max-width: 520px) {
        width:100%;
        padding-left:20px;
        padding-top:100px;
    }
`;
export const Img = styled.img<ShowProps>`
    width:270px;
    height:550px;
    transform: rotate(12deg);
    box-shadow:50px 30px 30px 0px rgb(50,50,50,0.4);
    border-radius:50px;
    position:absolute;
    right:${(props)=>props.show ? 80 : 0}px;
    bottom:${(props)=>props.show ? 30 : 0}px;
    opacity:${(props)=>props.show ? 1 : 0};
    transition: All 2s;
    z-index:1;
    @media (max-width: 520px) {
        width:190px;
        height:390px;
        transform: rotate(12deg);
        border-radius:25px;
    }
`;
export const IInputButton = styled.input<ShowProps>`
    width:200px;
    height:50px;
    background-color:#b2a3ff;
    border:0;
    outline:0;
    border-radius:25px;
    margin-top:80px;
    color:white;
    margin-right:20px;
    text-align:center;
    box-shadow:10px 10px 20px 0px rgb(0,0,0,0.4);
    transition:All 0.5s; 
    opacity:${(props)=>props.show ? 1 : 0};
    z-index:2;
    position:relative;
    &:hover{
        background-color:#fff;
        color:#b2a3ff;
    }
    @media (max-width: 520px) {
        width:120px;
        height:40px;
        margin-top:50px;
    }
`;
export const SubText = styled.p<ShowProps>`
    font-size:18px;
    color:#fff;
    margin-top:${(props)=>props.show ? 30 : 80}px;
    opacity:${(props)=>props.show ? 0.8 : 0};
    transition:All 2s;
`;