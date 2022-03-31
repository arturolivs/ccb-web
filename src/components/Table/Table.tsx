import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Church from '../../types/Church'

import * as S from './Table.styles'

interface Column {
    id: string
    label: string
}

interface TableProps {
    columns: Column[]
    data: Church[]
}

const Table = ({ columns, data }: TableProps) => {
    return (
        <S.Table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <S.Header id={column.id}>{column.label}</S.Header>
                    ))}

                    <S.Header>Ações</S.Header>
                </tr>
            </thead>

            <tbody>
                {data.map((item) => {
                    return (
                        <S.Row id={item.id}>
                            {Object.values(item).map(
                                (value) =>
                                    item.id !== value && (
                                        <S.Cell key={value}>{value}</S.Cell>
                                    )
                            )}
                            <S.CellIcon>
                                <S.Button to="/igrejas/edit">
                                    <FontAwesomeIcon icon={faPen} />
                                </S.Button>

                                <S.Button to="/edit">
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </S.Button>
                            </S.CellIcon>
                        </S.Row>
                    )
                })}
            </tbody>
        </S.Table>
    )
}

export default Table
