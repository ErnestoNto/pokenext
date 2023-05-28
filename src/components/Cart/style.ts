import { styled } from "styled-components";

export const Container = styled.div`
    width: 250px;
    height: 400px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 6px;
    border: 3px solid var(--color-red);
    box-shadow: 2px 2px 5px #d4d4d8;

    img{
        width: 80%;
    }

    span{
        font-size: 1.2rem;
        color: var(--color-red);
    }

    button{
        width: 80%;
        border: 0;
        border-radius: 5px;
        padding: .7rem;
        font-size: 1.2rem;
        background-color: var(--color-red);
        color: #fafafa;
        cursor: pointer;

        &:hover{
            opacity: .8;
        }
    }
`