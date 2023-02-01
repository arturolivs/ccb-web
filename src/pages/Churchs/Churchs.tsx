import React from 'react'

import ChurchList from './List'

import * as S from './Churchs.styles'
import Notification from '../../components/Notification'

const Churths = () => {
    return (
        <S.Churths>
            <S.Title>Igrejas</S.Title>

            <S.Filter />

            <ChurchList />
            <Notification />
        </S.Churths>
    )
}

export default Churths
