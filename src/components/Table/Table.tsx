import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Church from '../../types/Church'

import * as S from './Table.styles'
import usePagination from '../../hooks/usePagination'
import Pagination from '../Pagination'

const PER_PAGE = 2

interface Column {
    id: string
    label: string
}

interface TableProps {
    columns: Column[]
    data: Church[]
}

const Table = ({ columns, data }: TableProps) => {
    const [page, setPage] = React.useState(1)

    const table = usePagination<Church>(data, PER_PAGE)

    const handleNavigate = (p: number) => {
        setPage(p)
        table.jump(p)
    }
    console.log(table)
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
                {table.currentData().map((item) => {
                    return (
                        <S.Row id={item.id}>
                            {Object.values(item).map(
                                (value) =>
                                    item.id !== value && (
                                        <S.Cell key={value}>{value}</S.Cell>
                                    )
                            )}

                            <S.CellIcon>
                                <S.Button to="/igrejas/editar">
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

            <tfoot>
                <Pagination
                    count={table.maxPage}
                    currentPage={table.currentPage}
                    handleNavigate={handleNavigate}
                />
            </tfoot>
        </S.Table>
    )
}

export default Table
