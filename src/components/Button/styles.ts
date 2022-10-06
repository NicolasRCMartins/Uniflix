import styled from "styled-components";

export const Text = styled.span`
    font-weight: 700;
    font-size: 16px;
    color: white;
`

export const Container = styled.button`
    width: 100%;
    height: 56px;
    border-radius: 24px;
    background-color: transparent;
    color: white;
    border: 3px solid #fff;
    transition: 0.2s;

    :hover {
        background: white;
        ${Text} {
            color: black;
        }
    }
`
