import React from 'react'
import { range } from 'lodash'

import * as S from './Pagination.styles'

interface PaginationProps {
    count: number
    currentPage: number
    handleNavigate: (p: number) => void
}

const Pagination = ({
    currentPage,
    count,
    handleNavigate,
}: PaginationProps) => {
    const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
        handleNavigate(Number(e.currentTarget.innerText))
    }

    return (
        <S.Pagination>
            {range(count).map((p: number) => (
                <S.Page>
                    <S.Number onClick={handleClick}>{p + 1}</S.Number>
                </S.Page>
            ))}
        </S.Pagination>
    )
}

export default Pagination
