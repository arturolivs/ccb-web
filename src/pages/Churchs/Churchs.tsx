import React from 'react'

import ChurchList from './List'

import * as S from './Churchs.styles'

const Churths = () => {
    return (
        <S.Churths>
            <S.Title>Igrejas</S.Title>

            <S.Filter />

            <ChurchList />
        </S.Churths>
    )
}

export default Churths
