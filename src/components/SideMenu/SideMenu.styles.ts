import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 250px;
    height: 100vh;
    background: linear-gradient(
        180deg,
        var(--primary-color-light-1) 0%,
        var(--primary-color) 100%
    );
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`
export const Title = styled.span`
    font-weight: bold;
    font-size: 2rem;
    line-height: 5rem;
    color: var(--primary-color-light-4);
`

export const Navigation = styled.nav``

export const List = styled.ul``

export const ListItem = styled.li`
    width: 100%;
    height: 60px;
    list-style: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

    &:hover {
        background: var(--primary-color-light-4);

        a {
            color: var(--primary-color-dark-1);
        }

        a::after {
            content: '';
            position: absolute;
            right: 0;
            bottom: -50px;
            width: 50px;
            height: 50px;
            background: transparent;
            border-radius: 50%;
            box-shadow: 35px -35px 0 10px var(--white);
            pointer-events: none;
        }
    }
`

export const Item = styled(Link)`
    width: 100%;
    height: 100%;
    padding-left: 15px;
    display: flex;
    column-gap: 5px;
    align-items: center;
    color: var(--primary-color-light-4);
`

export const icon = styled.span``

export const title = styled.span``
