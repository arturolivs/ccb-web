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

            <Notification
                type="success"
                title="Mensagem sucesso"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut"
            />

            <Notification
                type="error"
                title="Mensagem erro"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut"
            />
        </S.Churths>
    )
}

export default Churths
