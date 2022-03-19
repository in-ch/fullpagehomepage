import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
    width:100%; 
    background-color: rgb(254,254,254);
    height:800px;
    padding-left:10%;
    padding-right:10%;
    display:flex;
    margin-bottom:0px;
    flex-direction:column;
    background-color:#f0f0f0;
    @media (max-width: 520px) {
        height:280px;
    }
`;
const Wrapper = styled.div`
    width:95%;
    margin-left:2.5%;
    margin-top:20px;
    height:100%;
    padding-top:30px;
    .p1 {
        font-weight:bold;
        font-size:14px;
    }
    .p2{
        font-weight:bold;
        font-size:28px;
        margin-top:15px;
    }
    .p3{
        margin-bottom:40px;
        margin-top:5px;
        font-size:12px;
        color:RGB(110,110,110);
    }
    .p4{
        font-size:11px;
        margin-top:30px;
    }
    .p5{
        font-size:14px;
        margin-top:30px;
    }
    .p6{
        margin-top:2px;
        font-size:14px;
    }
    .p7{
        margin-top:40px;
        font-size:14px;
    }
    .p8{
        font-size:16px;
        margin-top:5px;
    }
`;
const Wrapper2 = styled.div`
    width:95%;
    margin-left:2.5%;
    padding-top:50px;
    height:250px;
    display:flex;
    flex-direction:row;
    div{
        height:250px;
        display:flex;
        flex-direction:column;
        flex:2.5;
        h1{
            font-size:24px;
            font-weight:bold;
            color:RGB(50,50,50);
            margin-bottom:20px;
        }
        p{
            font-size:16px;
            font-weight:thin;
            color:RGB(120,120,120);
            margin-bottom:15px;
            display:inline-block;
        }
    }
`;

const Footer = () => {

    return (
        <>
            <Container>
                <Wrapper2>
                    <div>
                        <h1>서비스</h1>
                        <a href="tel:01032942949"><p>고객센터</p></a>
                    </div>
                    <div>
                        <h1>문의</h1>
                        <a href="mailto:sxin2949@naver.com?subject=올리어스 사업 제휴"><p>사업 제휴</p></a>
                        <a href="mailto:sxin2949@naver.com?subject=올리어스 광고 문의"><p>광고 문의</p></a>
                        <a href="mailto:sxin2949@naver.com?subject=올리어스 마케팅 문의"><p>마케팅 문의</p></a>
                        <a href="mailto:sxin2949@naver.com?subject=올리어스 IR 문의"><p>IR 문의</p></a>
                    </div>
                </Wrapper2>
                <Wrapper>
                    <p className="p1">고객센터</p>
                    <p className="p2">02-2202-0615</p>
                    <p className="p8">담당자 : 010-3294-2949</p>
                    <p className="p3">평일 09:00 ~ 18:00 (주말&공휴일 제외)</p>
                    <p className="p4"><Link to="/privacy">개인정보처리방침</Link> | <Link to="/term">이용약관</Link></p>
                    <p className="p5">Company : Tigre do sud</p>
                    <p className="p6">Address : 319, Daedeok-daero, Seo-gu, Daejeon, Republic of Korea, 205Ho</p>
                    <p className="p6">CEO : incheol, SEONG</p>
                    <p className="p7">Copyright2021 Tigre do sud All rights reserved.</p>
                </Wrapper>
            </Container>
        </>
    )
};

export default Footer;