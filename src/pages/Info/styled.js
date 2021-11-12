import styled from 'styled-components';

export const InfoPageWrapper = styled.div`
    display:flex;
    width:100%;
    
    .user-list{
        width: 50%;
        
    }
    .album{
        width: 50%;
    }
    
   .title{
       margin-left: 7px;
   }
    .box{
        display:flex;
        border: 1px solid lightgray;
        border-radius: 7px;
        height: 120px;
        line-height: .1;
        color: gray;
        margin: 7px;
        padding-left: 7px;
       
        .image{
            height:100%;
            display: flex;
            align-items: center;
            img{
            height: 100px;
            border-radius: 10px;
            margin-right: 7px;
        }
        }
        .user-name{
            color: black;
        }
        .album-title{
            color: black;
            
        }
    }
    
`;