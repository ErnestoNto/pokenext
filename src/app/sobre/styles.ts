import {styled} from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: calc(100vh - 61.19px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-color);
`

export const ContentContainer = styled.div`
    width: 300px;
    height: 300px;
    background-color: #fafafa;
    padding: 10px;
    border: 2px solid var(--color-red);
    box-shadow: 2px 2px 6px #fafafafa;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
        color: #000;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }
`