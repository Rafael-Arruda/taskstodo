import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 15px auto;
    padding: 15px 5px;
    border-radius: 2px;
    border-top: 12px solid #ddd;
    background-color: #fff;
    box-shadow: -1px 1px 4px #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s all;
    position: relative;

    :hover {
        transform: scale(1.03);
    }

    h4 {
        font-size: 0.9rem;
        font-weight: 600;
    }

    .area-buttons {
        display: flex;
        align-items: center;

        .btn-up {
            background-color: transparent;
            padding: 2px;
        }

        button {
            margin-left: 5px;
            padding: 2px;
            background-color: #eee;
            border-radius: 5px;
            border: none;
            cursor: pointer;
        }
    }

`;

export const Label = styled.span`
    width: 10px;
    height: 10px;
    position: absolute;
    top: -9%;
    left: 4%;

    ${props => props.status === 'do' && css`
        background-color: red;
    `}
    ${props => props.status === 'doing' && css`
        background-color: blue;
    `}
    ${props => props.status === 'done' && css`
        background-color: green;
    `}
`;