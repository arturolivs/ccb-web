import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Title = styled.h1``

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 0.5rem;
    overflow: hidden;
`

export const Header = styled.th`
    color: var(--primary-color-dark-2);
    padding: 1rem;
    border-bottom: 1px solid var(--primary-color-light-3);
`

export const Row = styled.tr`
    cursor: pointer;
    color: var(--gray-6);
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        color: var(--primary-color-light-1);
        font-weight: bold;
        background-color: var(--primary-color-light-4);
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);

        svg.fa-trash-can {
            color: var(--error);
        }

        svg.fa-pen {
            color: var(--primary-color-light-1);
        }
    }
`

export const Cell = styled.td`
    padding: 1rem 0.625rem;
    text-align: center;
`

export const CellIcon = styled.td`
    padding: 1rem 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
`

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width: 2rem;
    height: 2rem;
    border: 0;
    border-radius: 50%;
    padding: 0.5rem;
    transition: all 0.3s;

    font-size: 1rem;
    cursor: pointer;

    svg {
        transition: all 0.3s;
        color: var(--gray-6);
    }

    &:active {
        background-color: var(--primary-color-light-4);
        svg {
            transform: scale(110%);
        }
    }
`
