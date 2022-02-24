import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100%;
`

export const Navigation = styled.nav`
    position: fixed;
    width: 300px;
    height: 100%;
    background: var(--primary-color-dark-1);
    border-left: 10px solid var(--primary-dark-1);
    transition: 0.5s;
    overflow: hidden;`

export const List = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`

export const ListItem = styled.li`
    position: relative;
    width: 100%;
    list-style: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

    &:hover {
        background: var(--primary-light-4);
    }

    &:nth-child(1) {
    margin-bottom: 40px;
    pointer-events: none;
}

`

export const Link = styled.a`
    position: relative;
    width: 100%;
    display: flex;
    column-gap: 5px;
    text-decoration: none;
    color: var(--primary-light-4);

`

export const icon = styled.span``

export const title = styled.span``