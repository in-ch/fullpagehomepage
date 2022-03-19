import styled from "styled-components";


interface ShowProps {
    show:boolean;
    top?:number;
}
export const Container = styled.div`
    width:100%;
    height:100%;
    position:relative;
    overflow:hidden;
    margin:0px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
export const Img = styled.img<ShowProps>`
    width:270px;
    height:550px;
    box-shadow:-50px 30px 30px 0px rgb(50,50,50,0.2);
    border-radius:50px;
    opacity:${(props)=>props.show ? 1 : 0};
    transition: All 1s;
    transform:rotate(180deg);
    position:relative;
    top:${(props)=>props.show ? props.top : 0}px;
    @media (max-width: 520px) {
        width:190px;
        height:390px;
        border-radius:25px;
        top:-50px;
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
    opacity:${(props)=>props.show ? 1 : 0};
    transition: All 1s;
    position:relative;
    bottom:${(props)=>props.show ? props.top : 0}px;
    @media (max-width: 520px) {
        width:190px;
        height:390px;
        border-radius:25px;
        bottom:-50px;
    }
    @media (max-width: 380px) {
        width:160px;
        height:360px;
    }
`;
export const Wraper = styled.div`
    width:100%;
    height:14vh;
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
export const Top = styled.div`
    width:1000px;
    height:43vh;
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;
export const Bottom = styled.div`
    width:1000px;
    height:43vh;
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;