import {styled} from 'styled-components'

export const Container = styled.header`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #9883E5;
    color: #fafafa;

    div{
        display: flex;
        align-items: center;
        gap: 10px;

        input{
            padding: .6rem;
            font-size: 1.2rem;
            outline: 0;
            border: 0;
            border-radius: 6px;
        }

        nav{
            display: flex;
            gap: 10px;
        }

        li{
            list-style: none;
            font-size: 1.2rem;

            a{
                color: #fafafa;
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
`