import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.6);
    z-index: 99;

    .modal {
        position: fixed;
        max-width: 600px;
        top: 30%;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 2em;
        background-color: #fff;
        box-shadow: 0 0 20px rgba(0,0,0, 0.8);

    }

    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            margin: 0;
            padding: 5px;
            border: none;
            border-radius: 4px;
            color: #fff;
            background-color: #1905d9;
            cursor: pointer;
            transition: 0.3s all;
        }
        button:active {
            transform: scale(0.95);
        }

        h5 {
            font-size: 1.6rem;
        }
    }

    .inputs {
        margin-top: 20px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        
        input {
            width: 80%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
            font-size: 1rem;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            outline: none;
        }

        .status {
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                cursor: pointer;
            }

            input {
                margin-right: 2px;
            }

            input:not(:first-child) {
                margin-left: 20px;
            }
        }

    }

    button {
        margin-top: 20px;
        padding: 8px 15px;
        border: none;
        border-radius: 5px;
        color: #fff;
        background-color: #1905d9;
        cursor: pointer;
        transition: 0.3s all;
    }
    button:active {
        transform: scale(0.95);
    }

    @media screen and (max-width: 700px){
        .modal {
            width: 350px;
        }
    }
`;