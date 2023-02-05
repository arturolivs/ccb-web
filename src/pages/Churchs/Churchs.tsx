import React from 'react'

import ChurchList from './List'

import * as S from './Churchs.styles'
import { useNotification } from '../../hooks/useNotifications'

const Churths = () => {
    const { success, error } = useNotification()
    return (
        <S.Churths>
            <S.BT onClick={() => success('Sucesso', 'mensagem sucesso !!')}>
                notificação sucesso
            </S.BT>

            <S.BT onClick={() => error('Erro', 'mensagem erro !!')}>
                notificação erro
            </S.BT>
            <S.Title>Igrejas</S.Title>

            <S.Filter />

            <ChurchList />
        </S.Churths>
    )
}

export default Churths
