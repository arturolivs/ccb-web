import styled from 'styled-components'

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

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`
