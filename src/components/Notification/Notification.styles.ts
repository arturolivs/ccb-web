import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    position: relative;
    overflow: hidden;

    min-height: 6.25rem;
    background-color: var(--gray-0);
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

    &::before {
        content: '';
        position: absolute;
        background-color: var(--success);
        width: 0.5rem;
        height: 100%;
        top: 0;
        left: 0;
    }
`

export const MinBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 2rem;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 0.5rem;
`

export const Title = styled.span`
    font-size: larger;
    color: var(--primary-color-dark-3);
    font-weight: 700;
`

export const Message = styled.span`
    color: var(--gray-6);
`
