import { Container } from '@mui/material';
import styled from 'styled-components';

export const FormWrapper = styled(Container)`
    padding: 10px;
    .submit-btn{
        background-color: #e3e4e5;
        outline: none;
        border: none;
        padding: 4px 10px;
        font-weight: bold;
        border-radius: 5px;
        margin-top: 5px;
        &:hover{
            cursor: pointer;
        }
        .email{
            line-height: .2;
        }
    }
    .error{
        color: red;
    }
`;
