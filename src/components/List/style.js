import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;

    header {
        background-color: #fff;
        width: 100%;
        height: 60px;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            color: gray;
            font-size: 0.8rem;
        }
        
        button {
            background-color: #1905d9;
            border: none;
            border-radius: 12px;
            width: 35px;
            height: 35px;
            cursor: pointer;
            transition: 0.3s all;
        }

        button:hover {
            transform: scale(1.1);
        }

    }

    & + div {
        border-left: 1px solid #ddd;
    }

    @media screen and (max-width: 599px){
        width: 100%;
    }
`;
