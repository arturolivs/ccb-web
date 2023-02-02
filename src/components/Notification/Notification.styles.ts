import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0.5rem;
    position: relative;
    overflow: hidden;

    background-color: var(--gray-0);
    border-radius: 0.5rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

    svg:first-child {
        padding: 1rem !important;
    }

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

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 0.5rem;
`

export const Title = styled.h1`
    font-size: larger;
    color: var(--primary-color-dark-3);
    font-weight: 700;
`

export const Message = styled.span`
    color: var(--gray-6);
`
export const Close = styled(FontAwesomeIcon)`
    margin: 0 1rem !important;
    cursor: pointer;
`
