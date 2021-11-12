import styled from "styled-components";

export const HomeWrapper = styled.div`
    display: flex;
    .info {
        display: flex;
        width: 30%;
        line-height: .5;
        img {
            position: relative;
            top: 12px;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            margin-right: 10px;
            
        }
        .name{
            font-size:20px;
            font-weight: bolder;
        }
        .job-title{
            font-size:15px;
            font-weight: bold;
        }
    }

    .about {
        width:70%;
        .about-title{
            font-size:23px;
            font-weight: bold;
            line-height: .4;
        }
    }
`;
