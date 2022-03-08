import styled from 'styled-components'

export const Title = styled.h1``

export const Table = styled.table`
    border-collapse: collapse;
    min-width: 800px;

    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

    tr:last-of-type {
        border-bottom: 2px solid var(--primary-color-light-1);
    }
`

export const TableTh = styled.th`
    background-color: var(--primary-color-light-1);
    color: #fff;
    padding: 12px 15px;
`

export const Row = styled.tr`
    cursor: pointer;
    color: var(--gray-6);
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        color: var(--primary-color-light-1);
        font-weight: bold;
        background-color: var(--primary-color-light-3);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

        svg.fa-trash-can {
            color: var(--danger);
        }
    }
`

export const Cell = styled.td`
    padding: 15px 10px;
`

export const CellIcon = styled.td`
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    column-gap: 15px;
`
